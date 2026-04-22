---
entity: account
company: Expedia
ae: Walton Stephens
icp_fit: High
stage: Active
last_updated: 2026-04-22
ingested_from: [07_Accounts/companies/expedia.md, 01_Memory/working/ACTIVE_CONTEXT.md]
---

# Expedia

## ICP Fit
**Score:** High
**Why:** Enterprise tech company with heavy AI/ML investment in travel recommendation, search, and customer experience. Using Slack chatbots and Glean suggests active LLM deployment at scale. Production AI in a consumer-facing context creates clear eval need.
**AI Product Signal:** Slack chatbots (internal), Glean (enterprise search). Production AI in travel search/recommendation context. Demo scheduled 4/10 signals active buying process.

## Quick Context
Expedia is a Seattle-cluster account under Walton. Primary contact is Ragavan Ambighananthan (Dir. SW Eng). Demo was scheduled for 4/10 at 7:30am. They're using Slack chatbots and Glean, which means they have production LLMs but likely no rigorous eval layer. The conversational AI angle (Glean = search, Slack chatbots = internal automation) maps well to Dropbox case study (<10min evals per PR).

## Contacts
| Name | Title | LinkedIn | Warmth | Best Angle |
|------|-------|----------|--------|------------|
| Ragavan Ambighananthan | Director, Software Engineering | TBD | Active (demo held) | Glean/chatbot eval angle, Dropbox case study |

## Conversation History (Synthesized)

- **2026-04-10:** Demo at 7:30am. Ragavan attended. Expedia currently using Slack chatbots + Glean in production.
- **Post-4/10:** Status unclear from ACTIVE_CONTEXT (demo held but no outcome logged yet).

## What's Resonating
- Demo happened: real interest signal
- Conversational AI / search angle: Glean + Slack chatbots are live production LLMs without systematic evals

## What's Not Working
- No post-demo update logged. Need to check with Walton on outcome.

## Objections Heard
| Objection | Counter Used | Outcome |
|-----------|-------------|---------|
| None logged yet | n/a | n/a |

## Best Next Move
**Action:** Check with Walton on demo outcome. If no follow-up sent, send post-demo email referencing Glean/chatbot eval need + Dropbox case study (10K+ tests, <10min eval per PR). That's the direct parallel to their stack.
**Owner:** Walton (AE lead), KB (post-demo follow-up if needed)
**By:** 2026-04-22

## Cross-References
- Concepts: concepts/evals_cicd.md
- Related accounts: Amazon (same Seattle cluster)

## Sources Ingested
| Source | Date | Key Signals Extracted |
|--------|------|-----------------------|
| 07_Accounts/companies/expedia.md | 2026-04-22 | Account background |
| 01_Memory/working/ACTIVE_CONTEXT.md | 2026-04-22 | Demo status, tech stack (Slack chatbots + Glean) |

---
**Last Updated:** 2026-04-22
**AE:** Walton Stephens
