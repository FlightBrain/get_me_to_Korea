# Braintrust Customers & Case Studies -- Comprehensive Research Summary

**Last updated:** 2026-04-01
**Sources:** Braintrust website, Slack (#deals, #sales, #gtm, #marketing), Notion (Customer Stories Outreach Guide, deal records), web search

---

## 1. Company Overview

Braintrust is the leading AI observability and evaluation platform for building, scaling, and optimizing AI products and agents. It helps teams measure, evaluate, and improve AI quality from pre-production experimentation through production monitoring.

- **Funding:** $80M Series B (Feb 2026, led by ICONIQ) at $800M valuation. $36M Series A (Oct 2024). $121M total raised.
- **Investors:** ICONIQ Capital, Andreessen Horowitz, Greylock, Elad Gil, basecase capital
- **Customers:** 600+ organizations including Microsoft, Goldman Sachs, Netflix, Airbnb, Perplexity, OpenAI, Spotify, Notion, Stripe, Dropbox, and more

---

## 2. Key Customers & What They Use Braintrust For

### Tier 1: Flagship / Public Case Studies

| Customer | Industry | Use Case | Key Metric | Link |
|----------|----------|----------|------------|------|
| **Notion** | Productivity / SaaS | Eval framework across 70 engineers, frontier model deployment, multilingual quality | Deploys new models in <24 hours; 80% of AI team work based on Braintrust traces | braintrust.dev/customers/notion |
| **Zapier** | Workflow Automation | Full AI dev lifecycle: prototype, ship, collect feedback, iterate | 50% to 90%+ accuracy in 2-3 months | braintrust.dev/customers/zapier |
| **Navan** | Travel & Expense | Voice AI agent (Miles) calling hotels; eval-driven development | 0.9+ macro F1 score; hundreds of daily calls supervised automatically; 95%+ adoption/task success rates going GA to 10,000+ customers | braintrust.dev/customers/navan |
| **Dropbox** | Cloud Storage / Search | Eval pipeline for Dash (AI universal search); regression testing per PR | 10,000+ tests in full eval suite; eval turnaround <10 min per PR | braintrust.dev/customers/dropbox |
| **Retool** | Dev Tools / Low-Code | Production log analysis with Loop; AI copilot roadmap decisions | 25% accuracy improvement; classifier accuracy 72% to 95%; weeks of log analysis reduced to minutes | braintrust.dev/customers/retool |
| **Replit** | Developer Platform | Pattern detection across millions of AI sessions; unified observability | Hundreds of production examples surfaced per issue; replaced multiple fragmented tools | braintrust.dev/customers/replit |
| **Graphite** | Developer Tools | AI code review quality (Diamond feature); data-driven model deployment | 5% reduction in negative rules; 90%+ target acceptance rate | braintrust.dev/customers/graphite |
| **Coursera** | EdTech | AI grading & Coursera Coach chatbot evaluation | 45x more feedback; 90% learner satisfaction; 16.7% increase in course completions | braintrust.dev/customers/coursera |

### Tier 2: Major Enterprise Wins (from Slack #deals)

| Customer | Industry | ACV | Key Details |
|----------|----------|-----|-------------|
| **Spotify** | Music / Audio | $500K ACV ($1M TCV, 2yr) | Org-wide standard for 700M+ MAU platform. Beat Arize, LangSmith, and DIY in competitive POC. BT queries "3-5x faster than LangSmith, 10x faster than Arize." Netflix & Stripe were reference calls. |
| **Goldman Sachs** | Financial Services | $80K ACV ($138.4K TCV) | Second major bank. Tested 10+ vendors. Hybrid deployment. Global Head of AI told exec staff they're "flying blind without Braintrust." |
| **KeyBank** | Financial Services | $172K ACV ($344K TCV, 2yr) | Enterprise rollout backed by Global CDO and CIO. 50+ stakeholders, 15+ competitors evaluated. |
| **Thomson Reuters** | Legal / Professional Services | $362K ACV ($264K upsell) | Enterprise-wide standard replacing Langfuse. Perfect 5/5 across all evaluation criteria vs. competitor's 2-3. |
| **Gusto** | HR / Payroll | $520.5K ACV ($478.9K NACV upsell) | Backbone of "develop AI everywhere" initiative. Flagship agent Gus integrated across platform. Evals-driven development as future of how they build. |
| **SoFi** | Fintech / Banking | $162.75K ACV | AI agents across engineering, risk, and data science. Framework agnostic (LangGraph, OpenAI, Sierra). Beat LangSmith. A bank buying SaaS (rare). |
| **The New York Times** | Media | $148K ACV | Unified eval + observability replacing fragmented tools. POC completed in half the expected time. |
| **News Corp** | Media | $50K ACV | Covers Dow Jones, News UK, New York Post. Hybrid deployment. Replacing Excel-based newsroom workflows. |
| **Klaviyo** | Marketing / E-commerce | $120K ACV | Agent evals for Marketing Agent serving 193K brands. Beat Arize on agentic eval capabilities. |
| **Travelers** | Insurance | $142K ACV | One of America's largest insurers. Centralized evaluation framework across multiple personas. |
| **Navan** | Travel | NDR win (expansion) | Israeli team who built their own eval infra can't maintain it; switching to Braintrust for crown jewel agent "Ava." |

### Tier 3: Known Customers (Referenced in materials)

- **Microsoft**, **Netflix**, **Airbnb**, **Perplexity**, **OpenAI** (mentioned in outreach as customers)
- **Stripe**, **Vercel**, **BILL**, **Ramp**, **Cloudflare**, **Airtable**, **Instacart**, **Coda**, **The Browser Company**
- **Zendesk** -- optimized LLM spend by 40% in 6 months; eval maturity now a board-level M&A question
- **Box** -- ML engineers, SWEs, and PMs using daily; built custom eval runner integrating with Braintrust; B2B2C use case
- **BigCommerce** -- Multiple AI projects (data enrichment, visual builder agent, store management agent); Topics feature highly praised
- **Adobe**, **Block (Square/Cash App)**, **HubSpot** -- active prospects/customers
- **SoFi**, **Masterschool**, **Gyde**, **GlossGenius**, **Atlan**, **Fintool**, **Loom**, **Browserbase**, **Tango**, **Pharos**, **BetterUp**, **Sendbird**

---

## 3. Case Study Details with Specific Results

### Zapier: 50% to 90%+ Accuracy
- **Champion:** Mike Knoop, Co-Founder & Head of AI
- **Problem:** AI products shipping at sub-50% accuracy
- **Solution:** 7-step eval-driven development lifecycle using Braintrust for logging, datasets, scoring, and experiment comparison
- **Result:** 90%+ accuracy within 2-3 months across products serving 2M+ users and 4,000+ app integrations
- **Quote:** "With this feedback loop in place, Zapier has improved many of their AI products from sub-50% accuracy to 90%+ within 2-3 months."

### Notion: 70 Engineers, One Framework
- **Champion:** Sarah Sachs, AI Modeling Lead
- **Problem:** Scaling evals across large engineering org; catching multilingual edge cases
- **Solution:** Full agentic evaluation framework; regression + frontier model testing tracks
- **Result:** Deploys new frontier models within hours of release; 80% of AI team work based on Braintrust; one APAC multilingual eval was "probably one of the top improvements in quality in the past year"
- **Quote:** "There are some problems we wouldn't know were problems without Braintrust."

### Navan: Voice AI at Scale
- **Champion:** Sarav Bhatia, Sr. Director of Engineering
- **Problem:** Measuring voice AI agent quality at scale without listening to every call
- **Result:** F1 score improved from 0.56 to 0.89+; hundreds of daily calls supervised automatically; 95%+ adoption and task success rates at GA
- **Quote:** "I've been launching a lot of AI products lately, a lot of agents, and could not have done it without having Braintrust as part of the process."
- **Quote:** "You don't want to be in a place where your customer team has to come to engineers... Braintrust empowers the entire organization."

### Zendesk: 40% LLM Cost Reduction
- **Champion:** Abhi (from RKO customer session)
- **Problem:** Over-reliance on expensive models
- **Result:** Optimized LLM spend by over 40% in six months by testing models and migrating model families
- **Quote:** "We were able to optimize our LLM spend by over 40% with Braintrust in about six months."
- **Quote:** "Even when we're looking at acquisitions now, the first question the board asks is, 'What is their eval maturity?' The board gets it."

### Retool: Production Logs to Roadmap
- **Champion:** Allen Kleiner, AI Engineering Lead
- **Result:** Classifier accuracy 72% to 95%; discovered multi-page app support as #1 unmet need through Loop analysis
- **Quote:** "Loop helps us understand trace details that would be impossible to scan manually."

### Spotify: Org-Wide Standard
- **Result:** Beat Arize, LangSmith, and DIY in competitive POC; BT queries 3-5x faster than LangSmith, 10x faster than Arize
- **Quote:** "It feels like Braintrust was built from the beginning to be Hybrid."

### Goldman Sachs: Enterprise AI Infrastructure
- **Result:** Tested 10+ vendors; answered 3,000+ security questions
- **Quote:** Global Head of AI told exec staff they're "flying blind in AI without Braintrust and we needed to push this through. He's never pushed this hard for them to buy a product."

### BILL: Trust from Day Zero
- **Champion:** Mohsen Sardari, VP Engineering
- **Quote:** "We're in a regulated fintech world where people are very suspicious of quality... a tool like Braintrust from day zero gave people that visibility -- not just engineers, but product managers and everyone in the process -- to double-click on quality."

### Dropbox: Eval Pipeline for AI Search
- **Champion:** Josh Clemm, VP of Engineering
- **Result:** 10,000+ tests; eval turnaround under 10 minutes per PR; every prompt change treated like production code
- **Quote:** "We can run hundreds to thousands of experiments with Braintrust."

### Coursera: AI Grading at Scale
- **Result:** 45x more feedback; 90% learner satisfaction; 16.7% increase in course completions
- **Use case:** AI-powered grading replacing manual TA grading with results in under 1 minute

### New York Times: Unified AI Platform
- **Quote:** "I've started using Braintrust with the Search project and it was so easy to set up and the built in features replaced 90% of what I had built from scratch in like two hours."
- **Quote:** "We did not know we were pushing 12 articles into the context of this prompt. And we probably don't need that much text... instantly, in the logs, you quickly learn stuff, which is awesome."

### Hostinger: Customer Support Automation
- **Result:** Automated over 40% of customer support chat conversations
- **Note:** Churned customer as of early 2026 (flagged internally)

---

## 4. Industries & Verticals Buying

| Vertical | Examples | Notes |
|----------|----------|-------|
| **Developer Tools / Platforms** | Notion, Replit, Vercel, Retool, Graphite, Airtable, The Browser Company | Largest concentration of customers; strong product-market fit |
| **Financial Services / Fintech** | Goldman Sachs, KeyBank, SoFi, Stripe, Ramp, BILL, Robinhood, Klarna | High-security requirements drive hybrid/BYOC deployment; compliance/risk management use cases |
| **Enterprise SaaS** | Spotify, Zendesk, Salesforce, HubSpot, Gusto, Klaviyo, Thomson Reuters | Org-wide standardization; multi-team adoption |
| **Media & Publishing** | New York Times, News Corp (Dow Jones, NY Post, News UK) | Replacing fragmented/manual eval workflows |
| **E-commerce / Marketplaces** | Instacart, Zapier, BigCommerce | Accuracy improvement, automation quality |
| **Travel & Hospitality** | Navan | Voice AI, agent evaluation |
| **EdTech** | Coursera, Masterschool | AI grading, conversational AI for learning |
| **Healthcare** | Gyde, Pharos, Courier Health | Compliance-first; BAA requirements; high-risk output evaluation |
| **Insurance** | Travelers | Risk mitigation, auditable eval framework |
| **Cloud / Infrastructure** | Cloudflare, Dropbox, Box | Search AI, RAG, B2B2C use cases |

**Strongest verticals by deal volume and ACV:** Developer Tools, Financial Services, Enterprise SaaS

---

## 5. Buyer Persona Analysis

### Who Typically Buys

| Persona | Role Examples | How They Engage | Frequency |
|---------|---------------|-----------------|-----------|
| **AI/ML Engineering Lead** | Sarah Sachs (Notion), Allen Kleiner (Retool), Sarav Bhatia (Navan) | Hands-on technical evaluator; becomes champion | Most common initial buyer |
| **VP/Sr. Director of Engineering** | Josh Clemm (Dropbox), Jesse Bridgewater (SoFi), Mohsen Sardari (BILL) | Decision maker; demands velocity and ROI | Common economic buyer |
| **CTO** | Malte Ubl (Vercel), Luis Hector Chavez (Replit) | Top-down mandate for org-wide standard | Enterprise deals |
| **Co-Founder / Head of AI** | Mike Knoop (Zapier) | Visionary buyer; sets AI development methodology | Startup/growth-stage |
| **Product Manager (Technical)** | GlossGenius AI Lead (PM), BigCommerce PMs | Non-engineering buyer; values low-code/playground access | Growing segment; key differentiator vs. competitors |
| **VP of Data Science** | Jesse Bridgewater (SoFi) | Evaluates eval infrastructure as "supply chain for AI" | Financial services |
| **Global Head of AI / CDO / CIO** | Goldman Sachs, KeyBank | Executive sponsor; drives enterprise-wide adoption | Large enterprise |

### Key Insight on Persona
Braintrust's ability to serve **multiple personas** (engineers + PMs + SMEs + ops) is a consistent competitive differentiator. Several deals were won specifically because competitors (LangSmith, Arize, Langfuse) were perceived as "engineer-only" tools.

- **GlossGenius** was explicitly won because the AI Lead was a PM
- **Gusto** is making Braintrust the standard for "any builder working in AI scope -- PMs, designers, SMEs"
- **Navan** emphasized that "your product team, your ops team, your engineering team can all just go to Braintrust"
- **BILL** valued that Braintrust gives "not just engineers, but product managers and everyone in the process" visibility

---

## 6. Common Use Cases That Close Deals

### Primary Use Cases (in order of frequency)

1. **Eval-driven AI development** -- Systematic evaluation framework to measure and improve AI quality (Zapier, Notion, Navan, Gusto, all enterprise deals)

2. **Production observability & tracing** -- Monitoring AI in production, finding failure modes, debugging at scale (Replit, Retool, Box, BigCommerce)

3. **Agent evaluation** -- Testing and evaluating agentic AI systems including multi-step reasoning, tool usage, and path-finding (Klaviyo, Navan, Atlan, SoFi)

4. **Model selection & cost optimization** -- Testing models, migrating model families, reducing LLM spend without sacrificing quality (Zendesk: 40% cost reduction; Block: 35-40% cost reduction target)

5. **Regression testing & CI/CD integration** -- Catching quality regressions before deployment; evals on every PR (Dropbox, Notion, Graphite)

6. **Cross-functional collaboration** -- Enabling PMs, SMEs, and non-engineers to participate in AI quality (Gusto, GlossGenius, BILL, Thomson Reuters)

7. **Voice AI evaluation** -- Specialized eval for voice agents (Navan, Gyde, Sendbird prospect)

8. **Replacing DIY / competitor tools** -- Migration from LangSmith, Langfuse, Arize, or homegrown systems (Thomson Reuters, Masterschool, Spotify, SoFi, multiple others)

### What Triggers the Buy

- "We can't tell if our agent is improving or regressing" (Klaviyo)
- "We're flying blind in AI" (Goldman Sachs)
- "We need to move faster" (Klaviyo, SoFi)
- LangSmith/Arize/Langfuse pricing or feature limitations (Masterschool, GlossGenius, Atlan, Thomson Reuters)
- Scaling from POC to production (Atlan, BigCommerce)
- Board/exec mandate for AI quality infrastructure (Zendesk M&A, Gusto, Spotify)
- Compliance/security requirements needing hybrid deployment (Goldman Sachs, KeyBank, Travelers, SoFi)

---

## 7. Customer Quotes & Testimonials

### On Business Impact

> "I've been launching a lot of AI products lately, a lot of agents, and could not have done it without having Braintrust as part of the process."
> -- **Sarav Bhatia, Sr. Dir. of Engineering, Navan**

> "We were able to optimize our LLM spend by over 40% with Braintrust in about six months... by testing models, migrating model families, and not just relying on the biggest, most expensive model."
> -- **Abhi, Zendesk**

> "We're in a regulated fintech world where people are very suspicious of quality... a tool like Braintrust from day zero gave people that visibility -- not just engineers, but product managers and everyone in the process -- to double-click on quality."
> -- **Mohsen Sardari, VP Engineering, BILL**

> "There are some problems we wouldn't know were problems without Braintrust."
> -- **Sarah Sachs, AI Lead, Notion**

### On Organizational Value

> "You don't want to be in a place anymore where your customer team, your account management team, has to come to engineers... your product team, your ops team, your engineering team can all just go to Braintrust and see exactly in those traces how the agent reasoned... it really empowers the entire organization."
> -- **Sarav Bhatia, Navan**

> "Even when we're looking at acquisitions now, the first question the board asks is, 'What is their eval maturity?' The board gets it."
> -- **Abhi, Zendesk**

> "Braintrust helps us ship AI agents customers actually trust."
> -- **Mohsen Sardari, VP Engineering, BILL**

### On Technical Capability

> "Braintrust helped us identify several patterns that we wouldn't have found."
> -- **Luis Hector Chavez, CTO, Replit**

> "We can run hundreds to thousands of experiments with Braintrust."
> -- **Josh Clemm, VP of Engineering, Dropbox**

> "We didn't realize we needed deep observability until Braintrust."
> -- **Malte Ubl, CTO, Vercel**

> "Loop helps us understand trace details that would be impossible to scan manually."
> -- **Allen Kleiner, AI Engineering Lead, Retool**

### On Replacing Competitors

> "I've started using Braintrust with the Search project and it was so easy to set up and the built in features replaced 90% of what I had built from scratch in like two hours."
> -- **Engineer, New York Times**

> "It feels like Braintrust was built from the beginning to be Hybrid."
> -- **Spotify team (during competitive POC)**

> "[LangSmith pricing] doesn't make any sense... you basically force me to leave."
> -- **Masterschool (switched from LangSmith)**

### On Eval Philosophy

> "Eval-driven development is the new test-driven development."
> -- **Sarav Bhatia, Navan**

> "The first question from the business is always, 'show me some data. How effective is this system?'"
> -- **Patrick Edelman, BigCommerce**

---

## 8. Competitive Landscape (from deal intel)

| Competitor | How Braintrust Wins Against Them |
|------------|----------------------------------|
| **LangSmith** | Pricing (per-trace model too expensive at scale); UI/UX; performance (3-5x faster queries per Spotify); framework agnosticity; PM/non-engineer accessibility |
| **Arize** | Lacks agentic eval suite; interface-first not embedded; tracing described as "snapshot"; 10x slower queries (Spotify) |
| **Langfuse** | Not enterprise-ready; accessibility issues for non-technical users; Thomson Reuters gave 5/5 to BT vs 2-3 to Langfuse |
| **DIY / Homegrown** | 6-9 months to build MVP, 2-3 years to match Braintrust (Spotify estimate); maintenance burden; can't maintain at scale (Navan Israeli team) |

---

## 9. Key Competitive Advantages That Win Deals

1. **Multi-persona support** -- Engineers + PMs + SMEs can all use the platform (not just engineers)
2. **Performance at scale** -- Brainstore enables sub-1s trace queries on terabytes of data
3. **Hybrid/BYOC deployment** -- Critical for financial services, healthcare, enterprise
4. **Framework agnosticity** -- Works with LangGraph, OpenAI, Vercel AI SDK, Google ADK, etc.
5. **Enterprise security** -- 3,000+ security questions answered for Goldman; BAA for healthcare
6. **Topics feature** -- Auto-clusters production traces; customers "light up" during demos
7. **Loop** -- AI assistant for natural-language trace analysis; enables non-engineers
8. **High-touch support** -- Consistently cited as reason for winning; fast response times in shared Slack channels
9. **Customer references** -- Netflix, Stripe, Goldman Sachs as reference calls

---

## 10. Notable Data Points for Sales/Marketing

- **600+ customers** as of early 2026
- **$800M valuation** at Series B
- Spotify deal: **$1M TCV** -- largest known deal
- Gusto upsell: **$520K ACV** from $40K initial land -- 13x expansion
- Retool renewal: **300% NDR** ($30K to $99.8K)
- Thomson Reuters: **Perfect 5/5 evaluation scores** in competitive POC
- Goldman Sachs: "He's never pushed this hard for them to buy a product" (re: Global Head of AI)
- Zendesk: Eval maturity is now a **board-level M&A question**
- Notion: Goes from **fixing 3 issues/day to 30** after adopting platform
- Zapier: **50% to 90%+ accuracy** in 2-3 months
- Hostinger: Automated **40% of customer support** conversations (note: churned)

---

*Sources: braintrust.dev/customers, braintrust.dev/blog/announcing-series-b, Slack #deals/#sales/#gtm/#marketing channels, Notion Customer Stories Outreach Reference Guide, web search results from siliconangle.com, axios.com, venturebeat.com, techfundingnews.com*
