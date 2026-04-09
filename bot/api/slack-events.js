import { waitUntil } from '@vercel/functions';
import getRawBody from 'raw-body';
import { verifySlackSignature, postToSlack } from '../lib/slack.js';
import { detectTrigger } from '../lib/trigger.js';
import { isDuplicate } from '../lib/dedup.js';
import { cleanSlackText } from '../lib/parse.js';
import { classifyIntent } from '../lib/intent.js';
import { getCapabilities, capabilitySummary } from '../lib/capabilities.js';
import { fetchContext } from '../lib/context.js';
import { fetchCalendarContext } from '../lib/calendar.js';
import { buildThreadContext } from '../lib/thread-context.js';
import { buildSystemPrompt } from '../prompts/system.js';
import { callClaude } from '../lib/claude.js';
import { applyGuardrails } from '../lib/guardrails.js';
import { executeRelay } from '../lib/relay.js';
import { updateJob } from '../lib/relay-store.js';
import { handleReaction } from '../lib/feedback.js';
import { flush } from 'braintrust';

export const config = {
  api: { bodyParser: false },
};

async function processEvent(body) {
  const event = body?.event;
  if (!event) return;

  // Handle reaction events for feedback tracking
  if (event.type === 'reaction_added') {
    console.log(`reaction: :${event.reaction}: on ${event.item?.channel}:${event.item?.ts}`);
    await handleReaction(event);
    return;
  }

  if (!event.text) return;

  // Guard: never reply to bot messages (prevents loops)
  if (event.bot_id || event.subtype === 'bot_message') return;

  // --- DUPLICATE-EVENT FIX ---
  const botUserId = process.env.SLACK_BOT_USER_ID || '';
  if (
    event.type === 'message' &&
    botUserId &&
    new RegExp(`<@${botUserId}>`).test(event.text)
  ) {
    console.log('skip: message event deferred to app_mention handler');
    return;
  }

  // Guard: deduplicate within warm instances
  if (isDuplicate(event)) {
    console.log(`dedup: skipping duplicate event ${event.channel}:${event.ts}`);
    return;
  }

  // Only respond to direct mentions or inferred questions
  const trigger = detectTrigger(event.text);
  if (!trigger) return;

  // Clean Slack markup before further processing
  const cleanedText = cleanSlackText(event.text);
  if (!cleanedText) return;

  // Classify intent for behavioral constraints
  const intent = classifyIntent(cleanedText);

  console.log(
    `event: trigger=${trigger} intent=${intent} channel=${event.channel}`,
  );

  // Thread routing for the final reply
  const replyThreadTs =
    event.thread_ts || (trigger === 'direct' ? event.ts : undefined);

  // --- RELAY PATH ---
  const threadContext = await buildThreadContext(event);

  let relayResult = null;
  try {
    relayResult = await executeRelay({
      event,
      cleanedText,
      threadContext,
      intent,
    });
  } catch (e) {
    console.error(`relay error: ${e.message}`);
  }

  if (relayResult) {
    if (relayResult.skipped) return;

    const safeAnswer = applyGuardrails(relayResult.answer);

    const posted = await postToSlack({
      channel: event.channel,
      text: safeAnswer,
      thread_ts: replyThreadTs,
    });

    if (relayResult.requestId) {
      updateJob(relayResult.requestId, {
        status: relayResult.fromRelay ? 'complete' : 'timeout',
        finalPostTs: posted.ts || null,
      });
    }

    console.log(
      `replied (relay): fromRelay=${relayResult.fromRelay} channel=${event.channel}`,
    );
    return;
  }

  // --- LOCAL CLAUDE PATH (relay disabled or skipped for this intent) ---

  const caps = getCapabilities();
  const capabilities = capabilitySummary(caps);

  const [notionContext, calendarContext] = await Promise.all([
    fetchContext(),
    fetchCalendarContext(),
  ]);

  const systemPrompt = buildSystemPrompt({
    notionContext,
    calendarContext,
    capabilities,
    intent,
    threadContext,
  });

  const result = await callClaude(systemPrompt, cleanedText);
  if (!result?.reply || result.reply === '[SKIP]') return;

  const posted = await postToSlack({
    channel: event.channel,
    text: result.reply,
    thread_ts: replyThreadTs,
    metadata: result.spanId
      ? { event_type: 'braintrust_span', event_payload: { span_id: result.spanId } }
      : undefined,
  });

  console.log(
    `replied (local): trigger=${trigger} intent=${intent} channel=${event.channel}`,
  );
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  if (req.headers['x-slack-retry-num']) {
    console.log(`ignoring slack retry #${req.headers['x-slack-retry-num']}`);
    return res.status(200).end();
  }

  const rawBody = await getRawBody(req, { encoding: 'utf-8' });
  let body;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return res.status(400).end();
  }

  if (body.type === 'url_verification') {
    return res.status(200).json({ challenge: body.challenge });
  }

  if (!verifySlackSignature(req, rawBody)) {
    return res.status(401).end();
  }

  waitUntil(processEvent(body).finally(() => flush()));
  return res.status(200).end();
}
