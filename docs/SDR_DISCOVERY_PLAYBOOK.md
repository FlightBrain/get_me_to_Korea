# SDR Discovery & Outreach Playbook
**Kensington Belza | Braintrust | April 2026**

---

## Who We're Talking To

**Engineers (Staff+ / VP Eng)**
They're dealing with regressions in production, can't debug failures, models failing silently. We position as the CI/CD gate for models: "You have observability for code. Your AI models? Blind spot."

**Enterprise Leaders (Sr. Director+ Platform/Eng)**
They're trying to scale AI safely with compliance gaps and governance headaches. We position as SDLC discipline for AI: "You have controls for code. AI? Wild west. Braintrust brings compliance + speed."

**Product Managers (Senior PM, AI Product)**
They can't measure the impact of AI changes. Running on instinct, no executive dashboard. We position as vibes to evals: "Your AI features run on vibes. Braintrust gives you the data layer."

---

## Discovery Questions

These work on cold calls, first meetings, and second meetings. Pick 3-4 based on what you already know about their setup.

**Understanding their current state:**
1. How are you currently testing agent behavior across model changes?
2. Are you running evals on your models today, or is it more ad hoc?
3. What's your measurement story for agents in production?

**Finding the pain:**
4. As your agent changes (new models, new tools, new routing logic), do your evals stay in sync, or are you rewriting them constantly?
5. When you get a new signal from customers, like a hallucination case, how long does it take to add it to your test suite?
6. When you ship the next agent iteration, how do you know if it's better?

**Going deeper (second meetings, technical buyers):**
7. Are you optimizing for speed of feedback or comprehensiveness of test coverage?
8. When you're orchestrating multiple agents, how do you measure whether the orchestration logic itself is working well?
9. Which model is better for which task? Does that answer change depending on the task type?
10. How many agent iterations are you planning before you call it "done"?

---

## Email Structure

**Subject line:** lowercase, problem-first, specific to their company.
- Good: "your model accuracy, where it's dropping"
- Bad: "Quick question about your AI strategy"

**Body (under 100 words):**
1. First 2 lines: Problem statement tied to their company. No fluff.
2. Middle: Info drop. One case study, one stat, one story matched to their pain.
3. Close: Binary CTA. Yes/no question, not "let's chat."

**Example:**

> hey sarah,
>
> noticed you're scaling your AI team at [company]. most teams hit this wall: models start failing in production, but they don't know why until users complain.
>
> we built braintrust exactly for this. zapier saw 25% accuracy improvement after they could see what was failing in real time.
>
> quick question: are you running evals on your models today?
>
> k

---

## LinkedIn

### Connection Requests (max 300 characters)

Lowercase, problem-first, reference their role or company. No generic "let's connect."

**After a conference talk:**
> Hi [Name], saw your talk at [Conference] on [topic]. The part about [specific insight] was really solid. Would be good to connect and follow your thinking on where evaluations go next.

