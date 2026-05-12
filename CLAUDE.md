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
10. Notion "Kensington Territory Intelligence" DB is the SOURCE OF TRUTH for accounts. ID: 0f62663a46e14fd3ad2981cee5fdf872 (data source: 8979d944-1889-4ef4-b63c-a2e1a8a4a177). Use this DB for all account lookups, ICP/AI signal pulls, AE ownership, and prospecting filters. Kensington_accounts.csv in repo root is a stale snapshot. Never use CSVs from Downloads.
11. Never include these companies in IC outreach: Cisco, Meta, HSBC, Slack, Dropbox, Splunk, Tableau, Instagram, Carta, Databricks, Informatica, Venmo, Facebook, LiveRamp, Mercado Libre, Visa, NEC X, NEC Corporation, Audible, NVIDIA, Tao Digital Solutions, Microsoft, Stripe, ZoomInfo, Dialpad, Rivian, Activision, Adobe (existing customer, AE-owned), Commure, Athelas (Commure entity), Memora Health (Commure-owned), Pigment, Salesforce, Cloudflare, LinkedIn, Netflix, Supabase, Replit, McAfee, Mercor, Asana, Bill.com, Flapping Airplanes, AppsFlyer, Robinhood, SoFi, PayPal, Redfin, GitHub, DBT Labs, InvestCloud, Tegra118 (InvestCloud entity), Finantix (InvestCloud entity), Wells Fargo, AMD, ResMed, Dexcom, Fyxer AI, Block, Square, Cash App, OctoML, Gretel (NVIDIA-owned, open opp), Gamma.

**Subsidiary rule:** If a blocked company acquires another company, that subsidiary is also blocked. Especially for NVIDIA, Salesforce, Adobe, Cisco, Microsoft, Stripe, Databricks (all have open opps or AE-managed deals). Examples: Gretel (NVIDIA), Frame.io (Adobe), Reclaim.ai (Dropbox), TaxJar (Stripe), Tabular (Databricks), Athelas + Memora (Commure), Tegra118 + Finantix (InvestCloud), Cisco ThousandEyes + Acacia (Cisco), Square + Cash App (Block). Before adding any new company to a sequence, check if it has been acquired by a blocked parent.

**Job change rule:** When a contact has moved companies (Apollo, LinkedIn, Nooks, or any tool flags "no longer at X"), check their NEW employer against the blocked list before deciding what to do. If their new company is blocked, mark them PERMANENT SKIP and remove from all active sequences and lists. Do not just quietly drop them from one account search. Example: Adrianne Martinson left TikTok and moved to Meta (blocked). She should be flagged as permanently off-limits, not silently filtered out of a TikTok search.
12. IC outreach = email and LinkedIn only. No cold calls, no meeting CTAs. Goal is a reply, a resource share, or a referral up to their VP. VP+ outreach = Nooks dial first, email is air cover. Exception: IC who publicly posted about evals, agents, or observability in the last 30 days gets one warm dial attempt.
13. Never send the same case study to the same contact twice within a sequence. If Notion was Touch 1, Touch 3 must be Zapier, Retool, Graphite, or another customer. Notion is not a default. Rotate by signal match, not convenience.
14. When a prospect raises DIY or open source eval solutions as an alternative, lead with Brainstore: 80x faster than rolling your own, runs in your infrastructure, no maintenance burden as models update. This is the answer to the build vs buy objection.

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
| Scaling AI across large eng org | Notion | <24hr model deploy, 70 engineers, 80% of AI work from BT traces | braintrust.dev/customers/notion |
| AI accuracy too low | Zapier | 50% to 90%+ accuracy in 2-3 months | braintrust.dev/customers/zapier |
| Search/RAG/conversational AI | Dropbox | 10K+ tests, 150 pre-merge smoke tests, real-time regression detection | braintrust.dev/customers/dropbox |
| AI copilot, need observability | Retool | 23% accuracy improvement, classifier 72% to 95%, weeks to minutes for log analysis | braintrust.dev/customers/retool |
| Voice AI (ONLY) | Navan | 0.9+ F1 score, 0.56 to 0.89 improvement, hundreds of daily calls | braintrust.dev/customers/navan |
| Dev tools/code AI | Graphite | 90%+ acceptance rate, 5% reduction in negative rules | braintrust.dev/customers/graphite |
| EdTech/AI grading | Coursera | 45x more feedback, 90% satisfaction, 16.7% course completion increase, 1-min turnaround | braintrust.dev/customers/coursera |
| High volume observability | Replit | Millions of sessions, pattern detection, real-time traces | braintrust.dev/customers/replit |
| Token economics/cost/financial AI | Fintool | 1.5B tokens/day, 70M document chunks | reference only |
| Agentic/browser agents | Browserbase | Combined browser + model observability | braintrust.dev/customers/browserbase |
| PM/SME-driven iteration, faster deploys | Portola | 4x faster iteration, 0 engineering handoffs | braintrust.dev/customers/portola |
| Document extraction | Carta | Schema alignment (champion: Jayant) | reference only |

