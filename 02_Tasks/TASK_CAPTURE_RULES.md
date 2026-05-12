# Task Capture Rules

**Owner:** All agents (nightly auto-ingest, daily recap, sweep, /todo skill)
**Enforced by:** Every automated task creation flow. Read this before creating any task.

---

## PART 1: WHEN TO CAPTURE A TASK

Capture a task when ANY of the following happen:

**Someone asks Kensington to do something:**
- Direct requests: "Can you...", "Could you...", "Please...", "Would you mind..."
- Assignments: "Kensington, handle...", "@kensington take care of..."
- Questions requiring action: "Can you check...", "What's the status of...?"
- Manager directives: "Make sure you...", "Don't forget to...", "Follow up on..."
- AE handoffs: "Can you reach out to...", "Add them to a sequence", "Send them the deck"

**Kensington makes a commitment:**
- "I'll [do something]", "I will [do something]", "Let me [do something]"
- "Sure", "On it", "Will do", "Sounds good", "Got it", "Bet", "Copy that"
- "I'll loop back", "Let me circle back", "I'll follow up"

**SDR-specific triggers:**
- "Prospect [company]", "Add [company] to the list"
- "Build a sequence for...", "Create a list for..."
- "Book a meeting with...", "Set up a call with..."
- "Send [person] the case study / deck / one-pager"
- "Research [company]", "Look into [company]"
- "Rebook [meeting]", "Reschedule [call]"

---

## PART 2: HARD EXCLUSIONS - DO NOT CAPTURE

**LinkedIn notifications (skip all of these, no exceptions):**
- "accepted your connection request"
- "sent you a message on LinkedIn"
- "viewed your profile"
- "You have a new message on LinkedIn"
- "new connection on LinkedIn"
- "LinkedIn Notifications"
- Any message with subject line starting with "LinkedIn:" or from "LinkedIn"
- Any message containing "linkedin.com/in/" with no other action request

**System/automated notifications (skip all):**
- Salesforce/CRM alerts, workflow notifications
- Calendar invite confirmations, meeting reminders
- Automated email sequences ("You've been added to...")
- Outreach.io/Apollo sequence notifications
- App permission requests, invoice emails
- Slack bot messages, automated digests
- GitHub notifications, CI/CD alerts

**Already-completed in same thread (skip):**
- If Kensington replied "Done", "Sent", "Handled", "Sent it", "Did it", "All set", "Taken care of" in the SAME Slack thread, the task is done. Do not create.

**Directed at a different AE (HARD SKIP, no exceptions):**
KB has 3 AE partners: Jay Vermont, Walton Stephens, Dave Smith. Many Slack/email messages in territory channels are addressed at the AE, not at KB. If a message is directed at an AE other than KB, do NOT create a task for KB. Specifically:
- Message starts with "@walton", "@jay", "@dave", "@nathan", "Walton,", "Jay,", "Dave,", "Nathan," and the action verb is about THEM doing it. Skip.
- Message asks the AE to do something (e.g. "Jay, can you check in with Vik?", "Walton, can you cover the OOO doc?", "Dave, follow up on this"). Skip even if KB is in the channel.
- Posts in #jay-vermont-territory, #walton-stephens-territory, #dave-smith-territory that name the channel-owning AE in the ask. Default to AE owns it unless KB is explicitly the assignee.
- KB ownership ONLY when: message says "@kensington", "@kb", "Kensington,", "KB,", or KB volunteers ("I'll handle it", "On it", "Got it") in the thread.

**Post-meeting follow-ups (HARD SKIP, AE owns these):**
- KB does NOT own post-call follow-up emails when an AE was on the meeting. AE owns the follow-up.
- If a Granola transcript / Gong recording / Google Calendar event has KB + an AE as attendees, the follow-up task belongs to the AE, not KB.
- KB's role on these meetings: warm intro, get them in the room, briefing notes. Not the follow-up email.
- The only post-meeting tasks KB owns: KB-only prospect meetings (no AE on the invite), AE-requested deliverable that KB explicitly took ("KB will send the case study link", "KB will book the dinner").

**Blocked companies (NEVER source ANY task type, not just outreach):**
The blocked list in CLAUDE.md applies to ALL task creation, not just outreach. Includes subsidiaries. If a task title or description contains a blocked company (Commure, Microsoft, Adobe, Cisco, Databricks, NVIDIA, etc. plus their subsidiaries), SKIP entirely. Do not "soft-skip" with a flag. Do not create the task at all.

**Generic research / data-completion items (skip, route to a tool not a task):**
Tasks like "Identify [Person]'s full name and title", "Find LinkedIn URL for X", "Confirm title of Y", "Enrich Z's record" are NOT to-dos. They are Apollo / LinkedIn lookups KB does inline when he needs to. Do not create them.

**Out-of-domain alerts / non-KB-relevant pings (skip):**
- Security alerts from CEOs of other tools KB doesn't own (e.g. "Rotate AI provider keys from Ankur") are not KB tasks unless KB is the security owner.
- DevOps / infra / engineering alerts unrelated to KB's SDR role.
- IT or HR pings unless explicitly assigned to KB.

