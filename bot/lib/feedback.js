import { logger } from './claude.js';
import { fetchMessage } from './slack.js';

const POSITIVE = new Set(['+1', 'thumbsup', 'white_check_mark', 'heavy_check_mark', 'heart']);
const NEGATIVE = new Set(['-1', 'thumbsdown', 'x', 'no_entry_sign']);

export async function handleReaction(event) {
  try {
    const { reaction, item, user } = event;
    if (item?.type !== 'message') return;

    const isPositive = POSITIVE.has(reaction);
    const isNegative = NEGATIVE.has(reaction);
    if (!isPositive && !isNegative) return;

    // Fetch the message to read the braintrust spanId from metadata
    const msg = await fetchMessage(item.channel, item.ts);
    console.log(`feedback: fetched msg, has metadata: ${!!msg?.metadata}, keys: ${msg ? Object.keys(msg).join(',') : 'null'}`);

    const spanId = msg?.metadata?.event_payload?.span_id;
    if (!spanId) {
      console.log(`feedback: no spanId on message ${item.channel}:${item.ts}`);
      return;
    }

    logger.logFeedback({
      id: spanId,
      scores: { thumbs: isPositive ? 1 : 0 },
      comment: `Slack reaction :${reaction}: from ${user}`,
      metadata: { slack_user: user, reaction, channel: item.channel },
    });

    console.log(`feedback: ${isPositive ? 'positive' : 'negative'} :${reaction}: on span ${spanId}`);
  } catch (e) {
    console.error(`feedback error: ${e.message}`);
  }
}
