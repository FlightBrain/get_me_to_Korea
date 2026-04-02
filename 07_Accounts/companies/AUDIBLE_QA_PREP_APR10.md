# AUDIBLE Q&A SESSION PREP
**Date:** April 10, 2026, 12:30 PM PT
**Duration:** 30-45 min
**Attendees:** Audible contact (TBD), Walton Stephens (Braintrust AE), Kensington Belza (Braintrust SDR)

---

## COMPANY SNAPSHOT

**Audible** (Amazon subsidiary). World's largest audiobook platform with 1M+ titles, 100M+ subscribers. Core business: subscription audiobooks (Audible+), digital publishing, narration.

**AI Footprint:**
- Virtual Voice: AI-generated narration (competing with human audiobook narrators)
- Content recommendation engine (60%+ engagement driver)
- Search/discovery personalization (genre, listening history, user preference)
- Audio content moderation and compliance at scale
- Emerging: agentic workflows for content creation, customer service

**Strategic Fit:** Audio domain has unique AI eval challenges (naturalness, pacing, accent sensitivity, language variation). Braintrust built for this. Text-based eval tools don't capture audio quality dimensions.

---

## KEY STAKEHOLDERS & CONTEXT

**Razib Rahman** (Engineering Director)
- Posted PG WIN signal Apr 1 (active, thinking)
- Owns voice/audio infrastructure and production quality
- Entry point: Engineering rigor for production voice AI

**Pranav S** (Sr PM, Agentic AI)
- Direct alignment with our product positioning
- Owns "agentic AI" roadmap (agents for recommendations, discovery, content)
- Key contact for broader AI strategy buy-in

**Harshul Jain** (Product/Engineering)
- Did NOT attend PM Trace (signal: different focus or lower involvement in product narrative)
- Secondary stakeholder, but may have content/publishing angle

**Amazon Relationship:** Parent company = compliance/security gates, but also access to AWS infrastructure and enterprise budget.

---

## DISCOVERY QUESTIONS (6 Core)

**Goal:** Establish Audible's AI eval maturity, pain points in audio domain, and decision-making structure.

1. **Voice Quality & Naturalness:**
   "You're shipping Virtual Voice across millions of hours. How do you evaluate whether AI-generated narration matches reader expectations? What dimensions matter most: accent fidelity, pacing, emotional tone?"

2. **Recommendation AI Evaluation:**
   "Content recommendations drive 60%+ engagement. Walk us through how you currently measure whether your recommendation agents improve discovery, especially for long-tail content."

3. **Cross-Language & Cross-Genre:**
   "How do you evaluate AI quality across 40+ languages and diverse genres (romance, sci-fi, educational)? Do audio-specific considerations change your eval approach?"

4. **Production Velocity:**
   "How fast do you iterate on voice and recommendation changes? Do your current eval methods slow down deployment or enable faster iteration?"

5. **Amazon Integration:**
   "Are your audio AI systems integrated with Amazon's broader AI initiatives (Alexa, AI agent work)? Does that create eval alignment requirements?"

6. **Decision-Making Structure:**
   "Who owns sign-off on 'AI quality is good enough to ship'? Are there different stakeholders for voice quality vs. recommendation accuracy vs. compliance?"

---

## RELEVANT CASE STUDIES (Context, Not Pitch)

**Navan (Voice AI)** - https://braintrust.dev/customers/navan
- Challenge: Evaluate voice quality across hundreds of daily calls
- Result: 0.9+ F1 score on intent detection, real-time feedback loop
- Parallel: Audible's Virtual Voice needs similar rigor at scale
- Angle: "They run 100x more calls than most companies. We helped them build repeatable eval for production voice."

**Coursera (EdTech/AI Grading)** - https://braintrust.dev/customers/coursera
- Challenge: Evaluate whether AI grading matches educator expectations across diverse subjects
- Result: 45x more feedback to learners, 90% educator satisfaction
- Parallel: Audible's content recommendation needs to match reader preferences across genres
- Angle: "Like education, audio recommendations are deeply subjective. We help you measure subjective preference at scale."

