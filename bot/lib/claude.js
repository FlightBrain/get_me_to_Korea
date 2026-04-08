import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function callClaude(systemPrompt, userMessage, triggerType) {
  const userContent = buildUserContent(userMessage, triggerType);

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 200,
    system: systemPrompt,
    messages: [{ role: 'user', content: userContent }],
  });

  let reply = response.content[0]?.text ?? '';

  // Hard backstop: strip em dashes regardless of model output
  reply = reply.replace(/\u2014/g, ',');

  return reply.trim();
}

function buildUserContent(text, triggerType) {
  if (triggerType === 'direct') {
    return `someone just said to you: "${text}"\n\nrespond as kensington.`;
  }
  if (triggerType === 'inferred') {
    return `someone asked something that seems to be about your pipeline or accounts: "${text}"\n\njump in as kensington.`;
  }
  // chime-in
  return `someone in the channel just said: "${text}"\n\nif you have something genuinely useful or funny to add as kensington, say it. if not, respond with exactly: [SKIP]`;
}
