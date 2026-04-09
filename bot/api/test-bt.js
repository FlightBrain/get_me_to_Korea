// Direct Braintrust API test - DELETE after confirming
import { logTrace, logFeedback } from '../lib/braintrust.js';

export default async function handler(req, res) {
  const results = {};

  // Test 1: Log a trace
  const trace = await logTrace({
    input: 'test from /api/test-bt',
    output: 'if you see this, logging works',
    metadata: { test: true, timestamp: new Date().toISOString() },
    tags: ['test'],
  });
  results.trace = trace;

  // Test 2: Log feedback on that trace
  if (trace?.row_ids?.[0]) {
    const fb = await logFeedback({
      id: trace.row_ids[0],
      scores: { thumbs: 1 },
      comment: 'test feedback',
    });
    results.feedback = fb;
  }

  results.message = trace?.row_ids ? 'Check Braintrust dashboard for Claudesington project' : 'FAILED';
  return res.status(200).json(results);
}
