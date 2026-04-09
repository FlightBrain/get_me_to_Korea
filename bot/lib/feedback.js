import crypto from 'crypto';
import { logTrace } from './braintrust.js';
import { fetchMessage } from './slack.js';

const POSITIVE = new Set(['+1', 'thumbsup', 'white_check_mark', 'heavy_check_mark', 'heart']);
const NEGATIVE = new Set(['-1', 'thumbsdown', 'x', 'no_entry_sign']);

// Deterministic ID from channel + message ts
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

// Fetch the user's question that triggered the bot reply
async function fetchUserQuestion(channel, botMessageTs) {
  // Get 2 messages up to and including the bot reply
  try {
    const params = new URLSearchParams({
      channel,
      latest: botMessageTs,
      limit: '2',
      inclusive: 'true',
    });
    const res = await fetch(
      `https://slack.com/api/conversations.history?${params}`,
      { headers: { Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}` } },
    );
    const data = await res.json();
    if (!data.ok) return null;
    // messages[0] is the bot reply, messages[1] is the user question before it
    const msgs = data.messages || [];
    const userMsg = msgs.find(m => m.ts !== botMessageTs && !m.bot_id);
    return userMsg?.text || null;
  } catch {
    return null;
  }
}

// Handle reaction: log full trace + feedback to Braintrust in one call
export async function handleReaction(event) {
  try {
    const { reaction, item, user } = event;
    if (item?.type !== 'message') return;

    const isPositive = POSITIVE.has(reaction);
    const isNegative = NEGATIVE.has(reaction);
    if (!isPositive && !isNegative) return;

    const id = traceId(item.channel, item.ts);

    // Fetch bot reply text and user question in parallel
    const [botMsg, userQuestion] = await Promise.all([
      fetchMessage(item.channel, item.ts),
      fetchUserQuestion(item.channel, item.ts),
    ]);

    const botText = botMsg?.text || null;

    const result = await logTrace({
      id,
      input: userQuestion,
      output: botText,
      scores: { thumbs: isPositive ? 1 : 0 },
      metadata: {
        slack_user: user,
        reaction,
        channel: item.channel,
        messageTs: item.ts,
        _comment: `Slack :${reaction}: from ${user}`,
      },
      tags: ['slack-bot'],
    });

    console.log(`bt: ${isPositive ? '+' : '-'} :${reaction}: trace=${id}`, result?.row_ids ? 'ok' : 'failed');
  } catch (e) {
    console.error(`bt feedback error: ${e.message}`);
  }
}
