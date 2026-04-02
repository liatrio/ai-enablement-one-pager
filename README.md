# Liatrio AI Enablement — One-Pager

A single-page site telling Liatrio's enterprise AI story, backed by a Cloudflare Worker API and an AI chat agent powered by Claude.

**Live:** open `index.html` in a browser — no build step, no framework, no bundler.

---

## What's here

```
index.html          — the entire frontend (HTML + CSS + JS, self-contained)
cloudflare-api/     — Cloudflare Worker: content API + AI chat endpoint
mcp-server/         — Python FastMCP server exposing the API as MCP tools
```

---

## The API

**Base URL:** `https://ai-enablement-api.gregk.workers.dev`

All responses are JSON. All endpoints are public GET reads. Write endpoints (`POST`, `PUT`, `DELETE`) are unauthenticated for now — add a secret header before making this production-facing.

### Read endpoints

```
GET /                     → endpoint listing
GET /api/content          → full content dump (sections + stats + stories)
GET /api/sections         → all sections (id, chapter, headline)
GET /api/sections/:id     → single section — id is one of:
                            hero | context | boeing | natera | method | cta
GET /api/stats            → key metrics (200+, 8×, 80+, 3 days)
GET /api/stories          → dynamically added stories (from KV storage)
```

### Chat

```
POST /api/chat
Content-Type: application/json

{ "messages": [{ "role": "user", "content": "What did Liatrio do at Boeing?" }] }
```

Returns `{ "reply": "..." }`. The agent knows the full Liatrio content and uses Claude to answer questions about enterprise AI transformation. Conversation history is maintained client-side — pass the full `messages` array each time.

---

## Managing stories

Stories are the dynamic layer — add new client engagements without touching any code or redeploying. They live in Cloudflare KV and are returned alongside the hardcoded sections in `GET /api/content`.

### Add a story

```bash
curl -X POST https://ai-enablement-api.gregk.workers.dev/api/stories \
  -H "Content-Type: application/json" \
  -d '{
    "client": "Acme Corp",
    "industry": "Financial Services",
    "headline": "Acme cut compliance reporting from 3 weeks to 4 hours with Claude.",
    "body": "Liatrio embedded Claude into Acme'\''s audit workflow...",
    "impact": [
      { "value": "50×", "label": "Faster reporting", "detail": "3 weeks → 4 hours" }
    ],
    "quote": "We thought this would take a year. It took a sprint."
  }'
```

Required fields: `client`, `industry`, `headline`, `body`
Optional: `impact` (array), `quote` (string)

The story `id` is auto-generated from the client name (`"Acme Corp"` → `"acme-corp"`).

### Update a story

Only send the fields you want to change:

```bash
curl -X PUT https://ai-enablement-api.gregk.workers.dev/api/stories/acme-corp \
  -H "Content-Type: application/json" \
  -d '{ "headline": "Acme eliminated compliance overhead entirely." }'
```

### Delete a story

```bash
curl -X DELETE https://ai-enablement-api.gregk.workers.dev/api/stories/acme-corp
```

### List all stories

```bash
curl https://ai-enablement-api.gregk.workers.dev/api/stories
```

---

## Deploying the Worker

```bash
cd cloudflare-api
npm install
npx wrangler login        # first time only
npx wrangler deploy
```

The `ANTHROPIC_API_KEY` secret is set separately — it's never in code:

```bash
npx wrangler secret put ANTHROPIC_API_KEY
```

---

## MCP server

Exposes the API as tools for AI agents (Claude Code, Claude Desktop, etc.):

```bash
cd mcp-server
pip install -r requirements.txt
python server.py
```

Add to Claude Code:

```bash
claude mcp add liatrio-enablement -- python3 /path/to/mcp-server/server.py
```

Available tools: `get_overview`, `get_full_content`, `list_sections`, `get_section`, `get_stats`, `list_stories`, `add_story`, `update_story`, `delete_story`

---

## Content structure

The hardcoded content lives in `cloudflare-api/src/index.js` as the `CONTENT` object. To update the core narrative (Boeing stats, Natera timeline, method section, etc.) — edit that object and redeploy the Worker. No database, no CMS.

Stories added via the API are separate and stored in KV — they persist across Worker deploys.
