# X_SIGNAL_WORKFLOW.md

**Purpose:** Monitor X (Twitter) for product launches, hiring signals, and pain signals from founders and AI engineers. Quick daily/weekly intel gathering.

**When to Use:** 10-15 min daily scan or 30 min weekly deep dive. Best time: morning coffee or Friday afternoon research block.

**Inputs Needed:**
- X/Twitter account (logged in)
- List of key accounts to monitor (see below)
- SIGNALS.md (file findings)
- CUSTOMER_LANGUAGE.md (capture pain language if found)

---

## Key Accounts to Monitor

**Founders & VCs (product launches, strategy):**
- AI startup founders in your target market
- YC founders (ai.yc.com, search by batch)
- VC partners focused on AI/ML infrastructure

**ML Engineers & Leaders:**
- OpenAI, Anthropic, Meta AI researchers (public accounts)
- AI infrastructure engineers at scale-ups
- ML ops leads at enterprises

**Subject matter experts:**
- Known voices on model evaluation, reliability, evals
- Researchers publishing on LLM safety/alignment
- Community builders in AI spaces

**TIP:** Start with 15 key accounts. As you find more, build to 30-50. Use Twitter lists to organize by category.

---

## Steps

1. **Daily Scan: 15 Minutes** (Daily or 3x/week)
   - Check your "AI/ML Leaders" Twitter list for new posts
   - Look for: product launch, hiring announcement, pain point discussion
   - Example posts that signal:
     - "Excited to announce [Product launch]" → Company building with LLMs
     - "Hiring for [Role]" → Hiring gap signals pain area
     - "We're struggling with [problem]" → Direct pain signal
   - Don't engage yet, just capture

2. **Identify Signal Type** (1 min per post)
   - **Product launch signal:** "Shipping X + LLMs" or "Just released Y for model testing"
     - File: "Company name (X account) - Product launch - April 1 - Signal: AI product"
   - **Hiring signal:** "Looking for ML Ops engineer" or "Hiring for evaluation roles"
     - File: "Company name - Hiring for [role] - Signals pain: [inferred pain]"
   - **Pain signal:** "Struggling with hallucinations" or "Model reliability is killing us"
     - File: "Founder (X account) - Pain: [exact language] - April 1"

3. **Track Founder & Company Growth** (2 min)
   - Follow-up: Did founder announce funding? Hiring? Office opening?
   - These in sequence = growth mode = urgency for solutions
   - Example: Week 1: "Raised Series B" → Week 2: "Hiring 5 engineers" → Now: reach out with "scaling challenges?"
   - File: Add to SIGNALS.md with timeline

4. **Capture Exact Pain Language** (1 min)
   - If founder says "Model hallucinations are tanking production reliability," copy that exact phrase
   - Don't paraphrase. Their words are your messaging gold.
   - File: Add to CUSTOMER_LANGUAGE.md with source (X link)
   - Use: Reference in personalized outreach ("Saw your post on hallucinations...")

5. **Watch for Engagement Spikes** (1 min)
   - High-engagement post (>100 likes/retweets) = strong pain signal
   - Example: "We're failing at LLM evals" post gets 5k likes = acute pain, many people relate
   - File: Note signal importance level in SIGNALS.md (High/Medium)

6. **Reply Strategically (Optional)** (2 min per reply)
   - Don't sell. Don't spam. Engage thoughtfully.
   - Example: If they post pain, reply with insight or experience
   - Good reply: "This is super common at scale. How many requests/day are you at?"
   - Bad reply: "Check out our product!"
   - Goal: Build relationship before cold email, make warm intro possible

7. **Weekly Deep Dive: 30 Minutes** (Friday afternoon)
   - Search X for pain keywords: "hallucination," "LLM eval," "model testing," "reliability"
   - Read top posts from past week
   - Identify companies/founders, add to SIGNALS.md
   - Note: High-frequency pain language this week vs. last week (trend analysis)

---

## Example Signals Found

**Signal 1: Product Launch**
- Post: "Just released LLMValidator—automated testing for model outputs. Built this after 6 months of hallucination nightmares 🔥"
- From: @founder_name (Founder, StartupXYZ)
- Signal type: Product launch + pain origin
- File: "StartupXYZ (founder_name) - Launched LLMValidator - Inferred pain: Hallucination testing gap - April 2"
- Action: Research StartupXYZ, look for pain in detail, maybe they're early signal of trend

**Signal 2: Hiring Announcement**
- Post: "We're hiring a Principal ML Engineer—focus on evaluation infrastructure. If you've built evals at scale, DM me"
- From: @vc_partner (VP at AI VC firm)
- Signal type: Hiring gap + portfolio company pain
- File: "VCfirm portfolio - Hiring gap: Evaluation infrastructure - Signals: Scaling pain - April 2"
- Action: VCs often have insights. If portfolio cos hiring for evals, it's a trend.

**Signal 3: Direct Pain**
- Post: "Shipping Claude to 100k users. Zero mechanism to catch hallucinations automatically. This is a real problem and there aren't good solutions yet."
- From: @cto_name (CTO, ScaleUp)
- Pain language: "Zero mechanism to catch hallucinations automatically"
- File: "ScaleUp (cto_name) - Pain: No automated hallucination detection at 100k scale - High signal - April 3"
- Action: This is gold. Find their email, send research-backed email mentioning this exact pain.

---

## Common Mistakes

- **No filtering** — Follow 200 random people, drown in noise. Focus on 15-30 high-signal accounts.
- **Not capturing signals** — See a great pain post, don't save it. Next week you've forgotten.
- **Engaging too early** — Reply to every post about pain. Looks desperate, not consultative.
- **Missing the company** — "This problem is hard" (founder pain) but you don't note which company they work at. Signal is lost.
- **Not capturing exact language** — "Founder said evals are hard" vs. "We're failing at LLM evals in production" (their exact phrase). One is vague, one is specific and quotable.
- **Reacting, not researching** — Saw a post, immediately DM. No research first. Message lacks context.
- **No follow-through** — Captured 10 signals Friday, never reached out. Signals decay. Use within 3 days.

---

## Output Format

Log signals as you find them:

```
=== X SIGNAL CAPTURE — [DATE] ===

SIGNAL 1:
- Source: @[account] / [Name]
- Company: [Company, if applicable]
- Type: [Product launch / Hiring / Pain]
- Exact language: "[Quote if pain]"
- Relevance: [High/Medium/Low]
- Filed to: SIGNALS.md [Yes/No]

SIGNAL 2:
[same format]

TREND THIS WEEK:
[If multiple signals about same pain, note it]
- [Pain keyword] mentioned [N] times this week
- [Action]: Emphasize this in outreach

ENGAGEMENT OPPORTUNITIES:
[Accounts where thoughtful reply could start relationship]
- @[account]: [Suggested engagement angle]
```

---

## Maintenance Notes

- **Daily habit:** 15 min, like checking email. Build it into routine (morning with coffee).
- **List management:** Add new accounts when you find them. Prune accounts that never post or aren't relevant.
- **Seasonal:** Q2-Q3 = lots of hiring. Q4 = less hiring, more product launches.
- **Trend spotting:** After 4 weeks, review signals. Is "hallucination" the top pain? Update messaging.
- **Engagement risk:** Don't spam replies. If you engage with 5 posts/week, fine. 20/day looks bot-like. Quality over quantity.
- **Cross-function:** Share top signal with sales team weekly. They may have context you miss.
