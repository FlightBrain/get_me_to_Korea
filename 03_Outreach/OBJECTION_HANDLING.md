# Objection Handling

## Purpose
Real responses to common objections. These aren't canned scripts—they're positioning guides. Customize each response with context from your conversation.

## How to Use
When you hear an objection, find it below and use the response as a template. Read the reasoning so you understand the positioning, then write your own response in the voice of the conversation. Most objections are actually opportunities to dig deeper, not roadblocks.

---

## Objection 1: "We build our own evals"

**What they mean:** "We don't want a black-box tool. We need to own the logic."

**The positioning mistake:** Telling them Braintrust owns the eval logic. (Wrong. They do.)

**Right response:**

"That's actually really healthy. Most teams building serious agents do the same—at least initially. Question we usually explore: as your agent changes (new models, new tools, new routing logic), do your evals stay in sync, or do you find yourself rewriting them constantly? And when you get a new signal from customers (that hallucination case), how long does it take to add it to your test suite?"

**Why it works:** You're not trying to convince them not to build evals. You're asking about the cost (time, drift, maintenance) of owning it. Usually their answer is "we're probably not keeping them in sync well" or "adding new tests takes two weeks."

**Follow-up:** "Braintrust isn't replacing your eval logic. It's the harness—the thing that makes it easier to iterate on your logic without the infrastructure overhead. You'd still own every eval rule."

---

## Objection 2: "We use [competitor]"

**What they mean:** "We've already bought something" or "We're not looking to switch."

**The positioning mistake:** Defending Braintrust as "better" (commoditizes the conversation).

**Right response:**

"Totally makes sense. Curious—how's it working for you? Most teams tell us they start with [tool] because it seemed comprehensive, then realize it's focused on [specific angle—like unit testing or regression testing]. What are you using it for?"

**Why it works:** You're assuming their tool is useful for something (it probably is). You're digging into what use case it covers. Usually you find that they're using it for LLM testing but not agent orchestration, or they're testing individual model calls but not end-to-end workflows. That's your opening.

**Follow-up:** (After they describe what they use it for) "Got it. So you're not actually testing [the thing they're missing], you're testing [what they have]. Most teams need both. A lot of teams use [competitor] for X and bolt Braintrust on for Y."

**If they're happy with their tool:** "If it's working well, no reason to change. Happy to stay in touch as your use cases evolve—sometimes teams realize they need measurement across tools, which is where we come in."

---

## Objection 3: "This isn't a priority right now"

**What they mean:** Could be "we're not hiring for this," "other things are on fire," or "I don't see the problem yet."

