# Workspace Map — The Complete Directory

This document is your "you are here" guide. It maps every folder and subfolder in the workspace with descriptions of what goes where. Use this to understand the structure and to navigate quickly when you need to file or retrieve something.

## Full Tree Structure

```
get_me_to_Korea/
├── README.md                          # Start here (overview & philosophy)
├── WORKSPACE_MAP.md                   # This file (detailed directory guide)
├── HOW_TO_WORK_WITH_ME.md             # Instructions for Claude (communication, preferences, rules)
├── CHANGELOG.md                       # Running log of workspace changes
│
├── 00_inbox/
│   ├── daily_captures.md              # Quick notes, ideas, raw captures (triaged into proper folders weekly)
│   ├── to_file.md                     # Things to sort and move to their permanent home
│   └── templates_drafts/              # Incomplete templates and work-in-progress docs
│
├── 01_core_context/
│   ├── your_role.md                   # Your job description, mandate, success metrics at Braintrust
│   ├── operating_principles.md        # Your non-negotiables, decision-making framework, values
│   ├── goals_okrs.md                  # Current quarter OKRs, annual goals, personal development targets
│   ├── non_negotiables.md             # What you will and won't do, what matters most
│   └── braintrust_overview.md         # What Braintrust does, product, market, your role in it
│
├── 02_customers/
│   ├── key_accounts.md                # High-priority customers, account profiles, ownership
│   ├── customer_intel/
│   │   ├── [company_name].md          # Per-company intelligence (decision makers, pain points, budget)
│   │   └── ...
│   ├── closed_deals.md                # Log of won deals, customer success stories, case studies
│   └── lost_deals.md                  # Lost deals, why they didn't close, lessons learned
│
├── 03_outbound/
│   ├── prospect_list.md               # Current target list, scoring, priority
│   ├── research_templates/
│   │   ├── company_profile_template.md # Standard format for capturing prospect context
│   │   └── persona_research_template.md # How to research a title/persona quickly
│   ├── messaging_frameworks/
│   │   ├── value_prop_variants.md     # Different ways to position Braintrust's value
│   │   └── pain_point_triggers.md     # Objections you hear and your responses
│   └── cold_sequences/
│       ├── sequence_01_intro.md       # Email sequence 1: Introduction & value
│       ├── sequence_02_product_demo.md # Email sequence 2: Capability deep-dive
│       └── sequence_03_social_proof.md # Email sequence 3: Case studies & urgency
│
├── 04_sales_process/
│   ├── qualification_criteria.md      # BANT/MEDDIC framework, your criteria for moving deals
│   ├── deal_stages.md                 # Your sales stages (outreach, qualified, demo, negotiation, close)
│   ├── discovery_playbook.md          # How to run a discovery call, key questions to ask
│   ├── demo_playbook.md               # How to demo Braintrust, talking points, common objections
│   ├── closing_playbook.md            # How to close deals, negotiation tactics, final objections
│   └── contract_handling.md           # Contract process, legal/finance contact, typical terms
│
├── 05_tools_systems/
│   ├── apollo_guide.md                # How to use Apollo for prospecting, search filters, outreach
│   ├── slack_guide.md                 # Internal Slack channels, communication norms, who to reach
│   ├── gmail_guide.md                 # Email management, templates, signature, rules
│   ├── notion_guide.md                # How to use Notion CRM, deal tracker, team resources
│   ├── granola_guide.md               # Granola for call recording/notes, integration with Slack
│   ├── linkedin_guide.md              # LinkedIn for research, messaging, connection strategy
│   └── integrations.md                # How all tools talk to each other, sync rules
│
├── 06_meetings_calls/
│   ├── call_prep_templates/
│   │   ├── discovery_call_prep.md     # Template: who, what, when, talking points
│   │   ├── demo_call_prep.md          # Template: agenda, slides, success criteria
│   │   └── closing_call_prep.md       # Template: terms, next steps, decision timeline
│   ├── call_summaries/
│   │   └── [date]_[prospect_name].md  # Post-call notes, action items, next steps
│   ├── meeting_notes/
│   │   ├── standup_notes.md           # Weekly team standups (if you attend)
│   │   └── 1on1_notes.md              # 1:1 with manager, feedback, career conversations
│   └── recordings_log.md              # Index of Granola recordings, dates, outcomes
│
├── 07_learning/
│   ├── articles_reads/
│   │   ├── [topic]_summary.md         # Articles you've read with notes & takeaways
│   │   └── ...
│   ├── sales_frameworks/
│   │   ├── meddic_notes.md            # MEDDIC methodology, how to apply
│   │   ├── sandler_notes.md           # Sandler training, key concepts
│   │   └── [framework_name].md        # Other sales methodologies you're learning
│   ├── product_knowledge/
│   │   ├── braintrust_deep_dive.md    # Your knowledge of Braintrust (features, roadmap, limits)
│   │   ├── competitors.md             # Competitive landscape, how you're different
│   │   └── market_trends.md           # Industry trends, customer pain evolution
│   └── skill_development.md           # What you're working on, books, courses, practice
│
├── 08_templates/
│   ├── email_templates/
│   │   ├── intro_email.md             # First touch cold email
│   │   ├── demo_request_email.md      # Email requesting a demo
│   │   ├── followup_email.md          # Afterreminders
│   │   ├── objection_email.md         # Responding to "not interested"
│   │   └── close_email.md             # Final push before close
│   ├── call_scripts/
│   │   ├── discovery_script.md        # Talking points for discovery call
│   │   ├── demo_script.md             # Demo call script, key messages
│   │   └── closing_script.md          # Closing language, handling final objections
│   ├── messaging_templates/
│   │   ├── linkedin_connection_request.md
│   │   ├── slack_outreach.md          # How to message people on Slack cold
│   │   └── apollo_sequence_template.md # Template for multi-touch campaign
│   └── document_templates/
│       ├── statement_of_work.md       # SOW template (legal has the real one)
│       └── customer_onboarding.md     # Onboarding checklist & timeline
│
├── 09_logs/
│   ├── 2026_q1_okrs.md                # Q1 goals and tracking
│   ├── 2026_q2_okrs.md                # Q2 goals (as filled in)
│   ├── daily_standup.md               # Each day: 3 wins, 3 priorities, blockers
│   ├── weekly_review.md               # Friday reflections: what worked, what didn't, lessons
│   ├── monthly_metrics.md             # Pipeline, conversion rates, activity metrics
│   └── performance_log.md             # Raw data: outreach count, calls, conversions by date
│
├── 10_Wiki/
│   ├── WIKI_INDEX.md                  # Master index of all wiki entities
│   ├── accounts/                      # Synthesized account pages (compound over time)
│   ├── contacts/                      # Per-person relationship pages
│   ├── concepts/                      # Objections, use cases, talk tracks
│   └── competitors/                   # Battle cards: LangSmith, Arize, W&B
│
├── 99_archive/
│   ├── completed_deals/
│   │   └── [year]/
│   │       └── [company_name]_closed.md
│   ├── old_playbooks/
│   │   └── [playbook_name]_v1.md
│   └── historical_notes/
│       └── [topic]_archived.md
│
└── WORKSPACE_MAP.md (this file)
```

