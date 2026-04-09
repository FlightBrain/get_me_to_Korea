import crypto from 'crypto';
import { logTrace } from './braintrust.js';

const POSITIVE = new Set(['+1', 'thumbsup', 'white_check_mark', 'heavy_check_mark', 'heart']);
const NEGATIVE = new Set(['-1', 'thumbsdown', 'x', 'no_entry_sign']);

function traceId(channel, ts) {
  const hash = crypto.createHash('sha256').update(`${channel}:${ts}`).digest('hex');
  return [
    hash.slice(0, 8),
    hash.slice(8, 12),
    '4' + hash.slice(13, 16),
    '8' + hash.slice(17, 20),
    hash.slice(20, 32),
  ].join('-');
}

const slackHeaders = () => ({
  Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
});

// Fetch a single message by channel + ts
async function getMessage(channel, ts) {
  try {
    const params = new URLSearchParams({ channel, latest: ts, limit: '1', inclusive: 'true' });
    const res = await fetch(`https://slack.com/api/conversations.history?${params}`, {
      headers: slackHeaders(),
    });
    const data = await res.json();
    return data.ok ? data.messages?.[0] || null : null;
  } catch {
    return null;
  }
}

// Find the user question that triggered a bot reply
// Bot replies are threaded: thread_ts = the user's original message ts
async function findUserQuestion(channel, botMsg) {
  // If bot reply is in a thread, the thread parent is the user's question
  if (botMsg?.thread_ts && botMsg.thread_ts !== botMsg.ts) {
    const parent = await getMessage(channel, botMsg.thread_ts);
    if (parent?.text) return parent.text;
  }

  // Fallback: get the message right before the bot reply in the channel
  try {
    const params = new URLSearchParams({
      channel,
      latest: botMsg?.ts || '0',
      limit: '2',
      inclusive: 'true',
    });
    const res = await fetch(`https://slack.com/api/conversations.history?${params}`, {
      headers: slackHeaders(),
    });
    const data = await res.json();
    if (!data.ok) return null;
    const msgs = data.messages || [];
    const userMsg = msgs.find(m => m.ts !== botMsg?.ts && !m.bot_id);
    return userMsg?.text || null;
  } catch {
    return null;
  }
}

export async function handleReaction(event) {
  try {
    const { reaction, item, user } = event;
    if (item?.type !== 'message') return;

    const isPositive = POSITIVE.has(reaction);
    const isNegative = NEGATIVE.has(reaction);
    if (!isPositive && !isNegative) return;

    const id = traceId(item.channel, item.ts);

    // Fetch bot reply, then find user question
    const botMsg = await getMessage(item.channel, item.ts);
    const userQuestion = await findUserQuestion(item.channel, botMsg);

    const result = await logTrace({
      id,
      input: userQuestion || '[could not fetch question]',
      output: botMsg?.text || '[could not fetch reply]',
      scores: { thumbs: isPositive ? 1 : 0 },
      metadata: {
        slack_user: user,
        reaction,
        channel: item.channel,
        messageTs: item.ts,
        threadTs: botMsg?.thread_ts || null,
      },
      tags: ['slack-bot'],
    });

    console.log(`bt: ${isPositive ? '+' : '-'} :${reaction}: q="${(userQuestion || '').slice(0, 40)}" -> ${id}`, result?.row_ids ? 'ok' : 'failed');
  } catch (e) {
    console.error(`bt feedback error: ${e.message}`);
  }
}
