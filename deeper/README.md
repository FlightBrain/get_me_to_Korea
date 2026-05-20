# Deeper

Deeper is a Vercel-ready infinite curiosity website. It generates a new strange place every time a visitor chooses a path, then stores the journey in the URL so every generated room is shareable.

## What it does

- Starts from a custom spark or random portal.
- Supports dream, museum, game, and cosmic modes.
- Generates titles, descriptions, artifacts, rules, whispers, and four new exits.
- Tracks depth and a short breadcrumb trail.
- Adds rare rooms, carry-forward pocket items, local inventory, and achievements.
- Adds a journey journal, continue-last-journey button, loop rooms, artifact examination, and secret exits.
- Supports keyboard shortcuts: `1` to `5` choose exits, `r` shuffles doors, `s` saves the room.
- Saves favorite places in local browser storage.
- Uses safer same-origin saved links and bounded URL parameters.
- Runs as a static site, no paid API key required.

## Deploy on Vercel

1. Import this repository into Vercel.
2. Set the project root directory to `deeper`. This is required. Deploying from the repo root serves the wrong `index.html`.
3. Keep the framework preset as `Other`.
4. Use these settings:

| Setting | Value |
|---|---|
| Root Directory | `deeper` |
| Framework Preset | Other |
| Build Command | leave empty |
| Output Directory | `.` |
| Install Command | leave empty |
| Environment Variables | none required |

The `vercel.json` file lives inside `deeper/`, so Vercel picks up the SPA rewrite, cache headers, and security headers when the root directory is set correctly.

## Local preview

From this folder:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

Sneak peek URL:

```text
http://localhost:3000/?seed=clock-garden-sneak-peek&mode=dream&depth=7&spark=the%20clock%20garden&trail=The%20First%20Door%7CThe%20Room%20That%20Blinks%7CThe%20Clock%20Garden&pocket=jar-of-tomorrow&reroll=0
```

For checks from the repository root:

```bash
bash scripts/deeper-smoke.sh
```

`python3 -m http.server` does not apply Vercel rewrites. Use a Vercel preview or `vercel dev` from the `deeper` folder when you need to test fallback routes.

## Future AI upgrade

The current version uses deterministic procedural generation so it works immediately. To make it a true AI agent site later:

1. Add `api/generate-place.js` that accepts `{ seed, mode, depth, spark, trail, reroll, pocket }`.
2. Keep `createPlace` as the fallback engine.
3. Add a small resolver that tries `fetch("/api/generate-place")`, then falls back to `createPlace` on timeout, rate limit, or bad model output.
4. Store AI results in a server-side cache keyed by the URL state so shared links stay stable.
5. Put model keys in Vercel environment variables only. Never expose them in client JavaScript.

Recommended future environment variables:

| Variable | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` | server-only model access |
| `DEEPER_AI_ENABLED` | kill switch |
| `UPSTASH_REDIS_REST_URL` | cache and rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | cache and rate limiting |
