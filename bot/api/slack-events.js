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

export const config = {
  api: { bodyParser: false },
};

async function processEvent(body) {
  const event = body?.event;
  if (!event || !event.text) return;

  // Guard: never reply to bot messages (prevents loops)
  if (event.bot_id || event.subtype === 'bot_message') return;

  // --- DUPLICATE-EVENT FIX ---
  // When someone @mentions the bot, Slack fires BOTH an app_mention event
  // AND a message event.  These often land on separate serverless instances
  // so in-memory dedup cannot catch both.  Fix: if this is a plain
  // "message" event whose text contains the bot's direct <@ID> mention,
  // skip it and let the app_mention event handle it instead.
  const botUserId = process.env.SLACK_BOT_USER_ID || '';
  if (
    event.type === 'message' &&
    botUserId &&
    new RegExp(`<@${botUserId}>`).test(event.text)
  ) {
    console.log('skip: message event deferred to app_mention handler');
    return;
  }

  // Guard: deduplicate within warm instances (retries / repeated deliveries)
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

  // Fetch all context sources in parallel
  const [notionContext, calendarContext, threadContext] = await Promise.all([
    fetchContext(),
    fetchCalendarContext(),
    buildThreadContext(event),
  ]);

  // Build prompt with intent-specific rules and conversation history
  const systemPrompt = buildSystemPrompt({
    notionContext,
    calendarContext,
    capabilities,
    intent,
    threadContext,
  });

  // Call Claude
  const reply = await callClaude(systemPrompt, cleanedText);
  if (!reply || reply === '[SKIP]') return;

  // Thread routing:
  //   - already in a thread -> reply in same thread
  //   - direct mention at top level -> start a thread on that message
  //   - inferred trigger at top level -> post to channel (no thread)
  const replyThreadTs =
    event.thread_ts || (trigger === 'direct' ? event.ts : undefined);

  await postToSlack({
    channel: event.channel,
    text: reply,
    thread_ts: replyThreadTs,
  });

  console.log(
    `replied: trigger=${trigger} intent=${intent} channel=${event.channel} thread=${!!replyThreadTs}`,
  );
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // Slack retries when it doesn't get a fast 200.  If we see a retry
  // header, ACK and skip; the original invocation is still processing.
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
