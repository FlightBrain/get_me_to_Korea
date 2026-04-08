import { fetchContext } from '../lib/context.js';
import { buildSystemPrompt } from '../prompts/system.js';
import { callClaude } from '../lib/claude.js';
import { postToSlack } from '../lib/slack.js';

export default async function handler(req, res) {
  // Only allow Vercel cron (protected by secret)
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).end();
  }

  const context = await fetchContext();
  const systemPrompt = buildSystemPrompt(context);

  const prompt = `its end of day. look at your notion context and drop a quick 1-2 sentence update in the channel about what moved today or whats coming up tomorrow. casual. like you're just checking in with the crew. no formal report. if nothing notable happened, respond with exactly: [SKIP]`;

  const message = await callClaude(systemPrompt, prompt, 'chime-in');
  if (!message || message === '[SKIP]') return res.status(200).end();

  await postToSlack({
    channel: process.env.SLACK_CHANNEL_ID,
    text: message,
  });

  return res.status(200).end();
}
