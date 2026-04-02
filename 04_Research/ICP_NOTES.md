# Ideal Customer Profile (ICP) - Braintrust

**Purpose:** Comprehensive definition of Braintrust's ideal customer segments. Use this to qualify inbound leads, identify target accounts, and craft persona-specific messaging.

**How to Use:**
- Reference before every outreach to ensure target fit
- Use Buying Signals checklist during discovery calls
- Share Disqualifiers with team to prevent low-fit deals
- Update quarterly as market and product evolve

---

## PRIMARY ICP PERSONAS

### Persona 1: Staff+ AI Engineer
**Definition:** Deep technical IC or tech lead responsible for AI feature quality and evaluation infrastructure.

| Attribute | Details |
|-----------|---------|
| **Titles** | Staff Engineer (AI/ML), Principal AI Engineer, Head of AI Infrastructure |
| **Company size** | Series B/C ($20M+ ARR) or Fortune 500s |
| **Pain language** | "catch regressions," "debug production," "CI/CD gates," "model-agnostic," "test in parallel" |
| **Aspiration** | Automate evals without touching production; catch bugs before users see them |
| **Decision role** | Technical veto; suggests solutions; influences budget |
| **Buying signal** | GitHub repo with eval code, tech blog post on model testing, hired eval engineer |
| **Objection** | "Can we build this ourselves?" Answer: 6-12 month maintenance burden |
| **Close signal** | "How quickly can we integrate this with our CI/CD pipeline?" |

---

### Persona 2: VP Engineering / Sr. Director Platform Engineering
**Definition:** Executive responsible for scaling teams, managing deployment risk, operational excellence.

| Attribute | Details |
|-----------|---------|
| **Titles** | VP Engineering, Sr. Director Platform Engineering, VP Infrastructure |
| **Company size** | Series C+ ($50M+ ARR) or Enterprise |
| **Pain language** | "scale teams," "reduce risk," "AI SDLC," "compliance," "operational excellence" |
| **Aspiration** | Treat AI like software (versioned, tested, gated); reduce liability from model failures |
| **Decision role** | Budget owner; final approval on vendor tooling |
| **Buying signal** | Press release on "AI Center of Excellence," hiring for "AI Safety," SOC2 audit prep |
| **Objection** | "This is orthogonal to our roadmap" Answer: Use competitive urgency (peers already evaluating) |
| **Close signal** | "Can this integrate with our existing observability stack?" |

---

### Persona 3: Senior AI Product Manager
**Definition:** PM shipping AI features, accountable for user satisfaction + feature velocity.

| Attribute | Details |
|-----------|---------|
| **Titles** | Senior PM (AI), AI Product Manager, Head of AI Products |
| **Company size** | Series A/B/C |
| **Pain language** | "vibes," "make it measurable," "ship fast," "no code," "executive dashboards" |
| **Aspiration** | Make feature decisions data-driven; show board/investors velocity + quality |
| **Decision role** | Influences technical team; owns feature roadmap; may own product budget |
| **Buying signal** | LinkedIn post on "shipping AI features," job posting for "AI PM," fundraising announcement |
| **Objection** | "Engineering already handles evals" Answer: "You need dashboards that show *you* the quality signal, not just engineers" |
| **Close signal** | "Can I get dashboards our CEO can understand?" or "How fast can we see results?" |

---

## PRIMARY ICP: AI Product Companies (Series A - Series C)

**Definition:** Companies building AI-native products or features that directly impact customer satisfaction and revenue. They've moved past proof-of-concept and are scaling, facing evaluation and quality bottlenecks. **Real examples:** Notion (24hr model deploys, 70 engineers), Zapier (25% accuracy improvement), Dropbox (sub-10min evals).

### Firmographics
- **Revenue:** $2M - $50M ARR
- **Employees:** 30-300
- **Funding:** Series A minimum ($5M), often Series B/C ($20M+)
- **Geography:** Primarily US/SF Bay Area, secondary markets (EU, APAC with local presence)
- **Growth rate:** 3x-5x YoY (burning cash to scale)

### Technographics
- **Core stack:** LLM APIs (OpenAI, Anthropic, Cohere), LangChain/LlamaIndex
- **Data:** Storing >100K daily inference logs
- **Infrastructure:** Cloud-native (AWS/GCP/Azure), containerized
- **Current eval approach:** Spreadsheets, basic automated testing, or no systematic approach
- **Scale markers:** 70+ engineers working on AI (Notion), multi-model deployments (Zapier vs Anthropic), search-heavy AI features (Dropbox)

### Buying Signals
- Hired VP/Director of Engineering in past 6 months (indicates scaling phase = eval pressure)
- Job postings for "AI Engineer," "ML Engineer," "Eval Engineer" (trying to hire the solution)
- Public product launch mentioning AI features or model updates
- Fundraising announcement + explicit AI roadmap mention
- Public blog post or talk discussing "scaling AI features," "hallucinations," "model selection"
- CEO/founder on X talking about quality/reliability challenges
- GitHub repos showing eval/testing code
- Mention in news of "customer complaints" about AI feature quality

