// Liatrio AI Enablement — Cloudflare Worker API
// All one-pager content lives here as structured data.
// Routes:
//   GET /              → summary JSON
//   GET /api/content   → full structured content
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
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
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

    return json({ error: "Not found" }, 404);
  },
};
