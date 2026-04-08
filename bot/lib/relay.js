// Core relay logic: post a structured question to the relay channel,
// poll for the Notion agent's response, clean it, return it.

import { randomUUID } from 'node:crypto';
import { getRelayConfig } from './relay-config.js';
import {
  createJob,
  updateJob,
  hasActiveJobForEvent,
} from './relay-store.js';
import { postToSlack, fetchThreadMessages } from './slack.js';

const RELAY_TIMEOUT_MSG =
  "i couldn't get a grounded answer from the knowledge base in time. " +
  'try again in a bit, or ask in the relevant slack channel directly.';

// Intents that skip the relay entirely (answered locally).
const LOCAL_ONLY_INTENTS = new Set(['banter', 'bot_meta']);

// ---- public entry point ----

export async function executeRelay({
  event,
  cleanedText,
  threadContext,
  intent,
}) {
  const config = getRelayConfig();
  if (!config.enabled) return null;

  // Some intents are better answered locally.
  if (LOCAL_ONLY_INTENTS.has(intent)) return null;

  // Never relay messages originating from the relay channel itself.
  if (event.channel === config.channelId) return null;

  const eventKey = `${event.channel}:${event.ts}:${event.user || ''}`;
  if (hasActiveJobForEvent(eventKey)) {
    console.log(`relay: duplicate skipped for ${eventKey}`);
    return { skipped: true };
  }

  const requestId = randomUUID();
  createJob(requestId, eventKey, event);

  // ---- post relay request ----

  const relayText = formatRelayRequest({
    requestId,
    event,
    cleanedText,
    threadContext,
    config,
  });

  log(config, `posting request ${requestId}`);

  const postResult = await postToSlack({
    channel: config.channelId,
    text: relayText,
  });

  if (!postResult.ok) {
    updateJob(requestId, {
      status: 'failed',
      error: `post failed: ${postResult.error}`,
    });
    console.error(`relay: post failed for ${requestId}: ${postResult.error}`);
    return { requestId, answer: RELAY_TIMEOUT_MSG, fromRelay: false };
  }

  const relayTs = postResult.ts;
  updateJob(requestId, { status: 'relayed', relayMessageTs: relayTs });
  log(config, `request ${requestId} posted as ${relayTs}, polling...`);

  // ---- poll for response ----

  const response = await pollForResponse(config, requestId, relayTs);

  if (!response) {
    updateJob(requestId, { status: 'timeout' });
    console.log(`relay: timeout for ${requestId}`);
    return { requestId, answer: RELAY_TIMEOUT_MSG, fromRelay: false };
  }

  updateJob(requestId, {
    status: 'answered',
    matchedResponseTs: response.ts,
  });
  log(config, `matched response for ${requestId} at ts=${response.ts}`);

  const cleanedAnswer = cleanRelayResponse(response.text, requestId);
  return { requestId, answer: cleanedAnswer, fromRelay: true };
}

// ---- relay message formatting ----

export function formatRelayRequest({
  requestId,
  event,
  cleanedText,
  threadContext,
  config,
}) {
  const lines = [
    config?.requestPrefix || '[CLAUDESINGTON_RELAY_REQUEST]',
    `request_id: ${requestId}`,
    `original_channel: ${event.channel}`,
    `original_thread_ts: ${event.thread_ts || event.ts}`,
    `original_message_ts: ${event.ts}`,
    `original_user: ${event.user || 'unknown'}`,
    '',
    'question:',
    cleanedText,
  ];

  if (threadContext) {
    lines.push('', 'context:', threadContext.slice(0, 500));
  }

  lines.push(
    '',
    'instructions:',
    '- Answer only from grounded Braintrust Notion / Slack-connected context',
    '- Keep the answer under 6 sentences',
    '- If uncertain, say so plainly',
    `- End your reply with: REQUEST_ID=${requestId}`,
  );

  return lines.join('\n');
}

// ---- polling ----

async function pollForResponse(config, requestId, relayTs) {
  const start = Date.now();
  const selfBotUserId = process.env.SLACK_BOT_USER_ID || '';
  const allowedIds = config.botUserIds; // empty = accept anyone

  while (Date.now() - start < config.timeoutMs) {
    await sleep(config.pollIntervalMs);

    const messages = await fetchThreadMessages(config.channelId, relayTs);

    for (const msg of messages) {
      // Skip the relay request itself.
      if (msg.ts === relayTs) continue;

      // Skip our own replies (prevent self-loop).
      if (selfBotUserId && msg.user === selfBotUserId) continue;

      // If an allowlist is set, only accept from those IDs.
      if (allowedIds.length > 0) {
        const id = msg.bot_id || msg.user || '';
        if (!allowedIds.includes(id)) continue;
      }

      // Prefer REQUEST_ID match (most reliable).
      if (msg.text && msg.text.includes(`REQUEST_ID=${requestId}`)) {
        return msg;
      }

      // Fallback: any substantive reply from an accepted responder.
      if (msg.text && msg.text.length > 10) {
        return msg;
      }
    }
  }

  return null;
}

// ---- response cleaning ----

export function cleanRelayResponse(text, requestId) {
  if (!text) return "i got a response but couldn't parse it. try asking again.";

  let cleaned = text;

  // Strip REQUEST_ID line/trailer.
  cleaned = cleaned.replace(
    new RegExp(`\\s*REQUEST_ID\\s*=\\s*${requestId}\\s*`, 'gi'),
    '',
  );

  // Strip relay markers the agent might echo back.
  cleaned = cleaned.replace(/\[CLAUDESINGTON_RELAY_RESPONSE\]/gi, '');
  cleaned = cleaned.replace(/\[CLAUDESINGTON_RELAY_REQUEST\]/gi, '');

  // Strip structured metadata labels from the Notion agent output.
  // "Answer: ..." -> just the answer text
  cleaned = cleaned.replace(/^Answer:\s*/im, '');
  // "Confidence: high|medium|low" line
  cleaned = cleaned.replace(/^Confidence:\s*(high|medium|low)\s*$/gim, '');
  // "Sources used: ..." line
  cleaned = cleaned.replace(/^Sources\s+used:\s*.+$/gim, '');
  // "Source: ..." line (alternate format)
  cleaned = cleaned.replace(/^Source:\s*.+$/gim, '');

  // Clean up Slack emoji shortcodes -> strip the colons so they render
  // e.g. ":mag:" stays as-is (Slack renders these natively)

  // Collapse excessive blank lines and trim.
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n').trim();

  return cleaned || "i got a response but couldn't parse it. try asking again.";
}

// ---- helpers ----

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(config, msg) {
  if (config.debugLogging) console.log(`relay: ${msg}`);
}
