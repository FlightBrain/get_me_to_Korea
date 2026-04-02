# Patterns Index: Learned Behaviors & Workflows

**Purpose:** Library of tested approaches, messaging frameworks, and anti-patterns. Emerges from episodic data in SESSION_LOG.md and gets abstracted into rules.

**Last Updated:** 2026-04-01
**Owner:** Kensington
**How to Use:** Reference before starting new work (prospecting, messaging, research). Add patterns as you discover them. Share with AI assistants when onboarding.
**Related Files:** SESSION_LOG.md, LESSONS_LEARNED.md, PATTERNS_INDEX.md

---

## Pattern Template

```
### [Pattern Name]

**When to use:** [Context]
**Approach:** [Step-by-step]
**What works:** [Specific success metrics or examples]
**What doesn't work:** [Common mistakes]
**Time to implement:** [How long does it take?]
**Baseline:** [Success rate or benchmark]
**Variations:** [Tweak options]

**Notes:** [Any caveats or learnings]
```

---

## OUTREACH PATTERNS (PROVEN)

### Pattern: Signal-Backed Research + No CTA (Dave/Dexcom Formula)
**When to use:** First touch to prospect with clear public signal (hiring, funding, product launch)
**Approach:**
1. Pull signal from news/press/earnings (recent hiring for AI role, Series B closed, product launch)
2. Map to their specific AI use case (healthcare = accuracy + audit trail, SaaS = velocity + scale)
3. Drop 2-3 bullets on what similar companies solved (Notion, Zapier, Dropbox examples)
4. Close with FYI link or braintrust.dev/customers (NO ASK)
5. Wait for response; they often self-qualify

**What works:**
- High-signal prospects (actively hiring, just funded) have 15-20% reply rate
- "Why don't you just send me an order form?" happens when you hit right nerve
- Follow-up rate is high (they know you did research)

**What doesn't work:**
- Generic compliments ("Great company!")
- Asking permission ("Can I share something?")
- Pitching before they ask
- No signal (generic outreach)

**Baseline:** 12-15% reply rate on first touch with strong signal

---

### Pattern: Multi-Thread Same Signal (Manish/Brian Formula)
**When to use:** Large accounts with multiple decision-makers (VP Eng, CTO, CFO)
**Approach:**
1. Identify 3+ stakeholders at same company
2. Same underlying insight, different angles per persona
   - VP Eng: "Hiring eval engineers? Here's how to scale without rebuilding"
   - CTO: "Multi-model testing at this scale requires [framework]"
   - CEO: "Growth inflection usually breaks eval infrastructure"
3. Send from different Braintrust execs if possible
4. Space 3-5 days apart
5. Link to braintrust.dev/customers (pattern recognition, no ask)

**What works:**
- Multiple touchpoints increase response rate (3 emails = 2-3x higher engagement)
- Different angles increase relevance (engineer != exec language)
- Concentration of signals shows seriousness

**What doesn't work:**
- Too many touches (>4) feels like harassment
- Same message to all (persona-agnostic)
- No connection between threads (feels random)

**Baseline:** 25-30% response rate when hitting 3+ stakeholders with right angles

---

### Pattern: Ghost Notes (Executive-to-Executive Outreach)
**When to use:** Want to reach C-level; have executive credibility; opening door for SDR
**Approach:**
1. Write short note (100-150 words) from VP/Exec at Braintrust
2. From their name directly (not SDR name)
3. Reference specific AI challenge (earnings call quote, press release, job posting)
4. Offer value (case study, framework, peer insight) without asking for call
5. SDR follows up 3-5 days later (they often forward to team member first)

**What works:**
- Executive-to-executive carries weight; higher response rate (8-12%)
- Often forwarded to team ("Have our SDR follow up")
- Creates warm handoff for SDR follow-up

**What doesn't work:**
- Pitching in ghost note (ruins it)
- Vague value prop
- Generic praise

**Baseline:** 8-12% response rate; 30% of those forward to team (warm SDR follow-up)

---

### Pattern: Event-Driven Outreach (HumanX, Dinners, Conferences)
**When to use:** Major industry event; you're attending; need to break through noise
**Approach:**
1. Research attendees before event (LinkedIn, event website)
2. Email hook is the event itself (VIP access, dinner, networking)
3. Secondary hook: "Quick 1:1 to hear what you're working on" (not a pitch)
4. Follow up day-of with "great to meet" or "sorry we missed each other"
5. Post-event: standard outreach but reference the event as context

**What works:**
- Event as primary value prop = 3-5x higher engagement than cold email
- Organic conversation at event = way lower pressure
- Post-event follow-up has high context relevance

**What doesn't work:**
- Treating event outreach like cold email (no event angle)
- Trying to pitch at the event
- Abandoning after event (follow-up is critical)

