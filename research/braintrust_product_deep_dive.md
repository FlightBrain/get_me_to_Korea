# Braintrust Product Deep Dive

**Date:** April 1, 2026
**Source:** Web research, Notion/Salesforce CRM data

---

## 1. What Braintrust Does

Braintrust (braintrust.dev, formerly braintrustdata.com) is an **AI observability and evaluation platform** purpose-built for teams shipping LLM-powered products into production. Founded by Ankur Goyal, the company has ~80 employees and raised an **$80M Series B in February 2026** led by Iconiq at an **$800M valuation**, with backing from Andreessen Horowitz (a16z).

The core thesis: building AI products is fundamentally different from traditional software because correctness is probabilistic, not deterministic. You can't just check HTTP status codes -- you need to measure whether outputs are faithful, relevant, safe, and useful. Braintrust bridges the gap between development-time evaluation and production-time monitoring in a single platform.

**Notable customers:** Notion, Stripe, Zapier, Vercel, Ramp, Navan, Bill.com, Mistral AI, Courier Health.

---

## 2. Core Product Features

### Evals (Evaluations)
The heart of Braintrust. Evals test AI outputs against real datasets and score the results using three methods:
- **LLM-as-judge**: Uses models to score outputs on criteria like correctness, relevance, and safety
- **Code-based scorers**: Deterministic checks (regex, exact match, JSON schema validation)
- **Human review**: Annotation queues with customizable interfaces

Evals run both offline (during development) and online (sampled from production traffic). They integrate into CI/CD pipelines to **block deployments** when quality regressions are detected. The open-source `autoevals` library (github.com/braintrustdata/autoevals) provides pre-built scoring functions.

### Observability & Logging
Every AI interaction is captured as a structured **trace** with automatic instrumentation -- no manual logging code required. Metrics captured per trace include: duration, LLM duration, time to first token, LLM calls, tool calls, errors, prompt tokens, cached tokens, completion tokens, reasoning tokens, and estimated cost.

Teams can inspect prompts, responses, and tool calls in real time, set alerts when quality drops, and drill into individual spans within complex agent workflows.

### Datasets
Production traces convert to evaluation datasets **with one click**. This creates a flywheel: real production failures and edge cases become regression tests, not synthetic examples. Datasets are versioned for reproducibility.

### Experiments
Side-by-side comparison of different prompts, models, or configurations against the same dataset. Statistical comparison ensures changes are significant, not noise. Experiments can run in the playground UI or programmatically via SDK.

### Prompt Playground
A no-code workspace for iterating on prompts, models, scorers, and datasets. Supports multi-turn conversations, tracks tool calls, and scores outputs in real time. Directly connected to production traces so you can test against real-world inputs.

### Brainstore
A **proprietary database** built specifically for AI application logs and traces. Traditional databases struggle with the large, deeply nested JSON structures typical of agent traces. Brainstore runs real-world queries **80x faster** than traditional databases, with faster full-text search, write latency, and span load times. It powers the platform's ability to query and filter millions of traces quickly.

### Loop (AI Agent)
Loop is Braintrust's built-in AI assistant that **automates the most time-intensive parts of AI development**:
- Analyzes your current prompts and generates better-performing versions
- Creates evaluation datasets tailored to your use case
- Builds and refines scorers from plain-language descriptions
- Generates production-ready scorers, datasets, and improved prompt variants

Loop is available on Pro and Enterprise tiers.

### AI Proxy / Gateway
An LLM gateway built on **Cloudflare Workers** that provides:
- **Unified API**: Single endpoint supporting 100+ models across OpenAI, Anthropic, Google, Mistral, Groq, Together, xAI, AWS Bedrock, Azure, and more
- **Encrypted caching**: AES-256-GCM encryption using your API key; cached requests return in <100ms at the edge
- **Automatic observability**: Every request logged as a structured trace without additional instrumentation
- **OpenAI SDK compatible**: Just change the base URL; works with OpenAI, Anthropic, and Gemini SDKs natively
- **Routing and failover**: Automatic model routing and provider failover

### MCP Integration
A Model Context Protocol server lets developers query logs, run evals, and update prompts directly from their IDE.

### SDKs
Native SDKs for **Python, TypeScript, Go, Ruby, and C#**. Framework-agnostic -- integrates with LangChain, CrewAI, Vercel AI SDK, liteLLM, and others without vendor lock-in.

---

## 3. Pricing Model

| | Starter (Free) | Pro | Enterprise |
|---|---|---|---|
| **Price** | $0/mo | $249/mo | Custom |
| **Processed Data** | 1 GB included, then $4/GB | 5 GB included, then $3/GB | Custom |
| **Eval Scores** | 10K included, then $2.50/1K | 50K included, then $1.50/1K | Custom |
| **Data Retention** | 14 days | 30 days | Custom |
| **Users** | Unlimited | Unlimited | Unlimited |
| **Projects/Datasets/Experiments** | Unlimited | Unlimited | Unlimited |
| **Human Review** | 1 per project | Unlimited | Unlimited |
| **Loop Agent** | No | Yes | Yes |
| **RBAC/SSO/SAML** | No | No | Yes |
| **HIPAA/BAA** | No | No | Yes |
| **Deployment** | Cloud | Cloud | Cloud, hybrid, or on-prem |

