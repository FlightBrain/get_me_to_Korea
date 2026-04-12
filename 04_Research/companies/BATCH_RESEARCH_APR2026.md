# Batch Company AI Research - April 2, 2026

**Purpose:** Sales prospecting research for Braintrust AI eval/observability platform
**Researcher:** Claude (for Kensington)
**Date:** 2026-04-02

---

## 1. Datavant (Health Data Platform)

- **AI products:** Acquired Aetion (completed July 2025) to build end-to-end real-world evidence (RWE) platform. Also integrated Apixio for Clinical Insights Platform that uses AI to process structured + unstructured health data for risk-bearing providers and health plans.
- **Scale:** 60M+ healthcare records moving between thousands of orgs, 80K+ hospitals/clinics, 300+ data partners. Privacy-preserving AI is a stated 2025-2026 differentiator.
- **Recent launch:** Aetion "Activate" (Aug 2025), a low-code analytics environment for RWD analysis. Future of Health Data Summit ongoing as thought leadership vehicle.
- **Hiring signals:** Post-Aetion acquisition doubled their life sciences team. Likely scaling AI/ML engineering for RWE analytics.
- **Braintrust angle:** They are building AI that processes sensitive health data and generates clinical insights. Accuracy and hallucination prevention are existential (regulatory, patient safety). Braintrust eval would help them validate AI outputs against clinical ground truth, monitor production quality of Apixio NLP models, and demonstrate AI governance to healthcare customers. **Lead with compliance/governance angle and Coursera case study (quality at scale).**

**Key pain points:** AI output accuracy on clinical data, privacy-preserving AI evaluation, demonstrating AI governance to regulated customers.

