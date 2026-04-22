---
entity: concept
type: use_case
name: Voice AI
last_updated: 2026-04-22
---

# Voice AI

## Type
Use Case

## When It Comes Up
- Companies with voice-based customer service automation (call centers, IVR, conversational voice agents)
- Healthcare, fintech, and travel companies running high-volume voice interactions
- Companies mentioning "voice AI," "conversational agents," "IVR replacement," or "voice bot accuracy"

## Best Counter or Framing
Braintrust helped Navan evaluate voice AI at scale: hundreds of daily calls, 0.9+ F1 score, evaluating turn-by-turn accuracy across complex multi-step conversations. The challenge with voice AI is that standard text evals miss audio-specific dimensions: latency, interruption handling, transcription errors propagating to downstream decisions.

Braintrust evaluates the full pipeline: transcription quality, intent recognition accuracy, response appropriateness, and outcome (was the call resolved correctly).

## Case Study to Attach
**Customer:** Navan
**Stat:** 0.9+ F1 score, hundreds of daily calls
**Link:** https://braintrust.dev/customers/navan

IMPORTANT: Only use Navan case study for voice AI use cases. Never reference Navan for non-voice applications.

## Proof Points
- F1 score as eval metric: precision + recall across intent classification
- High-volume eval: hundreds of calls per day requires automated scoring pipelines
- Multi-turn evaluation: voice agents need turn-level + conversation-level evals

## Examples from Real Calls
| Date | Company | Contact | What Was Said | Our Response | Outcome |
|------|---------|---------|---------------|--------------|---------|
| TBD | TBD | TBD | TBD | TBD | TBD |

## What Doesn't Work
- Using Navan for non-voice use cases: never do this
- Generic accuracy claims without the F1 framing: voice AI buyers understand F1

## Cross-References
- Related concepts: concepts/evals_cicd.md
- Competitors where this differentiates: competitors/langsmith.md (LangSmith is text-first)

---
**Last Updated:** 2026-04-22
