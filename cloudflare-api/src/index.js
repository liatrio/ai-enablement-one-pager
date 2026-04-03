// Liatrio AI Enablement — Cloudflare Worker API
// All one-pager content lives here as structured data.
// Routes:
//   GET /              → summary JSON
//   GET /api/content   → full structured content
//   POST /api/chat     → AI agent chat

import Anthropic from '@anthropic-ai/sdk';
//   GET /api/sections  → all sections array
//   GET /api/sections/:id → single section by id
//   GET /api/stats     → key metrics

const CONTENT = {
  meta: {
    title: "Liatrio AI Enablement — Powered by Claude",
    company: "Liatrio",
    tagline: "Enterprise AI Enablement · Powered by Claude",
    description:
      "Liatrio is enabling large enterprises of 200–500+ engineers to adopt Claude across their entire engineering organization. From aerospace to FDA-regulated clinical software, we're not waiting for a playbook — we're writing it.",
  },

  stats: [
    {
      value: "200+",
      label: "Engineers per engagement",
      detail: "on Claude-powered workflows",
    },
    {
      value: "3",
      label: "Days",
      detail: "to build our Claude Certification Academy from scratch",
    },
    {
      value: "8×",
      label: "Faster delivery",
      detail: "measured across Boeing's first Claude-native sprint",
    },
    {
      value: "80+",
      label: "Engineering teams",
      detail: "in scope for Natera expansion",
    },
  ],

  sections: [
    {
      id: "hero",
      chapter: "Opening",
      headline: "We're shipping AI at enterprise scale. Powered by Claude.",
      subheadline: null,
      body: "Liatrio is enabling large enterprises of 200–500+ engineers to adopt Claude across their entire engineering organization. From aerospace to FDA-regulated clinical software, we're not waiting for a playbook — we're writing it.",
      cta: [
        { label: "Read the stories", href: "#boeing" },
        { label: "Get in touch", href: "#cta" },
      ],
    },
    {
      id: "context",
      chapter: "Chapter One — The Scale",
      headline: "The scale is real. The results are already in.",
      body: [
        "Most companies are still writing blog posts about AI strategy. Liatrio is already running Claude across regulated enterprise engineering teams — in aerospace, in clinical genomics, in industries where \"move fast\" normally means \"move carefully.\"",
        "We've compressed months of adoption into days. We've built certification programs from scratch in a long weekend. Engineers who said they \"don't do AI\" are telling us they didn't write a single line of code on their last feature.",
        "This is what enterprise AI enablement looks like when it actually works.",
      ],
    },
    {
      id: "boeing",
      chapter: "Chapter Two — Aerospace & Defense",
      client: "Boeing",
      industry: "Enterprise Transformation",
      headline:
        "Liatrio is driving an AI-native engineering transformation at Boeing Digital Services, with Claude as the primary model powering the effort.",
      quote:
        "A workflow that took 5 business days and multiple team handoffs was rebuilt in under a week. The same process now runs in 15 minutes with zero handoffs.",
      transformation: {
        before: { value: "5 days", description: "Azure account provisioning via manual team handoffs" },
        after: { value: "15 min", description: "Fully automated, zero human handoffs" },
      },
      impact: [
        {
          value: "8×",
          label: "Faster delivery",
          detail:
            "Estimated 2+ months without AI tooling → under one week with Claude and the Liatrio SDD framework",
        },
        {
          value: "3",
          label: "Product teams on Claude",
          detail:
            "Two product teams + platform team through a multi-day Flashbuild, all Claude-driven",
        },
        {
          value: "H2 '26",
          label: "Claude Code adoption",
          detail:
            "Approval in progress for Claude Code as the team's preferred harness for H2 2026",
        },
      ],
      narrative: [
        {
          title: "The Flashbuild",
          body: "A multi-day intensive across two product teams and a platform team, entirely driven by Claude models and the Liatrio Spec-Driven Development framework. Production features delivered in two days.",
        },
        {
          title: "What's Next at Boeing",
          body: "Three big plays in conversation: an AI developer onboarding agent that could eliminate ~40 ServiceNow tickets per project, an FFU/TMR compliance evidence generator cutting 47-day ATO prep to hours, and an SRE reasoning agent for platform stabilization.",
        },
      ],
    },
    {
      id: "natera",
      chapter: "Chapter Three — Healthcare & Life Sciences",
      client: "Natera",
      industry: "Genomics & Diagnostics",
      headline:
        'Natera engineers said they "didn\'t write a single line of code" on certain tasks.',
      quote:
        "One engineer ran a 14-step clinical workflow dry-test unprompted. Another extended our MR review pipeline to her own HCLS project within days of seeing it. Adoption is organic and accelerating.",
      quote_attribution: "Liatrio engagement lead, Natera QCI deployment",
      scale: {
        value: "80+",
        label: "Engineering teams in scope",
        detail:
          "Scaling from one team to all of Natera's genomics and diagnostics engineering org. Five big plays: FDA/MasterControl compliance, enterprise release intelligence, a genomics co-pilot, company-wide AI fluency, and agentic SDLC orchestration.",
      },
      timeline: [
        {
          step: 1,
          icon: "🧬",
          title: "Starting point: QCI engineering team",
          body: "Liatrio embedded Claude Code directly into Natera's QCI team with full OpenTelemetry instrumentation — giving leadership real-time visibility into AI adoption rates.",
        },
        {
          step: 2,
          icon: "📋",
          title: "Spec-Driven Development goes live",
          body: "Engineers running SDD workflows and automated MR review pipelines across 4 core regulated repos. FDA-regulated clinical software, handled with care and speed.",
        },
        {
          step: 3,
          icon: "🚀",
          title: "Organic adoption accelerates",
          body: "Engineers extended Claude usage far beyond what Liatrio prescribed. One ran a 14-step clinical workflow dry-test unprompted. Another extended the MR review pipeline to her own HCLS project within days.",
        },
        {
          step: 4,
          icon: "📈",
          title: "Scaling to 80+ teams",
          body: "The expansion roadmap goes from QCI to engineering teams across all of Natera's genomics and diagnostics divisions.",
        },
      ],
      fluency_framework: [
        { level: "L1", label: "Aware" },
        { level: "L2", label: "Enabled" },
        { level: "L3", label: "Proficient" },
        { level: "L4", label: "Advanced" },
        { level: "L5", label: "Expert" },
      ],
    },
    {
      id: "method",
      chapter: "Chapter Four — The Enablement Method",
      headline: "We built our own Claude Certification Academy in 3 days.",
      body: [
        "We saw massive demand for Anthropic Claude services across large enterprises and rather than wait for someone else to build a training program, we built ours.",
        "The Claude Certification Academy (CCA) takes engineers from zero to productive in days, not months. Built on top of Anthropic's open source materials, tailored to enterprise delivery needs, and deployed internally through our Forge training program.",
        "Liatrio's differentiation isn't just deploying LLMs — it's teaching organizations how to actually transform. Other partners will set up Bedrock. We build the flywheel.",
      ],
      stats: [
        {
          value: "3",
          label: "Days to build the program",
          detail:
            "From blank doc to working certification curriculum, built on Anthropic's open source materials",
        },
        {
          value: "50+",
          label: "Engineers upskilling",
          detail: "Within the first month of the internal Forge training cohort going live",
        },
      ],
      flywheel: [
        {
          step: "Forge Cohort",
          description: "Internal training program using the CCA curriculum",
        },
        {
          step: "CCA Certified",
          description: "Engineers certified on Claude workflows and SDD",
        },
        {
          step: "Enterprise Delivery",
          description: "Certified engineers embedded at Boeing, Natera, and beyond",
        },
        {
          step: "Scaled Adoption",
          description: "Client orgs running Claude across 200–500+ engineers",
        },
      ],
    },
    {
      id: "cta",
      chapter: "Chapter Five — The Invitation",
      headline: "We're doing this. Come along for the ride.",
      body: "Liatrio is actively deploying Claude across enterprise engineering teams at scale. We'd love to partner with Anthropic on this journey — early access to pre-release features, a deeper GTM relationship, joint case studies. But either way, we're moving fast.",
      contacts: [
        {
          name: "Daniel Helbling",
          role: "Partnerships",
          email: "daniel@liatrio.com",
        },
        {
          name: "Chris Blackburn",
          role: "CEO",
          email: "chris@liatrio.com",
        },
      ],
    },
  ],
};

