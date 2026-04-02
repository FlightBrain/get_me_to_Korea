# Personalization Library

## Purpose
Reusable hooks and signals organized by industry, company stage, role, and behavior. Use these as starting points—always add one layer of specificity (a name, a date, a link).

## How to Use
Select the relevant category, find a hook that matches your prospect, customize it with their specific company/name/detail, and use it in your first touch. Don't copy-paste; these are templates to remix.

---

## By Industry

### **Healthcare/MedTech**
*Context: Regulated, high-accuracy requirements, often build custom agents for documentation/triage*

**Hook:** "Building agents for clinical workflows means eval requirements are different—you can't have false positives on a diagnosis recommendation. How are you testing for those edge cases?"

**Hook:** "Saw you're using Claude in [specific healthcare product]. The regulatory side of agent reliability is becoming a bigger conversation. Worth measuring explicitly."

**Hook:** "Medical AI companies we work with spend 40% of dev time on evals. Most of that is manual. Curious what your approach looks like."

**Signal watch:** FDA submissions, product announcements mentioning "accuracy," clinical validation, partnerships with health systems.

---

### **Fintech/Financial Services**
*Context: Compliance-heavy, audit trails matter, testing for edge cases is non-negotiable*

**Hook:** "Fintech teams building agents for customer support or internal ops always have the same problem: how do you prove the agent didn't hallucinate on a balance inquiry or trade detail? That's where measurement gets real."

**Hook:** "Regulatory audit trails are becoming table stakes for AI. You're probably already thinking about this. How are you baking it into your agent testing?"

**Hook:** "Saw you launched the [agent product]. Compliance teams usually ask: what's your eval process? Most fintech teams scramble to answer that."

**Signal watch:** Regulatory announcements, compliance hires, product launches mentioning "AI," partnerships with compliance platforms.

---

### **Developer Tools/APIs**
*Context: Speed matters, iterate fast, developer experience is everything*

**Hook:** "Saw your SDK added Claude integration. Multi-model support is great for UX, makes evals harder for you. Most tool companies test that with real customers instead of systematically."

**Hook:** "Developer tool companies we talk to all ship agents differently—some use LLM routing, some let customers pick. Your evals probably vary per path. That gets messy fast."

**Hook:** "Building tools for agent developers is interesting—you're one level of abstraction removed from the evals problem, but your reliability depends on it."

**Signal watch:** SDK updates, "Claude integration" or "multi-model" announcements, job postings for AI/ML, GitHub activity.

---

### **E-commerce/Retail**
*Context: Agent use for customer service, product discovery, personalization*

**Hook:** "Customer service agents at scale are tricky—one bad hallucination costs you a customer. Most retail teams test via production feedback. How are you testing proactively?"

**Hook:** "Personalization agents require different measurement than customer service bots. You're probably measuring both. What does that infrastructure look like?"

**Signal watch:** Product updates about "AI customer service," hiring for AI roles, funding announcements, customer feedback on social.

---

## By Company Stage

### **Series A–B (Post-Product Market Fit)**
*Context: Shipping real AI products, scaling engineering, hiring AI talent*

**Hook:** "Scaling from 50 to 500k API calls on your agent probably changed what you measure. Your original test suite doesn't tell you much at scale. How'd you handle that inflection?"

**Hook:** "Saw you hired three ML engineers last quarter. Usually means you're iterating fast on agent behavior. The evaluation infrastructure probably needs to scale too."

**Hook:** "Post-PMF you're probably balancing speed with reliability. Most teams at your stage are still doing evals manually—which kills iteration velocity."

**Signal watch:** Funding announcements, hiring job posts, product launches or version updates, team growth announcements.

---

### **Series C+ (Scaling/Profitability)**
*Context: Mature AI products, larger customer base, risk aversion higher*

**Hook:** "At your scale, you're probably running different agent configurations for different customer cohorts. Testing that systematically probably matters a lot now."

**Hook:** "Saw you raised Series C. Customer expectations for agent reliability just went up. Your testing infrastructure probably needs to match that."

**Hook:** "Late-stage teams we work with usually realize they need a better measurement layer when their agent variance across customers becomes a support burden."

**Signal watch:** Series funding, enterprise partnership announcements, "reliability" or "quality" themed product updates.

---

### **Early Stage (Pre-Series A)**
*Generally skip unless exceptional ICP fit. Focus on Series A+.*

**Hook (if you pursue):** "Building agents is hard enough; measurement is usually an afterthought early on. Worth thinking about now instead of scrambling later."

**Note:** Early stage teams are less likely to buy but higher chance of becoming future champions if you help early.

---

## By Role

### **VP Engineering / SVP Engineering**
*Context: Responsible for velocity, quality, team productivity*

**Hook:** "Engineering velocity on agents depends on how fast your team can validate changes. Most teams can't answer 'is this better?' in under a day. Worth fixing."

**Hook:** "Team scaling usually comes with measurement pain—your eval process probably broke at some point. How'd you solve for that?"

**Hook:** "The best engineering teams we see treat agent testing like any other production system. What's your approach?"

