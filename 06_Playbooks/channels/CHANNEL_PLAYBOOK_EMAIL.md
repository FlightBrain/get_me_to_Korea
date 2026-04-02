# CHANNEL_PLAYBOOK_EMAIL.md

**Purpose:** Complete guide to email as outreach channel. When to use, structure, cadence, A/B testing, what good looks like.

**When to Use:** Default first channel for cold outreach. Email is lowest friction, highest response archive.

---

## When Email Is Best

- **Cold outreach** (no prior contact, no warm intro)
- **Founder/executive level** (easier to find email than LinkedIn connection)
- **Decision-maker research phase** (educating before conversation)
- **Multiple recipients** (send to multiple contacts at company, hard on LinkedIn)
- **Complex value prop** (more space than LinkedIn DM)
- **Follow-up** (easiest to batch, track, remind)

When NOT to use email alone:
- Extremely warm intro (use LinkedIn DM first, faster)
- Real-time engagement (X/Twitter replies faster)
- Already engaged (switch to LinkedIn once they respond)

---

## Ideal Email Structure

```
SUBJECT: [Research-backed opener, not generic]
        (Formula: "Quick idea: [specific insight]" or "Re: [recent thing they did]")

BODY:
[1] Opener - prove research (2-3 sentences, reference post/hiring/company signal)
[2] Insight - state their specific problem (1-2 sentences, use their pain language)
[3] Bridge - why it matters (1 sentence, light urgency)
[4] Value - what we do (1 sentence, outcome-focused)
[5] CTA - ask for 15 min (1 sentence, specific)

SIGNATURE:
Kensington
[Title/affiliation, optional]
[Phone, optional]
```

**Total length:** 70-100 words, 5-8 sentences.

---

## Subject Line Rules

**What works:**
- "Quick idea: [specific insight you researched]" — Shows you thought about them
- "Re: [recent post/job they mentioned]" — Proves you follow them
- "Thought of you: [specific reason]" — Personal, backed by research

**What doesn't work:**
- "Check out Braintrust" — Generic, spammy
- "Quick question" — No specificity
- "AI Solution" — No personalization
- Typos, weird capitalization — Looks careless
- >60 characters — Email truncates

**Testing:** Try 2-3 subject lines. Track which gets best open rate. Use winner pattern next week.

---

## Follow-Up Cadence

**Email 1: Initial outreach**
- Wait 5 days for response

**Email 2: If no response (day 5-6)**
- Reference email 1: "Following up on my note last week..."
- New angle: different pain hook, or new relevant signal (if they posted something new)
- Tone: helpful, not pushy
- If no response, next cadence

**Email 3: If no response (day 10-12)**
- Reference emails 1 + 2: "Last attempt here..."
- Signal: something changed (company news, new job posting, they got funding)
- Tone: respectful of time, genuine insight, clear this is last touch
- If no response, archive and revisit in 3 months

**Email 4+: Only with new major signal**
- Major signal: they raised funding, got acquired, changed jobs, posted about pain
- Subject line: "[New signal], then re-reaching out"
- Reset: treat as new outreach

**Rule:** Don't follow up more than 3x per contact without new signal. Looks desperate.

---

## Example Follow-Up Sequence

**Email 1 (Day 1): Initial**
```
Subject: Quick idea—evaluating reliability at scale

Hi Sarah,

I saw your post on scaling eval infrastructure for production models.

Most teams deploying LLMs face the same problem: no way to automatically catch reliability issues before shipping.

Braintrust automates eval pipelines so you can ship confidently.

Curious if you'd be open to a quick 15-min chat about your approach?

Kensington
```

**Email 2 (Day 5): Follow-up, new angle**
```
Subject: Re: Quick idea—evaluating reliability at scale

Hi Sarah,

Following up on my note last week.

Was reading about [Company]'s Series B, and realized the scaling challenge gets even harder with growth—eval coverage becomes critical but manual testing doesn't scale.

I think a 15-min call could be valuable.

Kensington
```

