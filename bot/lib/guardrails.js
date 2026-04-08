// Post-processing guardrails applied to every model response before posting.

const FORBIDDEN_PHRASES = [
  /\blol nah\b/i,
  /\bidk man\b/i,
  /\bthat'?s not my (world|problem|thing|area)\b/i,
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
  /\bnot my (job|problem|circus)\b/i,
  /\babove my pay\s*grade\b/i,
  /\bthat'?s on you\b/i,
  /\bgood luck with that\b/i,
];

const SAFE_FALLBACK =
  "i'm not sure on that one. happy to help if you can give me more context.";

// Returns the reply unchanged if clean, or a safe fallback if it trips a rule.
export function applyGuardrails(reply) {
  if (!reply) return reply;

  for (const pattern of FORBIDDEN_PHRASES) {
    if (pattern.test(reply)) {
      console.warn(`guardrail tripped: ${pattern}`);
      // If the forbidden phrase IS the whole reply, replace entirely.
      if (reply.length < 40) return SAFE_FALLBACK;
      reply = reply.replace(pattern, '').replace(/\s+/g, ' ').trim();
    }
  }

  // Strip em dashes (U+2014) -> comma
  reply = reply.replace(/\u2014/g, ',');

  return reply;
}
