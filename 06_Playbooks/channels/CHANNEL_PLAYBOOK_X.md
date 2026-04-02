# CHANNEL_PLAYBOOK_X.md

**Purpose:** Complete X/Twitter strategy for outreach and signal discovery. Monitoring, engagement types, reply strategy, DM approach.

**When to Use:** For monitoring (daily 15-min scan), for founder/CEO outreach (if they're active on X), for building brand.

---

## When X Works Best

- **Monitoring signals** (watching founders discuss pain—see X_SIGNAL_WORKFLOW.md)
- **Founder/CEO level** (X is office hours for founders)
- **Quick engagement** (reply to their tweet vs. cold email)
- **Building brand** (sharing insights, engaging in community)
- **Real-time conversations** (announcing, discussing news)

When NOT to use X:
- Complete cold to unknown person (email better)
- Non-technical decision-maker (less likely on X)
- Formal first interaction (email more professional)

---

## Monitoring Approach

**Daily (15 min):**
1. Check your saved Twitter list of "AI/ML Leaders"
2. Scan for new posts from key founders/engineers
3. Note: product launches, hiring announcements, pain discussions
4. Don't engage yet—just capture signals (file to SIGNALS.md)

**Weekly (30 min, Friday):**
1. Search X for pain keywords: "hallucination," "LLM eval," "reliability testing"
2. Read top posts from past week
3. Identify opportunities to engage (see engagement types below)
4. Engage on 2-3 high-signal posts

See X_SIGNAL_WORKFLOW.md for deep dive on signal mining.

---

## Engagement Types (Best to Worst)

**Best: Thoughtful reply to their pain post** (builds relationship)
- Their post: "Deployed Claude but hallucinations are hitting production. How do you test for this at scale?"
- Your reply: "This is the biggest bottleneck most teams hit. The issue: manual testing doesn't scale past 10k requests/day. Have you thought about automation?" (adds insight, opens door to conversation)
- Why it works: You answer their question helpfully, mention solution angle without pitching
- Follow-up: They may reply, now you're in conversation. Then: "Happy to chat more—DM me"

**Good: Insight on relevant post** (shows you know the space)
- Their post: "Scaling LLM deployments is hard"
- Your reply: "The scaling pain usually comes from eval bottlenecks—testing slows as request volume grows. Are you hitting that?"
- Why it works: You show domain knowledge, ask clarifying question
- Outcome: They engage, or you DM after seeing interest

**Okay: Retweet with comment** (gets engagement, less targeted)
- Retweet their post with: "This is it. Most teams don't plan for eval scaling until it's too late."
- Why: Gets their attention, shows you care about topic
- Risk: Less personal than direct reply

**Bad: Cold mention in unrelated thread** (looks spammy)
- Random thread about AI startups
- Your reply: "This is why you need Braintrust" or "@[person] you should check us out"
- Why it fails: Unsolicited pitch, feels spammy, no value added

**Avoid entirely: Automated DMs, bot-like engagement** (looks fake)
- Auto-replying to keywords
- Engaging with every post in a hashtag
- Result: Muted or blocked

---

## Reply Strategy

**Before you reply:**
- Is this person in target market? (Yes = reply. No = skip)
- Is their pain relevant to what we solve? (Yes = relevant. No = pass)
- Can I add insight without pitching? (Yes = do it. No = don't)

**Good reply formula:**
1. **Answer their question or acknowledge their pain** (show you understand)
2. **Add specific insight** (show domain knowledge)
3. **Light question or open door** ("Have you thought about X?" or "Happy to discuss more")
4. **No pitch, no link, no product mention**

**Example good reply:**
- Their tweet: "Can't figure out how to evaluate GPT outputs at scale"
- Your reply: "The bottleneck is usually that manual testing hits max capacity around 10k requests/day. Then you need automation. Are you at that scale yet?"
- Why: Helpful (acknowledges their pain), shows domain knowledge (specific bottleneck), opens door (question), no pitch

**Example bad reply:**
- Their tweet: "Can't figure out how to evaluate GPT outputs at scale"
- Your reply: "You should check out Braintrust! We solve this. Link: [url]"
- Why: Spammy, unsolicited, pitchy, low engagement rate

---

## DM Approach (Use Sparingly)

**When to DM on X:**
- They engaged with your reply (now warmer)
- You had public conversation (already connected)
- Mutual follow/connection (some context)

**When NOT to DM:**
- Complete cold
- You've never interacted
- They seem inactive on X (don't waste their time)

**DM format (if you do reach out):**
- Reference your reply/conversation
- Keep it short
- Offer low-friction next step
- Example: "Hey [Name], enjoyed our exchange on X. Would be open to a brief chat about your eval approach sometime?"

**DM tone:** Casual, not formal. You're peer-to-peer on X, not "company to person."

**Rule:** Max 1 DM per contact unless they reply. Don't spam.

---

## Building Your Own Following

**Goal:** Share insights so prospects find you.

**What to post (1-2x per week):**
- Insights on eval, reliability, LLM challenges
- Case studies (anonymized)
- Thoughts on AI trends
- Observations from outreach research

**Example posts:**
- "We're seeing 'hallucination testing' become standard language in LLM teams. The pain is real, the solutions are sparse. 🧵"
- "Founder just told us: 'Manual eval testing stops working around 10k requests/day.' Wish they'd built for automation earlier."
- "The gap between 'deploying LLMs' and 'deploying them reliably' is widening. Most teams feel this gap at scale."

**Engagement metrics:**
- Retweets/likes = reach
- Replies = conversation (valuable)
- DMs from prospects = gold (they came to you)

**Rules:**
- Be authentic, not salesy
- Share lessons, not product
- Engage with others' content (give before you ask)
- Post consistently > posting rarely

---

## Complete X Outreach Sequence

1. **Day 1: Monitor**
   - Founder posts: "Struggling with hallucination testing at scale"
   - Flag in SIGNALS.md

2. **Day 1: Reply to post** (thoughtful, helpful)
   - "This is the exact pain we see at scale. The bottleneck: manual testing max capacity is ~10k requests/day. Do you have automation in place?"

3. **Day 2-3: Monitor their reply**
   - If they engage: note in SIGNALS.md, consider follow-up
   - If no reply: move on (don't double-reply without reason)

4. **Day 3+: If they engaged with you**
   - Email them (you found company, can research email)
   - Reference your X conversation: "Quick follow-up from our X exchange..."
   - Now you have context, warmer than cold email

5. **Day 5+: If email sent, no response**
   - DM on X (if appropriate): "Hey [Name], enjoyed our discussion on hallucination testing. Worth a brief chat?"
   - Now you have 2 channels, they're warmer on both

---

## Example Conversation

**Scenario:** Founder posts about eval challenge on X

**Founder's post:** "Building eval infrastructure in-house is burning months. Has anyone found good solutions?"

**Your reply (public):**
"The issue most teams hit: custom in-house evals become unmaintainable at scale. By 100k requests/day, you need to choose between maintenance + quality. Are you hitting scaling challenges yet?"

**They reply:** "Exactly this. We're at 50k requests/day and manual testing is breaking."

**Your follow-up (public):**
"That's the threshold. Past 50k, automation becomes critical. Worth a quick conversation about how teams solve this?"

**Their reply:** "Yeah, let's chat"

**Next step:** DM: "Hey—let's take this offline. Free for a call this week?" or Email: Send to their company with context of X conversation.

---

## Common Mistakes

- **Cold pitching on X** — "Check out Braintrust!" = muted/blocked. Add value first.
- **Spammy engagement** — Like 20 posts in an hour = looks like bot. Engage selectively.
- **Replying to everyone** — You can't DM or meet with 50 X users. Focus on 5-10 high-signal ones.
- **Not connecting to email** — Had great X conversation, didn't get their email. Lost them when you move channels.
- **Talking too much** — Your reply is 5 tweets long = no one reads it. Keep replies to 1-2 short sentences.
- **Engaging but never converting** — You reply to 30 posts but never DM or email. Engagement without intent = wasted time.
- **Not monitoring your own mentions** — Prospect replies to you, you miss it. Check X regularly.

---

## Output Format

Log X engagement:

```
X OUTREACH — [Date]

PROSPECT: [@handle, Name, Company if known]
SIGNAL: [What they posted about]

ENGAGEMENT:
- Post/reply date: [Date]
- Your reply: [Brief summary]
- Their response: [Yes/No]

NEXT ACTION:
- Email sent: [Yes/No, date]
- DM sent: [Yes/No, date]
- Status: [Signal captured/Conversation started/Moving to email]
```

---

## Maintenance Notes

- **Daily habit:** 15-min X scan in morning or Friday afternoon. Low-lift, high-signal capture.
- **Batch engagement:** 2-3 high-signal posts per week. Quality > quantity.
- **Own content:** Post 1-2x per week on pain you observe. Builds credibility, attracts inbound.
- **Relationship focus:** X is for building peer relationships, not direct sales. Shift to email/LinkedIn for closing.
- **Account management:** Follow top 20 key accounts. Unfollow if they're not signaling. Stay signal-focused.
- **Etiquette:** Reply once per thread. Don't argue. Don't pitch unsolicited. Build trust.
