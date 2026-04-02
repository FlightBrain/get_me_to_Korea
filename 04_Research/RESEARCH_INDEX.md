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

## Competitors Tracked

**Active Competitors in AI Eval/Observability:**
- Weights & Biases (experiment tracking, model monitoring)
- Arize AI (model monitoring, drift detection)
- Fiddler AI (AI explainability, monitoring)
- DataRobot (AutoML, model governance)
- AWS SageMaker Model Monitor (built-in, enterprise)
- Anthropic Evals (open source, limited scope)

**Indirect Competitors:**
- LLM testing tools (PromptFoo, LangSmith)
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
