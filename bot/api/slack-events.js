import { waitUntil } from '@vercel/functions';
import getRawBody from 'raw-body';
import { verifySlackSignature, postToSlack } from '../lib/slack.js';
import { detectTrigger } from '../lib/trigger.js';
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

  // Hard guard: never reply to bot messages (prevents infinite loops)
  if (event.bot_id || event.subtype === 'bot_message') return;

  // Only respond to direct mentions or inferred questions
  const trigger = detectTrigger(event.text);
  if (!trigger) return;

  // Fetch Notion + calendar context in parallel
  const [notionContext, calendarContext] = await Promise.all([
    fetchContext(),
    fetchCalendarContext(),
  ]);
  const systemPrompt = buildSystemPrompt(notionContext, calendarContext);

  // Call Claude
  const reply = await callClaude(systemPrompt, event.text, trigger);
  if (!reply || reply === '[SKIP]') return;

  // Direct mentions get a thread reply. Inferred posts to channel.
  await postToSlack({
    channel: event.channel,
    text: reply,
    thread_ts: trigger === 'direct' ? event.ts : undefined,
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // Raw body required for Slack signature verification
  const rawBody = await getRawBody(req, { encoding: 'utf-8' });
  let body;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return res.status(400).end();
  }

  // URL verification must happen before signature check (Slack handshake during setup)
  if (body.type === 'url_verification') {
    return res.status(200).json({ challenge: body.challenge });
  }

  // Verify all other requests came from Slack
  if (!verifySlackSignature(req, rawBody)) {
    return res.status(401).end();
  }

  // ACK immediately, then process in the background.
  // waitUntil keeps the function alive until the async work finishes.
  waitUntil(processEvent(body));
  return res.status(200).end();
}
