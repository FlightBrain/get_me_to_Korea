# X/Twitter Index

## Purpose
Track X/Twitter outreach, engagement strategy, and signal monitoring. X is best used for: listening, identifying signals, and high-value engagement (not spammy pitching).

## How to Use
1. Monitor accounts and hashtags for signals (hiring, product launches, funding)
2. Engage on relevant posts with insights (no pitch)
3. Build relationship through replies and retweets
4. Use engagement as warm-up before email/LinkedIn outreach
5. Log signals and engagement activity in sections below

---

## Accounts to Monitor (Ongoing)

These are high-signal accounts where decision-makers share AI/agent/eval news:

### **Founders & Leadership**
- CEOs of AI-native startups you're targeting
- CTOs/Heads of Eng at growth-stage AI companies
- Heads of AI at larger tech companies

**How to find:**
1. Go to company website
2. Find leadership team
3. Check their Twitter handle
4. Add to lists

### **Investor Accounts** (For signal spotting)
- Investors focused on AI infrastructure
- Venture firms that lead AI investments
- Angel investors active in AI community

**Signal:** When they post about their portfolio companies or investment themes, their portfolio companies are likely active in that area.

### **Industry Accounts** (For trend spotting)
- LLM providers (OpenAI, Anthropic, Hugging Face)
- Agent/orchestration framework creators (LangChain, AutoGPT, etc.)
- AI conference organizers
- AI newsletter writers (Lsuanyi, etc.)

---

## Signal Types to Watch For

### **High-Intent Signals** (Act within 24 hours)
- **Hiring:** "We're hiring for [AI/ML/Agent role]"
- **Funding:** "[Company] raises [amount]" or company announces funding
- **Product launch:** "Shipped [new AI feature]" or version update with agent features
- **Conference talk:** "Speaking at [conference] about agents"

**Example:**
```
"Just shipped v1.5 of our agent orchestration layer. Multi-model routing with better fallback handling."

Your engagement: Quote tweet + insight
"The fallback handling is where testing usually gets expensive. Most teams add test cases reactively after production issues. Worth building that test layer upfront."
```

---

### **Medium-Intent Signals** (Engage this week)
- **Technical content:** Blog post or thread about building agents, evals, or testing
- **Hiring (non-specific):** "We're scaling our AI team"
- **Product updates:** New SDK, new integration, new capability
- **Take/opinion:** "Here's what I think about evals" or "Agent testing is broken"

---

### **Low-Intent Signals** (Engage if you have time)
- **Industry discussion:** "What's the best approach to agent testing?"
- **Conference recap:** "Great talks at [Conference]"
- **Commentary:** Thoughts on broader AI trends

---

## Engagement Strategy

### **Rule 1: Never Pitch**
Your X engagement is 100% about demonstrating expertise and building relationship. Zero pitching.

**Bad engagement:** "This is why you need Braintrust" or "Braintrust solves this"

**Good engagement:** Thoughtful addition to their thinking, question that shows you understand, or framework they didn't consider

---

### **Rule 2: Quote Tweet When Possible**
Quote tweets get more visibility than replies. Quote tweet = you retweet with a comment.

**Example original post:**
```
"Shipped our new agent deployment pipeline. Now we need to figure out how to test it reliably."
```

**Your quote tweet:**
```
The deployment pipeline is easy; the measurement layer is hard.

Most teams don't realize until they ship: whether the agent is "better" after a change requires a test suite, not a launch checklist.

[Original quote]
```

**Why it works:** You're not disagreeing. You're extending their thought. You're showing you understand a depth they didn't mention.

---

### **Rule 3: Ask Real Questions**
Questions are your best engagement tool. They look like genuine curiosity, which builds rapport.

**Example:**
```
Launching multi-agent orchestration means suddenly you need to answer: which agent should handle this task? How are you testing that decision logic?
```

---

### **Rule 4: One Insight Per Post**
Don't overcomplicate. One clear thought, one insight, one question max.

**Bad:** 5-paragraph thread explaining eval frameworks

**Good:** "Testing agent interactions is 10x harder than testing a single agent. Most teams don't realize until too late."

---

## Engagement Templates

### **Quote Tweet: Signal Validation**
*Use when someone posts about agent hiring, funding, or product launch*

```
[Original quote]

This is where most teams hit the measurement wall. Went from "does the agent work?" to "does it work *better*?"

Infrastructure that asks that question upfront saves weeks of scrambling later.
```

---

### **Quote Tweet: Pain Point Extension**
*Use when someone posts about challenges (testing, reliability, scaling)*

```
[Original quote]

The problem gets worse as you scale: more agents, more model options, more edge cases. Measurement becomes the diff between iterating fast and being stuck.
```

---

### **Reply: Real Question**
*Use when you have genuine curiosity about their approach*

