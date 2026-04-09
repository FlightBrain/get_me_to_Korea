// Intent classifier. Runs before the model to decide:
// 1. What behavioral rules to apply
// 2. Whether to relay to the Notion agent or answer locally
//
// Order matters: first match wins. More specific intents come first.

const INTENT_PATTERNS = [
  { intent: 'calendar_whereabouts', patterns: [
    /\bwhere\s+is\b/i,
    /\bwhere'?s\b/i,
    /\bis\s+\w+\s+(in|at|out|off|remote|pto|ooo|traveling)\b/i,
    /\bschedule\b/i,
    /\bcalendar\b/i,
    /\bwhat('?s| is)\s+\w+\s+doing\s+today\b/i,
    /\bfree\s+(at|from|today|tomorrow|this)\b/i,
    /\bavailab(le|ility)\b/i,
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
  // braintrust_resources BEFORE help_request so "case study" and
  // "competitive" queries match the specific intent first.
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
  { intent: 'help_request', patterns: [
    /\bwhere\s+can\s+i\s+find\b/i,
    /\bhas\s+anyone\b/i,
    /\banyone\s+have\b/i,
    /\bhow\s+do\s+(i|we|you)\b/i,
    /\bwhat('?s| is)\s+the\s+(process|playbook|sop|template|deck|doc)\b/i,
    /\bcan\s+you\s+(find|look\s*up|check|pull|grab|get)\b/i,
    /\bneed\s+(help|a\s+link|the\s+link|a\s+doc|info|content)\b/i,
    /\bslides?\b.*\b(for|about|on)\b/i,
    /\bdemo\b.*\b(for|about|content|deck)\b/i,
    /\bbattlecard\b/i,
    /\bobjection\s+handl/i,
    /\bdo\s+we\s+have\b/i,
  ]},
  { intent: 'bot_meta', patterns: [
    /\bwhat\s+(can|do)\s+you\b/i,
    /\bwho\s+are\s+you\b/i,
    /\bwhat\s+are\s+you\b/i,
    /^help\s*[!?.]*$/i,
  ]},
  { intent: 'banter', patterns: [
    /^(lol|haha|nice|yo|sup|hey|gm|gn|gg|fire|vibes|w+|dude|bro|facts|real|true|bet|word|nah|yep|yea|damn|wow|sheesh|goat|legend|king|queen|clutch|insane|wild|huge|big|massive|crazy|sick|lit|dope|clean|solid|tough|pain|rip|oof|bruh|fam|gang|squad|team|mood|same|dead|crying|stop|no\s*way)\s*[!?.]*$/i,
    /^(good\s+(morning|night|luck)|happy\s+\w+|congrats|lets?\s+go+|lfg|huge\s*w|big\s*w|w\s+w\s+w)\s*[!?.]*$/i,
    /^[\p{Emoji}\s!?.]+$/u,
    // Greetings and casual openers that should NOT go to Notion
    /^(hey\s+)?(what['s]*\s*(up|good)|how['s]*\s*(it\s+going|you\s+doing|are\s+you)|what['s]*\s*good|how\s+are\s+(you|ya|things)|yo+\s+what['s]*\s*up|hey\s+there|howdy|hiya|wassup|whaddup|sup\s+dude|what['s]*\s*poppin|what['s]*\s*crackin)\s*[!?.]*$/i,
    /^(how['s]*\s+your\s+(day|morning|evening|night|week|weekend))\s*[!?.]*$/i,
    /^(thanks?|thank\s+you|ty|thx|appreciate\s+it|cheers)\s*[!?.]*$/i,
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