Sources:
- [Datavant launches Clinical Insights Platform](https://www.fiercehealthcare.com/ai-and-machine-learning/datavant-launches-clinical-insights-platform-providers-payers-vbc)
- [Datavant acquires Aetion](https://www.datavant.com/press-release/datavant-completes-acquisition-of-aetion)
- [AI + Health Data Privacy](https://www.datavant.com/blog/where-ai-meets-health-data-privacy-how-to-balance-innovation-with-risk)

---

## 2. ZoomInfo (B2B Data/Intelligence)

- **AI products:** ZoomInfo Copilot is their flagship AI product, blending first-party + third-party data with generative AI. Features: AI Email Generator, Account Intelligence (auto-generates buying groups), Copilot Chat (conversational AI for account research), Post-Meeting Briefs via Chorus.
- **Hiring signals:** Actively hiring Software Engineer Interns for AI Products (Feb 2026, Bethesda). One role specifically involves building a "reinforcement learning-inspired meta-agent that treats eval pass rates as a reward signal and uses an LLM as the policy." This is a direct Braintrust use case.
- **Recent launches:** Copilot GA with Breaking Alerts (real-time Slack notifications), AI-generated account summaries, conversational AI for sales prep.
- **Braintrust angle:** They are building LLM-powered email generation, conversational AI, and account intelligence at massive scale (millions of users). The RL meta-agent job posting literally describes using eval pass rates as a reward signal. They need robust evaluation infrastructure. **Lead with the Zapier case study (accuracy improvement) and the meta-agent job posting as a direct hook.**

**Key pain points:** Email generation quality at scale, conversational AI accuracy, evaluating AI-generated account intelligence against ground truth, managing multiple LLM-powered features.

Sources:
- [ZoomInfo Copilot launch](https://ir.zoominfo.com/news-releases/news-release-details/zoominfo-introduces-zoominfo-copilot-ai-powered-solution-helps/)
- [AI Products intern posting](https://www.ziprecruiter.com/c/ZoomInfo-Technologies/Job/Software-Engineer-Intern-AI-Products/-in-Bethesda,MD?jid=6b7ce59e6b25f1d5)
- [Copilot blends data with Gen AI](https://www.demandgenreport.com/solution-spotlight/zoominfo-copilot-works-to-blend-first-third-party-data-with-gen-ai-to-predict-pipeline/47774/)

---

## 3. Census (Data Activation / Reverse ETL)

- **AI products:** AI Columns feature lets users dynamically generate new dataset fields using LLMs (OpenAI, Anthropic Claude, Google Gemini). Supports AI model integrations for data enrichment and transformation.
- **Major development:** Census was acquired by Fivetran. Existing Census customers can log in through April 1, 2026. Census Store shuts down August 1, 2026. They are being migrated onto Fivetran's platform.
- **Acquisition of Fulcrum:** Census acquired Fulcrum to enhance "AI-first data collaboration and modeling."
- **Braintrust angle:** CAUTION: Census is mid-acquisition/sunset into Fivetran. Their AI Columns feature uses multiple LLM providers (OpenAI, Anthropic, Gemini), which would be a fit for Braintrust's multi-provider eval. But the company is being absorbed. **Recommend targeting Fivetran instead if the AI Columns capability persists post-migration. Low priority as standalone target.**

**Key pain points:** N/A (company being absorbed into Fivetran).

Sources:
- [Census AI Columns](https://www.getcensus.com/ai-columns)
- [Census acquires Fulcrum](https://www.getcensus.com/blog/census-acquires-fulcrum)
- [AI Model Integrations docs](https://docs.getcensus.com/misc/ai-model-integrations)

---

## 4. iRhythm Technologies (Cardiac Monitoring / Medical Devices)

- **AI products:** ZEUS (Zio ECG Utilization Software), an FDA-cleared, CE-marked deep learning AI algorithm for cardiac arrhythmia detection from continuous ECG data. Their Zio monitors collect 14 days of continuous biosensor data, processed by cloud-based ML.
- **Hiring signals:** Actively hiring Staff Machine Learning Scientist (San Francisco). Role involves ML algorithms for biosignal analysis (ECG, PPG, accelerometry), IoT signal transmission, and multivariate clinical data analysis. Requires MS/PhD + 5 years experience.
- **Scale:** AI trained on millions of ECGs. EU CE mark certification obtained. Expanding globally.
- **Braintrust angle:** Their AI is FDA-cleared medical device software. Model accuracy is literally life-or-death. They need rigorous evaluation of algorithm updates before deployment, regression testing against clinical ground truth, and monitoring for drift in production. **Lead with regulated AI angle: Braintrust helps them build evaluation pipelines that satisfy FDA validation requirements. Retool case study (accuracy improvement) is relevant. This is a high-value, high-stakes prospect.**

**Key pain points:** FDA-level AI validation, regression testing on algorithm updates, monitoring model performance drift on diverse patient populations, clinical ground truth evaluation.

Sources:
- [iRhythm AI in cardiac monitoring](https://www.irhythmtech.com/gb/en/solutions-services/artificial-intelligence)
- [Staff ML Scientist posting](https://www.linkedin.com/jobs/view/staff-machine-learning-scientist-at-irhythm-technologies-inc-2428411126)
- [Zio EU certification](https://www.notebookcheck.net/iRhythm-Zio-wearable-ECG-with-AI-detection-of-heart-problems-gains-EU-medical-device-certification.789010.0.html)

---

## 5. Ivanti (IT Management / Security)

- **AI products:** Major Q1 2026 announcement: Agentic AI for ITSM on the Neurons platform. Persona-based AI agents for autonomous, goal-directed IT service management. Also launched Autonomous Endpoint Management (AEM) combining digital employee experience, UEM, and security into one AI-powered solution.
- **Recent launches:** Customer preview of Agentic AI began Q1 2026, GA later in 2026. Enhanced asset visibility through Neurons for Discovery. Built on "Conversational AI Framework."
- **Hiring signals:** Heavy AI investment signaled by multi-product AI launch across ITSM, endpoint management, and security.
- **Braintrust angle:** They are deploying agentic AI agents that autonomously resolve IT incidents through natural language. These agents need evaluation: Are they resolving incidents correctly? Are they escalating appropriately? Are conversational interactions accurate? **Lead with Retool case study (AI copilot observability) or Zapier (accuracy improvement). Agentic AI = high eval complexity.**

**Key pain points:** Evaluating autonomous agent decision quality, testing conversational AI accuracy, monitoring agentic AI in production across thousands of enterprise customers, regression testing agent behavior.

Sources:
- [Ivanti AI-Driven Innovations Q1 2026](https://www.ivanti.com/company/press-releases/2026/ivanti-unveils-ai-driven-innovations-to-the-neurons-platform-to-power-the-future-of-it-and-security)
- [Q1 2026 Product Release](https://www.ivanti.com/releases/2026/q1)
- [Ivanti AI for ITSM](https://www.ivanti.com/ai/itsm)

---

## 6. Nintex (Workflow Automation)

- **AI products:** March 2026: Launched Nintex Agent Designer and Nintex Orchestration. Agent Designer enables teams to build adaptive AI agents (including supervisor and multi-agent patterns) within orchestrated workflows. Orchestration supports dynamic case-based process execution with modular workflow phases.
- **Strategic direction:** Blended automation approach: rules-based workflows + AI-driven agents. Their AI UNLESS report found 64% of business leaders are embedding AI into broader automation strategies.
- **Hiring signals:** Active AI product development signals; multi-agent patterns = sophisticated AI engineering.
- **Braintrust angle:** They are building multi-agent AI systems that make decisions within business-critical workflows. Agent quality directly impacts customer business processes. **Lead with: "How are you evaluating whether your AI agents make the right decisions in customer workflows?" Zapier case study (50% to 90%+ accuracy) is directly relevant since both are automation platforms.**

**Key pain points:** Evaluating multi-agent decision quality, testing agent behavior across diverse workflow scenarios, ensuring AI agents don't break production business processes, monitoring agent reliability.

Sources:
- [Nintex Agentic Business Orchestration](https://workflowotg.com/nintex-unveils-agentic-business-orchestration-capabilities/)
- [Nintex AI capabilities announcement](https://www.nintex.com/blog/nintex-unveils-latest-ai-capabilities-to-accelerate-process-management-and-workflow-automation/)
- [Nintex AI governed automation](https://itbrief.com.au/story/nintex-unveils-ai-tools-for-governed-business-workflows)

---

## 7. Barracuda (Cybersecurity)

- **AI products:** BarracudaONE AI-powered cybersecurity platform with AI Security module: visibility into shadow AI activity, risk scoring, policy enforcement for generative AI usage across orgs. Also using AI for email threat detection (phishing, impersonation, account takeover).
- **Recent launches:** March 2026: BarracudaONE platform updates including SecureEdge Access (secure service edge with GenAI policy controls), expanded impersonation protection, automated incident response for Google Workspace.
- **Thought leadership:** Published research on agentic AI as a 2026 threat multiplier (autonomous, persistent, multi-stage cyberattacks).
- **Braintrust angle:** Their AI models detect phishing, impersonation, and account takeover. False positives = blocked legitimate emails. False negatives = security breaches. They need precision/recall evaluation of detection models. Also, their AI Security product evaluates OTHER companies' AI usage, so they understand the eval problem space. **Lead with: "How are you measuring the accuracy of your AI threat detection as attackers use AI to evolve?" Dropbox case study (search/RAG testing at scale) is relevant.**

**Key pain points:** Precision/recall of AI threat detection, adversarial robustness testing, evaluating AI detection against AI-generated attacks, minimizing false positives while catching sophisticated threats.

Sources:
- [BarracudaONE platform updates March 2026](https://www.barracuda.com/company/news/2026/barracuda-advances-cybersecurity-platform-partner-program)
- [Agentic AI threat research](https://blog.barracuda.com/2026/02/27/agentic-ai--the-2026-threat-multiplier-reshaping-cyberattacks)
- [AI-enhanced email threat case study](https://blog.barracuda.com/2026/03/26/bnbuilders-email-threats-barracuda)

---

## 8. Zoox (Amazon Subsidiary, Autonomous Vehicles)

- **AI products:** Full-stack autonomous driving AI. Custom-built robotaxi with no steering wheel/pedals, bidirectional driving. ZEUS-like perception + planning + decision-making AI stack. Nearly 2M driverless miles, ~350K passengers.
- **Recent expansion:** March 2026: Expanded testing to Phoenix, Dallas, Austin, Miami. Uber partnership for Las Vegas robotaxi hailing (summer 2026). Awaiting NHTSA approval for 2,500 commercial vehicles.
- **Scale:** ~50 robotaxis currently, scaling to 100+. Dallas chosen specifically to "refine our artificial intelligence against diverse weather and complex road networks."
- **Braintrust angle:** Autonomous driving is arguably the highest-stakes AI application. They are testing across diverse geographies specifically to evaluate AI performance. However, Zoox likely has deep internal evaluation infrastructure as an Amazon subsidiary. **This is a harder sell but relevant for: evaluating LLM components (if any, e.g., passenger interaction, route explanation), or supplementary eval tooling. Lower priority unless you find LLM-specific use cases. May be better suited for a custom pitch around safety-critical AI evaluation.**

**Key pain points:** AI performance across diverse conditions, safety validation at scale, regression testing on model updates before deployment to new cities.

Sources:
- [Zoox expands to Phoenix and Dallas](https://www.cnbc.com/2026/03/09/amazon-zoox-robotaxi-testing-phoenix-dallas.html)
- [Zoox to start charging in 2026](https://fortune.com/2025/12/08/amazon-robotaxi-service-zoox-plans-fees-vegas-san-francisco/)
- [Uber + Zoox partnership](https://www.bloomberg.com/news/articles/2026-03-11/uber-inks-partnership-with-amazon-s-zoox-to-offer-robotaxi-rides)
- [Zoox Austin and Miami](https://www.cnbc.com/2026/03/24/amazon-zoox-robotaxi-rides-austin-miami.html)

---

## 9. Nordstrom (Retail)

- **AI products:** Using AI "quite heavily" in procurement spend analytics (via Suplari). Building AI-driven forecasting, product recommendations, and personalization. Generative AI in mobile app for holiday refresh (editorial content generation). AI-powered delivery time predictions.
- **Strategic approach:** Strong data governance requirement: any AI vendor must demonstrate accuracy, security, data protection, and "no hallucinations" before Nordstrom adopts.
- **Partnerships:** Extended NuORDER by Lightspeed partnership for AI-powered merchandise assortment. Increasing data capture to support AI-driven forecasting.
- **Braintrust angle:** Nordstrom's explicit requirement for "no hallucinations" and strong data governance is a direct Braintrust value prop. They are deploying generative AI across procurement, personalization, and customer service. **Lead with: "You've said AI vendors must prove no hallucinations. How are you measuring that for your own AI features?" Notion case study (scaling AI across large org) is relevant. Their CPO is actively looking for AI procurement orchestration tooling.**

**Key pain points:** Hallucination prevention (explicitly stated priority), AI accuracy for customer-facing recommendations, evaluating GenAI content quality in app, ensuring AI procurement insights are trustworthy.

Sources:
- [Nordstrom AI in procurement](https://www.supplychaindive.com/news/manifest-nordstrom-ai-procurement-spend-insights/811778/)
- [Nordstrom leaning into human care in AI world](https://www.retaildive.com/news/ai-nordstrom-dedication-human-care/804861/)
- [Nordstrom generative AI app refresh](https://www.retaildive.com/news/nordstrom-generative-ai-holiday-app-refresh/732977/)

---

## Priority Ranking for Braintrust Outreach

| Rank | Company | Why |
|------|---------|-----|
| 1 | **ZoomInfo** | Hiring for AI eval roles, multiple LLM products in production, meta-agent using eval pass rates |
| 2 | **Ivanti** | Agentic AI launching Q1 2026, high complexity, enterprise scale |
| 3 | **Nintex** | Multi-agent AI in production workflows, direct Zapier parallel |
| 4 | **Nordstrom** | Explicitly demands "no hallucinations" from AI, multiple AI use cases |
| 5 | **iRhythm** | FDA-regulated AI, life-or-death accuracy, hiring ML scientists |
| 6 | **Datavant** | Clinical AI at scale, regulatory pressure, post-acquisition integration |
| 7 | **Barracuda** | AI security detection models, adversarial testing needs |
| 8 | **Zoox** | Massive AI but likely deep internal tooling (Amazon subsidiary) |
| 9 | **Census** | Being absorbed into Fivetran, target Fivetran instead |