**Already-confirmed-in-thread (READ THE EMAIL CHAIN FIRST, skip):**
- Before creating any "Confirm with [contact]", "Follow up to confirm", "Check if [contact] still on for X" task: read the latest message in the Gmail thread.
- If the contact thanked KB, said "see you then", "confirmed", "looking forward", or any acceptance language in the most recent message: the meeting/action is confirmed. Skip the task.
- If KB or the contact already exchanged confirmation in the thread, do not surface a "still need to confirm" task. Read past the subject line.
- Example pattern (KB hit this 2026-05-12): Kieun Lee thanked KB for confirming the demo. A task to "confirm with Kieun Lee" should never have been created.

**Warm Leads DB (do NOT create tasks from it, desynced 2026-05-12):**
The Warm Leads Notion DB (`collection://73dbb977-0916-4d73-ad5a-b309ff8b39de`) is no longer a task source. Do not pull from it. Do not create "TO BOOK" tasks from it. KB will manually create tasks via /todo when he wants to act on a warm lead. This applies to cadence-sync, sweep, day-planner, and any other agent.

**Blocked companies (skip outreach tasks entirely):**
Cisco, Meta, HSBC, Slack, Dropbox, Splunk, Tableau, Instagram, Carta, Databricks, Informatica, Venmo, Facebook, Intel, LiveRamp, Mercado Libre, Visa, NEC X, NEC Corporation, Audible, NVIDIA, Tao Digital Solutions, Microsoft, Stripe, ZoomInfo, Dialpad, Rivian, Activision, Adobe, Commure, Pigment, Salesforce, Cloudflare, LinkedIn, Netflix, Supabase, Replit, McAfee, Mercor, Asana, Bill.com, Flapping Airplanes, AppsFlyer, Robinhood, SoFi, PayPal, Redfin, GitHub, DBT Labs, InvestCloud

**General banter with no action item (skip):**
- Reactions, emojis, acknowledgments with no follow-on ask
- Small talk, water cooler chat, non-work questions
- Messages assigned to OTHER people, not Kensington

---

## PART 3: DEDUP - CHECK BEFORE CREATING

**Step 1: Check open tasks first.**
Before creating any task, query the Task Tracker for Status != Done. Look for tasks containing the same person name AND company name. If a match exists: SKIP. Do not create a duplicate.

**Step 2: Check Done tasks (14-day lookback).**
This is the most important check. Query for Status = Done. Look for tasks with the same person + company combination. If KB marked this done in the last 14 days: SKIP unless:
- The new request is clearly a different action (e.g., old task was "email John at Acme," new task is "book a meeting with John at Acme")
- The new request comes from a different thread/date, explicitly re-assigning the task

**Step 3: Gmail check for outreach tasks.**
For any outreach task ("Email [person] at [company]", "Call [person] at [company]"), search Gmail for the contact name. If KB sent an email to this person within the last 7 days: add a note to the task body "(check: email sent recently)" rather than creating blindly. Do not skip the task, but flag it.

**How to detect "same person + company":**
Extract the pattern: "Person Name at Company Name" from the task title. Lowercase both and compare. Example: "Follow up with John Smith at Acme Corp" and "Email John Smith at Acme" both match on "john smith" + "acme."

---

## PART 4: TASK FORMAT

Create tasks with these fields:

**Task name:** Action verb first. Include person and company. Under 80 characters.
Format: "Phone: John Smith at Acme" or "Email: Sarah Lee at Datadog about eval results"

**Status:** Always "Not started" when creating. Exception: Kensington explicitly delegates to Claude → set "Claude".

**Due date:**
- Explicit date mentioned: use it (convert to ISO-8601 YYYY-MM-DD)
- "Today"/"EOD"/"ASAP": today's date
- "This week": Friday of current week
- No date mentioned: tomorrow
- Always convert relative dates to absolute dates

**Source:** Slack / Email / Meeting / Manual

**Requested By:** Full name of requester. If self-assigned: "Self"

**Channel checkboxes:**
- Phone: "call", "phone", "dial", "voicemail", "vm"
- Email: "email", "send", "reply", "drip"
- LinkedIn: "LinkedIn", "DM", "connect", "InMail", "ghost note"

---

## PART 5: MARKING TASKS DONE

Watch for completion signals in Slack:
- "Done", "Sent", "Sent it", "Did it", "Handled", "Taken care of", "All set"
- "Yep, did that already", "Already sent", "Just sent"

When detected in the context of a specific task: find the matching task in Notion, set Status to "Done". Do NOT delete. Do NOT create a new task.

---

## PART 6: PRIORITY RE-EVALUATION

When processing messages, check if existing open tasks need urgency bumps (adjust Due date earlier):
- Someone follows up asking "did you do X yet?" or "any update on X?" = move due date to today
- Manager asks about a specific open task = move due date to today
- Deadline passed and task still open = move due date to today (creates Overdue urgency automatically)

---

## PART 7: WHEN TO ASK BEFORE CREATING

If the request is ambiguous (unclear what exactly needs to be done, unclear who the contact is, or unclear if it's already been handled), post a question to #kensington-belza BEFORE creating the task. Do not create vague tasks.

Examples of "ask first" scenarios:
- "Can you handle the Acme thing?" with no prior context about what "the Acme thing" is
- An AE message that could mean multiple different actions
- A request for a company that might be blocked (verify first)
- When Gmail shows recent activity with the same contact (ask if the task is still needed)
