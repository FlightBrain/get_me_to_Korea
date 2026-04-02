# Braintrust Research Index

**Purpose:** Master index and operating system for all sales research. Serves as the single source of truth for companies researched, competitor intelligence, market signals, and research organization standards.

**How to Use:**
- Refer to this index before researching any company to avoid duplicating work
- Update the Companies Researched list after completing research on a target
- Use the Filing Rules and Naming Conventions to keep research organized and searchable
- Check Channel-Specific Research sections for insights from community platforms

---

## Companies Researched

| Company | Industry | Stage | Focus | Date | Notes |
|---------|----------|-------|-------|------|-------|
| [Example] | AI/ML | Series B+ | LLM reliability | 2026-04-01 | Add after research complete |

## Braintrust Deep Research
**File:** `BRAINTRUST_DEEP_RESEARCH.md` (created 2026-04-01)
Full Notion knowledge pull covering: Product, ICP, Messaging, Customers, Competitive, Sales Process, Events, Objection Handling, What's Working. Source: 12 Notion pages.

**File:** `SLACK_INTEL_APRIL2026.md` (created 2026-04-01)
Slack intelligence pull: wins (SoFi, Eve $500K, Gusto $521K, blitz day 69 meetings), competitive intel (LangSmith, Langfuse, Arize battle cards), product news (Topics, Loop, Brainstore, BYOC), HumanX strategy, converting personas, PMF signals.

## Competitive Resources (Quick Links)
- CI Hub: https://www.notion.so/braintrustdata/Competitive-intelligence-hub-c4b82b2f4f2542c08ab84d33acd1635a
- CI Bot: https://ci-bot.preview.braintrust.dev/
- Competitive Deck: https://docs.google.com/presentation/d/1N_Y0ji9Gat3cQOCnxJu9fF2Ca_1mv6AdiIDAgyymFwA/
- Email Hall of Fame: https://www.notion.so/braintrustdata/Email-Hall-of-Fame-2fef785802898042b12fec7cf02ec91b
- Arize Battle Card: https://www.notion.so/braintrustdata/Braintrust-vs-Arize-Lark-Health-334f785802898039b6f6f3bd44b20eaf
- Nubank POC (vs LangSmith): https://docs.google.com/document/d/1LLarJy1zYLL5idsYqdQ8lJ7uonZY5RWS08sd6csOBBo/edit

## Competitors Tracked

**Active Competitors in AI Eval/Observability (from Gong, Jan 2026):**
- Langfuse (37% of competitive mentions, 1,195 mentions. Self-hosting, ClickHouse scale issues, acquired by ClickHouse)
- LangSmith (34%, 1,083 mentions. Framework lock-in, performance issues, can't handle complex agents)
- Arize AI (19%, 596 mentions. Traditional ML platform, struggling with GenAI)
- MLflow (5%, 172 mentions. Legacy, poor LLM support)
- Galileo (3%, 98 mentions. Out-of-box scores focus)
- Maxim (1%, 35 mentions. Lower pricing tier, dev UX)
- Raindrop (<1%, 9 mentions. Deep search, emerging)

**Full competitive analysis:** See `BRAINTRUST_DEEP_RESEARCH.md` Section 5

**Indirect Competitors:**
- Internal/homegrown eval systems (common objection: "we built our own")
- LLM-as-a-judge frameworks (OpenAI, Claude)
- In-house eval solutions (major enterprises)

## Market Signals by Category

### Hiring Signals
- AI/ML engineers, LLM engineers, eval specialists
- Product teams scaling up AI products
- Quality assurance roles focused on AI features

### Product Launches
- New AI features or agent capabilities
- Reliability/safety improvements announced
- Compliance or governance features

### Funding Rounds
- Series A/B AI agent companies
- Enterprise software raising for AI expansion
- Research labs commercializing

### Pain Signals
- Public mentions of hallucination issues
- Reliability concerns in products
- Evaluation bottlenecks mentioned
- Compliance/safety challenges

### Executive Moves
- New Chief AI Officer hires
- AI product leadership changes
- Research scientist to startup transitions

## Channel-Specific Research

### Reddit
- r/MachineLearning
- r/OpenAI
- r/LLM
- r/Startup
- Company-specific subreddits (r/OpenAI, r/LangChain, etc.)
- **Key signals:** Product pain points, user frustration, workarounds, demand signals

### X (Twitter)
- Follow AI product leaders, founders
- Track #llm, #aievals, #agents, #aiops tags
- Monitor CEO announcements and product updates
- **Key signals:** Market trends, new launches, fundraising news, technical breakthroughs

### LinkedIn
- Company growth announcements
- Hiring sprees (especially for AI roles)
- Executive moves and new appointments
- Industry round-ups and trend articles
- **Key signals:** Company momentum, hiring urgency, leadership changes

## Filing Rules & Naming Conventions

### Company Research Files
- Location: `/04_Research/companies/[COMPANY_NAME].md`
- Naming: Use official company name (no spaces replaced with underscores)
- Example: `OpenAI.md`, `Anthropic.md`, `Weights_and_Biases.md`

### Signal Files
- Location: `/04_Research/signals/[YEAR-MONTH]_signals.md`
- Frequency: One file per month, append new signals chronologically
- Naming format: YYYY-MM_signals.md

### Competitor Notes
- Keep centralized in `COMPETITOR_NOTES.md`
- Update quarterly or when significant news emerges

### Customer Language Capture
- Document in `CUSTOMER_LANGUAGE.md`
- Tag each phrase with: Source (direct call, forum, LinkedIn), Company, Date

---

**Last Updated:** 2026-04-01
**Maintained By:** Kensington (SDR, Braintrust)
