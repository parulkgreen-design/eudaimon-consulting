import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function OptimalAutonomyArticle() {
  const horizons = [
    {
      period: "Horizon 1 · 2026",
      title: "Task-Specific Agents",
      subtitle: "Efficiency and ROIC",
      cr: "CR: 92–97% → 88–94%",
      color: "#1D6FA4",
      body: "Purpose-built agents automate individual tasks within existing workflows. Claims intake and triage, underwriting data extraction, fraud signal detection, personal lines straight-through processing. Eliminates the 60–70% of processing time that is data assembly rather than judgment.",
      kpis: ["Expense ratio –3 to –5pts", "STP rate personal lines >80%", "Motor claims cycle: 14 days → <3 days", "ROIC on H1 investment >35% within 18 months"],
    },
    {
      period: "Horizon 2 · 2027–28",
      title: "Multi-Agent Orchestration",
      subtitle: "Process Transformation",
      cr: "CR: 88–94% → <92%",
      color: "#1D6FA4",
      body: "Specialised agents communicate, delegate, and coordinate across functions without human intermediation. An orchestrator layer governs task decomposition and escalates to humans when confidence falls below threshold. The claims lifecycle, underwriting workflow, and distribution journey reconstitute as agent-native processes.",
      kpis: ["Loss ratio –4 to –7pts via leakage reduction", "Zero-touch claims >60% of volume", "Customer retention +5–8pts", "Combined ratio target <92%"],
    },
    {
      period: "Horizon 3 · 2029–30",
      title: "The Autonomous Carrier",
      subtitle: "Business Model Reinvention",
      cr: "CR: <88% → <85%",
      color: "#1D6FA4",
      body: "A new operating model built around agent capabilities rather than adapted from legacy processes. Parametric products settle within minutes of event confirmation. Embedded distribution eliminates broker intermediation for vanilla products. Continuous usage-based underwriting reprices coverage in near-real-time.",
      kpis: ["Parametric GWP 15–25% of portfolio", "Zero-touch settlement >80%", "Embedded channel 20–30% personal lines GWP", "Autonomous carrier CR target <85%"],
    },
  ];

  const peers = [
    {
      carrier: "AXA",
      cr: "~93%",
      horizon: "H2 Leading",
      horizonColor: "#1D6FA4",
      useCases: "400+ use cases; SecureGPT; real-time IoT risk scoring; claims triage",
      moat: "900 data scientists; Group CDAIO role; Stanford HAI partner",
      gap: "Agentic orchestration still fragmented across 50 markets — governance inconsistency risk",
    },
    {
      carrier: "Allianz",
      cr: "92.2%",
      horizon: "H2 Leading",
      horizonColor: "#1D6FA4",
      useCases: "900+ use cases; Anthropic partnership; claims automation; dynamic pricing pilots",
      moat: "Record €17.4bn profit; €2tr AUM data asset; new digital board exec",
      gap: "Explicitly cautious on autonomy pace; regulatory complexity in Germany/EU",
    },
    {
      carrier: "Chubb",
      cr: "~93%",
      horizon: "H2 → H3",
      horizonColor: "#3B6D11",
      useCases: "85% UW/claims automation target; Chubb Studio 250+ embedded partners; $1.4bn digital GWP",
      moat: "3,500 engineers globally; Chubb Studio moat; 20% workforce restructuring underway",
      gap: "Execution risk in 20% headcount reduction; cultural change management",
    },
    {
      carrier: "Zurich",
      cr: "~94%",
      horizon: "H1 → H2",
      horizonColor: "#854F0B",
      useCases: "160+ AI solutions; Agentic Hyper Challenge (200 prototypes); 13-min claims resolution (UK)",
      moat: "AI Lab (ETH Zurich / St Gallen); new Chief AI Officer Oct 2025",
      gap: "Moving from pilots to scale; not yet committed to explicit CR targets from AI",
    },
    {
      carrier: "Aviva",
      cr: "94.6%",
      horizon: "H1",
      horizonColor: "#854F0B",
      useCases: "12 AI fraud models; £90m+ claims savings; claims summarisation; medical UW tools",
      moat: "25m customer data asset; Direct Line acquisition adds scale",
      gap: "End-to-end transformation still aspirational; behind leaders on architecture",
    },
  ];

  const moats = [
    {
      title: "Proprietary data",
      body: "Long-tail claims loss triangles (10–20 years of internally generated data not purchasable on the market), real-time IoT and telematics streams, and behavioural data training retention agents. Aviva's 25m customers and Allianz's €2 trillion AUM are data assets in the actuarial sense. Data acquisition should be treated as a capital allocation priority on a par with technology infrastructure.",
    },
    {
      title: "Governance as competitive licence",
      body: "Counterintuitively, the deepest moat may not be the most aggressive automation — it will be the most trusted. Explainability infrastructure, model cards, and a formally documented agentic authority framework become differentiators with sophisticated commercial clients. Carriers that build governance before they need it will expand autonomy faster than those who retrofit it under regulatory pressure.",
    },
    {
      title: "Speed to settlement as brand promise",
      body: "Carriers achieving verifiable zero-touch settlement for standard claims can make this a client-facing performance commitment — differentiating on service quality rather than price. Zurich's 13-minute UK contents claim resolution is an early proof point. At scale, this becomes a structural retention advantage that a competitor cannot replicate without matching the underlying data and agent architecture.",
    },
  ];

  const actions = [
    {
      num: "01",
      title: "Architecture: build or procure?",
      body: "The most consequential choice is whether to build a proprietary agentic architecture or deploy on third-party platforms. Proprietary is slower and more expensive in Year 1. It is the source of durable differentiation by Year 3. This is a CEO-level capital allocation decision — not a CTO matter.",
    },
    {
      num: "02",
      title: "Governance before scale",
      body: "Build the governance architecture — explainability tooling, autonomy authority frameworks, model monitoring, regulatory engagement protocols — before expanding agent deployment beyond Horizon 1. The August 2026 EU AI Act deadline is an immediate compliance obligation for any carrier with European operations.",
    },
    {
      num: "03",
      title: "Reskilling, not retrenchment",
      body: "The primary failure mode in insurance transformation is not technical — it is organisational. Underwriters whose role shifts from decision-maker to model governor require structured reskilling, not redundancy. Carriers that invest in this transition retain institutional knowledge that cannot be recovered once lost.",
    },
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
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-10" style={{ background: "radial-gradient(circle, rgba(29,111,164,0.8) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-10">
            <ChevronLeft size={14} />
            Back to Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="mono-label text-[9px] px-3 py-1 rounded-full" style={{ background: "rgba(29,111,164,0.3)", color: "#93c5fd" }}>Corporate Strategy</span>
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-white/30 text-white">Strategic Research Note</span>
            <span className="mono-label text-white/60 text-[9px]">March 2026</span>
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={11} />
              <span className="mono-label text-[9px]">8 min read</span>
            </div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-6">
            The Optimal Frontier: Finding the Balance Between Robots and Risk
          </h1>
          <p className="text-white text-lg font-display mb-6">Redefining Insurance Strategy 2026–2030</p>
          <p className="text-white text-xl leading-relaxed border-l-2 border-[#1D6FA4] pl-5">
            Carriers that architect toward Optimal Autonomy — a calibrated balance of automated and human decision-making — will structurally reduce combined ratios by 8–15 percentage points by 2030. Those that treat this as another technology upgrade will cede those economics to more decisive competitors.
          </p>
          <p className="text-white/40 text-xs mt-6 font-mono">Based on publicly available 2025 annual report disclosures and industry benchmarks · © 2026 Eudaimon Consulting</p>
        </div>
      </section>

      <div className="divider-gradient" />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-white text-base leading-relaxed">

          <p>The industry spent 2023–2025 deploying generative AI as a productivity layer — drafting policy wordings, summarising claims notes, powering customer service chatbots. The ROIC has been real but modest: 10–20% efficiency gains within functions, no structural change to the combined ratio.</p>
          <p>The strategic discontinuity arriving between 2026 and 2030 is categorically different. Autonomous agent systems — capable of perceiving context, making sequential decisions, using tools, and coordinating with other agents — do not improve insurance workflows. They replace them.</p>

          {/* Core thesis */}
          <div style={{ ...cardStyle, borderLeft: "4px solid #1D6FA4" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "#93c5fd" }}>The Core Thesis</p>
            <p className="text-white text-lg leading-relaxed font-medium">The question for insurance leadership is no longer whether to deploy agents, but how fast, how deep, and under what governance architecture. Carriers that architect toward Optimal Autonomy will structurally reduce combined ratios by 8–15 percentage points by 2030. The window to set the architecture is now.</p>
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-6">Why this window matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {[
              { val: "~2.3%", label: "Real premium growth forecast 2026–27", sub: "Swiss Re Sigma. In a softening market, profitability cannot be earned through rate alone." },
              { val: "$100bn+", label: "Global insured NatCat losses", sub: "Five consecutive years. Real-time data-driven underwriting becomes structurally critical." },
              { val: "Aug 2026", label: "EU AI Act enforcement deadline", sub: "High-risk AI systems — including insurance pricing and risk scoring — face full compliance obligations." },
            ].map((m) => (
              <div key={m.val} style={cardStyle}>
                <p className="font-display text-2xl font-bold mb-1" style={{ color: "#93c5fd" }}>{m.val}</p>
                <p className="text-white text-sm font-medium mb-2">{m.label}</p>
                <p className="text-white/70 text-xs leading-relaxed">{m.sub}</p>
              </div>
            ))}
          </div>

          <div className="py-8 my-8" style={{ borderTop: "2px solid #1D6FA4", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="font-display text-white text-xl italic leading-relaxed">"CEOs who defer architectural decisions in the expectation of greater market clarity are not managing risk — they are accepting structural disadvantage."</p>
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">Defining Optimal Autonomy</h2>
          <p>Maximum autonomy — 100% automated decision-making — is neither achievable nor strategically correct within this planning horizon. Novel risk classes, systemic catastrophe events, litigation exposure, and regulatory requirements for human oversight create hard limits.</p>

          <div style={{ ...cardStyle, borderColor: "rgba(29,111,164,0.5)" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "#93c5fd" }}>Definition</p>
            <p className="text-white text-base leading-relaxed">Risk-aware automation characterised by a calibrated balance of human and automated judgment, ensuring that decision-making is optimised for both speed and efficiency and long-term loss-ratio integrity. Autonomy is expanded precisely to the boundary where human judgment adds more value than it costs — and no further.</p>
          </div>

          <p>The most useful strategic frame is the shift from Human-in-the-Loop — where people are embedded in every decision — to Human-on-the-Loop, where people govern, audit, and intervene, but do not execute routine decisions. Across a hypothetical £5bn GWP P&C carrier, this shift implies a structural combined ratio improvement of 8–14 percentage points by 2030.</p>

          <h2 className="font-display text-white text-2xl mt-10 mb-6">Three horizons to Optimal Autonomy</h2>
          <div className="space-y-5">
            {horizons.map((h) => (
              <div key={h.period} style={{ ...cardStyle, borderTop: `3px solid ${h.color}` }}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                  <div>
                    <p className="mono-label text-[9px] mb-1" style={{ color: "#93c5fd" }}>{h.period}</p>
                    <p className="font-display text-white text-xl">{h.title}</p>
                    <p className="text-white/70 text-sm mt-1">{h.subtitle}</p>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px 16px" }}>
                    <p className="font-mono text-sm font-bold" style={{ color: "#93c5fd" }}>{h.cr}</p>
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed mb-5">{h.body}</p>
                <div>
                  <p className="mono-label text-white/60 text-[9px] mb-3">Target KPIs</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {h.kpis.map((kpi) => (
                      <div key={kpi} className="flex gap-2 items-start">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: h.color }} />
                        <p className="text-white text-xs">{kpi}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="divider-gradient my-10" />

          <h2 className="font-display text-white text-2xl mt-10 mb-4">Peer analysis — where the leaders stand</h2>
          <p>The following assessment draws on full-year 2025 results and strategy disclosures from AXA, Allianz, Zurich, Chubb, and Aviva. The Evident AI Insurance Index 2025 independently ranks AXA and Allianz as the only two carriers in the top five across all four pillars — against an industry average score of 35.5.</p>

          <div className="space-y-4 my-8">
            {peers.map((p) => (
              <div key={p.carrier} style={cardStyle}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
                  <p className="font-display text-white text-xl w-24 flex-shrink-0">{p.carrier}</p>
                  <span
                    className="mono-label text-[9px] px-3 py-1 rounded-full w-fit font-semibold"
                    style={{
                      color: p.horizonColor === "#1D6FA4" ? "#93c5fd" : p.horizonColor === "#3B6D11" ? "#86efac" : "#fcd34d",
                      background: p.horizonColor === "#1D6FA4" ? "rgba(29,111,164,0.3)" : p.horizonColor === "#3B6D11" ? "rgba(59,109,17,0.3)" : "rgba(133,79,11,0.3)",
                    }}
                  >
                    {p.horizon}
                  </span>
                  <span className="mono-label text-white/70 text-[9px]">2025 CR: {p.cr}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <p className="mono-label text-[9px] text-white/60 mb-2">Lead use cases</p>
                    <p className="text-white text-sm leading-relaxed">{p.useCases}</p>
                  </div>
                  <div>
                    <p className="mono-label text-[9px] text-white/60 mb-2">Strategic moat</p>
                    <p className="text-white text-sm leading-relaxed">{p.moat}</p>
                  </div>
                  <div>
                    <p className="mono-label text-[9px] text-[#E63946] mb-2">Gap / risk</p>
                    <p className="text-white text-sm leading-relaxed">{p.gap}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">Three structural moats in the agentic era</h2>
          <p>Raw access to AI models is not a durable competitive advantage — foundational model capabilities are available to all carriers. Three categories of structural moat will determine which carriers emerge as durable leaders.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
            {moats.map((m, i) => (
              <div key={m.title} style={{ ...cardStyle, borderTop: "3px solid #1D6FA4" }}>
                <p className="font-mono text-2xl font-bold mb-3" style={{ color: "rgba(147,197,253,0.4)" }}>{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display text-white text-base mb-3">{m.title}</p>
                <p className="text-white text-sm leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="divider-gradient my-10" />

          <h2 className="font-display text-white text-2xl mt-10 mb-4">Call to action — the next 18 months</h2>
          <p>By the end of 2027, the agentic architecture decisions made today will be embedded in systems, data pipelines, vendor contracts, and organisational structures that are costly and slow to reverse.</p>

          <div className="space-y-4 my-8">
            {actions.map((a) => (
              <div key={a.num} style={cardStyle} className="flex gap-5">
                <span className="font-mono text-2xl font-bold flex-shrink-0" style={{ color: "rgba(147,197,253,0.5)" }}>{a.num}</span>
                <div>
                  <p className="font-display text-white text-lg mb-2">{a.title}</p>
                  <p className="text-white text-sm leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, borderColor: "rgba(29,111,164,0.6)", textAlign: "center", padding: "32px" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#93c5fd" }}>The 18-Month Imperative</p>
            <p className="font-display text-white text-xl leading-relaxed">The Autonomy Frontier is being drawn now. The technology is available. The macro tailwinds are present. The regulatory framework, whilst demanding, is knowable and manageable. What separates the leaders from the followers is not capability. It is conviction.</p>
          </div>

          <p className="text-white/40 text-xs leading-relaxed mt-10">This Strategic Research Note has been prepared by Eudaimon Consulting, March 2026. Market impact estimates are analytical projections derived from publicly available industry benchmarks and published 2025 annual reports. Carrier assessments are based on public 2025 disclosures only. This note is for general information purposes only and does not constitute investment, legal, or regulatory advice. © 2026 Eudaimon Consulting. All rights reserved.</p>
        </div>
      </article>

      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/60 text-[9px] mb-2">Defining your autonomy strategy?</p>
              <p className="font-display text-white text-2xl">Talk to Eudaimon Consulting.</p>
            </div>
            <Link href="/contact" className="group flex items-center gap-2 px-7 py-3.5 bg-[#1D6FA4] text-white rounded-full font-medium hover:bg-[#185FA5] transition-all flex-shrink-0">
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
