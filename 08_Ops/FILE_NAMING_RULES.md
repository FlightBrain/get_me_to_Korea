# File Naming Rules

**Purpose:** Detailed naming conventions for consistency, searchability, and quick navigation across the workspace.

**How to Use:**
- Reference this before creating new files
- Use exact patterns shown in examples
- Validate naming against these rules before committing to a file structure
- Update this file if new file types need naming guidance

---

## General Principles

1. **All lowercase** - Easier to type, consistent with directory standards
2. **Underscores for word separation** - Never use spaces, hyphens in most cases
3. **Descriptive but concise** - File name should indicate content at a glance
4. **No special characters** - Except underscores and hyphens in dates
5. **Avoid generic names** - Not `notes.md`, but `market_analysis_notes.md`

## File Type Patterns

### Regular Documents

**Pattern:** `lowercase_descriptive_name.md`

**Examples:**
- `competitive_analysis.md`
- `outreach_strategy.md`
- `feature_roadmap.md`
- `call_notes_john_smith.md`

### Date-Stamped Files (Logs, Session Work)

**Pattern:** `YYYY-MM-DD_description.md`

**Examples:**
- `2026-04-01_session_log.md`
- `2026-03-28_weekly_recap.md`
- `2026-03-15_customer_research.md`
- `2026-04-01_activity_log.md`

**When to use:** Session logs, daily activity captures, research sessions, call notes with dates, any file tied to specific date.

### Company Files

**Pattern:** `company_name.md` (lowercase version of actual company name)

**Examples:**
- `braintrust.md` (not Braintrust.md or Braintrust Inc.md)
- `openai.md`
- `databricks.md`
- `anthropic.md`

**If company name is multi-word:** `company_name.md` (no articles)
- `stripe_payments.md` (not just "stripe" if you might track multiple entities)
- `hugging_face.md`

### Person Files

**Pattern:** `firstname_lastname.md` (all lowercase)

**Examples:**
- `john_smith.md` (not john_smith_phd.md or john_smith_braintrust.md)
- `sarah_chen.md`
- `mike_johnson.md`

**Nickname convention:** If someone goes by nickname professionally, use that:
- `alex_rivera.md` (not alexandria_rivera.md if they're always Alex)

### Template Files

**Pattern:** `TYPE_TEMPLATE.md` (all caps, TYPE describes what template is for)

**Examples:**
- `COMPANY_TEMPLATE.md`
- `PERSON_TEMPLATE.md`
- `OPPORTUNITY_TEMPLATE.md`
- `SESSION_LOG_TEMPLATE.md`
- `RESEARCH_NOTE_TEMPLATE.md`

### Index Files

**Pattern:** `TYPE_INDEX.md`

**Examples:**
- `ACCOUNTS_INDEX.md`
- `ARCHIVE_INDEX.md`
- `SESSION_INDEX.md`

### SOP & Process Files

**Pattern:** `process_name_sop.md` or just `process_name.md`

**Examples:**
- `weekly_review_sop.md`
- `research_sop.md`
- `email_cadence.md`

### Archived Files

**Pattern:** `99_Archive/[YYYY-MM]/original_filename.md`

**Example:**
```
99_Archive/2026-03/old_prospect_company.md
99_Archive/2026-02/stale_john_smith.md
```

## Multi-Word File Names

**Avoid:** Hyphens for multi-word names in non-date files (hyphens reserved for date separators)
- Wrong: `competitive-analysis.md`
- Right: `competitive_analysis.md`

**Exception:** Date-stamped files use hyphens only for date portion
- Right: `2026-04-01_competitive_analysis.md`

## Naming Anti-Patterns

| Anti-Pattern | Problem | Correct |
|---|---|---|
| `notes.md` | Too generic | `outreach_strategy_notes.md` |
| `TODO.md` | Ambiguous scope | `weekly_actions_p1.md` or folder-specific like `Sales_Pipeline_TODO.md` |
| `John.md` | Incomplete | `john_smith.md` |
| `Braintrust Inc..md` | Capital letters, extra chars | `braintrust.md` |
| `Research_2026_03_28.md` | Date in wrong place | `2026-03-28_research.md` |
| `session log.md` | Spaces, inconsistent | `2026-04-01_session_log.md` |
| `RESEARCH_NOTE.md` | All caps for non-template | `market_research_note.md` |

## Search & Discoverability

Good naming ensures you can find files via search:
- `firstname_lastname.md` makes finding people easy: search "john_smith"
- `company_name.md` makes account research easy: search "braintrust"
- `YYYY-MM-DD_` prefix makes finding recent work easy: search "2026-04-"
- Descriptive middles make related files cluster: `outreach_email_v1.md`, `outreach_email_v2.md`

---

**Last Updated:** 2026-04-01
**Owner:** Kensington
