import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function InsuranceMAFinancingArticle() {
  const deals = [
    {
      name: "Zurich / Beazley",
      year: "2026",
      value: "USD 10.8bn",
      color: "#1D6FA4",
      premium: "~60%",
      ptbv: "2.7x TBV",
      primaryFunding: "Equity raise (USD 5bn ABB)",
      newEquity: "Yes — 4.3% dilution",
      newDebt: "Yes — new facilities",
      assetDisposal: "No",
      keyFact: "Beazley FY2024 profit: USD 1.42bn (record)",
    },
    {
      name: "AXA / XL Group",
      year: "2018",
      value: "USD 15.3bn",
      color: "#3B6D11",
      premium: "~33%",
      ptbv: "~1.7x TBV",
      primaryFunding: "Asset disposal — AXA US IPO (~EUR 6bn)",
      newEquity: "No",
      newDebt: "EUR 3bn subordinated debt",
      assetDisposal: "Yes — AXA US L&S / AllianceBernstein",
      keyFact: "Strategic pivot from L&S to P&C without shareholder dilution",
    },
    {
      name: "ACE / Chubb",
      year: "2015–16",
      value: "USD 28.3bn",
      color: "#854F0B",
      premium: "~30%",
      ptbv: "~1.6x TBV",
      primaryFunding: "Cash + USD 5.3bn senior notes + ACE stock",
      newEquity: "Yes — 30% target stake",
      newDebt: "USD 5.3bn senior notes",
      assetDisposal: "No",
      keyFact: "Post-deal D/Capital targeted at ~20% — within investment-grade",
    },
    {
      name: "Sompo / Aspen",
      year: "2025–26",
      value: "USD 3.5bn",
      color: "#606060",
      premium: "~36%",
      ptbv: "~1.3x TBV",
      primaryFunding: "100% internal capital",
      newEquity: "No",
      newDebt: "No",
      assetDisposal: "No",
      keyFact: "Sompo market cap ~USD 34bn — deal within self-financing range",
    },
  ];

  const frameworks = [
    {
      num: "01",
      color: "#1D6FA4",
      title: "Debt — the default for modest deals",
      when: "Deal size below 30–40% of acquirer equity; low interest rates; target earnings cover debt service by year 2–3.",
      consideration: "Breaks down when premium-to-book exceeds 2x or leverage is already near its limit.",
      example: "ACE/Chubb: USD 5.3bn senior notes at A/A3 rating in low-rate 2015 environment.",
    },
    {
      num: "02",
      color: "#1D6FA4",
      title: "Equity raise — when the ticket is too large",
      when: "Deal size exceeds 40–50% of acquirer equity, or premium-to-book above 2.5x. SST/Solvency II ratio would breach internal floors.",
      consideration: "Dilutive but preserves credit rating and solvency. Usually accelerated bookbuild for speed.",
      example: "Zurich/Beazley: USD 5bn ABB, 4.3% dilution — still guided EPS-accretive from Year 1.",
    },
    {
      num: "03",
      color: "#3B6D11",
      title: "Asset disposal — the elegant solution",
      when: "A non-core asset of sufficient scale and liquidity exists. Planned disposal aligns with deal timing.",
      consideration: "Avoids both dilution and new leverage. Risk: IPO process can slip, creating bridging debt exposure.",
      example: "AXA/XL: AXA US L&S IPO raised ~EUR 6bn — a planned exit turned into acquisition currency.",
    },
    {
      num: "04",
      color: "#606060",
      title: "Internal capital — the Japanese model",
      when: "Acquirer in mature, cash-generative domestic market with limited reinvestment needs. Low P/E makes equity issuance highly dilutive.",
      consideration: "Specific to groups like Sompo, MS&AD, Tokio Marine accumulating domestic surpluses.",
      example: "Sompo/Aspen: USD 3.5bn from internal capital at ~8x P/E — equity issuance would have been dilutive.",
    },
  ];

  const ptbvBars = [
    { deal: "Sompo / Aspen", ptbv: "1.3x", premium: "36%", mode: "Internal capital", color: "#606060", bar: 48 },
    { deal: "ACE / Chubb", ptbv: "~1.6x", premium: "30%", mode: "Cash + debt + stock", color: "#854F0B", bar: 59 },
    { deal: "AXA / XL", ptbv: "~1.7x", premium: "33%", mode: "Asset disposal", color: "#3B6D11", bar: 63 },
    { deal: "Zurich / Beazley", ptbv: "2.7x", premium: "60%", mode: "Equity raise required", color: "#1D6FA4", bar: 100 },
  ];

  const cashVsStock = [
    { factor: "Target performance", cash: "Record profits and clear standalone growth — no need to share upside with acquirer", stock: "Reserve uncertainty or structural dependency on a new parent" },
    { factor: "Premium level", cash: "Above 35–40% premium — target has crystallised significant value, demands certainty", stock: "Modest premium — shareholders willing to participate in combined upside" },
    { factor: "Acquirer quality", cash: "Target shareholders do not want exposure to acquirer's specific risks or business mix", stock: "High-quality acquirer with similar risk profile — ACE and Chubb were both P&C insurers" },
    { factor: "Shareholder base", cash: "PE-backed or momentum investors require clean cash exits — Apollo in Aspen", stock: "Long-only value investors willing to hold acquirer stock for the long term" },
    { factor: "Competitive dynamics", cash: "Multiple bidders — all-cash removes uncertainty and beats competing offers", stock: "Single bidder, no competitive tension — seller accepts stock for a share of upside" },
  ];

  const keyInsights = [
    { num: "01", title: "Financing structure is a strategic signal", body: "An equity raise signals: we want this asset but the scale exceeds comfortable self-financing. An internal capital deal signals: this is within our normal capital cycle. A disposal-funded deal signals portfolio transformation — rebalancing, not just adding." },
    { num: "02", title: "Specialty insurance commands structural premiums", body: "All four targets are specialty-focused. Their premium valuations reflect durable underwriting margins and expertise barriers. Acquiring specialty platforms consistently requires above-average price-to-book multiples, pushing financing toward equity-heavy structures." },
    { num: "03", title: "Solvency frameworks shape European deal structures", body: "European insurers under Solvency II and Swiss SST face explicit regulatory capital constraints. The SST impact of Zurich/Beazley (−30pp) was disclosed upfront and built into the deal rationale — materially different from US-domiciled acquirers where leverage ratios are the binding constraint." },
    { num: "04", title: "Beazley is a masterclass in target negotiating leverage", body: "Record USD 1.42bn profit, 74.8% combined ratio, clear standalone growth in cyber and E&S, no structural pressure to sell. This combination allowed Beazley to extract a 60% premium to market and 35% to its own all-time high — entirely in cash." },
    { num: "05", title: "The unifying principle", body: "The more exceptional a target's quality and the higher the premium demanded, the more equity-heavy the financing structure will be — because neither debt nor internal capital can absorb the cost of a world-class franchise at a significant premium to book without compromising the acquirer's financial standing." },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-[20%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-10" style={{ background: "radial-gradient(circle, rgba(29,111,164,0.7) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto">
          <Link href="/insights" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-10">
            <ChevronLeft size={14} />
            Back to Insights
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="mono-label text-[9px] px-3 py-1 rounded-full bg-[#1D6FA4]/15 text-[#1D6FA4]">M&A Strategy</span>
            <span className="mono-label text-white/20 text-[9px]">March 2026</span>
            <div className="flex items-center gap-2 text-white/20">
              <Clock size={11} />
              <span className="mono-label text-[9px]">7 min read</span>
            </div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            How Insurance Giants Finance Mega-Deals: The Zurich/Beazley Playbook
          </h1>
          <p className="text-white/50 text-xl leading-relaxed border-l-2 border-[#1D6FA4] pl-5">
            Four landmark deals. Four different financing approaches. One unifying insight: the quality of the target determines the structure of the deal.
          </p>
          <p className="text-white/30 text-xs mt-6">Based on publicly available company filings, earnings releases and analyst reports. Does not constitute investment advice. Eudaimon Consulting, March 2026.</p>
        </div>
      </section>

      <div className="divider-gradient" />

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-white/70 text-base leading-relaxed">

          <p>On 2 March 2026, Zurich Insurance Group announced an £8.1 billion all-cash offer for Beazley — one of the highest-valued specialty insurance transactions in recent history. The deal was financed through a USD 5 billion equity raise, new debt facilities, and Zurich's existing cash. It was bold, expensive, and structurally revealing.</p>
          <p>How large insurers finance acquisitions is not just a technical question — it is a strategic signal. The choice between equity, debt, asset disposal, and internal capital tells you as much about the acquirer's confidence, constraints, and strategic intent as the deal rationale itself.</p>
          <p>We examine four landmark transactions spanning a decade and USD 58 billion of aggregate consideration to identify the framework behind these choices.</p>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">The four deals at a glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {deals.map((d) => (
              <div key={d.name} className="glass rounded-xl p-4">
                <p className="font-display text-2xl font-bold" style={{ color: d.color }}>{d.value}</p>
                <p className="text-white/60 text-xs mt-1 font-medium">{d.name}</p>
                <p className="text-white/30 text-xs">{d.year}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-6">Deal-by-deal breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
            {deals.map((d) => (
              <div key={d.name} className="glass rounded-2xl p-6" style={{ borderTop: `3px solid ${d.color}` }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-display text-white text-lg">{d.name}</p>
                    <p className="mono-label text-white/30 text-[9px] mt-0.5">{d.year}</p>
                  </div>
                  <p className="font-display text-xl font-bold" style={{ color: d.color }}>{d.value}</p>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Premium to market", val: d.premium },
                    { label: "Price / book value", val: d.ptbv },
                    { label: "Primary funding", val: d.primaryFunding },
                    { label: "New equity issued?", val: d.newEquity },
                    { label: "New debt?", val: d.newDebt },
                    { label: "Asset disposal?", val: d.assetDisposal },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-start py-2 border-b border-white/5 last:border-0">
                      <span className="text-white/40 text-xs">{row.label}</span>
                      <span className="text-white/70 text-xs text-right ml-4 font-medium max-w-[55%]">{row.val}</span>
                    </div>
                  ))}
                  <div className="mt-3 pt-2 border-t border-white/10">
                    <p className="text-white/30 text-xs italic">{d.keyFact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-b border-white/10 py-8 my-10">
            <p className="font-display text-white text-xl italic leading-relaxed">"At 2.7x TBV, equity issuance was not merely preferable — it was effectively required to maintain Zurich's investment-grade and solvency profile."</p>
            <p className="text-white/30 text-sm mt-4">— Eudaimon Consulting analysis</p>
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">Price-to-book drives the financing decision</h2>
          <p>The pattern across all four deals is consistent. Low price-to-book deals (1.3–1.7x) can be funded with cash, debt, or internal capital. Cross approximately 2.5x book and equity issuance becomes structurally necessary rather than merely preferable.</p>
          <div className="space-y-3 my-8">
            {ptbvBars.map((d) => (
              <div key={d.deal} className="glass rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-white/80 text-sm font-medium">{d.deal}</p>
                    <p className="text-white/40 text-xs mt-0.5">{d.mode}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg font-bold" style={{ color: d.color }}>{d.ptbv}</p>
                    <p className="text-white/30 text-xs">{d.premium} premium</p>
                  </div>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${d.bar}%`, background: d.color }} />
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-6">The financing decision framework</h2>
          <p>Each financing mode has a distinct logic and a set of conditions under which it prevails.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
            {frameworks.map((f) => (
              <div key={f.num} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-2xl font-bold" style={{ color: `${f.color}60` }}>{f.num}</span>
                  <p className="font-display text-white text-lg leading-tight">{f.title}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="mono-label text-[9px] mb-1" style={{ color: f.color }}>When it works</p>
                    <p className="text-white/50 text-sm leading-relaxed">{f.when}</p>
                  </div>
                  <div>
                    <p className="mono-label text-[9px] mb-1 text-white/30">Key consideration</p>
                    <p className="text-white/40 text-sm leading-relaxed">{f.consideration}</p>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <p className="mono-label text-[9px] mb-1 text-white/20">Example</p>
                    <p className="text-white/30 text-xs italic leading-relaxed">{f.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-6">When does the target insist on cash?</h2>
          <p>This is one of the most underanalysed dimensions of insurance M&A. Beazley's ability to demand all cash at a 60% premium illustrates the negotiating power available to a genuinely exceptional target.</p>
          <div className="space-y-3 my-8">
            {cashVsStock.map((r) => (
              <div key={r.factor} className="glass rounded-xl p-5">
                <p className="mono-label text-[#1D6FA4] text-[9px] mb-3">{r.factor}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-[#E63946]/5 rounded-lg p-3 border border-[#E63946]/20">
                    <p className="mono-label text-[#E63946] text-[9px] mb-1">Cash demanded</p>
                    <p className="text-white/50 text-xs leading-relaxed">{r.cash}</p>
                  </div>
                  <div className="bg-[#3B6D11]/5 rounded-lg p-3 border border-[#3B6D11]/20">
                    <p className="mono-label text-[#3B6D11] text-[9px] mb-1">Stock may be accepted</p>
                    <p className="text-white/50 text-xs leading-relaxed">{r.stock}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-6">Five strategic insights</h2>
          <div className="space-y-4">
            {keyInsights.map((q) => (
              <div key={q.num} className="glass rounded-xl p-6 flex gap-5">
                <span className="font-mono text-[#1D6FA4]/40 text-2xl font-bold flex-shrink-0">{q.num}</span>
                <div>
                  <p className="font-display text-white text-lg mb-2">{q.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{q.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-8 mt-10">
            <p className="mono-label text-[#1D6FA4] text-[9px] mb-4">Summary</p>
            <p className="text-white/70 leading-relaxed">Insurance M&A financing reflects the intersection of regulatory capital frameworks, leverage constraints, strategic portfolio logic, market conditions, and target quality. The four transactions examined here — spanning USD 58 billion and a decade — each arrived at a distinctive financing architecture. The unifying principle: the more exceptional a target's quality and the higher the premium demanded, the more equity-heavy the financing structure will be.</p>
          </div>

          <p className="text-white/30 text-xs mt-10 leading-relaxed">Based on publicly available information including company regulatory filings, earnings releases, Bloomberg, Reuters, Insurance Journal, MarshBerry and analyst reports. All financial data sourced from published reports as of transaction announcement dates. This article does not constitute investment advice. Eudaimon Consulting, March 2026.</p>
        </div>
      </article>

      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/30 text-[9px] mb-2">Exploring an acquisition? Let us help.</p>
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