### Pain Points Addressed (Real from customer calls)
- **Evaluation bottleneck:** 60% of engineer time on manual testing; can't scale QA with product velocity
- **Quality unpredictability:** Ship feature with new model, 2 weeks later customers complain about hallucinations
- **Model selection paralysis:** "We don't know if Claude is actually better than GPT-4, we just hope"
- **Cost creep:** Running $30K/month eval inference just to validate updates
- **Multi-model complexity:** Testing OpenAI + Anthropic + Cohere, no unified framework
- **Compliance risk:** No audit trail for AI quality decisions; legal/regulatory exposure
- **Velocity constraint:** "Can't ship new models because we have no way to validate quality"

### Stakeholders & Personas
- **Technical: Staff+ AI Engineer** - Shipping features faster, worried about regressions
- **Technical: VP Engineering** - Responsible for scale, risk, operational excellence
- **Business: Senior AI PM** - Own feature velocity + user satisfaction
- **Decision-maker: CEO/CTO** - Budget approval, strategic AI roadmap

### Disqualifiers
- No LLM in product (rule out: traditional software companies dabbling in AI)
- <$1M ARR or pre-Series A (insufficient budget/priority)
- Building own proprietary LLM (likely building evals in-house; still a prospect but lower priority)
- Already committed to W&B or Arize (switching cost high; pursue only with clear competitive advantage)
- No AI feature roadmap for next 6 months (not in growth phase)
- "We'll just use OpenAI Evals" + zero hiring activity (not serious; revisit in 6 months)

---

## SECONDARY ICP: Enterprise AI Quality Assurance (Series C+, Fortune 1000)

**Definition:** Large enterprises deploying AI across departments who need governance, quality control, and compliance frameworks. Lower growth rate but higher contract values ($250K+). **Real examples:** Goldman Sachs (GenAI Lead), Experian (VP PM), Google (Sr Dir Google Models), Fortune 500s with "AI Center of Excellence" announcements.

### Firmographics
- **Revenue:** $500M+ ARR
- **Employees:** 1,000+
- **Maturity:** Established companies, not startups
- **Geography:** Global, often with procurement/compliance requirements
- **Buying committee size:** 5-8 stakeholders minimum (Eng, Legal, Compliance, Business Unit, Procurement)

### Technographics
- **AI adoption:** Multiple LLM providers (internal partnerships with OpenAI, Anthropic, sometimes on-prem)
- **Governance:** Compliance/Legal teams involved (SOC2, ISO, HIPAA, financial regulations)
- **Infrastructure:** On-premise, hybrid, or strict data residency (Europe, Asia)
- **Current state:** Fragmented evals across business units; no centralized approach; multiple teams rebuilding wheels
- **Scale markers:** 1.5B+ tokens/day (fintech), multi-region deployments, cross-functional teams using AI

### Buying Signals
- Press release on "AI Center of Excellence" or "Chief AI Officer" hire
- New Chief AI Officer, Head of AI Governance, or VP AI Safety hire
- Regulatory announcement: "Implementing AI quality controls" for compliance
- Earnings call mention of "responsible AI" or "AI risk management"
- Job postings for "AI Safety," "Model Governance," "AI Compliance" roles
- Enterprise RFP issued for "AI evaluation platform"
- Board slide deck mentioning "AI governance framework"

### Pain Points Addressed
- **Governance gap:** No centralized way to approve/audit AI deployments across business units
- **Compliance risk:** Regulators (SEC, CFPB, FCA, GDPR AI Act) asking "How do you ensure AI quality?"
- **Hallucination liability:** Legal/reputational risk from AI-generated errors (medical, financial, legal)
- **Data residency:** GDPR, data sovereignty = must evaluate in specific regions
- **Cross-team consistency:** Finance, HR, Legal, Product all running evals differently; no audit trail
- **Board/Investor pressure:** "What's our AI risk?" becomes CEO-level question
- **Model selection accountability:** "Why did we choose Claude over GPT-4?" needs documented justification

### Decision Process
- **Longer sales cycle:** 6-12 months (RFP → procurement → legal review → pilot → rollout)
- **Multi-stakeholder:** Engineering (owns implementation), Compliance/Legal (owns guardrails), Finance (owns budget), Business Units (own use cases)
- **RFP-driven:** Formal procurement process; vendor questionnaires; security audits
- **Budget:** Pre-approved for "AI governance initiatives" (CEO/board mandate)
- **Entry point:** Usually CIO/VP Eng or Chief AI Officer; Legal/Compliance as veto

### Disqualifiers
- No LLM deployment planned in next 12 months (timing mismatch)
- Regulatory environment doesn't require AI governance (e.g., pure retail, non-critical functions)
- Already standardized on enterprise vendor (Arize, Datadog, custom build)
- Unwilling to adopt cloud infrastructure + only willing to run on-prem (infrastructure constraints)
- "We're building this ourselves" + proven track record of building platform-scale tools (credible threat)

