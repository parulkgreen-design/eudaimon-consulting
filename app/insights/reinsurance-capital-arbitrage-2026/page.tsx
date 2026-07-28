import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Reinsurance Capital Arbitrage in 2026: A Line-by-Line Opportunity for P&C Insurers — Eudaimon Consulting",
  description: "Property and financial lines reinsurance pricing has fallen sharply in 2026, and Chubb has bought more of it. Casualty pricing has not moved the same way, and most of Chubb's peers have not followed its lead.",
  openGraph: {
    title: "The Reinsurance Capital Arbitrage in 2026: A Line-by-Line Opportunity for P&C Insurers",
    description: "The Guy Carpenter Global Property Catastrophe Rate-on-Line Index has fallen 16% year to date on record capital of $790bn. Chubb is buying the discount. Most peers are not.",
    url: "https://www.eudaimonconsulting.com/insights/reinsurance-capital-arbitrage-2026",
    type: "article",
    images: [{ url: "/assets/logo.jpg" }],
  },
  alternates: { canonical: "https://www.eudaimonconsulting.com/insights/reinsurance-capital-arbitrage-2026" },
};

import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function ReinsuranceArbitrageArticle() {

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    padding: "24px",
  };

  // ── Chart 1: RoL Index SVG ───────────────────────────────────────
  const rolPoints = [
    { label: "2017 trough",         val: 100 },
    { label: "End 2025",            val: 178 },
    { label: "Jan 2026 renewals",   val: 157 },
    { label: "Mid-2026 (current)",  val: 132 },
  ];
  const rolSvgW = 620; const rolSvgH = 260;
  const rolPadL = 52; const rolPadR = 16; const rolPadT = 20; const rolPadB = 48;
  const rolChartW = rolSvgW - rolPadL - rolPadR;
  const rolChartH = rolSvgH - rolPadT - rolPadB;
  const rolYMin = 80; const rolYMax = 200;
  const rolX = (i: number) => rolPadL + (i / (rolPoints.length - 1)) * rolChartW;
  const rolY = (v: number) => rolPadT + rolChartH - ((v - rolYMin) / (rolYMax - rolYMin)) * rolChartH;
  const rolPath = rolPoints.map((p, i) => `${i === 0 ? "M" : "L"}${rolX(i).toFixed(1)},${rolY(p.val).toFixed(1)}`).join(" ");
  const rolArea = rolPath + ` L${rolX(rolPoints.length - 1).toFixed(1)},${(rolPadT + rolChartH).toFixed(1)} L${rolX(0).toFixed(1)},${(rolPadT + rolChartH).toFixed(1)} Z`;
  const rolYTicks = [80, 100, 120, 140, 160, 180, 200];

  // ── Signal row data ──────────────────────────────────────────────
  const signals = [
    { name: "Chubb",       desc: "NA Commercial ceded premiums up >20% YoY, concentrated in property/financial lines",          dir: "Increasing cessions", dirClass: "up"    },
    { name: "AIG",         desc: "Cheap Jan-1 renewals cited as funding 24% NPW growth (Q1 2026; Q2 due 6 Aug)",               dir: "Funding growth",      dirClass: "mixed"  },
    { name: "Travelers",   desc: "Larger cat bond, but consolidated personal lines treaty into corporate cover",                dir: "Restructuring",       dirClass: "mixed"  },
    { name: "The Hartford",desc: "No disclosed change to reinsurance strategy",                                                 dir: "No signal",           dirClass: "flat"   },
    { name: "Allianz",     desc: "No disclosed change to retention (Q1 2026; H1 pending)",                                     dir: "No signal",           dirClass: "flat"   },
    { name: "AXA",         desc: "AXA XL Reinsurance (assumed book) premiums down 7%, reversing 2025 growth",                  dir: "Pulling back as supplier", dirClass: "down" },
  ];

  const dirStyle: Record<string, React.CSSProperties> = {
    up:    { background: "rgba(244,160,28,0.15)",  color: "#F4A01C", border: "1px solid rgba(244,160,28,0.4)"  },
    mixed: { background: "rgba(29,111,164,0.15)",  color: "#60a5fa", border: "1px solid rgba(29,111,164,0.4)"  },
    flat:  { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.15)" },
    down:  { background: "rgba(230,57,70,0.15)",   color: "#fca5a5", border: "1px solid rgba(230,57,70,0.4)"   },
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* HERO */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(244,160,28,0.8) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-10">
            <ChevronLeft size={14} />Back to Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="mono-label text-[9px] px-3 py-1 rounded-full" style={{ background: "rgba(244,160,28,0.15)", color: "#F4A01C" }}>Insight Note</span>
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-white/30 text-white">Insurance &amp; Insurtech Advisory</span>
            <div className="flex items-center gap-2 text-white/60"><Clock size={11} /><span className="mono-label text-[9px]">7 min read</span></div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            The Reinsurance Capital Arbitrage in 2026: A Line-by-Line Opportunity for P&amp;C Insurers
          </h1>
          <p className="text-white/60 text-xl leading-relaxed italic" style={{ fontFamily: "Georgia, serif" }}>
            Property and financial lines reinsurance pricing has fallen sharply in 2026, and Chubb has bought more of it. Casualty pricing has not moved the same way, and most of Chubb&apos;s peers have not followed its lead.
          </p>
          <div style={{ ...cardStyle, marginTop: "32px", padding: "20px 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[{ label: "Author", val: "Eudaimon Consulting · Insurance & Insurtech Advisory" }, { label: "Published", val: "25 July 2026" }, { label: "Audience", val: "CFOs · CUOs · MGAs · Fronting Carriers" }].map((m) => (
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
        <div className="max-w-3xl mx-auto space-y-10 text-white text-base leading-relaxed">

          {/* EXECUTIVE SUMMARY */}
          <div style={{ ...cardStyle, borderLeft: "4px solid #F4A01C", padding: "26px 28px" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#F4A01C" }}>Executive Summary</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Reinsurance capital has repriced in property and financial lines, where the Guy Carpenter Global Property Catastrophe Rate-on-Line Index has fallen 16% year to date on record capital of $790bn. It has not repriced in casualty, where loss costs of 6–12% continue to outrun rate.",
                "Chubb's own disclosures make the point directly. North America Commercial ceded premiums rose more than 20% year on year in Q2 2026, concentrated in property and financial lines, while casualty retention stayed untouched.",
                "Reinsurers are pricing lower without underwriting below their own hurdle rates. Europe's big four posted a record 19.6% average ROE in 2025, and RenaissanceRe improved its combined ratio to 72.8% in Q2 2026 while shrinking gross premiums by 12.5%. That is rationed supply at a lower price, not distress.",
                "CFOs should redeploy capital freed by property cessions into buybacks or better-priced casualty and international growth. CUOs should capture the discount in property and financial lines and hold retentions firm in casualty. MGAs should expect capacity to keep easing in property-exposed programmes while casualty capacity stays disciplined.",
              ].map((b, i) => (
                <li key={i} style={{ position: "relative", paddingLeft: "20px", fontSize: "14.5px", color: "rgba(255,255,255,0.85)", lineHeight: 1.65 }}>
                  <span style={{ position: "absolute", left: 0, top: "8px", width: "7px", height: "7px", background: "#F4A01C", borderRadius: "50%" }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <section>
            <h2 className="font-display text-white text-2xl mb-4">The arbitrage is real, but it is line-specific</h2>
            <p style={{ opacity: 0.9 }}>2026 has produced the steepest annual fall in reinsurance pricing since the late 1990s. The Guy Carpenter Global Property Catastrophe Rate-on-Line Index fell 12% at the January renewals and a cumulative 16% once the April, June and July renewals were included, a faster decline than any year of the 2010s soft cycle. Gallagher Re reported property catastrophe rate declines of 20–25% or more for the best-performing North American accounts at the July renewals. Aon put global dedicated reinsurance capital at a record $790bn at the end of March 2026, up $5bn in the quarter and driven mainly by third-party capital, against premium growth of little more than 1%. Capital is growing faster than demand, which typically favours buyers of protection over sellers of it.</p>

            {/* Chart 1: RoL Index */}
            <div style={{ ...cardStyle, padding: 0, overflow: "hidden", margin: "26px 0 10px 0" }}>
              <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="mono-label text-white/50 text-[9px]">Guy Carpenter Global Property Cat Rate-on-Line Index</p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", color: "rgba(255,255,255,0.85)", marginTop: "3px" }}>The steepest annual fall since the late 1990s, from an elevated base</p>
              </div>
              <div style={{ padding: "16px 20px 8px" }}>
                <svg viewBox={`0 0 ${rolSvgW} ${rolSvgH}`} xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
                  {/* Y-axis grid lines and labels */}
                  {rolYTicks.map((t) => (
                    <g key={t}>
                      <line x1={rolPadL} y1={rolY(t)} x2={rolSvgW - rolPadR} y2={rolY(t)} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <text x={rolPadL - 6} y={rolY(t) + 4} textAnchor="end" fontSize="10" fill="rgba(255,255,255,0.35)" fontFamily="monospace">{t}</text>
                    </g>
                  ))}
                  {/* Axes */}
                  <line x1={rolPadL} y1={rolPadT} x2={rolPadL} y2={rolPadT + rolChartH} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  <line x1={rolPadL} y1={rolPadT + rolChartH} x2={rolSvgW - rolPadR} y2={rolPadT + rolChartH} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                  {/* Area */}
                  <path d={rolArea} fill="rgba(244,160,28,0.1)" />
                  {/* Line */}
                  <path d={rolPath} fill="none" stroke="#F4A01C" strokeWidth="2.5" />
                  {/* Points and labels */}
                  {rolPoints.map((p, i) => (
                    <g key={i}>
                      <circle cx={rolX(i)} cy={rolY(p.val)} r="5" fill="#F4A01C" />
                      <text x={rolX(i)} y={rolY(p.val) - 10} textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontWeight="600">{p.val}</text>
                      <text x={rolX(i)} y={rolSvgH - rolPadB + 16} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="monospace">{p.label}</text>
                    </g>
                  ))}
                </svg>
                <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontStyle: "italic", fontFamily: "monospace" }}>Index reconstructed by Eudaimon, 2017 trough = 100, using Guy Carpenter's reported percentage changes (−12% at 1 January 2026, −16% cumulative year to date, current level c.32% above the 2017 trough). Illustrative reconstruction, not Guy Carpenter's own published index values. Source: Guy Carpenter, via Artemis.bm, July 2026.</p>
              </div>
            </div>

            <p style={{ opacity: 0.9 }}>The unevenness of the softening matters more than its headline speed. Guy Carpenter describes casualty renewals as &quot;more mixed,&quot; shaped by loss experience rather than capital abundance, while property has softened fastest. That split matters because primary casualty economics are moving in the opposite direction: US casualty loss costs are running at 6–7% for primary business and 9–12% for excess layers, ahead of the rate insurers are currently achieving. Property and financial lines reinsurance has become cheap at the same time that casualty reinsurance has stayed disciplined. An insurer that treats &quot;reinsurance is cheaper now&quot; as a single, group-level fact will misprice the decision. The arbitrage exists in property and financial lines. It does not exist in casualty.</p>
            <p style={{ opacity: 0.9 }}>Even in property, the discount has a floor. Pricing remains roughly 32% above the trough reached in the 2017 soft market, so reinsurers are giving back gains built up since the 2022–2023 hard market rather than pricing at distressed levels. Alternative capital, now roughly $115bn within the $790bn total pool, has grown at a pace comparable to the last similar cycle in 2014–2018, when catastrophe bonds outstanding rose from $23bn to more than $95bn, around 16% of dedicated capital, before the 2017–2019 loss years reversed the trend. Capital abundance of this kind has historically kept compressing margins until a loss year or a shift in investor risk appetite interrupted it, which is the clearest reason to treat today&apos;s pricing gap as a window rather than a new baseline for planning.</p>

            {/* Table 1 */}
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontFamily: "monospace", fontStyle: "italic", margin: "20px 0 6px" }}>Sources: Guy Carpenter, via Artemis.bm; Aon, Reinsurance Market Dynamics, Midyear 2026; Gallagher Re First View, July 2026.</p>
            <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
                  <thead>
                    <tr>
                      <th style={{ padding: "10px 16px", textAlign: "left", fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid #F4A01C", fontWeight: 500 }}>Pricing cycle marker</th>
                      <th style={{ padding: "10px 16px", textAlign: "left", fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid #F4A01C", fontWeight: 500 }}>2026 position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Guy Carpenter Global Property Cat RoL, YTD change", "−16%, the biggest annual fall since the late 1990s"],
                      ["Level vs 2017 soft-market trough", "Still c.32% above the last cycle low"],
                      ["Global dedicated reinsurance capital", "$790bn (Aon, March 2026), vs $648–663bn at end-2025 (Guy Carpenter/Gallagher Re)"],
                      ["Alternative capital (cat bonds, sidecars, ILS)", "c.$115bn+, vs c.$95bn (16% of capital) in 2018"],
                      ["Premium growth vs capital growth", "c.1% vs +$5bn in Q1 alone: capital outpacing demand"],
                    ].map(([k, v], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                        <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{k}</td>
                        <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.6)" }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="font-display text-white text-2xl mb-4">What Chubb&apos;s numbers show</h2>
            <p style={{ opacity: 0.9 }}>Chubb&apos;s Q2 2026 results illustrate the line-specific pattern described above. On the earnings call, KBW&apos;s Meyer Shields asked why North America Commercial ceded premiums had risen more than 20% year on year. Evan Greenberg&apos;s answer confirmed the mechanism: the increase is concentrated in property and &quot;certain areas of fin lines,&quot; where it makes sense to reinsure more.</p>

            {/* Blockquote */}
            <blockquote style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "19px", color: "rgba(255,255,255,0.85)", borderLeft: "2px solid #1D6FA4", padding: "4px 0 4px 22px", margin: "22px 0" }}>
              &ldquo;If there&apos;s a hungry market, at times it may rationally make sense to us to feed the hungry.&rdquo;
              <cite style={{ display: "block", fontFamily: "monospace", fontStyle: "normal", fontSize: "11.5px", color: "rgba(255,255,255,0.35)", marginTop: "8px" }}>Evan Greenberg, Chairman &amp; CEO, Chubb — Q2 2026 earnings call, 22 July 2026</cite>
            </blockquote>

            <p style={{ opacity: 0.9 }}>North America Commercial net premiums written fell 2.3% to $5.59bn even as underlying volume, excluding large account and E&amp;S property, was up 4.1%, and Chubb&apos;s own filings attribute part of the softness in financial lines to &quot;the increased use of reinsurance.&quot; The pattern was already visible in the Q1 2026 10-Q, which recorded softer group net premiums written driven partly by &quot;less favourable reinsurance terms&quot; on Chubb&apos;s own assumed reinsurance book.</p>
            <p style={{ opacity: 0.9 }}>Two facts support reading this as capital optimisation rather than a change of direction. Asked directly whether a larger reinsurance platform, built organically or bought, would be of strategic benefit, Greenberg said it &quot;makes zero sense.&quot; And Chubb&apos;s casualty retention is untouched, even though its own casualty loss costs are running ahead of price. A company repositioning its risk appetite would cede more of its worst-performing line. Chubb ceded more of its best-priced line instead, the behaviour of a buyer taking a discount rather than a company de-risking its book.</p>

            {/* Chubb table */}
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontFamily: "monospace", fontStyle: "italic", margin: "20px 0 6px" }}>Sources: Chubb Q2 2026 results and earnings call, 21–22 July 2026; Chubb Form 8-K and 10-Q, SEC. Management&apos;s own confirmed figure, a &gt;20% year-on-year rise in North America Commercial ceded premiums, is the disclosure used throughout this note; a separately circulated 5.2 percentage point ceded-ratio figure could not be corroborated against public filings.</p>
            <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
                  <thead>
                    <tr>
                      {["Chubb, Q2 2026", "Value", "vs Q2 2025"].map((h) => (
                        <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid #F4A01C", fontWeight: 500 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Core operating income",                         "$2.84bn ($7.26/share)",                                       "+14.6% / +18.2%"],
                      ["P&C combined ratio",                             "83.8%",                                                       "−1.8 points"],
                      ["P&C net premiums written",                       "$12.77bn",                                                    "+3.0% (+6.3% ex large account/E&S property)"],
                      ["North America Commercial NPW",                   "$5.59bn",                                                     "−2.3% (+4.1% ex large account/E&S property)"],
                      ["North America Commercial combined ratio",        "85.4%",                                                       "+1.9 points"],
                      ["North America Commercial ceded premiums",        "Up \"a little more than 20%\" YoY, per management",          "—"],
                      ["Catastrophe losses",                             "$475m",                                                       "−25%"],
                      ["Capital returned to shareholders",               "$1.37bn ($979m buybacks, $395m dividends)",                  "—"],
                    ].map(([a, b, c], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                        <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{a}</td>
                        <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.6)" }}>{b}</td>
                        <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.5)", fontFamily: "monospace", fontSize: "12px" }}>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="font-display text-white text-2xl mb-4">Reinsurers are pricing lower, but not underpricing risk</h2>
            <p style={{ opacity: 0.9 }}>The question underneath this note is whether reinsurance capital has become cheaper than shareholder capital. The evidence says yes, at the margin, in specific lines, without reinsurers accepting returns below their own cost of capital.</p>
            <p style={{ opacity: 0.9 }}>Europe&apos;s big four reinsurers, Munich Re, Swiss Re, Hannover Re and SCOR, delivered a record average return on equity of 19.6% in 2025 and are guiding to property and casualty combined ratios in the low-to-mid 80s for 2026. RenaissanceRe&apos;s Q2 2026 combined ratio improved to 72.8% even as its gross premiums written fell 12.5% year on year, because management chose underwriting discipline over volume. Reinsurers are accepting lower margins on a still-comfortable base and rationing the business they are prepared to write at the new price. RenaissanceRe would not be shrinking its book by double digits while improving its margin if reinsurers were writing business below their hurdle rates; that combination is what marks this as rationed supply rather than distress.</p>

            {/* Chart 2: Capital Gap — horizontal bars */}
            <div style={{ ...cardStyle, padding: 0, overflow: "hidden", margin: "26px 0 10px 0" }}>
              <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="mono-label text-white/50 text-[9px]">The capital gap</p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", color: "rgba(255,255,255,0.85)", marginTop: "3px" }}>Reinsurers&apos; 2025 returns vs a typical P&amp;C insurer&apos;s cost of equity</p>
              </div>
              <div style={{ padding: "20px 24px 16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "Big four Europe reinsurers, FY2025 ROE", pct: 19.6, color: "#F4A01C" },
                    { label: "Illustrative P&C insurer cost of equity", pct: 9.5,  color: "#1D6FA4" },
                  ].map((b) => (
                    <div key={b.label}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{b.label}</span>
                        <span style={{ fontFamily: "monospace", fontSize: "14px", fontWeight: 700, color: b.color, marginLeft: "12px" }}>{b.pct}%</span>
                      </div>
                      <div style={{ height: "12px", background: "rgba(255,255,255,0.08)", borderRadius: "6px", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${(b.pct / 24) * 100}%`, background: b.color, borderRadius: "6px" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "14px", fontStyle: "italic", fontFamily: "monospace" }}>Big four Europe: reported average ROE, FY2025 (Fitch, via Reinsurance News, March 2026). Illustrative P&amp;C insurer cost of equity: midpoint of an 8–11% range on standard capital asset pricing assumptions, not a disclosed or company-specific figure; not independently verified per company for this draft.</p>
              </div>
            </div>

            <p style={{ opacity: 0.9 }}>For a primary insurer, the comparison that matters is the gap between its own cost of equity and the return a reinsurer will accept for holding the same risk. Chubb&apos;s dividend yield of roughly 1.2% and consistent double-digit tangible book value growth put it toward the lower end of a typical P&amp;C cost-of-equity range, alongside Travelers on a similar profile. Against reinsurers earning high-teens to low-twenties returns even at today&apos;s softened prices, the gap is wide enough in property and financial lines to make ceding value-accretive. It will close as capital keeps flowing in and reinsurers keep rationing supply, which is why this is a window for capital planning rather than a new baseline.</p>

            {/* Dividend yield table */}
            <div style={{ ...cardStyle, padding: 0, overflow: "hidden", marginTop: "16px" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
                  <thead>
                    <tr>
                      {["Company", "Dividend yield (verified, 2026)"].map((h) => (
                        <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid #F4A01C", fontWeight: 500 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[["Chubb","c.1.2%"],["Travelers","c.1.5%"],["AIG","c.2.4%"],["AXA","c.4%"]].map(([co, yld], i) => (
                      <tr key={co} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                        <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{co}</td>
                        <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>{yld}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace", fontStyle: "italic", marginTop: "8px" }}>The Hartford and Allianz are omitted; their current dividend yields were not sourced for this draft.</p>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="font-display text-white text-2xl mb-4">The rest of the market is reading the signal differently</h2>
            <p style={{ opacity: 0.9 }}>None of Chubb&apos;s five closest peers has made a comparable public statement about deliberately increasing cessions, and where reinsurance features in their disclosures, the logic differs.</p>
            <p style={{ opacity: 0.9 }}>AIG is using cheap capacity to fund growth rather than to shrink retained risk. Its most recent reported quarter, Q1 2026 (Q2 results are due 6 August), showed general insurance net premiums written up 24% year on year, with incoming leadership crediting part of the growth to &quot;favourable January 1 reinsurance renewal outcomes.&quot; Travelers is restructuring rather than broadly increasing cessions: it replaced an expiring $575m catastrophe bond with a $750m bond at a lower retention, but also let a personal lines catastrophe treaty lapse in favour of a more efficient enterprise-wide programme. The Hartford&apos;s Q2 2026 results contain no comparable reinsurance commentary. Allianz&apos;s H1 2026 results were not yet published when this note was prepared, and its Q1 disclosures showed no change in retention strategy. AXA offers a counter-signal from the supply side: its own reinsurance underwriting arm, AXA XL Reinsurance, saw premiums fall 7% in Q1 2026 &quot;as the group maintained underwriting discipline amid softer market conditions,&quot; reversing 8–11% growth through 2025.</p>

            {/* Signal rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "22px 0 8px" }}>
              {signals.map((s) => (
                <div key={s.name} style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", alignItems: "center", gap: "14px", padding: "12px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px" }}>
                  <span style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>{s.name}</span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{s.desc}</span>
                  <span style={{ fontFamily: "monospace", fontSize: "10px", padding: "4px 9px", borderRadius: "3px", whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.03em", ...dirStyle[s.dirClass] }}>{s.dir}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2 className="font-display text-white text-2xl mb-4">What to do</h2>

            {/* Role cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", margin: "0 0 26px 0" }}>
              {[
                { role: "For the CFO", body: "Capital released through cession at today's pricing can be redeployed at a return above the reinsurer's charge for taking the risk, provided the comparison is run line by line and the pricing gap is treated as a window rather than a new planning baseline. Redeployment options: buybacks, growth in better-priced lines such as casualty and international retail, or a capital buffer." },
                { role: "For the CUO", body: "The discount is selective. Property and financial lines reinsurance is genuinely attractive; casualty reinsurance is not, because casualty loss costs are still outrunning price. A blanket instruction to increase cessions gives away margin in the well-priced part of the book while leaving the underpriced part, casualty, fully retained." },
                { role: "For MGAs & fronting carriers", body: "Capacity is easier to secure and cheaper at the margin, supporting continued formation and growth in property-exposed programmes. Casualty capacity has not eased in the same way and remains the more contested, margin-pressured segment." },
              ].map((c) => (
                <div key={c.role} style={{ ...cardStyle, padding: "20px" }}>
                  <p className="mono-label text-[9px] mb-3" style={{ color: "#F4A01C" }}>{c.role}</p>
                  <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>

            <p style={{ opacity: 0.9 }}>Three courses of action follow, and the evidence points toward the middle one.</p>

            {/* Scenario table */}
            <div style={{ ...cardStyle, padding: 0, overflow: "hidden", marginTop: "16px" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13.5px" }}>
                  <thead>
                    <tr>
                      {["Scenario", "What it means", "Best suited to"].map((h) => (
                        <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", borderBottom: "1px solid #F4A01C", fontWeight: 500 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["A. Follow Chubb now",    "Broadly increase cessions across the book in 2026; frees capital quickly but does not distinguish by line",                                                                                      "Insurers with weak capital generation who need a near-term ROE lift"],
                      ["B. Selective cessions",   "Increase cessions only where pricing has moved furthest against the insurer's own loss cost trend — chiefly property and financial lines",                                                       "Most well-capitalised insurers and MGAs; the approach best supported by the evidence in this note"],
                      ["C. Wait and watch",       "Maintain current retentions pending further market movement; forgoes a currently open pricing window",                                                                                           "Insurers already well-protected, or expecting a loss event to reverse pricing"],
                    ].map(([sc, wt, bs], i) => (
                      <tr key={sc} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: i === 1 ? "rgba(244,160,28,0.05)" : i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                        <td style={{ padding: "10px 16px", color: i === 1 ? "#F4A01C" : "rgba(255,255,255,0.85)", fontWeight: 600 }}>{sc}</td>
                        <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.6)" }}>{wt}</td>
                        <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.55)" }}>{bs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Closing paragraphs */}
            <p style={{ fontFamily: "Georgia, serif", fontSize: "19px", lineHeight: 1.55, color: "rgba(255,255,255,0.9)", marginTop: "28px" }}>Chubb&apos;s move is evidence of a dislocation between the price of risk capital and the price of shareholder capital in property and financial lines. It says nothing about casualty, where the two remain much closer together. The insurer that gets this right in 2026 will buy the discount where it is real and hold its ground where it is not.</p>
            <p style={{ opacity: 0.9, marginTop: "16px" }}>Watch the Guy Carpenter and Gallagher Re renewal reports through the rest of the year: if the rate of decline slows, or a loss event interrupts it before year-end, the window narrows quickly, and insurers that have not already captured the property arbitrage will have missed the best part of the cycle to do so.</p>
          </section>

          {/* DISCLAIMER */}
          <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="mono-label text-white/40 text-[9px] mb-3">Important Information</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.7, marginBottom: "12px" }}>This note is provided for general information purposes only and does not constitute investment, financial, actuarial, legal or regulatory advice. It should not be relied upon as the basis for any commercial, investment or capital management decision. Eudaimon Consulting is not a licensed investment adviser, broker-dealer, actuary or law firm.</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.7, marginBottom: "12px" }}>Figures presented as illustrative or as ranges, including cost-of-equity estimates, are Eudaimon&apos;s own approximations built from public market data and standard capital asset pricing assumptions. They are not disclosed company figures, have not been independently audited, and should not be treated as precise. Where a figure could not be independently verified, it has been marked as such or omitted rather than estimated.</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.7, marginBottom: "12px" }}>This note is based on information believed to be reliable at the time of writing, including company disclosures, earnings calls, SEC filings and third-party market data from Guy Carpenter, Aon, Gallagher Re and Fitch, among others, current as of 25 July 2026. Market conditions, company disclosures and reinsurance pricing can change materially and without notice. Eudaimon Consulting accepts no liability for actions taken in reliance on this note.</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>Company names, trademarks and quoted management commentary remain the property of their respective owners and are used here for identification and commentary purposes only.</p>
            <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>© 2026 Eudaimon Consulting. All rights reserved.</span>
              <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>Unauthorised reproduction or redistribution is prohibited without prior written consent.</span>
            </div>
          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/50 text-[9px] mb-2">Questions on reinsurance strategy, capital optimisation, or P&amp;C market positioning?</p>
              <p className="font-display text-white text-2xl">Talk to Eudaimon Consulting.</p>
            </div>
            <Link href="/contact" className="group flex items-center gap-2 px-7 py-3.5 bg-[#F4A01C] text-black rounded-full font-medium hover:bg-[#d4891a] transition-all flex-shrink-0">
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
