# BLOCK (SQUARE) INTRO CALL PREP
**Date:** April 9, 2026
**Attendees:** Curtis Galione, Sayed Hassan (Block), Jay Vermont (Braintrust AE), Kensington Belza (Braintrust SDR)

---

## COMPANY SNAPSHOT

Block Inc. (formerly Square) is a diversified fintech platform: payments infrastructure (Square), consumer money app (Cash App), music streaming (TIDAL), and blockchain initiatives (TBD). Public company (NYSE: SQ). Workforce restructuring from 10K+ to ~6K employees in Feb 2026 following massive AI-driven efficiency push.

**Key context:** Block CEO Jack Dorsey publicly stated AI has fundamentally changed how to "build and run a company," with 40%+ increase in production code shipped per engineer since Sept 2025.

---

## AI INITIATIVES TO REFERENCE

### 1. Goose (Internal AI Agent Platform)
Open-source general purpose AI agent built to automate internal operations. 12,000+ Block employees deployed Goose within 2 months. Compressed delivery timelines, increased developer velocity.

### 2. Square AI (Merchant-Facing)
Launched intelligence tools that blend business metrics with external data (weather, events, news, local reviews). Used to optimize menu, staffing, inventory decisions.
- ManagerBot: Handles inventory reordering + staff scheduling (built in 8 weeks)
- MoneyBot: Cash App feature for automated budgeting and savings identification (built in 6 weeks)

### 3. Cash App Fraud & Risk Intelligence
Advanced ML models for proactive fraud detection, account takeovers, payment warnings.
- Payment Warnings: Machine learning warns customers of scam transactions. 50% abandonment rate when warning issued.
- BERTweet integration: Pre-trained language model on Twitter data. Identifies and suppresses 2,000+ scam posts weekly across X and Instagram.
- Real-time fraud prevention: Models identify and block fraud before transaction is attempted.

### 4. AI in Lending (Underwriting)
Proprietary ML underwriting model updated to expand loan access to seasonal businesses and new-to-Square merchants. More than 1 year of model tweaking to handle edge cases.

### 5. Engineering Excellence & AI-Native Culture
Block is actively building the most AI-native enterprise in the world. Heavy investment in AI-assisted development, continuous model evaluation, and production quality assurance.

---

## DISCOVERY QUESTIONS (7)

**Goal:** Understand how Block approaches AI model evaluation, handles quality degradation, and owns AI governance.

1. **Current state:** How do you evaluate and test the AI models that power ManagerBot, MoneyBot, and fraud detection today? What does that QA process look like end-to-end?

2. **Regression management:** When you deploy updates to the fraud detection model or lending underwriting model, how do you measure whether accuracy has degraded on subpopulations (seasonal merchants, new merchants, different geographies)? Who owns that signal?

3. **Compliance & scale:** In fintech, regulatory bodies care about model fairness and accuracy. How do you demonstrate model consistency and fairness across demographic groups without spinning up internal tooling from scratch?

4. **Internal vs. vendor:** You've built Goose internally and seen massive wins. What's your philosophy on where to invest in-house vs. where to look for vendor solutions? What would a vendor need to do to earn trust here?

5. **Speed vs. safety:** ManagerBot was built in 8 weeks. How do you balance rapid iteration with the need for rigorous testing in production, especially for financial decisions?

6. **Model lifecycle:** You have hundreds of models in production (fraud detection, lending, recommendations, scam detection). How are you tracking which models have degraded, which need retraining, and what's the operational overhead?

7. **Data quality signal:** With Cash App processing billions of transactions, how do you detect when input data distribution has shifted and models need updating?

---

## RELEVANT CASE STUDIES

**Zapier:** Accuracy bottleneck in AI grading/evals. Went from 50% to 90%+ accuracy in 2-3 months by running systematic evals. Many workflows in Cash App's MoneyBot/ManagerBot could face similar accuracy plateaus.
https://braintrust.dev/customers/zapier

**Notion:** Deployment velocity pressure. <24 hour model deploy cycle across 70 engineers. Block claims 40% increase in code shipped per engineer, but hasn't shared how they're handling model testing velocity. Notion's approach: rigorous evals, fast iteration.
https://braintrust.dev/customers/notion

**Fintool reference:** Visibility into token spend at scale. Block processes 1.5B+ transactions daily. If Block is running large language models for scam detection (BERTweet), visibility into cost per inference and token optimization could be immediate value.

---

## POTENTIAL OBJECTIONS & RESPONSES

**Objection 1: "We built Goose internally and it's working well."**
Response: Goose is great for internal automation. The question is model evaluation at the edge. You have hundreds of models in production (fraud, lending, recommendations). Braintrust complements your internal stack by reducing the time it takes to detect model degradation and prove quality improvements to stakeholders. Think of it as the "operational layer" on top of your internal infrastructure.

**Objection 2: "We're not ready for a vendor yet. Too early."**
Response: Understood. Timing matters. What we've seen from Notion and Zapier is that the pain point hits hard once you have 50+ models in production and you're trying to move fast without regressions. Block is at scale now. This is the moment to build measurement systems before chaos. Offer: 30-day pilot on one high-impact model (fraud detection? lending?) to prove ROI with your team.

**Objection 3: "How is Braintrust different from [internal monitoring tool / competitor]?"**
Response: Two differentiators. First: we're built for rapid iteration and human feedback loops. Second: we specialize in financial decision models where compliance and fairness matter. Zapier built their entire QA process on Braintrust because they needed to validate accuracy across 500+ use cases. Block has similar scale. We enable you to run 10,000 tests per model per day at low cost, not just monitor drift.

**Objection 4: "This sounds like a testing tool. We already have testing."**
Response: Fair. But there's a difference between testing (unit tests before deployment) and evaluation (measuring model quality in the wild against real production traffic). Braintrust sits in the second bucket. Once models are live, you need continuous signals on whether they're still accurate. That's what we obsess over.

---

## CONTEXT FOR JAY

Sayed Hassan is an Engineering Manager at Block with background in telecommunications/IVR systems and cloud infrastructure (AWS). Curtis Galione is a Solutions Engineer (currently at Braintrust, prior roles at Confluent as Sr. Solutions Engineer and PwC as Data Scientist). This pairing suggests Block's evaluation needs span both infrastructure (Sayed) and data/evaluation methodology (Curtis).

Position this as: "Your AI infrastructure is world-class. Your team just hasn't had time to build the evaluation layer that keeps it reliable at scale. That's where Braintrust sits in."

---

## PRE-CALL PREP

- Review Block's AI page: https://block.xyz/ai
- Pull latest Block earnings call for AI mention context: https://www.aol.com/articles/block-xyz-q4-2025-earnings-163635552.html
- Check if Sayed Hassan or Curtis have public LinkedIn activity around AI quality/model governance in last 6 months (may signal pain point timing).
- Have Zapier case study link ready to paste.
- Prepare 2-3 specific questions on Sayed's infrastructure experience with model deployment at scale.