## Folder Descriptions (Detailed)

### `00_inbox` — Triage Zone
**What goes here:** Quick captures, raw notes, ideas, daily observations, things you're not sure where to file yet.

**Frequency:** Daily. Triage weekly into proper folders.

**Examples:**
- A prospect you just met at a conference
- An interesting article you want to remember
- A cold email idea you want to refine
- Questions for your manager
- A customer problem you heard about

**How to use:** Dump everything here first. Every Friday, move triaged items to their permanent homes (customer intel goes to `02_customers/`, templates go to `08_templates/`, etc.). The `to_file.md` file tracks what's waiting to be sorted.

---

### `01_core_context` — Your North Star
**What goes here:** Everything about your role, mandate, goals, principles, and how you operate.

**Frequency:** Updated quarterly (goals) and as your principles evolve. Reference weekly.

**Key files:**
- `your_role.md` — What you're hired to do, success metrics, quota, team structure
- `operating_principles.md` — How you make decisions, what you value, how you treat people
- `goals_okrs.md` — Current objectives, key results, personal development targets
- `braintrust_overview.md` — What the company does, market position, product strategy

**How to use:** This is your "why." Reference it when prioritizing, deciding what to say yes/no to, and when you're stuck. Claude uses this to understand what matters to you.

---

### `02_customers` — Customer Intelligence
**What goes here:** Everything about customers and prospects — account profiles, decision makers, pain points, deal history, wins/losses.

