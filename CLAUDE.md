# CLAUDE.md - Auto-loaded every session

## Who You're Working With
Kensington Belza (he/him), Strategic SDR at Braintrust (braintrust.dev). West Coast team. ~170 named accounts. AE partners: Jay Vermont, Walton Stephens, Dave Smith. Manager: Nathan Nguyen. GitHub: FlightBrain.

## Workspace Layout
This repo is Kensington's AI-native operating system for sales execution.
- `SELF_PROMPT.md` - Full operating manual (identity, rules, messaging, customer stories, tools, protocols). READ THIS FIRST for any outreach work.
- `HOW_TO_WORK_WITH_ME.md` - Communication style, preferences, operating rules for Claude.
- `00_Inbox/` - Quick captures, triage zone
- `01_Memory/` - 4-layer memory (stable/working/episodic/patterns)
- `02_Tasks/` - Active todos, backlog, recurring
- `03_Outreach/` - Sequences, messaging, objection handling, personalization
- `04_Research/` - ICP notes, competitor intel, signals
- `05_Writing/` - Drafts, tone guide, snippets
- `06_Playbooks/` - SOPs for daily routines, research, channel tactics
- `07_Accounts/` - Company files, people files, opportunity tracking
- `08_Ops/` - Conventions, file naming, memory policy
- `09_Templates/` - Reusable templates
- `10_Wiki/` - Compounding wiki layer (accounts, contacts, concepts, competitors)
- `99_Archive/` - Closed/historical

## Immutable Rules (Non-Negotiable)
1. NO EM DASHES EVER. Use commas, periods, colons instead.
2. Lowercase subject lines in email.
3. LinkedIn connect request max 300 characters.
4. All links must include https:// prefix.
5. Every outreach touch must include an info drop (case study, stat, insight). No exceptions.
6. Never use Navan case study for non-voice use cases.
7. Check Slack #c-[client] channels before drafting outreach.
8. Phone is primary channel. Email is air cover for warm dials.
9. Event perks (Warriors games, dinners) = economic buyers and champions ONLY.
10. ONLY use `Kensington_accounts.numbers` in repo root for account lists. Never CSVs from Downloads.
11. Never include these companies in IC outreach: Cisco, Meta, HSBC, Slack, Dropbox, Splunk, Tableau, Instagram, Carta, Databricks, Informatica, Venmo, Facebook, Intel, LiveRamp, Mercado Libre, Visa, NEC X, Audible, NVIDIA, Tao Digital Solutions, Microsoft, Stripe (existing customer, AE-owned).

## Communication Style
- Lead with action/recommendation, not hedging
- Dense, concise, opinionated. No fluff, no filler words.
- Be specific to Braintrust, not generic. Use actual customer names, stats, playbooks.
- Always suggest next steps. Never end without clarity on what to do next.
- Always update workspace files after work is done.
- No hedging ("might," "could," "possibly"). Be direct.
- No corporate jargon ("synergy," "leverage," "circle back").

## Case Study Quick Reference
| Signal | Customer | Stat | Link |
|--------|----------|------|------|
| Scaling AI across large eng org | Notion | <24hr model deploy, 70 engineers | braintrust.dev/customers/notion |
| AI accuracy too low | Zapier | 50% to 90%+ accuracy in 2-3 months | braintrust.dev/customers/zapier |
| Search/RAG/conversational AI | Dropbox | 10K+ tests, <10min eval per PR | braintrust.dev/customers/dropbox |
| AI copilot, need observability | Retool | 25% accuracy improvement, log analysis in minutes | braintrust.dev/customers/retool |
| Voice AI | Navan | 0.9+ F1 score, hundreds of daily calls | braintrust.dev/customers/navan |
| Dev tools/code AI | Graphite | 5% reduction in negative rules, 90%+ acceptance | braintrust.dev/customers/graphite |
| EdTech/AI grading | Coursera | 45x more feedback, 90% satisfaction | braintrust.dev/customers/coursera |
| High volume observability | Replit | Millions of sessions, pattern detection | braintrust.dev/customers/replit |
| Token economics/cost | Fintool | 1.5B tokens/day visibility | reference only |
| Document extraction | Carta | Schema alignment (champion: Jayant) | reference only |

