# The AI Daily — Liatrio x Anthropic Partnership Site

A scrolly-telling newspaper-style site built to pitch Anthropic on a Liatrio partnership, with a live AI chat agent powered by Claude.

**Just open `index.html` in a browser** — no build tools, no dependencies. The chat widget talks to the already-deployed API, so it works out of the box for anyone on this branch. All requests share the same Anthropic API quota.

---

## Files

```
index.html          — the entire frontend (self-contained)
content.md          — editable text content mirrored from index.html
cloudflare-api/     — Cloudflare Worker: content API + AI chat endpoint
mcp-server/         — Python FastMCP server exposing the API as MCP tools
```

---

## The API

**Base URL:** `https://ai-enablement-api.gregk.workers.dev`

All responses are JSON. CORS is open.

### Read endpoints

```
GET /                     → endpoint listing
GET /api/content          → full content dump (sections + stats + stories)
GET /api/sections         → all sections (id, chapter, headline)
GET /api/sections/:id     → single section — hero | context | boeing | natera | method | cta
GET /api/stats            → key metrics
GET /api/stories          → dynamically added stories (KV storage)
```

### Chat

```
POST /api/chat
Content-Type: application/json

{ "messages": [{ "role": "user", "content": "What did Liatrio do at Boeing?" }] }
```

Returns `{ "reply": "..." }`. The agent knows the full Liatrio content and converses about enterprise AI transformation. Pass the full `messages` array each request to maintain conversation history.

---

## Managing stories

Stories are the dynamic layer — add new client engagements without touching code or redeploying. They live in Cloudflare KV.

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

Required: `client`, `industry`, `headline`, `body` — Optional: `impact` (array), `quote` (string)

The story `id` is auto-generated (`"Acme Corp"` → `"acme-corp"`).

### Update a story

```bash
curl -X PUT https://ai-enablement-api.gregk.workers.dev/api/stories/acme-corp \
  -H "Content-Type: application/json" \
  -d '{ "headline": "Acme eliminated compliance overhead entirely." }'
```

### Delete a story

```bash
curl -X DELETE https://ai-enablement-api.gregk.workers.dev/api/stories/acme-corp
```

---

## Deploying the Worker

```bash
cd cloudflare-api
npm install
npx wrangler login        # first time only
npx wrangler deploy
```

The `ANTHROPIC_API_KEY` is stored as a Cloudflare secret — never in code:

```bash
npx wrangler secret put ANTHROPIC_API_KEY
```

---

## MCP server

Exposes the API as tools for AI agents:

```bash
cd mcp-server
pip install -r requirements.txt
python server.py
```

Add to Claude Code:

```bash
claude mcp add liatrio-enablement -- python3 /path/to/mcp-server/server.py
```

Tools: `get_overview`, `get_full_content`, `list_sections`, `get_section`, `get_stats`, `list_stories`, `add_story`, `update_story`, `delete_story`

---

## Editing content

All text is mirrored in `content.md` — edit there, then update the corresponding sections in `index.html`. Core narrative data (Boeing stats, Natera timeline, etc.) also lives in `cloudflare-api/src/index.js` as the `CONTENT` object — edit and redeploy the Worker to update it. Dynamic stories added via the API persist in KV across deploys.
