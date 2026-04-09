// Minimal Braintrust test endpoint - hit this to verify logging works
// DELETE THIS FILE after confirming traces appear
import Anthropic from '@anthropic-ai/sdk';
import { initLogger, wrapAnthropic } from 'braintrust';

export default async function handler(req, res) {
  const results = { steps: [], errors: [] };

  // Step 1: Check env vars
  const hasApiKey = !!process.env.BRAINTRUST_API_KEY;
  const hasAnthropicKey = !!process.env.ANTHROPIC_API_KEY;
  results.steps.push({
    step: 'env_check',
    BRAINTRUST_API_KEY: hasApiKey ? `set (${process.env.BRAINTRUST_API_KEY.slice(0, 8)}...)` : 'MISSING',
    ANTHROPIC_API_KEY: hasAnthropicKey ? 'set' : 'MISSING',
    BRAINTRUST_SYNC_FLUSH: process.env.BRAINTRUST_SYNC_FLUSH || 'not set',
  });

  if (!hasApiKey) {
    results.errors.push('BRAINTRUST_API_KEY is not set');
    return res.status(200).json(results);
  }

  // Step 2: Init logger
  let logger;
  try {
    logger = initLogger({
      projectName: 'claudesington-bot',
      apiKey: process.env.BRAINTRUST_API_KEY,
    });
    results.steps.push({ step: 'initLogger', status: 'ok' });
  } catch (e) {
    results.errors.push(`initLogger failed: ${e.message}`);
    return res.status(200).json(results);
  }

  // Step 3: Manual log (no LLM call needed)
  try {
    logger.log({
      input: 'test input from /api/test-bt',
      output: 'test output - if you see this in Braintrust, logging works',
      metadata: { test: true, timestamp: new Date().toISOString() },
      tags: ['test'],
    });
    results.steps.push({ step: 'logger.log', status: 'ok' });
  } catch (e) {
    results.errors.push(`logger.log failed: ${e.message}`);
  }

  // Step 4: Traced span
  try {
    const spanResult = await logger.traced(
      async (span) => {
        span.log({
          input: 'traced test input',
          output: 'traced test output',
          tags: ['test-traced'],
        });
        return { spanId: span.id };
      },
      { name: 'test-span' },
    );
    results.steps.push({ step: 'logger.traced', status: 'ok', spanId: spanResult.spanId });
  } catch (e) {
    results.errors.push(`logger.traced failed: ${e.message}`);
  }

  // Step 5: Flush - this is the critical step
  try {
    await logger.flush();
    results.steps.push({ step: 'logger.flush', status: 'ok' });
  } catch (e) {
    results.errors.push(`logger.flush failed: ${e.message}`);
  }

  // Step 6: If Anthropic key exists, try a wrapped call too
  if (hasAnthropicKey) {
    try {
      const client = wrapAnthropic(new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY }));
      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 50,
        messages: [{ role: 'user', content: 'Say "braintrust test ok" and nothing else.' }],
      });
      const text = response.content[0]?.text || '';
      results.steps.push({ step: 'wrapAnthropic call', status: 'ok', response: text });

      // Flush again after the LLM call
      await logger.flush();
      results.steps.push({ step: 'post-llm flush', status: 'ok' });
    } catch (e) {
      results.errors.push(`wrapAnthropic call failed: ${e.message}`);
    }
  }

  results.success = results.errors.length === 0;
  results.message = results.success
    ? 'All steps passed. Check Braintrust dashboard for claudesington-bot project.'
    : 'Some steps failed. See errors.';

  return res.status(200).json(results);
}
