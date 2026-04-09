import { logger } from './claude.js';

// Maps "channel:messageTs" -> braintrust spanId
// Persists within warm Vercel instances (good enough for near-real-time reactions)
const spanMap = new Map();
const MAX_ENTRIES = 500;

export function storeSpanId(channel, messageTs, spanId) {
  if (!spanId) return;
  // Evict oldest entries if map gets too large
  if (spanMap.size >= MAX_ENTRIES) {
    const oldest = spanMap.keys().next().value;
    spanMap.delete(oldest);
  }
  spanMap.set(`${channel}:${messageTs}`, spanId);
}

export function handleReaction(event) {
  const { reaction, item, user } = event;
  if (item?.type !== 'message') return;

  const key = `${item.channel}:${item.ts}`;
  const spanId = spanMap.get(key);
  if (!spanId) return;

  const isPositive = ['+1', 'thumbsup', 'white_check_mark', 'heavy_check_mark', 'heart']
    .includes(reaction);
  const isNegative = ['-1', 'thumbsdown', 'x', 'no_entry_sign']
    .includes(reaction);

  if (!isPositive && !isNegative) return;

  logger.logFeedback({
    id: spanId,
    scores: { thumbs: isPositive ? 1 : 0 },
    comment: `Slack reaction :${reaction}: from ${user}`,
    metadata: { slack_user: user, reaction, channel: item.channel },
  });

  console.log(`feedback: ${isPositive ? 'positive' : 'negative'} :${reaction}: on span ${spanId}`);
}
