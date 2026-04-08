// In-memory event dedup cache.
// Vercel serverless functions can share memory across warm invocations,
// so this catches the common case of Slack sending both app_mention and
// message events for the same user turn, or retrying within the same
// warm instance. For cold-start retries we rely on the x-slack-retry
// header check in the handler.

const SEEN_TTL_MS = 60_000; // 60 seconds
const seen = new Map();

// Returns true if this event was already processed (duplicate).
export function isDuplicate(event) {
  // Build a key from the parts that identify a unique user message.
  // channel + ts is unique per Slack message. user is added for safety.
  const key = `${event.channel}:${event.ts}:${event.user || ''}`;

  if (seen.has(key)) return true;

  seen.set(key, Date.now());

  // Lazy cleanup: prune old entries to avoid unbounded growth
  if (seen.size > 500) {
    const cutoff = Date.now() - SEEN_TTL_MS;
    for (const [k, v] of seen) {
      if (v < cutoff) seen.delete(k);
    }
  }

  return false;
}
