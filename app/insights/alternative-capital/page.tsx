import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alternative Capital in Global Insurance and Reinsurance: Evolution, Current State, and Market Impact — 2005 to 2026",
  description: "Alternative capital grew from under $20bn in 2005 to $136bn by end-2025. This institutional research note examines the structural evolution of ILS, the drivers of the current soft market, and the strategic implications for cedants, reinsurers, and ILS managers.",
  openGraph: {
    title: "Alternative Capital in Global Insurance and Reinsurance: Evolution, Current State, and Market Impact — 2005 to 2026",
    description: "Alternative capital grew from under $20bn in 2005 to $136bn by end-2025. Strategic implications for cedants, reinsurers, and ILS managers navigating the current soft market.",
    url: "https://www.eudaimonconsulting.com/insights/alternative-capital",
    type: "article",
    images: [{ url: "/assets/logo.jpg" }],
  },
  alternates: {
    canonical: "https://www.eudaimonconsulting.com/insights/alternative-capital",
  },
};
import Link from "next/link";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";

export default function AlternativeCapitalArticle() {

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "16px",
    padding: "24px",
  };

  const execBullets = [
    "Alternative capital — primarily catastrophe bonds, collateralised reinsurance, and ILS funds — grew from under $20bn in 2005 to $136bn by year-end 2025, an 18% increase in a single year driven by record cat bond issuance of $25.6bn and strong sidecar expansion. The outstanding cat bond market reached $61.3bn at end-2025, a 24% increase on 2024.",
    "The soft market is no longer a risk scenario — it is the current reality. Guy Carpenter's Global Property Catastrophe Rate-on-Line Index fell 12% at January 2026 renewals and a further 14% after April 2026, the steepest US decline since 2014. Howden Re recorded risk-adjusted property cat declines of 14.7% at January 2026, with retrocession down 16.5%.",
    "Total dedicated reinsurance capital reached $785bn at year-end 2025 (Aon), up 10% in the year. Traditional reinsurer ROE of 17.6% in 2025 generated record retained earnings simultaneously with ILS inflows growing 18%. Both sources of capital are at all-time highs at the same moment.",
    "Guy Carpenter projects a further $50bn entering the reinsurance sector between 2025 and 2027. With insured cat losses of $121bn in 2025 — 18% below the five-year inflation-adjusted average — there is no loss-driven mechanism to absorb this capital and reset pricing upward in the near term.",
  ];

  const stats = [
    { val: "$136bn", label: "Alt capital at year-end 2025, up 18% on 2024 (Aon)", color: "#E63946" },
    { val: "$61.3bn", label: "Cat bonds outstanding, year-end 2025 — all-time record (Artemis)", color: "#1D6FA4" },
    { val: "$25.6bn", label: "Record cat bond issuance in 2025, up 45% year-on-year (Artemis)", color: "#3B6D11" },
    { val: "$785bn", label: "Total dedicated reinsurance capital, year-end 2025 (Aon)", color: "#854F0B" },
  ];

  const phases = [
    { phase: "Phase 1 · 2005–2010", title: "Proof of concept", body: "Hurricanes Katrina, Rita, and Wilma in 2005 generated $83bn in insured losses. Cat bonds in force paid out on triggered tranches — the structures held under real stress. This validated the model for institutional investors. Outstandings grew from approximately $9bn in 2005 to $13bn by end-2010: modest but on proven foundations." },
    { phase: "Phase 2 · 2011–2016", title: "Institutional adoption", body: "Post-2008 zero interest rates forced pension funds and endowments to seek alternative yield. Dedicated ILS managers — Nephila Capital, Fermat Capital Management, Credit Suisse Asset Management ILS — created institutional-grade vehicles. Total ILS capital roughly tripled from 2010 to 2015, reaching approximately $60bn. Collateralised reinsurance, less transparent but higher-yielding than cat bonds, drove most of this growth." },
    { phase: "Phase 3 · 2017–2020", title: "Loss cycle and structural test", body: "Hurricanes Harvey, Irma, and Maria in 2017, then Typhoon Jebi in 2018, produced the first significant ILS loss cycle since Katrina. Several funds had capital trapped for 12 to 24 months. Basis risk became visible where parametric triggers diverged from actual insured losses. The market did not unwind: ILS capital recovered to approximately $96bn by end-2020, demonstrating real resilience. Survivors were distinguished by model quality and contract clarity, not size." },
    { phase: "Phase 4 · 2021–2024", title: "Hard market and record inflows", body: "The 2022–2024 hard market made ILS significantly more attractive. Cat bond spreads reached their widest since 2012. Annual issuance hit records in both 2023 ($16.4bn) and 2024 ($17.7bn). Total alternative capital reached $107bn at end-2024." },
    { phase: "Phase 5 · 2025", title: "Acceleration and market-wide records", body: "2025 was the most active year in the cat bond market's history. Annual issuance reached $25.6bn — a 45% increase on 2024. The outstanding cat bond market grew 24% to $61.3bn. Fifteen new sponsors entered the market for the first time. Total alternative capital reached $136bn — an 18% increase in a single year, the fastest annual growth since institutional adoption began." },
  ];

  const rationales = [
    { num: "1", title: "Capital efficiency", body: "Transferring peak catastrophe risk to fully collateralised structures reduces the solvency capital requirement under Solvency II. For Lloyd's syndicates, it reduces Funds at Lloyd's, releasing capital for other deployment. This is the most consistently cited rationale and has driven the majority of Lloyd's-linked ILS activity since 2015." },
    { num: "2", title: "Volatility management", body: "Multi-year cat bonds provide protection at locked-in pricing over three to five years. For cedants with concentrated US hurricane or Japan earthquake exposure, this smooths earnings over planning horizons. Guy Carpenter noted at January 2026 that cedants are using aggregate covers and quota shares alongside cat bonds to broaden the hedge." },
    { num: "3", title: "Cycle positioning", body: "Sophisticated cedants use ILS asymmetrically: buying multi-year protection at hard-market pricing ahead of anticipated softening, then shifting to traditional reinsurance when ILS spreads compress. The 2026 soft market is the first live test of this strategy for cedants who locked in 2023–2024 pricing." },
    { num: "4", title: "Growth without equity dilution", body: "Fronting carriers and MGAs use ILS-backed capacity to grow premium volumes without raising equity. Guy Carpenter confirmed at January 2026 renewals that half of the 5–10% increase in cedant demand was directed at aggregate products, cat quota shares, or ILS alternatives — signalling that this structural use is expanding, not contracting, even as pricing softens." },
  ];

  const rateChanges = [
    { line: "Global Property Cat ROL Index (Jan 2026)", change: "–12%", color: "#E63946", pct: 60 },
    { line: "Howden Re risk-adjusted property cat (Jan 2026)", change: "–14.7%", color: "#E63946", pct: 74 },
    { line: "Retrocession (Jan 2026)", change: "–16.5%", color: "#E63946", pct: 83 },
    { line: "US property cat index year-to-date (Apr 2026)", change: "–14%", color: "#E63946", pct: 70 },
    { line: "Excess capacity at Jan 2026 renewal", change: ">25%", color: "#854F0B", pct: 100 },
  ];

  const marketRisks = [
    "Prolonged soft market compresses cat bond spreads below pension fund hurdle rates of 6–8%; redemption pressure follows",
    "Correlated multi-peril loss season traps collateral — redemption gates were triggered in 2018 and remain a structural risk in open-ended funds",
    "Climate-driven secondary peril losses (wildfire, flood, hail) are consistently undermodelled; LA wildfire 2025 loss creep is still being finalised",
    "Cat bond softening accelerating: Lane Financial noted falling prices eroding returns in early 2026 following spread compression",
    "Pricing inadequacy risk in growing specialty ILS classes lacking the historical loss data that property cat models rely on",
  ];

  const structuralRisks = [
    "Top-five ILS managers hold an estimated 50%+ of dedicated ILS AUM — concentration creates systemic redemption risk",
    "Post-event loss creep has inflated initial estimates by 20–40% since 2017; inflation-adjusted collateral erosion is not fully accounted for in current pricing",
    "ESMA's UCITS cat bond recommendation (under review by European Commission as of 2026) creates regulatory uncertainty for EU-domiciled ILS fund distribution",
    "Sidecar expansion into longer-tailed portfolios introduces duration mismatch and model complexity for investors accustomed to short-tail property cat",
    "Cat bond documentation quality remains uneven; 2017–2018 trigger ambiguity issues have not been fully standardised across the market",
  ];

  const investorRisks = [
    "Investors entering at 2023–2024 peak spreads face mark-to-market losses if spreads compress 200–300 basis points as the soft market deepens",
    "Stone Ridge ILS mutual funds delivered 33% and 14.27% total returns in 2025 — high returns attracting capital that may lack the loss-cycle tolerance of institutional ILS allocators",
    "ESMA's classification review and ESG scrutiny of certain peril types are beginning to create friction in European pension fund ILS allocation processes",
    "Fee compression as spreads narrow — Gallagher Re noted 2026 will be shaped by new participants expanding perils, increasing competitive pressure on established managers",
    "Correlation between capital markets stress and large nat cat events is non-zero; the assumption of full return uncorrelation requires ongoing validation",
  ];

  const ilsGrowth = [
    { year: "2005", cat: 8, other: 2 },
    { year: "2007", cat: 15, other: 5 },
    { year: "2010", cat: 13, other: 10 },
    { year: "2013", cat: 20, other: 25 },
    { year: "2016", cat: 25, other: 40 },
    { year: "2019", cat: 30, other: 48 },
    { year: "2022", cat: 36, other: 58 },
    { year: "2024", cat: 49, other: 58 },
    { year: "2025", cat: 61, other: 75 },
  ];

  const scenarios = [
    {
      label: "Base case",
      color: "#1D6FA4",
      bg: "rgba(29,111,164,0.08)",
      body: "ILS capital grows to $160–175bn by 2030. Property cat pricing softens a further 10–15% from current levels before stabilising in 2027–2028. Specialty ILS grows but remains below $20bn. Cyber ILS scales gradually, reaching $5–8bn by 2030. ILS manager consolidation reduces active fund count by approximately one-third. Cedants with in-house analytics and established relationships extract value; smaller MGAs face margin compression.",
    },
    {
      label: "Bull case",
      color: "#3B6D11",
      bg: "rgba(59,109,17,0.08)",
      body: "Pension fund ILS allocations increase to 1–2% of AUM as falling bond yields improve the relative return of uncorrelated assets. Cyber ILS scales to $15–20bn following a bounded but validating cyber loss event. New parametric programmes in emerging markets open a $25bn+ addressable market. Total ILS reaches $200–210bn by 2030. Bermuda Stock Exchange ILS listings surpass $100bn.",
    },
    {
      label: "Bear case",
      color: "#E63946",
      bg: "rgba(230,57,70,0.08)",
      body: "A correlated multi-peril loss season in 2026 or 2027 produces aggregate insured losses exceeding $200bn and directly penetrates elevated attachment points. Widespread trapped capital triggers investor redemptions across collateralised funds. ILS contracts to $95–105bn. Ten to fifteen mid-sized managers exit. A hard market follows — potentially the sharpest since 2005 — with traditional reinsurers and well-capitalised Bermuda platforms as primary beneficiaries.",
    },
  ];

  const footnotes = [
    "Artemis Deal Directory. Cat Bond & ILS Market Statistics Q4 2025. Year-end 2010 outstanding figure.",
    "Swiss Re Sigma. \"Insurance-Linked Securities: A Niche Market Expanding.\" 2014. ILS capital estimates 2010–2015.",
    "Aon Securities. ILS Annual Report 2020. Alternative Capital in the Reinsurance Market post-2017 cycle.",
    "Artemis. Q4 2024 Cat Bond & ILS Market Report. Full-year 2024 issuance of $17.7bn; year-end 2024 outstanding of $49.5bn; AM Best / Guy Carpenter year-end 2024 alternative capital estimate of $107bn.",
    "Artemis. Q4 and Full Year 2025 Cat Bond & ILS Market Report, January 2026. Record annual issuance of $25.6bn; year-end 2025 outstanding of $61.3bn; 15 new sponsors in 2025.",
    "Aon Reinsurance Solutions. January 2026 Reinsurance Capital Update. Alternative capital $136bn at year-end 2025, up 18% in 2025; total reinsurance capital $785bn.",
    "Swiss Re Institute. \"The Investors Behind ILS.\" Sigma Working Paper 2023. Pension fund share estimated at 30–40% of dedicated ILS AUM.",
    "Artemis. Q2 2025 Cat Bond Market Report. Indemnity trigger share at 82% of Q2 2025 issuance, up from 75% in 2024.",
    "Artemis. \"Catastrophe Bond Market Records Set in Q4 2025,\" January 2026. Beazley PoleStar Re $300m cyber cat bond, largest single cyber ILS transaction on record.",
    "Artemis / Guy Carpenter. Global Property Catastrophe Rate-on-Line Index. January 2026 decline of 12% confirmed in Guy Carpenter January 1 2026 Reinsurance Renewal Report.",
    "Howden Re. \"January 1 2026 Reinsurance Renewal Report.\" Risk-adjusted property cat decline of 14.7%; retrocession decline of 16.5%.",
    "Artemis. \"US Property Cat Rates Down 14% in 2026 After April Renewal.\" April 2026. Guy Carpenter US Property Cat ROL Index.",
    "Guy Carpenter. \"January 1 2026 Reinsurance Renewal Report.\" Reinsurer ROE 17.6% for 2025, 16.4% for 2024, 21.9% for 2023.",
    "Aon Reinsurance Solutions. January 2026. Alternative capital Q4 2025 growth of approximately 10%; full-year 2025 growth of 18%.",
    "Guy Carpenter. January 2026 Renewal Report. Insured catastrophe losses of $121bn in 2025, 18% below five-year inflation-adjusted average.",
    "Guy Carpenter. January 2026 Renewal Report. Reinsurers' share of catastrophe losses fell from approximately 20% pre-2023 to approximately 11% in 2025.",
    "Artemis. Bermuda domicile data from ILS deal directory. Estimated 70–75% of cat bond issuance by domicile of SPI, 2022–2025.",
    "Artemis. \"Bermuda Stock Exchange Grows Value of Cat Bond and ILS Listings 16.4% to $65.2bn in 2025.\" January 2026.",
  ];

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
            <span className="mono-label text-[9px] px-3 py-1 rounded-full" style={{ background: "rgba(29,111,164,0.2)", color: "#60a5fa" }}>Corporate Strategy</span>
            <span className="mono-label text-[9px] px-3 py-1 rounded-full border border-white/30 text-white">Institutional Research Note</span>
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={11} />
              <span className="mono-label text-[9px]">9 min read</span>
            </div>
          </div>
          <h1 className="font-display text-white text-4xl md:text-5xl leading-tight mb-8">
            Alternative Capital in Global Insurance and Reinsurance: Evolution, Current State, and Market Impact — 2005 to 2026
          </h1>
          <p className="text-white text-xl leading-relaxed border-l-2 border-[#1D6FA4] pl-5">
            The soft market is here. The strategic question is how long it runs, how deep it goes, and which cedants, reinsurers, and ILS managers are structurally positioned to manage through it rather than be exposed by it.
          </p>
          {/* Byline */}
          <div style={{ ...cardStyle, marginTop: "32px", padding: "20px 24px" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Published", val: "May 2026" },
                { label: "Coverage", val: "Global Commercial & Specialty · Reinsurance" },
                { label: "Audience", val: "Insurance C-Suite · Institutional Investors" },
                { label: "Format", val: "Institutional Research Note" },
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
          <div style={{ ...cardStyle, borderLeft: "4px solid #1D6FA4", padding: "28px 32px" }}>
            <p className="mono-label text-[9px] mb-4" style={{ color: "#60a5fa" }}>Executive Summary</p>
            <div className="space-y-3">
              {execBullets.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", paddingBottom: "12px", borderBottom: i < execBullets.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1D6FA4", flexShrink: 0, marginTop: "6px" }} />
                  <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9, margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px", padding: "14px 18px", background: "#E63946", borderRadius: "8px" }}>
              <p className="text-white text-sm font-medium leading-relaxed" style={{ margin: 0 }}>The soft market is here. The strategic question is how long it runs, how deep it goes, and which cedants, reinsurers, and ILS managers are structurally positioned to manage through it rather than be exposed by it.</p>
            </div>
          </div>

          {/* Section 1 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">What problem did alternative capital solve?</h2>
          <p style={{ opacity: 0.9 }}>The ILS market was a direct response to three structural failures in the traditional reinsurance market — failures that became visible and costly at specific moments in recent insurance history.</p>

          <div className="space-y-4">
            {[
              { title: "Capacity shortages after catastrophe events", body: "Hurricane Andrew in August 1992 caused insured losses of approximately $15.5bn — more than double what the industry had modelled. Seventeen US insurers became insolvent. The market withdrew capacity from Florida wind and Gulf Coast exposure for 12 to 18 months. The first catastrophe bonds — Swiss Re and USAA issuances in 1997 — were a direct structural response. Capital markets could hold this risk at scale without the solvency constraints of a licensed reinsurer." },
              { title: "Earnings volatility at primary carriers", body: "Peak catastrophe losses produced earnings swings that unnerved equity investors and rating agencies. A single Atlantic hurricane season could swing a primary insurer's combined ratio by 20 to 30 points. Catastrophe bonds offered multi-year, pre-funded protection — collateral held in trust, not dependent on a counterparty's post-loss solvency. For finance directors managing earnings guidance, this was a qualitatively different proposition from unsecured reinsurance credit." },
              { title: "Peak risk concentration in a small counterparty base", body: "By the early 2000s, the top 10 global reinsurers held an estimated 60–70% of global property catastrophe reinsurance capacity. A single major event could simultaneously impair multiple counterparties. Capital markets could distribute the same risk across pension funds, sovereign wealth funds, and endowments whose total balance sheets dwarfed the reinsurance sector." },
            ].map((item) => (
              <div key={item.title} style={{ ...cardStyle, borderLeft: "3px solid #1D6FA4" }}>
                <p className="text-white text-sm font-medium mb-2">{item.title}</p>
                <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, borderTop: "3px solid #1D6FA4", background: "rgba(29,111,164,0.08)" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>Key Insight</p>
            <p className="text-white text-sm leading-relaxed font-medium">The ILS market solved a supply problem, not a pricing problem. Its initial function was to provide capacity when the traditional market would not — not to compete on price. This distinction matters acutely in 2026: when ILS competes primarily on price in a well-supplied market, it accelerates the pricing dynamics it was designed to be independent of. The January 2026 renewals — with cat bond investor appetite cited by Guy Carpenter as a direct contributor to double-digit rate declines — mark the first renewal cycle where this effect is clearly measurable.</p>
          </div>

          {/* Section 2 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">How the market scaled: 2005–2025</h2>
          <p style={{ opacity: 0.9 }}>ILS capital growth has been non-linear. Five distinct phases explain the current $136bn market — and each was triggered by an external event, not organic market development.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {stats.map((s) => (
              <div key={s.val} style={cardStyle}>
                <p className="font-display text-2xl font-bold mb-1" style={{ color: s.color }}>{s.val}</p>
                <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.7 }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* ILS growth visual */}
          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="mono-label text-white/60 text-[9px]">Growth of alternative capital (ILS) — 2005 to 2025 ($bn)</p>
            </div>
            <div style={{ padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "140px" }}>
                {ilsGrowth.map((d) => {
                  const total = d.cat + d.other;
                  const maxTotal = 136;
                  const height = (total / maxTotal) * 130;
                  const catH = (d.cat / total) * height;
                  const otherH = (d.other / total) * height;
                  return (
                    <div key={d.year} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                        <div style={{ width: "100%", minWidth: "22px", height: `${catH}px`, background: "#1D6FA4", borderRadius: "2px 2px 0 0" }} />
                        <div style={{ width: "100%", minWidth: "22px", height: `${otherH}px`, background: "#854F0B" }} />
                      </div>
                      <p className="text-white text-[9px]" style={{ opacity: 0.5 }}>{d.year}</p>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "12px", height: "12px", background: "#1D6FA4", borderRadius: "2px" }} />
                  <p className="text-white text-[10px]" style={{ opacity: 0.6 }}>Catastrophe bonds</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "12px", height: "12px", background: "#854F0B", borderRadius: "2px" }} />
                  <p className="text-white text-[10px]" style={{ opacity: 0.6 }}>Collateralised & other ILS</p>
                </div>
              </div>
              <p className="text-white text-[10px] mt-2" style={{ opacity: 0.4 }}>Sources: Artemis Deal Directory Q4 2025; Aon Reinsurance Solutions 2026; AM Best / Guy Carpenter Capital Report 2025.</p>
            </div>
          </div>

          <div className="space-y-4 mt-6">
            {phases.map((p) => (
              <div key={p.phase} style={cardStyle}>
                <p className="mono-label text-[9px] mb-1" style={{ color: "#60a5fa" }}>{p.phase}</p>
                <p className="font-display text-white text-base mb-2">{p.title}</p>
                <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{p.body}</p>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">What the market looks like today</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Capital providers", body: "Pension funds remain the largest single investor category — Swiss Re Institute estimated in 2023 that pension capital accounts for 30–40% of total ILS AUM. In 2025, fifteen new sponsors accessed the cat bond market for the first time, demonstrating broadening issuer participation. Traditional reinsurers also sponsor sidecar vehicles, with Guy Carpenter noting strong sidecar expansion in 2025." },
              { title: "Deployment structures", body: "Catastrophe bonds remain the most transparent and liquid structure, fully collateralised in US Treasury money market funds. The 2025 record issuance year saw 82% of Q2 2025 cat bond volume placed as indemnity-trigger structures, up from 75% in 2024 — reflecting cedant preference for precision over index-based triggers after the 2017–2018 basis risk experience." },
              { title: "Risk classes covered", body: "Property catastrophe remains dominant but the asset class is broadening. In Q4 2025, Beazley sponsored the largest single cyber catastrophe bond on record — a $300m PoleStar Re transaction. Agricultural parametric and sovereign parametric structures are growing, with the Brazil ILS structure in 2025 opening a new geographic frontier noted by Fitch." },
            ].map((c) => (
              <div key={c.title} style={{ ...cardStyle, borderTop: "3px solid #1D6FA4" }}>
                <p className="font-display text-white text-base mb-3">{c.title}</p>
                <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{c.body}</p>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Why insurers use it: four strategic rationales</h2>
          <p style={{ opacity: 0.9 }}>The decision to access alternative capital is not uniform. Four rationales account for the majority of cedant demand — each carries a different risk profile in the current softening market.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {rationales.map((r) => (
              <div key={r.num} style={cardStyle}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#1D6FA4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="text-white text-xs font-bold">{r.num}</span>
                  </div>
                  <p className="font-display text-white text-base">{r.title}</p>
                </div>
                <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{r.body}</p>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, background: "rgba(29,111,164,0.08)", borderLeft: "4px solid #1D6FA4" }}>
            <p className="mono-label text-[9px] mb-2" style={{ color: "#60a5fa" }}>Analytical note</p>
            <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9 }}>Rationale 3 is the most likely to be misapplied in the current environment. A cedant that bought multi-year ILS protection at hard-market 2023 or 2024 pricing will carry that cost as a drag on earnings in 2026 and 2027, precisely when soft-market conditions are compressing margins. The decision to lock in long-dated protection was rational at the time; its cost is now visible. Cedants facing this position should review whether their capital efficiency and risk transfer objectives are still best served by holding multi-year ILS, or whether a partial restructure is warranted.</p>
          </div>

          {/* Section 5 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Capital vs pricing: the soft market is already here</h2>
          <p style={{ opacity: 0.9 }}>The question of whether alternative capital stabilises or destabilises the underwriting cycle has a definitive answer in 2026: the soft market is not a scenario, it is the current market condition. The more useful questions are how deep it goes, how long it lasts, and what drives it. The data points clearly to a simultaneous accumulation dynamic, not a single-cause story.</p>

          <p style={{ opacity: 0.9 }}>Guy Carpenter's Global Property Catastrophe Rate-on-Line Index fell 12% at January 2026 renewals — the most significant decline since the end of the last soft market. Howden Re recorded risk-adjusted property cat declines of 14.7%, with retrocession falling 16.5%. The April 2026 renewals accelerated the trend: Guy Carpenter's US property cat index is now down 14% year-to-date in 2026, the steepest fall for that index since 2014. Preliminary estimates put excess capacity at the January 2026 renewal at over 25% — meaning capital available significantly exceeded the demand placed.</p>

          <div style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="mono-label text-white/60 text-[9px]">2026 renewal pricing — selected metrics</p>
            </div>
            {rateChanges.map((r, i) => (
              <div key={r.line} style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", gap: "12px" }}>
                  <p className="text-white text-xs font-medium">{r.line}</p>
                  <p className="text-xs font-bold flex-shrink-0" style={{ color: r.color }}>{r.change}</p>
                </div>
                <div style={{ height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${r.pct}%`, background: r.color, borderRadius: "2px" }} />
                </div>
              </div>
            ))}
          </div>

          <p style={{ opacity: 0.9 }}>The conventional read focuses on ILS as the softening driver. The anomaly worth noting is that traditional reinsurer retained earnings are the more powerful force. Three consecutive years above 15% ROE have produced exceptional capital accumulation. Dedicated traditional reinsurance capital reached $649bn at end-2025 — 8% growth in a single year, adding approximately $49bn of new traditional capacity. Simultaneously, alternative capital added $21bn in 2025 alone. When both sources accelerate in the same year, the combined effect on pricing is multiplicative.</p>

          <div style={{ ...cardStyle, borderTop: "3px solid #1D6FA4", background: "rgba(29,111,164,0.08)" }}>
            <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>Key Insight — Second-Order Effect</p>
            <p className="text-white text-sm leading-relaxed font-medium mb-3">The standard view is that a large loss event would reset the soft market. The 2025 data challenges this. Higher attachment points mean reinsurers and ILS structures absorb a smaller share of each loss dollar than in prior cycles. The Los Angeles wildfires — a $40bn+ insured event — did not constrain capacity; it validated it.</p>
            <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.8 }}>For a loss event to reset pricing in the current market, aggregate insured losses would need to exceed approximately $200bn and directly penetrate the elevated attachment points at scale. Based on 2021–2025 average annual losses of $100–120bn, that is a tail scenario, not a base case.</p>
          </div>

          {/* Section 6 */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">London and Bermuda: complementary, not competing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Bermuda: the structural engine", color: "#1D6FA4", body: "Bermuda accounts for approximately 70–75% of global cat bond issuance by domicile of the Special Purpose Insurer vehicle. The Bermuda Monetary Authority's SPI regime enables new vehicle establishment typically within four to six weeks. The Bermuda Stock Exchange grew the value of its cat bond and ILS listings by 16.4% in 2025 to $65.2bn. The top ILS managers — RenaissanceRe, Nephila, Fermat Capital, Aeolus Capital — operate through or are heavily structured in Bermuda." },
              { title: "London Market: the specialty gateway", color: "#854F0B", body: "London's ILS role differs structurally from Bermuda's. Lloyd's and the London Company Market are not significant issuance venues for standard property cat ILS. Their role is in distribution, risk origination, and specialty structuring for the lines that ILS needs to access next. Several Lloyd's managing agents run dedicated ILS-linked vehicles. As ILS diversifies into specialty and casualty, London's origination capability becomes a structural necessity, not merely a complement." },
            ].map((c) => (
              <div key={c.title} style={{ ...cardStyle, borderTop: `3px solid ${c.color}` }}>
                <p className="font-display text-white text-base mb-3">{c.title}</p>
                <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{c.body}</p>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, background: "rgba(29,111,164,0.08)", borderLeft: "4px solid #1D6FA4" }}>
            <p className="mono-label text-[9px] mb-2" style={{ color: "#60a5fa" }}>The less obvious read</p>
            <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9 }}>Bermuda and London are not competing for the same ILS flows. Bermuda dominates issuance. London originates the risk classes that ILS will need to reach next. The strategic value of London to ILS investors is not where the capital sits — it is where the next generation of addressable risk is structured, documented, and distributed.</p>
          </div>

          {/* Section 7 — Risks */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Risks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div style={{ ...cardStyle, borderTop: "3px solid #1D6FA4" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#60a5fa" }}>Market risks</p>
              <div className="space-y-2">
                {marketRisks.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", paddingBottom: "8px", borderBottom: i < marketRisks.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span style={{ color: "#1D6FA4", flexShrink: 0 }}>—</span>
                    <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...cardStyle, borderTop: "3px solid #854F0B" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#fbbf24" }}>Structural risks</p>
              <div className="space-y-2">
                {structuralRisks.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", paddingBottom: "8px", borderBottom: i < structuralRisks.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span style={{ color: "#854F0B", flexShrink: 0 }}>—</span>
                    <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ ...cardStyle, borderTop: "3px solid #E63946" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#fca5a5" }}>Investor behaviour risks</p>
              <div className="space-y-2">
                {investorRisks.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", paddingBottom: "8px", borderBottom: i < investorRisks.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span style={{ color: "#E63946", flexShrink: 0 }}>—</span>
                    <p className="text-white text-xs leading-relaxed" style={{ opacity: 0.85 }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 8 — Outlook */}
          <h2 className="font-display text-white text-2xl mt-10 mb-4">Outlook: 2026–2030</h2>
          <p style={{ opacity: 0.9 }}>The base case is a continued pricing correction through 2026 and into 2027, sustained ILS capital growth at a slower pace than 2025, and incremental diversification into specialty and casualty risk. Guy Carpenter projects an additional $50bn entering the sector between 2025 and 2027. The bear case requires a loss event of sufficient scale to penetrate elevated attachment points — which the current loss environment does not support. The bull case depends on new risk classes, particularly cyber and parametric, scaling faster than current issuance volumes suggest.</p>

          <div className="space-y-4 mt-4">
            {scenarios.map((s) => (
              <div key={s.label} style={{ ...cardStyle, borderTop: `3px solid ${s.color}`, background: s.bg }}>
                <p className="mono-label text-[9px] mb-2" style={{ color: s.color }}>{s.label}</p>
                <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9 }}>{s.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-white text-xl mt-10 mb-4">Who benefits and who faces pressure</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div style={{ ...cardStyle, borderTop: "3px solid #3B6D11" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#86efac" }}>Better positioned</p>
              <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9 }}>Large cedants with established ILS relationships, robust exposure data, and in-house analytics will secure competitive capacity in a buyer's market. Bermuda structuring platforms benefit regardless of scenario. ILS managers with diversified books, low trapped capital history, and institutional-grade reporting will capture the inflows that fee-compressed smaller managers lose. London Market specialty underwriters are structurally positioned for the next wave of ILS diversification into specialty and casualty.</p>
            </div>
            <div style={{ ...cardStyle, borderTop: "3px solid #E63946" }}>
              <p className="mono-label text-[9px] mb-3" style={{ color: "#fca5a5" }}>Under pressure</p>
              <p className="text-white text-sm leading-relaxed" style={{ opacity: 0.9 }}>Mid-sized reinsurers with concentrated property cat books face sustained pricing pressure from both ILS and well-capitalised peers deploying retained earnings. Smaller ILS managers face fee compression in a prolonged soft market — Gallagher Re's analysis suggests market consolidation is already underway. Cedants without in-house analytics will overpay for structures they cannot optimise or restructure as the cycle turns. MGAs that relied on soft-market ILS pricing for their growth model face a structural margin squeeze.</p>
            </div>
          </div>

          {/* Footnotes */}
          <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="mono-label text-white/40 text-[9px] mb-4">Notes and sources</p>
            <div className="space-y-2">
              {footnotes.map((fn, i) => (
                <div key={i} style={{ display: "flex", gap: "10px" }}>
                  <span className="text-white/30 text-[10px] flex-shrink-0 font-mono" style={{ paddingTop: "1px" }}>{i + 1}.</span>
                  <p className="text-white/40 text-[10px] leading-relaxed italic">{fn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-white/30 text-[10px] leading-relaxed italic">© 2026 Eudaimon Consulting. Prepared for general informational purposes only and does not constitute investment advice. All data sourced from publicly available materials. Market projections represent analytical assessments and carry inherent uncertainty. Independent professional advice should be obtained before implementing any strategies referenced in this note.</p>
          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="divider-gradient mb-16" />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="mono-label text-white/50 text-[9px] mb-2">Navigating the ILS market or reinsurance cycle?</p>
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