**After a hiring signal:**
> Hi [Name], congrats on the [new role / hiring for AI]. Building teams at [company's stage] is interesting. Usually the eval infrastructure question gets thornier as you scale. Worth connecting.

**After a product launch:**
> Hi [Name], saw the announcement about [product feature]. Multi-model orchestration is going to be table stakes soon. Curious to follow how [Company] approaches the measurement side.

### DMs (max 75 words, send after they accept)

**Insight + resource:**
> Hey [Name], enjoyed your recent post on [topic]. Been thinking about the orchestration piece. Found this guide on scaling evals across multi-agent systems. Might be useful. [Link] Would be interesting to hear how you're thinking about it.

**Research question:**
> [Name], quick question I'm genuinely curious about: when you're orchestrating multiple agents, how do you measure whether the orchestration logic itself is working well? Or is that something you're still figuring out? Asking because most teams I talk to are unsure how to test that layer.

**Specific observation:**
> Hey [Name], saw you just shipped v0.4. The [feature] update is interesting. That's a bigger surface area to test than v0.3. Curious how you approach test coverage on rollouts like that?

---

## Cold Email Sequence (5-Touch)

| Touch | Timing | Goal | Approach |
|-------|--------|------|----------|
| 1 | Day 0 | Hook | Signal + insight + clear CTA. 60-80 words. |
| 2 | Day 5 | Angle shift | New signal, different pain point, different CTA. |
| 3 | Day 12 | Social proof | Case study or metric + one-liner on relevance. |
| 4 | Day 19 | Permission-based | Acknowledge silence, ask a smaller ask. |
| 5 | Day 26 | Last attempt | Resource only, no CTA. "I'll stop emailing." |

After Touch 5: Nurture list. Re-engage in 30-60 days only with a new signal.

---

## Phone Discovery Sequence

| Day | Action |
|-----|--------|
| Monday | Apollo dial block (8-10 calls). Voicemail if no answer. |
| Tuesday | Email follow-up with info drop. CTA: "you open to a 15-min call this week?" |
| Wed-Thu | Second dial block, different time of day. |
| Friday | Final email. Subject: "stepping back" or "last thing i'll send." Different angle. |

After Day 5: Classify as warm lead, prospect, or archived.

---

## Objection Handling

**"We build our own evals."**
That's actually healthy. The question we usually explore: as your agent changes, do your evals stay in sync, or are you rewriting them constantly? Braintrust isn't replacing your eval logic. It's the harness that makes it easier to iterate without the infrastructure overhead.

**"We use [competitor]."**
Totally makes sense. How's it working? Most teams tell us they start with that tool because it seemed comprehensive, then realize it covers X but not Y. A lot of teams use both.

**"Not a priority right now."**
Understood. When you do ship the next agent iteration, how do you know if it's better? Usually it becomes a priority after one of two things: either an eval catches something that would've broken in production, or you ship something and the feedback loop takes three weeks instead of three days.

**"Too early stage for this."**
Fair. Most teams say that right up until they ship something that breaks. How many agent iterations are you planning before you call it done?

**"What does Braintrust actually do?"**
Short version: you define what "good" looks like, we run your agent against those tests every time you make a change. You get a dashboard showing whether your changes made things better or worse. Most teams use it as part of their deployment pipeline or to catch regressions before they hit customers.

**"No time for a long sales cycle."**
Totally fair. I send you a one-pager, you spend 5 minutes. If it looks relevant, we grab 15 minutes next week. If not, no worries.

**"Can't you just use OpenAI Evals / LangSmith?"**
They're useful for what they do. OpenAI Evals is good for LLM-level testing, LangSmith is good for observability. Braintrust is built for the agent level: orchestration logic, routing decisions, end-to-end workflows. A lot of teams use all three.

**"Price is too high."**
If this saves your team 10 hours a week (one engineer half-time on manual testing), that's $50k/year minimum. Most teams get ROI within the first two months.

**"Need to talk to my team."**
Good call. Usually what helps: 10-minute call with you and whoever the main stakeholder is. We talk through your situation, how other teams are solving this, and whether it makes sense. No pressure.

**"Already shipping, measurement can come later."**
Makes sense. Quick thought: once you ship to customers, the feedback loop becomes your source of truth. Systematic measurement is what lets you act on that feedback fast instead of slow.

---

## Proven Outreach Patterns

### 1. The Dexcom Formula (No-CTA Info Drop)
Pull a signal from their financial report or press. Map it to their specific AI product. Drop 2-3 bullets on what success looks like. No CTA. Just information. Result: prospects often come back with "just send me an order form."

### 2. Multi-Thread (Multiple Decision Makers)
Anchor to something public they said. Name the specific gap. Drop 2 company logos who hit the same wall. Send different angles to VP Eng, CTO, and CEO simultaneously. Close with braintrust.dev/customers, no ask.

### 3. Ghost Notes (Executive-to-Executive)
150 words max, from Braintrust leadership. Acknowledge their specific AI challenge. Offer value (case study, framework, intro) without asking for a call. SDR follows up after the exec opens the door.

### 4. Event-Driven
Event is the real value prop. Offer Ameya executive briefings with role-matched topics. Logos for credibility. "Open to meeting us there?" 3-5x higher response rate than cold.

### 5. Pigment Playbook (Conference Blitz)
See target at conference. Same day: 3 ghost notes from leadership to CEO, VP Eng, CFO. Day 2: warm intro from internal connection. Day 3: VP Product calls. Week 2: deal progresses. Concentration of signals across multiple channels.

---

## Case Study Quick-Match

| When you hear this | Use this customer | Key stat |
|--------------------|-------------------|----------|
| Scaling AI across large eng org | Notion | Deploy cycle from 2 weeks to <24 hours, 70 engineers |
| AI accuracy is too low | Zapier | 50% to 90%+ accuracy in 2-3 months |
| Search, RAG, conversational AI | Dropbox | 10K+ tests, <10 min eval per PR |
| AI copilot, need observability | Retool | 25% accuracy improvement, log analysis in minutes |
| Voice AI (voice only) | Navan | 0.9+ F1 score, hundreds of daily calls |
| Dev tools, code AI | Graphite | 5% reduction in negative rules, 90%+ acceptance |
| EdTech, AI grading | Coursera | 45x more feedback, 90% satisfaction |
| High volume observability | Replit | Millions of sessions, pattern detection at scale |
| Token economics, cost | Fintool | 1.5B tokens/day visibility |
| Document extraction | Carta | Schema alignment |

**Hard rule:** Never use Navan for non-voice use cases.

---

## Personalization by Signal Type

**Hiring signal (high intent):**
"Hiring for AI engineer roles. That usually means you're iterating faster. Eval infrastructure is the bottleneck most teams hit when they scale headcount."

**Funding or announcement (medium-high):**
"Saw the announcement about [product]. That's live with customers now, which means measurement just became way more critical."

**Product launch (medium):**
"v0.3 added [feature]. That's a bigger surface area to test. How'd you approach test coverage for that?"

**Technical content (medium):**
"Your post on [topic] nailed the problem. The part about [specific insight]. Most teams don't talk about measurement, but that's usually where the solution lives."

---

## Meeting Pre-Notes Emails

**For PMs (before first call):**
Send 2-3 curated resources: Topics (auto-clusters production traces), Loop (PMs and SMEs run evals directly, no code), Brainstore (handles terabytes at scale). Frame around "low-code environment so PMs stay involved, not just engineering."

**For Engineers (before first call):**
Send: Evals framework (CI/CD pipeline integration), Logging SDK (drops into codebase in minutes), Topics, Brainstore. Frame around "catching regressions before users do." Include Notion (<24hr deploys), Dropbox (<10 min evals), Zapier (50% to 90%+ accuracy) stats.

---

## Quality Checklist (Before Every Send)

- Direct? Not hedged with "I think" or "might."
- Problem clear in first 2 lines?
- Info drop included? (case study, stat, or insight)
- CTA is binary? (yes/no, not "let's chat sometime")
- No corporate jargon? (no "synergy," "leverage," "circle back")
- No em dashes?
- Under word count? (email <100, LinkedIn connect <300 chars, DM <75 words)
- Sounds like someone who knows this space?

---

## Things We Never Do

- Hedge with "might," "could," "possibly"
- Use em dashes
- Use corporate jargon
- Open with "I hope this message finds you well"
- Say "just checking in" or "just following up" without new value
- Pitch before they've responded to the first message
- Ask for a demo in the first touch (ask for 15 minutes)
- Use Navan case study for non-voice use cases
- Send generic outreach without a specific signal
