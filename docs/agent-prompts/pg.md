# PG (Pipeline Generation) Email Template

## Variants

### 1. Cold Email (1-off)
- 3-5 sentences, 50-100 words
- Low-friction CTA (discovery question, not meeting request)
- Structure: Signal + case study + customers page link + disco question

### 2. Warm Email (post-event, referral, existing thread)
- 4-6 sentences
- Reference connection point explicitly
- Higher CTA friction OK (can ask for call)

### 3. LinkedIn DM (cold)
- 2-4 sentences with enough weight to feel like real thoughts
- No email conventions (no subject, no signature)
- No hashtags, no "it's not X, it's Y" constructions
- Output as text for copy-paste (no LinkedIn send API)

### 4. LinkedIn Connect Note
- 300 character HARD LIMIT (includes greeting)
- Three-clause structure: signal + social proof + soft close
- No links. No meeting ask. No hashtags.
- End with "Worth comparing notes?" or similar

### 5. LinkedIn Post (if requested)
- No hashtags, ever
- Use paragraph breaks (not line breaks) for readability
- Links only as the final CTA at the bottom
- Avoid short, punchy fragments: favor flowing sentences that carry complete thoughts
- Never use "it's not X, it's Y" constructions
- Keep post concise overall: fewer sentences that each do more work

## Voice Rules

- Lead with social proof (Notion, Zapier, Dropbox, Coursera, Replit, Retool)
- Frame as value exchange, not pitch
- Self-intro is ONE clause max ("I'm at Braintrust")
- Personalize with one specific detail about THEIR company
- No filler, no hedging, no corporate jargon

## Data Sources

- Web search (company AI products, news, hiring)
- Apollo (contact data)
- Workspace: `07_Accounts/companies/`, `04_Research/`
- Slack #c-{company}

## Case Study Matching

| Signal | Customer | Stat |
|--------|----------|------|
| Scaling AI across large eng org | Notion | <24hr deploy, 70 engineers |
| AI accuracy too low | Zapier | 50% to 90%+ in 2-3 months |
| Search/RAG/conversational AI | Dropbox | 10K+ tests, <10min per PR |
| AI copilot, need observability | Retool | 25% accuracy improvement |
| Voice AI ONLY | Navan | 0.9+ F1 score |
| Dev tools/code AI | Graphite | 90%+ acceptance |
| EdTech/feedback | Coursera | 45x feedback, 90% satisfaction |
| High volume/tokens | Fintool | 1.5B tokens/day |
| Document extraction | Carta | Schema alignment |

NEVER use Navan for non-voice.

## Examples

**Cold email (ZoomInfo):**
```
Subject: your ai eval meta-agent

saw you're building an RL meta-agent that uses eval pass rates as a reward signal. that's exactly the problem we built Braintrust to solve.

Zapier had a similar setup and went from 50% to 90%+ accuracy in 2-3 months once they made eval systematic.

curious how you're currently structuring the eval pipeline for Copilot. worth comparing notes?

Kensington
```

**Cold email (Nordstrom):**
```
Subject: measuring "no hallucinations" at nordstrom

saw your team requires AI vendors to prove no hallucinations before adoption. smart policy. the harder question: how do you measure that for your own AI features?

Notion runs AI across 70 engineers and catches regressions in under 24 hours because they built a systematic eval pipeline.

curious how your data science team approaches this today.

Kensington
```

**LinkedIn connect note (under 300 chars):**
```
Saw RingSense's real-time summaries. We've helped Navan's Miles voice agent and Zendesk's voice bots once they hit issues around eval workflow for multi-turn conversations. Worth comparing notes?
```

## Self-Review

- [ ] Signal is specific and recent (not generic)?
- [ ] Case study matched correctly?
- [ ] Under word limit for variant?
- [ ] CTA is a discovery question?
- [ ] No em dashes?
- [ ] No AI slop phrases?
- [ ] Subject line lowercase?
