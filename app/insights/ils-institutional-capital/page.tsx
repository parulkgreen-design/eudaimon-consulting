import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The $123bn Conviction: Why Institutional Capital Keeps Moving Toward Insurance Risk — Eudaimon Consulting",
  description: "Total alternative reinsurance capital reached $123bn by end-2025, cat bond issuance hit a record $24.7bn, and CalPERS made its first formal ILS allocation. An explainer for senior insurance executives.",
  openGraph: {
    title: "The $123bn Conviction: Why Institutional Capital Keeps Moving Toward Insurance Risk",
    description: "Alternative reinsurance capital at $123bn. Cat bond issuance at a record $24.7bn. 60% of institutional investors planning to increase allocations.",
    url: "https://www.eudaimonconsulting.com/insights/ils-institutional-capital",
    type: "article",
    images: [{ url: "/assets/logo.jpg" }],
  },
  alternates: { canonical: "https://www.eudaimonconsulting.com/insights/ils-institutional-capital" },
};

import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function ILSInstitutionalCapitalArticle() {

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    padding: "24px",
  };

  const Cite = ({ children }: { children: string }) => (
    <span style={{ fontStyle: "normal", fontSize: "11px", color: "rgba(255,255,255,0.35)", marginLeft: "3px" }}>({children})</span>
  );

  const stats = [
    { val: "$123bn", label: "Total alternative reinsurance capital outstanding, 2025", color: "#E63946" },
    { val: "$24.7bn", label: "Cat bond issuance 2025 — highest in market history", color: "#1D6FA4" },
    { val: "11.4%", label: "Swiss Re Cat Bond Total Return Index, full year 2025", color: "#F4A01C" },
    { val: "60%", label: "Institutional investors planning to increase ILS allocations", color: "#3B6D11" },
  ];

  const allocators = [
    {
      name: "PGGM / PFZW (Netherlands)",
      rows: [
        { key: "ILS & Reinsurance AUM", val: "$8.9bn", green: false },
        { key: "% of total pension fund", val: "3%", green: false },
        { key: "2025 return (USD)", val: "+12.4%", green: true },
        { key: "Fund size", val: "€252bn", green: false },
      ],
    },
    {
      name: "Florida State Board of Administration",
      rows: [
        { key: "ILS allocation", val: "$2.23bn", green: false },
        { key: "% of total fund", val: "1%", green: false },
        { key: "Allocation growth since 2018", val: "$100m → $2.23bn", green: true },
        { key: "Fund size", val: "$222.5bn", green: false },
      ],
    },
    {
      name: "CalPERS (USA)",
      rows: [
        { key: "ILS allocation (end 2025)", val: "$1.45bn", green: false },
        { key: "Structures", val: "Cat bonds, quota share, priv. ILS", green: false },
        { key: "First allocation", val: "2025", green: true },
        { key: "Total AUM", val: "~$600bn", green: false },
      ],
    },
    {
      name: "City of Zurich Pension Fund",
      rows: [
        { key: "ILS allocation", val: "$1.58bn", green: false },
        { key: "2025 return", val: "+6.9%", green: true },
        { key: "ILS managers", val: "10 (incl. life, casualty)", green: false },
        { key: "Growth since 2024", val: "+38%", green: true },
      ],
    },
  ];

  const altCapData = [
    { year: "2013", cat: 19.4, sidecar: 4.1, collat: 18.0 },
    { year: "2015", cat: 24.0, sidecar: 6.2, collat: 24.0 },
    { year: "2017", cat: 29.7, sidecar: 8.5, collat: 34.0 },
    { year: "2019", cat: 44.0, sidecar: 7.8, collat: 38.0 },
    { year: "2021", cat: 38.5, sidecar: 10.2, collat: 36.0 },
    { year: "2023", cat: 45.0, sidecar: 12.0, collat: 42.0 },
    { year: "2025", cat: 60.0, sidecar: 19.6, collat: 43.4 },
  ];
  const altCapMax = 135;
  const altCapH = 200;
  const altCapYTicks = [0, 25, 50, 75, 100, 125];

  const returns2025 = [
    { label: "P&C Sidecars",                pct: 15.0,  color: "#3B6D11" },
    { label: "Global Equities",              pct: 16.0,  color: "#6B7280" },
    { label: "Private ILS",                  pct: 12.47, color: "#E63946" },
    { label: "Cat Bonds (Swiss Re Index)",   pct: 11.4,  color: "#1D6FA4" },
    { label: "Private Credit (all-in yield)",pct: 10.0,  color: "#F4A01C" },
    { label: "US High Yield",                pct: 7.0,   color: "#9CA3AF" },
  ];

  const issuanceData = [
    { year: "2010", val: 4.6,  showLabel: true  },
    { year: "2011", val: 4.9,  showLabel: false },
    { year: "2012", val: 6.4,  showLabel: true  },
    { year: "2013", val: 7.0,  showLabel: false },
    { year: "2014", val: 8.2,  showLabel: true  },
    { year: "2015", val: 7.0,  showLabel: false },
    { year: "2016", val: 6.3,  showLabel: true  },
    { year: "2017", val: 9.6,  showLabel: false },
    { year: "2018", val: 10.3, showLabel: true  },
    { year: "2019", val: 11.7, showLabel: false },
    { year: "2020", val: 9.3,  showLabel: true  },
    { year: "2021", val: 12.5, showLabel: false },
    { year: "2022", val: 14.1, showLabel: true  },
    { year: "2023", val: 16.2, showLabel: false },
    { year: "2024", val: 17.7, showLabel: true  },
    { year: "2025", val: 24.7, showLabel: true,  highlight: true },
  ];
  const issMax = 27;
  const issH = 200;
  const issYTicks = [0, 5, 10, 15, 20, 25];

  const instruments = [
    { name: "Catastrophe Bonds (144A)", liq: "Liquid",     liqColor: "#3B6D11", size: "~$60bn outstanding",               ret: "~10–12% all-in (2025); floating rate",           appeal: "Transparent, scalable, rated, secondary market",          concern: "Spread compression as capital deepens" },
    { name: "Industry Loss Warranties", liq: "Semi-liquid", liqColor: "#F4A01C", size: "Estimated $10–15bn",               ret: "Higher spreads than cat bonds; basis risk",          appeal: "Binary trigger; easier modelling; faster settlement",     concern: "Basis risk vs. actual loss; model dependency" },
    { name: "Collateralised Reinsurance",liq: "Illiquid",   liqColor: "#E63946", size: "Part of $123bn total alt. capital", ret: "12–15%+ (illiquidity premium)",                  appeal: "Bespoke terms; higher spreads; direct underwriting access", concern: "Model risk; trapped capital; manager selection" },
    { name: "Sidecars (P&C)",           liq: "Illiquid",   liqColor: "#E63946", size: "~$19.6bn (+40% YoY)",              ret: "~15% in 2025",                                   appeal: "Alignment with experienced underwriter; scalable",        concern: "Sponsor quality; governance; reserving transparency" },
    { name: "Casualty ILS / Sidecars",  liq: "Illiquid",   liqColor: "#E63946", size: "~$1.7bn+ active (nascent)",         ret: "Underwriting + investment return; lower vol.",      appeal: "Private credit logic; float management; diversifier",     concern: "Long tail uncertainty; social inflation; reserve development" },
    { name: "Cyber Cat Bonds",          liq: "Liquid",     liqColor: "#3B6D11", size: "Emerging; 3rd peak peril in ILS",   ret: "Higher spreads; anthropogenic risk",              appeal: "Non-meteorological correlation; structurally innovative", concern: "Model immaturity; accumulation risk; trigger design" },
    { name: "Life / Mortality Bonds",   liq: "Semi-liquid", liqColor: "#F4A01C", size: "Niche; used by major life insurers", ret: "Long duration; mortality/longevity driven",        appeal: "Genuine diversifier; regulatory capital efficiency",      concern: "Long duration; pandemic tail risk; complex modelling" },
    { name: "Reserve Sidecars / LPTs",  liq: "Illiquid",   liqColor: "#E63946", size: "Private; growing private credit crossover", ret: "Asset-liability management premium; credit-like", appeal: "Reserve adequacy play; defined cash flows",              concern: "Adverse development risk; reserving uncertainty" },
  ];

  // ── Helpers ─────────────────────────────────────────────────────────
  const yAxisCol = 36; // px width for Y-axis column
  const yAxisGap = 6;  // px gap between Y-axis col and chart

  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* HERO */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(29,111,164,0.8) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-10">
            <ChevronLeft size={14} />Back to Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="mono-label text-[9px] px-3 py-1 rounded-full" style={{ background: "rgba(29,111,164,0.2)", color: "#60a5fa" }}>Corporate Strategy</span>
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-white/30 text-white">Explainer — Insight Note</span>
            <div className="flex items-center gap-2 text-white/60"><Clock size={11} /><span className="mono-label text-[9px]">9 min read</span></div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            The $123bn Conviction: Why Institutional Capital Keeps Moving Toward Insurance Risk
          </h1>
          <p className="text-white text-xl leading-relaxed border-l-2 border-[#1D6FA4] pl-5">
            An explainer for senior insurance executives on why institutional investors are entering their market, what they are buying, and what it means for the competitive landscape.
          </p>
          <div style={{ ...cardStyle, marginTop: "32px", padding: "20px 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{ label: "Published", val: "May 2026" }, { label: "Coverage", val: "Global Reinsurance · ILS · Capital Markets" }, { label: "Audience", val: "Insurance C-Suite · Institutional Investors" }, { label: "Format", val: "Explainer — Insight Note" }].map((m) => (
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

          {/* Overview */}
          <div style={{ ...cardStyle, borderLeft: "4px solid #1D6FA4", padding: "28px 32px" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#60a5fa" }}>Overview</p>
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.9 }}>Something significant is happening in the capital markets that sit around the insurance and reinsurance industry. The pool of institutional investors — pension funds, sovereign wealth funds, endowments, private equity — committing capital to insurance risk has grown materially, persistently, and across underwriting cycles. By the end of 2025, total alternative reinsurance capital stood at $123bn, cat bond issuance hit a record $24.7bn, and major US pension funds including CalPERS made their first formal allocations to the asset class. This note explains why.</p>
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.9 }}>The purpose is not to advocate for any particular allocation or structure. It is to give insurance executives a clear account of the forces pulling institutional capital into their market, the structures through which that capital is deployed, and what it means for competitive dynamics, pricing, and the strategic position of traditional (re)insurers.</p>
            <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9 }}>The key insight is that institutional investors are not buying &quot;insurance risk&quot; as a generic concept. They are selecting specific premium types — complexity, illiquidity, duration, underwriting exposure — from a widening spectrum of structures. Understanding that distinction matters for any insurer or reinsurer trying to make sense of where this capital goes, why it stays, and how it influences the markets it enters.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.val} style={cardStyle}>
                <p className="font-display text-2xl font-bold mb-1" style={{ color: s.color }}>{s.val}</p>
                <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.7 }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── SECTION 1 ── */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">Section 01 — The Capital Flows Don&apos;t Lie</h2>

          <p style={{ opacity: 0.9 }}>The question for an alternatives committee is rarely whether an asset class exists. It is whether the flow of sophisticated capital into it is durable, whether the return profile is structurally sound, and whether the allocation improves the portfolio in ways that matter. On all three counts, insurance risk now has a credible institutional record.</p>

          <p style={{ opacity: 0.9 }}>The catastrophe bond market outstanding reached nearly $60bn by year-end 2025, up from $48bn a year earlier and roughly 75% higher than in 2020. Total issuance in 2025 reached $24.7bn — the highest annual figure since the market&apos;s inception in the mid-1990s. <Cite>Swiss Re ILS Market Insights, February 2026</Cite> The number of first-time sponsors increased sharply, and new perils continued to enter the market: earthquake in Israel, cyber, terrorism, and parametric structures covering previously uninsurable exposures. This is not a market servicing a narrow set of US wind and Japanese earthquake cedants. It is becoming a broad capital market for transferring underwriting risk.</p>

          <p style={{ opacity: 0.9 }}>The investor base has changed significantly. The early ILS market was dominated by specialist hedge funds and dedicated ILS managers. The allocators anchoring the market in 2026 are substantively different in type and scale.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allocators.map((a) => (
              <div key={a.name} style={{ ...cardStyle, borderTop: "3px solid #1D6FA4" }}>
                <p className="mono-label text-[10px] mb-3" style={{ color: "#60a5fa", letterSpacing: "0.1em" }}>{a.name}</p>
                <div className="space-y-2">
                  {a.rows.map((r) => (
                    <div key={r.key} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "6px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="text-white text-xs" style={{ opacity: 0.5 }}>{r.key}</span>
                      <span style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 600, color: r.green ? "#86efac" : "rgba(255,255,255,0.9)" }}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontStyle: "italic", marginTop: "-8px" }}>Sources: Artemis.bm</p>

          <p style={{ opacity: 0.9 }}>What distinguishes these allocations from earlier waves of ILS capital is persistence. CalPERS entered in 2025 with diversified access across three structure types from the outset — quota share reinsurance, catastrophe bonds, and private collateralised reinsurance — establishing an institutional platform rather than a tactical trade. PGGM has held its allocation through two major loss years (2017 and 2022), multiple soft markets, and the trapped capital episodes that affected parts of the ILS market between 2017 and 2021. The fact that it is still adding to its position — and that the assets now amount to 3% of a €252bn pension fund — speaks to conviction grounded in long-term portfolio logic rather than return-chasing.</p>

          <p style={{ opacity: 0.9 }}>The Gallagher Securities survey published in May 2026, covering more than 60 large institutional investors with direct allocation authority, found that 60% intend to increase their ILS positions over the next two years. The direction of travel in institutional allocations is consistent, even if the pace varies by investor type and governance framework.</p>

          {/* FIG. 1 — Alt Cap Growth with Y-axis */}
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="mono-label text-white/60 text-[9px]">Fig. 1 — Alternative Reinsurance Capital Outstanding ($bn) · Cat Bonds / Sidecars / Collateralised Re · 2013–2025</p>
            </div>
            <div style={{ padding: "20px 20px 8px" }}>
              <div style={{ display: "flex", gap: `${yAxisGap}px` }}>
                {/* Y-axis */}
                <div style={{ width: `${yAxisCol}px`, flexShrink: 0, position: "relative", height: `${altCapH}px` }}>
                  {altCapYTicks.map((t) => (
                    <div key={t} style={{ position: "absolute", right: "6px", bottom: `${(t / altCapMax) * altCapH - 6}px` }}>
                      <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>{t}</span>
                    </div>
                  ))}
                  <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.12)" }} />
                </div>
                {/* Chart area */}
                <div style={{ flex: 1, position: "relative" }}>
                  {/* Grid lines */}
                  {altCapYTicks.filter(t => t > 0).map((t) => (
                    <div key={t} style={{ position: "absolute", left: 0, right: 0, bottom: `${(t / altCapMax) * altCapH}px`, height: "1px", background: "rgba(255,255,255,0.05)" }} />
                  ))}
                  {/* Bars */}
                  <div style={{ display: "flex", alignItems: "flex-end", height: `${altCapH}px`, gap: "10px", position: "relative", zIndex: 1 }}>
                    {altCapData.map((d) => {
                      const total = d.cat + d.sidecar + d.collat;
                      const totalH = (total / altCapMax) * altCapH;
                      const catH   = (d.cat     / total) * totalH;
                      const sidH   = (d.sidecar  / total) * totalH;
                      const colH   = (d.collat   / total) * totalH;
                      return (
                        <div key={d.year} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "stretch" }}>
                          <div style={{ height: `${totalH}px`, display: "flex", flexDirection: "column" }}>
                            <div style={{ height: `${catH}px`, background: "rgba(29,111,164,0.85)", borderRadius: "3px 3px 0 0" }} />
                            <div style={{ height: `${sidH}px`, background: "rgba(230,57,70,0.8)" }} />
                            <div style={{ height: `${colH}px`, background: "rgba(244,160,28,0.75)" }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* X-axis baseline */}
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", marginTop: 0 }} />
                </div>
              </div>
              {/* X-axis labels (offset to match bar area) */}
              <div style={{ display: "flex", gap: `${yAxisGap}px`, marginTop: "4px" }}>
                <div style={{ width: `${yAxisCol}px`, flexShrink: 0 }} />
                <div style={{ flex: 1, display: "flex", gap: "10px" }}>
                  {altCapData.map((d) => (
                    <div key={d.year} style={{ flex: 1, textAlign: "center" }}>
                      <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)" }}>{d.year}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Y-axis unit label */}
              <div style={{ marginLeft: `${yAxisCol + yAxisGap}px`, marginTop: "4px" }}>
                <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>$bn</span>
              </div>
              {/* Legend */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {[["rgba(29,111,164,0.85)", "Cat Bonds Outstanding"], ["rgba(230,57,70,0.8)", "Sidecars"], ["rgba(244,160,28,0.75)", "Collateralised Reinsurance"]].map(([color, label]) => (
                  <div key={String(label)} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <div style={{ width: "12px", height: "12px", background: String(color), borderRadius: "2px", flexShrink: 0 }} />
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>{String(label)}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontStyle: "italic" }}>Sources: Swiss Re ILS Market Insights; Aon Securities ILS Annual Report; Artemis.bm; Guy Carpenter; Howden Re.</p>
            </div>
          </div>

          {/* ── SECTION 2 ── */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">Section 02 — The Macroeconomic Case in 2026</h2>
          <p style={{ opacity: 0.9 }}>The growth in institutional ILS capital did not begin in 2025. But the macroeconomic environment of the past three years has materially improved the relative attractiveness of insurance risk, and understanding why requires examining the mechanics rather than the narrative.</p>

          <p className="font-display text-white text-lg mb-2 mt-6">Floating Rate in a Higher-for-Longer Environment</p>
          <p style={{ opacity: 0.9 }}>Most catastrophe bonds pay a floating coupon tied to US Treasury money market rates plus a spread representing the insurance risk premium. When base rates were near zero, the total return depended almost entirely on that spread. With three-month US Treasury yields still above 4%, cat bonds now offer a genuinely attractive all-in yield — 11.4% on the Swiss Re Total Return Index for full-year 2025 — without duration risk. <Cite>Swiss Re, 2025</Cite> For pension allocators managing liability mismatches, fixed income exposure to rising yields has been a source of significant mark-to-market pain since 2022. Cat bonds do not carry that risk, and the floating rate structure means that investors are not locked into spreads established at today&apos;s pricing as rates eventually move.</p>

          <p className="font-display text-white text-lg mb-2 mt-6">What Correlation Means in Practice</p>
          <p style={{ opacity: 0.9 }}>The phrase &quot;uncorrelated returns&quot; has become almost meaningless through overuse. What it actually means in the context of short-tail insurance risk — catastrophe bonds covering US hurricane, Japanese earthquake, European windstorm — is that loss events are driven by physical processes that have no causal relationship with credit cycles, equity risk premia, or monetary policy. When credit markets sold off in Q1 2025 amid tariff uncertainty, the Swiss Re Cat Bond Index continued generating positive returns. That is not a coincidence or a temporary anomaly. It reflects the absence of any economic transmission mechanism connecting sovereign bond yields to the frequency of Atlantic hurricanes.</p>
          <p style={{ opacity: 0.9 }}>This distinction matters enormously when examining what has happened to other alternative asset classes. Private credit spreads have tightened substantially since 2022 as capital has flooded the market. Middle-market direct lending, which was generating base plus 600–700bps in 2022 and 2023, is now pricing materially tighter as competition from bank re-entry, CLO demand, and new entrant capital weighs on spreads. Infrastructure debt and real asset strategies are experiencing similar dynamics. In an environment where traditional alternative risk premia are compressing because capital is competing them away, insurance risk offers something structurally different: a pool of exposures that cannot be arbitraged because the underlying supply of risk is determined by the physical world, not by investor appetite.</p>

          <div style={{ ...cardStyle, background: "rgba(29,111,164,0.08)", borderTop: "3px solid #1D6FA4" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>From the analysis</p>
            <p className="font-display text-white text-lg italic leading-relaxed">&quot;The underlying supply of catastrophe risk cannot be competed away. Unlike credit spreads, which compress as lenders multiply, the frequency of major natural disasters is not sensitive to how much capital is available to take the risk.&quot;</p>
          </div>

          {/* FIG. 2 — Returns */}
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="mono-label text-white/60 text-[9px]">Fig. 2 — 2025 Risk-Adjusted Returns Across Asset Classes (%)</p>
            </div>
            <div style={{ padding: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {returns2025.map((r) => (
                  <div key={r.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{r.label}</span>
                      <span style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: 700, color: r.color, flexShrink: 0, marginLeft: "12px" }}>{r.pct}%</span>
                    </div>
                    <div style={{ height: "8px", background: "rgba(255,255,255,0.08)", borderRadius: "4px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(r.pct / 20) * 100}%`, background: r.color, borderRadius: "4px" }} />
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "14px", fontStyle: "italic" }}>Sources: Swiss Re Cat Bond Total Return Index; ILS Advisers Fund Index; EY sidecar analysis; Bloomberg; Preqin estimates.</p>
            </div>
          </div>

          <p className="font-display text-white text-lg mb-2 mt-6">The Search for Real Return Streams</p>
          <p style={{ opacity: 0.9 }}>Persistent inflation, even as it moderates, has complicated liability management for pension funds and eroded the real value of fixed-rate credit positions entered at lower yields. Insurance risk has an indirect inflation sensitivity that is actually constructive for investors: as insured asset values rise with inflation, the demand for risk transfer increases, which supports spreads and premium adequacy over time. Higher replacement costs for homes and commercial properties push cedants to buy more protection, creating structural demand for ILS capacity. This does not make insurance risk an inflation hedge in any precise sense, but it does mean that inflation conditions do not erode the investment case as they do for nominal fixed-rate credit.</p>

          {/* ── SECTION 3 ── */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">Section 03 — Why Softening Conditions Do Not Undermine the Case</h2>
          <p style={{ opacity: 0.9 }}>The most legitimate objection to increasing ILS allocations in 2026 is that underwriting conditions have turned. Property catastrophe reinsurance rates fell 12% globally at the January 2026 renewal, with European rates down 15% and retrocession pricing off more than 16%. <Cite>Guy Carpenter, January 2026</Cite> The cycle has clearly turned from the hard market of 2022–2024.</p>
          <p style={{ opacity: 0.9 }}>This concern is real but analytically incomplete. Three things need to be understood about the current soft market before drawing conclusions about capital returns.</p>

          {/* Rate table */}
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="mono-label text-white/60 text-[9px]">Fig. 3 — Reinsurance &amp; Insurance Pricing Dynamics Across Key Lines · January 2026 Renewals</p>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.05)" }}>
                    {["Line / Segment", "Rate Direction", "Jan 2026 Movement", "Key Dynamic"].map((h) => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: "rgba(29,111,164,0.12)" }}>
                    <td colSpan={4} style={{ padding: "7px 14px", color: "#60a5fa", fontWeight: 700, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Property Catastrophe Reinsurance</td>
                  </tr>
                  {[
                    ["Global Property Cat (Guy Carpenter Index)", "Softening",          "−12.0%",                           true,  "Still 38% above 2017 trough; reinsurer ROE ~17.6%"],
                    ["US Property Cat",                           "Softening",          "−12.0%",                           true,  "66% cumulative increase since 2017 still intact"],
                    ["European Property Cat",                     "Softening (fastest)","−15.0%",                           true,  "Excess capacity weighing hardest on European placements"],
                    ["Property Retrocession (Howden Re)",         "Softening",          "−16.5%",                           true,  "Capacity exceeded demand; buyers requested up to $800m additional limit"],
                  ].map(([l, d, m, neg, n], i) => (
                    <tr key={String(l)} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i%2===0?"rgba(255,255,255,0.02)":"transparent" }}>
                      <td style={{ padding:"9px 14px", color:"rgba(255,255,255,0.8)", fontWeight:500 }}>{String(l)}</td>
                      <td style={{ padding:"9px 14px", color: neg?"#fca5a5":"#86efac" }}>{String(d)}</td>
                      <td style={{ padding:"9px 14px", color: neg?"#E63946":"#3B6D11", fontFamily:"monospace", fontWeight:700 }}>{String(m)}</td>
                      <td style={{ padding:"9px 14px", color:"rgba(255,255,255,0.45)", fontSize:"11px" }}>{String(n)}</td>
                    </tr>
                  ))}
                  <tr style={{ background: "rgba(244,160,28,0.1)" }}>
                    <td colSpan={4} style={{ padding: "7px 14px", color: "#F4A01C", fontWeight: 700, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Casualty Reinsurance &amp; Long-Tail Lines</td>
                  </tr>
                  {[
                    ["US General Liability / Umbrella",        "Mixed — modest upward pressure", "Flat to +3–5% (loss-affected)", false, "Social inflation; nuclear verdicts driving reserve concern and cedant demand for capital"],
                    ["US Workers' Compensation",                "Competitive / softening",        "Flat to −3%",                  true,  "Favourable frequency; loss cost stability; attractive for sidecar structures"],
                    ["D&O / Professional Liability (Global)",  "Softening",                      "−10 to −20%",                  true,  "Hard market unwind; excess capacity from new entrants; rate still above 2019 levels"],
                    ["Casualty Reserve Adequacy",              "Under scrutiny",                  "Ongoing adverse development",  null,  "Social inflation and tort system changes create long-tail reserve uncertainty; LPT demand rising"],
                  ].map(([l, d, m, neg, n], i) => (
                    <tr key={String(l)} style={{ borderBottom:"1px solid rgba(255,255,255,0.05)", background:i%2===0?"rgba(255,255,255,0.02)":"transparent" }}>
                      <td style={{ padding:"9px 14px", color:"rgba(255,255,255,0.8)", fontWeight:500 }}>{String(l)}</td>
                      <td style={{ padding:"9px 14px", color: neg===false?"#86efac": neg===true?"#fca5a5":"#fbbf24" }}>{String(d)}</td>
                      <td style={{ padding:"9px 14px", color: neg===false?"#3B6D11": neg===true?"#E63946":"#F4A01C", fontFamily:"monospace", fontWeight:700 }}>{String(m)}</td>
                      <td style={{ padding:"9px 14px", color:"rgba(255,255,255,0.45)", fontSize:"11px" }}>{String(n)}</td>
                    </tr>
                  ))}
                  <tr style={{ background: "rgba(59,109,17,0.12)" }}>
                    <td colSpan={4} style={{ padding: "7px 14px", color: "#86efac", fontWeight: 700, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Cyber Insurance &amp; Reinsurance</td>
                  </tr>
                  {[
                    ["Primary Cyber (Global market ~$16.3bn)", "Normalising after hard market",  "−3 to −15% (well-managed risks)",           true,  "After 50–200% rate increases in 2021–2023, capacity has returned; ransomware stabilising"],
                    ["Cyber Reinsurance / Cat Market",         "Growing structural demand",       "Nascent; spreads reflecting model uncertainty", false, "Cyber now recognised as ILS third peak peril alongside US wind and Japan quake"],
                    ["Systemic / Accumulation Risk",           "Key constraint",                  "Pricing reflects model immaturity",           null,  "Correlated loss scenarios (cloud outage, protocol attack) limit how much ILS can absorb today"],
                  ].map(([l, d, m, neg, n], i) => (
                    <tr key={String(l)} style={{ borderBottom:"1px solid rgba(255,255,255,0.05)", background:i%2===0?"rgba(255,255,255,0.02)":"transparent" }}>
                      <td style={{ padding:"9px 14px", color:"rgba(255,255,255,0.8)", fontWeight:500 }}>{String(l)}</td>
                      <td style={{ padding:"9px 14px", color: neg===false?"#86efac": neg===true?"#fca5a5":"#fbbf24" }}>{String(d)}</td>
                      <td style={{ padding:"9px 14px", color: neg===false?"#3B6D11": neg===true?"#E63946":"#F4A01C", fontFamily:"monospace", fontWeight:700 }}>{String(m)}</td>
                      <td style={{ padding:"9px 14px", color:"rgba(255,255,255,0.45)", fontSize:"11px" }}>{String(n)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize:"10px", color:"rgba(255,255,255,0.3)", padding:"10px 14px 14px", fontStyle:"italic" }}>Sources: Guy Carpenter January 2026 Reinsurance Renewal Report; Howden Re January 2026; Aon Reinsurance Market Dynamics January 2026; AM Best; Artemis.bm; NAIC; Willis Re.</p>
          </div>

          <p style={{ opacity: 0.9 }}>First, absolute pricing remains historically elevated. The Guy Carpenter Global Property Catastrophe Rate-on-Line Index still sits above every year from 2014 through 2022 inclusive, and 38% above its 2017 trough. The 2026 renewal was softer than 2025, which was itself softer than 2024, but the level of pricing remains consistent with meaningful underwriting profitability. Reinsurers are expected to generate returns on equity of roughly 17.6% in 2025, comfortably exceeding their cost of equity for the third consecutive year. <Cite>Guy Carpenter, January 2026</Cite></p>
          <p style={{ opacity: 0.9 }}>Second, the soft market is a rational and expected response to the capital thesis working. Capital has entered the market because returns were attractive. That capital is now competing rates lower, which is exactly what happens in efficient risk markets. The appropriate question is not whether rates have fallen from their peak, but whether current pricing offers adequate risk-adjusted returns relative to alternatives — and on that measure, the comparison remains favourable.</p>
          <p style={{ opacity: 0.9 }}>Third, the softening has been structurally contained in a way that earlier cycles were not. Reinsurers maintained higher attachment points and stricter terms from 2023, and in 2025 bore only 11% of total insured catastrophe losses despite $121bn in industry losses — compared to 20% in years preceding the 2023 market restructuring. <Cite>Guy Carpenter, January 2026</Cite> That means underlying underwriting profitability has been resilient even in a period of elevated catastrophe activity. For ILS investors in catastrophe bonds, losses affecting the outstanding portfolio have remained limited, supporting the strong return environment despite cat activity.</p>

          <div style={{ ...cardStyle, background: "rgba(244,160,28,0.06)", borderLeft: "4px solid #F4A01C" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "#F4A01C" }}>Analytical Note — Spread Compression vs. Absolute Return</p>
            <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9 }}>Cat bond spreads have tightened from their 2023–2024 peaks. But the relevant comparison is against alternatives, not against prior peak levels. The cat bond risk premium still exceeds average US 1–3 year high-yield spreads despite compression, with comparable or lower default rates. Empirical cat bond default rates are roughly equivalent to BB+ rated credit — but pricing has historically reflected higher spreads than equivalent rated corporate bonds. Even in a normalised environment, cat bonds have typically offered 100–200bps of additional spread versus credit of comparable rating quality, without the correlation to credit cycles that corporate high yield carries.</p>
          </div>

          {/* ── SECTION 4 ── */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">Section 04 — The Instrument Spectrum: What Institutional Capital Is Actually Choosing</h2>
          <p style={{ opacity: 0.9 }}>One reason early ILS commentary struggled to gain traction with generalist allocators was that it treated the market as a single asset class with a single risk/return profile. The reality has always been more differentiated, and that differentiation has increased substantially as the market has matured. Institutional investors are not buying &quot;insurance risk.&quot; They are selecting specific premium types from a spectrum of structures that differ meaningfully in liquidity, duration, complexity, and the nature of the underwriting exposure they provide.</p>

          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="mono-label text-white/60 text-[9px]">ILS Instrument Comparison — Structure, Liquidity, Return Profile · 2025 Market</p>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.05)" }}>
                    {["Structure", "Liquidity", "2025 Market Size", "Return Profile", "Key Investor Appeal", "Current Concern"].map((h) => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "rgba(255,255,255,0.4)", fontWeight: 600, fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {instruments.map((ins, i) => (
                    <tr key={ins.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i%2===0?"rgba(255,255,255,0.02)":"transparent" }}>
                      <td style={{ padding:"10px 14px", color:"rgba(255,255,255,0.9)", fontWeight:600, whiteSpace:"nowrap" }}>{ins.name}</td>
                      <td style={{ padding:"10px 14px" }}>
                        <span style={{ background:`${ins.liqColor}25`, color:ins.liqColor, fontSize:"9px", fontWeight:700, padding:"3px 8px", borderRadius:"4px", letterSpacing:"0.06em", textTransform:"uppercase", whiteSpace:"nowrap" }}>{ins.liq}</span>
                      </td>
                      <td style={{ padding:"10px 14px", color:"rgba(255,255,255,0.55)", fontSize:"11px" }}>{ins.size}</td>
                      <td style={{ padding:"10px 14px", color:"rgba(255,255,255,0.55)", fontSize:"11px" }}>{ins.ret}</td>
                      <td style={{ padding:"10px 14px", color:"rgba(255,255,255,0.55)", fontSize:"11px" }}>{ins.appeal}</td>
                      <td style={{ padding:"10px 14px", color:"#fca5a5", fontSize:"11px" }}>{ins.concern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="font-display text-white text-lg mb-2 mt-6">The Cat Bond Market: Depth and Normalisation</p>
          <p style={{ opacity: 0.9 }}>Cat bonds remain the most accessible and transparent entry point, and the 2025 data shows continued structural maturation. Record quarterly issuance in Q2 2025, a first-time sponsor count exceeding ten, and the introduction of new peril types — including earthquake in Israel, cyber, and parametric wildfire structures — demonstrate that the market is deepening rather than concentrating. SCOR Investment Partners noted in early 2026 that January alone brought close to $3bn in new transactions across nine deals, suggesting that 2026 issuance could approach or match 2025&apos;s record. The risk for cat bond investors is not demand collapse but continued spread compression as capital supply outpaces the organic growth in cedant demand. That is a meaningful risk for those expecting 2023-level returns, but it does not undermine the absolute case.</p>

          <p className="font-display text-white text-lg mb-2 mt-6">The Sidecar Expansion: Scale and Diversification</p>
          <p style={{ opacity: 0.9 }}>The most striking structural development of 2025 was the near-doubling of the sidecar market to approximately $19.6bn, representing 15.8% of total ILS capacity. <Cite>EY, May 2026</Cite> Sidecar structures delivered returns of roughly 15% in 2025, outperforming cat bonds and more or less in line with equities — but without the equity market correlation. More significantly, the sidecar format is now being applied beyond property catastrophe. Casualty sidecars — covering long-tail commercial liability lines — attracted institutional capital from private credit investors drawn by the aligned structure, the float management opportunity, and the low volatility of casualty returns relative to property catastrophe. In the second half of 2025, several transactions exceeding $500m each added meaningful scale to what had been a nascent market segment. EY analysis from May 2026 estimated casualty sidecar capacity at approximately 8.7% of total P&amp;C sidecar capacity, with further expansion anticipated through 2026.</p>

          {/* FIG. 4 — Issuance with Y-axis */}
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="mono-label text-white/60 text-[9px]">Fig. 4 — Catastrophe Bond Issuance by Year ($bn) · Annual 144A Issuance · 2010–2025</p>
            </div>
            <div style={{ padding: "20px 20px 8px" }}>
              <div style={{ display: "flex", gap: `${yAxisGap}px` }}>
                {/* Y-axis */}
                <div style={{ width: `${yAxisCol}px`, flexShrink: 0, position: "relative", height: `${issH}px` }}>
                  {issYTicks.map((t) => (
                    <div key={t} style={{ position: "absolute", right: "6px", bottom: `${(t / issMax) * issH - 6}px` }}>
                      <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>{t}</span>
                    </div>
                  ))}
                  <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.12)" }} />
                </div>
                {/* Chart area */}
                <div style={{ flex: 1, position: "relative" }}>
                  {issYTicks.filter(t => t > 0).map((t) => (
                    <div key={t} style={{ position: "absolute", left: 0, right: 0, bottom: `${(t / issMax) * issH}px`, height: "1px", background: "rgba(255,255,255,0.05)" }} />
                  ))}
                  <div style={{ display: "flex", alignItems: "flex-end", height: `${issH}px`, gap: "3px", position: "relative", zIndex: 1 }}>
                    {issuanceData.map((d) => {
                      const h = (d.val / issMax) * issH;
                      return (
                        <div key={d.year} style={{ flex: 1, height: `${h}px`, background: d.highlight ? "#E63946" : "rgba(29,111,164,0.75)", borderRadius: "2px 2px 0 0", minWidth: "10px" }} />
                      );
                    })}
                  </div>
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.12)" }} />
                </div>
              </div>
              {/* X-axis labels */}
              <div style={{ display: "flex", gap: `${yAxisGap}px`, marginTop: "4px" }}>
                <div style={{ width: `${yAxisCol}px`, flexShrink: 0 }} />
                <div style={{ flex: 1, display: "flex", gap: "3px" }}>
                  {issuanceData.map((d) => (
                    <div key={d.year} style={{ flex: 1, textAlign: "center", minWidth: "10px" }}>
                      <span style={{ fontSize: "9px", color: d.showLabel ? (d.highlight ? "#E63946" : "rgba(255,255,255,0.45)") : "transparent" }}>{d.year}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginLeft: `${yAxisCol + yAxisGap}px`, marginTop: "4px" }}>
                <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", fontStyle: "italic" }}>$bn · 2025 bar (red) = $24.7bn — highest annual issuance in market history</span>
              </div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontStyle: "italic" }}>Sources: Swiss Re ILS Market Insights, February 2026; Artemis Deal Directory; NAIC.</p>
            </div>
          </div>

          <p className="font-display text-white text-lg mb-2 mt-6">Casualty ILS: A Different Risk Premium Entirely</p>
          <p style={{ opacity: 0.9 }}>The casualty ILS market deserves specific attention because it is bringing in a genuinely different investor profile and changing the correlation argument. Casualty reserve sidecars and quota share structures offer returns driven by underwriting profitability in long-tail commercial liability lines — workers&apos; compensation, directors and officers, general liability, professional indemnity. These returns have some exposure to social inflation and reserve development, which creates a correlation with macroeconomic conditions that pure short-tail cat exposure does not carry. But they also offer something that property cat ILS cannot: the asset management return on the collateral over the multi-year development tail, and a volatility profile that is substantially lower from period to period. Private credit investors entering casualty ILS are essentially taking a view on the quality of underwriting at an insurer, combined with the return on a conservatively managed asset portfolio. That is a familiar value proposition, and it explains why the crossover between private credit and casualty ILS capital is accelerating. <Cite>Willis Re, January 2026; Artex Risk Solutions, July 2025</Cite></p>

          {/* FIG. 5 — ILS Instrument Matrix SVG */}
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="mono-label text-white/60 text-[9px]">Fig. 5 — ILS Instrument Matrix: Liquidity vs. Complexity Premium</p>
            </div>
            <div style={{ padding: "16px 20px 12px" }}>
              <svg viewBox="0 0 780 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
                {/* Quadrant fills */}
                <rect x="80" y="30" width="310" height="168" fill="rgba(230,57,70,0.05)" />
                <rect x="390" y="30" width="370" height="168" fill="rgba(29,111,164,0.06)" />
                <rect x="80" y="198" width="310" height="164" fill="rgba(255,255,255,0.02)" />
                <rect x="390" y="198" width="370" height="164" fill="rgba(29,111,164,0.03)" />
                {/* Dividers */}
                <line x1="390" y1="30" x2="390" y2="362" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,3" />
                <line x1="80"  y1="196" x2="760" y2="196" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,3" />
                {/* Quadrant labels */}
                <text x="235" y="50" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.18)" letterSpacing="1.2">ILLIQUID · HIGH PREMIUM</text>
                <text x="575" y="50" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.18)" letterSpacing="1.2">LIQUID · HIGH PREMIUM</text>
                <text x="235" y="350" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.12)" letterSpacing="1.2">ILLIQUID · LOWER PREMIUM</text>
                <text x="575" y="350" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.12)" letterSpacing="1.2">LIQUID · LOWER PREMIUM</text>
                {/* Y-axis */}
                <line x1="80" y1="362" x2="80" y2="34" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <polygon points="80,28 74,42 86,42" fill="rgba(255,255,255,0.25)" />
                {/* X-axis */}
                <line x1="80" y1="362" x2="754" y2="362" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <polygon points="760,362 746,356 746,368" fill="rgba(255,255,255,0.25)" />
                {/* Axis end labels */}
                <text x="90"  y="378" fontFamily="system-ui,sans-serif" fontSize="10" fill="rgba(255,255,255,0.35)">Illiquid</text>
                <text x="726" y="378" fontFamily="system-ui,sans-serif" fontSize="10" fill="rgba(255,255,255,0.35)" textAnchor="end">Liquid</text>
                <text x="420" y="400" fontFamily="system-ui,sans-serif" fontSize="11" fill="rgba(255,255,255,0.5)" fontWeight="700" textAnchor="middle">LIQUIDITY</text>
                {/* Y-axis label */}
                <text fontFamily="system-ui,sans-serif" fontSize="11" fill="rgba(255,255,255,0.5)" fontWeight="700" textAnchor="middle" transform="rotate(-90) translate(-196,22)">COMPLEXITY PREMIUM</text>
                <text fontFamily="system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)" textAnchor="middle" transform="rotate(-90) translate(-344,22)">Lower</text>
                <text fontFamily="system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.3)" textAnchor="middle" transform="rotate(-90) translate(-52,22)">Higher</text>
                {/* Cat Bond: liquid, lower premium → bottom-right */}
                <circle cx="630" cy="280" r="36" fill="rgba(29,111,164,0.2)"  stroke="#1D6FA4" strokeWidth="1.8" />
                <text x="630" y="275" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fill="#60a5fa" fontWeight="700">Cat Bond</text>
                <text x="630" y="289" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.5)">Liquid / Rated</text>
                {/* ILW: semi-liquid, mid premium → mid-right */}
                <circle cx="480" cy="228" r="30" fill="rgba(244,160,28,0.18)" stroke="#F4A01C" strokeWidth="1.8" />
                <text x="480" y="223" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fill="#F4A01C" fontWeight="700">ILW</text>
                <text x="480" y="237" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.5)">Binary trigger</text>
                {/* Collateralised Re: illiquid, high premium → top-left */}
                <circle cx="148" cy="112" r="38" fill="rgba(230,57,70,0.18)" stroke="#E63946" strokeWidth="1.8" />
                <text x="148" y="104" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#fca5a5" fontWeight="700">Collateralised</text>
                <text x="148" y="117" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#fca5a5" fontWeight="700">Reinsurance</text>
                <text x="148" y="130" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.45)">Bespoke / Private</text>
                {/* P&C Sidecar: illiquid, high premium → top-left offset */}
                <circle cx="262" cy="98" r="36" fill="rgba(59,109,17,0.2)"   stroke="#3B6D11" strokeWidth="1.8" />
                <text x="262" y="92" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#86efac" fontWeight="700">P&amp;C Sidecar</text>
                <text x="262" y="106" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.45)">Aligned structure</text>
                {/* Casualty ILS: illiquid, medium premium → left-mid */}
                <circle cx="146" cy="260" r="36" fill="rgba(124,58,237,0.18)" stroke="#7C3AED" strokeWidth="1.8" />
                <text x="146" y="253" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#c4b5fd" fontWeight="700">Casualty ILS</text>
                <text x="146" y="267" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.45)">Long-tail / Private</text>
                {/* Cyber Cat Bond: liquid-ish, high-mid premium → top-right */}
                <circle cx="560" cy="138" r="34" fill="rgba(5,150,105,0.18)"  stroke="#059669" strokeWidth="1.8" />
                <text x="560" y="131" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#6ee7b7" fontWeight="700">Cyber Cat Bond</text>
                <text x="560" y="145" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.45)">Emerging / 144A</text>
                {/* Reserve Sidecar / LPT: semi-illiquid, mid → centre-left */}
                <circle cx="325" cy="252" r="34" fill="rgba(194,65,12,0.18)"  stroke="#C2410C" strokeWidth="1.8" />
                <text x="325" y="245" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#fdba74" fontWeight="700">Reserve Sidecar</text>
                <text x="325" y="258" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#fdba74" fontWeight="700">/ LPT</text>
                <text x="325" y="271" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.45)">Structured / Private</text>
                {/* Life / Mortality: semi-liquid, high → top-centre */}
                <circle cx="432" cy="132" r="34" fill="rgba(3,105,161,0.18)"  stroke="#0369A1" strokeWidth="1.8" />
                <text x="432" y="125" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="#7dd3fc" fontWeight="700">Life / Mortality</text>
                <text x="432" y="139" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.45)">Long duration</text>
              </svg>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontStyle: "italic" }}>Schematic representation. Position reflects relative liquidity profile and complexity/illiquidity premium characteristics. Not drawn to scale by market size. Sources: Swiss Re, Aon Securities, EY, Artemis.bm, Schroders Capital, Willis Re.</p>
            </div>
          </div>

          {/* ── SECTION 5 ── */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">Section 05 — The Real Question for Allocators in 2026</h2>
          <p style={{ opacity: 0.9 }}>The framing that treats insurance risk as a single allocation decision misses the more important question. The CIO&apos;s committee is not choosing between &quot;ILS&quot; and &quot;private credit.&quot; They are deciding which premia types to buy, in what structure, at what liquidity profile, and with which governance overhead. The answers differ materially depending on the investor&apos;s return requirements, liability structure, governance capacity, and existing portfolio exposures.</p>
          <p style={{ opacity: 0.9 }}>For investors with shorter liquidity horizons and high governance requirements — some sovereign wealth funds, university endowments, family offices — the catastrophe bond market offers a credible starting point. It is rated, transparent, has a functioning secondary market, and a return history extending back to the late 1990s. The asset class now has dedicated fund structures, ETF wrappers, and UCITS vehicles approaching launch, lowering the operational complexity of entry. For these investors, the relevant question is not whether to allocate, but how much of the fixed income allocation to rebalance toward floating-rate cat bond exposure, and whether the spread compression seen in 2025 is sufficient to reduce expected returns below their target.</p>
          <p style={{ opacity: 0.9 }}>For investors with longer horizons, higher illiquidity tolerance, and stronger analytical capability — major pension funds, large endowments, some private equity vehicles — the more interesting opportunity lies further along the structure spectrum. Private collateralised reinsurance and sidecar vehicles continue to offer materially higher spreads than cat bonds, because the barriers to entry are higher: manager selection is critical, due diligence requires underwriting expertise, and the governance overhead is meaningful. The return differential in 2025 was significant — private ILS funds returned 12.47% on the ILS Advisers Fund Index, compared to 10.1% for cat bond funds <Cite>ILS Advisers Fund Index, January 2026</Cite> — and that differential tends to widen when cat bond spreads are compressing, because private market pricing adjusts with a lag and private deals offer more bespoke terms.</p>
          <p style={{ opacity: 0.9 }}>The casualty market is the next boundary to be crossed at scale. Private credit firms that understand liability management, asset-liability matching, and long-tail reserving are well-positioned to evaluate casualty sidecar structures, because the analytical framework transfers directly. The difference is that casualty sidecars offer the additional dimension of underwriting risk — which is both the source of excess return and the primary due diligence challenge. Investors who can credibly assess cedant underwriting quality and reserve adequacy will access a premium that generalist capital cannot. That is exactly the kind of structural advantage that sophisticated institutions have historically exploited in private markets.</p>

          <div style={{ ...cardStyle, background: "rgba(244,160,28,0.06)", borderLeft: "4px solid #F4A01C" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#F4A01C" }}>For the Alternatives Committee: Three Questions Worth Asking</p>
            <div className="space-y-4">
              {[
                { n:"1", q:"Which premium type fits our return profile?",         body:"Liquid cat bonds target 9–12% all-in in the current environment. Private ILS and sidecars have historically offered 200–400bps more, with commensurate governance and liquidity requirements. Casualty structures offer lower volatility at potentially similar or lower absolute returns, with longer duration." },
                { n:"2", q:"What is our actual correlation position?",            body:"Short-tail catastrophe exposure is genuinely uncorrelated with credit cycles and equity markets. Long-tail casualty exposure has more macroeconomic sensitivity through social inflation and claims trends. These are different diversification arguments and should be evaluated separately." },
                { n:"3", q:"What does manager selection look like in this market?", body:"The 2017–2021 period demonstrated that ILS fund performance dispersion is wide and manager quality matters enormously. The difference between top-quartile and bottom-quartile ILS managers over a decade is not a rounding error. Governance, risk modelling capability, and alignment structures should receive the same scrutiny as any private market GP selection." },
              ].map((item) => (
                <div key={item.n} style={{ display:"flex", gap:"14px", paddingBottom:"16px", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width:"26px", height:"26px", borderRadius:"50%", background:"#1D6FA4", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:"2px" }}>
                    <span style={{ color:"white", fontSize:"11px", fontWeight:700 }}>{item.n}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">{item.q}</p>
                    <p className="text-white text-xs leading-relaxed" style={{ opacity:0.75 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 6 ── */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">Section 06 — Implications for Insurers, Reinsurers, and Capital Providers</h2>
          <p style={{ opacity: 0.9 }}>The structural expansion of alternative capital is changing competitive dynamics for traditional (re)insurers in ways that are not fully reflected in current market commentary. Alternative capital now accounts for approximately 20% of global reinsurance capacity, and its influence on pricing at renewals is now a documented feature of market dynamics rather than a marginal effect. Guy Carpenter explicitly noted that ILS investor appetite was a contributing factor to the double-digit rate declines at January 2026 renewals. <Cite>Guy Carpenter, January 2026</Cite> When a single asset class can measurably influence pricing across the global property catastrophe market, it has passed a threshold of institutional significance.</p>
          <p style={{ opacity: 0.9 }}>For primary insurers, the growth of alternative capital presents a genuine structuring opportunity. The spectrum of available structures — from vanilla cat bonds to complex casualty sidecars to reserve monetisation transactions — means that the cost and form of capital relief is no longer binary. Insurers with the structuring capability and investor relationships to access multiple capital types can optimise their capital stack in ways that were not commercially available a decade ago. Lloyd&apos;s London Bridge 2 vehicle, which deployed $1.92bn through diverse transactions in 2024, is an early institutional expression of this trend. <Cite>Lloyd&apos;s of London</Cite></p>
          <p style={{ opacity: 0.9 }}>For reinsurers, the strategic question is more uncomfortable. A sustained, large-scale institutional allocation to ILS compresses the pricing that has historically provided excess reinsurance returns. The reinsurance market&apos;s profitability in 2023–2025 — driven by high attachment points, better terms, and reduced exposure to frequency losses — was partly a structural reset that improved economics for all capital providers. But if the long-term effect of durable institutional capital is to keep risk transfer pricing closer to actuarially fair value, the premium that traditional reinsurers earn above their cost of capital will narrow over time. That is a return compression story for rated reinsurance equity, and a reason why some of the more sophisticated reinsurers are aggressively building their own ILS origination platforms and investor relationships rather than competing purely on balance sheet.</p>
          <p style={{ opacity: 0.9 }}>For institutional capital providers evaluating entry or expansion, the current environment offers something that earlier entry points did not: a market with sufficient depth, manager infrastructure, regulatory familiarity, and return history to make a credible allocation without depending on a single manager or a single peril type. The risk of the market today is not that it does not work. It is that having worked, it has attracted enough capital to normalise the excess returns that attracted early movers. Managing that dynamic — choosing structures and risk layers where genuine information advantages or complexity premia persist — is the core discipline for the next decade of insurance risk investing.</p>

          {/* Sources note */}
          <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="mono-label text-white/40 text-[9px] mb-3">Principal Sources</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: 1.7, fontStyle: "italic" }}>This note draws principally on Swiss Re ILS Market Insights (February 2026), Guy Carpenter and Howden Re January 2026 Reinsurance Renewal Reports, Gallagher Securities institutional investor survey (May 2026), Aon Securities ILS Annual Report 2025, EY P&amp;C Reinsurance Sidecars analysis (May 2026), ILS Advisers Fund Index (January 2026), Artemis Deal Directory, Willis Re Casualty ILS analysis (January 2026), SCOR Investment Partners ILS Market Insights (February/March 2026), and Gallagher Re 1st View (April 2026).</p>
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)", lineHeight: 1.6, fontStyle: "italic" }}>This is an insight note produced by Eudaimon Consulting for general informational and educational purposes only. It is not investment research, institutional analysis, or regulated financial advice of any kind. It does not constitute a solicitation, recommendation, or offer to buy or sell any financial instrument. The data, analysis, and commentary are drawn from publicly available sources and are believed to be reliable at the time of publication; Eudaimon Consulting makes no representation as to their accuracy or completeness. Recipients should not rely on this note in making any commercial, investment, or strategic decision and should seek independent professional advice. Eudaimon Consulting has no financial interest in any product, manager, or transaction referenced herein. © 2026 Eudaimon Consulting.</p>
          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/50 text-[9px] mb-2">Questions on ILS, alternative capital, or reinsurance strategy?</p>
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
