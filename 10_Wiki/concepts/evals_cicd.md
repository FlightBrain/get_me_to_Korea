---
entity: concept
type: talk_track
name: Evals in CI/CD
last_updated: 2026-04-22
---

# Evals in CI/CD

## Type
Talk Track

## When It Comes Up
- Engineering orgs with established CI/CD pipelines who are now shipping AI features
- Companies where engineers ask "how do we know if a model change broke something?"
- DevOps-forward cultures (Dropbox, Graphite, any company with strong release engineering)
- When the pain point is "we deployed a new model version and didn't know it regressed"
- Usually resonates with staff engineers, VP Engs, and CTOs who already think in terms of quality gates

## Best Counter or Framing
Every software team has tests that run before a PR merges. No AI team has the equivalent for model behavior. When you update your prompt, swap a model, or change a RAG retrieval strategy, you're flying blind unless you have an eval gate.

Braintrust slots into your CI/CD pipeline as an eval gate: before any model change ships, run your eval suite, see if accuracy dropped, block the release if it did. Same mental model as unit tests, applied to AI behavior.

The one-liner: "Evals are the unit tests for AI."

## Case Study to Attach
**Customer:** Dropbox
**Stat:** 10K+ tests, <10min eval per PR
**Link:** https://braintrust.dev/customers/dropbox

Also strong: Graphite (5% reduction in negative rules, 90%+ code acceptance) for code AI / developer tools context.

## Proof Points
- Dropbox runs 10K+ eval cases per PR in under 10 minutes
- Graphite uses Braintrust to eval AI code suggestions before shipping
- Notion reduced model deploy time from 2 weeks to <24hr using eval-gated releases

## Examples from Real Calls
| Date | Company | Contact | What Was Said | Our Response | Outcome |
|------|---------|---------|---------------|--------------|---------|
| 2026-04-04 | Amazon | Hashique Thajudeen | Wants eval feedback loops + self-healing systems | Resonated. Dinner follow-up 4/22. | Active |
| 2026-04-10 | Expedia | Ragavan Ambighananthan | Using Slack chatbots + Glean, demo held | Dropbox parallel: eval the chatbot pipeline | Post-demo follow-up pending |

## What Doesn't Work
- CI/CD framing with non-engineering audiences: PMs and business stakeholders don't think in PRs. Use "quality gates" language instead.
- Dropbox case study with non-technical buyers: the stat resonates with engineers, not with VPs who care about outcomes

## Cross-References
- Accounts where resonating: accounts/amazon.md, accounts/expedia.md
- Related competitors: competitors/langsmith.md (CI/CD integration is a differentiator)

---
**Last Updated:** 2026-04-22
