import crypto from 'crypto';
import { logger } from './claude.js';

const POSITIVE = new Set(['+1', 'thumbsup', 'white_check_mark', 'heavy_check_mark', 'heart']);
const NEGATIVE = new Set(['-1', 'thumbsdown', 'x', 'no_entry_sign']);

// Derive a deterministic UUID from channel + message ts
// Same input always produces the same ID
export function spanIdFromMessage(channel, ts) {
  const hash = crypto.createHash('sha256').update(`${channel}:${ts}`).digest('hex');
  // Format as UUID v4-like: xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx
  return [
    hash.slice(0, 8),
    hash.slice(8, 12),
    '4' + hash.slice(13, 16),
    '8' + hash.slice(17, 20),
    hash.slice(20, 32),
  ].join('-');
}

// Call after posting a bot reply to log the trace
export function logBotReply({ channel, messageTs, input, output, intent, path, spanId }) {
  const id = spanIdFromMessage(channel, messageTs);
  logger.log({
    id,
    input,
    output,
    metadata: { channel, messageTs, intent, path, originalSpanId: spanId },
    tags: ['slack-bot', path || 'local'],
  });
  console.log(`feedback: logged trace ${id} for ${channel}:${messageTs}`);
}

// Call when a reaction event arrives
export function handleReaction(event) {
  try {
    const { reaction, item, user } = event;
    if (item?.type !== 'message') return;

    const isPositive = POSITIVE.has(reaction);
    const isNegative = NEGATIVE.has(reaction);
    if (!isPositive && !isNegative) return;

    const id = spanIdFromMessage(item.channel, item.ts);

    logger.logFeedback({
      id,
      scores: { thumbs: isPositive ? 1 : 0 },
      comment: `Slack reaction :${reaction}: from ${user}`,
      metadata: { slack_user: user, reaction, channel: item.channel },
    });

    console.log(`feedback: ${isPositive ? 'positive' : 'negative'} :${reaction}: -> ${id}`);
  } catch (e) {
    console.error(`feedback error: ${e.message}`);
  }
}
