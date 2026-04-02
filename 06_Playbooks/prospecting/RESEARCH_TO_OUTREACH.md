# RESEARCH_TO_OUTREACH.md

**Purpose:** Convert company research into a personalized, high-intent cold outreach message. Go from "company profile" to "ready to send email" in a structured way.

**When to Use:** After you've identified a target company and before sending any first message.

**Inputs Needed:**
- Company name (you're researching)
- CUSTOMER_LANGUAGE.md (pain phrases to look for)
- MESSAGING.md (Braintrust value prop)
- EMAIL_WRITING.md (framework for writing)
- Prospect title/name (if known)

---

## Steps

1. **Research Company: What Do They Do?** (5 min)
   - Website: product, customers, main use case
   - Example: "StartupXYZ: LLM-powered customer support tool, 30 enterprise customers"
   - Note: Who's the decision-maker for this product? (ML lead? CTO? VP Product?)

2. **Identify Their AI Usage** (3 min)
   - Are they building with LLMs? (job postings, blog, tech stack)
   - Are they deploying LLMs? (publicly mentioned customers)
   - Are they evaluating between models or tools? (recent hires, funding)
   - File: Note in SIGNALS.md with signal type (building/deploying/evaluating)

3. **Spot Pain Points** (5 min)
   - Search LinkedIn/Reddit/X: what problems are they mentioning?
   - Check their blog: what technical challenges do they discuss?
   - Look at job postings: what gaps are they hiring to fill? (e.g., "ML reliability engineer" = eval maturity gap)
   - Example pain: "We're deploying GPT-4 to 500k users but have no way to catch hallucinations in production"
   - File: Add pain language to CUSTOMER_LANGUAGE.md if new

4. **Identify Stakeholders** (5 min)
   - Who owns the AI/ML quality problem? (VP ML, ML lead, ML Ops, Principal Engineer)
   - Who's influencing that decision? (CTO, VP Product)
   - Use LinkedIn: search "[Company] ML" or "[Company] AI"
   - Preference: find 2-3 potential contacts at different levels

5. **Find Your Hook** (3 min)
   - Hook = intersection of (their pain) + (Braintrust solves it)
   - Example: "They're deploying LLMs without hallucination testing" → Hook: "We help you test reliability at scale"
   - Bad hook: "You use AI" (too generic)
   - Good hook: "Your ML models are deployed to 500k users without automated eval coverage" (specific, shows research)

6. **Choose Channel** (1 min)
   - Cold email if no connection (CHANNEL_PLAYBOOK_EMAIL.md)
   - LinkedIn DM if warm intro exists or profile is discoverable (CHANNEL_PLAYBOOK_LINKEDIN.md)
   - X reply if founder is active there (CHANNEL_PLAYBOOK_X.md)
   - Strategy: Email first, LinkedIn if no response in 5 days

7. **Draft Message Using Templates** (8 min)
   - Use EMAIL_WRITING.md framework (opener, insight, value, CTA)
   - Opener options:
     - "I noticed you deployed GPT-4 to your support product..."
     - "Saw you're hiring for ML reliability engineer..."
     - "Read your post on LLM hallucinations—we're solving this for..."
   - Keep <100 words
   - CTA: "15-minute chat about your eval approach?" (not "buy our product")
   - Draft in doc, don't send yet

8. **Personalize Ruthlessly** (3 min)
   - Replace generic with specific: "You deploy LLMs to users without eval coverage" vs. "Your company uses AI"
   - Add detail only you'd know: "Saw your hiring post for ML Ops lead" (shows you researched)
   - Remove corporate jargon: "Test your models reliably" not "comprehensive evaluation infrastructure"

9. **Review Against Messaging Principles** (2 min)
   - Does it explain: what problem we solve?
   - Does it show: you researched them?
   - Does it ask: for a small commitment (call, chat)?
   - Does it avoid: asking for a demo, asking them to visit website, selling?
   - Red flags: email > 120 words, no personalization, no clear problem statement

10. **Send & Log** (1 min)
    - Send email or DM
    - Log in ACTIVE_CONTEXT.md: "[Prospect name] - [Company] - [pain hook] - [sent date]"
    - Set calendar reminder for follow-up (CHANNEL_PLAYBOOK_EMAIL.md follow-up cadence)

---

## Example Walkthrough

**Company:** Anthropic (safety research)

**1. What do they do?** AI safety research, building Claude, leading in responsible AI

**2. AI usage:** Build and deploy LLMs. Heavy internal evaluation.

**3. Pain research:**
- Job postings: "Safety researcher," "Evaluation specialist," "Reliability engineer"
- Signals: Recent posts about hallucination, RLHF, alignment

**4. Stakeholders:**
- VP of Safety (high-level)
- Head of Evaluation
- ML researchers on safety team

**5. Hook:** "You're evaluating Claude's safety against adversarial inputs. We automate reliability testing at scale."

**6. Channel:** Cold email to safety research lead (found on LinkedIn)

**7. Draft:**
```
Subject: Automating safety testing for large language models

Hi [Name],

I saw your recent post on reliability testing for language models. We help research teams automate eval pipelines for LLMs—catching edge cases at scale before deployment.

Given your focus on safety, thought a 15-minute conversation on our approach might be interesting.

Free tomorrow or Wednesday?

Kensington
```

**8. Personalize:** "I saw your post on [specific recent post title]" → shows you follow their work

**9. Review:** <80 words, shows research, clear pain, specific CTA, no corporate speak ✓

**10. Log:** "Sarah Chen (Anthropic) - Safety eval signals - Hook: automate safety testing - sent April 1"

---

## Common Mistakes

- **No real research** — "You're a company that uses AI" outreach. No one responds to generic.
- **Wrong stakeholder** — Emailing the CEO instead of the ML lead. Wrong decision-maker.
- **Hook is too broad** — "You probably want to evaluate your models" vs. "Your Claude deployment lacks automated reliability testing"
- **Message is too long** — >120 words = not read. Keep it short.
- **All email, no other hooks** — If they don't reply to email, no LinkedIn follow-up. Use multi-channel (email → LinkedIn → email).
- **Not logging signals** — You research 10 companies, forget which ones mentioned "hallucination" pain. Doesn't scale.
- **Asking for demo in first message** — They don't know you. Ask for 15 min call, not a product demo.

---

## Output Format

Use this template for each prospect:

```
=== PROSPECT RESEARCH TO OUTREACH ===

COMPANY: [Name]
DECISION-MAKER: [Name, Title]
PAIN HOOK: [Specific pain we spotted]
SIGNAL LEVEL: [High/Medium/Low]

MESSAGE:
[Email draft, <100 words]

CHANNEL: [Email/LinkedIn/X]
FOLLOW-UP: [Cadence from CHANNEL playbook]

LOGGED TO ACTIVE_CONTEXT: [Yes/No, with date]
```

---

## Maintenance Notes

- **Update CUSTOMER_LANGUAGE**: Every 10 outreaches, review pain phrases. Which ones resonated? Update doc.
- **Update SIGNALS.md**: As you research, log signal types (founder activity, hiring, product launches).
- **Scale through templates**: After 20 outreaches, start creating templates for high-performing hooks.
- **A/B test openers**: Track which hooks (hiring vs. product mention vs. customer research) perform best. Update EMAIL_WRITING.md with winners.
- **Quarterly refresh**: Re-research top 20 prospects. Pain evolves. Your research should too.
