# Follow-Up Sequences

## Purpose
Define timing and messaging for multi-touch outreach. Different sequences for different channels and prospect heat levels. Use these as templates—always personalize the actual content.

## How to Use
Select the sequence that matches your channel and prospect stage. Adjust timing based on response (if they reply, shift to conversation; if silence, follow the cadence). Log all sends in the tracking sheet.

---

## Cold Email Sequence (5-Touch, 2+ Weeks)

### **Touch 1 (Day 0): The Hook**
*Goal: Open, intrigue, get response*

**Structure:**
- Subject line with curiosity or specificity (not "Hi [Name]!")
- One signal or insight (prove you've researched)
- One clear CTA (not "let me know")
- 60–80 words total

**Tone:** Helpful, not needy.

**Example subject lines:**
- "[Company] + Claude = eval nightmare?"
- "Question about your agent testing workflow"
- "Saw you hired for AI eng—one quick question"

**Example body:**
```
Saw you shipped the v0.2 agent update last month. Multi-model routing makes evals tricky—suddenly you need to test whether Claude or GPT does the right thing in each case.

Quick question: how are you currently testing agent behavior across model changes? Most teams tell us they're doing it manually or in production.

---

Kensington
SDR, Braintrust
```

---

### **Touch 2 (Day 5): Angle Shift**
*Goal: New angle, new signal (they didn't respond to first one)*

**Structure:**
- New subject line (don't say "following up")
- Different signal or pain point angle
- Different CTA (if Touch 1 was "quick question," this might be "one resource")
- Keep it short

**Example:**
```
Subject: One thing that usually trips up [Company] at your stage

Most teams building agents spend weeks on evals after launch. [Competitor] fixed this by building a test harness before shipping—instead of after.

Worth a quick look? (2-min read)

---
Kensington
```

---

### **Touch 3 (Day 12): Social Proof or Case Study**
*Goal: Authority + relevance*

**Structure:**
- Subject: "How [similar company] does this" or "Check this out"
- Specific example or metric (don't be vague)
- One-liner on relevance
- Link to case study or one-pager

**Example:**
```
Subject: How teams shipping AI products test reliability

Found this approach useful—thought of your team when I saw the new feature launch.

[Link to one-pager on Braintrust case study]

Let me know if relevant to what you're building.

---
Kensington
```

---

### **Touch 4 (Day 19): Permission-Based Positioning**
*Goal: Low-pressure re-engagement*

**Structure:**
- Subject: "One question" or genuine curiosity
- Acknowledge they haven't responded (no guilt, just honesty)
- Ask a smaller ask (research question, not demo request)
- Offer value (insight, resource)

**Example:**
```
Subject: One thing I'm curious about

No pressure if this didn't land, but I'm genuinely curious: as you iterate on the agent, are you optimizing for speed of feedback or comprehensiveness of test coverage? Most teams struggle with both.

Would actually help us get smarter about what matters.

---
Kensington
```

---

### **Touch 5 (Day 26): Last Thoughtful Attempt**
*Goal: Reposition as evergreen resource, not transactional ask*

**Structure:**
- Subject: "One last thing" or value-only pitch
- No CTA asking for meeting (shift to "here's a resource")
- Genuine offer of help (content, connection, etc.)
- Clear: "I'll stop emailing after this"

**Example:**
```
Subject: Thought of you when I saw this

This thread on r/MachineLearning about eval scaling at production inference hit on something most teams get wrong. Figured you'd find it useful.

Happy to connect with others building similar approaches if that's helpful. Otherwise, no more cold emails!

[Link to resource]

---
Kensington
```

**After Touch 5:** Move to nurture list. Re-engage in 30–60 days with high-value content (not pitching).

---

## LinkedIn Sequence (4-Touch, 2+ Weeks)

### **Touch 1 (Day 0): Connection Request**
*Goal: Get connection accepted, show you've researched*

**Message in request (optional but recommended):**
- Reason for connection (specific signal)
- One compliment or relevant observation
- Nothing asking for anything

**Example:**
```
Hi [Name],

Noticed your talk at [Conference] on shipping agentic systems—specifically the part about measurement. Thought we'd have interesting discussions about eval infrastructure.

Worth connecting?
```

---

### **Touch 2 (Day 4): Engagement, Not Pitch**
*Goal: Get in their feed without being salesy*

**Strategy:**
- Find a recent post they've made or liked
- Comment with genuine insight (not just "great post!")
- Add context that shows you understand their problem
- No CTA, no Braintrust mention

**Example (on their post about agent deployment):**
```
One thing I noticed: most teams optimize for deployment speed but don't have the measurement layer to know if the agent got better after each iteration. Curious if you're running into that tension?
```

---

### **Touch 3 (Day 10): DM with Value**
*Goal: Warm DM with specific insight*

**Structure:**
- Reference something recent they did (post, article, etc.)
- Offer one insight or resource (not asking for meeting)
- One small CTA (read this, thoughts on this, etc.)

**Example:**
```
Saw your article on orchestrating multi-model agents. One thing that usually trips up teams at your stage: testing whether the orchestration layer is actually choosing the right model. Most teams don't have a systematic way to measure that.

Built a quick framework for this—worth a look? [link]
```

---

### **Touch 4 (Day 18): Re-engagement Opportunity**
*Goal: Last touch before moving to nurture*

**Strategy:**
- If they've engaged with your comments: deeper conversation
- If silence: shift to asking a research question (not selling)
- Offer knowledge, not ask for meeting

**Example:**
```
Been thinking about your agent scaling challenges. Know of any teams doing this well? Trying to understand how best teams approach measurement at scale.
```

---

## Re-engagement Sequence (3-Touch, 2+ Weeks)

*Use for prospects who went cold, or 30–60 days after your last touch on someone who didn't convert.*

### **Touch 1 (Day 0): Genuine Check-In**
*Goal: Restart with no guilt, new signal*

**Structure:**
- Acknowledge time has passed (not apologizing, just honest)
- Share new signal (they did something new)
- One specific insight

**Example:**
```
Subject: Saw [Company] launched [new AI feature]

Wanted to re-ping now that you're shipping the agent orchestration layer. The measurement question gets way more urgent at this stage—went from "how do I make this work" to "how do I know this is better."

Relevant?
```

---

### **Touch 2 (Day 8): New Angle**
*Goal: Different pain point, different frame*

**Structure:**
- Different angle than your original outreach
- Specific to new developments they've made
- Reframe Braintrust value around their evolution

**Example:**
```
Subject: Multi-model agents make evals hard

Now that you're orchestrating Claude + GPT + local models, test coverage probably went up 5x. The manual eval workflow probably broke.

This is actually where most teams find Braintrust useful.

Thoughts?
```

---

### **Touch 3 (Day 16): Low-Pressure Resource**
*Goal: Last offer of value, no transactional ask*

**Structure:**
- Offer without expectation
- Resource or connection (not demo request)
- Clear: this is last touch for now

**Example:**
```
Subject: Resource that might help (no pitch)

Found this guide on scaling evals for multi-agent systems—reminded me of your team. Thought it'd be useful.

Will stop re-reaching now. If things shift and you want to chat, just let me know.

[Link]
```

---

## Sequence Notes

**Pacing:** Adjust based on response. If they reply to Touch 2, immediately shift to conversation—don't keep blasting the sequence.

**Tone Shift:** Each touch should have slightly different tone:
1. Curiosity/insight
2. Expertise/authority
3. Social proof/peer effect
4. Vulnerability/research question
5. Generosity (resource, not ask)

**Personalization Level:** Touch 1 requires research. Touches 2–5 should reference previous interaction or new signal about them.

**Do Not:**
- Send all 5 emails in two days
- Copy-paste subject lines
- Repeat the same CTA five times
- Make Touch 5 a "last chance" desperation move
- Follow up within 48 hours unless they explicitly asked you to

