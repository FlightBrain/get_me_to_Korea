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
import { buildSystemPrompt } from '../prompts/system.js';
import { callClaude } from '../lib/claude.js';

export const config = {
  api: { bodyParser: false },
};

async function processEvent(body) {
  const event = body?.event;
  if (!event || !event.text) return;

  // Guard: never reply to bot messages (prevents loops)
  if (event.bot_id || event.subtype === 'bot_message') return;

  // Guard: deduplicate. Slack often sends both app_mention and message
  // events for the same @mention, and retries on slow ACKs.
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

  // Build capability summary
  const caps = getCapabilities();
  const capabilities = capabilitySummary(caps);

  // Fetch context sources in parallel
  const [notionContext, calendarContext] = await Promise.all([
    fetchContext(),
    fetchCalendarContext(),
  ]);

  // Build prompt with intent-specific rules
  const systemPrompt = buildSystemPrompt({
    notionContext,
    calendarContext,
    capabilities,
    intent,
  });

  // Call Claude
  const reply = await callClaude(systemPrompt, cleanedText);
  if (!reply || reply === '[SKIP]') return;

  // Always reply in a thread for direct mentions. Inferred posts to channel.
  await postToSlack({
    channel: event.channel,
    text: reply,
    thread_ts: trigger === 'direct' ? event.ts : undefined,
  });

  console.log(`replied: trigger=${trigger} intent=${intent} channel=${event.channel}`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // Slack retries when it doesn't get a fast 200. If we see a retry
  // header, ACK and skip, the original invocation is still processing.
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

  // URL verification handshake (no signature check needed)
  if (body.type === 'url_verification') {
    return res.status(200).json({ challenge: body.challenge });
  }

  // Verify request came from Slack
  if (!verifySlackSignature(req, rawBody)) {
    return res.status(401).end();
  }

  // ACK immediately, process in background
  waitUntil(processEvent(body));
  return res.status(200).end();
}
