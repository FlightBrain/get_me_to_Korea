# Memory System Index

**Purpose:** Master index and navigation guide for Kensington's AI-assisted memory system. Reference this when onboarding new sessions or understanding memory architecture.

**Last Updated:** 2026-04-01
**Owner:** System (Kensington curates)
**How to Use:** Start here. Navigate to relevant layers based on task type. Update this index when adding new files.
**Related Files:** All memory files (see layers below)

---

## Memory System Architecture

This is a 4-layer knowledge base designed for persistence across sessions and tasks.

### 1. STABLE LAYER
Rarely changes. Foundational knowledge about Kensington, communication style, and long-term patterns.

- **USER_PREFERENCES.md** — Communication style, tool preferences, workflow defaults, sales philosophy
- **WRITING_VOICE.md** — Tone guide, vocabulary, anti-patterns, examples of good output
- **GOALS.md** — Long-term targets: quota, skill development, career trajectory, knowledge building
- **DECISION_LOG.md** — Record of important decisions with reasoning and outcomes
- **LESSONS_LEARNED.md** — Rules of thumb, what works, what doesn't, surprises discovered
- **HOOKS_SETUP.md** — Automated guardrails: em-dash guard + drafts-only guard (from Jay's system)
- **feedback_sweep_rules.md** — Sweep skip list (Amazon = Opp, Sutter Health = drip), sent inbox + DM scan rules, AE notes format pointer

### 2. WORKING LAYER
Current context. Lives and dies within a session or work cycle.

- **ACTIVE_CONTEXT.md** — What's live right now: current focus, open loops, pending decisions
- **PROJECTS_INDEX.md** — Active projects with status, next actions, owners
- **CONTACTS_INDEX.md** — Quick-reference contact list with relationship status and last contact dates

### 3. EPISODIC LAYER
Session-level records. Build audit trail and context for future sessions.

- **SESSION_LOG.md** — Dated entries summarizing work done, insights gained, decisions made

### 4. PATTERNS LAYER
Learned behaviors and workflows. Emerges from episodic data and gets abstracted into rules.

- **PATTERNS_INDEX.md** — Messaging patterns, research workflows, anti-patterns that work/don't work

---

## How to Use Each Layer

**When starting a new session:**
1. Read ACTIVE_CONTEXT.md to see what's live
2. Check SESSION_LOG.md for recent history
3. Reference USER_PREFERENCES.md for communication norms

**When making decisions:**
1. Check DECISION_LOG.md for precedent
2. Consult GOALS.md for alignment
3. Reference LESSONS_LEARNED.md for relevant patterns

**When writing output:**
1. Use WRITING_VOICE.md as style guide
2. Check PATTERNS_INDEX.md for tone/messaging patterns
3. Reference USER_PREFERENCES.md for format preferences

**When wrapping up:**
1. Log session in SESSION_LOG.md
2. Update ACTIVE_CONTEXT.md if priorities shift
3. Capture any new patterns in PATTERNS_INDEX.md

---

## File Maintenance

- **Review quarterly:** Check stable files for staleness; refresh GOALS.md with progress
- **Review weekly:** Scan ACTIVE_CONTEXT.md and PROJECTS_INDEX.md for updates
- **Review per session:** Update SESSION_LOG.md at wrap-up
- **On discovery:** Immediately add surprising findings to LESSONS_LEARNED.md

---

## Notes

This system assumes Kensington is building an AI-augmented sales practice at Braintrust. Memory is shared across agents and sessions. Treat all files as source of truth for operational context, not just reference material.

---

## Migration Log

**2026-04-02:** Migrated 11 auto-memory files from `/Users/kensington/.claude/projects/-Users-kensington/memory/` into this system:
- `feedback_warm_intros.md` -> LESSONS_LEARNED.md (Prospect Research section)
- `feedback_email_format.md` -> LESSONS_LEARNED.md (Messaging section) + TONE_GUIDE.md (appended formula)
- `feedback_outreach_rules.md` -> LESSONS_LEARNED.md (Prospecting section, 8 rules)
- `feedback_dm_recaps.md` -> LESSONS_LEARNED.md (Rules of Thumb #9)
- `feedback_email_signature.md` -> USER_PREFERENCES.md (Email Signature section)
- `feedback_excluded_companies.md` -> USER_PREFERENCES.md (IC Exclusion list)
- `reference_kensington_accounts.md` -> USER_PREFERENCES.md (Master Account List section)
- `project_walton_accounts.md` -> Already covered in WALTON_ACCOUNTS_APRIL_BLITZ.md (no merge needed)
- `project_walton_blitz_intel.md` -> Already covered in WALTON_ACCOUNTS_APRIL_BLITZ.md account sections (no merge needed)
- `project_event_calendar.md` -> ACTIVE_CONTEXT.md (Summer 2026 events + event rules added)
- `reference_case_study_matching.md` -> SELF_PROMPT.md Section 4 (added Retool, Navan, Replit entries + industry matching table)
