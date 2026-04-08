import { waitUntil } from '@vercel/functions';
import getRawBody from 'raw-body';
import { verifySlackSignature, postToSlack } from '../lib/slack.js';
import { detectTrigger } from '../lib/trigger.js';
import { fetchContext } from '../lib/context.js';
import { buildSystemPrompt } from '../prompts/system.js';
import { callClaude } from '../lib/claude.js';
import { shouldChimeIn } from '../lib/chime-rate.js';

export const config = {
  api: { bodyParser: false },
};

async function processEvent(body) {
  const event = body?.event;
  if (!event || !event.text) return;

  // Hard guard: never reply to bot messages (prevents infinite loops)
  if (event.bot_id || event.subtype === 'bot_message') return;

  // Detect what kind of trigger this is
  const trigger = detectTrigger(event.text);
  if (!trigger) return;

  // Chime-in goes through 3 gates (probabilistic + rate limit + Claude judgment)
  if (trigger === 'chime-in') {
    if (!shouldChimeIn()) return;
  }

  // Fetch live Notion context
  const context = await fetchContext();
  const systemPrompt = buildSystemPrompt(context);

  // Call Claude
  const reply = await callClaude(systemPrompt, event.text, trigger);
  if (!reply || reply === '[SKIP]') return;

  // Direct mentions get a thread reply. Inferred + chime-ins post to channel.
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
