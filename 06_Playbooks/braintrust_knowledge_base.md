# Braintrust Knowledge Base
**Purpose:** Single source of truth for Braintrust messaging, positioning, and product knowledge. Compiled from Notion (Company Messaging, Customer Stories, SDR Hub) and Slack channels. Refresh monthly.
**Last Updated:** 2026-04-01
**Source:** Notion Company Messaging page, Customer Stories Outreach Guide, SDR Hub, sales-enablement Slack

---

## What Braintrust Is

**Product Category:** AI observability platform
**One-liner:** Braintrust is the observability layer for production AI.
**One sentence:** Braintrust is the AI observability platform helping teams measure, evaluate, and improve AI in production.

**Boilerplate (short):**
Braintrust is the AI observability platform for production AI. By connecting evals and observability in one workflow, teams at Notion, Stripe, Zapier, Vercel, and Ramp ship quality AI products at scale.

**Boilerplate (medium):**
Braintrust is the AI observability platform. By connecting evals and observability in one workflow, Braintrust gives builders the visibility to understand how AI behaves in production and the tools to improve it. Teams at Notion, Stripe, Zapier, Vercel, and Ramp use Braintrust to compare models, test prompts, and catch regressions, turning production data into better AI with every release.

---

## What Braintrust Is and Is Not

**Braintrust is:**
- Data: turning traces and outputs into structured evaluation datasets
- o11y: understanding model behavior in production
- Evals: defining what "good" means and measuring against it
- Iteration: comparing prompts, models, and versions to improve quality
- Quality gates: automated checks that prevent regressions from reaching production
- Workflow acceleration: AI-powered tools that speed up the entire development cycle

