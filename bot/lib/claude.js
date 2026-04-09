import Anthropic from '@anthropic-ai/sdk';
import { initLogger, wrapAI } from 'braintrust';
import { applyGuardrails } from './guardrails.js';

const logger = initLogger({ projectName: 'claudesington-bot' });

const baseClient = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const client = wrapAI(baseClient);

export async function callClaude(systemPrompt, cleanedText) {
  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 400,
    system: systemPrompt,
    messages: [{ role: 'user', content: `slack message: "${cleanedText}"` }],
  });

  let reply = response.content[0]?.text ?? '';
  reply = applyGuardrails(reply);

  return reply.trim() || null;
}
