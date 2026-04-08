import Anthropic from '@anthropic-ai/sdk';
import { applyGuardrails } from './guardrails.js';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function callClaude(systemPrompt, cleanedText) {
  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 300,
    system: systemPrompt,
    messages: [{ role: 'user', content: `slack message: "${cleanedText}"` }],
  });

  let reply = response.content[0]?.text ?? '';
  reply = applyGuardrails(reply);

  return reply.trim() || null;
}