All tiers include unlimited users -- a significant differentiator vs. per-seat competitors. SOC 2 Type II certified and GDPR compliant across all tiers.

---

## 4. Competitive Landscape

### vs. LangSmith (LangChain)
- LangSmith offers zero-config tracing for LangChain/LangGraph but creates **vendor lock-in** to the LangChain ecosystem
- Per-trace pricing scales exponentially; free tier limited to 5K traces/month for 1 user vs. Braintrust's 1M spans for unlimited users
- Braintrust is framework-agnostic and adds CI/CD deployment blocking that LangSmith lacks

### vs. Arize AI
- Arize started in traditional ML monitoring and expanded to LLMs via the open-source **Phoenix** framework
- Arize follows OpenTelemetry standards and handles observability at scale for large enterprises
- Braintrust differentiates with tighter eval-observability integration, a more generous free tier, and CI/CD blocking features

### vs. Weights & Biases (Weave)
- W&B's strength is ML experiment tracking; Weave is their LLM observability extension
- LLM capabilities are newer and still maturing compared to core W&B experiment tracking
- Braintrust is purpose-built for LLMs rather than being an extension of ML tooling, offering more depth in eval workflows

### Other competitors
- **Langfuse**: Open-source, self-hostable, but less mature in automated evaluation
- **Datadog LLM Observability**: Infrastructure-first approach; less depth in AI-specific evaluation
- **Galileo**: Focuses on hallucination detection and RAG quality
- **Confident AI (DeepEval)**: Open-source eval framework; less comprehensive platform
- **Maxim AI, Agenta, LangWatch**: Smaller players in the space

**Braintrust's key differentiators:**
1. Unified eval + observability in one workflow (most competitors separate these)
2. Unlimited users on all tiers (vs. per-seat pricing)
3. Framework-agnostic with broad SDK support
4. Brainstore purpose-built database for AI trace performance
5. Loop AI agent for automated eval generation
6. AI Proxy with encrypted caching and multi-provider routing
7. Enterprise deployment flexibility (cloud, hybrid, on-prem)

---

## 5. Recent Announcements (2025-2026)

- **Feb 2026**: $80M Series B led by Iconiq at $800M valuation. Funds earmarked for engineering, go-to-market, and regional expansion.
- **2025**: Launch of **Loop**, the AI agent for automated eval generation, scorer building, and prompt optimization.
- **2025**: Launch of **Brainstore**, the purpose-built database for AI traces claiming 80x query speed improvement.
- **2025**: MCP server integration for IDE-based workflows.
- **2025-2026**: Expanded proxy support to 100+ models across all major providers.
- **Ongoing**: SOC 2 Type II certification, HIPAA compliance, and hybrid deployment options for enterprise customers.

---

## 6. What "AI Evals and Observability" Means in Practice

Traditional software monitoring checks whether requests succeed (HTTP 200, acceptable latency). But for AI applications, a successful API call tells you nothing about whether the **output was actually good**. An LLM can return a perfectly formatted response that is completely hallucinated.

**Observability** provides visibility into the full execution trace of AI systems: what prompts were sent, what the model returned, which tools were called, how long each step took, and what it cost. For agentic systems, this means seeing the entire reasoning chain -- detecting when an agent selects the wrong tool or gets stuck in a loop.

**Evaluations** add the quality dimension: automated scoring of outputs against defined criteria. This includes factual accuracy, relevance, safety, format compliance, and domain-specific metrics. Evals run in two contexts:

- **Offline evals** (development): Test changes against curated datasets before shipping. Block CI/CD deployments if quality regresses.
- **Online evals** (production): Score a sampled subset of live traffic to detect quality drift, hallucination spikes, or safety violations in real time.

The combination creates a **data flywheel**: production traces reveal real failures, which become eval datasets, which drive prompt/model improvements, which get validated in experiments, which ship to production, where the cycle repeats.

This is why Braintrust positions itself at the intersection of both capabilities -- teams that separate eval tools from monitoring tools lose the feedback loop that makes AI products improve over time.

---

## 7. Internal CRM Intelligence (from Notion/Salesforce)

From internal Salesforce data, notable details about Braintrust's customer base:
- **Mistral AI**: $75,240 ARR, hybrid deployment on GCP (DockerKube), renewal June 2026
- **Courier Health**: $35,000 ARR, hybrid deployment on AWS, actively using Brainstore
- **Document Crunch**: $22,710 ARR
- Deployment flavors include cloud and hybrid options, with self-hosted variants using Docker/Kubernetes
- Customers span healthcare (Pharos -- high trust requirements for AI outputs), fintech, and enterprise SaaS

---

*Sources: braintrust.dev, Braintrust blog, VentureBeat, Axios Pro, SiliconANGLE, a16z, Latent Space podcast, liteLLM docs, Confident AI, Galileo, CrewAI docs, Vercel AI SDK docs, internal Salesforce/Notion data*
