---
entity: concept
type: objection
name: Build vs Buy
last_updated: 2026-04-22
---

# Build vs Buy

## Type
Objection

## When It Comes Up
- Technically sophisticated ML teams who already have custom eval infra (Francisco at Levi Strauss, Bradford at Fivetran)
- Large engineering orgs who believe they can build anything
- Post-meeting when the internal team debates whether to buy vs. extend existing tooling
- Companies on GCP/AWS who think managed ML services cover this
- Usually comes up when the technical champion agrees with the problem but the eng manager pushes back

## Best Counter or Framing
The build cost isn't the build, it's the maintain. Every model update (GPT-4 to 4.5, Claude 3 to 3.5 etc.) breaks or invalidates custom eval logic. New eval dimensions (topics clustering, skill graphs, multimodal) require new engineering cycles. The team that built your eval infra gets pulled to product work.

Braintrust is a maintained platform: we update as models update, we add new eval dimensions without you lifting a finger, and you get the research from across all our customers (including Notion, Zapier, Dropbox) built in.

The reframe: "The question isn't can you build it. It's: do you want your ML team spending 20% of their time maintaining eval infra instead of building your product?"

## Case Study to Attach
**Customer:** Notion
**Stat:** <24hr model deploy, from 2 weeks previously. 70 engineers.
**Link:** https://braintrust.dev/customers/notion

(Notion had internal eval tooling and replaced it. The speed improvement came from having a maintained platform vs. updating custom code every model release.)

Also relevant: Zapier (accuracy improvement) for teams that built custom scorers and still saw gaps.

## Proof Points
- BYOC (Bring Your Own Compute): $50K min, Braintrust runs in your infrastructure so data never leaves
- Model-agnostic: platform updates across all major model providers automatically
- Built-in scorers for common dimensions (factuality, toxicity, relevance, custom) so you don't start from zero

## Examples from Real Calls
| Date | Company | Contact | What Was Said | Our Response | Outcome |
|------|---------|---------|---------------|--------------|---------|
| 2026-04-10 | Fivetran | Bradford Colbert | Build vs buy meeting | Meeting held, outcome TBD | Waiting on internal discussion |
| 2026-04-14 | Levi Strauss | Francisco Lumbreras | Built custom eval infra on production traces | "We replace the custom infra with a maintained platform" | Meeting rescheduled to 4/21 |

## What Doesn't Work
- Attacking their custom infra: they're proud of it, don't dismiss it
- ROI math without specifics: "we save you time" is too vague, get hours per engineer per month
- Pitching breadth when they want depth: if they built it themselves, show them you go deeper on their specific use case

## Cross-References
- Accounts where heard: accounts/fivetran.md, accounts/levi_strauss.md
- Related concepts: concepts/langsmith_objection.md (similar "why switch" dynamic)

---
**Last Updated:** 2026-04-22
