# Deeper

Deeper is a Vercel-ready infinite curiosity website. It generates a new strange place every time a visitor chooses a path, then stores the journey in the URL so every generated room is shareable.

## What it does

- Starts from a custom spark or random portal.
- Supports dream, museum, game, and cosmic modes.
- Generates titles, descriptions, artifacts, rules, whispers, and four new exits.
- Tracks depth and a short breadcrumb trail.
- Saves favorite places in local browser storage.
- Runs as a static site, no paid API key required.

## Deploy on Vercel

1. Import this repository into Vercel.
2. Set the project root directory to `deeper`.
3. Keep the framework preset as `Other`.
4. Deploy.

## Local preview

From this folder:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Future AI upgrade

The current version uses deterministic procedural generation so it works immediately. To make it a true AI agent site later, add an API route that sends the current place context to a model, then replace `createPlace` in `app.js` with a fetch call to that route.
