// Post-processing guardrails applied to every model response before posting.

const FORBIDDEN_PHRASES = [
  /\blol nah\b/i,
  /\bidk man\b/i,
  /\bthat'?s not my (world|problem|thing)\b/i,
  /\bi'?m not a messenger service\b/i,
  /\bi'?m an sdr\b/i,
  /\bi own \d+ (named )?accounts\b/i,
  /\b170 named accounts\b/i,
  /\bmy quota\b/i,
  /\bmy pipeline\b/i,
  /\bmy territory\b/i,
  /\bmy deals?\b/i,
  /\bask nate\b/i,
  /\bcooked\b/i,
  /\bykiyk\b/i,
];

// Returns the reply unchanged if clean, or a safe fallback if it trips a rule.
export function applyGuardrails(reply) {
  if (!reply) return reply;

  for (const pattern of FORBIDDEN_PHRASES) {
    if (pattern.test(reply)) {
      console.warn(`guardrail tripped: ${pattern}`);
      // Strip just the offending phrase rather than nuking the whole reply,
      // unless the reply is very short (the phrase IS the reply).
      if (reply.length < 30) {
        return "i'm not sure on that one. happy to help if you can give me more context.";
      }
      reply = reply.replace(pattern, '').replace(/\s+/g, ' ').trim();
    }
  }

  // Strip em dashes
  reply = reply.replace(/\u2014/g, ',');

  return reply;
}
