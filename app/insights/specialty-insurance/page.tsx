import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function SpecialtyInsuranceArticle() {

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    padding: "24px",
  };

  const shocks = [
    {
      id: "COVID-19",
      period: "2020–2021",
      color: "#E63946",
      nature: "Systemic — all geographies, all sectors simultaneously",
      headline: "~$107bn global insured losses. The largest non-catastrophe insurance loss event in history.",
      pricing: "All specialty lines +5–15% at January 2021 renewals. Event cancellation capacity largely closed. Trade credit +30–50%. D&O +20–40%.",
      structural: "Permanent communicable disease exclusions in commercial BI. Pandemic risk now broadly uninsurable without state backing. Mandatory BI wording clarity introduced at Lloyd's.",
    },
    {
      id: "Russia–Ukraine War",
      period: "2022–ongoing",
      color: "#854F0B",
      nature: "Geographically concentrated, asset-class specific",
      headline: "Largest aviation insurance loss event on record. 400–600 Western-leased aircraft stranded; $10–13bn commercial value; ~$4.5bn insured exposure.",
      pricing: "Aviation war +100%+ (e.g. Emirates). January 2023: global property cat +37%, US property cat +50%, retro +50%+. Dedicated reinsurance capital fell 15.7% to $355bn.",
      structural: "Dual-flag aircraft risk embedded in underwriting. Lloyd's mandated state-sponsored cyber exclusions (March 2023). Landmark UK High Court judgment June 2025 awarded AerCap $1bn+.",
    },
    {
      id: "Red Sea & Strait of Hormuz",
      period: "2023–present",
      color: "#1D6FA4",
      nature: "Choke-point specific — escalating severity",
      headline: "War risk premiums rose 40× on Red Sea routes. Hormuz: premiums from 0.25% to 3.5–10% of vessel value per transit. Traffic collapsed from 100+ to ~10 vessels per day.",
      pricing: "Red Sea: 0.025% to 1%+ per voyage. Hormuz: 3.5–10% of hull value per transit. VLCCs quoted in double-digit millions per trip. Many underwriters declined to offer cover at any price.",
      structural: "Lloyd's JWC designated entire Arabian Gulf as conflict zone. All 12 International Group P&I clubs issued 72-hour war cover cancellation notices. Choke-point risk permanently repriced.",
    },
    {
      id: "Global Inflation & Rate Shock",
      period: "2021–2023",
      color: "#3B6D11",
      nature: "Macro-driven — all lines, cumulative erosion",
      headline: "Claims inflation added ~$30bn to industry loss costs in 2021 above historical trend. Reinsurance capital cost rose from ~8% to 11%+ in H1 2023.",
      pricing: "January 2023: hardest renewal in a generation. Global property cat +37%, US property cat +50%, retro +165% cumulative since 2017, D&F +160% since 2017.",
      structural: "Inflation indexation clauses now standard in property policies. Mandatory cedant valuation audits at renewal. US social inflation in casualty: structural and unresolved.",
    },
  ];

  const implications = [
    {
      audience: "Insurers and Reinsurers",
      color: "#E63946",
      items: [
        { title: "Underwriting discipline", body: "Mandate explicit annual wording reviews for all specialty lines. The COVID-19 experience showed that vague policy language creates existential legal risk. The Hormuz crisis is repeating this dynamic in marine war and cargo. Clarity of coverage scope is non-negotiable." },
        { title: "Pricing maintenance", body: "Resist premature soft-cycle pressure. The January 2023 repricing corrected structural under-pricing accumulated over 2015–2020. Softening too quickly leaves the market exposed to the next shock with inadequate rate and reserve buffers." },
        { title: "Choke-point exposure assessment", body: "Identify aggregate exposure to vessels transiting the Arabian Gulf, energy assets in the Persian Gulf, and contingent BI policies with supply chain triggers linked to Gulf oil flows. This assessment must inform immediate capacity management decisions." },
        { title: "Casualty reserve stress-testing", body: "Reserves set in 2020–2022 for US casualty lines may be structurally inadequate due to social inflation. Prior-year reserve development should be stress-tested against nuclear verdict frequency and litigation funding trends." },
      ],
    },
    {
      audience: "Brokers",
      color: "#854F0B",
      items: [
        { title: "Proactive coverage mapping", body: "Clients — particularly corporate energy buyers, shipping companies, and manufacturers with Gulf supply chains — need clear communication about what their current policies do and do not cover. Coverage disputes are more damaging than known coverage gaps." },
        { title: "Access to government-backed facilities", body: "For risks genuinely unplaceable in the private market, brokers should actively facilitate access to MIGA (World Bank), national export credit agencies (UKEF, US EXIM, SACE), and specialist state-backed pools. This requires different placement capabilities than standard market placements." },
        { title: "Real-time market intelligence", body: "Capacity availability, premium levels, and coverage terms are changing weekly. Brokers with real-time intelligence on JWC designations, P&I club positions, and underwriter appetite will be significantly more valuable than those operating on stale information." },
      ],
    },
    {
      audience: "Corporate Buyers",
      color: "#1D6FA4",
      items: [
        { title: "Contingent BI review — now", body: "Policies written before 2024 may not cover Hormuz-related supply chain disruption if war exclusions apply to IRGC actions. Review immediately for crude oil supply chains, LNG contracts, petrochemical inputs, and container trade through the Gulf." },
        { title: "Incorporate war risk into procurement", body: "Marine war premiums of 3.5–10% of vessel value per transit — versus a pre-crisis baseline below 0.5% — represent a step-change in shipping economics that must flow through to contract pricing and hedging strategies." },
        { title: "Map uninsured exposures explicitly", body: "Pandemic, active interstate war, and some geopolitical disruptions are now excluded from standard commercial policies. Maintain an explicit map of uninsured or uninsurable exposures. Do not assume historical coverage scope still applies." },
      ],
    },
  ];

  const rateChanges = [
    { line: "P&C Reinsurance (Jan 2021 renewals)", change: "+6.5% nominal", color: "#E63946", pct: 15 },
    { line: "Aviation war — post Ukraine (2022)", change: "+100%+", color: "#E63946", pct: 75 },
    { line: "Marine war — Black Sea (2022)", change: "Premiums to 3–5% of hull value", color: "#E63946", pct: 55 },
    { line: "Global property cat reinsurance (Jan 2023)", change: "+37% global / +50% US", color: "#E63946", pct: 50 },
    { line: "Retrocessional market (Jan 2023)", change: "+50%+ / cumulative +165% since 2017", color: "#E63946", pct: 70 },
    { line: "Marine war — Red Sea (2024 peak)", change: "0.025% → 1%+ per voyage (40× increase)", color: "#E63946", pct: 90 },
    { line: "Marine war — Strait of Hormuz (2026)", change: "3.5–10% of vessel value per transit", color: "#E63946", pct: 100 },
  ];

  const conclusions = [
    { num: "01", title: "Pandemic exclusions are permanent", body: "Communicable disease exclusions are now standard in commercial BI across the US, UK, and EU. Pandemic risk has left the private insurance market. This is not a temporary pricing adjustment." },
    { num: "02", title: "Aviation war underwriting has been fundamentally reformed", body: "Dual-flag risk scrutiny, sanctions-list alignment, and lessor-operator-registrar analysis are now embedded in underwriting practice. The June 2025 High Court judgment sets precedents that will shape future disputes." },
    { num: "03", title: "Inflation indexation is now structural in property", body: "Indexation clauses, cedant valuation audits, and elevated attachment points are a durable feature of property reinsurance, not cyclical measures that will be removed when inflation moderates." },
    { num: "04", title: "Marine war capacity for active conflict zones is explicitly limited", body: "The 72-hour P&I cancellation notices, JWC designation of the entire Arabian Gulf, and premium escalation to 3.5–10% represent the market reaching the boundaries of private insurance capacity for active geopolitical conflict." },
    { num: "05", title: "The boundary between private insurance and state risk transfer is shifting", body: "The organisations that navigate the next decade successfully will be those that build the capabilities and relationships to operate on both sides of this boundary — accessing government-backed mechanisms where private capacity reaches its limits." },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-10" style={{ background: "radial-gradient(circle, rgba(133,79,11,0.8) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-10">
            <ChevronLeft size={14} />
            Back to Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="mono-label text-[9px] px-3 py-1 rounded-full" style={{ background: "rgba(29,111,164,0.2)", color: "#60a5fa" }}>Corporate Strategy</span>
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-white/30 text-white">Strategic Research Note</span>
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={11} />
              <span className="mono-label text-[9px]">8 min read</span>
            </div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            Six Years, Four Shocks: What the Global Risk Landscape Means for Specialty Insurance
          </h1>
          <p className="text-white text-xl leading-relaxed border-l-2 border-[#1D6FA4] pl-5">
            Between 2020 and 2026, the specialty insurance market has been tested by four distinct macro-level shocks. Together, they constitute the most consequential six-year period for specialty risk since the post-September 2001 market reset — and the Strait of Hormuz crisis is not over yet.
          </p>
          <div style={{ ...cardStyle, marginTop: "32px", padding: "20px 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Published", val: "April 2026" },
                { label: "Coverage", val: "Global Specialty Insurance" },
                { label: "Focus", val: "Marine, Aviation, Property, Casualty" },
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

          <h2 className="font-display text-white text-2xl mt-2 mb-4">A market stress-tested beyond precedent</h2>
          <p style={{ opacity: 0.9 }}>No six-year period in the modern insurance era has produced four distinct macro-level shocks, each operating through a different mechanism, each affecting different lines of business, and each demanding a structural market response. Yet that is precisely what the specialty insurance market has navigated between 2020 and 2026.</p>
          <p style={{ opacity: 0.9 }}>COVID-19 demonstrated the limits of systemic risk coverage. The Russia-Ukraine war exposed structural vulnerabilities in aviation war underwriting and drove a generation-defining repricing cycle. The inflation and interest rate shock corrected years of inadequate pricing while leaving unresolved structural challenges in casualty reserves. And the Strait of Hormuz crisis — the most acute current dislocation — is now testing whether the private insurance market can provide meaningful coverage for geopolitical risk in the world's most critical energy corridor.</p>
          <p style={{ opacity: 0.9 }}>The immediate trigger for this note is the developing Hormuz crisis. Since late February 2026, following US and Israeli military strikes on Iran, the Islamic Revolutionary Guard Corps has imposed effective control over the strait. The IRGC has conducted over 21 confirmed attacks on merchant ships, laid sea mines, and introduced a transit clearance regime charging up to $2 million per tanker — payable in Chinese yuan or cryptocurrency, bypassing the dollar-based financial system. Ship traffic has fallen from over 100 vessels per day to approximately 10. The IEA estimates that approximately 20 million barrels per day of oil supply — roughly one-fifth of global consumption — has been disrupted. The insurance market response has been the most severe since the Iran-Iraq Tanker War of the 1980s.</p>

          <div className="py-8 my-8" style={{ borderTop: "2px solid #1D6FA4", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="font-display text-white text-xl italic leading-relaxed">"The Hormuz crisis is not a tail event that will pass without consequence. It is the latest — and currently the most severe — demonstration that the boundary between private insurance and state-backed risk management is shifting."</p>
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">The four shocks — a structured comparison</h2>
          <p style={{ opacity: 0.9 }}>Each shock arrived with limited precedent in the modern insurance era. Each generated fundamental debates about policy wording, coverage scope, and claims settlement. Each produced a repricing response that, cumulatively, contributed to the hardest specialty insurance market of the past 25 years. The critical insight is that they are not independent episodes — they are cumulative, compounding events that have permanently shifted the operating environment.</p>

          <div style={{ ...cardStyle, background: "rgba(29,111,164,0.08)", border: "1px solid rgba(29,111,164,0.3)", padding: "16px 20px" }}>
            <p className="mono-label text-[9px] mb-1" style={{ color: "#60a5fa" }}>Visual suggestion</p>
            <p className="text-white text-xs" style={{ opacity: 0.7 }}>2×2 matrix: x-axis Geographic Concentration (narrow → broad), y-axis Structural vs Cyclical impact. COVID-19: broad/structural. Russia-Ukraine: narrow/structural. Inflation: broad/cyclical. Red Sea/Hormuz: narrow/structural.</p>
          </div>

          <div className="space-y-5 mt-6">
            {shocks.map((s) => (
              <div key={s.id} style={{ ...cardStyle, borderTop: `3px solid ${s.color}` }}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <p className="mono-label text-[9px] mb-1" style={{ color: s.color }}>{s.period}</p>
                    <p className="font-display text-white text-xl">{s.id}</p>
                    <p className="text-white text-xs mt-1" style={{ opacity: 0.6 }}>{s.nature}</p>
                  </div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "8px", padding: "12px 14px", marginBottom: "14px", borderLeft: `3px solid ${s.color}` }}>
                  <p className="text-white text-sm font-medium leading-relaxed">{s.headline}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="mono-label text-[9px] text-white/50 mb-2">Pricing impact</p>
                    <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{s.pricing}</p>
                  </div>
                  <div>
                    <p className="mono-label text-[9px] text-white/50 mb-2">Structural legacy</p>
                    <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{s.structural}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">The cumulative repricing — six years in numbers</h2>
          <p style={{ opacity: 0.9 }}>The rate changes produced by these four shocks are not comparable to a normal market cycle. The January 2023 renewal season was described as the hardest in a generation by every major market analyst. Marine war pricing for Hormuz transits now represents a fundamentally different order of magnitude from pre-crisis baselines.</p>

          <div style={{ ...cardStyle, background: "rgba(29,111,164,0.08)", border: "1px solid rgba(29,111,164,0.3)", padding: "16px 20px", marginBottom: "16px" }}>
            <p className="mono-label text-[9px] mb-1" style={{ color: "#60a5fa" }}>Visual suggestion</p>
            <p className="text-white text-xs" style={{ opacity: 0.7 }}>Horizontal bar chart: rate changes by line and period, indexed to pre-shock baseline. Red Sea and Hormuz bars extend dramatically further than others, visually representing the severity of the current dislocation vs prior shocks.</p>
          </div>

          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="mono-label text-white/60 text-[9px]">Key rate changes 2021–2026</p>
            </div>
            {rateChanges.map((r, i) => (
              <div key={r.line} style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                <div className="flex justify-between items-start mb-2 gap-4">
                  <p className="text-white text-xs font-medium">{r.line}</p>
                  <p className="text-xs font-bold flex-shrink-0" style={{ color: r.color }}>{r.change}</p>
                </div>
                <div style={{ height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${r.pct}%`, background: r.color, borderRadius: "2px" }} />
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">The Hormuz crisis — why this one is different</h2>
          <p style={{ opacity: 0.9 }}>The Strait of Hormuz crisis is qualitatively more severe than the Red Sea disruption for three structural reasons that underwriters, boards, and risk managers must understand clearly.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              { num: "01", title: "Scale of trade affected", body: "The Hormuz strait carries approximately 20 million barrels of oil per day — roughly one-fifth of global consumption. The Red Sea disruption, severe as it was, allowed diversion via the Cape of Good Hope. There is no alternative routing for Hormuz. Disruption here is irreversible until the political situation resolves." },
              { num: "02", title: "Deliberateness of the mechanism", body: "The IRGC's use of mines, a structured transit clearance regime, and tolls payable in non-dollar currencies represents a more deliberate and durable mechanism of control than Houthi attacks. This is state-level architecture for controlling a global chokepoint, not an opportunistic insurgency." },
              { num: "03", title: "Complexity of the resolution pathway", body: "The Red Sea crisis required a single diplomatic track. Hormuz resolution requires a broader US-Iran-Gulf state framework involving multiple actors with divergent interests. The timeline for resolution is materially more uncertain — and insurance markets cannot sustain indefinite withdrawal of cover." },
            ].map((c) => (
              <div key={c.num} style={{ ...cardStyle, borderTop: "3px solid #1D6FA4" }}>
                <p className="font-mono text-2xl font-bold mb-3" style={{ color: "rgba(96,165,250,0.3)" }}>{c.num}</p>
                <p className="font-display text-white text-base mb-3">{c.title}</p>
                <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{c.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-6" style={{ opacity: 0.9 }}>The market's response has reached a boundary rarely seen in peacetime commercial insurance: many underwriters declined to offer Hormuz cover at any price. The Lloyd's JWC designated the entire Arabian Gulf as a conflict zone. All 12 International Group P&I clubs issued 72-hour war cover cancellation notices simultaneously — the most significant collective P&I market action since the 1980s. Whether the crisis resolves within three months or extends beyond six will determine whether these responses remain cyclical or become the structural new normal for energy insurance.</p>

          <div style={{ ...cardStyle, borderLeft: "4px solid #1D6FA4", padding: "20px 24px", marginTop: "16px" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>Forward scenario</p>
            <p className="text-white text-sm leading-relaxed font-medium">If the crisis resolves within 3 months: Arabian Gulf transit premiums will remain at 1–3% of vessel value for 12–24 months. JWC designation will remain in place through any ceasefire monitoring period. If the crisis extends beyond 6 months: expect formal restructuring of energy insurance programmes by major oil companies, expansion of government-backed war risk schemes, and sustained reduction in private reinsurance capacity for energy-related marine war risk — comparable to the structural changes that followed the Iran-Iraq Tanker War.</p>
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">What is permanent and what will pass</h2>
          <p style={{ opacity: 0.9 }}>The most important strategic question for insurance leadership is not how severe the current dislocation is, but how much of it represents a permanent narrowing of coverage scope versus a cyclical pricing premium that will eventually moderate. The evidence across all four shocks points to a clear pattern: event-driven shocks produce both structural exclusions and cyclical pricing effects, but the structural exclusions do not reverse.</p>

          <div style={{ ...cardStyle, background: "rgba(29,111,164,0.08)", border: "1px solid rgba(29,111,164,0.3)", padding: "16px 20px", marginBottom: "16px" }}>
            <p className="mono-label text-[9px] mb-1" style={{ color: "#60a5fa" }}>Visual suggestion</p>
            <p className="text-white text-xs" style={{ opacity: 0.7 }}>Two-column comparison table: "Permanent structural changes" (red) vs "Cyclical effects that will moderate" (green) for each of the four shocks — making the structural vs cyclical distinction visually immediate for board presentations.</p>
          </div>

          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <div style={{ padding: "10px 16px", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="mono-label text-[9px]" style={{ color: "#fca5a5" }}>Structural — permanent</p>
              </div>
              <div style={{ padding: "10px 16px" }}>
                <p className="mono-label text-[9px]" style={{ color: "#86efac" }}>Cyclical — will moderate</p>
              </div>
            </div>
            {[
              { perm: "Pandemic / communicable disease exclusions in BI", cycle: "COVID-19 specialty pricing premium (normalised by 2022–23)" },
              { perm: "Aviation: dual-flag risk scrutiny, sanctions-list alignment", cycle: "Marine war listed-area pricing (reviewed post-conflict)" },
              { perm: "Cyber: state-sponsored attack exclusions (March 2023)", cycle: "Trade credit capacity for conflict zones (returns when geopolitics normalise)" },
              { perm: "Marine: choke-point risk permanently repriced post-Red Sea", cycle: "Property cat rate premium (moderated 2024–25 but floor higher than pre-2020)" },
              { perm: "P&I 72-hour war cancellation clauses now assumed standard", cycle: "Traffic diversion costs via Cape of Good Hope (normalise with resolution)" },
              { perm: "Inflation indexation clauses in property policies", cycle: "Capital squeeze from rate shock (partially reversed as rates rose)" },
              { perm: "US social inflation in casualty: structural and unresolved", cycle: "Investment portfolio mark-to-market losses (recovered as rates stabilised)" },
            ].map((row, i) => (
              <div key={row.perm} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.06)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                <div style={{ padding: "10px 16px", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.9 }}>{row.perm}</p>
                </div>
                <div style={{ padding: "10px 16px" }}>
                  <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.75 }}>{row.cycle}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">Strategic implications by audience</h2>
          <p style={{ opacity: 0.9 }}>The response to these shocks cannot be uniform. Insurers and reinsurers, brokers, and corporate buyers each face materially different exposures and require different strategic actions. The implications below are prioritised for the immediate operating environment, with the Hormuz crisis as the primary near-term concern.</p>

          <div className="space-y-5 mt-6">
            {implications.map((imp) => (
              <div key={imp.audience} style={{ ...cardStyle, borderTop: `3px solid ${imp.color}` }}>
                <p className="font-display text-white text-xl mb-5">{imp.audience}</p>
                <div className="space-y-4">
                  {imp.items.map((item) => (
                    <div key={item.title} style={{ display: "flex", gap: "12px", padding: "12px 14px", background: "rgba(255,255,255,0.04)", borderRadius: "8px" }}>
                      <span style={{ color: imp.color, flexShrink: 0, marginTop: "2px" }}>→</span>
                      <div>
                        <p className="text-white text-sm font-medium mb-1">{item.title}</p>
                        <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">Five conclusions for market leadership</h2>
          <div className="space-y-4 mt-4">
            {conclusions.map((c) => (
              <div key={c.num} style={cardStyle} className="flex gap-5">
                <span className="font-mono text-2xl font-bold flex-shrink-0" style={{ color: "rgba(96,165,250,0.35)" }}>{c.num}</span>
                <div>
                  <p className="font-display text-white text-lg mb-2">{c.title}</p>
                  <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.85 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, borderLeft: "4px solid #1D6FA4", marginTop: "32px" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>The strategic imperative</p>
            <p className="text-white text-lg font-medium leading-relaxed">The organisations that navigate the next decade successfully will be those that maintain underwriting discipline through the full cycle, invest in precise policy language and coverage clarity, build scenario-based capital planning that encompasses geopolitical risk, and develop the relationships and capabilities needed to access government-backed risk transfer mechanisms when private capacity reaches its limits. The question for CEOs, CUOs, and Chief Strategy Officers is not whether the boundary between private insurance and state-backed risk management will move further. It is how quickly they will adapt their businesses to operate effectively on both sides of it.</p>
          </div>

          <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="mono-label text-white/40 text-[9px] mb-3">Disclaimer</p>
            <p className="text-white/40 text-xs leading-relaxed italic">This research note is prepared for strategic decision-making and general information purposes only. Data is drawn from publicly available sources. All estimates and ranges reflect the state of information available in April 2026. This note does not constitute financial, legal, regulatory, or investment advice. Market projections represent analytical assessments derived from cited public sources and carry inherent uncertainty. Regulatory frameworks vary by jurisdiction — independent professional advice should be obtained before implementing strategic changes. © 2026 Eudaimon Consulting. All rights reserved.</p>
            <p className="mono-label text-white/40 text-[9px] mb-3 mt-6">Data sources and references</p>
            <p className="text-white/40 text-xs leading-relaxed italic">Lloyd's of London — COVID-19 total loss estimates, results 2020–2023, JWC zone designations, LMA market guidance; Swiss Re Institute (Sigma) — COVID-19 reserves and loss data, January 2021 renewal pricing, P&C sigma research 2021–2025; Munich Re — Russia-Ukraine specialty reserves, P&C reinsurance combined ratio data 2022–2023; Howden Re and Gallagher Re — January 2023 renewal rate data, capital erosion statistics, retro and D&F pricing ranges; OECD (October 2022) — Russia-Ukraine war impact on insurance markets; IEA — Strait of Hormuz oil supply disruption data, 20 million barrels/day estimate; S&P Global and Carrier Management — Russia-Ukraine total industry loss estimates ($16–35bn), Red Sea insurance data; Kpler (November 2025) — Red Sea maritime insurance market analysis and long-term pricing trajectory; UK High Court (June 2025) — landmark judgment in Russian aircraft lessor claims, AerCap and other lessors versus insurance market; Artemis.bm — January 2023 renewal rate data, ILS and retro market analysis; Dallas Federal Reserve (March 2026) — economic analysis of Strait of Hormuz closure impact; CNN Business, CBS News, and S&P Global (2026) — real-time reporting on Strait of Hormuz crisis and insurance market response.</p>
          </div>
        </div>
      </article>

      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/50 text-[9px] mb-2">Navigating the current market environment?</p>
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
