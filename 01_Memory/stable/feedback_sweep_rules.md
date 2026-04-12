---
name: Sweep rules and skip list
description: What to skip, auto-skip, and scan during daily sweep
type: feedback
---

## Permanent skip list (don't surface these in sweep)

- **Amazon** — now an Opp. Opps are on the don't-touch list. Never surface Amazon outreach tasks.
- **Sutter Health** — on a drip campaign. No manual work needed, skip always.
- **Salesforce** — active Opp. Never surface outreach tasks.
- **Opps (any account)** — if an account has an active Opportunity, do not surface outreach tasks for it.

**Why:** Kensington flagged these explicitly. Surfacing them wastes review time.

**How to apply:** Before classifying any sweep item, check if the account is an Opp or on the skip list. If yes, drop it silently.

---

## Sweep enhancements (run every session)

1. **Scan sent inbox** — search Gmail `from:kensington.belza@braintrustdata.com after:[last 48hrs]` to understand what was already sent. Use this to skip items that were already touched.

2. **Scan DMs** — search Slack DMs (`channel_types=im,mpim`) for recent outbound messages from Kensington. Use this to understand what's already in flight (e.g., waiting on Ameya, already DM'd someone).

**Why:** Kensington works fast and often handles things before sweep runs. Without the sent scan, sweep resurfaces already-done work.

---

## AE notes format

Use `docs/agent-prompts/ae-notes.md` for all AE meeting notes. Keep them short. AE reads in 2 minutes.
