# EMAIL_WRITING.md

**Purpose:** Framework for writing high-performing cold emails. Go from research to send-ready email in 10 minutes.

**When to Use:** Before every cold email. After RESEARCH_TO_OUTREACH.md (you've identified hook), before CHANNEL_PLAYBOOK_EMAIL.md.

**Inputs Needed:**
- Prospect research (company, pain, hook—from RESEARCH_TO_OUTREACH.md)
- CUSTOMER_LANGUAGE.md (use their pain words, not jargon)
- MESSAGING.md (Braintrust value prop)
- This playbook (structure + examples)

---

## Email Formula

**Subject line:** Show you've researched them
**Opener:** Start with insight or research
**Insight:** State the specific problem you found
**Bridge:** How this matters (urgency without pushing)
**Value prop:** What Braintrust does (brief)
**CTA:** Single, small ask (not "demo," not "call," "chat about...")
**Length:** <100 words (5-8 sentences)

---

## Step-by-Step Writing

### 1. Write Subject Line (1 min)

**Goal:** Show research, intrigue them to open.

**Formulas that work:**
- "Quick idea: [specific insight you found]"
- "Re: [recent post/job they posted about]"
- "Thought of you: [research-backed reason]"

**Examples:**
- ✓ "Quick idea re: evaluating model reliability at scale"
- ✓ "Saw your post on hallucination testing—thought you'd like this"
- ✗ "Check out Braintrust" (generic, no research)
- ✗ "AI Evaluation Solution" (spammy, not personal)

**Rule:** If you removed their name and sent to 50 people, it's not personalized enough.

### 2. Write Opener (2 min)

**Goal:** Show you researched them. Lead with THEIR context, not yours.

**Opener formulas:**
1. **Post reference:** "I saw your post on [specific topic]..."
2. **Hiring signal:** "Noticed you're hiring for ML Ops engineer..."
3. **Company signal:** "Reading about [Company]'s Series B fundraise, saw you're hiring..."
4. **Mutual connection:** "I see you know [Name] at Braintrust..."
5. **Technical insight:** "Your work on RLHF is fascinating. One thing I've seen..."

**Examples:**
- ✓ "I saw your post last week on scaling evaluation infrastructure."
- ✓ "Noticed you posted about hallucination testing at scale."
- ✗ "Hope you're having a great week!" (generic, not research-backed)
- ✗ "We're excited to connect!" (about you, not them)

**Rule:** Opener proves you've done homework. Vague = ignored.

### 3. Write Insight Statement (2 min)

**Goal:** State THEIR problem specifically, using their language.

**Framework:** "[Company/You] + [what they're doing] + [pain we see]"

**Examples:**
- ✓ "Most teams deploying LLMs to users have no automated way to catch hallucinations before they hit prod."
- ✓ "We see that evaluation infrastructure is often a bottleneck when scaling model deployments."
- ✗ "Your company probably wants to improve reliability." (vague, not specific)
- ✗ "AI is hard." (not useful)

**Rule:** Use pain language from CUSTOMER_LANGUAGE.md. Specific > generic.

### 4. Write Bridge Statement (1 min)

**Goal:** Why does this matter? Create light urgency without being pushy.

**Frameworks:**
- "Most teams don't realize [consequence of pain] until it's too late."
- "The cost of [consequence] usually isn't obvious until you're at scale."
- "Teams we work with tell us [consequence] was the blocker they should've planned for earlier."

**Examples:**
- ✓ "Most teams don't catch this until hallucinations hit production and damage user trust."
- ✓ "The cost of manual testing usually isn't apparent until you're at 100k requests/day."
- ✗ "You definitely need our product." (pushy)
- ✗ "This is important." (vague)

**Rule:** Make them think about consequence, not the urgency of your pitch.

### 5. Write Value Prop (1-2 min)

**Goal:** One sentence on what Braintrust does. Not a feature dump.

**Framework:** "We [action] [specific outcome] for [who]."

**Examples:**
- ✓ "We help teams automate their eval pipelines—so they can ship confidently without manual testing."
- ✓ "Braintrust lets you test models reliably at scale before shipping to users."
- ✗ "Our platform provides comprehensive evaluation infrastructure with real-time monitoring, alerting, and comprehensive coverage..." (feature dump)
- ✗ "We're the AI evaluation platform." (meaningless)

**Rule:** Focus on outcome (confidence, speed, scale) not features.

### 6. Write CTA (Call-to-Action) (1 min)

**Goal:** Single, small ask. Not "demo," not "call," not "learn more."

**Formulas:**
- "Quick question: ..." (curiosity)
- "Curious if [specific scenario] is on your roadmap?" (specific)
- "Free to chat briefly about your eval approach?" (low-barrier)
- "Worth a quick 15-min call?" (time-bound, small)

**Examples:**
- ✓ "Worth a quick 15-min chat about how you're approaching this?"
- ✓ "Curious if evaluating model reliability is on your roadmap?"
- ✓ "Free for a brief call Tuesday or Wednesday?"
- ✗ "Let's hop on a demo call!" (asks too much)
- ✗ "Visit our website." (extra step, low intent)
- ✗ "Reply with availability." (implies they'll block time—they won't)

**Rule:** Ask for 15-20 minutes, not 30+. Easier to say yes.

### 7. Full Email Assembly (1 min)

Put it together:

```
Subject: Quick idea: Automating eval at scale

Hi [Name],

I saw your recent post on scaling evaluation infrastructure for production models—great insight on the infrastructure gap.

Most teams deploying LLMs to users have no automated way to catch hallucinations before they hit prod. The cost usually isn't apparent until you're at scale and it's too late.

Braintrust helps teams automate their eval pipelines—so they can ship confidently without manual testing bottlenecks.

Curious if you'd be open to a quick 15-min chat about your eval approach?

Kensington
```

**Count:** 75 words ✓

---

## Common Mistakes

- **Email >120 words** — Not read. Too much friction.
- **Opening about you/Braintrust** — "We're excited to..." loses them immediately. Start with THEIR research.
- **Vague insight** — "You probably want better reliability" vs. "Most teams at your scale can't catch model drift automatically." First is generic. Second is specific.
- **Feature-focused value prop** — "Our platform has X, Y, Z" vs. "We help you ship reliably at scale." One is boring. One is outcome-driven.
- **Asking for demo in first email** — Too much friction. Ask for 15-min chat first. Demo comes later if qualified.
- **Not using their pain language** — You found they say "hallucination testing" in Reddit, but email says "reliability validation." Use THEIR words.
- **CTA is vague** — "Let me know" or "Let's chat" is weak. "Free for 15-min call Tue or Wed?" is strong.

---

## Output Template

After writing, use this checklist:

```
COLD EMAIL CHECKLIST:

Subject line:
- [ ] Shows research (not generic)
- [ ] Specific enough that it won't work for 50 other people

Opener:
- [ ] Proves research (mentions recent post, hiring, company signal, or mutual connection)
- [ ] Not generic "hope you're well"

Insight:
- [ ] Specific to their company/situation
- [ ] Uses pain language from CUSTOMER_LANGUAGE.md
- [ ] Concrete, not vague

Value prop:
- [ ] Outcome-focused, not feature-focused
- [ ] One sentence, max

CTA:
- [ ] Specific ask (15 min, specific days if possible)
- [ ] Not "demo," not "call," but "chat" or "quick question"

Length:
- [ ] <100 words
- [ ] 5-8 sentences

Send? [Yes/No]
```

---

## Maintenance Notes

- **A/B test openers:** Track which opener types get best response. Update this playbook.
- **Update pain language:** Quarterly, update based on CUSTOMER_LANGUAGE.md most-common phrases.
- **Subject line test:** Run 5 subject lines, see which gets most opens. File winner for reuse.
- **Seasonal:** Q2-Q3 = focus on "scaling pain." Q4 = focus on "decision-making timelines."
- **Reuse structure but personalize language:** Formula is repeatable. Personalization is not. Never send same email twice.
