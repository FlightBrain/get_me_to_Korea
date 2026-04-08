// Lightweight deterministic intent classifier.
// Runs before the model to apply stricter behavioral rules per category.

const INTENT_PATTERNS = [
  { intent: 'calendar_whereabouts', patterns: [
    /\bwhere\s+is\b/i,
    /\bwhere'?s\b/i,
    /\bis\s+\w+\s+(in|at|out|off|remote|pto|ooo|traveling)\b/i,
    /\bschedule\b/i,
    /\bcalendar\b/i,
    /\bwhat('?s| is)\s+\w+\s+doing\s+today\b/i,
  ]},
  { intent: 'account_or_pipeline', patterns: [
    /\baccount\b/i,
    /\bpipeline\b/i,
    /\bdeal\b/i,
    /\bopp(ortunit)?(y|ies)?\b/i,
    /\bforecast\b/i,
    /\bquota\b/i,
    /\bterritory\b/i,
  ]},
  { intent: 'identity_person_lookup', patterns: [
    /\bwho\s+is\b/i,
    /\bdo\s+you\s+know\b/i,
    /\btell\s+me\s+about\s+(a\s+)?person\b/i,
  ]},
  { intent: 'braintrust_resources', patterns: [
    /\bcase\s+stud(y|ies)\b/i,
    /\bcustomer\s+stor(y|ies)\b/i,
    /\bblog\b/i,
    /\bdocs?\b/i,
    /\bpricing\b/i,
    /\bcompetit(ive|or)\b/i,
    /\barize\b/i,
    /\blangsmith\b/i,
    /\blangfuse\b/i,
    /\blangchain\b/i,
    /\beval(s|uation)?\b/i,
    /\bobservability\b/i,
  ]},
  { intent: 'bot_meta', patterns: [
    /\bwhat\s+(can|do)\s+you\b/i,
    /\bwho\s+are\s+you\b/i,
    /\bwhat\s+are\s+you\b/i,
    /\bhelp\b/i,
  ]},
  { intent: 'banter', patterns: [
    /^(lol|haha|nice|yo|sup|hey|gm|gn|gg|fire|cooked|vibes|w+)\s*[!?.]*$/i,
  ]},
];

export function classifyIntent(text) {
  if (!text) return 'general_qna';

  for (const { intent, patterns } of INTENT_PATTERNS) {
    for (const re of patterns) {
      if (re.test(text)) return intent;
    }
  }

  return 'general_qna';
}
