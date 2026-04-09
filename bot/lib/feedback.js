import crypto from 'crypto';
import { logTrace, logFeedback } from './braintrust.js';

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

// Log a bot reply to Braintrust
export async function logBotReply({ channel, messageTs, input, output, intent, path, model, tokens, latencyMs }) {
  const id = traceId(channel, messageTs);
  const result = await logTrace({
    id,
    input,
    output,
    metadata: { channel, messageTs, intent, path, model, tokens, latencyMs },
    tags: ['slack-bot', path || 'local'],
  });
  console.log(`bt: logged trace ${id} for ${channel}:${messageTs}`, result ? 'ok' : 'failed');
}

// Log feedback from a Slack reaction
export async function handleReaction(event) {
  try {
    const { reaction, item, user } = event;
    if (item?.type !== 'message') return;

    const isPositive = POSITIVE.has(reaction);
    const isNegative = NEGATIVE.has(reaction);
    if (!isPositive && !isNegative) return;

    const id = traceId(item.channel, item.ts);
    const result = await logFeedback({
      id,
      scores: { thumbs: isPositive ? 1 : 0 },
      comment: `Slack :${reaction}: from ${user}`,
      metadata: { slack_user: user, reaction, channel: item.channel },
    });
    console.log(`bt: feedback ${isPositive ? '+' : '-'} :${reaction}: -> ${id}`, result ? 'ok' : 'failed');
  } catch (e) {
    console.error(`bt feedback error: ${e.message}`);
  }
}
