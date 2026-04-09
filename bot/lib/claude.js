import Anthropic from '@anthropic-ai/sdk';
import { initLogger, wrapAnthropic } from 'braintrust';
import { applyGuardrails } from './guardrails.js';

export const logger = initLogger({
  projectName: 'Claudesington',
  apiKey: process.env.BRAINTRUST_API_KEY,
});

const baseClient = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const client = wrapAnthropic(baseClient);

export async function callClaude(systemPrompt, cleanedText) {
  const result = await logger.traced(
    async (span) => {
      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: systemPrompt,
        messages: [{ role: 'user', content: `slack message: "${cleanedText}"` }],
      });

      let reply = response.content[0]?.text ?? '';
      reply = applyGuardrails(reply);
      const trimmed = reply.trim() || null;

      span.log({
        input: cleanedText,
        output: trimmed,
        tags: ['slack-bot'],
      });

      return { reply: trimmed, spanId: span.id };
    },
    { name: 'slack-reply' },
  );

  return result;
}
