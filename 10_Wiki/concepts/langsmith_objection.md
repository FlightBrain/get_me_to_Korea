---
entity: concept
type: objection
name: We already use LangSmith
last_updated: 2026-04-22
---

# "We Already Use LangSmith"

## Type
Objection

## When It Comes Up
- Fintech and crypto accounts (Coinbase, Block, Plaid) where LangChain is popular
- Early-stage AI teams that set up LangSmith when they first built their LLM pipeline
- Engineering-led evaluations where someone grabbed the most accessible free tool
- Usually raised by IC engineers, not directors or VPs

## Best Counter or Framing
LangSmith evaluates language. For financial decisions, fraud detection, trading signals, or agent outputs touching regulated data, you need evaluation that captures domain constraints: regulatory thresholds, volatility sensitivity, custody risk. LangSmith doesn't have opinions about whether your agent's financial recommendation was actually correct in context.

Also: data ownership. LangSmith runs on LangChain's infrastructure. Braintrust is self-hosted or BYO data. For any company with data compliance requirements, that matters.

The reframe: "LangSmith is a great starting point. But as your AI makes higher-stakes decisions, you outgrow it. The question is whether you're at that point yet."

## Case Study to Attach
**Customer:** Zapier
**Stat:** 50% to 90%+ accuracy in 2-3 months
**Link:** https://braintrust.dev/customers/zapier

(Zapier is also a high-volume automation company that needed eval beyond basic language checks.)

Also relevant: Dropbox (10K+ tests, <10min eval per PR) for teams running systematic CI/CD evals.

## Proof Points
- Braintrust supports custom scorers, human annotation, and domain-specific eval dimensions that LangSmith doesn't
- Data stays in your infrastructure (self-hosted or BYOD)
- Enterprise SSO, audit logs, role-based access vs. LangSmith's SaaS-only model

## Examples from Real Calls
| Date | Company | Contact | What Was Said | Our Response | Outcome |
|------|---------|---------|---------------|--------------|---------|
| TBD | Coinbase | TBD | Anticipated objection | Financial domain + data ownership reframe | TBD (not yet in conversation) |

## What Doesn't Work
- Trying to tell them LangSmith is bad: it's not, it's just narrow. Don't attack it.
- Generic "we're more enterprise" pitch without specifics: too vague.
- Losing the conversation to a feature comparison: don't get into checkbox wars.

## Cross-References
- Accounts where heard/anticipated: accounts/coinbase.md
- Related competitor: competitors/langsmith.md

---
**Last Updated:** 2026-04-22
