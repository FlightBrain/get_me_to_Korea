# Hooks Setup

**Purpose:** Document the automated guardrail hooks configured for Claude Code in this workspace.
**Last Updated:** 2026-04-03
**Owner:** Kensington

---

## Active Hooks

### 1. Em-Dash Guard
- **Type:** PreToolUse on Edit/Write
- **Script:** `.claude/hooks/emdash_guard.sh`
- **What it does:** Scans any content Claude writes or edits for em dashes (the long dash). If found, blocks the operation and forces Claude to rewrite using commas, periods, or colons.
- **Why:** Immutable rule #1. Em dashes read as AI-generated slop. This enforces it automatically.

### 2. Drafts-Only Guard
- **Type:** PreToolUse on gmail_send_message
- **Script:** `.claude/hooks/drafts_only_guard.sh`
- **What it does:** Blocks Claude from sending emails directly through Gmail. Forces all emails through gmail_create_draft so you can review before sending.
- **Why:** Safety net. No email should go out without review. One bad send can burn a prospect.

## How Hooks Work

1. You ask Claude to do something (write a file, send an email)
2. Before executing, the hook script runs automatically
3. Script checks: does this violate a rule?
4. If yes: blocked, Claude gets told why and must fix it
5. If no: approved, Claude proceeds

Zero effort from you. Runs silently in the background.

## Origin

Adopted from Jay Vermont's AE ops system. Jay uses hooks as automated guardrails in his workflow. These two are the SDR adaptation of his pattern.

## Configuration

- Hook scripts live in: `.claude/hooks/`
- Hook config lives in: `.claude/settings.local.json` (hooks section)
- Notion doc: https://www.notion.so/338f78580289814784a9eb24bfd502d0