## Document Creation Rule
All documents, handover briefs, research summaries, and workspace outputs must be created as **Notion pages** (under KB War Room or as private workspace pages), NOT as local markdown files. After creating, send the link directly to #kensington-belza (C0AQCKR9M2S).

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
- #kensington-belza (C0AQCKR9M2S) - KB's private working channel. **Claude may SEND directly here (no draft required).** Use for delivering links, summaries, and outputs.
- #kensington-belza-helpdesk (C0ASG5AUW72) - public helpdesk channel

## Email Signature (Use on EVERY Gmail Draft)
All Gmail drafts MUST use `contentType: "text/html"` and append this signature:
```html
<div style="font-family: sans-serif; font-size: 12px; color: #000;">
  <img src="https://www.braintrust.dev/icon180.png?v=2" alt="Braintrust" width="18" height="18" style="display: block; margin-bottom: 8px;">
  <div style="margin-bottom: 0;">Kensington Belza</div>
  <div>GenAI Evals &amp; Observability</div>
  <div style="margin-top: 4px;">e: <a href="mailto:kensington.belza@braintrustdata.com" style="color: #1a0dab; text-decoration: underline;">kensington.belza@braintrustdata.com</a></div>
  <div><a href="https://www.braintrust.dev/home" style="color: #1a0dab; text-decoration: underline;">Website</a> | <a href="https://www.linkedin.com/in/kensington-belza/" style="color: #1a0dab; text-decoration: underline;">LinkedIn</a></div>
</div>
```
Do NOT pull signature from Gmail (logo breaks). Use this HTML exactly: keep the `<img>` tag (logo MUST render), keep `color: #000` (text MUST be black, never `#333` or grey).

## Memory System
- All memory lives in `01_Memory/` with 4 layers: stable (long-term facts), working (current context), episodic (session logs), patterns (recurring themes).
- On session start: read `01_Memory/working/ACTIVE_CONTEXT.md` for current priorities.
- For current tasks: check `02_Tasks/TODAY.md`.
- When user says "remember this": file it in the appropriate memory layer and update `01_Memory/MEMORY_INDEX.md`.
- NEVER save memory to `.claude/projects/`. Everything goes in THIS workspace.

## Wiki-First Lookup Protocol
Before any `/draft`, `/prospect`, `/prep`, `/score`, `/handoff`, `/unstick`, `/booked`, `/briefing`, or `/watchlist`:
1. Check `10_Wiki/accounts/[company].md` for existing intel, conversation history, last touch, current signals
2. Check `10_Wiki/contacts/[person].md` for relationship log, what resonated, best opener
3. Pull from wiki first. Don't rebuild intel that already exists.
4. After completing work, update relevant wiki pages with any new signals found.

If no wiki page exists for the account or contact, proceed with research as normal and create the page as a final step.

**Wiki is canonical.** `10_Wiki/accounts/` outranks `07_Accounts/companies/`. The latter is for raw research dumps that have not yet been synthesized into the wiki. If both exist, the wiki is source of truth and updates go to the wiki.

## History-First Preflight (mandatory)
Every outreach skill (`/draft`, `/prospect`, `/unstick`, `/handoff`, `/booked`, `/briefing`, `/prep`) must run the full preflight at `06_Playbooks/HISTORY_FIRST_PREFLIGHT.md` BEFORE producing any draft. The preflight pulls Gmail, Slack DMs + territory + #c-company, Notion Meeting Tracker + Account Tracker, wiki pages, Granola transcripts, and SFDC-via-Slack search, and produces a PRIOR HISTORY block that drives every choice in the draft (case study rotation, link rotation, opener angle). No exceptions.

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