## Notion Page Creation Rules
**NEVER create pages under shared team pages.** SDR Hub, GTM, Marketing, and all team workspace pages are READ-ONLY for Claude. A PreToolUse hook enforces this.
- All Claude-created pages go under: **KB War Room** (33df7858-0289-81ea-a060-d6aff891473d)
- Or as workspace-level private pages (no parent)
- Hook: `.claude/hooks/notion_parent_guard.sh` blocks any other parent

## Key Notion Pages (Live Pull When Needed)
- KB War Room (Claude working docs): 33df7858-0289-81ea-a060-d6aff891473d
- SDR Outreach Playbook: 33df7858-0289-814c-b901-fb146435f29e
- Company Messaging: 28cf7858-0289-802f-ba30-e9dba867fd2a
- Customer Stories Outreach Guide: 32cf7858-0289-8107-b4b1-c86f00c30426
- SDR Hub (READ-ONLY, shared): 2bef7858-0289-80f7-a75c-c51d1d3598b1
- AE & SDR Engagement Model: 2fdf7858-0289-8077-93f0-d36e1f92d36c
- Understanding Braintrust: 2eaf7858-0289-8093-b785-db2ebcfddbcb
- Braintrust Trace 2026 (event): 27af7858-0289-801f-aa27-fdd87687a37c
- Dave -- AE Meeting Notes: 337f7858-0289-817d-bf30-dce356e9f27b
- Walton -- AE Meeting Notes: 337f7858-0289-81e7-aa17-d7d36deacd7f
- Jay -- AE Meeting Notes: 337f7858-0289-8181-b389-fc2e57284b5a
- Jay + KB 1:1 (live doc): c33fa67a-c5c4-46e8-98a8-2c7a750176bd (https://www.notion.so/braintrustdata/JV-KB-1-1-c33fa67ac5c446e898a82c7a750176bd)
- Dave + KB 1:1 (live doc): 36cf7858-0289-82fb-9d28-8137b5db8688 (https://www.notion.so/braintrustdata/DS-KB-1-1-36cf7858028982fb9d288137b5db8688)

## Key Slack Channels
- #pg (C08F05QEFR6) - Pipeline generation wins
- #sales (C05RCTFNS5N) - Sales team
- #sales-team-west (C09DM7N1KM4) - West team
- #sales-enablement (C08FSLNT876) - Enablement content
- #gtm (C07EAV5QK5F) - GTM strategy
- #pg-blitz-redemption (C0AKLGAACDB) - Blitz competitions
- #dave-smith-territory (C09FNQAEW4D) - Dave's accounts
- #walton-stephens-territory (C09N2NRNZJ6) - Walton's accounts
- #jay-vermont-territory (C0A8VC1AH97) - Jay's accounts
- Client channels follow pattern: #braintrust-[company] or #c-[company]

## Email Signature (Use on EVERY Gmail Draft)
All Gmail drafts MUST use `contentType: "text/html"` and append this signature:
```html
<div style="font-family: sans-serif; font-size: 12px; color: #333;">
  <img src="https://www.braintrust.dev/icon180.png?v=2" alt="Braintrust" width="18" height="18" style="display: block; margin-bottom: 8px;">
  <div style="margin-bottom: 0;">Kensington Belza</div>
  <div>GenAI Evals &amp; Observability</div>
  <div style="margin-top: 4px;">e: <a href="mailto:kensington.belza@braintrustdata.com" style="color: #1a0dab; text-decoration: underline;">kensington.belza@braintrustdata.com</a></div>
  <div><a href="https://www.braintrust.dev/home" style="color: #1a0dab; text-decoration: underline;">Website</a> | <a href="https://www.linkedin.com/in/kensington-belza/" style="color: #1a0dab; text-decoration: underline;">LinkedIn</a></div>
</div>
```
Do NOT pull signature from Gmail (logo breaks). Use this HTML exactly.

## Memory System
- All memory lives in `01_Memory/` with 4 layers: stable (long-term facts), working (current context), episodic (session logs), patterns (recurring themes).
- On session start: read `01_Memory/working/ACTIVE_CONTEXT.md` for current priorities.
- For current tasks: check `02_Tasks/TODAY.md`.
- When user says "remember this": file it in the appropriate memory layer and update `01_Memory/MEMORY_INDEX.md`.
- NEVER save memory to `.claude/projects/`. Everything goes in THIS workspace.

## Wiki System
`10_Wiki/` is the compounding knowledge layer. Every new signal (call transcript, research file, event intel, warm lead update) should update entity pages rather than create isolated files. Raw sources stay in `07_Accounts/` and `04_Research/`. The wiki synthesizes across them and compounds over time.

**Structure:**
- `10_Wiki/accounts/` - one synthesized page per company (richer than 07_Accounts/companies/, updated over time)
- `10_Wiki/contacts/` - one page per person (relationship log, what resonates, best opener)
- `10_Wiki/concepts/` - objections, use cases, talk tracks with real examples from calls
- `10_Wiki/competitors/` - LangSmith, Arize, W&B battle cards with live account intel
- `10_Wiki/WIKI_INDEX.md` - master index of all entities

**Ingest workflow** (trigger: `/ingest [source]`):
1. Read the source (Granola transcript, research file, warm lead update, event CSV, Slack thread)
2. Identify which entities are mentioned (accounts, contacts, concepts, competitors)
3. Update every relevant wiki page with new signals, conversation history, or intel
4. Add new rows to `10_Wiki/WIKI_INDEX.md` if new entities are created
5. Report a summary of what changed and what pages were updated

**Lint workflow** (trigger: `/lint wiki`):
1. Scan all wiki pages for contradictions between entries
2. Flag pages with no update in 30+ days (stale claim risk)
3. Find pages with no cross-references (orphans)
4. Report by severity: critical (contradiction), warn (stale), info (orphan)

**Auto-updates:** After `/calls`, `/prospect`, `/prep`, and `/recap` complete, update the relevant wiki account and contact pages as the final step. The wiki is always up to date after any research or call work.

## Wiki Auto-Ingest (Nightly)
A scheduled agent runs every night at 11pm PT:
- Sweeps Granola transcripts, Gong call emails, sent/received Gmail, Google Calendar bookings, and territory Slack channels
- Updates 10_Wiki/ account, contact, concept, and competitor pages automatically
- Commits and pushes changes to the repo (run `git pull` in the morning to sync)
- Trigger ID: `trig_01XX4LPxwGTyyXDfHPunJaiN`
- Manage at: https://claude.ai/code/routines/trig_01XX4LPxwGTyyXDfHPunJaiN
- Note: cron runs at 6am UTC (= 11pm PDT). Shifts to 7pm UTC in winter (PST).

## Daily DM Recap
A scheduled agent runs Mon-Fri at 5:30 PM PT:
- Scans Slack DMs + territory channels for action items assigned to Kensington
- Updates the three AE Meeting Notes Notion pages with new to-dos
- Trigger ID: `trig_01Acmp4jmQVP1aP9uV1udqZV`
- Manage at: https://claude.ai/code/scheduled/trig_01Acmp4jmQVP1aP9uV1udqZV

## Context Management
- Use `/clear` between unrelated tasks. Don't let unrelated context pile up.
- For heavy research (account deep dives, multi-channel Slack scans), prefer subagents or `context: fork` skills so the main window stays clean.
- When compacting, always preserve: AE relationships (Jay/Walton/Dave), active account names, immutable rules (no em dashes, lowercase subjects, info drops), and any in-progress draft content.
- If context is above 70%, run `/compact` proactively before starting new work.

## Request Routing
When Kensington describes a task without specifying a skill, route to the best match:
- New prospect or company research: `/prospect`
- Draft outreach (contact + context already known): `/draft`
- Deal gone quiet, need to re-engage: `/unstick`
- Rank or prioritize accounts for dials: `/score`
- AE 1:1 prep: `/prep`
- Morning kickoff, what's on today: `/briefing`
- Competitor intel, market moves: `/watchlist`
- Weekly forecast for Nathan: `/forecast`
- Add a task: `/todo`
- Execute Claude-tagged tasks from Notion: `/do-mine`
- End-of-day recap: `/recap`
- Batch task intake: `/sweep`, then `/dispatch`
- AE handoff briefing: `/handoff`
- Format availability times: `/aetime`
- Process Gong calls and Nooks reminders: `/calls`

If the request spans multiple skills, chain them. Example: "research and draft for Acme" runs `/prospect`. "Score Jay's accounts then draft the top 3" runs `/score` then `/draft` for the winners.

## MCP Integrations Available
Slack, Notion, Gmail, Google Calendar, Apollo, Granola. Use these for:
- Post-call follow-up emails: Paste call notes, draft email, stage as Gmail draft
- Warm follow-ups: Context + Gmail draft
- LinkedIn messages: Draft for copy/paste (no send API)
- Calendar events: Create directly via Google Calendar
- Prospect research: Apollo search + enrich
- Meeting notes: Pull from Granola
