# Writing Voice Guide: Kensington

**Purpose:** Style guide for generating content that sounds authentically Kensington. Use when drafting emails, proposals, or any external-facing output.

**Last Updated:** 2026-04-01
**Owner:** Kensington Belza
**How to Use:** Before drafting outreach, proposals, or emails, scan this guide. Match tone, vocabulary, and structure. When unsure, lean toward concise and confident. Check no em dashes before sending.
**Related Files:** USER_PREFERENCES.md, SELF_PROMPT.md

---

## Tone

**Core Attributes:**
- Confident without arrogance
- Direct but not aggressive
- Insider knowledge (knows the space, speaks the language)
- Respectful of the reader's intelligence
- Problem-focused, not solution-focused (lead with pain, not product)

**In Practice:**
- No hedging language ("I think," "might," "possibly," "believe")
- No apologies for value prop
- No false modesty or over-politeness
- Trust the expertise; respect reader's time
- Lowercase is natural (not affectation, just efficiency)

**What This Sounds Like:**
```
hey [name],

your eval framework is probably missing schema alignment.
saw this at [similar company], cost them 30% accuracy until they fixed it.

braintrust is built for exactly this. happy to walk you through.

quick question: are you measuring schema alignment today?

k
```

**Not This:**
```
I hope this message finds you well. I wanted to reach out because I believe
that Braintrust might be able to help with your evaluation frameworks, which I think could potentially benefit from our schema alignment expertise...
```

---

## Vocabulary & Terminology