**Structure:**
- `key_accounts.md` — Your top 10-20 targets, ownership, last touch date
- `customer_intel/[company_name].md` — Deep profile per company (org chart, budget, pain points, competitors they use)
- `closed_deals.md` — Won deals, customer stories, ROI outcomes, references
- `lost_deals.md` — Why deals didn't close, objections, competitor displacement

**How to use:** Before any outreach or call, read the relevant company file. After every call, update the file with new intel. Claude uses this to research and remind you of context.

---

### `03_outbound` — Prospecting & Sequences
**What goes here:** Your target list, research, cold email sequences, messaging frameworks, objection handling.

**Structure:**
- `prospect_list.md` — Current targets (name, title, company, scoring, last touch, next action)
- `research_templates/` — Standard formats for quickly capturing company/persona research
- `messaging_frameworks/` — How you talk about Braintrust (value props, pain points, ROI)
- `cold_sequences/` — Multi-touch email campaigns you can deploy

**How to use:** Start with `prospect_list.md` to know who to target. Research using templates. Deploy sequences from `cold_sequences/`. Update the prospect list after every touch.

---

### `04_sales_process` — Sales Methodology
**What goes here:** Your playbooks, sales stages, qualification criteria, how to run discovery/demo/close conversations.

**Structure:**
- `qualification_criteria.md` — BANT/MEDDIC, what makes a prospect qualified, when to disqualify
- `deal_stages.md` — Your stages (outreach, qualified, demo, negotiation, closed, etc.)
- `discovery_playbook.md` — How to run a discovery call, key questions
- `demo_playbook.md` — How to demo Braintrust effectively
- `closing_playbook.md` — How to close, negotiate, handle objections
- `contract_handling.md` — Contract process, who to involve

**How to use:** Before each call, read the relevant playbook. This is your "how we do things" bible. Claude uses this to suggest questions, structure calls, or identify deal patterns.

---

### `05_tools_systems` — Operational Toolkit
**What goes here:** How-to guides for Apollo, Slack, Gmail, Notion, Granola, LinkedIn — your operational tools.

**Structure:**
- `apollo_guide.md` — Prospecting filters, outreach best practices, rate limits
- `slack_guide.md` — Channels you monitor, how to reach key people, norms
- `gmail_guide.md` — Email management, templates, signature, filters
- `notion_guide.md` — Your CRM structure, how to log deals, reports you review
- `granola_guide.md` — Call recording, note-taking, integration with Slack/email
- `linkedin_guide.md` — Profile optimization, messaging strategy, research
- `integrations.md` — How all tools sync (e.g., Apollo → Slack, Granola → Notion)

**How to use:** Reference when you're stuck with a tool. Claude uses this to understand your tech stack and give tool-specific advice.

---

### `06_meetings_calls` — Call & Meeting Records
**What goes here:** Call prep templates, post-call summaries, meeting notes, Granola recordings index.

