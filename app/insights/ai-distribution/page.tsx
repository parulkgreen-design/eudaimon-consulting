import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function AIDistributionArticle() {
  const execSummary = [
    { num: "1", title: "The interface controls the customer", body: "AI chatbots are not just a new customer service channel — they are a new distribution front-end that routes customers toward insurance products without the insurer's involvement. Whoever owns that interface controls discovery, comparison, and increasingly conversion." },
    { num: "2", title: "This follows a familiar pattern — but faster", body: "PCWs disrupted personal lines distribution in a decade. AI chatbots will move faster because they integrate into tools customers already use daily — ChatGPT, Gemini, Perplexity — rather than requiring a separate trip to a comparison site. Experian launched an insurance marketplace inside ChatGPT in February 2026." },
    { num: "3", title: "Brand invisibility is the real risk", body: "PCWs showed carrier brands side by side. AI interfaces may not. A customer asking ChatGPT for best home insurance may receive a product recommendation without knowing — or caring — which carrier underwrites it. Decades of brand equity can be bypassed in a single conversation." },
    { num: "4", title: "Personal lines are immediately exposed. Specialty is not", body: "Standardised, price-driven personal lines products are highly susceptible. Specialty and large commercial lines are structurally protected by complexity, relationship, and regulation — but are being transformed operationally from the inside by agentic AI." },
    { num: "5", title: "The economics will shift toward platforms", body: "Value currently distributed across carriers, brokers, agents, and PCWs will concentrate around whoever controls the AI interface layer. BCG estimates operating costs per dollar of premium could fall 15–25% for AI leaders." },
    { num: "6", title: "Two viable positions exist — doing nothing is not one", body: "Insurers must explicitly choose to be either a visible brand in AI interfaces or a capacity provider behind them. Passivity leads to disintermediation." },
    { num: "7", title: "The window for action is narrow", body: "McKinsey data shows a cohort of AI-leading insurers has already achieved 6.1x the total shareholder return of laggards over five years. First-mover advantages in AI distribution will compound." },
  ];

  const metrics = [
    { val: "$97bn", label: "US MGA premiums 2024", sub: "Up from $47bn in 2020 — MGAs are the fastest-growing distribution segment.", color: "#E63946" },
    { val: "700M", label: "OpenAI weekly active users", sub: "At Instant Checkout launch, September 2025.", color: "#1D6FA4" },
    { val: "6.1×", label: "TSR advantage for AI leaders", sub: "AI-leading insurers vs laggards over five years (McKinsey).", color: "#3B6D11" },
    { val: "29%", label: "Use AI for financial research", sub: "Share of generative AI users already using it for financial information and recommendations.", color: "#854F0B" },
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
    { channel: "Retail brokers (personal lines)", disruption: "High", color: "#A32D2D", bg: "rgba(163,45,45,0.15)", what: "AI handles comparison and advice, removing the broker's core value in simple and commoditised risks." },
    { channel: "PCWs / aggregators", disruption: "High", color: "#A32D2D", bg: "rgba(163,45,45,0.15)", what: "AI replicates the comparison function within tools customers already use daily. The PCW step becomes redundant." },
    { channel: "MGAs", disruption: "Opportunity", color: "#3B6D11", bg: "rgba(59,109,17,0.15)", what: "Structurally positioned as the licensed API binding layer that AI interfaces need. The fastest-growing distribution segment." },
    { channel: "Wholesale / specialty brokers", disruption: "Low", color: "#854F0B", bg: "rgba(133,79,11,0.15)", what: "Risk complexity protects the role. AI augments submission preparation but does not replace negotiation or relationship." },
    { channel: "Direct carrier websites", disruption: "Medium", color: "#854F0B", bg: "rgba(133,79,11,0.15)", what: "Discovery risk — customers may never reach the carrier site if AI intercepts the research conversation first." },
    { channel: "Tied / captive agents", disruption: "Medium", color: "#854F0B", bg: "rgba(133,79,11,0.15)", what: "AI comparison erodes the captive advantage, particularly in digital-native demographics and younger customer segments." },
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
    "Underwriter judgment on novel and emerging risks",
    "Negotiation of terms, conditions, and bespoke coverage",
    "Claims advocacy in complex disputes",
    "Large account relationship management at C-suite level",
  ];

  const scenarios = [
    {
      sc: "A",
      title: "AI as advisory layer",
      prob: "Moderate — 3–5 yr baseline",
      probColor: "#854F0B",
      probBg: "rgba(133,79,11,0.15)",
      body: "AI chatbots become a widely used research and comparison tool — similar to PCWs today — but the regulated intermediary step remains human or human-licensed. AI informs; humans bind. This is the most likely near-term scenario under current regulatory frameworks in Europe.",
      winners: "Carriers with strong digital brands. MGAs with API feeds. Brokers who use AI as an efficiency tool.",
      losers: "PCWs. Carriers with no API feed. Agents serving digitally native customers.",
    },
    {
      sc: "B",
      title: "AI as dominant front-end",
      prob: "High — 5–10 yr horizon",
      probColor: "#A32D2D",
      probBg: "rgba(163,45,45,0.15)",
      body: "AI becomes the primary discovery and comparison channel for personal lines. Regulatory frameworks adapt to allow AI-facilitated binding through licensed entities. PCWs become marginal. This is the most likely medium-term outcome in the US and UK markets.",
      winners: "AI platforms. MGAs as binding engines. Carriers with lowest CAC and API-ready products.",
      losers: "PCWs. Broker-dependent carriers in personal lines. Insurers without structured product data.",
    },
    {
      sc: "C",
      title: "Platform-controlled distribution",
      prob: "Low — 10+ yr horizon",
      probColor: "#3B6D11",
      probBg: "rgba(59,109,17,0.15)",
      body: "A small number of AI platforms — OpenAI, Google, Apple, Amazon — control customer insurance journeys end-to-end, including white-labelled products they carry or co-underwrite. Insurance becomes a feature, not an industry.",
      winners: "Big Tech. Reinsurers providing capacity. Specialty insurers too complex to platform-ise.",
      losers: "All incumbents relying on brand and distribution. Traditional agents and brokers. Mid-size personal lines carriers.",
    },
    {
      sc: "D",
      title: "Fragmentation and regulation",
      prob: "Moderate — near-term Europe",
      probColor: "#854F0B",
      probBg: "rgba(133,79,11,0.15)",
      body: "AI distribution remains fragmented by jurisdiction. The EU AI Act, FCA caution, and US state divergence create materially different AI distribution models in each market. No global winner emerges in the near term.",
      winners: "Incumbents with deep regulatory expertise. Brokers in heavily regulated markets.",
      losers: "AI-first disruptors without regulatory depth. Carriers who over-invested in a single AI distribution channel.",
    },
  ];

  const playbookWeeks = [
    "Search your product category in ChatGPT and Perplexity — record exactly what comes up, and why",
    "Audit whether your product data is structured and in AI-ingestible formats (structured JSON feeds, clean metadata)",
    "Identify which channel partners are actively building AI distribution capabilities versus which will be bypassed",
  ];

  const playbookMonths = [
    "Engage directly with OpenAI, Perplexity, and Google on product data integration — do not wait for them to approach you",
    "Identify the licensed intermediary vehicle needed to enable AI-referred binding in your key markets",
    "Run an AI-proactive renewal pilot — contact 10% of your renewal book before AI interfaces do it first",
    "Build API-first quoting in personal lines — hours-long quoting cycles are structurally incompatible with AI distribution",
  ];

  const playbookYears = [
    "Decide explicitly: visible brand or invisible capacity — by product line, not by company",
    "Reprice renewal premium assumptions — inertia uplift will erode 2–5pp as AI-assisted switching becomes mainstream",
    "For specialty carriers: implement agentic AI submission intake within 18 months (Hiscox benchmark: 3 days to 3 minutes)",
    "Consider MGA acquisition or creation as the licensed vehicle for AI distribution — capital-light and margin-accretive",
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
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-white/30 text-white">Executive Research Note</span>
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={11} />
              <span className="mono-label text-[9px]">7 min read</span>
            </div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            Who Controls the Customer? AI Chatbots and the Future of Insurance Distribution
          </h1>
          <p className="text-white text-xl leading-relaxed border-l-2 border-[#E63946] pl-5">
            AI chatbots are not a new customer service channel. They are a new distribution front-end that routes customers toward insurance products without the insurer's involvement. Whoever owns that interface controls discovery, comparison, and increasingly conversion.
          </p>

          {/* Byline metadata */}
          <div style={{ ...cardStyle, marginTop: "32px", padding: "20px 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Published", val: "April 2026" },
                { label: "Coverage", val: "Europe · North America · Asia-Pacific" },
                { label: "Focus", val: "Personal Lines, Specialty & Commercial Insurance" },
                { label: "Format", val: "Executive Research Note" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="mono-label text-white/40 text-[9px] mb-1">{m.label}</p>
                  <p className="text-white text-xs font-medium">{m.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-white text-base leading-relaxed">

          {/* Executive summary */}
          <h2 className="font-display text-white text-2xl mt-2 mb-6">Executive summary</h2>

          <p style={{ opacity: 0.9 }}>The insurance industry has navigated distribution disruption before. Price comparison websites reshaped personal lines over a decade, concentrating customer relationships away from carriers and toward whoever sat closest to the customer at the moment of purchase. AI chatbots are the next iteration of that same structural force — but moving significantly faster, because they require no separate infrastructure build. They are already in consumers' hands, used daily for research, writing, and decision-making across every domain including financial services.</p>

          <p style={{ opacity: 0.9 }}>In February 2026, Experian launched an insurance marketplace inside ChatGPT. OpenAI's Instant Checkout was live in September 2025 with 700 million weekly active users. These are not pilots or proof of concepts. They are early production deployments of a distribution channel that could, within a decade, be as important to personal lines insurance as price comparison websites are today.</p>

          <p style={{ opacity: 0.9 }}>This note sets out the seven things insurance CEOs and Chief Distribution Officers need to understand, examines how the disruption differs by channel and product line, maps four plausible futures, and provides a structured playbook for the decisions that cannot wait.</p>

          {/* Key findings */}
          <h2 className="font-display text-white text-2xl mt-10 mb-6">Seven things every insurance CEO needs to know</h2>
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.12)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="mono-label text-white text-[9px]">Key findings</p>
            </div>
            {execSummary.map((f) => (
              <div key={f.num} style={{ display: "grid", gridTemplateColumns: "48px 1fr", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ padding: "14px 16px", borderRight: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                  <span className="font-display text-2xl font-bold" style={{ color: "#E63946", opacity: 0.8 }}>{f.num}</span>
                </div>
                <div style={{ padding: "14px 20px" }}>
                  <p className="text-white text-sm font-medium mb-1">{f.title}</p>
                  <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">The market in numbers</h2>
          <p style={{ opacity: 0.85 }}>The scale of what is already underway makes clear that AI distribution is not a distant planning consideration. The data points below illustrate the speed and scale of the transition already in motion.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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

          {/* How it differs */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">How AI chatbots differ from search and PCWs</h2>
          <p style={{ opacity: 0.85 }}>Search engines and AI chatbots both capture purchase intent, but the mechanism — and the resulting power dynamics — are fundamentally different. Search requires a customer to actively navigate; AI chatbots are embedded in tools millions already use every day. The comparison step that PCWs own requires a deliberate trip to a separate site. AI chatbots require no such decision. A customer researching home insurance in a ChatGPT conversation is already inside the distribution channel before they know it.</p>

          <div style={{ ...cardStyle, padding: 0, overflow: "hidden", marginTop: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", background: "rgba(255,255,255,0.1)", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="mono-label text-white/60 text-[9px]">Dimension</p>
              <p className="mono-label text-white/60 text-[9px]">Google search</p>
              <p className="mono-label text-[9px]" style={{ color: "#ff9999" }}>AI chatbot</p>
            </div>
            {comparison.map((row, i) => (
              <div key={row.dimension} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                <p className="text-white text-xs font-medium">{row.dimension}</p>
                <p className="text-white text-xs" style={{ opacity: 0.75 }}>{row.google}</p>
                <p className="text-white text-xs font-medium" style={{ color: "#ff9999" }}>{row.ai}</p>
              </div>
            ))}
          </div>

          {/* Channel disruption */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Channel disruption — who wins and who loses</h2>
          <p style={{ opacity: 0.85 }}>The impact on existing distribution channels is not uniform. The same structural logic that disrupts personal lines retail brokers creates a significant opportunity for MGAs, which are uniquely positioned to act as the licensed binding engine that AI interfaces require. Understanding where each channel sits in this picture is essential to designing the right response.</p>

          <div style={{ ...cardStyle, padding: 0, overflow: "hidden", marginTop: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 2fr", background: "rgba(255,255,255,0.1)", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="mono-label text-white/60 text-[9px]">Channel</p>
              <p className="mono-label text-white/60 text-[9px]">Disruption level</p>
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
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Personal lines versus commercial — a critical distinction</h2>
          <p style={{ opacity: 0.85 }}>Perhaps the most important strategic insight in this analysis is that AI distribution disruption is not uniform across the industry. The exposure of personal lines motor or home insurance to AI-led disintermediation is fundamentally different from the exposure of a complex D&O placement at Lloyd's. Conflating the two leads to either complacency in the lines most at risk, or unnecessary alarm in the lines most protected. The right response requires clear segmentation.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div style={{ ...cardStyle, borderTop: "3px solid #E63946" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#ff9999" }}>Personal lines — exposed now</p>
              <p className="text-white text-sm leading-relaxed mb-4" style={{ opacity: 0.9 }}>Motor, home, travel, and pet insurance share three characteristics that make them highly susceptible to AI-led distribution disruption: products are standardised and describable in natural language in minutes; pricing is largely algorithmic and accessible via API; and customer decisions are primarily driven by price and coverage level rather than relationship. These are identical to the conditions that made personal lines susceptible to PCW disruption. The difference is pace — PCWs required infrastructure build and consumer habit change over a decade. AI chatbots require neither.</p>
              <p className="mono-label text-white/50 text-[9px] mb-3">AI disruption susceptibility score (0–100)</p>
              <div className="space-y-3">
                {personalLines.map((item) => (
                  <div key={item.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                      <span className="text-white text-xs">{item.label}</span>
                      <span className="text-xs font-bold" style={{ color: "#E63946" }}>{item.pct}</span>
                    </div>
                    <div style={{ height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${item.pct}%`, background: "#E63946", borderRadius: "3px" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...cardStyle, borderTop: "3px solid #1D6FA4" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>Specialty and commercial — protected front-end</p>
              <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.9 }}>D&O, marine, energy, cyber, and large commercial lines are structurally resistant to AI front-end disruption for reasons that are unlikely to change within any near-term planning horizon. Risk descriptions require extensive data collection that cannot be gathered in a simple conversation. Pricing requires underwriter judgment, not just algorithms. Placement involves negotiation between broker and underwriter, not form submission. A CFO does not ask ChatGPT to arrange their D&O cover.</p>
              <p className="text-white text-sm leading-relaxed mb-4" style={{ opacity: 0.9 }}>However, AI is already transforming the back-end operations of specialty placement with measurable results. Hiscox demonstrated quote turnaround for Sabotage and Terrorism going from three days to three minutes. The LMA found that managing agents who have deployed agentic AI report transformative efficiency gains. The competitive threat in specialty is not disintermediation — it is the widening gap between those who have automated their operations and those who have not.</p>
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
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Four plausible futures</h2>
          <p style={{ opacity: 0.85 }}>Rather than a single forecast, we present four distinct scenarios with specific trigger conditions, likely winners and losers, and probability assessments. These are planning tools, not predictions. The value of this framework lies in helping leadership teams prepare for a range of outcomes rather than optimising for a single assumed trajectory.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {scenarios.map((s) => (
              <div key={s.sc} style={cardStyle}>
                <p className="font-display text-white text-3xl font-bold mb-2" style={{ opacity: 0.15 }}>{s.sc}</p>
                <p className="font-display text-white text-lg mb-2">{s.title}</p>
                <span className="mono-label text-[9px] px-3 py-1 rounded-full inline-block mb-4" style={{ color: s.probColor, background: s.probBg }}>{s.prob}</span>
                <p className="text-white text-sm leading-relaxed mb-4" style={{ opacity: 0.85 }}>{s.body}</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "10px" }}>
                  <p className="text-xs mb-2" style={{ color: "#86efac" }}>Winners: {s.winners}</p>
                  <p className="text-xs" style={{ color: "#fca5a5" }}>Losers: {s.losers}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Two positions */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">The two viable strategic positions</h2>
          <p style={{ opacity: 0.85 }}>Across all four scenarios, two viable insurer positions emerge. The critical discipline is to choose one explicitly — by product line — rather than defaulting to a compromise that delivers neither. Many insurers will attempt to occupy both positions simultaneously. Resources are diluted and investment is insufficient in both directions, leaving the carrier neither the most visible brand nor the most efficient capacity provider. The discipline to choose is what separates strategic from reactive responses.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div style={{ ...cardStyle, borderTop: "3px solid #1D6FA4" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>Visible brand position</p>
              <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.9 }}>The customer knows they are buying from you — AI facilitates the journey but the carrier brand is present throughout. This position requires API feeds into AI platforms, structured brand data, loyalty programmes that create value AI comparison cannot surface, and a fundamental shift in digital marketing investment away from search and toward AI-platform presence. It is the right position for mass-market carriers with strong consumer brands and direct distribution history.</p>
              <p className="text-xs mt-2" style={{ color: "#fca5a5" }}>Risk: Brand investment is stranded if AI interfaces suppress carrier names in favour of product attributes</p>
            </div>
            <div style={{ ...cardStyle, borderTop: "3px solid #E63946" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#ff9999" }}>Invisible capacity position</p>
              <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.9 }}>The AI interface or MGA is the customer-facing entity — the carrier provides capacity behind the scenes. This position requires best-in-class operational efficiency, pricing precision, loss ratio management, and genuinely API-ready underwriting. It is the right position for wholesale carriers, capacity providers, and specialty lines where customer brand recognition is structurally less important than technical expertise and capacity availability.</p>
              <p className="text-xs mt-2" style={{ color: "#fca5a5" }}>Risk: Commoditisation pressure as AI comparison drives margin compression in capacity markets</p>
            </div>
          </div>

          {/* Playbook */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">CEO and CDO playbook — what to do and when</h2>
          <p style={{ opacity: 0.85 }}>The decisions that matter most in AI distribution are time-sensitive. By the end of 2027, the partnerships formed, the data infrastructure built or neglected, and the channel strategy chosen will be embedded in structures that are costly and slow to reverse. The playbook below organises the most important actions by time horizon.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
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

          {/* Data sources and disclaimer */}
          <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="mono-label text-white/40 text-[9px] mb-3">Data sources and references</p>
            <p className="text-white/40 text-xs leading-relaxed">GlobalData UK Insurance Consumer Survey (2024–25); LMA Survey of Lloyd's Managing Agents (April 2025); BCG Analysis of Multi-Agent AI Systems in Commercial Insurance (2025); McKinsey Insurance AI Transformation Analysis (2025); Dimension Market Research Insurance Chatbot Market Report (2024); Precedence Research Generative AI in Insurance (2025); Mordor Intelligence APAC Insurtech Market (2025); Experian Insurance Marketplace ChatGPT Launch press release (February 2026); Medium — How AI is Rewriting Specialty Insurance in Lloyd's (March 2026); Artificial Labs Series B announcement (February 2026); ZhongAn Online 2025 Interim Results; PwC FinTech in ASEAN 2024; Bain & Company Making the Most of Asia-Pacific's Insurance Boom; Insurance Times AI coverage (2024–25); Search Engine Land AI Shopping analysis (November 2025); hyperexponential AI and Data Technology in Insurance (December 2025).</p>
            <p className="text-white/40 text-xs leading-relaxed mt-4">Disclaimer: This research note is for strategic analysis purposes only. Market projections represent consensus estimates from cited sources and carry inherent uncertainty. This note does not constitute financial, legal, or regulatory advice. Regulatory frameworks vary by jurisdiction and evolve rapidly — organisations should obtain independent regulatory advice before implementing AI distribution strategies. © 2026 Eudaimon Consulting. All rights reserved.</p>
          </div>
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