**Signal watch:** Hiring announcements for AI engineers, engineering blog posts, conference talks about scale/quality.

---

### **Head of AI / AI Platform Lead**
*Context: Responsible for AI direction, model selection, capability building*

**Hook:** "Seen a lot of teams with a Claude + GPT strategy but no systematic way to measure which model does better for specific tasks. That's usually a Head of AI problem."

**Hook:** "Multi-model orchestration is standard now. Measurement is what separates teams that actually know which model to use from teams that guess."

**Hook:** "Curious how you're thinking about measurement in your AI roadmap. Most Head of AI roles we talk to say it's missing from their planning."

**Signal watch:** Hiring for AI roles, technical blog posts, X posts about model selection or capability.

---

### **CTO / Chief AI Officer**
*Context: Overall technical direction, risk management, strategic decisions*

**Hook:** "Agent reliability at scale usually surfaces as a CTO problem. Most CTOs we talk to say they wish they'd built measurement earlier."

**Hook:** "You're probably thinking about the reliability tier of your agent stack. Measurement is the foundation of that conversation."

**Hook:** "What's your measurement story for agents in production? Most CTOs are actively solving for that now."

**Signal watch:** Company announcements, conference appearances, X posts about reliability or scale.

---

### **Director of Product / Product Lead**
*Context: What users experience, feature prioritization, roadmap*

**Hook:** "If your agent is in customer hands, you're probably getting feedback on false positives or weird behavior. How systematic is your feedback loop?"

**Hook:** "Product teams shipping agents usually don't realize until late that measurement should drive roadmap priorities. What's your approach?"

**Signal watch:** Product announcements, feature releases, customer interviews or feedback mentions.

---

## By Signal Type

### **Hiring Signal (High Intent)**
*They just posted or filled roles for AI engineers, ML engineers, "prompt engineer," or AI product manager*

**Hook:** "Hiring for AI engineer roles—that usually means you're iterating faster. Eval infrastructure is the bottleneck most teams hit when they scale engineering headcount. How are you thinking about that?"

**Use in:** Touch 1 or Touch 2. This is active signal of investment.

---

### **Funding/Announcement Signal (Medium-High Intent)**
*They raised funding, announced new product, or shipped major update*

**Hook:** "Saw the announcement about [product]. That's live with customers now, which means measurement just became way more critical. How's your eval infrastructure?"

**Use in:** Touch 1. Reference the announcement directly.

---

### **Product Launch Signal (Medium Intent)**
*They shipped new AI feature, updated SDK, or launched AI product*

**Hook:** "v0.3 added [feature]—that's a bigger surface area to test. How'd you approach the test coverage for that?"

**Use in:** Touch 1. Shows you're tracking their ship velocity.

---

### **Technical Content Signal (Medium Intent)**
*They published blog post, whitepaper, GitHub repo, or spoke at conference about AI/agents*

**Hook:** "Your post on [topic] nailed the problem—the part about [specific insight]. Most teams don't talk about measurement, but that's usually where the solution lives."

**Use in:** Touch 1. Cite the specific insight.

---

### **Hiring in Related Roles (Lower Intent)**
*They hired for sales/partnerships/PM roles—indicates growth but not necessarily agent-specific*

**Hook:** "Scaling your team usually means agent workloads are growing. Curious how your testing infrastructure scales with it?"

**Use in:** Touch 2 or 3. Lower priority signal.

---

### **Social/Community Signal (Lower Intent)**
*X post, Reddit comment, or community contribution about agents/evals*

**Hook:** "Your comment on [Reddit/X] about [topic] hit on something most teams get wrong. This is exactly the problem Braintrust solves."

**Use in:** LinkedIn engagement or Touch 2+. Can open conversation.

---

## By Company Size

### **10–100 people (Startup)**
*Context: Lean team, speed paramount, measurement often manual*

**Hook:** "At your size, every engineer counts. Manual evals are probably eating a lot of velocity. Worth automating early."

---

### **100–1000 people (Growth Stage)**
*Context: Scaling, process matters more, cross-team coordination becomes issue*

**Hook:** "Growth stage usually means your agent touches more teams—data, product, support. Measurement probably needs to scale across those teams too."

---

### **1000+ people (Enterprise)**
*Context: Complexity, multiple teams, governance matters*

**Hook:** "Enterprise scale means agent infrastructure is cross-functional. Measurement is usually the connective tissue nobody thought about until late."

---

## Remix Examples

**Template structure:**
"Saw [Signal] → [This means X] → [Most teams do Y] → [Question: How are you handling this?]"

**Example 1:**
"Saw you hired for Head of AI (signal) → means you're doubling down on agent capabilities (interpretation) → most teams at your stage don't have systematic eval infrastructure (observation) → curious how you're thinking about that? (question)"

**Example 2:**
"Your v0.4 added multi-model routing (signal) → suddenly you need to test which model succeeds at each task type (consequence) → most tools don't make that easy (observation) → worth a quick conversation? (ask)"

**Example 3:**
"Announced Series B (signal) → customer expectations for reliability just went up (consequence) → measurement is the only way to deliver on that promise (insight) → how are you approaching it? (question)"