**Baseline:** 20-25% response rate (event-triggered) vs. 10-12% for cold email

---

### Pattern: Pigment Playbook (Concentration of Signals)
**When to use:** High-value account; CEO spotted at conference; multi-stakeholder buy-in needed
**Approach:**
1. Week 1: Spot CEO at conference (HumanX, Scale Conf, Founder Summit)
2. Week 1 (same day): Send 3 ghost notes from Braintrust execs (CEO, VP Eng, CFO angles)
3. Week 2: Warm intro from internal connection (board member, investor, mutual friend)
4. Week 2: SDR cold outreach (different angle: "I see you're exploring X, here's how Y company solved it")
5. Week 3-4: Close call

**What works:**
- Concentration effect: 3+ signals in same week = high urgency perception
- Multiple entry points = higher likelihood of reaching right person
- Executive voices + warm intro = credibility spike

**What doesn't work:**
- Spreading signals over 4+ weeks (loses momentum)
- No internal leverage (ghost notes alone aren't enough)
- Spammy-feeling (too many touches without spacing)

**Baseline:** 1-2 week turnaround from "spotted at conference" to qualified call

---

## RESEARCH PATTERNS (PROVEN)

### Pre-Outreach Research Workflow
**Time allocation:** 15-20 min per prospect (quality over quantity)
**Steps:**
1. Apollo deep dive (funding, headcount, revenue estimate, hiring activity)
2. LinkedIn scan (founder/CEO profile, recent posts, hiring activity)
3. Web search (press releases, blog posts, product launches—last 6 months)
4. Company website (product docs, team bios, use cases for AI signals)
5. Capture 2-3 specific insights

**Signals to find:**
- Growing engineering team (hiring AI/eval roles)
- Public AI announcements or product launches
- Mentions of "eval," "quality," "observability," "hallucination," "safety" in docs
- Funding rounds or revenue milestones
- Executive hires (VP Eng, Chief AI Officer, etc.)

**What works:** Strong signal = 10-15% reply rate; weak signal = 3-5% reply rate
**What doesn't work:** Assuming you know their problem, researching for 45+ min (diminishing returns), ignoring negative signals

---

## ANTI-PATTERNS (AVOID THESE)

### Prospecting Anti-Patterns
- ❌ **Generic outreach without research:** Reply rate <3%; wastes time
- ❌ **Over-personalizing (45+ min per prospect):** Quality gain not proportional to time; kills velocity
- ❌ **Skipping qualification:** Pursuing everyone in TAM; lower conversion
- ❌ **Changing hook every week:** Can't measure what works; no compounding
- ❌ **Cold call to C-level/T1 targets:** Gets screened; email first
- ❌ **Blind LinkedIn connects without email first:** Gets ignored

### Messaging Anti-Patterns
- ❌ **Info dumps:** Long paragraphs about features; no one reads
- ❌ **Em dashes — everywhere:** Feels rambling; use periods instead
- ❌ **Feature-focused pitch:** "Our platform evaluates..." (they don't care)
- ❌ **No specific signal:** "I noticed you work in AI" (generic spam)
- ❌ **Using Navan for non-voice problems:** Wrong use case; Navan is voice-only
- ❌ **Multiple CTAs:** Pick one ask; multiple confuses

### Research Anti-Patterns
- ❌ **Skipping warm lead research:** "Cold to cold" kills response rate
- ❌ **Not checking c- Slack channels for context:** Miss internal intelligence
- ❌ **No marketing calendar check:** Miss coordinated outreach windows
- ❌ **Not checking recent news:** Miss buying signals
- ❌ **Stale prospect data:** LinkedIn info is outdated; verify before outreach

---

## SIGNAL PRIORITIZATION

**High-Intent Signals (act within 1 week):**
- Hiring for eval, safety, quality assurance, AI roles
- Public mention of evaluation or hallucination problems
- Company launches AI product/feature
- Executive hire focused on AI governance

**Medium-Intent Signals (research & track):**
- Company fundraising round (Series A/B/C)
- Tech stack adoption of LLM frameworks
- Industry trends mentioning AI reliability

**Validation Signals (build narrative):**
- Public statements about AI quality/reliability
- Panel discussions on AI safety
- Research papers on eval challenges

---

## Research Patterns

*Tested approaches for gathering intel on prospects and competitors.*

### [TBD: Pre-Outreach Research Workflow]

**When to use:** Before first touch to prospect
**Approach:**
1. Apollo deep dive: recent funding, headcount, website, job postings, revenue estimate
2. LinkedIn: founder/CEO profile, hiring activity, recent announcements
3. Web search: press releases, blog posts, product announcements (last 6 months)
4. Company website: product docs, team bios, use cases (look for AI/evals/observability signals)
5. Cap research: 20 min / prospect (quality over depth)

**Signal to look for:**
- Growing engineering/ML team (hiring signals = active development)
- Public AI announcements or product launches
- Mentions of "eval," "observability," "testing," "quality" in docs
- Funding rounds (suggests growth phase)

**What works:** [TBD—measure what signals predict reply/progression]
**What doesn't work:** Assuming you know their problem without research, researching for hours (diminishing returns), ignoring negative signals

**Output:** 2-3 specific insights from research that inform outreach hook

---

### [TBD: Competitive Intelligence Cycle]

**When to use:** Quarterly or when new competitor emerges
**Approach:**
1. Research competitor: website, pricing, positioning, customers (if visible)
2. Test their product (if possible): UI, UX, feature set, positioning
3. Shadow sales: read their blog, monitor job postings (hiring for what?)
4. Capture in battlecard: 1-page comparison (Braintrust vs. Competitor X)
5. Update quarterly

**What works:** [TBD—measure if competitive intel reduces objections]
**What doesn't work:** Obsessing over competitor details before understanding your own value prop

---

## Workflow Patterns

*Tested approaches for organizing work and maintaining discipline.*

### [TBD: Weekly Planning Ritual]

**When to use:** Every Friday afternoon or Monday morning
**Approach:**
1. Review ACTIVE_CONTEXT.md: what's live? Any blockers?
2. Scan PROJECTS_INDEX.md: what's due this week?
3. Audit CONTACTS_INDEX.md: any hot opportunities? Follow-ups needed?
4. Check against GOALS.md: am I on track for quarterly targets?
5. Set 3-5 priorities (not more)
6. Block calendar for execution (not just meetings)

**What works:** [TBD—measure: Do you hit weekly priorities? Is quota tracking on pace?]
**What doesn't work:** Overpacking week with 10+ priorities, not blocking execution time, focusing on activity instead of outcomes

**Time to implement:** 30 minutes

---

### [TBD: CRM Discipline (Apollo Hygiene)]

**When to use:** After every interaction
**Approach:**
1. Log interaction: date, type (call/email/meeting), summary (2-3 sentences)
2. Update stage: move prospect through pipeline stages as appropriate
3. Set next step: what's the next action? When?
4. Add to list/label: which list/campaign is this for?
5. Timestamp: do this same day (not batching)

**What works:** [TBD—measure: Can you quickly surface "hot" or overdue opportunities?]
**What doesn't work:** Batch logging on Friday (lose context), sparse notes, no next step clarity

**Time per contact:** 3-5 minutes

---

## Anti-Patterns

*Things that slow you down or create confusion.*

### Prospecting Anti-Patterns
- ❌ **Generic outreach without research:** Low response rate (typically <3%)
- ❌ **Over-personalizing:** Takes 45+ min/prospect; quality gain not proportional to time spent
- ❌ **Skipping qualification:** Pursuing everyone in TAM vs. warm prospects; lower conversion
- ❌ **Changing outreach hook weekly:** Doesn't give any approach time to compound; hard to measure what works
- ❌ **Mixing too many channels:** Cold email AND cold call AND LinkedIn same day = confusing sequence

### Execution Anti-Patterns
- ❌ **Being busy without progress:** Activity (sending 100 cold emails) vs. outcome (2 qualified conversations)
- ❌ **Waiting for perfect info:** Researching for 1+ hour before outreach; analysis paralysis
- ❌ **No quota pacing:** Waking up in month 3 down 40% to quota
- ❌ **Skipping discovery:** Going to proposal before understanding their problem; lower win rate

### Messaging Anti-Patterns
- ❌ **Feature-focused:** "Our platform provides evals, observability, and skill graphs" (they don't care)
- ❌ **Problem-agnostic:** "We help companies with AI" (too broad; doesn't differentiate)
- ❌ **Using company language without context:** "Execution layer for AI" works when they know Braintrust; not always obvious to cold prospects
- ❌ **Assuming urgency:** They may not feel pain yet; educate before selling

---

## Notes

Patterns should be concrete and testable. "Leads to better results" is less useful than "Leads to 12% reply rate vs. 4% for generic outreach."

Update this as you discover patterns. Move patterns here from SESSION_LOG.md and LESSONS_LEARNED.md once validated (tested 3+ times with consistent results).

---

## Baseline Metrics (Update as You Learn)

| Metric | Target | Current Baseline | Notes |
|--------|--------|-----------------|-------|
| Cold email reply rate | 10-12% | [TBD] | First touch to qualified prospect |
| Discovery call progression | 50%+ | [TBD] | Call → proposal |
| Proposal close rate | 40%+ | [TBD] | Proposal → closed won |
| Sales cycle (net new) | 30-45 days | [TBD] | First touch to close |
| Research time per prospect | 15-20 min | [TBD] | Before outreach |
| [TBD] | [TBD] | [TBD] | [TBD] |