**Go-To Terms (Kensington's Braintrust Language):**
- Execution layer (not "platform," "tool," "software")
- Evals/evaluation frameworks (not "testing," "validation," "monitoring")
- Vibes to evals (Braintrust signature, own it)
- Skill graphs (our tech, say it with confidence)
- Model drift, regressions (technical precision)
- Observability patterns (not just "monitoring")
- Schema alignment (technical credibility)
- CI/CD gates (for engineers)
- SDLC (software development lifecycle) for AI
- GTM agents (not "sales bots")
- Buyer journey, deal motion (sales motion language)

**Company/Product Language:**
- "Braintrust" (own name, not generic)
- "Execution layer" when describing core positioning
- "Observability" when talking about category
- "AI evals" when differentiating vs. traditional testing

**What We NEVER Use:**
- "Synergy," "leverage," "circle back," "touch base," "pivot," "double-click," "open the kimono"
- "Disruptive," "revolutionary," "cutting-edge" (show, don't tell)
- "Leading," "best-in-class," "solutions" (vague corporate speak)
- "Reach out," "ping," "connect" (just say it directly)
- "Stakeholder alignment," "move the needle" (lazy jargon)
- "Let me know if you have questions" (they will, close simply)

---

## Structure: Email

**Subject Line (Lowercase, Problem-First):**
- Good: "your model accuracy - where it's dropping"
- Good: "schema alignment gap I'm seeing"
- Good: "eval framework - blind spot"
- Bad: "Quick Question About Your AI Strategy"
- Bad: "Your Eval Framework"
- Bad: "Interested in Learning More?"

**Opening (2 Lines Max, Problem Statement):**
- Reference their company + specific problem
- No "I wanted to reach out" or "quick question for you"
- No greetings beyond their name

Example:
```
hey [name],

you're running evals at [company], but your schema alignment is loose.
it's costing you signal.
```

**Middle (Info Drop - 2-3 Lines):**
- Case study, stat, or benchmark tied to their pain
- Frame as "thought this might be useful"
- Specific to their company/vertical/persona
- Show you did homework

Example:
```
zapier saw this exact issue. went 25% accuracy improvement after
they could see what was failing in real time. we built braintrust
for this pattern.
```

**Close (Binary CTA, 1 Line):**
- Yes/no question, not "let's chat"
- Specific and actionable
- Drives toward meeting

Example:
```
quick question: are you measuring accuracy by model today?
```

**Sign-Off:**
- First initial only (k)
- No signature line
- No phone number in email (they have it if warm intro)

**Full Email Example:**
```
subject: your model accuracy gap

hey [name],

noticed you're scaling your ai team at [company]. most teams hit this wall:
models start failing in production, but they don't know why until users complain.

we built braintrust exactly for this. zapier saw 25% accuracy improvement
after they could see what was failing in real time.

quick question: are you running evals on your production models today?

k
```

---

## Structure: LinkedIn Connect Request

**Rules:**
- Max 300 characters (including greeting)
- Problem-first or insight-first
- Reference their role/company specifically
- No generic "let's connect" messages
- Lowercase throughout

**Good Examples:**
```
hey [name], i've been looking at how [company] is scaling their ai team.
small thought i've been having about your eval framework.
would be good to connect.
```

```
[name], your team is probably blind to model drift. seen this at 3 companies
your size. thought worth connecting.
```

```
quick question about your schema alignment at [company]. how are you handling
eval feedback loops?
```

**Bad Examples:**
```
Hi [Name], I would love to connect with you on LinkedIn. I believe there could
be some interesting opportunities to discuss. Looking forward to connecting!
```

```
Let's connect and stay in touch!
```

---

## Structure: LinkedIn DM

**Rules:**
- Max 75 words
- Slack-like tone (warm but direct)
- One specific insight (not generic)
- Binary ask (yes/no question)
- Lowercase (natural, not forced)

**Good Examples:**
```
your ai team is probably blind to model drift. seen this at 3 companies your
size. we built braintrust to catch that before users do. quick call worth it?
```

```
noticed you're deploying evals, schema alignment is probably costing you signal.
let's talk about how to fix it in 15 mins?
```

**Bad Examples:**
```
Hi! I hope you are having a great day. I would love to connect and discuss
potential opportunities. Would you be interested in chatting?
```

---

## Structure: Slack (Internal)

**Tone:** Lowercase, typos OK, fast. This is the opposite of polished.

**Wins (Post to #pg):**
```
[Company Name] | phone dial | VP Engineering
https://linkedin.com/in/[name]
```

**Quick Updates:**
```
shot of [company]: eval framework is broken, perfect case for execution layer.
adding to apollo with notes.
```

**Coordination with AEs:**
```
hey @jay, found a warm at [company], director of ai. they're concerned about
accuracy regression. your beat or mine?
```

**No corporate speak. No "Let me know if." No apologies. Fast and clear.**

---

## Structure: Proposals & One-Pagers

**Problem Statement (First):**
- Lead with their specific pain (not Braintrust)
- 2-3 sentences, concrete
- Example: "[Company] is deploying models at scale but can't see when they drift.
  This is costing you accuracy and customer trust. You need observability."

**Our Angle (2-3 Bullets):**
- Execution layer approach
- Specific to their use case
- Data-backed (reference case study or stat)
- Example:
  ```
  Execution layer for AI:
  - Observability into model drift (catch regressions before users)
  - Skill graphs that track what's improving (feedback loops that work)
  - Schema alignment that scales (handle multiple models, multiple teams)
  ```

**Why Us (1-2 Bullets):**
- Difference vs. alternatives (not named, implied)
- Reference case study if relevant
- Example:
  ```
  Unlike monitoring tools, we actually help you fix what's failing.
  Notion went from 2-week deploy cycles to <24hrs. Reason? They could see exactly what was broken.
  ```

**CTA (Simple, Binary):**
- Pilot proposal
- Timeline
- Next step
- Example: "Let's run a 2-week pilot. Scope: evaluate your top 3 models. Timeline: start next week. Ready?"

**Tone:** Executive-level. Remove technical jargon. Focus business impact. Confident, not salesy.

---

## Anti-Patterns (Things That Kill Authenticity)

**Hedging:**
- ❌ "I think," "I believe," "possibly," "might," "perhaps"
- ✓ Direct statement: "your schema alignment is loose"

**Asking Permission:**
- ❌ "Can I ask a quick question?"
- ✓ "quick question on your eval framework"

**Explaining Value:**
- ❌ "I think you'll find this valuable because..."
- ✓ "Zapier saw 25% improvement. Here's how..."

**Over-Formality:**
- ❌ "Dear Mr. [Name], I hope this message finds you well..."
- ✓ "hey [name],"

**Filler & Fluff:**
- ❌ "Just circling back," "wanted to follow up," "check in"
- ✓ "quick update: your pipeline shifted this week"

**Multiple Exclamation Points:**
- ❌ "Great question! Love your approach!"
- ✓ "Good point. Here's why it matters."

**Emojis (Mostly):**
- ❌ 😊🎯 (except Slack, and rare even there)
- ✓ None in email/LinkedIn

**False Modesty:**
- ❌ "We're just a small startup trying to help..."
- ✓ "Braintrust is building the execution layer for AI"

**Generic Compliments:**
- ❌ "Impressive company culture!"
- ✓ "Your model deployment speed is 2x industry avg"

**Jargon Without Context:**
- ❌ "Your SDLC for AI is misaligned" (if they don't know SDLC for AI)
- ✓ "You're treating your AI models like traditional software, but you're missing the feedback loops"

**Passive Voice:**
- ❌ "It has been determined that schema alignment..."
- ✓ "You need better schema alignment"

**Unnecessarily Long Sentences:**
- ❌ "I wanted to reach out and share with you some thoughts I've been having about how we might be able to help with your evaluation framework challenges."
- ✓ "Your eval framework has a schema alignment gap. Here's how to fix it."

---

## Good Real Examples (From Session Context)

**Ragavan-Style Direct Outreach:**
```
subject: your model eval: accuracy blind spot

hey [name],

most teams at [company]'s scale can't see when their models drift.
they hit users first, metrics second.

we built braintrust to flip that. dropbox now evals in <10 mins.
that's the speed you need.

quick question: how are you measuring accuracy today?

k
```

**Pigment Ghost Notes Approach (Exec Outreach):**
```
[name],

here's why your model ops are expensive:

you're treating evals like QA. you should treat them like CI/CD.
every change = automatic eval. that's the execution layer.

zapier saw 25% accuracy improvement + massive speed.
reason? they could see what was failing in real time.

let's talk about your model deployment process. 15 mins?

k
```

**Internal Slack (Coordination):**
```
@walton found a champion at [company]. director of ai, worried about regression.
they're 70-person eng team (similar to notion). warm to execution layer angle.
your account or want me to dial first?
```

---

## Voice Checklist

Before sending ANY external communication, ask:

- [ ] Is this direct? (No hedging, no "I think")
- [ ] Is the value/problem clear in first 2 lines?
- [ ] Did I include an info drop? (Case study, stat, benchmark)
- [ ] Is the CTA binary? (Yes/no question, not "let's chat")
- [ ] Did I avoid corporate jargon? (No "synergy," "leverage")
- [ ] Did I check for em dashes? (ZERO em dashes)
- [ ] Does this sound like someone who knows this space? (Not generic)
- [ ] Did I respect their time? (Short, scannable, actionable)
- [ ] Am I showing, not telling? (Data, not claims)
- [ ] Is the tone confident without arrogance? (Respect, not bravado)

If ANY answer is "no," revise before sending.

---

## Common Mistakes to Fix

**Mistake: Generic Opening**
```
Before: "I hope this message finds you well. I wanted to reach out about..."
After: "[name], your schema alignment is costing you accuracy."
```

**Mistake: No Info Drop**
```
Before: "We help with AI evaluation. Are you interested in learning more?"
After: "Zapier went 25% more accurate after they could see what was failing. You're probably blind to the same issue."
```

**Mistake: Weak CTA**
```
Before: "Would you be open to a conversation about this at some point?"
After: "Quick question: are you measuring schema alignment by model today?"
```

**Mistake: Too Long**
```
Before: "I've been in the sales industry for 10 years and have worked with companies in many sectors. I believe that what we offer could potentially be valuable for your situation..."
After: "Your eval framework needs visibility. Dropbox fixed this in <10 mins. Worth a call?"
```

**Mistake: Em Dashes (ABSOLUTE NO)**
```
Before: "Your framework (which is good) needs schema alignment improvements."
After: "Your framework is solid, but schema alignment is missing. That's costing you accuracy."
```

---

## When to Break the Rules

**You can be slightly more formal when:**
- Writing to C-suite (still direct, but remove lowercase)
- Responding to legal/compliance question
- Documenting deal terms

**You can be slightly longer when:**
- Prospect specifically asks for full proposal
- Writing strategy doc for AE/manager
- Responding to complex technical question

**You can use emojis when:**
- Posting in #pg channel (celebrate wins, use custom reactions)
- Slack coordination only (never in email/LinkedIn)

**Everything else:** Follow the voice checklist. Confidence + directness + respect for intelligence = authentic Kensington.

---

## Practice

When you draft outreach, compare to these dimensions:

1. **Confidence:** Does it sound like you know this space? (Should be yes)
2. **Directness:** Is the problem stated in <30 words? (Should be yes)
3. **Respect:** Does it assume the reader is intelligent? (Should be yes)
4. **Speed:** Can they understand the entire message in <30 seconds? (Should be yes)

If all four are yes, send it.

---

## Notes

Voice isn't personality. It's clarity with conviction. When writing as Kensington, trust the expertise, respect the audience's time, and get to the point. Authenticity comes from knowing your stuff and saying it directly. No fluff. No hedging. No corporate speak.

This guide evolves. Update quarterly as new patterns emerge from successful outreach.
