# Reddit Index

## Purpose
Track Reddit monitoring for signal hunting and community learning. Reddit is best used for research and low-pressure engagement, not direct outreach. Key is listening and understanding community concerns.

## How to Use
1. Monitor key subreddits 2–3x per week
2. Identify signals (hiring, product launches, pain points)
3. Engage thoughtfully on relevant threads (expertise, not sales)
4. Use insights to inform outreach on other channels
5. Log signals and community patterns in sections below

---

## Subreddits to Monitor

### **Agent-Focused Communities**
- **r/MachineLearning** (general, high signal)
- **r/LangChain** (LangChain agent framework)
- **r/AutoGPT** (AutoGPT community)
- **r/OpenAI** (general OpenAI + agent discussion)

### **LLM-Focused Communities**
- **r/LanguageModels** (general LLM discussion)
- **r/Prompt_Engineering** (prompting + agent behavior)
- **r/Claude** (Anthropic Claude discussions)

### **Infrastructure/DevTools**
- **r/webdev** (web developers building with agents)
- **r/learnprogramming** (learners asking about agents)

### **Business/Startup Communities**
- **r/startups** (founders asking about AI products)
- **r/SaaS** (SaaS founders using agents)
- **r/entrepreneur** (building AI businesses)

**Note:** Don't spend much time in r/OpenAI or general AI subreddits—too much noise. Focus on agent-specific and framework-specific communities.

---

## Signal Types to Watch

### **High-Intent Signals**
- **Hiring:** "We're hiring a [ML/AI] engineer" or "Looking for help with agent orchestration"
- **Building:** "We're building [agent product]" or "Started a company doing agents for [industry]"
- **Struggle:** "How do you test agents reliably?" or "We shipped an agent and now [problem]"
- **Evaluation:** "How do you know if your agent improved?" or "Testing agents at scale?"

**Example thread:**
```
Title: "Built a customer service agent. How do we know it's actually better than v1?"

Signal: Company has shipped a production agent and just realized they need measurement.
Action: Note the company name/person, don't engage directly. Might be good cold outreach target (they just realized the problem).
```

---

### **Medium-Intent Signals**
- **Exploration:** "Trying to understand how to build agents"
- **Framework adoption:** "Should we use LangChain or build our own?"
- **Integration:** "How do you integrate agents with [existing system]?"
- **Pain point discovery:** "Our agent keeps doing [wrong thing]"

---

### **Low-Intent Signals** (Research value)
- **General discussion:** "What's the future of agents?"
- **Student questions:** "Learning about agents, what should I know?"
- **Industry commentary:** "I think the agent market will..."

---

## Engagement Strategy

### **Rule 1: Help First**
Reddit is not a sales channel. You're here to help people solve problems and learn. Braintrust never mentioned unless asked directly.

**Bad engagement:** "You should use Braintrust for this"

**Good engagement:** "Most teams solve this by [approach]. Here's what we've seen work."

---

### **Rule 2: Solve the Problem, Not the Symptom**
When someone posts about agent testing, they might not realize the real problem is *measurement infrastructure*. Help them think deeper.

**Example:**
```
Their post: "How do we test if our agent hallucinated less in v2?"

Your response: "That's the right question. Most teams ask it backwards—they ask 'did it hallucinate?' instead of 'on this specific task, did the model pick the right tool?' The second one is measurable. The first is vague.

If you're building a test suite, think about specific task outcomes, not general hallucination."
```

---

### **Rule 3: Build Authority Quietly**
Helpful, specific answers build your reputation on Reddit. People notice. Some will DM you, some might search for your username later.

---

### **Rule 4: One Good Answer Per Thread**
Don't spam the thread with multiple replies. One solid, helpful answer is better than five comments.

---

## Engagement Templates

### **Struggling with Test Coverage**
*When someone posts: "How do you test agents thoroughly?"*

```
The challenge is that "thorough" depends on your task. For a customer service agent, you might test:
1. Does it classify the request correctly?
2. Does it pick the right action/tool?
3. Does it handle edge cases (unknown requests, etc)?

Most teams miss #2—they test the model's response in isolation but not whether the agent's *orchestration logic* made the right decision.

What kind of agent are you building? That changes what "thorough" looks like.
```

**Why it works:** You're helping them think about the problem systematically. You're not selling. You're adding value.

---

### **Shipping and Discovering Problems**
*When someone posts: "We shipped our agent and it's worse than we thought. How do we fix this?"*

```
Ouch. Couple of things most teams discover here:

1. Pre-launch evals probably didn't catch real-world distribution. Users do things you didn't test for.
2. Measurement is hard post-launch because you're sifting through user feedback, not running structured tests.

Quick fixes:
- Log every agent decision + outcome
- Sample failures, categorize them (hallucination? wrong tool? right tool, wrong params?)
- Build tests for those specific patterns before shipping the next version

What kind of agent are you running? The fix is different if it's customer-facing vs. internal.
```