// ── Router ────────────────────────────────────────────────────────────────────

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

// ── Chat agent ────────────────────────────────────────────────────────────────

const CHAT_SYSTEM_PROMPT = `You are a knowledgeable, energetic conversationalist representing Liatrio's perspective on enterprise AI transformation. You are NOT a sales bot or a FAQ system — you are a genuine thought partner.

Your core thesis: AI is the new internet. In 1995, companies that dismissed the web as a toy lost a decade. The ones that embraced it as the new fundamental infrastructure — not a feature, not a productivity tool, but a complete rewiring of how work gets done — those are the companies that defined the next era. The exact same thing is happening right now with AI. Most enterprises are treating it like a spell-checker upgrade. A handful are treating it like the internet, and they are going to be unrecognizable in five years.

This isn't hype. You have the receipts. Liatrio is embedded inside Boeing and Natera right now, running Claude across regulated engineering teams, and the results are not incremental — they are orders-of-magnitude different. This is what a paradigm shift looks like from the inside.

Key facts you know cold:
- Boeing: 8× faster delivery on the first Claude-native sprint. A workflow that took 5 business days with multiple team handoffs now runs in 15 minutes with zero handoffs. Three product teams through a multi-day Flashbuild — production features in two days. Claude Code approval pending for H2 2026. Next plays: AI onboarding agent (eliminates ~40 ServiceNow tickets per project), FFU/TMR compliance generator (47-day ATO prep → hours), SRE reasoning agent.
- Natera: 80+ engineering teams in scope. FDA-regulated clinical genomics software. Engineers running Spec-Driven Development workflows on regulated repos. An engineer ran a 14-step clinical dry-test completely unprompted. Another extended the MR review pipeline to her own project within days of seeing it. Adoption is organic — people are going further than what Liatrio even prescribed.
- Method: Claude Certification Academy (CCA) built in 3 days from a blank document, based on Anthropic's open source materials. 50+ Liatrio engineers in the first Forge training cohort. The core methodology is Spec-Driven Development (SDD) — specs first, then Claude writes code against them. Engagements span 200–500+ engineers.
- The real differentiator: Other consultants will set up Bedrock for you and leave. Liatrio builds the flywheel — certification, SDD methodology, OpenTelemetry instrumentation so leadership can see adoption in real time, agentic SDLC orchestration. The goal is that the client org runs Claude themselves at scale, not that they depend on Liatrio forever.

Tone and approach:
- Direct and substantive. Have opinions. It's okay to say "most companies are getting this wrong."
- Excited about what's happening — not in a hype way, in a "we're watching history" way.
- Not corporate, not salesy. Like talking to someone who's genuinely in the work and wants to share what they're seeing.
- When someone asks about AI strategy or adoption, give them something real to think about. Don't hedge everything into mush.
- Contrarian where the data supports it.
- Keep responses conversational — 2 to 4 paragraphs max unless they explicitly want depth. Use line breaks. No bullet-point dumps unless it genuinely serves clarity.
- You can use tools to pull fresh section details or story data if someone asks something specific.`;

