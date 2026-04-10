// Direct Braintrust API logging - bypasses broken SDK logger on Vercel.
//
// Two logging paths:
// 1. logTrace() - called at request time with full context (input, output, notion, etc.)
// 2. logFeedback() - called on thumbs up/down reactions, attaches scores to existing trace

const PROJECT_ID = '9bba3cfb-9362-45df-baa1-d01f6296d856';
const API_BASE = 'https://api.braintrust.dev/v1';

async function btFetch(path, body) {
  const apiKey = process.env.BRAINTRUST_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) console.error('braintrust error:', data);
    return data;
  } catch (e) {
    console.error('braintrust fetch error:', e.message);
    return null;
  }
}

// Generate a deterministic trace ID from channel + message timestamp.
// This lets reactions (which come later) find and update the same trace.
import crypto from 'crypto';

export function traceId(channel, ts) {
  const hash = crypto.createHash('sha256').update(`${channel}:${ts}`).digest('hex');
  return [
    hash.slice(0, 8),
    hash.slice(8, 12),
    '4' + hash.slice(13, 16),
    '8' + hash.slice(17, 20),
    hash.slice(20, 32),
  ].join('-');
}

// Log a full trace at request time. Called with all context available.
export async function logTrace({
  id,
  input,
  output,
  metadata,
  tags,
  scores,
}) {
  return btFetch(`/project_logs/${PROJECT_ID}/insert`, {
    events: [{
      ...(id && { id }),
      input: typeof input === 'string' ? { message: input } : input,
      output: typeof output === 'string' ? { response: output } : output,
      ...(metadata && { metadata }),
      ...(tags && { tags }),
      ...(scores && { scores }),
    }],
  });
}

// Attach feedback (thumbs up/down) to an existing trace by ID.
export async function logFeedback({ id, scores, comment, metadata }) {
  return btFetch(`/project_logs/${PROJECT_ID}/insert`, {
    events: [{
      id,
      scores,
      ...(comment && { metadata: { ...metadata, _comment: comment } }),
      ...(!comment && metadata && { metadata }),
    }],
  });
}