**Structure:**
- `call_prep_templates/` — Reusable prep formats (discovery, demo, closing)
- `call_summaries/` — Post-call notes, action items, next steps (organized by date & name)
- `meeting_notes/` — Team standups, 1:1s with your manager
- `recordings_log.md` — Index of Granola recordings with dates, participants, outcomes

**How to use:** Fill out call prep before important calls. Take notes during the call. Update summary after. Claude uses these to review patterns, suggest follow-ups, or prep you for the next conversation.

---

### `07_learning` — Knowledge Development
**What goes here:** Articles you're reading, frameworks you're studying, product knowledge, competitive landscape, skill development.

**Structure:**
- `articles_reads/` — Summaries of articles with your takeaways
- `sales_frameworks/` — MEDDIC, Sandler, other methodologies you're learning
- `product_knowledge/` — Braintrust features, roadmap, limits vs competitors
- `skill_development.md` — What you're working on (public speaking, negotiation, etc.)

**How to use:** Read articles, capture summaries with key insights. Study frameworks and test them on calls. Update product knowledge as you learn. Claude uses this to understand your development goals and suggest relevant learning.

---

### `08_templates` — Reusable IP
**What goes here:** Email sequences, call scripts, messaging templates, document templates — anything you use repeatedly.

**Structure:**
- `email_templates/` — Cold intro, demo request, objection handling, close emails
- `call_scripts/` — Discovery script, demo script, closing script
- `messaging_templates/` — LinkedIn messages, Slack outreach, multi-touch campaigns
- `document_templates/` — SOW, onboarding checklists, etc.

**How to use:** Before sending an email or making a call, check if you have a template. Customize it for the person. After a successful email or call, add it to templates if it worked well. Claude uses this to draft personalized outreach without starting from scratch.

---

### `09_logs` — Performance & Reflection
**What goes here:** Daily standups, weekly reviews, monthly metrics, OKR tracking, raw activity data.

**Structure:**
- `daily_standup.md` — Each day: 3 wins, 3 priorities, blockers, energy level
- `weekly_review.md` — Friday: what worked, what didn't, lessons, next week's focus
- `monthly_metrics.md` — Pipeline value, conversion rates, activity metrics (calls, emails, meetings)
- `performance_log.md` — Raw data: dates, activities, outcomes (for trend analysis)
- `[year]_q[n]_okrs.md` — Quarterly goal tracking and status

**How to use:** Daily standup takes 5 min. Weekly review takes 15 min. Monthly metrics help you spot patterns. Claude uses these to celebrate wins, identify blockers, and suggest course corrections.

---

### `99_archive` — Historical Records
**What goes here:** Closed deals, old playbooks, historical notes you might reference but don't actively maintain.

**Structure:**
- `completed_deals/[year]/[company].md` — Closed won deals, outcomes, lessons
- `old_playbooks/` — Playbooks that are no longer active but might have useful patterns
- `historical_notes/` — Old research, superseded information

**How to use:** Move things here when they're no longer active but you want to keep them. This keeps your active workspace clean while preserving memory.

---

## How to Navigate

**Looking for something?**
- Customer info → `02_customers/`
- Cold email ideas → `03_outbound/email_templates/`
- How to run a demo → `04_sales_process/demo_playbook.md`
- How to use Apollo → `05_tools_systems/apollo_guide.md`
- Your goals → `01_core_context/goals_okrs.md`
- Recent activity → `09_logs/`

**Organized by:**
- **Semantics (what):** Numbered folders 00-99 group by function (core, customers, process, tools, etc.)
- **Chronology (when):** Logs folder has date-organized files for temporal lookups
- **Permanence:** Active files stay in their numbered homes; archived items go to `99_archive/`

## Maintaining This Map

This map should be updated when:
- You create new subfolders (add them here)
- You rename folders or files (update descriptions)
- You discover a better organization (refactor and document)
- You add new domains (e.g., a `11_partnerships/` folder)

Quarterly, review this map with Claude to ensure it still matches your actual structure.
