import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The NAIC Breach and the Accumulation Problem: What Cyber Reinsurance Is Not Pricing — Eudaimon Consulting",
  description: "Cyber reinsurance rates fell 32% at January 2026 renewals. Last month, the NAIC breach disrupted the capital infrastructure of the US insurance industry. That gap should be getting more attention.",
  openGraph: {
    title: "The NAIC Breach and the Accumulation Problem: What Cyber Reinsurance Is Not Pricing",
    description: "Cyber reinsurance rates fell 32% at January 2026 renewals. The NAIC breach showed that concentration risk now runs through shared software vendors and regulatory infrastructure. That gap should be getting more attention.",
    url: "https://www.eudaimonconsulting.com/insights/cyber-accumulation-naic-breach",
    type: "article",
    images: [{ url: "/assets/logo.jpg" }],
  },
  alternates: { canonical: "https://www.eudaimonconsulting.com/insights/cyber-accumulation-naic-breach" },
};

import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function CyberAccumulationArticle() {

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
            <span className="mono-label text-[9px] px-3 py-1 rounded-full" style={{ background: "rgba(230,57,70,0.2)", color: "#fca5a5" }}>Cyber &amp; Technology Risk</span>
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-white/30 text-white">Eudaimon Insight</span>
            <div className="flex items-center gap-2 text-white/60"><Clock size={11} /><span className="mono-label text-[9px]">9 min read</span></div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            The NAIC Breach and the Accumulation Problem: What Cyber Reinsurance Is Not Pricing
          </h1>
          <p className="text-white text-xl leading-relaxed border-l-2 border-[#E63946] pl-5">
            What the Five Eyes warning and the NAIC breach mean for cyber insurance, risk transfer and resilience economics
          </p>
          <div style={{ ...cardStyle, marginTop: "32px", padding: "20px 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{ label: "Published", val: "4 July 2026" }, { label: "Series", val: "Cyber & Technology Risk" }, { label: "Audience", val: "Insurance C-Suite · Underwriting Committees · Risk Leaders" }, { label: "Read time", val: "9 minutes" }].map((m) => (
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
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.9 }}>Cyber reinsurance rates fell by up to 32 per cent at the January 2026 renewals, precisely as evidence from the Five Eyes cyber agencies and Verizon's 2026 Data Breach Investigations Report showed the interval between vulnerability disclosure and exploitation compressing faster than most organisations patch. That combination should concern underwriting committees, reinsurance panels and boards more than any single AI-enabled attack, because it is evidence of a pricing-adequacy mismatch rather than a market correction earned by genuinely improving risk.</p>
            <p className="text-white text-sm leading-relaxed mb-3" style={{ opacity: 0.9 }}>This note uses the June 2026 breach at the National Association of Insurance Commissioners, which briefly interrupted the data feeds underpinning US insurer capital designations, as a live case study in how concentration risk now runs through shared software vendors and regulatory infrastructure, not only through cloud providers. It sets out what has actually changed in attacker and defender capability, where today's cyber insurance assumptions are least reliable, and what both imply for risk transfer structures and the shape of the cyber insurance product itself.</p>
            <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9 }}>The conclusion for boards and underwriting committees: AI has not created a new class of uninsurable risk. It has widened the gap between how fast loss-producing conditions change and how fast pricing and accumulation models are updated. Closing that gap is now the central underwriting task in cyber insurance, not a peripheral one.</p>
          </div>

          {/* SECTION 01 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>01 · Introduction</span>
            Introduction
          </h2>

          <p style={{ opacity: 0.9 }}>In June 2026 alone, the Five Eyes cyber agencies issued their bluntest joint warning to date on artificial intelligence and cyber risk, and a zero-day vulnerability in a widely used enterprise system exposed the regulatory infrastructure that underpins how US insurers hold capital against their own investments. Read against a reinsurance market that had spent the first half of the year cutting cyber catastrophe rates by double digits, these are not three unrelated stories. They describe a mismatch between how fast the conditions that generate cyber losses are changing and how fast the market that prices those losses is adjusting. This note examines what has actually changed in attacker and defender capability, why that change matters more for correlation and accumulation than for any single claim, what the NAIC breach reveals about concentration risk inside the industry's own infrastructure, and what all of this implies for how cyber risk transfer and cyber insurance products need to evolve.</p>

          <p className="font-display text-white text-lg mb-2 mt-6">AI Is Changing Cyber Risk Economics</p>
          <p style={{ opacity: 0.9 }}>The clearest evidence on how AI is actually being used in attacks comes from Verizon's 2026 Data Breach Investigations Report, produced this year in direct collaboration with Anthropic across several hundred threat actors sanctioned for policy violations over the preceding twelve months. Its findings, set out below, are more measured than the public debate around them.</p>

          {/* EXHIBIT 1 - Timeline SVG */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 1 — Evolution of dominant cyber risk drivers, 2020–2026</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 860 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "560px" }}>
                <line x1="40" y1="210" x2="820" y2="210" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(255,255,255,0.45)">
                  <text x="70"  y="228" textAnchor="middle">2020</text>
                  <text x="200" y="228" textAnchor="middle">2021</text>
                  <text x="330" y="228" textAnchor="middle">2022</text>
                  <text x="460" y="228" textAnchor="middle">2023</text>
                  <text x="590" y="228" textAnchor="middle">2024</text>
                  <text x="720" y="228" textAnchor="middle">2025</text>
                  <text x="820" y="228" textAnchor="middle">2026</text>
                </g>
                <g stroke="rgba(255,255,255,0.2)" strokeWidth="1">
                  <line x1="70"  y1="210" x2="70"  y2="216" />
                  <line x1="200" y1="210" x2="200" y2="216" />
                  <line x1="330" y1="210" x2="330" y2="216" />
                  <line x1="460" y1="210" x2="460" y2="216" />
                  <line x1="590" y1="210" x2="590" y2="216" />
                  <line x1="720" y1="210" x2="720" y2="216" />
                  <line x1="820" y1="210" x2="820" y2="216" />
                </g>
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">
                  <circle cx="70"  cy="210" r="5" fill="#E63946" />
                  <text x="70"  y="182" textAnchor="middle">Ransomware-as-</text>
                  <text x="70"  y="196" textAnchor="middle">a-service scales</text>

                  <circle cx="200" cy="210" r="5" fill="#E63946" />
                  <text x="200" y="108" textAnchor="middle">Software supply</text>
                  <text x="200" y="122" textAnchor="middle">chain shock</text>
                  <line x1="200" y1="128" x2="200" y2="205" stroke="rgba(255,255,255,0.15)" />

                  <circle cx="330" cy="210" r="5" fill="#E63946" />
                  <text x="330" y="182" textAnchor="middle">Cloud</text>
                  <text x="330" y="196" textAnchor="middle">misconfiguration</text>

                  <circle cx="460" cy="210" r="5" fill="#E63946" />
                  <text x="460" y="108" textAnchor="middle">Credential abuse</text>
                  <text x="460" y="122" textAnchor="middle">peaks</text>
                  <line x1="460" y1="128" x2="460" y2="205" stroke="rgba(255,255,255,0.15)" />

                  <circle cx="590" cy="210" r="5" fill="#E63946" />
                  <text x="590" y="182" textAnchor="middle">GenAI-assisted</text>
                  <text x="590" y="196" textAnchor="middle">phishing scales</text>

                  <circle cx="720" cy="210" r="5" fill="#E63946" />
                  <text x="720" y="108" textAnchor="middle">Vulnerability</text>
                  <text x="720" y="122" textAnchor="middle">exploitation leads</text>
                  <line x1="720" y1="128" x2="720" y2="205" stroke="rgba(255,255,255,0.15)" />

                  <circle cx="820" cy="210" r="7" fill="rgba(255,255,255,0.9)" />
                  <text x="797" y="182" textAnchor="end" fontWeight="600" fill="rgba(255,255,255,0.95)">Systemic third-party</text>
                  <text x="797" y="196" textAnchor="end" fontWeight="600" fill="rgba(255,255,255,0.95)">&amp; infrastructure risk</text>
                </g>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>Evolution of dominant cyber risk drivers, 2020–2026.</strong> The character of the leading loss driver has shifted from single-organisation ransomware and software supply chain events toward correlated, interdependency-driven exposure spanning cloud, identity and third-party infrastructure.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "6px", fontStyle: "italic" }}>Source: Eudaimon Consulting analysis, synthesised from Verizon DBIR (2021–2026 editions), Gallagher Re and Lloyd's market commentary.</p>
            </div>
          </div>

          {/* EXHIBIT 2 - DBIR Bars */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 2 — Verizon 2026 Data Breach Investigations Report, selected findings</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "480px" }}>
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(255,255,255,0.5)">
                  <rect x="520" y="8" width="12" height="12" fill="rgba(255,255,255,0.25)" />
                  <text x="538" y="18">2024–25 dataset</text>
                  <rect x="650" y="8" width="12" height="12" fill="#E63946" />
                  <text x="668" y="18">2025–26 dataset</text>
                </g>
                {/* Row 1 */}
                <text x="0" y="50" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">Vulnerability exploitation as initial access vector</text>
                <rect x="0" y="58" width="240" height="13" fill="rgba(255,255,255,0.2)" />
                <text x="248" y="68" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.5)">20%</text>
                <rect x="0" y="74" width="372" height="13" fill="#E63946" />
                <text x="380" y="84" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="rgba(255,255,255,0.9)">31%</text>
                {/* Row 2 */}
                <text x="0" y="120" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">Median days to remediate a known exploited vulnerability</text>
                <rect x="0" y="128" width="307" height="13" fill="rgba(255,255,255,0.2)" />
                <text x="315" y="138" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.5)">32 days</text>
                <rect x="0" y="144" width="413" height="13" fill="#E63946" />
                <text x="421" y="154" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="rgba(255,255,255,0.9)">43 days</text>
                {/* Row 3 */}
                <text x="0" y="190" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">Breaches involving a third party</text>
                <rect x="0" y="198" width="418" height="13" fill="#E63946" />
                <text x="426" y="208" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="rgba(255,255,255,0.9)">48% of breaches — up 60% year on year</text>
                {/* Row 4 */}
                <text x="0" y="244" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">Breaches involving ransomware</text>
                <rect x="0" y="252" width="383" height="13" fill="rgba(255,255,255,0.2)" />
                <text x="391" y="262" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.5)">44%</text>
                <rect x="0" y="268" width="418" height="13" fill="#E63946" />
                <text x="426" y="278" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="600" fill="rgba(255,255,255,0.9)">48%</text>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>Verizon 2026 Data Breach Investigations Report, selected findings.</strong> Every metric that drives cyber claim frequency moved in the same direction: attackers are exploiting known weaknesses faster than organisations are closing them.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "6px", fontStyle: "italic" }}>Source: Verizon, 2026 Data Breach Investigations Report (19th edition; incidents November 2024–October 2025).</p>
            </div>
          </div>

          <p style={{ opacity: 0.9 }}>The pattern is consistent across every metric, and the conclusion it supports is narrower than the public debate about AI and cyber risk suggests. AI is currently a scaling tool rather than an inventing tool: the DBIR's own analysis of sanctioned threat actors, conducted with Anthropic, found fewer than three per cent of observed AI-assisted techniques were genuinely novel, with the heaviest concentration, 44 per cent, applied to phishing that attackers already knew how to run. What AI has proven to do is widen the gap between attacker speed and defender speed shown above, and it is starting to create a parallel exposure inside organisations in its own right: IBM's 2025 Cost of a Data Breach research found that 97 per cent of breaches involving an AI model or application occurred where basic access controls were absent, and unsanctioned employee use of AI added USD 670,000 to the average cost of an incident. None of this describes a new category of attack. It describes a widening gap between how fast loss conditions change and how fast organisations, and the policies written against their risk, catch up.</p>

          {/* SECTION 02 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>02 · The Warning</span>
            What the NCSC Report Gets Right
          </h2>

          <p style={{ opacity: 0.9 }}>On 22 June 2026, the cyber agencies of the Five Eyes nations, led jointly by the UK's National Cyber Security Centre, the US Cybersecurity and Infrastructure Security Agency and the National Security Agency, published a joint statement titled <em>The AI Shift in Cyber Risk: Why Leaders Must Act Now</em>. Its central claim is that frontier AI models are compressing the interval between vulnerability discovery and exploitation on a timeline the agencies describe as months rather than years, and that this makes cyber risk a leadership and governance matter rather than a purely technical one.</p>
          <p style={{ opacity: 0.9 }}>The statement is a policy document, not a loss model, and it should be read as one. It contains no claims data, no frequency or severity estimates, and no quantification of aggregate exposure. Its evidentiary weight sits elsewhere: in the seniority and coordination of its signatories, and in the fact that its core empirical claim, a shrinking patch window, is independently corroborated by the DBIR's measured 32-to-43-day shift described above. Where the NCSC statement adds genuine value for insurers is in its prescriptive detail. Its five recommended actions, reducing attack surface, accelerating patching, remediating legacy systems, tightening identity and access controls, and rehearsing incident response, map almost exactly onto the control variables that DBIR data shows actually drive breach frequency. That alignment is what makes the report useful to underwriting, even though it was not written for underwriters: it functions as an independently validated checklist of the risk factors that matter most in a compressed-timeline environment, rather than as a source of new statistical evidence in its own right.</p>
          <p style={{ opacity: 0.9 }}>The report's limitation, from an insurance perspective, is what it cannot tell a catastrophe modeller: how correlated the resulting losses will be across a portfolio. A shrinking patch window raises the frequency of exploitation at any single insured. Whether that translates into a manageable increase in attritional losses or into a correlated spike across many insureds simultaneously depends on how concentrated those insureds are around common software, common cloud infrastructure and common AI platforms. That is an accumulation question, and it is the one the NAIC incident, discussed below, answers more directly than any government advisory can.</p>

          {/* SECTION 03 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>03 · The Pricing Gap</span>
            Where Insurance Assumptions Become Less Reliable
          </h2>

          <p style={{ opacity: 0.9 }}>Cyber insurance has historically been priced on three working assumptions: that losses are largely idiosyncratic to the insured rather than correlated across a book; that frequency and severity trends move gradually enough for annual repricing to track them; and that third-party and vendor exposure is a secondary addition to primary risk rather than a primary driver of loss in its own right. Each of these is now under more strain than the current pricing cycle reflects.</p>
          <p style={{ opacity: 0.9 }}>The correlation assumption is the most exposed. Coalition's 2026 outlook argues that cyber risk is increasingly defined by hidden interdependencies rather than isolated breaches, pointing to the CrowdStrike and major cloud provider outages of the past two years as evidence that businesses without multi-cloud or multi-vendor strategies carry concentrated exposure that conventional per-insured underwriting does not price. The DBIR's 48 per cent third-party involvement figure, up 60 per cent year on year, supports the same conclusion from a different dataset: a growing share of loss events now originate outside the policyholder's own control environment, in vendors and platforms shared with many other insureds in the same book.</p>
          <p style={{ opacity: 0.9 }}>The gradual-trend assumption is challenged by the patch-gap mechanism described above. An annual underwriting cycle assumes that the risk picture at renewal resembles the risk picture twelve months earlier, adjusted incrementally. If AI is compressing exploit timelines within that twelve-month window, the risk a policy is priced against at inception can be materially stale by the time a claim is made, particularly for accounts with slow patch cadences that the underwriting questionnaire captured only as a point-in-time snapshot.</p>
          <p style={{ opacity: 0.9 }}>The third assumption, that vendor risk is secondary, is the one the market is currently pricing in the opposite direction to the evidence. Gallagher Re reported a 32 per cent risk-adjusted rate reduction in cyber aggregate excess-of-loss reinsurance at the January 2026 renewals, driven by reinsurance capital that has grown faster than insurers' demand for it, alongside a run of years with comparatively few very large insured cyber catastrophe losses. S&amp;P Global, looking at the same market from the primary side, forecasts primary premium growth of 15 to 20 per cent a year through 2026, driven by rising incident response and legal severity rather than frequency. The two views are not contradictory so much as evidence of a market in which abundant reinsurance capital is compressing the price of tail risk at the same time that the underlying severity of individual claims is rising. That is a classic precondition for tail risk being underpriced: capital is chasing yield in a benign-loss period, in a class where the least well understood risk, correlated third-party and infrastructure failure, sits furthest from the data that pricing models are built on.</p>

          {/* EXHIBIT 3 - Attack economics comparison table */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 3 — AI impact on attack economics</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "560px" }}>
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fill="rgba(255,255,255,0.9)" fontWeight="600">
                  <text x="0"   y="26">Dimension</text>
                  <text x="230" y="26">Pre-AI baseline</text>
                  <text x="565" y="26">AI-assisted, 2025–26</text>
                </g>
                <line x1="0" y1="38" x2="900" y2="38" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                {/* Row 1 */}
                <text x="0"   y="66" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">Attacker cost</text>
                <text x="230" y="66" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">Skilled labour, manual scripting</text>
                <text x="565" y="66" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">Automated, near-zero marginal cost</text>
                <line x1="0" y1="84" x2="900" y2="84" stroke="rgba(255,255,255,0.1)" />
                {/* Row 2 */}
                <text x="0"   y="112" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">Attacker speed</text>
                <text x="230" y="112" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">32-day median exploit window</text>
                <text x="565" y="105" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">43 days and rising —</text>
                <text x="565" y="122" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">a 34% slower patch response</text>
                <line x1="0" y1="140" x2="900" y2="140" stroke="rgba(255,255,255,0.1)" />
                {/* Row 3 */}
                <text x="0"   y="168" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">Attack scale</text>
                <text x="230" y="161" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">Individually crafted</text>
                <text x="230" y="178" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">phishing campaigns</text>
                <text x="565" y="161" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">15 techniques per actor on average,</text>
                <text x="565" y="178" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">some as many as 40–50</text>
                <line x1="0" y1="196" x2="900" y2="196" stroke="rgba(255,255,255,0.1)" />
                {/* Row 4 */}
                <text x="0"   y="224" fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600" fill="rgba(255,255,255,0.9)">Defender response</text>
                <text x="230" y="217" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">Manual detection, mean</text>
                <text x="230" y="234" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">breach lifecycle of 277+ days</text>
                <text x="565" y="217" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">AI-assisted detection cuts the</text>
                <text x="565" y="234" fontFamily="Inter, system-ui, sans-serif" fontSize="12"   fill="rgba(255,255,255,0.55)">lifecycle to 241 days</text>
                <line x1="0" y1="252" x2="900" y2="252" stroke="rgba(255,255,255,0.1)" />
                <text x="0" y="277" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.35)" fontStyle="italic">Net effect: attacker speed is compounding faster than defender speed, widening the exploitation window even where detection improves.</text>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>AI impact on attack economics.</strong> AI has cut cost and raised scale on the attacker side while also improving detection speed on the defender side. The net effect on loss frequency depends on which side of that race a given organisation sits.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "6px", fontStyle: "italic" }}>Source: Verizon 2026 DBIR; IBM/Ponemon 2025 Cost of a Data Breach Report.</p>
            </div>
          </div>

          {/* SECTION 04 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>04 · The Case Study</span>
            The NAIC Breach as a Warning Signal
          </h2>

          <p style={{ opacity: 0.9 }}>On 11 June 2026, the National Association of Insurance Commissioners identified unauthorised access to part of its environment, traced to a zero-day vulnerability in Oracle PeopleSoft, the enterprise software NAIC uses for internal financial reporting. The vulnerability was part of a broader campaign affecting multiple organisations, not an attack targeted specifically at NAIC. The intrusion was contained on detection, disclosed publicly on 18 June, and claimed by the threat actor group ShinyHunters, which initially asserted it had obtained 3.1 terabytes of data including insurer regulatory filings, statistical returns and rating agency files containing CUSIP and ISIN identifiers from Moody's, Fitch, S&amp;P, KBRA and AM Best. By 25 June the group had revised its own account downward, attributing its earlier overstatement to an analytical error compounded by what it described as an AI-generated misinterpretation of the underlying data. NAIC's own investigation, corroborated by AM Best, found that only already-public data had been compromised, with no employee, policyholder, producer or payment data accessed.</p>
          <p style={{ opacity: 0.9 }}>The operationally significant consequence was not the data exposure itself but its second-order effect. Moody's, S&amp;P and KBRA all suspended their regulatory data feeds to NAIC, and NAIC in turn temporarily suspended assigning its own investment designations to insurer portfolios. Those designations sit at the centre of US insurer risk-based capital requirements: they determine the capital charge an insurer must hold against a given investment holding, and by extension its regulatory solvency margin. For roughly two weeks, a vulnerability in a widely deployed piece of enterprise software briefly interrupted a mechanism that the entire US insurance industry depends on to calculate its own capital adequacy. NAIC moved to contain the operational impact by permitting insurers to use designations as of 17 June, the last date before suspension, for second-quarter filings not due until August, so quarterly reporting was not itself delayed. But the exposure the incident revealed does not depend on how quickly it was patched.</p>
          <p style={{ opacity: 0.9 }}>This is what makes the case more useful to underwriters than a conventional data breach narrative. The loss did not originate in the insurance industry and was not caused by any insurer's own control failure; it originated in a shared piece of third-party software, propagated through a single trusted regulatory intermediary, and threatened to touch a capital-determination process common to the entire US life and property-casualty market simultaneously. That is precisely the accumulation pathway that per-insured underwriting is structurally unable to see, because no individual insured's risk questionnaire asks about the security posture of the regulator or the rating agencies its capital treatment depends on. It is also a preview of a harder problem: the retraction by ShinyHunters of its own AI-assisted overstatement shows that AI is degrading the reliability of early breach-scoping information on the attacker's side as much as it is accelerating exploitation, which is a genuine complication for claims teams and accumulation modellers trying to size an event in its first days.</p>

          {/* EXHIBIT 4 - NAIC Timeline */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 4 — Timeline of the NAIC / ShinyHunters incident, June 2026</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 760 210" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "520px" }}>
                <line x1="40" y1="140" x2="720" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(255,255,255,0.45)">
                  <text x="90"  y="158" textAnchor="middle">11 Jun</text>
                  <text x="240" y="158" textAnchor="middle">18 Jun</text>
                  <text x="390" y="158" textAnchor="middle">22 Jun</text>
                  <text x="540" y="158" textAnchor="middle">25 Jun</text>
                  <text x="670" y="158" textAnchor="middle">26 Jun</text>
                </g>
                <circle cx="90"  cy="140" r="5"   fill="#E63946" />
                <circle cx="240" cy="140" r="5"   fill="#E63946" />
                <circle cx="390" cy="140" r="5"   fill="#E63946" />
                <circle cx="540" cy="140" r="7"   fill="rgba(255,255,255,0.9)" />
                <circle cx="670" cy="140" r="5"   fill="#E63946" />
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(255,255,255,0.75)">
                  <text x="90"  y="54"  textAnchor="middle">PeopleSoft</text>
                  <text x="90"  y="68"  textAnchor="middle">zero-day exploited;</text>
                  <text x="90"  y="82"  textAnchor="middle">access identified</text>
                  <line x1="90"  y1="88"  x2="90"  y2="135" stroke="rgba(255,255,255,0.15)" />

                  <text x="240" y="96"  textAnchor="middle">Public disclosure;</text>
                  <text x="240" y="110" textAnchor="middle">ShinyHunters claims</text>
                  <text x="240" y="124" textAnchor="middle">responsibility</text>

                  <text x="390" y="54"  textAnchor="middle">Claim detailed:</text>
                  <text x="390" y="68"  textAnchor="middle">3.1TB, rating agency</text>
                  <text x="390" y="82"  textAnchor="middle">files alleged</text>
                  <line x1="390" y1="88"  x2="390" y2="135" stroke="rgba(255,255,255,0.15)" />

                  <text x="540" y="96"  textAnchor="middle" fontWeight="600" fill="rgba(255,255,255,0.95)">Claim revised down;</text>
                  <text x="540" y="110" textAnchor="middle" fontWeight="600" fill="rgba(255,255,255,0.95)">rating agencies suspend</text>
                  <text x="540" y="124" textAnchor="middle" fontWeight="600" fill="rgba(255,255,255,0.95)">NAIC data feeds</text>

                  <text x="670" y="54"  textAnchor="middle">Remediation confirmed;</text>
                  <text x="670" y="68"  textAnchor="middle">designation process</text>
                  <text x="670" y="82"  textAnchor="middle">restarts</text>
                  <line x1="670" y1="88"  x2="670" y2="135" stroke="rgba(255,255,255,0.15)" />
                </g>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>Timeline of the NAIC/ShinyHunters incident, June 2026.</strong> A single software vulnerability, not aimed at the insurance sector specifically, temporarily interrupted the data feeds underpinning US insurer capital designations.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "6px", fontStyle: "italic" }}>Source: NAIC Security Incident Update; KBRA statement; Insurance Journal; Insurance Business.</p>
            </div>
          </div>

          {/* EXHIBIT 5 - Dependency map */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 5 — Systemic cyber accumulation map</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 900 490" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "560px" }}>
                <defs>
                  <marker id="ex5-arrow"     viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.4)" />
                  </marker>
                  <marker id="ex5-arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#E63946" />
                  </marker>
                </defs>
                {/* Dependency lines beneath nodes */}
                <g fill="none">
                  <line x1="415" y1="95" x2="415" y2="210" stroke="#E63946" strokeWidth="1.6" markerEnd="url(#ex5-arrow-red)" />
                  <path d="M 415 265 L 645 380" stroke="#E63946" strokeWidth="1.6" markerEnd="url(#ex5-arrow-red)" />
                  <line x1="127" y1="95" x2="127" y2="380" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" markerEnd="url(#ex5-arrow)" />
                  <path d="M 732 95 L 732 170 L 415 170 L 415 95" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" markerEnd="url(#ex5-arrow)" />
                  <line x1="215" y1="407" x2="645" y2="407" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" markerEnd="url(#ex5-arrow)" />
                </g>
                {/* Edge labels */}
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11">
                  <rect x="330" y="128" width="170" height="34" fill="rgba(0,0,0,0.5)" />
                  <text x="415" y="142" textAnchor="middle" fill="#E63946" fontWeight="600">Shared vendor vulnerability</text>
                  <text x="415" y="156" textAnchor="middle" fill="#E63946">(e.g. PeopleSoft zero-day)</text>

                  <rect x="440" y="305" width="230" height="34" fill="rgba(0,0,0,0.5)" />
                  <text x="555" y="319" textAnchor="middle" fill="#E63946" fontWeight="600">Capital designation &amp; solvency feed</text>
                  <text x="555" y="333" textAnchor="middle" fill="#E63946">— disrupted June 2026</text>

                  <rect x="45" y="220" width="165" height="34" fill="rgba(0,0,0,0.5)" />
                  <text x="127" y="234" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontWeight="600">Hosting &amp; uptime</text>
                  <text x="127" y="248" textAnchor="middle" fill="rgba(255,255,255,0.5)">dependency</text>

                  <rect x="488" y="153" width="180" height="34" fill="rgba(0,0,0,0.5)" />
                  <text x="578" y="167" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontWeight="600">Embedded AI features widen</text>
                  <text x="578" y="181" textAnchor="middle" fill="rgba(255,255,255,0.5)">shared attack surface</text>

                  <rect x="255" y="386" width="345" height="18" fill="rgba(0,0,0,0.5)" />
                  <text x="430" y="399" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontWeight="600">Correlated exposure via shared counterparties</text>
                </g>
                {/* Nodes */}
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600">
                  <rect x="40"  y="40"  width="175" height="55" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
                  <text x="127" y="72"  textAnchor="middle" fill="rgba(255,255,255,0.85)">Cloud providers</text>

                  <rect x="330" y="40"  width="170" height="55" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
                  <text x="415" y="72"  textAnchor="middle" fill="rgba(255,255,255,0.85)">Software vendors</text>

                  <rect x="645" y="40"  width="175" height="55" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
                  <text x="732" y="72"  textAnchor="middle" fill="rgba(255,255,255,0.85)">AI platforms</text>

                  <rect x="330" y="210" width="170" height="55" rx="3" fill="rgba(230,57,70,0.15)" stroke="#E63946" />
                  <text x="415" y="235" textAnchor="middle" fill="#fca5a5">Regulators</text>
                  <text x="415" y="251" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="400">e.g. NAIC</text>

                  <rect x="40"  y="380" width="175" height="55" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
                  <text x="127" y="405" textAnchor="middle" fill="rgba(255,255,255,0.85)">Financial</text>
                  <text x="127" y="421" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="11" fontWeight="400">institutions</text>

                  <rect x="645" y="380" width="175" height="55" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
                  <text x="732" y="405" textAnchor="middle" fill="rgba(255,255,255,0.85)">Insurers</text>
                  <text x="732" y="421" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="11" fontWeight="400">and reinsurers</text>
                </g>
                {/* Legend */}
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(255,255,255,0.4)">
                  <line x1="40" y1="465" x2="66" y2="465" stroke="#E63946" strokeWidth="1.8" />
                  <text x="74" y="469">Pathway disrupted in the NAIC incident, June 2026</text>
                  <line x1="380" y1="465" x2="406" y2="465" stroke="rgba(255,255,255,0.3)" strokeWidth="1.3" />
                  <text x="414" y="469">Other systemic dependencies</text>
                </g>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>Systemic cyber accumulation map.</strong> A vulnerability in a single software vendor's product can propagate through a regulatory intermediary into the capital-determination process of the entire insurance market, a pathway conventional per-insured underwriting does not capture. The labelled lines show the mechanism of propagation, not just the fact of connection.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "6px", fontStyle: "italic" }}>Source: Eudaimon Consulting analysis.</p>
            </div>
          </div>

          {/* SECTION 05 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>05 · Risk Transfer</span>
            The Future of Cyber Risk Transfer
          </h2>

          <p style={{ opacity: 0.9 }}>Traditional indemnity cover remains the right instrument for idiosyncratic loss: the incident response, legal, notification and business interruption costs that follow a breach specific to one insured. It is poorly suited to the correlated, infrastructure-driven losses described above, because indemnity claims require individual loss adjustment at a speed that a genuinely systemic event, touching hundreds or thousands of insureds through a shared vendor or cloud provider, cannot support. This is the gap parametric and index-based structures are designed to close. Lloyd's own <em>Cloud Down</em> study, produced with AIR Worldwide, models cloud service provider failure risk using what it calls detailed accumulation methodology, mapping actual vendor-to-insured relationships from exposure data rather than assuming accumulation follows market share. That approach, and the parallel work on more realistic cloud-outage Realistic Disaster Scenarios, points toward parametric triggers, defined by measurable service downtime or confirmed provider failure, that can pay out on a fixed schedule without waiting for thousands of individual loss adjustments.</p>
          <p style={{ opacity: 0.9 }}>The reinsurance and capital markets side of risk transfer faces a different pressure. Gallagher Re's reporting of a shrinking "innovation premium" on cyber catastrophe bonds, alongside double-digit risk-adjusted rate reductions at recent renewals, indicates that alternative capital is now pricing cyber tail risk more like an established, well-modelled peril than a nascent one. That is only appropriate if the underlying models have kept pace with the accumulation pathways described in this piece. Lloyd's own systemic risk scenario work puts a number on what an extreme, correlated cyber event could cost: a hypothetical attack on major financial market infrastructure is modelled to produce global economic losses averaging USD 3.5 trillion over five years across a probability-weighted set of severities, with the most extreme scenario reaching USD 16 trillion. Pricing that sits comfortably below the trend implied by softening reinsurance rates suggests the market, for now, is treating a low-probability, high-severity risk as more remote than the accumulation evidence in cloud and third-party dependency data actually supports.</p>

          {/* SECTION 06 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>06 · The Business Model</span>
            Why Cyber Insurance Is Becoming a Resilience Business
          </h2>

          <p style={{ opacity: 0.9 }}>If the primary driver of rising loss frequency is a widening, continuously moving gap between exploit speed and patch speed, then a risk assessment taken once a year at renewal is measuring a target that has already moved by the time a claim arrives. That is the commercial logic behind insurers such as Coalition and Resilience building continuous monitoring and managed detection capability directly into the policy rather than treating security services as an optional add-on. Attack surface management data, patch cadence telemetry and credential exposure monitoring convert underwriting from an annual snapshot into a continuously recalibrated view of exactly the variables the DBIR and NCSC evidence identifies as the actual drivers of frequency: unpatched exposure, weak identity controls and third-party access.</p>
          <p style={{ opacity: 0.9 }}>This shift carries real operating economics, not just a marketing repositioning. Building or licensing managed detection and incident response capability requires capital and operational commitment that differs fundamentally from traditional claims-paying capacity, and it introduces a new liability question: what happens when an insurer-provided monitoring service fails to catch the exploit that later triggers a claim. It also raises an anti-selection question in the other direction, since the insureds most willing to accept continuous monitoring are disproportionately likely to be the better-governed risks, which could leave a shrinking pool of harder-to-monitor accounts priced on the old annual-questionnaire model precisely where the AI-driven frequency shift is most acute. None of this makes the resilience-platform model wrong; it does mean that the insurers pursuing it need underwriting, claims and legal functions that operate on the same continuous cycle as the security telemetry they are now underwriting against, rather than retrofitting continuous data into an annual process.</p>

          {/* EXHIBIT 6 - Operating model flow */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-white/60 text-[9px]">Exhibit 6 — Future cyber insurance operating model</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "520px" }}>
                <defs>
                  <marker id="ex6-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.5)" />
                  </marker>
                </defs>
                {/* Boxes */}
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fontWeight="600">
                  <rect x="20"  y="100" width="118" height="56" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
                  <text x="79"  y="124" textAnchor="middle" fill="rgba(255,255,255,0.85)">Risk</text>
                  <text x="79"  y="140" textAnchor="middle" fill="rgba(255,255,255,0.85)">transfer</text>

                  <rect x="168" y="100" width="118" height="56" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
                  <text x="227" y="124" textAnchor="middle" fill="rgba(255,255,255,0.85)">Risk</text>
                  <text x="227" y="140" textAnchor="middle" fill="rgba(255,255,255,0.85)">prevention</text>

                  <rect x="316" y="100" width="128" height="56" rx="3" fill="rgba(230,57,70,0.15)" stroke="#E63946" />
                  <text x="380" y="124" textAnchor="middle" fill="#fca5a5">Continuous</text>
                  <text x="380" y="140" textAnchor="middle" fill="#fca5a5">monitoring</text>

                  <rect x="474" y="100" width="128" height="56" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
                  <text x="538" y="124" textAnchor="middle" fill="rgba(255,255,255,0.85)">Incident</text>
                  <text x="538" y="140" textAnchor="middle" fill="rgba(255,255,255,0.85)">response</text>

                  <rect x="632" y="100" width="110" height="56" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
                  <text x="687" y="124" textAnchor="middle" fill="rgba(255,255,255,0.85)">Recovery</text>
                  <text x="687" y="140" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="11" fontWeight="400">&amp; re-rating</text>
                </g>
                {/* Forward arrows */}
                <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" markerEnd="url(#ex6-arrow)">
                  <line x1="138" y1="128" x2="166" y2="128" />
                  <line x1="286" y1="128" x2="314" y2="128" />
                  <line x1="444" y1="128" x2="472" y2="128" />
                  <line x1="602" y1="128" x2="630" y2="128" />
                </g>
                {/* Feedback loop */}
                <path d="M 687 156 C 687 210, 79 210, 79 156" fill="none" stroke="#E63946" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#ex6-arrow)" />
                <text x="380" y="228" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(230,57,70,0.8)" fontStyle="italic">Findings from recovery feed back into re-pricing and renewed transfer terms</text>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(255,255,255,0.7)" }}>Future cyber insurance operating model.</strong> A continuous loop rather than an annual, linear sequence: recovery and claims data feed directly back into pricing and terms, closing the gap between renewal cycles and the underlying rate of risk change.</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "6px", fontStyle: "italic" }}>Source: Eudaimon Consulting analysis.</p>
            </div>
          </div>

          {/* SECTION 07 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>07 · Implications</span>
            Strategic Implications for Insurers and Clients
          </h2>

          <p style={{ opacity: 0.9 }}>For insurers, the immediate priority is accumulation, not pricing. Portfolios need mapping against shared software vendors, cloud regions and AI platform dependencies with the same rigour applied to catastrophe-exposed property, because the NAIC case shows that concentration can sit in unglamorous places such as regulatory data feeds rather than only in obvious cloud infrastructure. Over three to five years, the more durable shift is toward embedding continuous monitoring in core underwriting, which changes the skill mix underwriting teams need and the capital and liability profile of the product itself.</p>
          <p style={{ opacity: 0.9 }}>For reinsurers, the near-term question is whether current cyber catastrophe pricing reflects the correlation evidence in the DBIR and Coalition data, given that rate reductions are running well ahead of any comparable improvement in the underlying risk picture. Medium-term, the more useful role is helping primary carriers build the accumulation models capable of pricing shared-vendor and regulatory-infrastructure risk explicitly, since that data and modelling capability currently sits unevenly across the market.</p>
          <p style={{ opacity: 0.9 }}>For brokers, the immediate task is making sure clients understand what a policy actually responds to when a loss originates in a shared vendor or a regulator rather than the client's own systems, since coverage triggers written for direct compromise can leave genuine gaps in third-party-driven scenarios. For CISOs and risk committees, the practical read-through from the NCSC statement is to treat patch cadence and legacy system remediation as board-level risk indicators precisely because insurers are starting to underwrite against them directly. For regulators, the NAIC's own experience of disruption to its designation infrastructure is a case study worth acting on internally: the bodies that set expectations for insurer operational resilience are exposed to the same third-party software risk they ask insurers to manage, and their own continuity arrangements deserve the same scrutiny.</p>

          {/* SECTION 08 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#E63946" }}>08 · Conclusion</span>
            Conclusion
          </h2>

          <p style={{ opacity: 0.9 }}>Nothing in the evidence reviewed here supports the idea that AI has created a fundamentally new, uninsurable category of cyber risk. What it has done is compress the interval in which existing risk, exploitable vulnerabilities and reachable identities, turns into realised loss, while doing nothing to compress the interval in which insurance pricing and accumulation models are updated. The NAIC breach, a routine-looking software vulnerability that briefly touched the capital-determination infrastructure of an entire industry, is a preview of what that mismatch looks like in practice: not a dramatic, insurer-specific failure, but a quiet demonstration that concentration risk now runs through places conventional underwriting was never built to see. A market currently pricing cyber catastrophe risk 15 to 32 per cent cheaper than a year ago is, in effect, betting that this gap will close on its own. The evidence assembled in this piece suggests the more prudent assumption is the opposite: that the gap is widening, and that closing it is now the central underwriting task in cyber insurance, not a peripheral one.</p>

          {/* SOURCES */}
          <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="mono-label text-white/40 text-[9px] mb-3">Sources</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: 1.8, fontStyle: "italic" }}>
              NCSC / Five Eyes, <em>The AI Shift in Cyber Risk: Why Leaders Must Act Now</em> (22 June 2026) · Verizon, <em>2026 Data Breach Investigations Report</em> · IBM / Ponemon Institute, <em>Cost of a Data Breach Report 2025</em> · Gallagher Re, <em>2026 Cyber Insurance Market Outlook</em> and First View renewal reports · S&amp;P Global Ratings, <em>Cyber Insurance Market Outlook 2026</em> · Coalition, 2026 cyber risk commentary · Lloyd's, <em>Cloud Down</em> and systemic cyber risk scenario reports · National Association of Insurance Commissioners, Security Incident Update · KBRA statement on the NAIC cybersecurity incident · Insurance Journal and Insurance Business coverage of the NAIC breach.
            </p>
          </div>

          {/* DISCLAIMER */}
          <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)", lineHeight: 1.6, fontStyle: "italic" }}>This note is provided for general information purposes only and does not constitute legal, regulatory, actuarial or investment advice. It has been prepared using publicly available sources believed to be reliable at the time of writing; Eudaimon Consulting makes no representation as to their completeness or accuracy and accepts no liability for decisions made in reliance on this content. © 2026 Eudaimon Consulting. All rights reserved. No part of this publication may be reproduced, distributed or transmitted without the prior written permission of Eudaimon Consulting.</p>
          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/50 text-[9px] mb-2">Questions on cyber insurance, accumulation modelling, or resilience strategy?</p>
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
