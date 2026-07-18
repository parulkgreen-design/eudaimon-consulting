import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Claims Expertise Is Becoming Scarce. What Happens Next? — Eudaimon Consulting",
  description: "Claims is becoming a core determinant of underwriting margin, capital efficiency and franchise value, at the exact moment its deepest experience is retiring. Evidence from the LMA, Swiss Re, AM Best and APCIA, tested across US, UK and European markets.",
  openGraph: {
    title: "Claims Expertise Is Becoming Scarce. What Happens Next?",
    description: "Claims is becoming a core determinant of underwriting margin and franchise value, at the exact moment its deepest experience is retiring.",
    url: "https://www.eudaimonconsulting.com/insights/claims-expertise-scarcity",
    type: "article",
    images: [{ url: "/assets/logo.jpg" }],
  },
  alternates: { canonical: "https://www.eudaimonconsulting.com/insights/claims-expertise-scarcity" },
};

import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function ClaimsExpertiseScarcityArticle() {

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid rgba(17,17,17,0.10)",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 1px 2px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.06)",
  };

  const exhibitWrap = {
    background: "#ffffff",
    border: "1px solid rgba(17,17,17,0.10)",
    borderRadius: "16px",
    boxShadow: "0 1px 2px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.06)",
    overflow: "hidden" as const,
    margin: "0",
  };

  const exhibitHeader = {
    background: "#f3efe7",
    padding: "10px 20px",
    borderBottom: "1px solid rgba(17,17,17,0.10)",
  };

  return (
    <div className="bg-[#fafaf8] min-h-screen">

      {/* HERO */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, rgba(29,111,164,0.8) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-[#111]/60 hover:text-[#E63946] transition-colors text-sm mb-10">
            <ChevronLeft size={14} />Back to Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="mono-label text-[9px] px-3 py-1 rounded-full" style={{ background: "rgba(29,111,164,0.12)", color: "#1D6FA4" }}>Claims &amp; Talent Strategy</span>
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-[#111]/20 text-[#111]">Eudaimon Insight</span>
            <div className="flex items-center gap-2 text-[#111]/60"><Clock size={11} /><span className="mono-label text-[9px]">10 min read</span></div>
          </div>
          <h1 className="font-display text-[#111] text-4xl md:text-5xl leading-tight mb-8">
            Claims Expertise Is Becoming Scarce. What Happens Next?
          </h1>
          <p className="text-[#111] text-xl leading-relaxed border-l-2 border-[#1D6FA4] pl-5">
            Claims is becoming a core determinant of underwriting margin and franchise value, at the exact moment its deepest experience is retiring.
          </p>
          <div style={{ ...cardStyle, marginTop: "32px", padding: "20px 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{ label: "Published", val: "July 2026" }, { label: "Series", val: "Claims & Talent Strategy" }, { label: "Audience", val: "CEOs · Chief Claims Officers · Chief Underwriting Officers" }, { label: "Read time", val: "10 minutes" }].map((m) => (
                <div key={m.label}>
                  <p className="mono-label text-[#111]/40 text-[9px] mb-1">{m.label}</p>
                  <p className="text-[#111] text-xs font-medium">{m.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto h-px" style={{ background: "linear-gradient(90deg, rgba(230,57,70,0.3), rgba(29,111,164,0.3))" }} />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-[#111] text-base leading-relaxed">

          {/* INTRODUCTION */}
          <p style={{ opacity: 0.92 }}>Commercial insurance spent most of the last decade focused on underwriting talent. Claims capability received less attention, because pricing strength masked the operational weaknesses sitting underneath it. That environment is changing. Casualty severity is rising, litigation is becoming more sophisticated, and claims organisations are adopting AI at pace. At the same time, experienced claims professionals are retiring faster than they are being replaced. This note examines whether that combination amounts to a temporary labour shortage or a deeper capability challenge, using evidence from the London Market, US commercial insurance and European markets, and sets out how claims operating models are likely to evolve over the next five years.</p>

          {/* EXECUTIVE SUMMARY */}
          <div style={{ ...cardStyle, borderLeft: "4px solid #E63946", padding: "28px 32px" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#E63946" }}>Executive Summary</p>
            <p className="text-[13.5px] leading-relaxed mb-3" style={{ color: "rgba(17,17,17,0.78)" }}>Claims is no longer a cost centre downstream of underwriting. Softening rate and hardening severity mean reserving judgement, litigation strategy and claims data now shape loss ratio, capital efficiency and renewal conversations as directly as pricing does. That shift is happening exactly as deep claims experience thins: London Market professionals with 15+ years&rsquo; experience fell from 37% in 2023 to 31% in 2025, while 52% of junior hires now come from outside the traditional pipeline, up from 37%.</p>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "rgba(17,17,17,0.78)" }}>This note tests whether that is a temporary shortage or a structural shift, triangulates the severity evidence across four independent sources, and sets out what CEOs, CUOs and Chief Claims Officers should do about it over the next five years.</p>
          </div>

          {/* SECTION 01 */}
          <h2 className="font-display text-[#111] text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#1D6FA4" }}>01 · The Value Driver</span>
            Why Claims Capability Now Drives Enterprise Value
          </h2>

          <p style={{ opacity: 0.92 }}>Ten years ago, claims was reasonably treated as an operational cost centre downstream of underwriting decisions. That framing no longer fits the economics, and four independent sources now point the same way. Marathon Strategies counted 135 nuclear verdicts, jury awards above $10 million, against corporate defendants in 2024, a 52% increase on 2023, worth $31.3 billion in total. Swiss Re&rsquo;s Social Inflation Index put the non-economic component of US liability claims growth at its highest level in two decades in 2023, and the reinsurer estimates cumulative adverse development on US commercial liability lines at $62 billion over 2015 to 2024, with $16 billion added to prior-year loss estimates in the 2024 reserve reviews alone. AM Best&rsquo;s 2025 review found commercial auto liability added a further $2 billion in reserve deficiencies concentrated in the 2023 and 2024 accident years. APCIA frames the wider effect in affordability terms, estimating the cost of legal system abuse to US households at several thousand dollars a year. The sources disagree on framing and precise magnitude, but not on direction.</p>

          {/* EXHIBIT 1 - Severity vs pricing cushion (lead exhibit) */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-[9px]" style={{ color: "rgba(17,17,17,0.55)" }}>Exhibit 1 &mdash; Severity is rising as the pricing cushion narrows</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 860 300" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "560px" }}>
                <line x1="50" y1="30" x2="50" y2="230" stroke="rgba(17,17,17,0.3)" strokeWidth="1.5" />
                <line x1="50" y1="230" x2="420" y2="230" stroke="rgba(17,17,17,0.3)" strokeWidth="1.5" />
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" fill="rgba(17,17,17,0.5)">
                  <text x="42" y="233" textAnchor="end">$0bn</text>
                  <text x="42" y="133" textAnchor="end">$16bn</text>
                  <text x="42" y="36" textAnchor="end">$32bn</text>
                </g>
                <rect x="130" y="130" width="70" height="100" fill="rgba(17,17,17,0.25)" />
                <text x="165" y="120" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="rgba(17,17,17,0.85)">$14.5bn</text>
                <text x="165" y="250" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(17,17,17,0.55)">2023</text>
                <rect x="250" y="30" width="70" height="200" fill="#1D6FA4" />
                <text x="285" y="20" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#1D6FA4">$31.3bn</text>
                <text x="285" y="250" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(17,17,17,0.55)">2024</text>
                <text x="240" y="278" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(17,17,17,0.4)" fontStyle="italic">Total value of US nuclear verdicts ($10m+), Marathon Strategies</text>

                <line x1="460" y1="20" x2="460" y2="260" stroke="rgba(17,17,17,0.1)" strokeWidth="1" />

                <g fontFamily="Inter, system-ui, sans-serif">
                  <text x="490" y="45" fontSize="11" fill="rgba(17,17,17,0.5)">Cumulative adverse development,</text>
                  <text x="490" y="60" fontSize="11" fill="rgba(17,17,17,0.5)">US commercial liability, 2015&ndash;24</text>
                  <text x="490" y="92" fontSize="22" fontWeight="700" fill="#1D6FA4">$62bn</text>
                  <text x="490" y="108" fontSize="10" fill="rgba(17,17,17,0.4)">Swiss Re Institute</text>

                  <text x="490" y="155" fontSize="11" fill="rgba(17,17,17,0.5)">Commercial combined ratio</text>
                  <text x="490" y="183" fontSize="18" fontWeight="700" fill="rgba(17,17,17,0.85)">95.8 <tspan fontSize="13" fill="rgba(17,17,17,0.5)">(2025)</tspan></text>
                  <text x="490" y="205" fontSize="18" fontWeight="700" fill="#1D6FA4">96&ndash;97 <tspan fontSize="13" fill="rgba(17,17,17,0.5)">(2026E)</tspan></text>
                  <text x="490" y="222" fontSize="10" fill="rgba(17,17,17,0.4)">AM Best</text>
                </g>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(17,17,17,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(17,17,17,0.78)" }}>Severity is rising as the pricing cushion narrows.</strong> Nuclear verdict value more than doubled in a single year. Swiss Re&rsquo;s reserve data shows the same trend from a different angle. The combined ratio is expected to widen as rate momentum fades, precisely as claims judgement thins.</p>
              <p style={{ fontSize: "10px", color: "rgba(17,17,17,0.35)", marginTop: "6px", fontStyle: "italic" }}>Source: Marathon Strategies; Swiss Re Institute, Social Inflation Index and sigma research; AM Best, US commercial lines market segment reports (February and June 2026); APCIA.</p>
            </div>
          </div>

          <p style={{ opacity: 0.92 }}>Softening rate and hardening severity together do more than compress margin. They change what claims actually is inside an insurer. Underwriting margin now depends on claims execution more directly than it did when price alone could carry a result, because a book priced correctly on paper still loses money if reserving judgement or litigation strategy is weak in the file. Large commercial buyers and their brokers increasingly judge insurers on claims performance specifically when they choose where to place complex risk, which makes claims a factor in winning new business as well as in retention. Claims data is itself becoming an underwriting asset: carriers with a genuine claims-to-underwriting feedback loop price and select risk better than those that run the two functions as separate disciplines. And claims expertise sits directly upstream of capital efficiency, since reserve adequacy determines how much capital an insurer must hold against a book, and reserving judgement is a claims skill as much as an actuarial one.</p>

          <p style={{ opacity: 0.92 }}>There is a fifth link, and it recurs through this note. AI creates value in claims only where the judgement it augments is sound; a fast, well-automated workflow built on weak reserving or coverage judgement simply produces bad decisions faster. Claims capability increasingly determines whether an insurer&rsquo;s other investments, in pricing sophistication, in data, in AI itself, actually convert into results. There is a customer-facing version of the same argument: Celent&rsquo;s 2025 research describes the claim as the &ldquo;moment of truth&rdquo; that most shapes long-term loyalty, a finding built mainly on personal lines but consistent with what brokers report in commercial and specialty, where a poorly handled large loss damages a renewal conversation more than a rate increase does.</p>

          {/* SECTION 02 */}
          <h2 className="font-display text-[#111] text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#1D6FA4" }}>02 · The Evidence</span>
            What the LMA Survey Shows, and Why It Generalises
          </h2>

          <p style={{ opacity: 0.92 }}>The clearest evidence for this shift comes from the Lloyd&rsquo;s Market Association&rsquo;s 2025/26 Claims Talent Survey, which found that the proportion of London Market claims professionals with more than fifteen years&rsquo; experience fell from 37% in 2023 to 31% in 2025, while 52% of junior hires now come from graduates, school leavers and recruits from outside insurance, up from 37% two years earlier.</p>

          {/* EXHIBIT 2 - Experience curve */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-[9px]" style={{ color: "rgba(17,17,17,0.55)" }}>Exhibit 2 &mdash; The London Market experience curve, 2023 to 2025</p>
            </div>
            <div style={{ padding: "16px 20px 8px", overflowX: "auto" }}>
              <svg viewBox="0 0 860 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "560px" }}>
                <line x1="50" y1="30" x2="50" y2="250" stroke="rgba(17,17,17,0.3)" strokeWidth="1.5" />
                <line x1="50" y1="250" x2="800" y2="250" stroke="rgba(17,17,17,0.3)" strokeWidth="1.5" />
                <g fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" fill="rgba(17,17,17,0.5)">
                  <text x="42" y="253" textAnchor="end">0%</text>
                  <text x="42" y="177" textAnchor="end">20%</text>
                  <text x="42" y="103" textAnchor="end">40%</text>
                  <text x="42" y="36" textAnchor="end">60%</text>
                </g>
                <line x1="50" y1="177" x2="800" y2="177" stroke="rgba(17,17,17,0.08)" strokeWidth="1" />
                <line x1="50" y1="103" x2="800" y2="103" stroke="rgba(17,17,17,0.08)" strokeWidth="1" />

                <rect x="130" y="114" width="60" height="136" fill="rgba(17,17,17,0.25)" />
                <text x="160" y="104" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="rgba(17,17,17,0.85)">37%</text>
                <rect x="200" y="136" width="60" height="114" fill="#1D6FA4" />
                <text x="230" y="126" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#1D6FA4">31%</text>
                <text x="195" y="280" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(17,17,17,0.55)">15+ years&rsquo;</text>
                <text x="195" y="294" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(17,17,17,0.55)">experience</text>

                <rect x="460" y="114" width="60" height="136" fill="rgba(17,17,17,0.25)" />
                <text x="490" y="104" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="rgba(17,17,17,0.85)">37%</text>
                <rect x="530" y="59" width="60" height="191" fill="#1D6FA4" />
                <text x="560" y="49" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#1D6FA4">52%</text>
                <text x="525" y="280" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(17,17,17,0.55)">Junior hires from graduates,</text>
                <text x="525" y="294" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fill="rgba(17,17,17,0.55)">school leavers &amp; outside industry</text>

                <g fontFamily="Inter, system-ui, sans-serif" fontSize="11.5">
                  <rect x="240" y="308" width="22" height="10" fill="rgba(17,17,17,0.25)" />
                  <text x="270" y="317" fill="rgba(17,17,17,0.75)">2023</text>
                  <rect x="330" y="308" width="22" height="10" fill="#1D6FA4" />
                  <text x="360" y="317" fill="#1D6FA4">2025</text>
                </g>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(17,17,17,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(17,17,17,0.78)" }}>The London Market experience curve, 2023 to 2025.</strong> Both series started at 37% in 2023. Deep experience has since fallen; entry from outside the traditional pipeline has risen sharply.</p>
              <p style={{ fontSize: "10px", color: "rgba(17,17,17,0.35)", marginTop: "6px", fontStyle: "italic" }}>Source: Lloyd&rsquo;s Market Association, Claims Talent Survey 2025/26.</p>
            </div>
          </div>

          <p style={{ opacity: 0.92 }}>The LMA&rsquo;s data is unusually granular because it is one of the few claims-specific workforce surveys published anywhere in commercial insurance, which makes it easy to mistake for a Lloyd&rsquo;s-specific finding, though the pattern is far broader. In the United States, an estimate of roughly 400,000 insurance industry departures since 2021 by the end of 2026 is now widely cited across the market and commonly attributed to Bureau of Labor Statistics projections. The original publication is difficult to trace with precision, having passed through several rounds of industry citation, so the figure is best read as an industry-consensus estimate rather than a primary government statistic. What is better sourced is the shift in turnover itself: industry turnover has climbed from a historical 8&ndash;9% toward 12&ndash;15%. In the UK, Gallagher Bassett&rsquo;s 2026 Carrier Perspective survey found that talent attraction and retention jumped from seventh to first place among insurers&rsquo; business concerns in a single year, with 48% of respondents naming claims and adjusting as facing the most acute shortages of any function. The London Market Group separately finds as many claims professionals over 50 as under 30 in the market, 24% in each band, against 18% and 23% respectively across financial services as a whole.</p>

          <p style={{ opacity: 0.92 }}>The consistent shape across US, UK and European sources matches what the LMA describes: healthy interest at entry level, a thinning middle, and a retiring top. That is a structural demographic fact common to every market examined here, and it is why the economics set out in Section 01 are becoming harder to manage rather than easier.</p>

          {/* SECTION 03 */}
          <h2 className="font-display text-[#111] text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#1D6FA4" }}>03 · Root Cause</span>
            A Talent Shortage or an Experience Shortage?
          </h2>

          <p style={{ opacity: 0.92 }}>It is tempting to treat hiring difficulty, salary inflation and poaching between employers as the problem itself. In practice these are downstream symptoms: what a market looks like when everyone is competing for the same thin layer of experience rather than building more of it. The LMA&rsquo;s own entry-level data undercuts the recruitment narrative directly. New entrants are up, awareness and use of graduate schemes such as Forage and London Insurance Life have increased significantly, and heads of claims report broadening access to talent from outside the industry. The pipeline into claims is, by this measure, healthier at entry level than it has been in years.</p>

          <p style={{ opacity: 0.92 }}>The constraint sits in the middle. Heads of claims consistently name the five-to-seven-year and fifteen-plus-year bands as the hardest to fill, because judgement built through complex-claim exposure cannot be compressed into a shorter training period, however much an insurer is willing to pay for it. LMA respondents describe underinvestment in training as compounding the problem directly, warning that a competitive recruitment environment creates a disincentive to develop talent and risks a race to the bottom across the market.</p>

          <div style={{ ...cardStyle, padding: "20px 24px" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#1D6FA4" }}>Ranking the drivers on the available evidence</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ borderTop: "1px solid rgba(17,17,17,0.10)", paddingTop: "12px" }}>
                <span className="mono-label text-[9px]" style={{ background: "rgba(29,111,164,0.12)", color: "#1D6FA4", padding: "3px 9px", borderRadius: "999px", marginRight: "10px" }}>Root cause</span>
                <span style={{ fontSize: "13.5px", color: "rgba(17,17,17,0.78)", lineHeight: 1.6 }}>Demographic drawdown of the 15+ year cohort, and organisational underinvestment in developing the 5&ndash;7 year band into future seniors. Both are structural and neither is quick to reverse.</span>
              </div>
              <div style={{ borderTop: "1px solid rgba(17,17,17,0.10)", paddingTop: "12px" }}>
                <span className="mono-label text-[9px]" style={{ background: "#f3efe7", color: "rgba(17,17,17,0.78)", padding: "3px 9px", borderRadius: "999px", marginRight: "10px" }}>Accelerant</span>
                <span style={{ fontSize: "13.5px", color: "rgba(17,17,17,0.78)", lineHeight: 1.6 }}>A skills shift toward data and digital fluency, widening the gap between what senior staff learned early in their careers and what the role now also requires.</span>
              </div>
              <div style={{ borderTop: "1px solid rgba(17,17,17,0.10)", paddingTop: "12px" }}>
                <span className="mono-label text-[9px]" style={{ background: "#ece7da", color: "rgba(17,17,17,0.55)", padding: "3px 9px", borderRadius: "999px", marginRight: "10px" }}>Symptom</span>
                <span style={{ fontSize: "13.5px", color: "rgba(17,17,17,0.78)", lineHeight: 1.6 }}>Salary inflation, poaching and vacancy rates. These are what the root cause looks like from the outside, and treating them as the target leads to spending on recruitment that will not fix the underlying drawdown.</span>
              </div>
            </div>
          </div>

          <p className="font-display text-[#111] text-lg mt-6" style={{ opacity: 0.95 }}>The pipeline entering claims is in reasonable health. What is scarce is judgement that takes fifteen years to build, and nothing shortens that clock.</p>

          {/* SECTION 04 */}
          <h2 className="font-display text-[#111] text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#1D6FA4" }}>04 · US vs Europe</span>
            Is Europe Simply Behind the US on This Curve?
          </h2>

          <p style={{ opacity: 0.92 }}>Only partly. Litigation funding is scaling in Europe, but through a different mechanism to the jury-driven severity the US experiences. The EU&rsquo;s Collective Redress Directive and its Product Liability Directive, which member states must transpose by the end of 2026, are extending funded, multi-claimant litigation into consumer, competition and product liability disputes across the bloc. Germany already has roughly twenty active litigation funders operating under clarified statutory rules, and the UK remains Europe&rsquo;s dominant funding hub. None of this resembles the US nuclear verdict story, which is driven by jury behaviour and a punitive damages culture that European legal systems do not share. What both regions share is claims growing more procedurally complex, with more parties, more funders and longer resolution timelines to manage.</p>

          <p style={{ opacity: 0.92 }}>The workforce comparison is harder to make with confidence, and this gap is worth dwelling on rather than smoothing over. The LMA&rsquo;s survey is the most granular claims-specific workforce data published anywhere in Europe; no continental equivalent exists at the same level of detail. That absence is itself informative. It suggests continental carriers have not yet treated claims workforce risk as a board-level metric worth measuring formally, which is arguably a weaker starting position than either the UK or the US, whatever the underlying demographic reality turns out to be. Directionally, the pressures visible in US and UK data, an ageing workforce and a thin middle tier, are consistent with what European carriers report anecdotally, but that claim should be held more loosely than the London Market or US findings, which rest on harder data.</p>

          {/* SECTION 05 */}
          <h2 className="font-display text-[#111] text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#1D6FA4" }}>05 · The AI Question</span>
            Does AI Close the Gap, or Raise the Price of What&rsquo;s Scarce?
          </h2>

          <p style={{ opacity: 0.92 }}>The claims activities AI is displacing fastest are also, not coincidentally, the activities that have historically taught new entrants how to think like adjusters. Oliver Wyman&rsquo;s 2025 analysis put generative AI&rsquo;s adjuster time savings at 5&ndash;25%, with the highest-performing implementations cutting cycle times by up to 75% on a narrow set of high-volume, low-complexity workflows such as first notification of loss. That top-end figure describes specific eligible processes rather than claims operations broadly, and CUOs should treat it as a ceiling for the easiest work rather than a guide to typical performance. Coverage interpretation, negotiation, litigation strategy, large-loss management and reserving judgement under genuine uncertainty remain almost entirely outside what current systems can do, and the LMA&rsquo;s own survey lists exactly these skills, alongside data analytics, as what heads of claims expect to matter most over the next three to five years.</p>

          {/* EXHIBIT 3 - Claims capability stack */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-[9px]" style={{ color: "rgba(17,17,17,0.55)" }}>Exhibit 3 &mdash; The claims capability stack: where AI contributes, where expertise still decides</p>
            </div>
            <div style={{ padding: "18px 20px 12px", overflowX: "auto" }}>
              <svg viewBox="0 0 860 360" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "560px" }}>
                {[
                  { y: 290, label: "Routine processing & FNOL", tier: "Very high", w: 92 },
                  { y: 240, label: "Investigation & document review", tier: "High", w: 68 },
                  { y: 190, label: "Coverage interpretation", tier: "Moderate", w: 40 },
                  { y: 140, label: "Negotiation", tier: "Low", w: 24 },
                  { y: 90, label: "Litigation management", tier: "Very low", w: 13 },
                  { y: 40, label: "Reserving judgement", tier: "Minimal", w: 7 },
                ].map((row) => (
                  <g key={row.label}>
                    <text x="0" y={row.y + 15} fontFamily="Inter, system-ui, sans-serif" fontSize="12.5" fill="rgba(17,17,17,0.8)">{row.label}</text>
                    <rect x="330" y={row.y} width="360" height="20" rx="4" fill="#f3efe7" />
                    <rect x="330" y={row.y} width={360 * (row.w / 100)} height="20" rx="4" fill="#1D6FA4" />
                    <text x="702" y={row.y + 15} fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="700" fill="#1D6FA4">{row.tier}</text>
                  </g>
                ))}
                <rect x="330" y="335" width="16" height="12" rx="2" fill="#1D6FA4" />
                <text x="352" y="345" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(17,17,17,0.75)">AI contribution</text>
                <rect x="480" y="335" width="16" height="12" rx="2" fill="#f3efe7" stroke="rgba(17,17,17,0.2)" />
                <text x="502" y="345" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="rgba(17,17,17,0.75)">Human judgement required</text>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(17,17,17,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(17,17,17,0.78)" }}>The claims capability stack.</strong> The blue portion of each bar is the share of that layer AI currently handles or materially speeds up; the remaining grey portion is work that still depends on human judgement. Litigation management and reserving judgement are both near the bottom of the scale, but reserving is ranked lower: it requires a forward-looking estimate under genuine uncertainty with no fixed answer to check against, which is harder to formalise into rules than case-managing litigation steps. Tiers and bar lengths are Eudaimon Consulting&rsquo;s qualitative ranking, not a measured statistic per layer.</p>
              <p style={{ fontSize: "10px", color: "rgba(17,17,17,0.35)", marginTop: "6px", fontStyle: "italic" }}>Basis: Oliver Wyman (2025) reported adjuster time-savings of 5&ndash;25% generally, rising to 75% on narrow, high-volume eligible workflows; LMA Claims Talent Survey 2025/26 skill-importance rankings. No single source measures AI contribution at this per-layer granularity; the ranking is Eudaimon Consulting&rsquo;s synthesis of the two.</p>
            </div>
          </div>

          <p style={{ opacity: 0.92 }}>The straightforward reading is that AI raises the leverage of the experienced staff who remain, letting a smaller senior bench cover a wider portfolio of genuinely complex claims. Accenture finds 74% of insurance executives expect AI to change job roles materially within three to five years, consistent with that view. The more demanding reading, and the one this note thinks matters more, is that the work AI is absorbing first is the same repetitive, judgement-light claims work that used to be where junior and mid-career adjusters built pattern recognition over years of handling routine files. If that training ground disappears before insurers redesign how judgement is actually taught, AI adoption risks accelerating the experience gap it is meant to offset. The evidence supports the productivity case for AI comfortably, though it does not yet support the assumption that AI alone solves the workforce problem the LMA describes.</p>

          {/* SECTION 06 */}
          <h2 className="font-display text-[#111] text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#1D6FA4" }}>06 · The 2030 Operating Model</span>
            Three Trends Already Point to Where This Goes
          </h2>

          <p style={{ opacity: 0.92 }}>Rather than model claims futures in the abstract, it is more useful to follow three trends that are already observable and ask where they converge. First, insurers are relying more heavily on TPAs and specialist legal and adjusting partners, already the default in high-frequency personal and workers&rsquo; compensation lines and extending into more complex commercial claims. Second, the seniority profile inside insurers is concentrating: the LMA data shows this directly, and the same shape, fewer, more senior claims professionals holding a larger share of authority, is visible anecdotally across US and European carriers protecting large-loss and technical roles even as they trim claims headcount elsewhere. Third, automation is absorbing routine processing and investigation work at the pace described in Section 05, freeing capacity that insurers are choosing to redeploy toward complex claims rather than simply eliminating.</p>

          {/* EXHIBIT 4 - Where judgement sits in 2030 */}
          <div style={exhibitWrap}>
            <div style={exhibitHeader}>
              <p className="mono-label text-[9px]" style={{ color: "rgba(17,17,17,0.55)" }}>Exhibit 4 &mdash; Where claims judgement sits in 2030</p>
            </div>
            <div style={{ padding: "18px 20px 12px", overflowX: "auto" }}>
              <svg viewBox="0 0 860 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", minWidth: "560px" }}>
                <polygon points="130,290 730,290 610,230 250,230" fill="#1D6FA4" fillOpacity="0.85" />
                <polygon points="250,230 610,230 520,170 340,170" fill="#1D6FA4" fillOpacity="0.65" />
                <polygon points="340,170 520,170 460,110 400,110" fill="#1D6FA4" fillOpacity="0.45" />
                <polygon points="400,110 460,110 430,50" fill="#E63946" />

                <text x="430" y="268" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#111111">AI layer</text>
                <text x="430" y="284" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" fill="#111111">Routine processing, triage, intake</text>

                <text x="430" y="203" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#111111">TPA &amp; vendor network</text>
                <text x="430" y="218" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" fill="#111111">Scaled execution, lower-complexity claims</text>

                <text x="430" y="143" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="700" fill="#111111">Insurer claims experts</text>
                <text x="430" y="158" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fill="#111111">Complex &amp; large-loss claims</text>

                <line x1="430" y1="32" x2="430" y2="50" stroke="rgba(17,17,17,0.35)" strokeWidth="1.2" />
                <text x="430" y="14" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="700" fill="#111111">Litigation &amp; technical specialists</text>
                <text x="430" y="28" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fill="#111111">Highest stakes per decision</text>

                <line x1="760" y1="290" x2="760" y2="50" stroke="rgba(17,17,17,0.25)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <defs>
                  <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="rgba(17,17,17,0.4)" />
                  </marker>
                </defs>
                <text x="770" y="170" fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" fill="rgba(17,17,17,0.5)" transform="rotate(-90 770 170)" textAnchor="middle">Judgement concentration increases &rarr;</text>

                <text x="130" y="315" fontFamily="Inter, system-ui, sans-serif" fontSize="10.5" fill="rgba(17,17,17,0.4)">Wide base: highest claim volume</text>
              </svg>
              <p style={{ fontSize: "11px", color: "rgba(17,17,17,0.45)", marginTop: "10px", lineHeight: 1.55 }}><strong style={{ color: "rgba(17,17,17,0.78)" }}>Where claims judgement sits in 2030.</strong> Volume concentrates at the base, where AI and vendor networks absorb scale. Judgement concentrates at the peak, in a smaller core the three trends above are already building toward.</p>
              <p style={{ fontSize: "10px", color: "rgba(17,17,17,0.35)", marginTop: "6px", fontStyle: "italic" }}>Source: Eudaimon Consulting analysis.</p>
            </div>
          </div>

          <p style={{ opacity: 0.92 }}>Followed to their logical end, these three trends converge on the same destination: a smaller core of senior claims judgement, extended by AI on routine volume and supported by external networks for scale, rather than a large generalist in-house claims department. That destination is not guaranteed. Insurers that treat automation purely as a cost-reduction tool, without protecting or developing the senior core, risk arriving at a hollowed-out version of the same model: fewer people, but no more concentrated expertise than before, because the mid-career cohort that should have become that senior core was never properly developed. Which outcome an insurer reaches depends on choices made now, specifically whether it deliberately triages claims by complexity and invests in structured capability transfer, or lets AI and cost pressure make that decision by default.</p>

          {/* SECTION 07 - LEADERSHIP AGENDA */}
          <h2 className="font-display text-[#111] text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#1D6FA4" }}>07 · The Agenda</span>
            What Leaders Should Do Now
          </h2>

          <p style={{ opacity: 0.92 }}>Recommendations that treat this as a hiring campaign will keep losing ground to social inflation and litigation funders. Three horizons matter more.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ ...cardStyle, padding: "20px 24px" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#1D6FA4" }}>Next 12 months &middot; Immediate</p>
              <ul style={{ fontSize: "13.5px", color: "rgba(17,17,17,0.78)", lineHeight: 1.85, paddingLeft: "18px" }}>
                <li>Map the claims workforce by experience band and claim complexity, not headcount alone; most insurers do not actually know where their concentration risk sits.</li>
                <li>Redesign junior and mid-career development so it survives AI absorbing routine files, through deliberate shadowing on complex claims rather than tool rollout alone.</li>
                <li>Formalise TPA and legal panel governance as a named function where network reliance is already increasing, rather than leaving it to individual claims managers.</li>
              </ul>
            </div>
            <div style={{ ...cardStyle, padding: "20px 24px" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#1D6FA4" }}>1&ndash;3 years &middot; Capability building</p>
              <ul style={{ fontSize: "13.5px", color: "rgba(17,17,17,0.78)", lineHeight: 1.85, paddingLeft: "18px" }}>
                <li>Build structured capability transfer programmes that compress the path from mid-career to senior judgement, rather than relying on informal mentoring.</li>
                <li>Direct AI investment at clearing routine volume from senior desks specifically, to build leverage rather than primarily to cut headcount.</li>
                <li>Establish complexity-based triage so senior judgement is deployed only where it earns its cost.</li>
              </ul>
            </div>
            <div style={{ ...cardStyle, padding: "20px 24px" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#1D6FA4" }}>3&ndash;5 years &middot; Operating model redesign</p>
              <ul style={{ fontSize: "13.5px", color: "rgba(17,17,17,0.78)", lineHeight: 1.85, paddingLeft: "18px" }}>
                <li>Redesign the operating model deliberately toward the expertise-concentration model, rather than drifting into a lean or networked model under cost pressure alone.</li>
                <li>Build reserving and litigation governance that assumes a smaller, more concentrated senior bench, with clear escalation for network-executed claims.</li>
                <li>Report claims capability to the board alongside loss ratio and combined ratio, as a franchise-value metric rather than a purely operational one.</li>
              </ul>
            </div>
          </div>

          {/* CONCLUSION */}
          <h2 className="font-display text-[#111] text-2xl mt-10 mb-2">
            <span className="mono-label text-[10px] block mb-2" style={{ color: "#1D6FA4" }}>Conclusion</span>
            The Answer
          </h2>

          <p style={{ opacity: 0.92 }}>This note opened with a question: is the industry facing a temporary claims talent shortage, or a structural capability gap? The evidence across US, UK and European commercial and specialty insurance points firmly to the second. Entry-level pipelines are, by the LMA&rsquo;s own data, in reasonable health. The task ahead is preserving, transferring and concentrating the judgement that already exists, in an environment where claims decisions carry more financial and reputational weight than they did a decade ago, and where AI raises the value of that judgement rather than removing the need for it. The insurers that outperform over the next decade are unlikely to be those with the largest claims departments. They will be the ones that combine AI leverage, structured capability transfer and a smaller, more concentrated core of technical expertise, deliberately built rather than left to drift.</p>

          {/* SOURCES */}
          <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(17,17,17,0.10)" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "rgba(17,17,17,0.4)" }}>Sources</p>
            <p style={{ fontSize: "11px", color: "rgba(17,17,17,0.4)", lineHeight: 1.8, fontStyle: "italic" }}>
              Lloyd&rsquo;s Market Association, <em>Claims Talent Survey 2025/26</em> &middot; Gallagher Bassett, <em>2026 Carrier Perspective</em> &middot; London Market Group workforce data &middot; industry-cited US insurance attrition estimates commonly attributed to the Bureau of Labor Statistics &middot; Marathon Strategies, corporate nuclear verdict tracking (2024/2025) &middot; Swiss Re Institute, Social Inflation Index and <em>sigma</em> research (2024&ndash;2026) &middot; AM Best, US commercial lines market segment reports (February and June 2026) &middot; APCIA, legal system abuse commentary (2025/2026) &middot; Fitch Ratings, 2026 US P&amp;C sector outlook &middot; European Commission, Collective Redress Directive and Product Liability Directive &middot; UK Civil Justice Council (2025) &middot; Oliver Wyman, generative AI claims analysis (2025) &middot; McKinsey &amp; Company, <em>The Future of AI for the Insurance Industry</em> &middot; Accenture, <em>Pulse of Change</em> &middot; Celent, 2025 claims and customer experience research &middot; Deloitte, <em>Scaling Gen AI in Insurance</em>.
            </p>
          </div>

          {/* DISCLAIMER */}
          <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(17,17,17,0.06)" }}>
            <p style={{ fontSize: "10px", color: "rgba(17,17,17,0.30)", lineHeight: 1.6, fontStyle: "italic" }}>This note is provided for general information purposes only and does not constitute legal, regulatory, actuarial, financial or investment advice. It has been prepared using publicly available sources believed to be reliable at the time of writing; Eudaimon Consulting makes no representation as to their completeness or accuracy and accepts no liability for decisions made in reliance on this content. &copy; 2026 Eudaimon Consulting. All rights reserved. No part of this publication may be reproduced, distributed or transmitted without the prior written permission of Eudaimon Consulting.</p>
          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: "#f3efe7" }}>
        <div className="max-w-3xl mx-auto">
          <div className="h-px mb-16" style={{ background: "linear-gradient(90deg, rgba(230,57,70,0.3), rgba(29,111,164,0.3))" }} />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-[9px] mb-2" style={{ color: "rgba(17,17,17,0.4)" }}>Rethinking your claims operating model?</p>
              <p className="font-display text-[#111] text-2xl">Talk to Eudaimon Consulting.</p>
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
