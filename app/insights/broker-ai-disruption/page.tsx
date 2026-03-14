import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function BrokerAIDisruptionArticle() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div
          className="absolute top-0 right-[20%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(230,57,70,0.7) 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-10"
          >
            <ChevronLeft size={14} />
            Back to Insights
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="mono-label text-[9px] px-3 py-1 rounded-full bg-[#E63946]/15 text-[#E63946]">
              AI Strategy
            </span>
            <span className="mono-label text-white/20 text-[9px]">February 2026</span>
            <div className="flex items-center gap-2 text-white/20">
              <Clock size={11} />
              <span className="mono-label text-[9px]">6 min read</span>
            </div>
          </div>

          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            The February 9 Sell-Off: What It Really Means for Insurance Brokers
          </h1>

          <p className="text-white/50 text-xl leading-relaxed border-l-2 border-[#E63946] pl-5">
            When two AI distribution tools launched inside ChatGPT in a single morning, broker stocks fell sharply. Markets reacted with panic. The strategic reality is far more nuanced — and more instructive.
          </p>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* Article body */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-white/70 text-base leading-relaxed">

          <p>
            On February 9, 2026, insurance broker stocks suffered one of their worst single-session declines in years. Willis Towers Watson fell 12% — its worst session since November 2008. Aon hit a 52-week low. Arthur J. Gallagher dropped nearly 10%. The catalyst: two AI-powered insurance distribution tools launched simultaneously inside OpenAI's ChatGPT, putting personalised insurance quotes in front of 800 million weekly users.
          </p>

          <p>
            Markets saw disruption and sold first. The wiser question is: disruption of what, exactly — and for whom?
          </p>

          {/* Market reaction stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
            {[
              { val: "-12.0%", label: "Willis Towers Watson", note: "Worst session since 2008" },
              { val: "-9.9%", label: "Arthur J. Gallagher", note: "" },
              { val: "-9.3%", label: "Aon", note: "Hit 52-week low" },
              { val: "-7.0%", label: "Marsh McLennan", note: "" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-4">
                <p className="font-display text-[#E63946] text-2xl font-bold">{s.val}</p>
                <p className="text-white/60 text-xs mt-1 font-medium">{s.label}</p>
                {s.note && <p className="text-white/30 text-xs mt-1">{s.note}</p>}
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">The critical distinction markets missed</h2>

          <p>
            The AI tools that triggered the sell-off — Insurify's comparison app and Tuio's direct quoting capability — both target personal lines: auto and home insurance. This is a commoditised, high-volume, low-complexity market where comparison and price transparency have genuine consumer value.
          </p>

          <p>
            Here is the critical fact markets appeared to overlook: Marsh McLennan, Aon, and Willis Towers Watson derive between 80% and 90% of their revenues from commercial lines, specialty insurance, reinsurance, and consulting. These are not businesses that a ChatGPT comparison widget can disintermediate.
          </p>

          {/* Pull quote */}
          <div className="border-t border-b border-white/10 py-8 my-10">
            <p className="font-display text-white text-xl italic leading-relaxed">
              "The sell-off was overblown. ChatGPT apps target personal lines while the major public brokers derive most of their revenue from commercial lines requiring human expertise."
            </p>
            <p className="text-white/30 text-sm mt-4">— Wolfe Research, February 2026</p>
          </div>

          {/* Revenue breakdown */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Where the revenue actually comes from</h2>

          <p>
            To understand why the sell-off was an overreaction, you need to look at the revenue structure of the three largest brokers.
          </p>

          <div className="space-y-4 my-8">
            {[
              { name: "Marsh McLennan", rev: "$26.2bn", breakdown: "51% commercial broking, 10% reinsurance, 37% consulting", exposure: "~2-3%" },
              { name: "Aon", rev: "$17.2bn", breakdown: "54% commercial risk, 13% reinsurance, 33% human capital", exposure: "~5%" },
              { name: "Willis Towers Watson", rev: "$9.7bn", breakdown: "48% corporate risk & broking, 32% health & career", exposure: "Exited — sold TRANZACT Jan 2025" },
            ].map((b) => (
              <div key={b.name} className="glass rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <p className="font-display text-white text-lg">{b.name}</p>
                  <p className="font-display text-[#F4A01C] text-lg">{b.rev}</p>
                </div>
                <p className="text-white/50 text-sm mb-2">{b.breakdown}</p>
                <div className="flex items-center gap-2">
                  <span className="mono-label text-[9px] text-white/30">Personal lines exposure:</span>
                  <span className="mono-label text-[9px] text-[#E63946]">{b.exposure}</span>
                </div>
              </div>
            ))}
          </div>

          <p>
            Willis Towers Watson's story is particularly instructive. The firm sold its only significant direct-to-consumer business — TRANZACT, a Medicare insurance distribution platform — in January 2025, realising a pre-tax impairment loss of over $1 billion. That exit, painful at the time, now looks prescient. WTW's leadership had already concluded that personal lines distribution was a non-core, structurally challenged business.
          </p>

          {/* Risk matrix */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">AI disruption risk by segment</h2>

          <p>
            Not all broker revenue is equally exposed. The risk varies significantly by segment.
          </p>

          <div className="my-8 space-y-2">
            <div className="grid grid-cols-3 gap-3 mb-3">
              <p className="mono-label text-white/30 text-[9px] col-span-2">Segment</p>
              <p className="mono-label text-white/30 text-[9px]">AI disruption risk</p>
            </div>
            {[
              { seg: "Large commercial risk broking (Fortune 500)", risk: "Very Low", color: "#3B6D11", bg: "rgba(59,109,17,0.15)" },
              { seg: "Specialty / E&S — cyber, D&O, construction", risk: "Very Low", color: "#3B6D11", bg: "rgba(59,109,17,0.15)" },
              { seg: "Reinsurance broking", risk: "Very Low", color: "#3B6D11", bg: "rgba(59,109,17,0.15)" },
              { seg: "Middle-market commercial P&C", risk: "Low–Medium", color: "#F4A01C", bg: "rgba(244,160,28,0.15)" },
              { seg: "SME / small commercial retail broking", risk: "Medium", color: "#F4A01C", bg: "rgba(244,160,28,0.15)" },
              { seg: "Employee benefits administration", risk: "Medium", color: "#F4A01C", bg: "rgba(244,160,28,0.15)" },
              { seg: "Direct-to-consumer personal lines", risk: "High", color: "#E63946", bg: "rgba(230,57,70,0.15)" },
            ].map((r) => (
              <div key={r.seg} className="grid grid-cols-3 gap-3 items-center py-3 border-b border-white/5">
                <p className="text-white/60 text-sm col-span-2">{r.seg}</p>
                <span
                  className="mono-label text-[9px] px-3 py-1 rounded-full w-fit"
                  style={{ color: r.color, background: r.bg }}
                >
                  {r.risk}
                </span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-2xl mt-10 mb-4">The real AI story: augmentation, not displacement</h2>

          <p>
            For specialty insurers, reinsurers, and large commercial brokers, the more relevant AI story is entirely internal. McKinsey estimates generative AI could unlock $50–70 billion of insurance industry revenue globally, with the highest near-term impact in marketing, sales support, and customer operations.
          </p>

          <p>
            Early evidence is compelling. One US agency deploying an AI platform reported average staff time savings of 7.5 hours per week and a 244% ROI. Aon has partnered with DataRobot on agentic AI for client onboarding and servicing. Marsh McLennan launched its internal generative AI tool, LenAI. WTW is investing in AI across its Corporate Risk & Broking and Insurance Consulting & Technology segments.
          </p>

          <p>
            The investment thesis for large brokers is therefore AI as operating leverage — revenue per producer rising as service costs fall — rather than a story of displacement.
          </p>

          {/* Three questions */}
          <h2 className="font-display text-white text-2xl mt-10 mb-6">Three questions every board should be asking</h2>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Where is our personal lines exposure?",
                body: "Not all brokers are equal. Firms with meaningful SME or retail books face genuine near-term pressure on commission economics. Quantify it honestly before the market does it for you.",
              },
              {
                num: "02",
                title: "Are we capturing AI as operating leverage?",
                body: "The efficiency gains available through AI in underwriting support, claims, and client servicing are substantial. The question is not whether to adopt — it is how fast and where first.",
              },
              {
                num: "03",
                title: "What new risks are we positioned to underwrite?",
                body: "AI liability, autonomous systems, and algorithmic risk are emerging as significant new specialty lines. Early movers in these categories will define the next generation of specialty insurance.",
              },
            ].map((q) => (
              <div key={q.num} className="glass rounded-xl p-6 flex gap-5">
                <span className="font-mono text-[#E63946]/40 text-2xl font-bold flex-shrink-0">{q.num}</span>
                <div>
                  <p className="font-display text-white text-lg mb-2">{q.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{q.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="glass rounded-xl p-8 mt-10">
            <p className="mono-label text-[#E63946] text-[9px] mb-4">Summary</p>
            <p className="text-white/70 leading-relaxed">
              The February 9 sell-off was a market overreaction to a personal lines distribution innovation. MMC, Aon, and WTW derive 80–90% of revenues from commercial lines, specialty, reinsurance, and consulting — all with low near-term disintermediation risk. For large brokers, AI is overwhelmingly a story of augmentation and operating leverage, not displacement. The genuinely exposed segments — SME retail and personal lines — represent a small fraction of the major brokers' revenue base.
            </p>
          </div>

          <p className="text-white/30 text-xs mt-10 leading-relaxed">
            Sources: Marsh McLennan Q4 2024 earnings; Aon 2024 10-K; WTW Q4 2024 earnings; MarshBerry Broker Composite Index; McKinsey AI in Insurance (Feb 2026); Wolfe Research; Bloomberg Intelligence. This article does not constitute investment advice.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/30 text-[9px] mb-2">Want to discuss the strategic implications?</p>
              <p className="font-display text-white text-2xl">Talk to Eudaimon Consulting.</p>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-7 py-3.5 bg-[#E63946] text-white rounded-full font-medium hover:bg-[#c92a35] transition-all flex-shrink-0"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