**Braintrust is NOT:**
- An inference layer (we don't serve models)
- A framework (we integrate with whatever you use)
- An agent builder (we help you understand and improve agents you already built)
- A guardrails product (we measure outcomes, we do not constrain behavior)

---

## Brand Narrative

Observability has been how teams understand software. Logs, metrics, and traces showed what broke and why. But AI doesn't fail with stack traces, it drifts, hallucinates, and regresses silently. That's why AI development needs a new kind of observability.

AI observability adds evals and becomes the quality layer for AI. In one platform, Engineers and Product Managers move beyond monitoring to actively debugging, evaluating, and improving AI together directly in production.

Evals define what "good" looks like, traces show what actually happened, and iteration closes the loop between them. When traces become evals, improvement becomes continuous.

AI observability is how modern teams build quality AI products.

---

## Approved Language

**We say:** Builders, Quality, Agents, Build, Ship, Production AI, Apps
**We don't say:** Reliable (sounds weak/worrisome), Simple, MLOps

**Approved snippets:**
- "Braintrust is the quality layer for AI."
- "Braintrust is how teams observe and improve AI in production."
- "With Braintrust, teams turn production data into high quality AI products."

---

## Voice and Tone

**Voice Pillars:** Technical, Opinionated, Proof-driven, Human

**Do:** Lead with technical credibility and features. Be opinionated about best practices. Use precise, engineering-centric language. Show the actual work (screenshots, customers, metrics, before/after).

**Don't:** Use enterprise jargon or marketing fluff. Say "framework" or position as one. Target data scientists/ML researchers. Overpromise "reliability."

---

## Target Audiences

1. AI Engineers (former ML Engineers)
2. AI Engineers (former Software Engineers)
3. Product Managers
4. Subject-Matter Experts
5. Teams shipping production AI
6. SMBs through Enterprises

---

## Customer Stories (Full Reference)

### Notion: AI at Scale Across Engineering Teams
- **Use for:** Companies scaling AI across large eng teams, shipping multiple AI features, needing fast model releases
- **Stat:** Deploys new frontier models in under 24 hours. 70 engineers aligned on evals.
- **Story:** Notion AI team went from simple prompt-and-judge evals to full agentic evaluation framework. Braintrust catches regressions, runs frontier model tests, finds needle-in-a-haystack problems (e.g. multilingual failures affecting APAC customers). Led to Brainstore, a sub-1s trace query database.
- **One-liner:** "Notion deploys new frontier models within hours of release because their eval infrastructure is already in place, 70 engineers, one framework."
- **Link:** https://www.braintrust.dev/customers/notion

### Zapier: From 50% to 90%+ Accuracy
- **Use for:** Companies getting AI from beta to production, struggling with accuracy, building automation
- **Stat:** 50% to 90%+ accuracy improvement in 2-3 months
- **Story:** Mike Knoop (Co-Founder) shared full AI development lifecycle. Braintrust is connective tissue: logging, datasets, scoring, experiment comparison.
- **One-liner:** "Zapier went from 50% to 90%+ accuracy across their AI products using Braintrust's eval loop, in under 3 months."
- **Link:** https://www.braintrust.dev/customers/zapier

### Retool: Production Logs into Roadmap Decisions
- **Use for:** Companies building AI copilots/assistants, struggling to know what to build next
- **Stat:** 25% accuracy improvement. Weeks of log analysis reduced to minutes with Loop.
- **Story:** Allen Kleiner (AI Engineering Lead) uses Braintrust's Loop to semantically query production logs weekly. Found multi-page app support was #1 unmet need. Classifier accuracy 72% to 95%.
- **One-liner:** "Retool uses Braintrust to turn production logs into their AI roadmap, finding the highest-impact work without manually sifting through data."
- **Link:** https://www.braintrust.dev/customers/retool

### Dropbox: Eval Pipeline for AI Search (Dash)
- **Use for:** Companies building search, RAG, or conversational AI
- **Stat:** 10,000+ tests in full eval suite. Eval turnaround under 10 minutes per PR.
- **Story:** Dropbox treats every prompt change like production code. PRs trigger ~150 canonical queries, judged in under 10 min. Layered gates (PR > staging > production sampling).
- **One-liner:** "Dropbox runs evals on every single PR for their AI search product, catching regressions before they ship."
- **Link:** https://www.braintrust.dev/customers/dropbox

### Navan: Voice AI Agent (VOICE AI ONLY)
- **Use for:** ONLY voice AI prospects
- **Stat:** 0.9+ macro F1 score. Hundreds of daily calls supervised automatically.
- **Story:** Miles voice AI agent calls hotels for travelers. Braintrust became core eval loop. F1 score improved from 0.56 to 0.89+ through iterative prompt engineering.
- **One-liner:** "Navan's voice AI agent makes hundreds of calls daily, Braintrust is how they know if it's working without listening to every one."
- **Link:** https://www.braintrust.dev/customers/navan

### Graphite: AI Code Review at Scale
- **Use for:** Dev tool companies, AI code assistants, precision-critical applications
- **Stat:** 5% reduction in negative rules. 90%+ target acceptance rate.
- **Story:** Diamond AI code reviewer needed actionable feedback. Built eval datasets from real PR usage (thumbs up/down), custom scoring functions.
- **One-liner:** "Graphite measures their AI code reviewer by whether developers actually act on it, Braintrust makes that feedback loop systematic."
- **Link:** https://www.braintrust.dev/customers/graphite

### Coursera: 45x More Feedback with AI Grading
- **Use for:** EdTech, HR tech, AI evaluating human outputs
- **Stat:** 45x more feedback. 90% learner satisfaction. 16.7% increase in course completions.
- **Story:** Replaced manual TA grading with AI-powered grading in under 1 minute. Uses heuristic scorers and LLM-as-a-judge.
- **One-liner:** "Coursera gives learners 45x more feedback with AI grading, and Braintrust is how they keep quality consistent at scale."
- **Link:** https://www.braintrust.dev/customers/coursera

### Replit: Pattern Detection Across Millions of Sessions
- **Use for:** High AI volume companies, fragmented observability tools
- **Stat:** Hundreds of production examples surfaced per issue. One unified platform.
- **Story:** CTO moved from manual session debugging to single Braintrust observability layer. Looks horizontally across sessions for systemic patterns.
- **One-liner:** "Replit uses Braintrust to see patterns across millions of AI sessions, turning individual bug reports into systemic fixes."
- **Link:** https://www.braintrust.dev/customers/replit

---

## Quick Match Guide

| Prospect Signal | Best Story | Link |
|----------------|------------|------|
| Building voice AI | Navan | braintrust.dev/customers/navan |
| Scaling AI across large eng org | Notion | braintrust.dev/customers/notion |
| AI accuracy too low | Zapier | braintrust.dev/customers/zapier |
| Building search/RAG/conversational AI | Dropbox | braintrust.dev/customers/dropbox |
| AI copilot, need observability | Retool | braintrust.dev/customers/retool |
| Dev tools/code AI | Graphite | braintrust.dev/customers/graphite |
| EdTech/AI grading | Coursera | braintrust.dev/customers/coursera |
| High AI volume, fragmented observability | Replit | braintrust.dev/customers/replit |
| Agentic AI scaling to production | Notion or Retool | see above |
| Financial services AI | Goldman, Ramp, Klarna, Stripe | reference logos only |

---

## Case Study Rules for Outreach
1. Never share Navan unless the prospect is building voice AI.
2. Always add a one-liner on why it's relevant to THEM.
3. Match the stat to the pain.
4. One case study per message.
5. All links verified as of March 2026.

---

## AE/SDR Engagement Model (from Notion SDR Hub)

**4 Non-Negotiable Components:**
1. Territory Planning: Align on account prioritization weekly. Use 5x5 or 10x5 framework (5-10 accounts, 5 contacts each).
2. Weekly 1x1s: 30-min recurring. SDR owns agenda. Structure: Meeting Forecast (5min) > Opportunity Forecast (5min) > Territory Planning (15min) > Next Steps (5min).
3. Consistent Communication: Share all meaningful responses (good or bad) via Slack in real-time. Don't wait for 1x1.
4. Intro Meeting Handoff: Debrief within 1 day. SDR needs to know if S0 converts to S1.

**PG Tactics:**
- Prospect Referrals: When prospect refers to another contact, get specific names, confirm info, ask for intro
- Bottoms Up: Start from IC/manager level, uncover pain, map org structure upward
- Top Down: Start from C-level/VP, attach to strategic goals using 10-K/10-Q reports
- Bi-directional: Attack from both levels simultaneously
- Synchronized PG: AE and SDR hit same contacts at same account with different messaging

---

## BYOC (Bring Your Own Compute)
- Minimum: $50K engagement
- Timeline: ~1 month engineering
- Existing hybrid customers can flip to BYOC in-place
- Use for: Large enterprises with governance, token consumption, or data residency concerns

---

## Logo Customers (Reference Only, No Public Case Study)
Stripe, Ramp, Vercel, Goldman Sachs, Klarna, Instacart, Robinhood