**Why it works:** You're giving them a framework for thinking about the problem. You're not saying "you should have done evals." You're helping them fix it now.

---

### **Framework Adoption Question**
*When someone asks: "Should we use LangChain or build our own?"*

```
Depends on your constraints. LangChain is good if:
- You want to move fast and don't mind some abstraction
- You're not optimizing for latency/cost heavily
- You want to experiment with multiple models

Build your own if:
- You have specific performance requirements
- You want maximum control over behavior
- You're planning to optimize for a specific use case heavily

Either way, you'll hit the same measurement problem: how do you know your agent is actually better after a change? That's where most teams struggle regardless of framework.
```

**Why it works:** You're giving them a real framework. You're acknowledging that measurement is a separate, harder problem. You're planting a seed about a real pain point.

---

## Phrase Patterns to Capture (Signal Hunting)

When scanning Reddit, search for these exact phrase patterns:

**Testing/Eval signals:**
- "how do you test agents"
- "how do I know if my agent got better"
- "agent reliability"
- "testing at scale"
- "eval for agents"

**Shipping signals:**
- "shipped our agent"
- "putting agents in production"
- "agent went live"
- "customers using our agent"

**Struggle signals:**
- "agent keeps doing X wrong"
- "can't get the agent to"
- "agent is too slow"
- "agent is hallucinating"

**Hiring signals:**
- "hiring for AI engineer"
- "looking for help building agents"
- "need someone to work on agents"

**Use search function in each subreddit to find these phrases weekly.**

---

## Community Patterns to Note

### **By Subreddit**

**r/MachineLearning:**
- Highly technical, research-focused
- Engage with papers, frameworks, theory
- Less direct business/hiring conversation
- Signal value: Moderate (research happening, might lead to product later)

**r/LangChain:**
- Implementation-focused
- Lots of "how do I build this" questions
- Active community helping each other
- Signal value: High (people actively building with agents)

**r/startups:**
- Business/market focused
- "Building an AI company to do X" posts
- Hiring questions common
- Signal value: High (founders/early-stage companies)

---

## Signal Tracking Template

### **Weekly Reddit Signal Log**
| Date | Subreddit | Thread Title | Signal Type | Company/Person | Your Engagement? | Followup Action |
|---|---|---|---|---|---|---|
| 2026-04-01 | r/LangChain | How do we test agent v2 vs v1? | Testing problem | Unknown startup | Helpful response | Monitor for future |
| 2026-04-03 | r/startups | Building an eval platform for LLMs | Hiring/Competitor | [Company] | None (competitor) | Keep eye on |

---

### **Community Insights Log**
| Date | Insight | Subreddit | Relevance | Action |
|---|---|---|---|---|
| 2026-04-01 | Most LangChain users are testing manually in production | r/LangChain | High | Feeds into messaging about measurement pain |
| 2026-04-02 | Startups often don't think about eval infrastructure until post-launch | r/startups | High | Informs objection response: "Too early stage" |

---

## Do's and Don'ts

**Do:**
- Answer questions helpfully and specifically
- Reference your experience/what you've seen work
- Ask clarifying questions to understand their problem better
- Provide frameworks for thinking about problems
- Engage 2–3x per week on good signal threads

**Don't:**
- Pitch Braintrust (unless directly asked)
- Answer questions vaguely or generically
- Spam the same thread with multiple responses
- Engage on arguments or heated discussions
- Pretend to be someone you're not (be authentic)
- Mention competitors negatively
- Link to Braintrust (unless the question is specifically about our product)
- Engage with obvious astroturf/marketing posts

---

## When to Move to Outreach

**If you see a specific hiring signal or company mention:**
1. Find their Reddit username in the thread
2. Check their post history (are they the founder/CTO or just an engineer?)
3. If it looks like a real signal (not just someone asking hypothetically):
   - Search the company name online
   - Find them on LinkedIn
   - Start outreach on LinkedIn/email (don't DM on Reddit—weird context)

**Example:**
```
Reddit post: "We're building a customer service agent at [Company]. Testing is becoming a pain."

Your research:
1. Find [Company] on web
2. Find the person on LinkedIn
3. Send them a LinkedIn connection or email with specific reference to their Reddit comment
```

---

## Time Investment

**Recommended cadence:**
- 30 minutes, 2–3x per week scanning subreddits for signals
- 10 minutes per good signal thread to craft a helpful response
- 5 minutes weekly to log insights

Total: ~2–3 hours per week

**Not worth:** Hunting for discussions just to build karma or visibility. Only engage if you have something genuinely helpful to say.

---

## Red Lines

- Don't use Reddit as a promotion channel
- Don't spam "Check out Braintrust" in unrelated threads
- Don't be preachy or condescending to people asking beginner questions
- Don't pretend to not work in the space (be honest about your perspective)
- Don't engage with competitor products negatively
- Don't dox people or share their info elsewhere
- Don't use Reddit DM as primary outreach channel (email/LinkedIn is better)

