import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Are Soft Markets Existential for MGAs? What the Evidence Says — Eudaimon Consulting",
  description: "A soft market is widely held to be existential for MGAs. Tested against three market cycles and current conditions, the belief is wrong about the model and right about a defined cohort of undifferentiated, single-capacity and subscale businesses.",
  openGraph: {
    title: "Are Soft Markets Existential for MGAs? What the Evidence Says",
    description: "A soft market is widely held to be existential for MGAs. Tested against three market cycles, the belief is wrong about the model and right about a defined cohort.",
    url: "https://www.eudaimonconsulting.com/insights/softening-prices-and-mga-survival",
    type: "article",
    images: [{ url: "/assets/logo.jpg" }],
  },
  alternates: { canonical: "https://www.eudaimonconsulting.com/insights/softening-prices-and-mga-survival" },
};

import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";
import type { CSSProperties } from "react";

export default function SofteningPricesMgaSurvivalArticle() {

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    padding: "24px",
  };

  const exhibitWrap = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    overflow: "hidden" as const,
    margin: "0",
  };

  const exhibitHeader = {
    background: "rgba(255,255,255,0.06)",
    padding: "10px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  };

  const tblTh: CSSProperties = {
    textAlign: "left",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "11.5px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.95)",
    padding: "10px 14px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    whiteSpace: "nowrap",
  };
  const tblTd: CSSProperties = {
    textAlign: "left",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "12px",
    color: "rgba(255,255,255,0.75)",
    padding: "10px 14px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    lineHeight: 1.5,
    verticalAlign: "top",
  };
  const tblTdHead: CSSProperties = {
    ...tblTd,
    fontWeight: 600,
    color: "rgba(255,255,255,0.9)",
    background: "rgba(255,255,255,0.04)",
    whiteSpace: "nowrap",
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* HERO */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(230,57,70,0.8) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-10">
            <ChevronLeft size={14} />Back to Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="mono-label text-[9px] px-3 py-1 rounded-full" style={{ background: "rgba(230,57,70,0.2)", color: "#fca5a5" }}>Specialty Insurance</span>
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-white/30 text-white">Eudaimon Insight</span>
            <div className="flex items-center gap-2 text-white/60"><Clock size={11} /><span className="mono-label text-[9px]">10 min read</span></div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            Are Soft Markets Existential for MGAs? What the Evidence Says
          </h1>
          <p className="text-white text-xl leading-relaxed border-l-2 border-[#E63946] pl-5">
            A belief repeated across specialty distribution, tested against three market cycles and current conditions
          </p>
          <div style={{ ...cardStyle, marginTop: "32px", padding: "20px 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{ label: "Published", val: "July 2026" }, { label: "Series", val: "Specialty Insurance" }, { label: "Audience", val: "Insurance C-Suite · Underwriting Committees · Specialty Investors" }, { label: "Read time", val: "10 minutes" }].map((m) => (
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

          {/* EXECUTIVE SUMMARY */}
          <div style={{ ...cardStyle, borderLeft: "4px solid #E63946", padding: "28px 32px" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#fca5a5" }}>Executive Summary</p>
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.92 }}>It is close to an article of faith in specialty distribution that a soft market is existential for managing general agents. This note tests that belief against three market cycles, 2007&ndash;2010, 2014&ndash;2018 and 2025&ndash;2026, using MGA premium, formation, valuation and capacity data rather than narrative.</p>
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.92 }}>The finding is more precise than the headline claim. The modern MGA sector has never actually faced a soft market at its current scale, having tripled through the hard market since 2021. Read as a claim about the model as a whole, the belief does not hold. Read as a claim about a defined cohort of undifferentiated, single-capacity and subscale operators, now compounded by private equity leverage set at peak multiples, the belief holds firmly.</p>
            <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.92 }}>The conclusion for boards and underwriting committees: the risk is real, but it is a sorting mechanism, not a sector-wide event. Capacity concentration and financing structure, not the rate index, determine which MGAs survive.</p>
          </div>

          {/* SECTION 01 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>01 · The Historical Record</span>
            What the Evidence Actually Shows
          </h2>

          <p style={{ opacity: 0.92 }}>The single most important fact is that the modern MGA sector has essentially never experienced a soft market at its current scale. On statutory filings, US MGA premium sat in a $40bn to $50bn band throughout 2014 to 2018, the last genuinely soft phase. Growth accelerated only from 2021, driven by hard-market rate, a tighter admitted market, talent migration from carriers, and fronting capacity. Premium reached roughly $92bn in 2024 and $109bn in 2025 on the same basis, with broader estimates that include Lloyd&rsquo;s-sourced business above $114bn. The sector now in question is therefore three to four times larger than the one that last saw sustained rate reductions, and its growth to that size is itself a hard-market artefact.</p>

          {/* EXHIBIT 1 - Premium vs pricing cycle */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 1 &mdash; US MGA premium against the commercial pricing cycle, 2014&ndash;2026</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 860 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "560px" }}>
                <line x1="50" y1="30" x2="50" y2="250" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <line x1="50" y1="250" x2="800" y2="250" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" fill="rgba(255,255,255,0.5)">
                  <text x="42" y="253" textAnchor="end">0</text>
                  <text x="42" y="197" textAnchor="end">30</text>
                  <text x="42" y="141" textAnchor="end">60</text>
                  <text x="42" y="85"  textAnchor="end">90</text>
                  <text x="42" y="40"  textAnchor="end">120</text>
                  <text x="16" y="145" textAnchor="middle" transform="rotate(-90 16 145)">MGA premium ($bn)</text>
                </g>
                <path d="M50,168 L150,166 L250,163 L350,160 L440,158 L530,143 L620,113 L710,73 L710,250 L50,250 Z" fill="rgba(255,255,255,0.08)" />
                <polyline points="50,168 150,166 250,163 350,160 440,158 530,143 620,113 710,73" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.4" />
                <line x1="50" y1="160" x2="440" y2="160" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3 3" />
                <text x="150" y="150" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(255,255,255,0.5)" fontStyle="italic">flat $40&ndash;50bn band, 2014&ndash;2018</text>
                <circle cx="620" cy="113" r="4" fill="rgba(255,255,255,0.9)" />
                <text x="620" y="100" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="rgba(255,255,255,0.95)">$92bn</text>
                <circle cx="710" cy="73" r="5" fill="#E63946" />
                <text x="722" y="66" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="#fca5a5">$109bn</text>
                <polyline points="50,178 150,196 250,214 350,196 440,178 530,110 620,50 710,90 800,235" fill="none" stroke="#E63946" strokeWidth="2.2" />
                <circle cx="620" cy="50" r="4" fill="#E63946" />
                <text x="620" y="38" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="#fca5a5">peak +22% (late 2020)</text>
                <circle cx="800" cy="235" r="4" fill="#E63946" />
                <text x="780" y="252" textAnchor="end" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="#fca5a5">-5% Q1&rsquo;26 (7th cut)</text>
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(255,255,255,0.5)">
                  <text x="50"  y="270" textAnchor="middle">2014</text>
                  <text x="350" y="270" textAnchor="middle">2018</text>
                  <text x="440" y="270" textAnchor="middle">2020</text>
                  <text x="620" y="270" textAnchor="middle">2023</text>
                  <text x="800" y="270" textAnchor="middle">2026</text>
                </g>
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11.5">
                  <rect x="50" y="298" width="22" height="3" fill="rgba(255,255,255,0.75)" />
                  <text x="80" y="302" fill="rgba(255,255,255,0.85)">US MGA premium (statutory basis)</text>
                  <rect x="380" y="298" width="22" height="3" fill="#E63946" />
                  <text x="410" y="302" fill="#fca5a5">Global commercial rate change (YoY)</text>
                </g>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>US MGA premium against the commercial pricing cycle, 2014&ndash;2026.</strong> Premium sat flat through the last soft market and surged only in the hard market from 2021. The sector has no soft-market precedent at its current scale.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "6px", fontStyle: "italic" }}>Source: Aon (2014&ndash;2020 band and cumulative growth); AM Best DUAE segment report ($92.3bn 2024, $108.7bn 2025); Marsh Global Insurance Market Index (pricing shape; intermediate points indicative of the composite cycle).</p>
            </div>
          </div>

          <p style={{ opacity: 0.92 }}>Two facts qualify the resilience story. First, underwriting quality already deteriorated during and after the last soft phase. MGA loss and loss-adjustment ratios ran around eight points above the wider P&amp;C industry across 2017 to 2022, having been roughly five points better in 2014 to 2016. The channel&rsquo;s aggregate performance edge eroded as it grew. Second, capacity has proven fragile even in a hard market. The 2023 Vesttoo collateral fraud and the Trisura write-down forced fronting carriers such as Clear Blue to replace more than half of affected reinsurance panels at short notice, showing how quickly the balance sheet beneath an MGA can move.</p>

          {/* EXHIBIT 2 - Three cycles table */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 2 &mdash; MGA market indicators across three soft-market periods</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <table style={{ borderCollapse: "collapse", width: "100%", minWidth: "560px" }}>
                <thead>
                  <tr>
                    <th style={tblTh}>Indicator</th>
                    <th style={tblTh}>2007&ndash;2010</th>
                    <th style={tblTh}>2014&ndash;2018</th>
                    <th style={{ ...tblTh, color: "#fca5a5" }}>2025&ndash;2026</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tblTdHead}>Commercial pricing</td>
                    <td style={tblTd}>Softening after 2006 peak; rates falling into the financial crisis</td>
                    <td style={tblTd}>Prolonged soft market; alternative capital and excess capacity</td>
                    <td style={tblTd}>Softening; 7 consecutive quarterly declines, -5% in Q1 2026</td>
                  </tr>
                  <tr>
                    <td style={tblTdHead}>US MGA premium</td>
                    <td style={tblTd}>Small and fragmented; pre-fronting, pre-platform</td>
                    <td style={tblTd}>Flat $40&ndash;50bn band</td>
                    <td style={tblTd}>~$109bn (2025), +17.8%; fifth straight year of double-digit growth</td>
                  </tr>
                  <tr>
                    <td style={tblTdHead}>Formation &amp; M&amp;A</td>
                    <td style={tblTd}>Limited; crisis suppressed deal flow</td>
                    <td style={tblTd}>Steady coverholder growth; PE interest building late</td>
                    <td style={tblTd}>Formation continuing into 2026; M&amp;A active; discipline tightening</td>
                  </tr>
                  <tr>
                    <td style={tblTdHead}>Valuations</td>
                    <td style={tblTd}>Low; pre-PE-platform era</td>
                    <td style={tblTd}>Rising toward double-digit EBITDA as PE entered</td>
                    <td style={tblTd}>Peak; platform ~18x EBITDA, bifurcating by capacity model</td>
                  </tr>
                  <tr>
                    <td style={{ ...tblTdHead, borderBottom: "none" }}>Capacity</td>
                    <td style={{ ...tblTd, borderBottom: "none" }}>Contracted post-crisis, then recovered</td>
                    <td style={{ ...tblTd, borderBottom: "none" }}>Abundant; alternative-capital inflow</td>
                    <td style={{ ...tblTd, borderBottom: "none" }}>Abundant but selective; constraints partner-specific</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "12px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>MGA market indicators across three soft-market periods.</strong> 2007&ndash;2010 entries are directional; MGA-specific disclosure for that period is thin and the modern fronting and PE structure barely existed.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "6px", fontStyle: "italic" }}>Source: Marsh, Aon, AM Best, Conning, S&amp;P Global.</p>
            </div>
          </div>

          <p style={{ opacity: 0.92 }}>The historical read is therefore mixed, and should be stated as such. There is no clean precedent of soft pricing destroying a large MGA population, because no such population existed in the last soft market. What the record does show is that MGA outperformance is cyclical, that capacity is contingent, and that the weakest operators lose their performance advantage first. That is enough to make the belief credible for a subset of the market without validating it as a general rule.</p>

          {/* SECTION 02 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>02 · The Failure Mechanism</span>
            What Actually Kills an MGA in a Soft Market
          </h2>

          <p style={{ opacity: 0.92 }}>Rate softening does not kill MGAs directly. It works through a chain. Falling rates compress the premium base on which an MGA earns commission and, more importantly, erode the loss-ratio margin that funds profit commission and justifies a carrier&rsquo;s capital. As results drift, capacity providers reprice or withdraw authority. An MGA that depends on a single carrier then loses its balance sheet with no ready replacement. A subscale business cannot carry its fixed cost or the J-curve of a new underwriting team, which runs to one to two million pounds per team. The trigger is price. The cause of failure is the interaction of price with capacity dependence, weak differentiation and lack of scale.</p>

          <div style={{ ...cardStyle, padding: "20px 24px" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#fca5a5" }}>Ranking the drivers on the available evidence</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "12px" }}>
                <span className="mono-label text-[9px]" style={{ background: "rgba(230,57,70,0.2)", color: "#fca5a5", padding: "3px 9px", borderRadius: "999px", marginRight: "10px" }}>Strong</span>
                <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>Capacity withdrawal, single-carrier dependence, loss-ratio deterioration, weak underwriting differentiation and lack of scale. These are the factors capacity providers now screen on, and constraints are increasingly partner-specific rather than market-wide.</span>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "12px" }}>
                <span className="mono-label text-[9px]" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)", padding: "3px 9px", borderRadius: "999px", marginRight: "10px" }}>Moderate</span>
                <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>Rate compression in isolation (a trigger, not a root cause), technology disadvantage (a widening divide between leaders and laggards, rarely fatal alone), and regulatory change (rising Lloyd&rsquo;s, FCA and PRA expectations that lift the fixed cost of compliance for smaller MGAs).</span>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "12px" }}>
                <span className="mono-label text-[9px]" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", padding: "3px 9px", borderRadius: "999px", marginRight: "10px" }}>Weak</span>
                <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>Distribution weakness as an independent cause. Most failing MGAs lose capacity before they lose distribution.</span>
              </div>
            </div>
          </div>

          <p className="font-display text-white text-lg mt-6" style={{ opacity: 0.95 }}>The fatal variable is not the market. It is concentration.</p>

          <p style={{ opacity: 0.92 }}>An MGA with four to five carrier relationships capable of leading its class can survive a capacity exit. One with a single binder cannot. This is why the belief is most accurate at the level of the individual business and least accurate at the level of the model.</p>

          {/* SECTION 03 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>03 · Investors and Valuations</span>
            How Capital Behaves When the Cycle Turns
          </h2>

          <p style={{ opacity: 0.92 }}>Investor behaviour through past soft markets has been consistent. Soft conditions have been treated as consolidation opportunities, not exit signals. Private equity now owns more than 30% of US MGA entities, and platform MGAs that traded at around ten times EBITDA five years ago have reached about eighteen times, with MGUs at the top of a nine-to-eighteen-times range. The asset-light model, 20% to 30% EBITDA margins and roughly 90% renewal retention explain the premium. Consolidation is accelerating, and the public market has reopened as an exit, with the Accelerant and Slide listings in 2025 repricing the sector upward.</p>

          <p style={{ opacity: 0.92 }}>Two features of this cycle change the risk. First, valuations have bifurcated. Multi-capacity, data-rich platforms hold twelve to sixteen times EBITDA, while single-capacity businesses, including much of the cyber cohort built on one partner during 2021 to 2023, now clear six to nine times. The market is already pricing the vulnerability at the heart of the belief. Second, and more dangerous, the leverage and entry multiples were set on hard-market economics. An MGA acquired at eighteen times peak EBITDA, carrying acquisition debt, does not need to fail operationally to become a problem. A soft market that compresses its earnings converts the multiple into a refinancing and valuation issue for its sponsor. This is the genuinely existential mechanism, and it is financial rather than underwriting.</p>

          {/* EXHIBIT 3 - Valuation bars */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 3 &mdash; MGA valuations have bifurcated as consolidation accelerated</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 860 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "560px" }}>
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">
                  <text x="0" y="24">EBITDA multiples (x)</text>
                </g>
                <line x1="0" y1="230" x2="470" y2="230" stroke="rgba(255,255,255,0.2)" />
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" fill="rgba(255,255,255,0.5)" textAnchor="middle">
                  <text x="0" y="248">0</text><text x="110" y="248">5</text><text x="200" y="248">10</text><text x="290" y="248">15</text><text x="380" y="248">20</text><text x="470" y="248">25</text>
                </g>
                {/* Single-capacity - highlighted red as the vulnerable segment */}
                <text x="0" y="50" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="#fca5a5">Single-capacity / undifferentiated</text>
                <rect x="128" y="58" width="54" height="22" fill="#E63946" />
                <text x="188" y="74" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="#fca5a5">6&ndash;9x</text>
                {/* Lower mid-market */}
                <text x="0" y="98" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fill="rgba(255,255,255,0.75)">Lower mid-market ($2&ndash;10m rev)</text>
                <rect x="200" y="104" width="72" height="22" fill="rgba(255,255,255,0.3)" />
                <text x="278" y="120" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.75)">10&ndash;14x</text>
                {/* Multi-capacity */}
                <text x="0" y="146" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fill="rgba(255,255,255,0.75)">Multi-capacity, data-enabled</text>
                <rect x="236" y="152" width="72" height="22" fill="rgba(255,255,255,0.45)" />
                <text x="314" y="168" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.85)">12&ndash;16x</text>
                {/* Platform */}
                <text x="0" y="194" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.9)">Platform scale (peak ~18x)</text>
                <rect x="290" y="200" width="126" height="22" fill="rgba(255,255,255,0.75)" />
                <text x="422" y="216" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="rgba(255,255,255,0.95)">15&ndash;22x</text>
                <line x1="510" y1="30" x2="510" y2="256" stroke="rgba(255,255,255,0.15)" />
                <text x="530" y="24" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">Recent deals &amp; listings</text>
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.65)">
                  <text x="530" y="56"><tspan fontWeight="600" fill="rgba(255,255,255,0.9)">2023&ndash;24 </tspan>Skyward, Bowhead IPOs reopen exit</text>
                  <text x="530" y="84"><tspan fontWeight="600" fill="rgba(255,255,255,0.9)">Early 25 </tspan>NSM US commercial &rarr; New Mountain</text>
                  <text x="530" y="112"><tspan fontWeight="600" fill="rgba(255,255,255,0.9)">Jun 25 </tspan>Slide IPO, ~$2.6bn valuation</text>
                  <text x="530" y="140"><tspan fontWeight="600" fill="rgba(255,255,255,0.9)">Jul 25 </tspan>Accelerant IPO, ~$6.4bn; +35% day one</text>
                  <text x="530" y="168"><tspan fontWeight="600" fill="rgba(255,255,255,0.9)">2025&ndash;26 </tspan>Sponsors buy anchor books and build</text>
                  <text x="530" y="196"><tspan fontWeight="600" fill="rgba(255,255,255,0.9)">2026 </tspan>Valuation discipline tightening</text>
                </g>
                <text x="530" y="236" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600" fill="#fca5a5">The gap between quadrants is the risk in question.</text>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>MGA valuations have bifurcated as consolidation accelerated.</strong> The capital is still there. Its terms are not what they were.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "6px", fontStyle: "italic" }}>Source: Sica Fletcher and PitchBook (multiple ranges); Deloitte (PE ownership share); PwC (deal detail and primary transaction reporting).</p>
            </div>
          </div>

          <p style={{ opacity: 0.92 }}>Buyers have started to discriminate accordingly. Sponsors are acquiring smaller anchor portfolios and building around them rather than paying full multiples for established platforms, and advisers report tightening valuation discipline as softening rates make buyers more cautious.</p>

          {/* SECTION 04 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>04 · Vulnerability</span>
            Which Archetypes Are Exposed
          </h2>

          <p style={{ opacity: 0.92 }}>Exposure maps onto two axes: underwriting differentiation, and capacity strength (the breadth and durability of carrier relationships, together with any proprietary distribution). The vulnerable cohort is specific. It is the undifferentiated generalists, single-capacity binders and subscale businesses below roughly $25m to $50m of GWP, the threshold for a credible standalone franchise. These are the operators whose growth tracked the hard-market wave rather than any durable edge, and they are the businesses the industry belief describes even when it is voiced as a claim about the whole model. The resilient cohort is equally definable: specialist underwriting franchises, data-enabled and embedded-distribution models, multi-capacity platforms, and businesses that have integrated vertically into their own risk, such as MGAs that have taken Lloyd&rsquo;s syndicate participations to share in results.</p>

          {/* EXHIBIT 4 - Vulnerability matrix */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 4 &mdash; MGA vulnerability matrix</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 700 470" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "520px" }}>
                <rect x="110" y="40" width="245" height="180" fill="rgba(255,255,255,0.05)" />
                <rect x="355" y="40" width="245" height="180" fill="rgba(255,255,255,0.1)" />
                <rect x="110" y="220" width="245" height="180" fill="rgba(230,57,70,0.16)" />
                <rect x="355" y="220" width="245" height="180" fill="rgba(255,255,255,0.05)" />
                <line x1="110" y1="40" x2="110" y2="400" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <line x1="110" y1="400" x2="600" y2="400" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <line x1="355" y1="40" x2="355" y2="400" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
                <line x1="110" y1="220" x2="600" y2="220" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.85)">
                  <text x="355" y="428" textAnchor="middle">Underwriting differentiation &rarr;</text>
                  <text x="55" y="220" textAnchor="middle" transform="rotate(-90 55 220)">Capacity &amp; distribution &rarr;</text>
                </g>
                <g fontFamily="Inter, system-ui, sans-serif" textAnchor="middle">
                  <text x="232" y="62" fontSize="11.5" fontWeight="700" fill="rgba(255,255,255,0.65)">MODERATE</text>
                  <text x="232" y="122" fontSize="12" fill="rgba(255,255,255,0.85)">Strong panel,</text>
                  <text x="232" y="140" fontSize="12" fill="rgba(255,255,255,0.85)">thin differentiation;</text>
                  <text x="232" y="158" fontSize="12" fill="rgba(255,255,255,0.85)">loss ratios drifting</text>

                  <text x="477" y="62" fontSize="11.5" fontWeight="700" fill="rgba(255,255,255,0.95)">RESILIENT</text>
                  <text x="477" y="116" fontSize="12" fill="rgba(255,255,255,0.85)">Specialist franchises,</text>
                  <text x="477" y="134" fontSize="12" fill="rgba(255,255,255,0.85)">data-enabled, embedded,</text>
                  <text x="477" y="152" fontSize="12" fill="rgba(255,255,255,0.85)">multi-capacity, integrated</text>

                  <text x="232" y="242" fontSize="11.5" fontWeight="700" fill="#fca5a5">HIGHLY VULNERABLE</text>
                  <text x="232" y="298" fontSize="12" fill="rgba(255,255,255,0.9)">Undifferentiated generalists,</text>
                  <text x="232" y="316" fontSize="12" fill="rgba(255,255,255,0.9)">single-capacity binders,</text>
                  <text x="232" y="334" fontSize="12" fill="rgba(255,255,255,0.9)">subscale (&lt;$25&ndash;50m GWP)</text>

                  <text x="477" y="242" fontSize="11.5" fontWeight="700" fill="rgba(255,255,255,0.65)">MODERATE</text>
                  <text x="477" y="298" fontSize="12" fill="rgba(255,255,255,0.85)">Genuine niche but</text>
                  <text x="477" y="316" fontSize="12" fill="rgba(255,255,255,0.85)">narrow capacity panel;</text>
                  <text x="477" y="334" fontSize="12" fill="rgba(255,255,255,0.85)">single-partner concentration</text>
                </g>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>MGA vulnerability matrix.</strong> The consolidation logic follows directly: the resilient quadrant acquires talent and portfolios from the vulnerable one, separating high-quality underwriting franchises from distribution-led businesses that only worked in a hard market.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "6px", fontStyle: "italic" }}>Source: Eudaimon Consulting analysis.</p>
            </div>
          </div>

          {/* SECTION 05 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>05 · This Cycle</span>
            What Is Structurally Different
          </h2>

          <p style={{ opacity: 0.92 }}>Separating structural from cyclical change is essential. The cyclical elements are familiar: abundant capacity, falling rates, easing terms. The structural elements are new, and they cut in both directions.</p>

          <p style={{ opacity: 0.92 }}>On the supportive side, the decoupling of underwriting from the carrier balance sheet, equity-aligned incentives, modern technology and embedded distribution have partly uncoupled MGA growth from the rate cycle. This is why the sector kept expanding into the softening of 2025 and 2026, and why formation continues, with several new MGAs and Lloyd&rsquo;s syndicates slated to launch in 2026. AI-enabled underwriting and algorithmic pricing widen the gap between operators that can hold loss-ratio discipline as rates fall and those that cannot. Lloyd&rsquo;s oversight reforms and enhanced performance management raise the floor on governance, which protects the channel&rsquo;s credibility while raising the fixed cost of participation for the smallest MGAs.</p>

          <p style={{ opacity: 0.92 }}>On the dangerous side, the same private capital that fuelled the supercycle has concentrated leverage and peak-multiple entry across the sector. That is a financial fragility which did not exist in 2014 to 2018, when MGAs were largely founder-owned and lightly capitalised.</p>

          <p className="font-display text-white text-lg mt-6" style={{ opacity: 0.95 }}>The structural changes have made strong MGAs stronger and made weak ones more exposed than their predecessors.</p>

          <p style={{ opacity: 0.92 }}>This is precisely why the current cycle is more threatening to the vulnerable cohort than any previous soft market, and less threatening to the model as a whole. The two halves of the industry belief are both visible in the same data, attached to different businesses.</p>

          {/* ASSESSMENT */}
          <div style={{ ...cardStyle, borderLeft: "4px solid #E63946", padding: "28px 32px" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#fca5a5" }}>Assessment · Where the Evidence Lands</p>
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.92 }}><strong>1. Historical evidence of existential risk:</strong> limited and mixed. No precedent exists of soft pricing destroying MGAs at scale, but the sector has never faced a soft market at this size, and its performance edge has already been shown to erode.</p>
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.92 }}><strong>2. Models that have struggled:</strong> undifferentiated generalists, single-capacity and subscale MGAs whose economics depend on favourable conditions.</p>
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.92 }}><strong>3. Models that gained share:</strong> specialist underwriting franchises, data-enabled, embedded and multi-capacity platforms, and vertically integrated businesses.</p>
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.92 }}><strong>4. More or less threatening than prior cycles:</strong> more threatening to the vulnerable cohort, because of PE leverage and peak-multiple entry; less threatening to the model in aggregate, which is larger, better capitalised and more strategically embedded than before.</p>
            <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.92 }}><strong>5. Does the evidence support the belief:</strong> only in qualified form. As a general proposition that a soft market is existential for MGAs as a distribution model, the evidence contradicts it. As a claim about a definable cohort of undifferentiated, single-capacity and subscale businesses, the evidence strongly supports it, through capacity withdrawal and financial fragility.</p>
          </div>

          {/* EXHIBIT 5 - Scorecard */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 5 &mdash; Evidence scorecard: strength of support for the belief</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <table style={{ borderCollapse: "collapse", width: "100%", minWidth: "560px" }}>
                <thead>
                  <tr>
                    <th style={tblTh}>Proposition</th>
                    <th style={tblTh}>Evidence</th>
                    <th style={tblTh}>Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tblTdHead}>Soft markets destroy MGAs at large</td>
                    <td style={{ ...tblTd, color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>Weak</td>
                    <td style={tblTd}>No precedent at scale; last soft market saw flat, not collapsing, premium</td>
                  </tr>
                  <tr>
                    <td style={tblTdHead}>Rate compression as direct cause</td>
                    <td style={{ ...tblTd, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>Moderate</td>
                    <td style={tblTd}>Trigger, not root cause; acts through margin and capacity</td>
                  </tr>
                  <tr>
                    <td style={tblTdHead}>Capacity withdrawal / single-carrier dependence</td>
                    <td style={{ ...tblTd, color: "#fca5a5", fontWeight: 700 }}>Strong</td>
                    <td style={tblTd}>Providers now screen on this; constraints partner-specific</td>
                  </tr>
                  <tr>
                    <td style={tblTdHead}>Subscale and weak differentiation</td>
                    <td style={{ ...tblTd, color: "#fca5a5", fontWeight: 700 }}>Strong</td>
                    <td style={tblTd}>Fixed cost and J-curve; loss-ratio drift above industry</td>
                  </tr>
                  <tr>
                    <td style={tblTdHead}>PE leverage / peak-multiple refinancing risk</td>
                    <td style={{ ...tblTd, color: "#fca5a5", fontWeight: 700 }}>Strong</td>
                    <td style={tblTd}>New this cycle; 18x peak entry, acquisition debt</td>
                  </tr>
                  <tr>
                    <td style={tblTdHead}>Consolidation and valuation bifurcation</td>
                    <td style={{ ...tblTd, color: "#fca5a5", fontWeight: 700 }}>Strong</td>
                    <td style={tblTd}>6&ndash;9x vs 12&ndash;16x already priced by the market</td>
                  </tr>
                  <tr>
                    <td style={tblTdHead}>Belief for a defined cohort</td>
                    <td style={{ ...tblTd, color: "#fca5a5", fontWeight: 700 }}>Supported</td>
                    <td style={tblTd}>Definable cohort faces genuine existential risk</td>
                  </tr>
                  <tr>
                    <td style={{ ...tblTdHead, borderBottom: "none" }}>Belief as a general rule (the whole model)</td>
                    <td style={{ ...tblTd, borderBottom: "none", color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>Contradicted</td>
                    <td style={{ ...tblTd, borderBottom: "none" }}>Model in aggregate is resilient and still forming</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p style={{ opacity: 0.92 }}>The belief is right about a tail and wrong about the whole. The soft market will not end the MGA model. It will end the MGAs that were only ever a hard-market trade, and it will transfer their talent and their books to the platforms built to hold underwriting discipline through the cycle.</p>

          {/* SOURCES */}
          <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="mono-label text-white/40 text-[9px] mb-3">Sources</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, fontStyle: "italic" }}>
              Marsh, <em>Global Insurance Market Index</em> (Q1 2026) &middot; AM Best, DUAE market segment report (2025) &middot; Conning, <em>Managing General Agents: Built for What&rsquo;s Next</em> (2025) &middot; Aon MGA and carrier analysis &middot; S&amp;P Global Ratings (2025) &middot; Deloitte &middot; PwC, <em>Global M&amp;A Trends in Financial Services</em> (2026 mid-year) &middot; Sica Fletcher and PitchBook transaction commentary &middot; industry commentary on delegated authority through 2025 and 2026 (Insurance Insider, The Insurer, TMPAA mid-year meeting) &middot; DA Strategy &middot; KBRA and reporting on the 2023 Vesttoo and Trisura events. Figures for the 2007&ndash;2010 cycle are directional given limited MGA-specific disclosure for that period.
            </p>
          </div>

          {/* DISCLAIMER */}
          <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", lineHeight: 1.6, fontStyle: "italic" }}>This note is provided for general information purposes only and does not constitute legal, regulatory, actuarial, financial or investment advice. It has been prepared using publicly available sources believed to be reliable at the time of writing; Eudaimon Consulting makes no representation as to their completeness or accuracy and accepts no liability for decisions made in reliance on this content. &copy; 2026 Eudaimon Consulting. All rights reserved. No part of this publication may be reproduced, distributed or transmitted without the prior written permission of Eudaimon Consulting.</p>
          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/50 text-[9px] mb-2">Navigating delegated authority strategy through the cycle?</p>
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
