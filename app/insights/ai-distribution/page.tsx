import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function AIDistributionArticle() {
  const keyFindings = [
    { num: "1", title: "The interface controls the customer", body: "AI chatbots are not just a new customer service channel — they are a new distribution front-end that routes customers toward insurance products without the insurer's involvement. Whoever owns that interface controls discovery, comparison, and increasingly conversion." },
    { num: "2", title: "This follows a familiar pattern — but faster", body: "PCWs disrupted personal lines distribution in a decade. AI chatbots will move faster because they integrate into tools customers already use daily — ChatGPT, Gemini, Perplexity — rather than requiring a separate trip to a comparison site. Experian launched an insurance marketplace inside ChatGPT in February 2026." },
    { num: "3", title: "Brand invisibility is the real risk", body: "PCWs showed carrier brands side by side. AI interfaces may not. A customer asking ChatGPT for best home insurance may receive a product recommendation without knowing — or caring — which carrier underwrites it. Decades of brand equity can be bypassed in a single conversation." },
    { num: "4", title: "Personal lines are immediately exposed. Specialty is not", body: "Standardised, price-driven personal lines products are highly susceptible. Specialty and large commercial lines are structurally protected by complexity, relationship, and regulation — but are being transformed operationally from the inside by agentic AI." },
    { num: "5", title: "The economics will shift toward platforms", body: "Value currently distributed across carriers, brokers, agents, and PCWs will concentrate around whoever controls the AI interface layer. BCG estimates operating costs per dollar of premium could fall 15–25% for AI leaders." },
    { num: "6", title: "Two viable positions exist — doing nothing is not one", body: "Insurers must explicitly choose to be either a visible brand in AI interfaces or a capacity provider behind them. Passivity leads to disintermediation." },
    { num: "7", title: "The window for action is narrow", body: "McKinsey data shows a cohort of AI-leading insurers has already achieved 6.1x the total shareholder return of laggards over five years. First-mover advantages in AI distribution will compound." },
  ];

  const metrics = [
    { val: "$97bn", label: "US MGA premiums 2024", sub: "Up from $47bn in 2020. MGAs are the fastest-growing distribution segment.", color: "#E63946" },
    { val: "700M", label: "OpenAI weekly active users", sub: "At Instant Checkout launch, September 2025.", color: "#1D6FA4" },
    { val: "6.1×", label: "TSR advantage for AI leaders", sub: "AI-leading insurers vs laggards over five years (McKinsey).", color: "#3B6D11" },
    { val: "29%", label: "Use AI for financial research", sub: "Share of generative AI users already using it for financial information and recommendations (McKinsey).", color: "#854F0B" },
  ];

  const comparison = [
    { dimension: "Results shown", google: "10+ links and paid ads", ai: "1–3 curated recommendations" },
    { dimension: "Carrier brand visibility", google: "High — brands appear in results", ai: "Low — AI may present products not brands" },
    { dimension: "Advice capability", google: "None — navigation only", ai: "Explains coverage, compares, recommends" },
    { dimension: "Personalisation", google: "Cookie-based, limited", ai: "Memory, stated preferences, cross-session" },
    { dimension: "Switching friction", google: "High — customer fills new form", ai: "Low — AI can pre-populate and redirect" },
    { dimension: "Paid placement", google: "Yes, clearly labelled", ai: "Mostly organic today — evolving rapidly" },
  ];

  const channels = [
    { channel: "Retail brokers (personal lines)", disruption: "High", color: "#A32D2D", bg: "rgba(163,45,45,0.15)", what: "AI handles comparison and advice; removes broker value in simple risks" },
    { channel: "PCWs / aggregators", disruption: "High", color: "#A32D2D", bg: "rgba(163,45,45,0.15)", what: "AI replicates comparison within existing tool; PCW step becomes redundant" },
    { channel: "MGAs", disruption: "Opportunity", color: "#3B6D11", bg: "rgba(59,109,17,0.15)", what: "Structurally positioned as the licensed API layer in AI distribution — the binding engine AI needs" },
    { channel: "Wholesale / specialty brokers", disruption: "Low", color: "#854F0B", bg: "rgba(133,79,11,0.15)", what: "Risk complexity protects role; AI augments submission prep but not negotiation" },
    { channel: "Direct carrier websites", disruption: "Medium", color: "#854F0B", bg: "rgba(133,79,11,0.15)", what: "Discovery risk — customers may never arrive if AI intercepts research first" },
    { channel: "Tied / captive agents", disruption: "Medium", color: "#854F0B", bg: "rgba(133,79,11,0.15)", what: "AI comparison erodes captive advantage in digital-native demographics" },
  ];

  const personalLines = [
    { label: "Motor", pct: 92 },
    { label: "Travel", pct: 90 },
    { label: "Home", pct: 85 },
    { label: "Pet", pct: 78 },
    { label: "Life (term)", pct: 55 },
    { label: "SME Liability", pct: 48 },
  ];

  const specialtyProtected = [
    "Underwriter judgment on novel risks",
    "Negotiation of terms and conditions",
    "Claims advocacy in complex disputes",
    "Large account relationship management",
  ];

  const scenarios = [
    {
      sc: "A",
      title: "AI as advisory layer",
      prob: "Moderate — 3–5 yr baseline",
      probColor: "#854F0B",
      probBg: "rgba(133,79,11,0.15)",
      body: "AI chatbots become a widely used research and comparison tool — similar to PCWs today — but the regulated intermediary step remains human. AI informs; humans bind.",
      winners: "Carriers with strong digital brands. MGAs with API feeds. AI-enabled brokers.",
      losers: "PCWs. Carriers with no API feed. Agents in digital-native segments.",
    },
    {
      sc: "B",
      title: "AI as dominant front-end",
      prob: "High — 5–10 yr horizon",
      probColor: "#A32D2D",
      probBg: "rgba(163,45,45,0.15)",
      body: "AI becomes the primary discovery and comparison channel for personal lines. Regulators adapt to allow AI-facilitated binding through licensed entities. PCWs become marginal.",
      winners: "AI platforms. MGAs as binding engines. Carriers with lowest CAC and API-ready products.",
      losers: "PCWs. Broker-dependent carriers in personal lines. Insurers without structured product data.",
    },
    {
      sc: "C",
      title: "Platform-controlled distribution",
      prob: "Low — 10+ yr horizon",
      probColor: "#3B6D11",
      probBg: "rgba(59,109,17,0.15)",
      body: "A small number of AI platforms control customer insurance journeys end-to-end — including white-labelled products. Insurance becomes a feature, not an industry.",
      winners: "Big Tech. Reinsurers providing capacity. Specialty insurers.",
      losers: "All incumbents relying on brand and distribution. Traditional agents and brokers.",
    },
    {
      sc: "D",
      title: "Fragmentation and regulation",
      prob: "Moderate — near-term Europe",
      probColor: "#854F0B",
      probBg: "rgba(133,79,11,0.15)",
      body: "AI distribution remains fragmented by jurisdiction. EU AI Act, FCA caution, and US state divergence create different models globally. No global winner emerges.",
      winners: "Incumbents with regulatory expertise. Brokers in heavily regulated markets.",
      losers: "AI-first disruptors without regulatory depth. Carriers over-invested in one AI channel.",
    },
  ];

  const playbookWeeks = [
    "Search your product category in ChatGPT and Perplexity — record what comes up and why",
    "Audit whether product data is structured and in AI-ingestible formats",
    "Identify which channel partners are building AI capabilities vs being bypassed",
  ];

  const playbookMonths = [
    "Engage directly with OpenAI, Perplexity, Google on product data integration — do not wait for them to approach you",
    "Identify the licensed intermediary vehicle needed for AI-referred binding in your key markets",
    "Run an AI-proactive renewal pilot — contact 10% of renewal book before competitors do",
    "Build API-first quoting in personal lines — hours-long cycles are incompatible with AI distribution",
  ];

  const playbookYears = [
    "Decide visible brand or capacity provider — by product line, not by company",
    "Reprice renewal premium assumptions — inertia uplift will erode 2–5pp as AI switching goes mainstream",
    "For specialty carriers: implement agentic AI submission intake within 18 months",
    "Consider MGA acquisition or creation as the licensed vehicle for AI distribution",
  ];

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    padding: "24px",
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-10" style={{ background: "radial-gradient(circle, rgba(230,57,70,0.7) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-10">
            <ChevronLeft size={14} />
            Back to Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="mono-label text-[9px] px-3 py-1 rounded-full" style={{ background: "rgba(230,57,70,0.2)", color: "#ff9999" }}>AI Strategy</span>
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-white/30 text-white">Strategic Research Note</span>
            <span className="mono-label text-white/60 text-[9px]">April 2026</span>
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={11} />
              <span className="mono-label text-[9px]">7 min read</span>
            </div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            Who Controls the Customer? AI Chatbots and the Future of Insurance Distribution
          </h1>
          <p className="text-white text-xl leading-relaxed border-l-2 border-[#E63946] pl-5">
            AI chatbots are not a new customer service channel. They are a new distribution front-end that routes customers toward insurance products — without the insurer's involvement. Whoever owns that interface controls discovery, comparison, and increasingly conversion.
          </p>
          <p className="text-white/40 text-xs mt-6 font-mono">Sources: McKinsey, BCG, GlobalData, Big I, NAIC, LMA · © 2026 Eudaimon Consulting · Based on public sources</p>
        </div>
      </section>

      <div className="divider-gradient" />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-white text-base leading-relaxed">

          <p>The insurance industry has been here before. Price comparison websites disrupted personal lines distribution in a decade. AI chatbots will move faster — because they are already in consumers' hands. In February 2026, Experian launched an insurance marketplace inside ChatGPT. OpenAI's Instant Checkout launched in September 2025 with 700 million weekly active users. This is not a future risk. It is happening now.</p>

          {/* Key findings */}
          <h2 className="font-display text-white text-2xl mt-10 mb-6">Seven things every insurance CEO needs to know</h2>
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.12)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="mono-label text-white text-[9px]">Key findings</p>
            </div>
            {keyFindings.map((f) => (
              <div key={f.num} style={{ display: "grid", gridTemplateColumns: "48px 1fr", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ padding: "14px 16px", borderRight: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                  <span className="font-display text-2xl font-bold" style={{ color: "#E63946", opacity: 0.8 }}>{f.num}</span>
                </div>
                <div style={{ padding: "14px 20px" }}>
                  <p className="text-white text-sm font-medium mb-1">{f.title}</p>
                  <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.8 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Key market data</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {metrics.map((m) => (
              <div key={m.val} style={cardStyle}>
                <p className="font-display text-2xl font-bold mb-1" style={{ color: m.color }}>{m.val}</p>
                <p className="text-white text-sm font-medium mb-1">{m.label}</p>
                <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.7 }}>{m.sub}</p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="py-8 my-8" style={{ borderTop: "2px solid #E63946", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="font-display text-white text-xl italic leading-relaxed">"The discovery friction is close to zero — which is why diffusion will be faster than the PCW era."</p>
          </div>

          {/* Comparison table */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">How AI chatbots differ from search and PCWs</h2>
          <p style={{ opacity: 0.85 }}>Search and AI chatbots both capture purchase intent — but the mechanism and resulting power dynamics are fundamentally different.</p>
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden", marginTop: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", background: "rgba(255,255,255,0.1)", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="mono-label text-white/60 text-[9px]">Dimension</p>
              <p className="mono-label text-white/60 text-[9px]">Google search</p>
              <p className="mono-label text-[9px]" style={{ color: "#ff9999" }}>AI chatbot</p>
            </div>
            {comparison.map((row, i) => (
              <div key={row.dimension} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                <p className="text-white text-xs font-medium">{row.dimension}</p>
                <p className="text-white text-xs" style={{ opacity: 0.7 }}>{row.google}</p>
                <p className="text-white text-xs font-medium" style={{ color: "#ff9999" }}>{row.ai}</p>
              </div>
            ))}
          </div>

          {/* Channel disruption */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Channel disruption — who wins and who loses</h2>
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2fr", background: "rgba(255,255,255,0.1)", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="mono-label text-white/60 text-[9px]">Channel</p>
              <p className="mono-label text-white/60 text-[9px]">Disruption</p>
              <p className="mono-label text-white/60 text-[9px]">What changes</p>
            </div>
            {channels.map((ch, i) => (
              <div key={ch.channel} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2fr", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", alignItems: "start" }}>
                <p className="text-white text-xs font-medium">{ch.channel}</p>
                <div>
                  <span className="mono-label text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ color: ch.color, background: ch.bg }}>{ch.disruption}</span>
                </div>
                <p className="text-white text-xs" style={{ opacity: 0.85 }}>{ch.what}</p>
              </div>
            ))}
          </div>

          {/* Personal vs Commercial */}
          <h2 className="font-display text-white text-2xl mt-10 mb-6">Personal lines vs commercial — a critical distinction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Personal lines */}
            <div style={{ ...cardStyle, borderTop: "3px solid #E63946" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#ff9999" }}>Personal lines — exposed now</p>
              <p className="text-white text-sm leading-relaxed mb-4" style={{ opacity: 0.9 }}>Motor, home, travel, and pet insurance are standardised, price-driven, and API-accessible. These are identical conditions to those that made personal lines susceptible to PCW disruption — but the pace will be faster because AI tools require no infrastructure build.</p>
              <p className="mono-label text-white/50 text-[9px] mb-3">AI disruption susceptibility (0–100)</p>
              <div className="space-y-3">
                {personalLines.map((item) => (
                  <div key={item.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                      <span className="text-white text-xs">{item.label}</span>
                      <span className="text-xs font-medium" style={{ color: "#E63946" }}>{item.pct}</span>
                    </div>
                    <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${item.pct}%`, background: "#E63946", borderRadius: "3px" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialty */}
            <div style={{ ...cardStyle, borderTop: "3px solid #1D6FA4" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>Specialty and commercial — protected front-end</p>
              <p className="text-white text-sm leading-relaxed mb-4" style={{ opacity: 0.9 }}>D&O, marine, energy, cyber, and large commercial lines are structurally resistant. Risk descriptions require extensive data collection. Pricing requires underwriter judgment. A CFO does not ask ChatGPT to arrange their D&O cover.</p>
              <p className="text-white text-sm leading-relaxed mb-4" style={{ opacity: 0.9 }}>However, AI is already transforming back-end operations rapidly. Hiscox demonstrated quote turnaround for Sabotage &amp; Terrorism going from three days to three minutes. The LMA found that managing agents who have deployed agentic AI report transformative efficiency gains.</p>
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "12px 14px" }}>
                <p className="text-white text-xs font-medium mb-3">What does not change in specialty</p>
                {specialtyProtected.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "8px", padding: "4px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ color: "#60a5fa", flexShrink: 0 }}>→</span>
                    <p className="text-white text-xs" style={{ opacity: 0.85 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Four scenarios */}
          <h2 className="font-display text-white text-2xl mt-10 mb-6">Four plausible futures</h2>
          <p style={{ opacity: 0.85 }}>These are not forecasts — they are planning tools. Each has distinct trigger conditions, winners, and losers.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {scenarios.map((s) => (
              <div key={s.sc} style={cardStyle}>
                <p className="font-display text-white text-3xl font-bold mb-2" style={{ opacity: 0.2 }}>{s.sc}</p>
                <p className="font-display text-white text-lg mb-3">{s.title}</p>
                <span className="mono-label text-[9px] px-3 py-1 rounded-full inline-block mb-4" style={{ color: s.probColor, background: s.probBg }}>{s.prob}</span>
                <p className="text-white text-sm leading-relaxed mb-4" style={{ opacity: 0.85 }}>{s.body}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "10px" }}>
                  <p className="text-xs mb-1" style={{ color: "#86efac" }}>Winners: {s.winners}</p>
                  <p className="text-xs" style={{ color: "#fca5a5" }}>Losers: {s.losers}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Two positions */}
          <h2 className="font-display text-white text-2xl mt-10 mb-6">The two viable strategic positions</h2>
          <p style={{ opacity: 0.85 }}>Many insurers will attempt to occupy both positions simultaneously. This rarely works. Resources are diluted and investment is insufficient in both directions. The discipline to choose — by product line — is what separates strategic from reactive responses.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div style={{ ...cardStyle, borderTop: "3px solid #1D6FA4" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>Visible brand position</p>
              <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.9 }}>Customer knows they are buying from you — AI facilitates. Requires API feeds into AI platforms, brand data infrastructure, loyalty programmes, and digital marketing shift. Suitable for mass-market carriers with strong consumer brands.</p>
              <p className="text-xs" style={{ color: "#fca5a5" }}>Risk: Brand investment stranded if AI interfaces suppress carrier names</p>
            </div>
            <div style={{ ...cardStyle, borderTop: "3px solid #E63946" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#ff9999" }}>Invisible capacity position</p>
              <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.9 }}>AI interface or MGA is customer-facing — you provide capacity. Requires operational efficiency, pricing precision, loss ratio management, and API-ready underwriting. Suitable for wholesale carriers and capacity providers.</p>
              <p className="text-xs" style={{ color: "#fca5a5" }}>Risk: Race to the bottom on price; carrier commoditisation</p>
            </div>
          </div>

          {/* Playbook */}
          <h2 className="font-display text-white text-2xl mt-10 mb-6">What to do now — CEO and CDO playbook</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div style={cardStyle}>
              <p className="mono-label text-[9px] mb-2" style={{ color: "#ff9999" }}>This week</p>
              <p className="font-display text-white text-base mb-4">Test and audit</p>
              {playbookWeeks.map((item) => (
                <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ color: "#E63946", flexShrink: 0, marginTop: "2px" }}>→</span>
                  <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={cardStyle}>
              <p className="mono-label text-[9px] mb-2" style={{ color: "#fbbf24" }}>Months 1–18</p>
              <p className="font-display text-white text-base mb-4">Partner and build foundations</p>
              {playbookMonths.map((item) => (
                <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ color: "#F4A01C", flexShrink: 0, marginTop: "2px" }}>→</span>
                  <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={cardStyle}>
              <p className="mono-label text-[9px] mb-2" style={{ color: "#60a5fa" }}>Years 3–5</p>
              <p className="font-display text-white text-base mb-4">Redesign channels structurally</p>
              {playbookYears.map((item) => (
                <div key={item} style={{ display: "flex", gap: "8px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ color: "#1D6FA4", flexShrink: 0, marginTop: "2px" }}>→</span>
                  <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Governing principle */}
          <div style={{ ...cardStyle, borderLeft: "4px solid #E63946", marginTop: "32px" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "#ff9999" }}>The governing principle</p>
            <p className="text-white text-lg font-medium leading-relaxed">AI interfaces will become as important to personal lines distribution as PCWs are today. That transition happened faster than incumbents expected in the 2000s. It will happen faster still in the 2020s, because AI interfaces require no infrastructure build — they are already in the hands of your customers. The question is not whether to engage. It is how fast.</p>
          </div>

          <p className="text-white/40 text-xs leading-relaxed mt-10">Sources: McKinsey, BCG, GlobalData, Big I, NAIC, LMA Survey of Lloyd's Managing Agents (April 2025), eMarketer, Experian ChatGPT Insurance Marketplace Launch (February 2026), ZhongAn 2025 Interim Results, Mordor Intelligence. This note is for strategic analysis and planning purposes only and does not constitute financial, legal, or regulatory advice. © 2026 Eudaimon Consulting. All rights reserved.</p>
        </div>
      </article>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/50 text-[9px] mb-2">Rethinking your distribution strategy?</p>
              <p className="font-display text-white text-2xl">Talk to Eudaimon Consulting.</p>
            </div>
            <Link href="/contact" className="group flex items-center gap-2 px-7 py-3.5 bg-[#E63946] text-white rounded-full font-medium hover:bg-[#c92a35] transition-all flex-shrink-0">
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