```
@[name] How are you thinking about test coverage across the model options? Most teams discover late that their tests were built for one model, don't work for another.
```

---

### **Reply: Framework Suggestion**
*Use when you see a problem and have a framework for thinking about it*

```
@[name] A lot of teams approach this as: (1) define "good" in your domain, (2) build test cases that prove "good," (3) measure whether changes preserve "good." Worth that order?
```

---

## Signal Tracking Template

### **Weekly Signal Log**
| Date | Account | Post Summary | Signal Type | Company | Your Action |
|---|---|---|---|---|---|
| 2026-04-01 | @[person] | Shipped agent orchestration | Product launch | [Company] | Quote tweet engagement |
| 2026-04-02 | @[person] | Hiring for 2 AI engineers | Hiring | [Company] | Reply with insight |

---

### **Engagement Tracking**
| Date | Account | Your Post Type | Engagement Type | Impressions | Engagement Count |
|---|---|---|---|---|---|
| 2026-04-01 | @[person] | Quote tweet | Quote/Reply | [#] | [#] likes/retweets |

---

## Hashtags to Monitor (Daily/Weekly)

**Agent-related:**
- #llmagents
- #agentai
- #rlm (reasoning language models)
- #agentic

**Eval/Testing related:**
- #aievals
- #testingai
- #llmtesting
- #measurement

**Hiring signals:**
- #nowhiring
- #hiring
- #jobs

**Company + signal combinations:**
- Search: "[Company name] agent"
- Search: "[Company name] hiring"
- Search: "[Company name] funded"

---

## Tools for X Monitoring

**Manual approach:**
1. Create a private list of target accounts
2. Check list 2–3 times per week for new posts
3. Engage on relevant posts within 24 hours

**Semi-automated approach:**
1. Use Twitter list feature to group accounts
2. Set up alerts (IFTTT, Zapier) for keyword mentions
3. Check alerts daily, engage on relevant posts

**Note:** Don't use auto-engagement tools or bots. All engagement should be human and thoughtful.

---

## Response Handling

**If they reply to your engagement:**
1. Respond within 24 hours
2. Keep conversation going (ask a follow-up question, extend their thought)
3. Don't pivot to sales (relationship building phase)
4. After 2–3 exchanges, you can mention you work in similar space

**Example conversation escalation:**
- Post 1 (them): "Agent testing is a nightmare"
- Your reply: "Testing *which* agent did the right thing is the hard part"
- Post 2 (them): "Exactly, that's why we're building..."
- Your reply: "That's really interesting. We work on the measurement layer for exactly this. Worth a coffee conversation?"

---

## When to Move to Cold Outreach

**After X engagement, when to reach out via email/LinkedIn:**
- They've replied to one of your posts (warm signal)
- You've engaged 3+ times and they've liked/replied at least once
- You've seen a new hiring or funding signal from them
- You have a specific insight tied to their recent post

**Template for that handoff email:**
```
Saw your recent post about [topic]. Your point about [X] resonated—been thinking about it a lot.

One quick question: [real question about their situation]
```

This references X engagement, doesn't feel random, and moves to a different channel.

---

## Monthly X Metrics

Track:
- Posts published (original thoughts, not just engagement)
- Quote tweets created
- Engagement received on your posts (likes, retweets, replies)
- Accounts engaged with (unique people you commented to)
- Signals identified (hiring, funding, launches)
- Handoffs to cold outreach (X engagement → email/LinkedIn)

**Goal:** 1–2 quality posts per week, 5–10 high-value engagements per week, 2–4 signals identified per week.

---

## Red Lines

- Don't spam quote tweets (max 1–2 per day)
- Don't engage on unrelated posts (politics, personal drama)
- Don't use follow-bait or engagement-baiting ("like this if you agree")
- Don't mention Braintrust without context
- Don't directly pitch in replies
- Don't engage with competitors (bad optics)
- Don't post off-brand content (X is for expertise, not hot takes)
- Don't engage the same person more than 2x per week unless they're actively in conversation with you

---

## Content Ideas (For Your Own Posts)

**High-engagement post types on X:**
1. **Framework:** "Here's how we think about [topic]"
2. **Contrarian take:** "Everyone says X, but actually Y"
3. **Problem statement:** "Why is [problem] so hard?"
4. **Question to audience:** "How do you currently [solve problem]?"
5. **Short story:** "Building [product] taught us..."

**Do NOT:** Product updates from Braintrust account (that's marketing's job)

---

## Best Time to Engage

Post engagement has better reach if you engage within 2 hours of the original post. Monitor target accounts:
- Early morning (6–9am PT when they post)
- Mid-day (12–2pm PT)
- Evening (5–8pm PT)

Check lists 2–3x per day for maximum relevance.

