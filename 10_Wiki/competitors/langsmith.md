---
entity: competitor
name: LangSmith
last_updated: 2026-04-22
---

# LangSmith

## What They Do
LangSmith is an LLM evaluation and observability platform from LangChain. Built around the LangChain framework ecosystem. Popular for teams already using LangChain for orchestration. Free tier widely adopted by early-stage AI teams.

## How We Win Against Them

- **Domain-specific evals:** LangSmith evaluates language patterns. Braintrust supports custom scorers, human annotation pipelines, and domain-specific dimensions (financial accuracy, code correctness, medical appropriateness) that LangSmith doesn't surface by default.
- **Data ownership:** LangSmith is SaaS-only. Braintrust supports self-hosted (BYOC) and BYOD. For enterprise compliance (fintech, healthcare, regulated data), this is often a requirement, not a preference.
- **Not framework-dependent:** LangSmith is tied to the LangChain ecosystem. Braintrust is model-agnostic and framework-agnostic. Teams moving off LangChain don't have to move off Braintrust.
- **Enterprise readiness:** SSO, audit logs, role-based access, SOC 2 compliance. LangSmith enterprise is newer and less proven.

## Where They Have an Advantage

- Free tier and wide adoption: many devs already have LangSmith accounts from tutorials
- LangChain integration is seamless for teams already on that stack
- Brand recognition: LangChain is the most-known LLM framework, LangSmith benefits from association
- Developer velocity: easy to get started, low friction for small projects

## Battle Card

| Dimension | Braintrust | LangSmith |
|-----------|------------|-----------|
| Data ownership | Self-hosted / BYOC / BYOD | SaaS only |
| Framework dependency | Framework-agnostic | LangChain-native |
| Domain-specific evals | Custom scorers + human annotation | Language-pattern focused |
| Enterprise compliance | SOC 2, SSO, audit logs | Newer enterprise tier |
| Pricing model | Usage-based + enterprise | Free tier + paid |
| CI/CD integration | Native PR-gate workflow | Available but less native |

## Accounts Where They've Come Up

| Account | Context | How We Responded | Outcome |
|---------|---------|-----------------|---------|
| Coinbase | Anticipated (not confirmed) | Financial domain + data ownership reframe | TBD |

## Objection They Create
"We're already using LangSmith, why would we switch?" (See concepts/langsmith_objection.md for full counter)

## Best Counter Narrative
"LangSmith is a great starting tool. As your AI makes higher-stakes decisions, you need evals that understand your domain, not just language patterns. That's when teams switch to Braintrust. If you're making financial/medical/regulated decisions with AI, you've already outgrown LangSmith."

## Sources Ingested

| Source | Date | Key Intel Extracted |
|--------|------|---------------------|
| 04_Research/COMPETITOR_NOTES.md | 2026-04-22 | Initial competitive positioning |
| 07_Accounts/companies/coinbase.md | 2026-04-22 | LangSmith as anticipated objection in fintech accounts |

---
**Last Updated:** 2026-04-22
