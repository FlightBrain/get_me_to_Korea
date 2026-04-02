# CHANNEL_PLAYBOOK_REDDIT.md

**Purpose:** Complete Reddit strategy. Which subreddits to monitor, search queries, what to capture, how to convert signals to outreach.

**When to Use:** Research phase (finding signals, pain language, target companies). Not for direct selling (Reddit users hate sales pitches).

---

## When Reddit Is Best

- **Intelligence gathering** (finding pain language, signals, target companies)
- **Voice of customer research** (how real users describe problems)
- **Market timing** (tracking when pain becomes acute)
- **Identifying emerging trends** (before they're obvious elsewhere)

When NOT to use Reddit:
- Direct outreach/pitching (violation of subreddit rules, gets downvoted, looks spammy)
- Finding verified contact info (pseudonymous, hard to reach)
- Expecting immediate response (Reddit is async)

**Key difference:** Use Reddit to gather intelligence, then reach out via email/LinkedIn with the insights you found.

---

## Subreddits to Monitor

**Tier 1 (Check weekly):**
- **r/MachineLearning** — Researchers, ML engineers, practitioners
  - Pain signals: eval, testing, model reliability
  - Search terms: "hallucination," "benchmark," "evaluation," "production reliability"

- **r/LLMDevs** — LLM application builders
  - Pain signals: deploying, testing, performance, cost
  - Search terms: "evaluation," "testing outputs," "reliability," "deploying models"

- **r/artificial** — AI practitioners, mixed technical
  - Pain signals: General AI challenges, adoption pain
  - Search terms: "deploying," "reliability," "testing," "evaluation"

- **r/ChatGPT** — GPT/Claude users, product feedback
  - Pain signals: Product feedback, limitations, use cases
  - Search terms: "limitations," "hallucinations," "reliability"

**Tier 2 (Check monthly):**
- **r/startups** — Founders, early-stage tech
  - Pain signals: Building with AI, scaling challenges
  - Search: "LLM," "AI," "evaluation," "testing"

- **r/LanguageModels** — Research and deployment
  - Pain signals: Benchmarking, model selection, deployment
  - Search: "eval," "benchmark," "deployment," "reliability"

- **r/Reinforcement_Learning** — RLHF, alignment, model training
  - Pain signals: Training, alignment, evaluation
  - Search: "evaluation," "testing," "reliability"

---

## Search Queries by Use Case

**Pain validation queries:**
- "hallucination" (most common pain)
- "evaluation" or "eval" (exact pain word)
- "testing LLM" or "testing models"
- "reliability testing"
- "model benchmarking"
- "production deployment" + "issues" or "problems"

**Company/use case discovery:**
- "we deployed" (company users sharing)
- "we're building" (founders sharing)
- "my startup" (founder context)
- "at my company" (employee context)

**Emerging pain detection:**
- "struggling with" (active pain discussion)
- "how do you" (seeking solutions)
- "anyone else" (social validation of pain)

---

## What to Capture & File It

| What to Capture | Where to File | Why |
|-----------------|---------------|-----|
| Exact pain phrases | CUSTOMER_LANGUAGE.md | Direct language for outreach messaging |
| Company mentions | SIGNALS.md | Prospect identification |
| Problem descriptions | CUSTOMER_LANGUAGE.md | Voice of customer for messaging |
| Solution workarounds | Memory (for insights) | Understand current non-solution |
| Frequency of pain | CUSTOMER_LANGUAGE.md (note) | Is this pain acute or niche? |
| Job titles discussing pain | CUSTOMER_LANGUAGE.md | Who's the buyer? |
| Recent posts | SIGNALS.md | Timing of pain (recent = hot) |

**Example capture:**

Post: "We deployed Claude to customer support. Hallucinations are killing us. We're manually reviewing 10% of responses but can't do more. Need automated testing somehow."

Capture:
- Pain language: "Hallucinations are killing us," "Manually reviewing," "Can't scale manual testing"
- Company signal: "Customer support" → B2C SaaS
- Scale: 10% review = substantial volume
- Buyer: Probably CTO or VP Engineering
- File to CUSTOMER_LANGUAGE: "Hallucinations killing production," "Manual testing bottleneck at scale"
- File to SIGNALS: "B2C SaaS customer support platform - Hallucination + scale pain - Reddit r/MachineLearning - March 30"

---

## How to Turn Findings into Outreach

**Step 1: Research the company** (if mentioned)
- Search "[Company name]" on LinkedIn
- Find the company website
- Identify decision-maker (CTO, VP ML, VP Eng)
- Get email if possible (try company site, LinkedIn, email finder tool)

**Step 2: Use pain language captured**
- Use their exact words in your outreach
- "I saw discussion on Reddit about hallucinations killing production reliability" OR use pain language without mentioning Reddit
- Example email: "Most teams deploying LLMs face the issue you mentioned: manual testing hits a wall at scale. We help automate that."

**Step 3: Send research-backed email**
- Use RESEARCH_TO_OUTREACH.md playbook
- Lead with: "Saw this being discussed in the ML community" (don't say "on Reddit"—sounds casual)
- Hook: "Hallucinations + scale" (pain language you captured)
- CTA: 15-min call
- See EMAIL_WRITING.md for full framework

**Step 4: Log to memory**
- File in ACTIVE_CONTEXT.md: "[Company] - Pain: hallucination + scale testing - Reddit signal - March 30"
- Note in DONE_LOG.md: "Converted Reddit signal to outreach: X companies contacted"

---

## Example Workflow

**Friday morning: Reddit mining (see REDDIT_MINING.md)**

You search r/MachineLearning for "hallucination," find this thread:

```
Title: "Deploying GPT-4 at scale—hallucination testing is bottleneck"

OP: "We're an AI company deploying GPT-4 to enterprise customers.
We've hit a wall: manual testing works until ~100k requests/month,
then it's unmaintainable. We don't have an automated solution yet.
Anyone else hitting this?"

Comment 1: "Yes. We tried building in-house, took 6 months, still not
covering edge cases. Looking for third-party solutions."

Comment 2: "We're solving this but slowly. There should be products
for this. Manual testing is a meme."
```

**Capture:**
- Pain language: "Hallucination testing is bottleneck," "Manual testing works until ~100k requests/month," "Unmaintainable at scale"
- Company signal: OP says "We're an AI company"—could research
- Buyer signal: "We don't have an automated solution"—they're actively seeking
- File to CUSTOMER_LANGUAGE: "Hallucination testing bottleneck at scale," "Manual testing hits unmaintainable"
- File to SIGNALS: "AI company deploying to enterprises - Pain: hallucination + 100k+ requests scale - Reddit - March 30 - High signal"

**Monday morning: Outreach**

Research the company (if identifiable), or use pain language with similar companies:

Email to CTO at enterprise AI company:

```
Subject: Quick idea—hallucination testing at 100k+ requests

Hi [Name],

I've seen ML teams hitting the same bottleneck: manual testing works until you're at ~100k requests/month, then it's unmaintainable.

Most teams then either accept hallucination risk or spend 6 months building in-house evaluation infrastructure.

We automate this—teams can test reliably without manual bottlenecks.

Worth a 15-min chat about your approach?

Kensington
```

**Track:**
- Log in DONE_LOG.md: "Converted 1 Reddit signal (hallucination + scale) to outreach to [Company]"
- Update CUSTOMER_LANGUAGE.md: "100k requests/month" = threshold where pain becomes acute

---

## Common Mistakes

- **Directly pitching on Reddit** — "Check out Braintrust!" = downvoted, banned, blocked. Use Reddit only for research.
- **Not capturing exact language** — Remember pain was about "hallucinations" but use generic "reliability" in outreach. Loses power.
- **Following leads too old** — Signal is from 2-year-old post. Pain may have shifted. Focus on posts <2 months old.
- **Assuming pseudonym = no real company** — u/MyStartupName might mention company in thread. Search comments for context.
- **Not filing insights** — Mine 20 threads, forget pain language by next week. Without documentation, research doesn't compound.
- **Over-relying on Reddit** — True pain is here, but Reddit is just part of intelligence. Cross-validate on LinkedIn, X.
- **Spamming all posters** — Found 5 relevant threads, emailed all 5 OPs. Feels like spam. Be selective.

---

## Output Format

After Reddit mining session, log:

```
REDDIT MINING SESSION — [Date]

SUBREDDITS SEARCHED: [r/MachineLearning, r/LLMDevs, etc.]
KEYWORDS SEARCHED: ["hallucination," "eval," "testing"]

SIGNALS FOUND (companies/people):
- [Company/person] - [pain] - [subreddit] - [date of post]

PAIN LANGUAGE CAPTURED:
- "[Exact quote 1]" - [subreddit link]
- "[Exact quote 2]" - [subreddit link]

COMPANIES TO RESEARCH:
- [Company name, industry if identifiable]

FILED TO:
- CUSTOMER_LANGUAGE.md [Yes/No]
- SIGNALS.md [Yes/No]

OUTREACH PLANNED:
- Number of contacts to reach out to from this mining: [X]
- Angle to use: [pain language captured]
```

---

## Maintenance Notes

- **Weekly rhythm:** 1 hour per Friday morning. Findings inform week's messaging.
- **Update keywords:** After WEEKLY_REVIEW.md, search for new pain keywords discovered in other channels.
- **Seasonal:** Q2/Q3 = more "deploying at scale" pain. Q4 = more "choosing models" discussion.
- **Don't get sucked in:** Reddit is a time sink. Set timer, stick to 1 hour, capture, move on.
- **Cross-pollinate:** Share top 3 pain findings with sales team. Collective signal is stronger.
- **Privacy:** Don't mention specific Reddit users in outreach. Use pain language anonymously.
- **Ethical:** Research is fine. Pitching on Reddit is not. Stay in research-only mode.