---

---

## KEY MESSAGING BY PERSONA & SEGMENT

### For Staff+ AI Engineer (ALL SEGMENTS)
**Frame:** Technical builder; owns execution quality
- **Opening hook:** "Evals aren't post-launch polish—they're part of your development velocity. The faster you can measure if something's better, the faster you can ship."
- **Core value:** "Catch regressions before they reach production. CI/CD gates that actually work with LLMs."
- **Technical language:** "Model-agnostic," "test in parallel," "debug production," "comprehensive eval frameworks"
- **Buying signal language:** When they say "catch regressions" or "debug production," they're ready to talk
- **Reference:** Notion (70 engineers, <24hr model deploys), Dropbox (sub-10min evals)

### For VP Engineering / Sr. Director Platform (SCALING COMPANIES)
**Frame:** Risk manager; owns team capacity and reliability
- **Opening hook:** "You're adding AI features. Your eval infrastructure is now a business risk—not an engineering detail."
- **Core value:** "Scale team velocity without sacrificing quality. Treat AI like software: versioned, tested, gated."
- **Business language:** "operational excellence," "reduce risk," "scale teams," "SDLC discipline"
- **Buying signal language:** When they mention "CI/CD," "governance," or "board questions about AI risk," they're in buying mode
- **Reference:** Any Series C/D company scaling AI features across teams

### For VP Engineering / Sr. Director Platform (ENTERPRISE)
**Frame:** Governance owner; accountable to board, legal, regulators
- **Opening hook:** "Your board is asking about AI risk. You need centralized quality gates across all AI deployments."
- **Core value:** "Audit trail for every AI decision. Compliance-ready evaluation infrastructure."
- **Governance language:** "AI SDLC discipline," "compliance," "audit trail," "operational excellence," "reduce liability"
- **Buying signal language:** When they mention "governance," "audit," "compliance," or regulatory pressure, they're hot
- **Reference:** Fortune 500s deploying AI at scale (Goldman Sachs model, Experian profile)

### For Senior AI Product Manager (ALL SEGMENTS)
**Frame:** Velocity owner; owns feature quality + shipping speed
- **Opening hook:** "Your gut tells you the new model is better. Prove it to your board in 2 hours, not 2 weeks."
- **Core value:** "No-code dashboards. Ship features faster while showing investors quality is up, not down."
- **Business language:** "ship fast," "make it measurable," "no code," "executive dashboards," "vibes → data"
- **Buying signal language:** When they ask "How fast can we see results?" or "Can my CEO understand this dashboard?", they're ready
- **Reference:** Coursera (45x feedback loop improvement), Zapier (25% accuracy gains)

---

## CASE STUDY MAPPING RULES

**Use these stories for these personas/industries:**

| Story | Persona | Industry | Why | Angle |
|-------|---------|----------|-----|-------|
| Notion (70 eng, <24hrs) | Staff+ AI Eng, VP Eng | SaaS/Productivity | Scale, multi-team, model deployment | "Your 50-person team can move at Notion's speed" |
| Zapier (25% accuracy) | Senior PM, Staff+ Eng | Workflow/API | Accuracy metrics, competitive advantage | "See accuracy gains in real time; ship with confidence" |
| Dropbox (<10min evals) | Staff+ Eng, VP Eng | Enterprise/search | Speed, production systems | "Reduce eval time from hours to minutes; ship weekly" |
| Coursera (45x feedback) | Senior PM, Product-focused | Education/learning | Learning velocity, user satisfaction | "Compress feedback loops; ship better features faster" |
| Graphite (code AI) | Staff+ Eng, VP Eng | Developer tools | Code generation, quality | "Test code generation at scale; catch regressions early" |
| Carta (document extraction) | VP Eng, Enterprise | Document AI, fintech | Document accuracy, compliance | "Validate document AI accuracy; audit trail for regulators" |
| Fintool (1.5B tokens/day) | VP Eng, Enterprise | Fintech | High-volume, cost control, compliance | "Manage AI at massive scale; control inference costs" |

**Hard rule:** Never mention Navan for non-voice use cases. Navan's case study is VOICE AI ONLY.

---

## THREE KEY MESSAGES TO MEMORIZE

All outreach should anchor to one of these three:

1. **Catch regressions before users with CI/CD gates**
   - For: Velocity-focused engineers, Series B/C companies
   - Proof: Notion, Dropbox, Graphite examples

2. **Treat AI like software: SDLC discipline, not guesswork**
   - For: Enterprise, compliance-conscious, scaling organizations
   - Proof: Carta, Fintool, enterprise deployments

3. **Make instinct-driven bets measurable without code**
   - For: Product managers, executives, non-technical stakeholders
   - Proof: Coursera, Zapier, PM-driven decisions

---

**Last Updated:** 2026-04-01
**Maintained By:** Kensington (SDR, Braintrust)
**Review frequency:** Quarterly or when new customer stories emerge
