import Anthropic from '@anthropic-ai/sdk';
import { applyGuardrails } from './guardrails.js';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function callClaude(systemPrompt, cleanedText) {
  const start = Date.now();

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 400,
    system: systemPrompt,
    messages: [{ role: 'user', content: `slack message: "${cleanedText}"` }],
  });

  const latencyMs = Date.now() - start;
  let reply = response.content[0]?.text ?? '';
  reply = applyGuardrails(reply);
  const trimmed = reply.trim() || null;

  return {
    reply: trimmed,
    model: response.model,
    tokens: {
      input: response.usage?.input_tokens,
      output: response.usage?.output_tokens,
    },
    latencyMs,
  };
}