**Email 3 (Day 10): Final touch, signal-based**
```
Subject: Last attempt—and I see you're hiring for ML Ops

Hi Sarah,

Last attempt here. Saw you posted that ML Ops role—signals you're building out your reliability infrastructure.

If timing's not right now, might be worth a conversation when you're ramping that team.

Kensington
```

---

## A/B Testing Framework

Pick ONE variable to test at a time. Test 10 emails of each variant.

**Variable 1: Opener type**
- Variant A: "Saw your post..." (post-based opener)
- Variant B: "Noticed you're hiring..." (hiring-based opener)
- Track: open rate, reply rate
- Winner: use for next 20 emails

**Variable 2: Subject line style**
- Variant A: "Quick idea: [specific insight]"
- Variant B: "Re: [thing they mentioned]"
- Track: open rate
- Winner: use as primary subject line template

**Variable 3: CTA type**
- Variant A: "Worth a 15-min call?"
- Variant B: "Free to chat brief about your approach?"
- Track: reply rate, "yes" rate
- Winner: use as primary CTA

**Tracking:** Log in DONE_LOG.md or spreadsheet. Update EMAIL_WRITING.md with winners.

---

## What Good Looks Like

**Good email metrics:**
- Open rate: 25%+ (if personalized)
- Reply rate: 8-12% (cold email baseline is 2-4%)
- Positive reply rate: 60%+ (of replies, majority are interested, not "unsubscribe")
- Meeting book rate: 10-15% (of positive replies)

**Good email characteristics:**
- Specific to their company (e.g., "Braintrust helps teams like [Company] automate evals")
- Uses their pain language (e.g., "hallucination testing" not "model validation")
- Short (under 100 words)
- One clear CTA (not "call/email/visit site")
- Specific dates in CTA (e.g., "Tue or Wed?" not "let me know")

**Examples that convert:**
```
Subject: Scaling eval at [Company]

Hi Marcus,

Saw your hiring post for ML Ops engineer—signals you're building out reliability infrastructure.

That role gets harder when you're shipping to 100k users without automated testing. Most teams feel this pain.

We help teams scale their eval infrastructure. Worth a quick chat?

Kensington
```

---

## Common Mistakes

- **Email is too long** — >100 words = not fully read. Clip ruthlessly.
- **Subject line is generic** — "Interesting opportunity" works for 50 companies. Not enough.
- **No research shown** — Email feels like form letter. Personalize or it dies.
- **CTA is vague** — "Let me know" is weak. "Free Tue or Wed 2-3 PM?" is strong (specific).
- **Following up without new signal** — 4th follow-up on same angle feels desperate. Only re-engage with new signal.
- **Asking for demo in first email** — Too much friction. Ask for 15 min first.
- **Sending same email to 50 people** — Personalization is key. Small tweaks (company name, specific pain) matter.

---

## Output Format

After sending, log in ACTIVE_CONTEXT.md:

```
EMAIL OUTREACH LOG — [Date]

PROSPECT: [Name, Company, Title]
SUBJECT: [Subject line used]
ANGLE: [Pain hook used]
CHANNEL: Email
SENT: [Date]
FOLLOW-UP: [Date of follow-up 1]
STATUS: [Sent/No response/Interested/Booked]

METRICS THIS WEEK:
- Emails sent: [X]
- Open rate: [Y%]
- Reply rate: [Z%]
- Meetings booked: [N]
```

---

## Maintenance Notes

- **Weekly cadence:** Send 10-15 cold emails every week. Batch sends on Mon/Wed mornings (opens highest).
- **Follow-up automation:** Use email tool (Gmail, Salesforce, etc.) to set reminders for follow-ups.
- **A/B test quarterly:** After 4 weeks, analyze what's working. Update EMAIL_WRITING.md playbook.
- **Seasonal:** Q2/Q3 = heavy cold outreach. Q4 = more follow-up of warm conversations.
- **Pain language updates:** If CUSTOMER_LANGUAGE.md changes, update 3 go-forward email templates.
- **Archive low-response accounts:** If 2 cold emails + 1 follow-up = no response, archive for 3 months.
