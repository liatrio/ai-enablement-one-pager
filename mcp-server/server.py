"""
Liatrio AI Enablement MCP Server
Exposes the Cloudflare Worker API content as MCP tools.
"""

from typing import Optional
import httpx
from fastmcp import FastMCP

API_BASE_URL = "https://ai-enablement-api.gregk.workers.dev"

mcp = FastMCP("Liatrio AI Enablement")


def _get(path: str) -> dict:
    r = httpx.get(f"{API_BASE_URL}{path}", timeout=10)
    r.raise_for_status()
    return r.json()


def _post(path: str, body: dict) -> dict:
    r = httpx.post(f"{API_BASE_URL}{path}", json=body, timeout=10)
    r.raise_for_status()
    return r.json()


def _put(path: str, body: dict) -> dict:
    r = httpx.put(f"{API_BASE_URL}{path}", json=body, timeout=10)
    r.raise_for_status()
    return r.json()


def _delete(path: str) -> dict:
    r = httpx.delete(f"{API_BASE_URL}{path}", timeout=10)
    r.raise_for_status()
    return r.json()


@mcp.tool()
def get_overview() -> dict:
    """Get a top-level overview of Liatrio's AI enablement work including available endpoints."""
    return _get("/")


@mcp.tool()
def get_full_content() -> dict:
    """Get the complete structured content of Liatrio's AI enablement one-pager —
    all sections, stats, client stories, and contacts."""
    return _get("/api/content")


@mcp.tool()
def list_sections() -> dict:
    """List all sections of the one-pager with their IDs and headlines.
    Section IDs: hero, context, boeing, natera, method, cta."""
    return _get("/api/sections")


@mcp.tool()
def get_section(section_id: str) -> dict:
    """Get the full content for a specific section of the one-pager.

    Args:
        section_id: One of: hero, context, boeing, natera, method, cta
    """
    return _get(f"/api/sections/{section_id}")


@mcp.tool()
def get_stats() -> dict:
    """Get the key metrics and stats from Liatrio's AI enablement work:
    engineers per engagement, speed improvements, team counts, etc."""
    return _get("/api/stats")


@mcp.tool()
def list_stories() -> dict:
    """List all stories that have been added via add_story."""
    return _get("/api/stories")


@mcp.tool()
def add_story(
    client: str,
    industry: str,
    headline: str,
    body: str,
    impact: Optional[list] = None,
    quote: Optional[str] = None,
) -> dict:
    """Add a new client story to the API.

    Args:
        client: Client name, e.g. "Acme Corp"
        industry: Industry/vertical, e.g. "Financial Services"
        headline: One-sentence story headline
        body: Main narrative paragraph(s)
        impact: Optional list of impact dicts, each with keys: value, label, detail
        quote: Optional pull quote from the engagement
    """
    return _post("/api/stories", {
        "client": client,
        "industry": industry,
        "headline": headline,
        "body": body,
        "impact": impact or [],
        "quote": quote,
    })


@mcp.tool()
def update_story(
    story_id: str,
    client: Optional[str] = None,
    industry: Optional[str] = None,
    headline: Optional[str] = None,
    body: Optional[str] = None,
    impact: Optional[list] = None,
    quote: Optional[str] = None,
) -> dict:
    """Update an existing story. Only provided fields are changed.

    Args:
        story_id: The story's id slug, e.g. "acme-corp"
        client: Updated client name
        industry: Updated industry
        headline: Updated headline
        body: Updated body text
        impact: Updated impact list
        quote: Updated pull quote
    """
    payload = {k: v for k, v in {
        "client": client,
        "industry": industry,
        "headline": headline,
        "body": body,
        "impact": impact,
        "quote": quote,
    }.items() if v is not None}
    return _put(f"/api/stories/{story_id}", payload)


@mcp.tool()
def delete_story(story_id: str) -> dict:
    """Delete a story by its id slug.

    Args:
        story_id: The story's id slug, e.g. "acme-corp"
    """
    return _delete(f"/api/stories/{story_id}")


if __name__ == "__main__":
    mcp.run()
