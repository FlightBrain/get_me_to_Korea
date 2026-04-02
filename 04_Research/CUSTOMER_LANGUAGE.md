# Customer Language & Messaging Framework

**Purpose:** Real phrases customers use to describe AI evaluation and quality problems. Use these in outreach, discovery, and positioning to establish credibility and show you understand their world.

**How to Use:**
- Reference these phrases during cold outreach (it signals you've talked to their peers)
- Use Pain Language in discovery to uncover problems
- Deploy Buying Language in closing conversations
- Capture new phrases in this file with source and date

---

## PAIN LANGUAGE BY PERSONA

### Engineers: Evaluation Bottlenecks & Operational Burden
- "We're spending 60% of our engineering time on manual testing"
- "We're running the same LLM test 50 times a week, manually"
- "We can't test every edge case before shipping"
- "Our QA process is completely manual—we're not scaling"
- "We built something custom but now we need to maintain it"
- "We need a way to automate testing but don't know where to start"
- "Our eval process is just spreadsheets right now"
- "We'd hire an eval engineer but they'd just rebuild what we need"
- "Regression testing before model updates is killing our shipping velocity"
- **Buying signal:** "How quickly can we integrate this into our CI/CD pipeline?"
- **Source:** Reddit r/LLM, direct customer calls, GitHub issue discussions

### Engineers & PMs: Hallucination & Quality Concerns
- "We launched a feature and customers immediately complained about hallucinations"
- "We don't know if the model is actually better, we just hope"
- "Our users are getting completely made-up information from the AI"
- "We can't ship new models because we have no way to validate quality"
- "Hallucinations are killing our customer trust"
- "We're terrified to upgrade to a new model version without months of testing"
- "Should we go with Claude 3.5 or stick with GPT-4? We have no way to know."
- "We want to catch quality issues before customers do"
- "We're confident the new version is better, but can't prove it"
- **Buying signal (Engineers):** "Can we test in parallel?" or "How do we debug production issues?"
- **Buying signal (PMs):** "Can I show my CEO the quality metrics?" or "How do I justify model selection to investors?"
- **Source:** Direct calls, Reddit threads, Hacker News, PM Slack communities

### Engineers & PMs: Cost & Efficiency Concerns
- "We're spending $30K/month on inference just for testing"
- "We can't afford to run evaluation on every model change"
- "Our eval costs are almost as much as production inference"
- "We need to do more testing but the costs are unsustainable"
- "Evaluating new models before shipping is eating our budget"
- **Buying signal:** "How much would this save us on inference costs?" or "Can you reduce our eval footprint?"
- **Source:** Founding team calls, LinkedIn discussions, Y Combinator batch companies, direct calls

### Engineers & VPs: Scaling Challenges
- "We're adding more LLM providers and now we have no unified way to test them"
- "We're using OpenAI, Anthropic, and Cohere and each needs different evaluation"
- "Scaling quality with our user base is harder than scaling infrastructure"
- "Every new feature doubles our testing burden"
- "We hired 10 engineers but our eval process still doesn't scale"
- "We're 70 engineers now; manual testing is completely broken"
- **Buying signal:** "Can this work across all our LLM providers?" or "How does this scale with team size?"
- **Source:** Series B/C founding teams, direct calls, rapid-growth companies

### Enterprise VPs & Compliance Teams: Governance & Risk Fears
- "Our legal team is asking how we ensure the AI doesn't generate harmful content"
- "We can't get board approval for AI features without a safety audit process"
- "We need compliance documentation for every AI decision"
- "Regulators are asking us about our AI quality controls"
- "We're deploying AI across 50+ business units and we have no way to audit it"
- "How do we prove to the board that our AI is safe?"
- "We need to show an audit trail for every model decision"
- **Buying signal:** "Do you provide audit logs?" or "How do we document AI quality decisions?"
- **Source:** Enterprise calls, compliance-focused companies, financial services, healthcare

---

## ASPIRATION LANGUAGE BY PERSONA

### Engineers: Velocity & Autonomy
- "We want to catch regressions before they reach production"
- "We want our evaluations in the CI/CD pipeline"
- "We need to test in parallel, not sequentially"
- "We want to be model-agnostic"
- "We want to debug production issues quickly"
- "We want to evaluate in minutes, not hours"
- **Response:** Position Braintrust as the execution layer for AI development
- **Proof:** Notion (70 engineers, <24h deploys), Dropbox (<10min evals)

### Product Managers: Measurement & Intuition
- "We want to make our gut feelings measurable"
- "We want to show our CEO that we're shipping quality, not just features"
- "We need dashboards that show feature quality over time"
- "We want to evaluate models faster than our competition"
- "We want to A/B test models against each other"
- **Response:** Position Braintrust as turning intuition into data
- **Proof:** Coursera (45x feedback), Zapier (25% accuracy gains)

### VP Engineering / Scaling: Reliability & Scale
- "We need to ship with confidence"
- "We need to know our models are actually better before going live"
- "We want to catch quality issues before customers do"
- "We want to cut weeks off our eval process"
- "We need to scale team velocity without sacrificing quality"
- **Response:** Position Braintrust as the operational excellence layer
- **Proof:** Notion (scale), any Series C company shipping AI at scale

### Enterprise VPs & Governance: Compliance & Control
- "We want centralized visibility into all AI deployments"
- "We need an audit trail for every quality decision"
- "We want to prove to regulators that our AI is safe"
- "We need control over our evaluation criteria"
- "We want detailed eval reports for the board/investors"
- **Response:** Position Braintrust as SDLC discipline for AI
- **Proof:** Compliance, audit, governance use cases

---

## Objection Language (What they say before saying no)

### Budget/ROI Concerns
- "We're not sure we have budget for another tool"
- "Our LLM API costs are already killing us"
- "Can you prove ROI before we commit?"
- "We'd need to see how this impacts our burn rate"
- **Counter:** Lead with cost-of-not-evaluating (customer churn, delayed shipping, manual work cost)

### Build-vs-Buy
- "We're considering building this ourselves"
- "We're evaluating hiring an eval engineer instead"
- "Our ML team wants to custom-build our testing framework"
- **Counter:** Time cost (6-12 months to productionize), opportunity cost, ongoing maintenance burden

### Competitive Positioning
- "We're already looking at W&B and Arize"
- "Our investor recommended we use [competitor]"
- "We're integrated with [competitor] already"
- **Counter:** Highlight Braintrust's model-agnostic approach, superior UX, faster time-to-value vs. competitors

### Timing Concerns
- "We'll revisit this after our Series B closes"
- "This is important but not urgent right now"
- "We're focused on shipping the MVP first"
- **Counter:** Show how better evals accelerate MVP launch; mention that evaluation becomes critical as product scales

### Organizational Friction
- "We'd need alignment from the whole engineering team"
- "Our CTO isn't convinced we need this"
- "This seems like overkill for where we are right now"
- **Counter:** Share peer companies at same stage, emphasize lightweight onboarding

---

## Buying Language (What they say when ready to buy)

### Urgency Signals
- "When can we get started?"
- "How quickly can we see results?"
- "We need to solve this before our next product launch"
- "Our customer complaints are getting louder"
- "We're losing deals because of quality concerns"

### Commitment Signals
- "This sounds like what we need"
- "Can we do a pilot with our real data?"
- "What's the onboarding timeline?"
- "How do we get our team trained on this?"
- "Can we do a proof of concept this month?"

### Expansion Signals
- "What's the best way to integrate this across our team?"
- "Do you work with [specific LLM provider]?"
- "How does this scale with our usage?"
- "What kind of audit/compliance features do you have?"

### Negotiation/Closing Signals
- "What's the pricing if we commit for a year?"
- "Can you support our use case with [specific requirement]?"
- "We want to move forward. What do we need to do?"
- "Can I introduce you to our finance person to discuss terms?"

---

## Talking Points by Objection

| Objection | 3-Second Response | Evidence |
|-----------|------------------|----------|
| "We'll build it ourselves" | "Most teams spend 6-12 months building—we have customers live in weeks." | Case study (time saved) |
| "W&B already does this" | "W&B focuses on training; Braintrust focuses on evaluation in production—different stage" | Feature comparison |
| "It's not urgent" | "Your competitors are evaluating faster. When quality issues hit, they're caught immediately." | Competitive intelligence |
| "No budget" | "Average customer saves the cost of an engineer in manual testing work." | ROI calculation |
| "CTO wants to own this" | "We're not a black box—your team owns criteria and thresholds. We just scale the testing." | Control narrative |

---

**Last Updated:** 2026-04-01
**Maintained By:** Kensington (SDR, Braintrust)
**Data Sources:** Customer calls, Reddit monitoring, LinkedIn discussions, direct conversations
