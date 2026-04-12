# Braintrust Documentation Reference

## Scorers

Three types:
- **Autoevals**: Pre-built deterministic (factuality, semantic similarity, JSON validity, RAG metrics). No LLM cost.
- **LLM-as-a-Judge**: Model-based with natural language instructions. Uses template variables (`{{output}}`, `{{expected}}`, `{{metadata}}`). Trace-level uses `{{thread}}` for multi-turn.
- **Custom Code**: TypeScript, Python, or Ruby. No LLM cost.

Best practices:
- Single-aspect design (separate scorers for distinct criteria)
- Code-based for deterministic checks (JSON validation, length, patterns)
- LLM-based: explicit instructions, examples, clear rubrics
- Set `__pass_threshold` in metadata (0-1 range)

## Online Scoring (Async)

- Evaluates production traces automatically as logged
- Runs asynchronously, no impact on app performance
- Configure at project level with rules:
  - Which scorers to run
  - **Sampling rate** (percentage of logs to evaluate)
  - **SQL filters** to target specific traces
  - Scope: trace-level or individual spans
- SQL filter limitation: `!=` NOT supported, use `IS NOT` instead
- Filter evaluates only data present when `span.end()` is called

## Datasets

Four fields: input (required), expected (recommended), metadata (optional), tags (optional)

Creation methods:
- UI upload (CSV/JSON)
- SDK: `initDataset()` (TS) / `init_dataset()` (Python)
- **From production logs**: Filter by criteria (e.g., lowest-scoring), export as dataset
- Loop can synthesize datasets from logs

## Evaluations

CLI commands:
```bash
bt eval                           # Run all eval files recursively
bt eval tests/                    # Target specific directory
bt eval "tests/**/*.eval.ts"      # Glob patterns
bt eval --watch                   # Re-run on file changes
bt eval --no-send-logs            # Run locally without uploading
bt eval --filter "name"           # Match specific evaluators
```

CI/CD: GitHub Action `braintrustdata/eval-action` or `bt eval` with `BRAINTRUST_API_KEY` env var.

Comparing experiments:
- Select multiple runs > Compare > Set baseline
- Diff mode, summary layouts, filter by regressions
- SDK: pass `baseExperiment` parameter

## Prompts

- Mustache (default) or Nunjucks templating
- Every save generates unique version ID
- Pin specific versions in production or use latest
- Invoke via SDK: `invoke({ projectName, slug, input })`
- CLI: `bt prompts list`, `bt functions invoke`

## Topics (Auto-Classification)

Four-stage pipeline: preprocess > summarize > cluster > classify

Built-in topic maps:
- **Task**: User intents and goals
- **Sentiment**: Emotional tone
- **Issues**: Agent problems and errors

Requirements: minimum 400 traces, 100 summaries before topic generation.
Custom topic maps: Pro/Enterprise only.

## Project Logs API

Base URL: `https://api.braintrust.dev`
Auth: `Authorization: Bearer $BRAINTRUST_API_KEY`

Key functions:
- `init_logger()` / `initLogger()`: Create project logger
- `start_span()` / `startSpan()`: Manual span creation
- `@traced` decorator (Python): Auto-trace functions
- `updateSpan()`: Modify spans after logging

Env vars:
- `BRAINTRUST_SYNC_FLUSH`: Toggle synchronous flushing
- `BRAINTRUST_DISABLE_ATEXIT_FLUSH`: Manual flush for serverless

## Pricing (Starter/Free)

- Processed data: 1 GB/month ($4/GB overage)
- Scores: 10k/month ($2.50/1k overage)
- Data retention: 14 days
- Function executions: 100 ops per 10 seconds
- Inline code functions: 4 min max
- Per-span payload: 20 MB max

Pro ($249/mo): 5 GB/month, 50k scores/month, 30-day retention, custom topics, environments.

## Cost Optimization

- Use sampling rates on online scorers
- Use code-based (deterministic) scorers over LLM scorers where possible
- Autoevals are free (no LLM calls)
- LLM scorers use YOUR API key, not Braintrust's
- Loop also uses your API key

## CLI Commands Reference

```bash
bt eval              # Run evaluations
bt view logs         # Interactive log browser
bt sql               # Programmatic query access
bt sync pull         # Download logs as NDJSON
bt setup             # Configure coding agents
bt functions push    # Deploy functions
bt prompts list      # Browse prompts
```
