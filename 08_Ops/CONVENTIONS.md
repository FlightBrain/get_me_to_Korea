# Workspace Conventions

**Purpose:** Unified standards for file organization, naming, formatting, and status tracking. Ensures consistency and makes the workspace navigable for Kensington and any AI assistant.

**How to Use:**
- Review this file when creating new documents or organizing the workspace
- Reference file naming section before creating files
- Use status and priority labels consistently across all files
- Link to relevant sections when onboarding or documenting new processes

---

## File Naming Conventions

**General Rule:** Lowercase with underscores, descriptive, no spaces or special characters.

### By File Type

**Regular documents:** `lowercase_with_underscores.md`
- Example: `competitive_analysis.md`, `outreach_strategy.md`

**Date-stamped files (logs, daily work):** `YYYY-MM-DD_description.md`
- Example: `2026-03-28_session_log.md`, `2026-04-01_weekly_recap.md`

**Company files:** `company_name.md`
- Example: `braintrust.md`, `openai.md`

**Person files:** `firstname_lastname.md`
- Example: `john_smith.md`, `sarah_chen.md`

**Templates:** `TYPE_TEMPLATE.md`
- Example: `COMPANY_TEMPLATE.md`, `OPPORTUNITY_TEMPLATE.md`

**Index files:** `TYPE_INDEX.md`
- Example: `ACCOUNTS_INDEX.md`, `SESSION_INDEX.md`

## Folder Structure & Usage

```
/07_Accounts/
  ACCOUNTS_INDEX.md ...................... Master account list
  /companies/ ............................ One file per company
  /people/ .............................. One file per person
  /opportunities/ ....................... One file per deal

/08_Ops/
  CONVENTIONS.md ......................... This file
  FILE_NAMING_RULES.md
  TAGGING_RULES.md
  MAINTENANCE_CHECKLIST.md
  MEMORY_POLICY.md

/09_Templates/
  SESSION_LOG_TEMPLATE.md
  RESEARCH_NOTE_TEMPLATE.md
  SOP_TEMPLATE.md

/99_Archive/
  ARCHIVE_INDEX.md
  /[YYYY-MM] archived files
```

## Markdown Standards

**Headers:** Use H1 (#) for page titles, H2 (##) for major sections, H3 (###) for subsections. Never skip header levels.

**Purpose + How to Use:** Every file should start with:
```markdown
# File Title
**Purpose:** [Why this file exists]
**How to Use:** [When/how to use it]
```

**Bullets:** Use hyphens (-) for unordered lists, maintain consistent indentation (2 spaces per level).

**Tables:** Use markdown table format. Always include header row with pipes.

**Links:** Link to related files using relative paths: `[text](./path/to/file.md)`

**Code blocks:** Use triple backticks with language identifier where applicable.

**Bold/Emphasis:** Use **bold** for labels/keys, *italic* for emphasis.

## Status Labels

Use these labels to indicate file/item status. Place in header or inline.

- **draft** - In progress, not ready for action
- **active** - Currently in use, being updated
- **stale** - Not touched >30 days, may need review
- **archived** - Moved to archive, historical reference only
- **blocked** - Cannot progress until external action

Example: `**Status:** active | Last Updated: 2026-04-01`

## Priority Labels (for action items, tasks, deals)

- **P0** - Critical, blocks other work, address immediately
- **P1** - High priority, address within 1-2 days
- **P2** - Medium priority, plan for this week
- **P3** - Low priority, backlist, revisit when capacity available

Example: `**Priority:** P1 | Due: 2026-04-05`

## Date Format

Always use ISO 8601 format: **YYYY-MM-DD**

Example: `2026-04-01` not `April 1, 2026` or `04/01/26`

## Last Updated & Ownership

Every working file should include at the bottom:
```
**Last Updated:** 2026-04-01
**Owner:** Kensington
```

---

**Last Updated:** 2026-04-01
**Owner:** Kensington