## Task Creation Rules (enforced by sweep agent and all auto-ingest)

**Full ruleset:** See `02_Tasks/TASK_CAPTURE_RULES.md`. Read it before creating any task.

**Core rules (memorize these):**
- **Dedup against Done tasks:** Before creating any task, query the Task Tracker for tasks with the same person + company in Status = Done (14-day lookback). If found: SKIP unless clearly a distinct new action.
- **Dedup against open tasks:** Also check Status != Done for the same person + company. If exists: SKIP.
- **LinkedIn notifications = never a task.** "Accepted your connection request", "sent you a message on LinkedIn", "viewed your profile" - all filtered out. No exceptions.
- **Already done in thread = skip:** If KB replied "Done", "Sent", "Handled" etc. in the SAME thread as the request, the task is done. Do not create.
- **Blocked company outreach = skip.** See immutable rules list. Never queue outreach for blocked companies.
- **Ambiguous request = ask first.** If unclear what to do, post a question to #kensington-belza before creating a vague task.
- **Gmail check for outreach tasks:** Before creating "Email/Call [person] at [company]", search Gmail for that person's name. If email sent in last 7 days, add "(check: email sent recently)" note to task body.

**PREP tasks**: Only create a "Prep for [meeting]" task when the prospect has accepted the calendar invite (attendee status = "accepted"). No response or tentative = route to TO BOOK flow, not prep queue.

**TO BOOK tasks**: Any person in Meeting Tracker with status REBOOK, NEED TO CONFIRM CAL, or TO BOOK gets exactly one linked to-do task. The task title is the specific next action (e.g. "Rebook: Aditya at PowerSchool, Apr 30") and the task description includes a direct Notion link to their Meeting Tracker row. No orphan tasks. No duplicates.

**Warm Leads are NOT synced to the Task Tracker** (desynced 2026-05-12). Do not auto-create tasks from the Warm Leads DB. Warm Leads stays a standalone tracker. If KB wants action on a warm lead, he creates the task manually via /todo.

**AE ownership + thread-direction rules (added 2026-05-12, see `02_Tasks/TASK_CAPTURE_RULES.md` PART 2):**
- Messages directed at Jay, Walton, Dave, or Nathan in territory channels are NOT KB tasks. KB only owns it when explicitly named or when KB volunteered in-thread.
- Post-meeting follow-ups when an AE attended belong to the AE, not KB.
- "Identify name", "find LinkedIn", "confirm title" research items are inline lookups, never to-dos.
- Out-of-domain alerts (security, infra, IT, HR) are skipped unless KB owns the domain.
- Always read the latest Gmail thread message before creating a "confirm with X" task. If the contact already confirmed in-thread, skip.
- Blocked-company tasks are a HARD skip across ALL task types, not just outreach. Includes subsidiaries (Commure, Microsoft, Adobe, etc.).

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

## Daily Calendar Planner (Noon PT)
A scheduled agent runs Mon-Fri at noon PT:
- Reads tomorrow's Notion task queue, warm leads, meeting rebooks, and new marketing events
- Resolves contact timezones (EU at 7am, East at 9am, West at 11am PT)
- Creates private Google Calendar blocks for call time, email air cover, task blocks, and event PG blocks
- Watches Notion events page + Slack #events for new dinners/webinars and auto-creates PG blocks
- Posts a summary to #kensington-belza when done
- Trigger ID: `trig_0151uxHEqdDYcYVrLiixBUjm`
- Manage at: https://claude.ai/code/routines/trig_0151uxHEqdDYcYVrLiixBUjm
- Note: cron runs at 7pm UTC (= noon PDT). Shifts to 8pm UTC in winter (PST).

## Context Management
- Use `/clear` between unrelated tasks. Don't let unrelated context pile up.
- For heavy research (account deep dives, multi-channel Slack scans), prefer subagents or `context: fork` skills so the main window stays clean.
- When compacting, always preserve: AE relationships (Jay/Walton/Dave), active account names, immutable rules (no em dashes, lowercase subjects, info drops), and any in-progress draft content.
- If context is above 70%, run `/compact` proactively before starting new work.

