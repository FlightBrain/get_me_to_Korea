# REDDIT_MINING.md

**Purpose:** Extract sales signals and authentic pain language from Reddit to identify prospects and refine messaging.

**When to Use:** Weekly (1 hour Friday morning) or when building new target list. First step of prospecting research.

**Inputs Needed:**
- List of relevant subreddits (see below)
- Pain keywords to search (hallucination, eval, reliability, latency, testing, etc.)
- CUSTOMER_LANGUAGE.md (append findings)
- SIGNALS.md (file prospect leads)

---

## Relevant Subreddits

Primary targets (monitor weekly):
- **r/MachineLearning** — ML engineers, researchers, practitioners
- **r/LLMDevs** — LLM application builders
- **r/artificial** — AI practitioners, mixed technical
- **r/OpenAI** — GPT/Claude deployment, product feedback
- **r/langchain** — LLM app framework users
- **r/ChatGPT** — Product users, non-technical and technical

Secondary (monitor monthly):
- **r/startups** — Founders, early-stage technical challenges
- **r/LanguageModels** — Research and deployment discussions
- **r/Reinforcement_Learning** — RLHF, alignment, model training

---

## Steps

1. **Identify Pain Keywords** (5 min)
   - Search: "hallucination" (most common pain)
   - Search: "reliability testing"
   - Search: "eval" or "evaluation"
   - Search: "latency" (ML ops issue)
   - Search: "benchmarking models"
   - Search: "deploying LLMs"
   - Add: Any new keywords from CUSTOMER_LANGUAGE.md that worked last week

2. **Search Each Subreddit with Keywords** (20 min)
   - Go to r/MachineLearning, search "hallucination"
   - Open 3-5 top threads (sort by "New" not "Top" for fresher signals)
   - Read comments, not just post titles
   - Identify: Who's asking the question? What pain are they expressing?
   - Repeat for other subreddits and keywords

3. **Capture Pain Language Verbatim** (10 min)
   - Copy exact phrases people use to describe their problem
   - Examples:
     - "We're deploying Claude to production but can't test for bad outputs reliably"
     - "Hallucination risk is killing our use case"
     - "We need automated testing for LLM responses before shipping"
   - Don't paraphrase—keep their words
   - File: Save to CUSTOMER_LANGUAGE.md with reddit source

4. **Identify High-Signal Comments** (10 min)
   - Look for: "We're building..." (signal: company/side project)
   - Look for: "We deploy..." (signal: company using LLMs)
   - Look for: User mentions a company they work at
   - Example: "At my startup, we're struggling with GPT hallucinations" → prospect signal
   - Note: Subreddit username may not be real name, but company is

5. **Extract Company & Role Signals** (10 min)
   - If someone mentions their company: "We're [Company], using LLMs for..."
   - If they mention title: "As ML lead at [Company]..."
   - If they mention funding: "We just raised Series A" + pain = hot signal
   - File: Add to SIGNALS.md as "Reddit signal" with company name, pain, date

6. **Note Trending Problems** (5 min)
   - Are multiple threads discussing the same pain? (e.g., all about hallucination in last week)
   - If yes: that's a strong message angle this month
   - Example: If 8 threads mention "hallucination testing" this week, that pain is acute
   - File: Update CUSTOMER_LANGUAGE.md, note "high frequency this week"

7. **Identify Influencers to Follow** (5 min)
   - Who has high engagement/karma in relevant threads?
   - Are they founders, researchers, or ML leads?
   - File: Add names to SIGNALS.md as "influencer to watch on Reddit"
   - Consider: If they post about a pain, it's worth following up

---

## Example Session

**Keyword:** "hallucination" in r/MachineLearning

**Thread found:** "How do we prevent hallucinations in production?"
- OP: "We deployed Claude to customer support. GPT sometimes makes up facts. Any testing solutions?"
- Pain captured: "We deployed Claude to customer support. GPT sometimes makes up facts."
- Company signal: None explicit, but "we deployed" = company user

**Thread 2:** "Anyone else struggling with model drift in production LLMs?"
- Comment from "AI_Lead_at_TechCo": "We're hitting hallucination issues at scale. 10k requests/day, can't manually test all."
- Pain captured: "Hallucination issues at scale. 10k requests/day, can't manually test all."
- Signal filed: "TechCo (u/AI_Lead_at_TechCo) - Scale eval signal - Reddit - April 1"
- Follow-up action: Search "TechCo AI" on LinkedIn to find real contact

**Trending observation:** 12 threads in 1 week mention "hallucination" + "production deployment"
- Update CUSTOMER_LANGUAGE: "Hallucination testing" + "Production deployment risk" are hot language this week
- Messaging angle: Lead with "Production hallucinations" not generic "model testing"

---

## Common Mistakes

- **Only reading thread titles** — Comments have real pain. Scroll down.
- **Not capturing exact language** — You paraphrase "reliability" when they said "sometimes outputs garbage facts." Their language is more powerful.
- **Following dead ends** — User mentions they're "thinking about" LLMs, not actually using them. Focus on "we deployed," "we're building," "we use."
- **Not filing signals** — You find 5 companies with pain but don't add to SIGNALS.md. Signals get forgotten.
- **Generic keyword searches** — Search specific pain, not "AI." Too noisy. Search "hallucination," "reliability," "eval."
- **No follow-up** — You capture pain language but don't use it in outreach. Mine Reddit to inform your messaging, not just for knowledge.

---

## Output Format

After each mining session, log:

```
=== REDDIT MINING — [DATE] ===

PAIN LANGUAGE FOUND:
- [Exact quote 1, subreddit, post link]
- [Exact quote 2, subreddit, post link]

NEW SIGNALS (COMPANIES/PEOPLE):
- [Company/username] - [pain] - [subreddit] - [date]

TRENDING THIS WEEK:
- [High-frequency pain keyword] (N threads, all recent)

MESSAGE UPDATES RECOMMENDED:
- Start emphasizing: [pain language that's hot]
- De-emphasize: [pain language that's quiet]

INFLUENCERS TO FOLLOW:
- [Reddit username] - [topic they engage on]
```

---

## Maintenance Notes

- **Weekly rhythm:** Friday 10-11 AM, before outreach writing. Findings directly inform week's messaging.
- **Update keywords**: After WEEKLY_REVIEW.md, add new pain keywords discovered.
- **Seasonal shift**: Q2-Q3 is "scaling pain" season (prod deployment, latency). Q4 is "closing" season (eval for demos).
- **Avoid burnout**: 1 hour/week max. If spending >2 hours, you're overthinking. Skim, capture, move.
- **Cross-pollinate**: Share top 3 pain findings with sales team. Collective signal is stronger.
- **Quarterly deep dive**: Once per quarter, spend 2 hours mapping pain evolution. How has "hallucination" language changed since last quarter?