**The positioning mistake:** Trying to convince them it should be a priority. (Won't work.)

**Right response:**

"Understood. Just out of curiosity—when you do ship the next agent iteration, how do you know if it's better? Like, do you have a process for that, or is it more ad hoc?"

**Why it works:** You're asking a genuine question. If they have a process, you learn what it is (usually manual). If they don't, you plant a seed: "that's actually when most teams realize they need one—right after shipping breaks something."

**Follow-up:** "Usually it becomes a priority after one of two things: either an eval catches something that would've broken in production, or you ship something and the feedback loop takes three weeks instead of three days. When either of those happens, we're usually a good conversation."

**If they say it'll be higher priority later:** "Good to know. Worth a check-in in [quarter/timeframe]. Eval infrastructure early usually saves a lot of pain later."

---

## Objection 4: "We're too early stage for this"

**What they mean:** "We don't have budget" or "We're not at scale yet" or "We're still proving the concept."

**The positioning mistake:** Arguing that early stage teams need measurement most (true but unconvincing).

**Right response:**

"Fair. Most teams say that right up until they ship something that breaks. Then they realize they needed to test it. How many agent iterations are you planning to do before you call it "done"?"

**Why it works:** You're asking a real question. Their answer is usually "we have no idea" or "we're planning to iterate 3-4 times before going to customers." That's your opening: measurement is what lets you iterate 3-4 times without something catastrophic breaking.

**Follow-up:** "Most early stage teams find it's actually faster to build with measurement from day one than to bolt it on later. But I get it—if this is still just exploratory, no reason to invest yet. Come back to us when you decide to ship?"

**If budget is the real issue:** "Totally understand. One option: we work with some early stage teams on a proof-of-concept basis—basically, you pay nothing, you get access, and you help us understand what early stage teams actually need. If you're interested, worth a conversation?"

---

## Objection 5: "What does Braintrust actually do?"

**What they mean:** Could be genuine confusion or a soft "I don't think this is relevant."

**The positioning mistake:** Launching into a 10-minute product demo. (Kills the conversation.)

**Right response:**

"Short version: you give us access to your agent (code or API), you define what 'good' looks like (a few test cases or quality metrics), and we run your agent against those tests every time you make a change. You get a dashboard showing whether your changes made things better or worse. Most teams use it as part of their deployment pipeline or to catch regressions before they hit customers."

**If they want more:** "What part are you most curious about? The infrastructure side, how the testing works, or how teams usually structure their evals?"

**Why it works:** You're giving them the bones in two sentences. You're not overselling. You're asking what they actually want to know.

**Follow-up (if they say "how teams structure evals"):** "Most teams start with two things: a set of test cases that represent 'what good looks like' in your domain, and a scoring function that tells us if an agent succeeded or failed. From there, you build. Some teams measure accuracy, some measure safety, some measure cost. It varies by what actually matters for your use case."

---

## Objection 6: "We don't have time for a long sales cycle"

**What they mean:** "I'm busy, make this fast" or "If this doesn't move quickly, I'll forget about it."

**The positioning mistake:** Pushing a demo or call immediately. (Annoying.)

**Right response:**

"Totally fair. What usually works: I send you a one-pager on how this works, you spend 5 minutes on it. If it looks relevant, we grab 15 minutes next week. If not, no worries. How does that sound?"

**Why it works:** You're respecting their time. You're not pushing them into a call. You're giving them an easy next step. Most busy people will say yes to this.

**If they bite:** Send a one-pager (not a long-form deck) within the hour. One page, visual, shows how it works and one customer example.

---

## Objection 7: "We're already shipping, measurement can come later"

**What they mean:** "We're in launch/go-to-market mode. Infrastructure is a later problem."

**The positioning mistake:** Saying "but you need it now." (They know what they're doing.)

**Right response:**

"Makes sense—launch is the right priority. Quick thought though: once you ship to customers, the feedback loop becomes your source of truth. Most teams realize too late that systematic measurement is what lets you act on that feedback fast instead of slow. Not saying you need it now, but might be worth thinking about for the day-after-launch phase."

**Why it works:** You're not trying to steal attention from launch. You're positioning Braintrust as a "post-launch" tool, which is accurate for many teams. You're planting the idea that they'll need this soon.

**Follow-up:** "Once launch settles and you start iterating based on customer feedback, good time to revisit this. Want to reconnect in a few weeks?"

---

## Objection 8: "Can't you just use OpenAI Evals / LangSmith / [other tool]?"

**What they mean:** "Why do I need another tool?"

**The positioning mistake:** Trashing their tool. (Annoying and wrong.)

**Right response:**

"They're useful for what they do. OpenAI Evals is good for LLM-level testing, LangSmith is good for observability. Braintrust is built for the agent level—testing your orchestration logic, routing decisions, end-to-end workflows. A lot of teams use all three. What's your current testing look like?"

**Why it works:** You're not saying those tools are bad. You're saying they solve different problems. You're repositioning Braintrust as a layer above theirs.

**Follow-up:** "If you're happy with what you have, great. Most teams we work with do end up using multiple tools. But if you find your current setup doesn't catch agent-level regressions well, worth a conversation."

---

## Objection 9: "Your price is too high"

**What they mean:** Could be "I don't see the value" or "I don't have budget" or "I want to negotiate."

**The positioning mistake:** Immediately offering a discount. (Trains them to negotiate, undercuts value.)

**Right response:**

"I get it. Usually how we think about it: if this tool saves your team 10 hours a week (one engineer half-time on manual testing), what does that engineer's time cost you? That's usually $50k/year minimum. Most teams get ROI within the first two months. But if budget is tight right now, totally understand."

**Why it works:** You're translating cost into value (engineer time). You're not apologizing for price. You're acknowledging budget constraints without caving.

**If they push:** "What's the budget you're working with? Maybe we can find a package that fits." (But don't discount your core product—bundle features or usage instead.)

---

## Objection 10: "I need to talk to my team / get buy-in"

**What they mean:** Usually "this makes sense but I need consensus" or sometimes "I need an excuse to say no."

**The positioning mistake:** Offering to do a massive team presentation. (Overkill.)

**Right response:**

"Good call. Usually what helps: 10-minute call with you and whoever the main stakeholder is (your CTO or Head of AI?). We talk through your situation, how other teams are solving this, and whether it makes sense for you. No pressure—just exploring. Would that be useful?"

**Why it works:** You're not trying to demo for 10 people. You're asking for a small, focused conversation. Usually they say yes.

**Follow-up:** Get the call scheduled, prep based on what you learned about their team, and keep it short.

---

## Red Lines (Things That Usually Backfire)

- **"But you really should..."** (Condescending, killed the sale.)
- **"Your current approach won't scale."** (Defensive, wrong tone.)
- **"Most of your competitors use us."** (Pressure play, backfires with confident teams.)
- **"This will only take 15 minutes."** (You're lying, they know it.)
- **"Let me show you a demo anyway."** (Pushing past their objection, annoying.)
- **Immediate discount offers.** (Trains them to shop price, not value.)

---

## The Real Principle

Most objections aren't "no." They're "not yet" or "not clear" or "not convinced this is for me." Your job is to:

1. Understand which one it is
2. Acknowledge it honestly (no pushback)
3. Give them information they're actually missing
4. Set a clear next step or move to nurture

The best sales conversations sound like two people thinking together, not one person selling to another.