## Request Routing

**Behavior rules (enforced):**
1. **Always scan available skills FIRST.** When Kensington describes a task, check the skill list before doing manual work. Available skills are surfaced in the system reminder at session start.
2. **Invoke directly when a skill exactly matches.** Don't ask permission first, just run it.
3. **Offer when a skill is close but not perfect.** Phrase: "this looks like /X territory, want me to run that or take a different angle?"
4. **Chain when the request spans multiple skills.** E.g. "research and draft Acme" runs `/prospect` then `/draft`.
5. **Promote repeat patterns to skills.** If Kensington asks for the same kind of task 2+ times (this session OR per memory), propose creating a new skill. Don't wait for the 3rd ask.
6. **Never silently do manual work when a skill exists.** It wastes the work that built the skill and produces inconsistent output.

**Routing table (best-match by intent):**
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
- Sales channel pulse (what's working, last 14 days): `/pulse`
- Handle a specific objection on the spot: `/obj`
- Multi-thread an account across stakeholders: `/multi`
- Follow-up to a Braintrust event attendee: `/event-followup`
- Demo or discovery meeting prep doc: `/demo-prep`
- Watch a deal channel for risk signals: `/threadwatch`
- Post-call follow-up email with verbatim quotes: `/post-call`
- Audit the wiki for stale or contradictory pages: `/lint-wiki`
- Pre-meeting confirmation email to prospect: `/booked-confirm`
- Ingest LinkedIn connections paste into Notion DB: `/connections`
- Ghost note (warm intro email under Bryan Cox's name): `/ghost`

If the request spans multiple skills, chain them. Example: "research and draft for Acme" runs `/prospect`. "Score Jay's accounts then draft the top 3" runs `/score` then `/draft` for the winners.

## MCP Integrations Available
Slack, Notion, Gmail, Google Calendar, Apollo, Granola, Google Drive, Vercel, Zapier. Use these for:
- Post-call follow-up emails: Paste call notes, draft email, stage as Gmail draft
- Warm follow-ups: Context + Gmail draft
- LinkedIn messages: Draft for copy/paste (no send API)
- Calendar events: Create directly via Google Calendar
- Prospect research: Apollo search + enrich
- Meeting notes: Pull from Granola

**No native MCP for these systems (use workarounds):**
- **Salesforce:** Native MCP available but not yet installed. Setup steps in `06_Playbooks/MCP_SETUP_QUEUE.md`. Until installed, query via Slack search across `#sales` (C05RCTFNS5N), `#sales-team-west` (C09DM7N1KM4), `#pg` (C08F05QEFR6), and any `#sfdc-*` notification channels.
- **Gong:** Native MCP available but not yet installed (`brownbrawh/gong-mcp-server`). Setup steps in `06_Playbooks/MCP_SETUP_QUEUE.md`. Until installed, email-only ingestion via Gmail (`from:do-not-reply@gong.io`).
- **Nooks:** No public MCP yet. Email-only ingestion via Gmail (`from:ai-assistant@nooks.in`). Used by `/calls` and `/briefing` for callback reminders.

## Skill Model Strategy
Skills now specify a `model` field in frontmatter to optimize cost vs. quality:
- **Opus 4.7** (heavy strategic reasoning): /draft, /prospect, /score, /prep, /briefing, /calls, /sdr-weekly-sync, /forecast, /unstick, /handoff, /pulse, /multi, /demo-prep, /threadwatch, /post-call, /connections, /ghost
- **Sonnet 4.6** (balanced): /booked, /watchlist, /ingest, /do-mine, /recap, /obj, /event-followup, /lint-wiki, /booked-confirm
- **Haiku 4.5** (fast utility): /aetime, /todo, /dispatch, /sweep

Skills inherit the session model if no field is set. Override only when you have a strong reason.

**History-first preflight:** All seven of these data sources (Gmail, Slack territory + DM + #c-company + SFDC channels, Notion Meeting Tracker + Account Tracker, wiki, Granola) get pulled in parallel by every outreach skill. Canonical protocol: `06_Playbooks/HISTORY_FIRST_PREFLIGHT.md`.
