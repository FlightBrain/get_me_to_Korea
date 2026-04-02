# Braintrust: Sales Objections & Competitive Positioning Guide

*Compiled April 1, 2026 | Sources: Slack, Notion Competitive Intelligence Hub, Gong analysis (686 calls / 3,188 competitive mentions), closed-won deal writeups, web research*

---

## Table of Contents
1. [Top 10 Objections SDRs Face & How to Handle Them](#1-top-10-objections-sdrs-face--how-to-handle-them)
2. [Competitive Positioning vs Major Competitors](#2-competitive-positioning-vs-major-competitors)
3. [The Build vs Buy Argument](#3-the-build-vs-buy-argument)
4. [What Makes Prospects Say Yes vs No](#4-what-makes-prospects-say-yes-vs-no)

---

## 1. Top 10 Objections SDRs Face & How to Handle Them

### Objection 1: "We're already using LangSmith"
**Frequency:** LangSmith has 1,083 mentions across 686 Gong calls -- the #2 most mentioned competitor.

**Handle it:**
- LangSmith is built specifically for LangChain/LangGraph. If the prospect is not 100% committed to LangChain, they're locked into a framework that limits flexibility. Prospects describe it as feeling "like Salesforce" -- "super robust" but intimidating.
- LangSmith's ClickHouse backend struggles at scale. Prospects report trace search becoming "basically impossible" at high volumes (6M+ traces/month).
- Braintrust is 24x faster on full-text search and supports Python, TypeScript, Ruby, and any framework.
- Evals in LangSmith require code changes. Braintrust's no-code playground and Loop AI let PMs and SMEs run evals without engineering tickets.
- Critical: CVE-2026-25750 disclosed a critical account takeover vulnerability in LangSmith (patched Dec 2025). Enterprise security teams at Aetna/CVS rejected LangSmith on security grounds.
- **Proof point:** Spotify chose Braintrust over LangSmith even when LangSmith offered their product for free. Masterschool reported LangSmith pricing at 3x Braintrust's cost. Rillet POC concluded "Braintrust can actually do more things than you can with LangSmith."

**Talk track:** "A lot of teams start with LangSmith because of the LangChain connection, and it works at first. Where we see teams start looking for alternatives is when they hit scale -- search slows down, non-engineers can't self-serve, and they realize they're locked into one framework. We're seeing companies like Spotify, Nubank, and Rillet move to Braintrust for exactly those reasons. Would it make sense to do a side-by-side on your actual traces?"

---

### Objection 2: "We're building it internally / We have a homegrown solution"
**Frequency:** The single most common objection. Build vs buy comes up in nearly every enterprise deal (Meta, Gusto, Superhuman, Brex, Elsevier, etc.).

**Handle it:**
- The real cost is 4-8 FTEs over 1-3 years, roughly $5-10M+ in 3-year TCO.
- Netflix estimated "7-8 FTEs over 2.5 years to build... that's over $10M of value driven immediately" by Braintrust.
- NYT: "Braintrust replaced 90% of what I built from scratch in two hours."
- Microsoft had 10 different teams each building their own internal solution. They consolidated onto Braintrust for ROI and cost savings.
- Internal tools create fragmentation -- each team builds its own UI, its own eval pipeline, and none of it is interoperable.
- The AI space moves too fast. Your internal team has to continuously build for new paradigms (agents, tool calling, MCP) while also maintaining what exists.

**Talk track:** "We hear this a lot, and honestly the teams that end up buying Braintrust are the ones who *could* build it -- they just realize the engineering hours are better spent on their core product. The question is really: should your AI team be building agents, or should they be building and maintaining an eval and observability platform? Netflix, NYT, and Microsoft all faced this exact decision."

**The "sandwich" technique (from Phil Bates):** When the internal platform team resists because their value to the org *is* maintaining the internal tool, go to the end users first. Help them feel the pain of the internal solution, then take that feedback upstairs. Get buy-in from below and above simultaneously.

---

### Objection 3: "We're using Arize / evaluating Arize"
**Frequency:** Arize has 596 mentions across Gong calls (19% of competitive mentions). Strong in enterprise ML teams.

**Handle it:**
- Arize started as an ML monitoring platform. LLM features were added later. Braintrust was purpose-built for GenAI from day one.
- Prospects report Arize can only run 25 eval rows at a time, with online evals randomly stopping mid-execution.
- Arize's cross-functional accessibility is weak -- non-engineers at Chewy literally reached out to explore alternatives because they couldn't use Arize effectively.
- Deutsche Telekom said: "The beauty of Arize for us like a year ago was that they kind of offered everything in one suite" -- past tense, signaling they no longer feel it meets their needs.
- UKG confirmed running "another eval service that sits outside of Arize" because Arize alone wasn't enough.
- **Proof point:** Spotify migrated from Arize to Braintrust. OpenSpace switched after Arize couldn't handle basic eval workflows. Clio chose Braintrust over Arize after cross-functional evaluation.

**Talk track:** "Arize is solid for traditional ML monitoring. Where teams run into challenges is when they need deep GenAI eval workflows -- agentic evals, CI/CD gates, cross-functional collaboration. We're seeing companies like Spotify and OpenSpace move from Arize to Braintrust specifically for those reasons. Want to compare eval workflows side-by-side on your use case?"

---

### Objection 4: "We're using Langfuse (open source / self-hosted)"
**Frequency:** Langfuse is the #1 most mentioned competitor at 1,195 mentions (37%).

**Handle it:**
- Langfuse was recently acquired by ClickHouse, which prospects find concerning.
- Self-hosting creates infrastructure burden. Prospects describe their own Langfuse deployment as "a problem."
- Performance lags behind Braintrust by 10x-80x at scale (per Brainstore benchmarks).
- Langfuse lacks collaborative eval workflows for non-technical users.
- **Proof point:** Greenlite tested Langfuse but "the team liked Braintrust more." Multiple enterprises (Lyra, Intapp, Aptean) are actively migrating from Langfuse.

**Talk track:** "Langfuse is a great starting point -- a lot of teams use it early on. Where we see the switch happen is when teams need to scale beyond basic tracing: faster search, cross-team collaboration, CI/CD eval gates, and not wanting to maintain ClickHouse infrastructure. We're actually helping several teams migrate from Langfuse right now. Would it help to see what that migration looks like?"

---

### Objection 5: "We use Datadog / our APM tool for this"
**Handle it:**
- Datadog and general APM tools monitor infrastructure metrics, not AI output quality. Prospects like Alma ruled out Datadog early for "not being purpose-built for LLM observability."
- Indeed dropped LangSmith and moved to Datadog for tracing but still lacked eval capabilities.
- PWC USA has an internal "push to use Langfuse and Datadog" but the prospect wants to present Braintrust as the alternative to both.
- AI observability requires understanding semantic quality, not just latency and error rates.

**Talk track:** "Datadog is great for infrastructure monitoring, but it doesn't answer the question 'is my AI actually giving good answers?' That's a fundamentally different problem. Teams need eval workflows, regression testing, and quality scoring that a general-purpose APM tool wasn't designed for. That's exactly the gap Braintrust fills."

---

### Objection 6: "Pricing seems high / LangSmith is cheaper per trace"
**Frequency:** Pricing conversations are common, especially in competitive evaluations vs LangSmith.

**Handle it:**
- LangSmith charges per trace with no platform fee, but costs scale exponentially with volume. Dialpad said LangSmith "ended up costing us more than the LLM itself."
- Braintrust's free tier includes 1M trace spans and 10K eval runs (vs LangSmith's 5K traces).
- Braintrust pricing: Pro at $249/month platform fee + $3/GB logs + $1.50/1K scores.
- For high-volume production usage, Braintrust is typically cheaper. SoFi deal example: LangSmith came in at 5-6x Braintrust's cost because per-score pricing disrupts LangSmith's model.
- AlphaSights found Braintrust "a lot better than what they were quoted by Arize (charged per span)."
- New Starter tier with pay-as-you-go overages removes the platform fee objection for smaller teams.

**Talk track:** "I hear you on pricing. Let's actually size it for your usage. What we find is that per-trace pricing models like LangSmith's seem cheap at first but scale exponentially. We had a customer at Dialpad who said LangSmith ended up costing more than the LLM itself. Our model is designed to stay predictable as you scale."

---

### Objection 7: "We have security / compliance / data residency concerns"
**Frequency:** Comes up consistently in financial services, healthcare, and enterprise deals (SoFi, KeyBank, HubSpot, Courier Health, Intel).

**Handle it:**
- Braintrust is SOC2 and HIPAA certified. All certs available at trust.braintrustdata.com.
- Hybrid deployment: customer hosts the data plane, Braintrust hosts the control plane. Data never leaves the customer's environment.
- Already used by Stripe, Robinhood, Ramp, Microsoft, and Notion in hybrid mode.
- EU data residency supported.
- BYOC (Bring Your Own Cloud) deployment option for maximum control.
- For PII/GDPR (especially EU/DACH): pseudonymize at the edge, apply client-side masking, use RBAC, configure retention windows. Full architecture reference available.
- Microsoft SSPA compliance confirmed (March 2026).

**Talk track:** "Security is our top priority too. We're SOC2 and HIPAA certified, and our hybrid deployment means your data never leaves your environment. Stripe, Robinhood, and Microsoft all run Braintrust this way. For GDPR, we have a reference architecture for pseudonymization at the edge. I can share our Trust Center and connect you with our security team."

---

### Objection 8: "We already use OpenAI / Anthropic's built-in eval tools"
**Handle it:**
- Provider eval tools only evaluate their own models. When you switch providers or use multiple models (which most enterprises do), you lose all evaluation continuity.
- Braintrust unifies evaluation across all models, custom benchmarks, and real-time monitoring.
- Multi-model support: OpenAI, Anthropic, AWS Bedrock, Azure, Google Vertex, and on-prem LLMs.

**Talk track:** "OpenAI's tools are great for evaluating OpenAI models specifically. But most teams we work with use multiple providers -- and they need to compare quality across them. Braintrust gives you one platform to evaluate everything, regardless of the model behind it. That's especially important as your team experiments with new models."

---

### Objection 9: "We don't have enough AI in production yet / too early"
**Handle it:**
- The best time to start is before production. CI/CD eval gates catch regressions before users see them.
- Teams that start with evals early iterate faster and ship with more confidence.
- Free tier includes 1M trace spans -- plenty to start without commitment.
- Braintrust onboards in minutes, not months.

**Talk track:** "Actually, the teams that get the most value from Braintrust are the ones that start before they're fully in production. Setting up evals early means you catch problems before your users do, and your iteration speed is dramatically faster. Our free tier gives you 1M trace spans to get started -- no commitment required."

---

### Objection 10: "Is this just for engineers? Our PMs / business team won't use it"
**Handle it:**
- This is actually Braintrust's biggest differentiator. The no-code playground lets PMs and SMEs run experiments without writing code.
- Loop AI writes evaluation code for non-technical users.
- Human review UI with kanban-style triage for quality workflows.
- Executive dashboards for leadership visibility.
- LangSmith is "the reason almost no one else at the company uses it" beyond the initial engineering adopter. Arize is primarily designed for ML/DS teams.
- Clari confirmed: their biggest gap with LangSmith is that "engineering team owns all observability and metrics while PMs and business users are dependent on dev cycles."

**Talk track:** "This is actually one of the main reasons companies choose Braintrust over alternatives. Our platform is built for cross-functional teams. PMs can run experiments in the playground without writing code, Loop AI writes evals for them, and executives get dashboards that show AI quality trends. With LangSmith or Arize, typically only engineers can use it."

---

## 2. Competitive Positioning vs Major Competitors

### vs LangSmith (1,083 Gong mentions -- 34% share)

| Dimension | Braintrust Advantage | LangSmith Weakness |
|-----------|---------------------|-------------------|
| **Framework** | Model & framework agnostic (Python, TS, Ruby) | Tightly coupled to LangChain/LangGraph |
| **Performance** | 24x faster full-text search; Brainstore engine | ClickHouse struggles at scale; "basically impossible" search at 6M+ traces |
| **Evals** | CI/CD gates block bad deploys; no-code playground | Evals require code changes; dev-centric |
| **Cross-functional** | PMs, SMEs can self-serve via Loop AI, playground | "Almost no one else at the company uses it" beyond initial adopter |
| **Pricing** | 1M free traces; predictable usage-based | 5K free traces; per-trace pricing scales exponentially |
| **Security** | SOC2, HIPAA, hybrid deploy; no critical CVEs | CVE-2026-25750 critical account takeover; security team rejections |
| **Self-hosted** | Managed hybrid (customer hosts data plane) | Requires operating ClickHouse + K8s yourself |

**Key displacement signals:** Prospects describe LangSmith as "the champion and this is the challenger." Win by showing performance at scale, cross-functional usability, and framework flexibility. Start alongside LangSmith, then phase in.

**Win story:** Spotify ($1M TCV), Rillet ("can actually do more things than LangSmith"), Nubank (active migration), Masterschool (LangSmith 3x more expensive).

---

### vs Arize (596 Gong mentions -- 19% share)

| Dimension | Braintrust Advantage | Arize Weakness |
|-----------|---------------------|---------------|
| **Origin** | Purpose-built for GenAI from day one | ML monitoring platform with GenAI bolted on |
| **Evals** | Deep agentic evals, CI/CD gates, custom scorers | 25-row eval limit; online evals stop randomly; "doesn't really have agentic eval suites" |
| **Cross-functional** | PMs and SMEs can self-serve | ML/DS-centric; non-engineers can't use effectively |
| **Speed** | Brainstore for fast iteration | Slower debugging loops; support responsiveness issues |
| **Unified platform** | Eval + observability in one system | Teams run "another eval service outside of Arize" |
| **Deployment** | Hybrid, EU, SaaS | Comparable SaaS; less hybrid flexibility |

**Key displacement signals:** Position as GenAI-native vs traditional ML platform. Target accounts where Arize is used for monitoring but evals are stitched together separately. AT&T acknowledged: "When we have 300 use cases running on Arize, it is extremely difficult to switch" -- so suggest starting new LLM projects on Braintrust while keeping legacy ML on Arize.

**Win story:** Spotify (migrated from Arize), OpenSpace (switched after eval failures), Clio (won cross-functional eval with MLEs + PMs).

---

### vs Langfuse (1,195 Gong mentions -- 37% share)

| Dimension | Braintrust Advantage | Langfuse Weakness |
|-----------|---------------------|------------------|
| **Performance** | 10x-80x faster at scale (Brainstore) | ClickHouse backend; prospects call it "a problem" |
| **Managed service** | SaaS, hybrid, EU -- no infra to manage | Self-hosted = infrastructure burden |
| **Collaboration** | Cross-functional platform | Engineering-centric; no business-user workflows |
| **Evals** | CI/CD gates, remote evals, Loop AI | Less sophisticated agent eval capabilities |
| **Stability** | Independent company | Acquired by ClickHouse (causes concern) |
| **Dataset ops** | Full versioning, golden sets, live traffic | No intuitive dataset/scenario management |

**Key displacement signals:** Target self-hosting users with scale pain. Highlight collaboration features. Leverage ClickHouse acquisition concerns.

---

### vs MLflow / Databricks (172 Gong mentions -- 5% share)

| Dimension | Braintrust Advantage | MLflow Weakness |
|-----------|---------------------|----------------|
| **Architecture** | LLM-first, purpose-built | Traditional ML; struggles with semi-structured JSON |
| **UX** | Unified for all roles | "Very disjointed... very much the AI engineer point of view" |
| **LLM workflows** | Native agent, RAG, tool calling support | "MLflow kills it for traditional ML but in LLM space there's more competition" |

**Signal:** Ex-Databricks employees cite MLflow as "a big reason why I left Databricks."

---

### vs Internal / Homebrew Solutions

See Section 3 below for the full build vs buy framework.

---

## 3. The Build vs Buy Argument

### The Core Framework

**The question to pose:** "Should your AI team be building agents and shipping product, or should they spend 1-3 years building and maintaining an eval and observability platform?"

### Cost Comparison

| Factor | Braintrust | Internal Build |
|--------|-----------|---------------|
| **Staffing** | No dedicated platform team | ~4-8 FTEs over 1-3 years |
| **3-year TCO** | Predictable usage-based pricing | ~$5-10M+ (fully loaded senior eng costs) |
| **Time to value** | Onboard in minutes | 6-12 months to MVP |
| **Maintenance** | Managed updates, scaling, infra | Continuous ownership of reliability + upgrades |
| **Iteration speed** | CI/CD gates, no-code playground, Loop AI | Manual QA, brittle pipelines |
| **Cross-functional** | Shared platform for eng, PM, SME | Engineering-centric; non-technical users depend on dev cycles |
| **Security** | SOC2, HIPAA, SSO, RBAC included | Must be built and maintained |

### Killer Quotes for Prospects

- **Netflix:** "Would have taken 7-8 FTEs over 2.5 years to build... that's over $10M of value driven immediately."
- **New York Times:** "Braintrust replaced 90% of what I built from scratch in two hours."
- **Microsoft:** "Had 10 different teams each building their own internal solution. Consolidated onto Braintrust due to ROI, cost savings, and ability to reallocate engineering focus."
- **Magic School:** "Was building everything in-house previously and it became a major task to update and maintain."

### Counter-Arguments for Common Push-backs

**"But our platform team's job IS to build this"**
Use the "sandwich technique": Get end users to articulate the pain of the internal solution, then take that feedback to leadership. The internal platform team's value should be building what's unique to the company, not recreating commodity infrastructure.

**"It's more about the role of the AI platform team -- do they invest in owning their own long-term internal roadmap or rely on a vendor?"** (actual Gusto objection)
Frame it as: the platform team becomes MORE valuable when they focus on company-specific AI infrastructure (custom models, unique data pipelines, domain-specific tooling) rather than rebuilding eval/observability tooling that already exists.

**"We have working internal tools already"**
Acknowledge the investment, then highlight fragmentation risk. Microsoft had 10 teams each building their own solution. As AI scales across the org, internal tools fragment -- each team builds its own UI, pipeline, and none interoperates.

**"The AI space is moving too fast to depend on a vendor"**
Flip it: the AI space is moving too fast to build your own. Your internal team has to continuously build for new paradigms (agents, tool calling, MCP, multi-modal) while also maintaining what exists. Braintrust ships updates daily to keep pace.

---

## 4. What Makes Prospects Say Yes vs No

### Why Prospects Say YES (from closed-won deal writeups)

**Top buying triggers, ranked by frequency in deal writeups:**

1. **Eval-driven quality gates / CI/CD integration** -- "You won't be able to ship unless you have a passing eval" (Zendesk). Teams want to enforce quality before deployment, not after.

2. **Cross-functional collaboration** -- PMs, SMEs, and engineers all need access. HubSpot: "Internal evaluation tooling had low adoption, creating risk of inconsistent GenAI feature quality." Braintrust ensures all stakeholders are included.

3. **Replacing fragmented internal tools** -- Spotify had a "Tower of Babel" problem with hundreds of squads using separate tools. Ironclad relied on "Jira tickets and manual reviews with engineers" for prompt iteration. Consolidation onto one platform is a recurring driver.

4. **Speed of onboarding** -- Greenlite: "They loved how responsive we were. They came in hot in our 1st call with complex use cases and we had them up and running in days." Everlab: "Operating in the dark with little to no eval infrastructure."

5. **Hybrid deployment / data control** -- Non-negotiable for financial services (SoFi, KeyBank), healthcare (Courier Health, Everlab), and regulated industries. "Your data never leaves your environment."

6. **Scale / performance** -- Gusto went from pilot to $478K upsell because Braintrust handled their production AI agent (Gus) at scale across the entire platform.

7. **Cost savings vs alternatives** -- AlphaSights found Arize "very expensive" per-span. Masterschool found LangSmith at 3x cost.

### Why Prospects Say NO (from lost deals and stalled deals)

1. **Build vs buy inertia** -- Platform teams whose value IS maintaining internal tools. Most common in large tech (Meta, Brex, Superhuman). The internal team sees Braintrust as a threat to their role.

2. **Incumbent lock-in** -- Deep LangSmith/LangChain ecosystem investment. Provenir: "LangSmith is the champion and this is the challenger." Hard to unseat when entire agent architecture is built on LangChain.

3. **Pricing misalignment** -- Anchoring too low early in the deal, then struggling to close at the right number. Fabric: "We anchored at $35k / they budgeted for $24k / their scoped usage is sub $5k."

4. **No executive sponsor** -- Deals that are single-threaded through technical champions without VP+ engagement stall. Commerce deal: "less than 1 GB ingested... nobody at VP+ knows about the value BT is delivering."

5. **Security/compliance blockers** -- DPA requirements, works council objections (EU/DACH), or platform team refusing non-standard deployments (HubSpot K8s requirement).

6. **Timing / budget** -- "Push to next quarter" cycle. Enterprise procurement timelines don't match sales timelines.

### The Decision Pattern

**Prospects who buy** typically follow this pattern:
- Multiple AI use cases in production or heading to production
- Pain with existing tooling (internal, Langfuse, LangSmith, or Arize)
- Cross-functional need (not just engineering)
- Executive awareness of AI quality risks
- Budget allocated or allocable for AI infrastructure

**Prospects who don't buy** typically:
- Have a strong internal platform team whose identity is tied to the internal solution
- Are early in AI maturity (1 use case, not yet in production)
- Are single-threaded through one technical champion
- Have deep sunk cost in an existing competitor

---

## Quick Reference: Key Competitive Resources

| Resource | Location |
|----------|----------|
| Competitive Intelligence Hub (auto-updated daily) | [Notion: Competitive Intelligence Hub](https://www.notion.so/braintrustdata/Competitive-intelligence-hub-c4b82b2f4f2542c08ab84d33acd1635a) |
| Competitive Intel Bot | https://ci-bot.preview.braintrust.dev/login |
| LangSmith Battle Card | [Notion: LangSmith](https://www.notion.so/d0ea3fab676a4d968de09265da07656f) |
| Arize Battle Card | [Notion: Arize](https://www.notion.so/cb41f573fac041d4a94faf2ecd0be195) |
| Build vs Buy One-Pager | [Notion: Build vs Buy](https://www.notion.so/469a4becc0d24b6d93d3c891b41959f6) |
| Langfuse Battle Card | [Notion: Langfuse](https://www.notion.so/d5b2d3f76a1844fb9b03b4240a80c50c) |
| MLflow Battle Card | [Notion: MLflow on Databricks](https://www.notion.so/7c88b80bdf9143ff9eacf752c1cabefc) |
| Objection Handling: PII/GDPR | [Notion: PII Objection Handling](https://www.notion.so/306f7858028980069a5af99921235e87) |
| Gong Competitive Analysis | [Notion: Competitive Analysis from Gong](https://www.notion.so/2f1f785802898051b3caffba0514e02d) |
| Trust Center | https://trust.braintrustdata.com |

---

*This document synthesizes data from Braintrust's Slack workspace (#sales, #deals, #competitive channels), Notion Competitive Intelligence Hub (auto-updated daily by CI agent), Gong call analysis (3,188 competitive mentions across 686 calls), closed-won deal writeups, and web research on competitor positioning.*