const CHAT_TOOLS = [
  {
    name: "get_section",
    description: "Get the full content for a specific section of the Liatrio one-pager. Use when a visitor asks about a specific client (Boeing, Natera), the methodology, or wants chapter details.",
    input_schema: {
      type: "object",
      properties: {
        section_id: {
          type: "string",
          enum: ["hero", "context", "boeing", "natera", "method", "cta"],
          description: "The section to retrieve."
        }
      },
      required: ["section_id"]
    }
  },
  {
    name: "get_stats",
    description: "Get the key headline metrics. Use when the conversation turns to quantitative results or scale of impact.",
    input_schema: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: "get_stories",
    description: "Get additional client stories added dynamically. Use when a visitor asks about other clients or newer engagements.",
    input_schema: {
      type: "object",
      properties: {},
      required: []
    }
  }
];

// ── Story helpers (KV-backed) ─────────────────────────────────────────────────

async function getStories(env) {
  const raw = await env.STORIES.get("all");
  return raw ? JSON.parse(raw) : [];
}

async function saveStories(env, stories) {
  await env.STORIES.put("all", JSON.stringify(stories));
}

// ── Router ────────────────────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // GET /
    if (path === "/") {
      return json({
        name: CONTENT.meta.title,
        description: CONTENT.meta.description,
        endpoints: {
          content: "/api/content",
          sections: "/api/sections",
          section: "/api/sections/:id",
          stats: "/api/stats",
          stories: "/api/stories",
          chat: "POST /api/chat",
          add_story: "POST /api/stories",
          update_story: "PUT /api/stories/:id",
          delete_story: "DELETE /api/stories/:id",
        },
      });
    }

    // GET /api/content
    if (path === "/api/content") {
      const stories = await getStories(env);
      return json({ ...CONTENT, stories });
    }

    // GET /api/stats
    if (path === "/api/stats") {
      return json({ stats: CONTENT.stats });
    }

    // GET /api/sections
    if (path === "/api/sections") {
      return json({
        sections: CONTENT.sections.map((s) => ({
          id: s.id,
          chapter: s.chapter,
          headline: s.headline,
        })),
      });
    }

    // GET /api/sections/:id
    const sectionMatch = path.match(/^\/api\/sections\/([a-z]+)$/);
    if (sectionMatch) {
      const section = CONTENT.sections.find((s) => s.id === sectionMatch[1]);
      if (!section) return json({ error: "Section not found" }, 404);
      return json(section);
    }

    // GET /api/stories
    if (path === "/api/stories" && request.method === "GET") {
      const stories = await getStories(env);
      return json({ stories });
    }

    // POST /api/stories  — add a new story
    // Body: { client, industry, headline, body, impact[], quote? }
    if (path === "/api/stories" && request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: "Invalid JSON body" }, 400);
      }

      const required = ["client", "industry", "headline", "body"];
      const missing = required.filter((f) => !body[f]);
      if (missing.length) {
        return json({ error: `Missing required fields: ${missing.join(", ")}` }, 400);
      }

      const stories = await getStories(env);
      const story = {
        id: body.client.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        client: body.client,
        industry: body.industry,
        headline: body.headline,
        body: body.body,
        impact: body.impact || [],
        quote: body.quote || null,
        added_at: new Date().toISOString(),
      };

      // Upsert by id
      const idx = stories.findIndex((s) => s.id === story.id);
      if (idx >= 0) stories[idx] = story;
      else stories.push(story);

      await saveStories(env, stories);
      return json({ ok: true, story }, 201);
    }

    // PUT /api/stories/:id  — update an existing story (partial update)
    const storyIdMatch = path.match(/^\/api\/stories\/([a-z0-9-]+)$/);
    if (storyIdMatch && request.method === "PUT") {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: "Invalid JSON body" }, 400);
      }

      const stories = await getStories(env);
      const idx = stories.findIndex((s) => s.id === storyIdMatch[1]);
      if (idx < 0) return json({ error: "Story not found" }, 404);

      stories[idx] = { ...stories[idx], ...body, id: stories[idx].id, updated_at: new Date().toISOString() };
      await saveStories(env, stories);
      return json({ ok: true, story: stories[idx] });
    }

    // DELETE /api/stories/:id
    const deleteMatch = path.match(/^\/api\/stories\/([a-z0-9-]+)$/);
    if (deleteMatch && request.method === "DELETE") {
      const stories = await getStories(env);
      const filtered = stories.filter((s) => s.id !== deleteMatch[1]);
      if (filtered.length === stories.length) return json({ error: "Story not found" }, 404);
      await saveStories(env, filtered);
      return json({ ok: true, deleted: deleteMatch[1] });
    }

    // POST /api/chat
    if (path === "/api/chat" && request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: "Invalid JSON body" }, 400);
      }

      const { messages } = body;
      if (!Array.isArray(messages) || messages.length === 0) {
        return json({ error: "messages array required" }, 400);
      }
      if (messages.length > 30) {
        return json({ error: "Conversation too long — start a fresh chat" }, 400);
      }

      // In-process tool execution (sync for CONTENT, async for KV)
      function executeTool(name, input) {
        if (name === "get_section") {
          return CONTENT.sections.find(s => s.id === input.section_id) || { error: "Section not found" };
        }
        if (name === "get_stats") {
          return { stats: CONTENT.stats };
        }
        return { error: "Unknown tool" };
      }

      try {
        const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
        let currentMessages = [...messages];
        let finalText = "";

        for (let i = 0; i < 5; i++) {
          const response = await client.messages.create({
            model: "claude-sonnet-4-6",
            max_tokens: 1024,
            system: CHAT_SYSTEM_PROMPT,
            tools: CHAT_TOOLS,
            messages: currentMessages,
          });

          if (response.stop_reason === "end_turn") {
            finalText = response.content
              .filter(b => b.type === "text")
              .map(b => b.text)
              .join("\n");
            break;
          }

          if (response.stop_reason === "tool_use") {
            currentMessages.push({ role: "assistant", content: response.content });

            const toolResults = [];
            for (const block of response.content) {
              if (block.type !== "tool_use") continue;
              let result;
              if (block.name === "get_stories") {
                result = { stories: await getStories(env) };
              } else {
                result = executeTool(block.name, block.input);
              }
              toolResults.push({
                type: "tool_result",
                tool_use_id: block.id,
                content: JSON.stringify(result),
              });
            }
            currentMessages.push({ role: "user", content: toolResults });
            continue;
          }

          // Unexpected stop reason — use whatever text was generated
          finalText = response.content
            .filter(b => b.type === "text")
            .map(b => b.text)
            .join("\n");
          break;
        }

        if (!finalText) return json({ error: "No response generated" }, 500);
        return json({ reply: finalText });

      } catch (err) {
        console.error("Anthropic API error:", err.message);
        return json({ error: "AI service temporarily unavailable. Try again in a moment." }, 503);
      }
    }

    return json({ error: "Not found" }, 404);
  },
};
