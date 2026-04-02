# Memory Policy

**Purpose:** Define how the AI memory system works and how information is stored, updated, and retrieved. This is the operational guide for maintaining context across sessions and ensuring continuity.

**How to Use:**
- Reference this when creating memory update requests at end of session
- Understand the 4 memory layers so you know where information should live
- Use memory updates to brief the AI assistant on important patterns and context
- Review periodically to ensure memory stays accurate and useful

---

## The 4 Memory Layers

### 1. Stable Memory (Permanent Reference)

**What lives here:** Workspace structure, conventions, key frameworks, fundamental processes

**Examples:**
- File naming conventions (FILE_NAMING_RULES.md)
- Tagging system (TAGGING_RULES.md)
- Workspace folder structure and usage
- Braintrust's core value prop and positioning
- Key personas/ICP definitions
- Win/loss patterns that don't change frequently

**Update frequency:** Quarterly or when fundamentals change
**Durability:** Lasts entire engagement

### 2. Working Memory (Current Priorities & Context)

**What lives here:** Active deals, current pipeline status, short-term priorities, recent learnings

**Examples:**
- Which opportunities are P0 (due in next 7 days)
- Currently warm/hot accounts and their next steps
- Messaging angles that are resonating in THIS quarter
- Recent competitor moves or market shifts
- Kensington's current weekly focus areas
- Known blockers or challenges right now

**Update frequency:** Weekly (every Friday or end-of-week)
**Durability:** Lasts 2-4 weeks, then rolls into episodic log

**Format example:**
```
WORKING MEMORY UPDATE - Week of 2026-04-01:

Priority deals (next 7 days):
- Company X (Alex Rivera): Technical demo scheduled 2026-04-05, high probability
- Company Y (Sarah Chen): Awaiting CFO approval on contract, expected by 2026-04-08

Current warm pipeline (expecting engagement this month):
- Company D (5 companies in discovery phase, 2-3 expect to move to demo)

Hot messaging angles (working well in this quarter):
- "Reduce QA time by 40%" resonates with ops leaders
- "Eliminate hallucination risk" works with risk-averse buyers
- "Speed up team onboarding" works with high-growth startups

Recent market signal:
- Competitors launching eval product, market accelerating
- Budget cycles shifting earlier (companies planning Q2 now, not Q3)

Blockers:
- Two deals waiting on IT security reviews (normal 3-4 week cycle)
- One contact changed roles, need new entry point to Company Z
```

### 3. Episodic Memory (Session Logs & Interactions)

**What lives here:** Session-by-session work logs, specific conversations, dated activities, research findings

**Examples:**
- 2026-03-28 session: Sent 12 emails, 2 calls, created 3 new company profiles
- Call with John Smith on 2026-03-25: discussed use case, objection around pricing
- Research session 2026-03-20: competitive analysis, identified 3 new messaging angles
- Email sequence v2 drafted 2026-03-18: got 28% response rate vs 18% for v1
- Conference notes 2026-02-15: met 5 prospects, 2 warm intros pending

**Update frequency:** After every session (SESSION_LOG_TEMPLATE.md files)
**Durability:** Rolls into patterns after 30 days; files stay in workspace indefinitely

**Format example:**
```markdown
# 2026-04-01 Session Log

## Session Focus
Pipeline management + discovery calls with 3 warm leads

## What Was Done
- Called Alex Rivera (Company X), confirmed demo attendees
- Email follow-up to Sarah Chen with revised proposal
- Researched 4 new prospects in SaaS vertical
- Updated ACCOUNTS_INDEX.md with pipeline changes

## Outputs Created
- 4 new company files in 07_Accounts/companies/
- 1 new opportunity file for Company X pilot

## Insights Learned
- Technical leads care most about integration capability (not just accuracy)
- "Time to value" messaging works better than "accuracy improvement"

## Memory Updates Needed
- Update working memory with new warm leads
- Note that pricing objection is common; update Company B notes

## Next Actions
- Demo on 2026-04-05
- Follow up if no response from 3 prospects by 2026-04-08
```

### 4. Patterns (Strategic Insights & Rules)

**What lives here:** Recurring observations, derived insights, decision rules for similar situations

**Examples:**
- "Technical buyers care about X before Y before Z" (from analyzing 10+ calls)
- "Companies with 100-500 employees have faster decision cycles than larger orgs"
- "Enterprise deals with no executive sponsor have 10% close rate; with sponsor 60%"
- "Warm intro from existing customer = 40% move to demo; cold email = 12%"
- "If prospect engages with 3+ pieces of content, next touchpoint has 50% positive response"
- "Questions about 'AI hallucination' indicate security-conscious buyer"
- "If they ask about pricing in first call, they have budget"

**Update frequency:** Monthly (extract from session logs + wins/losses)
**Durability:** Permanent unless disproven

**Format example:**
```
PATTERN: Early Warning Signs of Stalled Deal
Indicator: Stakeholder goes quiet for >10 days after getting proposal
Root causes: (from post-mortems) budget review, competing priorities, loss of sponsor buy-in
Action: Call within 5 days with new angle + executive summary. No call = 80% loss rate.

PATTERN: Discovery Call That Converts
High signal behaviors: Asked 3+ technical questions, introduced technical team member,
  discussed timeline explicitly, asked about customer references
Conversion rate: 65% move to demo within 14 days
Action: Prioritize technical follow-up, offer to connect with reference customer
```

## How Memory Updates Happen

### End-of-Session Update

At end of each session, request a memory update that covers:

1. **New working memory items** - Any changes to active pipeline, priorities, or blockers
2. **Episodic log** - File the session log (SESSION_LOG_TEMPLATE.md)
3. **Pattern confirmation/updates** - Did you observe patterns being confirmed or contradicted?
4. **File updates** - List the workspace files created or modified

### Weekly Priority Reset

Every Friday, provide:
- Updated priority list for next week
- Any messaging or positioning updates
- New market signals or competitive moves
- Deals that progressed or stalled

### Monthly Pattern Review

First of each month:
- Review prior month's session logs
- Extract 3-5 new patterns or refine existing ones
- Update strategy docs based on what worked/didn't
- Identify training areas (e.g., "Need better handle on technical objections")

## Resolving Conflicts

**If workspace files contradict memory:**
1. Workspace files are source of truth (they are current, auditable, specific)
2. Update memory based on workspace file content
3. Note what changed and why in session log

**If memory seems outdated:**
1. Ask Kensington to confirm status
2. Check workspace files for updated info
3. Reset memory if data is >2 weeks old

**If patterns conflict:**
1. Look at sample size - larger sample size wins
2. Check if contexts differ (vertical, company size, buyer type)
3. Create context-specific patterns (e.g., "Pattern for fintech buyers" vs "Pattern for healthcare")

## Memory Examples Across 4 Layers

**Scenario: Kensington mentions "the pricing objection usually means they have budget"**

| Layer | Where It Lives | How It's Stored | How It Helps |
|-------|---|---|---|
| Stable | Framework file | "Buying signals: early pricing questions = budget availability" | Reference during discovery calls |
| Working | Weekly priority | "Pricing objection common this quarter, implies positive signal" | Shapes messaging approach |
| Episodic | Session logs | "2026-03-28 call: Sarah Chen asked about pricing in 1st call, converted" | Pattern confirmation |
| Patterns | Memory file | "Pattern: Pricing question in call 1 = 70% advance to demo" | Decision rule for prioritization |

---

**Last Updated:** 2026-04-01
**Owner:** Kensington
**Next Pattern Review:** 2026-05-01