**Notion (Scale & Speed)** - https://braintrust.dev/customers/notion
- Challenge: Deploy AI across 70 engineers, <24hr iteration cycle
- Result: Reduced time-to-confidence from weeks to hours
- Parallel: Audible likely needs to scale audio AI across production infrastructure
- Angle: "If you're shipping narration changes weekly, you need eval that doesn't bottleneck deployment."

---

## AUDIBLE'S LIKELY OBJECTIONS & COUNTERS

**Objection:** "We're part of Amazon. We use AWS tools (SageMaker, Lookout) for ML evaluation."
**Counter:** "AWS tools are language/general-ML first. For audio agents, you need eval that captures domain-specific quality dimensions: naturalness, pacing, emotional tone, language-specific prosody. That's where general tools miss. We built specifically for audio and agentic workflows."

**Objection:** "We have internal data science teams. Why do we need external eval?"
**Counter:** "Internal teams are great for infrastructure. But eval is an organizational bottleneck: you need fast, repeatable feedback loops that non-ML teams (narrators, content editors, product managers) can understand and trust. That's not about data science—it's about decision velocity and stakeholder alignment."

**Objection:** "We need to check with Amazon security/compliance."
**Counter:** "Understood. Let's start by showing you how our platform works in a non-sensitive sandbox (we can use your own sample data if needed). Once your security team reviews, we can move fast. Most Amazon subsidiaries move quickly once eval value is clear."

**Objection:** "Our AI is mostly recommendation engines, not generative. Does Braintrust fit?"
**Counter:** "Absolutely. Agentic recommendation systems are harder to eval than generative models because preference is subjective and multi-dimensional. We excel at subjective eval (we built for voice AI, edu AI, content platforms). That's your constraint."

**Objection:** "We need to see ROI. What's the payback?"
**Counter:** "Faster iteration on your recommendation and voice AI = 2-4 week velocity gains per release cycle. At your scale, that's 10-20 faster experiments per quarter. Your engineering time + reduced bias in eval decisions = 3-6 month payback. But really, it's about confidence to ship. Do you want to know if Virtual Voice is ready, or do you want to guess?"

---

## SESSION STRATEGY

**Opening (2 min):** Acknowledge Razib's PG WIN signal, establish we understand Audible's unique audio AI challenges.

**Discovery (15-20 min):** Ask questions in this order: voice quality, recommendation accuracy, cross-language/genre, velocity, Amazon integration, decision-making. Take notes on which dimension they care most about.

**Positioning (5-10 min):** Map their pain to one relevant case study (likely Navan for voice, Coursera for recommendations). Keep it specific to audio domain.

**Next Step (2 min):** Propose narrow pilot: "Let's start with voice quality eval on a small set of Virtual Voice samples. We'll show you dashboard, you'll see where your narration misses, we'll validate approach. Then we expand if it works." Get Walton's commit on timeline.

**Close:** "Pranav and Razib owning agentic AI + voice infrastructure is perfect alignment. Let's get Pranav and Harshul in a follow-up to scope what 'ready to ship' actually means for your roadmap."

---

## PRE-CALL CHECKLIST

- [ ] Confirm attendee names and titles (update above)
- [ ] Review Navan case study details (voice quality dimensions)
- [ ] Prepare 2-3 sample audio eval questions (examples of subjectivity in audio)
- [ ] Walton confirms timeline for follow-up if positive signal
- [ ] Kensington preps Audible-specific metrics example (e.g., "naturalness score" across accents)
- [ ] Have laptop ready for screen share if they want to see dashboard concept

---

## POST-CALL ACTIONS

- [ ] Update audible.md with conversation notes + next steps
- [ ] Add any new stakeholders to account file
- [ ] Schedule follow-up per this call's outcome
- [ ] Log in PG tracker with signal strength
- [ ] Send warm follow-up email (info drop required) within 24 hours

---

**Owner:** Kensington Belza
**AE:** Walton Stephens
**Last Updated:** 2026-04-02
**Status:** Ready for call prep review
