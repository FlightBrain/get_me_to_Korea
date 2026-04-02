# Email Index

## Purpose
Centralized log and template library for email outreach. Track all cold outreach, responses, templates, and insights.

## How to Use
Create a new email draft using OUTREACH_DRAFT_TEMPLATE.md. After sending, log it in the Sent tab of this index. Use Templates section as reference for structure and tone. Review Response Rate Trends section monthly to identify what's working.

---

## Filing Structure

All email outreach follows this naming convention:
```
[DATE]_[PROSPECT_NAME/COMPANY]_[TOUCH_NUMBER]_[INTENT]
Example: 2026-04-01_Acme_T1_ColdOpening
```

**Tabs to maintain:**

### **Drafts** (In Progress)
| Date Created | Prospect | Company | Touch | Subject Line | Status | CTA | Owner |
|---|---|---|---|---|---|---|---|
| 2026-04-01 | [Name] | [Company] | 1 | [Subject] | Draft/Ready | [CTA] | Kensington |

### **Sent** (Completed)
| Date Sent | Prospect | Company | Touch | Subject Line | Response? | Response Date | Next Touch | Follow-up Scheduled |
|---|---|---|---|---|---|---|---|---|
| 2026-04-02 | [Name] | [Company] | 1 | [Subject] | ✓/✗ | [Date if yes] | T2 Date | [Date] |

### **Templates** (Reusable structures)
See section below.

### **Response Rate Trends** (Metrics)
Track weekly response rates by:
- Touch number (T1 should be ~15–25%, T5 should be ~5–8%)
- By industry
- By company size
- By signal type (hiring, funding, product launch)
- By CTA type (question vs. ask)

---

## Email Templates (Reusable Structures)

### **Cold Opening Template (Touch 1)**
```
Subject: [Curiosity + Specificity, not "Hi [Name]"]

[Signal: 1 sentence, specific to them]

[Insight: 1–2 sentences, show you understand their situation]

[CTA: Specific question or ask]

---
Kensington
SDR, Braintrust
```

**Example:**
```
Subject: Question about your agent testing workflow

Saw you shipped the v0.3 Claude integration for your workflow engine. Multi-model routing makes evals tricky—suddenly you need to test whether Claude or GPT does the right thing in each case.

Quick question: how are you currently testing agent behavior across model changes?

---
Kensington
SDR, Braintrust
```

---

### **Insight Shift Template (Touch 2)**
```
Subject: [Different angle or pain point, not "following up"]

[New Signal OR New Angle on original signal]

[Why this matters for them]

[Low-ask CTA]

---
Kensington
```

**Example:**
```
Subject: One thing that usually trips up teams at your stage

Most teams building multi-agent systems spend weeks testing agent interactions after launch. [Similar company] fixed this by building a test harness *before* shipping instead of after.

Worth a quick look?

---
Kensington
```

---

### **Social Proof Template (Touch 3)**
```
Subject: How [similar company] solved this

Found this useful—thought of your team when I saw [their recent news].

[Link to resource: case study, one-pager, or framework]

Let me know if relevant.

---
Kensington
```

---

### **Permission-Based Template (Touch 4)**
```
Subject: One question I'm actually curious about

No pressure if this didn't land, but I'm genuinely curious: [real research question about their situation].

Would actually help us get smarter about what matters.

---
Kensington
```

---

### **Value-Only Template (Touch 5)**
```
Subject: One last thing (and then I'll stop)

[High-value resource, no CTA asking for meeting]

Happy to [offer: connect, discuss, share more] if useful. Otherwise, no more cold emails!

---
Kensington
```

---

## Personalization Checklist (Before Sending)

- [ ] Subject line is specific (not "Hi [Name]" or generic topic)
- [ ] First sentence references a specific signal (company news, person detail, etc.)
- [ ] Email is under 100 words
- [ ] CTA is specific (not "let me know" or "interested?")
- [ ] Tone matches their communication style
- [ ] No corporate jargon or AI hype language
- [ ] If it's a follow-up, I reference their non-response directly (no guilt, just honesty)
- [ ] Signature is simple (name, title, company)

---

## Response Handling Rules

**Response received:**
1. Log response immediately (include response text)
2. Note if they answered your CTA or asked a different question
3. Reply within 4 hours if possible, 24 hours max
4. Reply should reference their specific response (not canned)
5. Move to conversation track (stop sending the sequence)
6. If they're interested but not ready to talk now: set 30-day nurture check-in

**No response to Touch 5:**
1. Move prospect to nurture list
2. Re-engage in 30–60 days with high-value content (not pitching)
3. Look for new signals (hiring, funding, product launch) to trigger re-outreach

**Soft rejection ("not a priority"):**
1. Don't keep pushing same angle
2. Set 60-day re-engagement check
3. Look for signals that make it a priority (funding, hiring, product launch)

---

## Subject Line Library (Proven Opens)

**Curiosity/Question hooks:**
- "Question about [specific thing they did]"
- "One thing that usually trips up [company stage]"
- "How do you currently [related to their business]?"
- "[Company name] + [technology] = [specific challenge]?"

**Social proof hooks:**
- "How [similar company] solved this"
- "Saw [recent news]—one quick thought"

**Vulnerability/Research hooks:**
- "One thing I'm genuinely curious about"
- "Thought of you when I saw this"

**Red lines (avoid):**
- "Hi [Name]" (generic, low open rate)
- "Quick question" (unclear what it's about)
- "Following up" (boring, signals email 4/5)
- "Check this out" (vague)

---

## Metrics to Track (Monthly Review)

- Total emails sent
- Total responses (by touch number)
- Response rate % (by touch, by industry, by signal type)
- Meetings scheduled from email
- Time-to-response (average days)
- Subject line open rate (if email client supports)
- Most common objections
- Best-performing personalization signals

---

## Do's and Don'ts

**Do:**
- Personalize every email with a specific signal
- Keep emails short (50–100 words)
- Space touches 5–7 days apart
- Reference their non-response honestly in later touches
- Test different subject lines and track what works

**Don't:**
- Send all 5 emails in 2 days
- Copy-paste templates without customization
- Repeat the same CTA five times
- Follow up within 48 hours unless they asked you to
- Use "just checking in" as a subject line
- Mention Braintrust features before they ask about problems

---

## Email Sequence Tracking

Create a simple log:

| Prospect | Company | T1 Date | T1 Response? | T2 Date | T2 Response? | T3 Date | Status |
|---|---|---|---|---|---|---|---|
| [Name] | [Company] | [Date] | ✓/✗ | [Date] | ✓/✗ | [Date] | Active/Closed/Nurture |

Review this weekly. After T5, either move to conversation or nurture list.

