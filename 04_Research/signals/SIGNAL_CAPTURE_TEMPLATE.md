# Signal Capture Template

**Purpose:** Standardized format for documenting market signals discovered through research. Use this to consistently capture signals that may indicate a prospect is ready to buy Braintrust, or to track broader market trends.

**How to Use:**
1. When you discover a signal (hiring post, product announcement, pain mention, etc.), create an entry
2. Fill in all fields to provide context for your team
3. Note in SIGNALS.md whether you actioned the signal (researched company, added to outreach list, etc.)
4. Review monthly to identify patterns (e.g., "Q1 hallucination concerns spiked")

---

## Signal Entry Template

**Date:** [YYYY-MM-DD]
**Source:** [Reddit / LinkedIn / Twitter / News / Direct call / Podcast / Other]
**Signal Type:** [Hiring / Product Launch / Funding / Pain / Executive Move / Competitive / Other]

---

### Company/Person
**Name:** [Company or person name]
**Website/Profile:** [LinkedIn URL / Company website / Twitter handle]
**Industry:** [AI / SaaS / Enterprise / etc.]

---

### Signal Summary
**What was observed:**
[2-3 sentences: Exactly what was said or announced? What did you read?]

**Where:**
[Specific link, post URL, or detailed location. Examples: "Reddit thread r/LLM/posts/xyz", "LinkedIn post by John Smith", "OpenAI blog announcement", "Product Hunt page"]

**Full context (optional):**
[Any additional context that helps explain the signal. Include quotes if relevant.]

---

### Relevance Analysis

**Relevance to Braintrust:** [High / Medium / Low]

**Why this matters:**
[2-3 sentences: How does this signal connect to Braintrust's ICP or go-to-market? What does it tell us about the prospect's readiness or pain?]

**Confidence level:** [High (confirmed, direct) / Medium (inferred) / Low (speculative)]

---

### Signal Categories (Check all that apply)

#### Hiring Signals
- [ ] AI/ML engineer hiring
- [ ] Eval specialist hiring
- [ ] Safety/quality engineer hiring
- [ ] Product manager hiring (for AI product)
- [ ] Job posting mentions: [Copy relevant text from posting]

#### Product Signals
- [ ] New AI feature announced
- [ ] AI capabilities mentioned in product roadmap
- [ ] Reliability/quality features announced
- [ ] Compliance/safety features launched
- [ ] Feature details: [Description]

#### Pain Signals
- [ ] Public mention of evaluation challenges
- [ ] Mention of hallucination issues
- [ ] Testing/QA bottleneck mentioned
- [ ] Compliance concerns expressed
- [ ] Quality/reliability worries stated
- [ ] Exact quote: [Paste relevant customer/exec quote]

#### Funding Signals
- [ ] Fundraising announced (amount, stage, lead)
- [ ] Investor backing (who, for what purpose)
- [ ] AI roadmap tied to funding: [Details]

#### Executive Moves
- [ ] C-level hire (especially Chief AI Officer)
- [ ] VP/Director hire related to AI/quality
- [ ] Research scientist joining as founder
- [ ] Details: [Name, role, relevance]

#### Competitive Signals
- [ ] Competitor feature launch
- [ ] Competitor partnership or acquisition
- [ ] Market consolidation trend
- [ ] Details: [Competitor, what they announced, why it matters]

---

### Company Context (Fill in for company-specific signals)

| Field | Value |
|-------|-------|
| **Current stage** | [Series X / Funded / etc.] |
| **Industry** | [Vertical] |
| **Headcount** | [Estimated from LinkedIn] |
| **ICP match** | [Primary / Secondary / Not a fit] |
| **Known customers** | [If public] |

---

### Action Triggered

**Action taken:** [What did you do with this signal?]
- [ ] Research company profile (file: `/04_Research/companies/[NAME].md`)
- [ ] Add to prospect outreach list
- [ ] Flag for content/thought leadership angle
- [ ] Monitor for follow-up signals
- [ ] Passed to sales for immediate action
- [ ] No action (provide reason below)

**Reason for action/no-action:**
[Why you chose to act or not. Examples: "Not in our ICP" or "Already a customer" or "High priority, reaching out this week"]

**Filed to:**
[If you created a company research file or content idea, link it. Example: `/04_Research/companies/OpenAI.md` or `/04_Research/CONTENT_IDEAS_FROM_RESEARCH.md`]

---

### Follow-up & Tracking

**Expected follow-up signal:**
[What would indicate this company is moving forward? Examples: "New job posting for ML engineer" or "Product launch announcement" or "Funding round"]

**Check-in date:**
[When should we revisit this? Examples: 30 days for hiring, quarterly for funding rounds]

**Notes for follow-up:**
[Anything else the team should know when revisiting this signal?]

---

### Related Signals

**Similar signals observed:**
[Have you seen similar signals from other companies? Link them. Example: "Similar to [Company X] signal on [Date]"]

**Pattern emerging?**
[Is this part of a broader trend? Examples: "This is the 3rd hallucination mention this week" or "Enterprise AI governance signals increasing"]

---

## Examples

### Example 1: Hiring Signal
```
Date: 2026-03-28
Source: LinkedIn
Signal Type: Hiring

Company: Anthropic
Website: linkedin.com/company/anthropic

Signal Summary:
Anthropic posted 3 new job openings: "AI Safety Evaluator", "Model Robustness Engineer", "Quality Assurance Lead for AI Products". All roles focus on evaluation and safety testing.

Why this matters:
Anthropic is a serious buyer prospect if they're hiring for eval expertise. This also validates that evaluation is a core workflow, not a nice-to-have.

Action Triggered:
[X] Research company profile
[X] Flag for follow-up if Series B raises (funding signal)
Filed to: /04_Research/companies/Anthropic.md

Expected follow-up signal:
Hiring completion, funding announcement, or product feature launch mentioning evaluation improvements
Check-in date: 2026-06-28
```

### Example 2: Pain Signal
```
Date: 2026-03-25
Source: Reddit
Signal Type: Pain

Company: [Anonymous user]
Website: reddit.com/r/LLM/posts/abc123

Signal Summary:
"We launched an LLM chatbot 3 months ago and we're now spending 60% of our engineering time on manual testing and quality checks. We need a better way to evaluate outputs before shipping. Anyone else dealing with this?"

Why this matters:
This is exactly the pain Braintrust solves. Could be from our ICP. Comments on thread may reveal other companies with same pain.

Action Triggered:
[X] Flag for content idea (blog post on manual testing costs)
[X] Monitor thread for company reveals in responses
Filed to: /04_Research/CONTENT_IDEAS_FROM_RESEARCH.md

Expected follow-up signal:
Detailed discussion in thread responses, potential to identify companies
Check-in date: 2026-04-08 (check for responses/insights)
```

---

**Captured By:** [Your name]
**Date Captured:** [YYYY-MM-DD]
**Last Updated:** [YYYY-MM-DD if edited]
