"use client";

import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export default function CyberRiskAIArticle() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      <div className="px-6 py-8 max-w-3xl mx-auto">
        <Link href="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <ArrowLeft size={14} />
          Back to Insights
        </Link>
      </div>

      <header className="px-6 pb-12 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: "rgba(163,45,45,0.2)", color: "#F09595" }}>
            Cyber Underwriting
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-white mb-4">
          Same Attacks, Bigger Consequences: How AI Is Reshaping Cyber Risk for Insurers
        </h1>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          Underwriting implications for Group CEO, CUO, Cyber Product Leaders and CISOs
        </p>
        <div className="flex flex-wrap items-center gap-6 text-white/50 text-xs font-mono border-t border-white/10 pt-6">
          <span className="flex items-center gap-1.5"><Calendar size={12} />April 2026</span>
          <span className="flex items-center gap-1.5"><Clock size={12} />8 min read</span>
          <span className="flex items-center gap-1.5"><Tag size={12} />Data-led · Executive briefing</span>
        </div>
      </header>

      <article className="px-6 pb-24 max-w-3xl mx-auto">

        {/* ── 00 EXECUTIVE SUMMARY ── */}
        <Section label="00 — Executive Summary" title="Four things that demand immediate attention">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { num: "$4.88M", label: "Avg. global breach cost — up 10% YoY (IBM 2024)", color: "#EF9F27" },
              { num: "+34%",   label: "Rise in vulnerability exploitation YoY (Verizon 2025)", color: "#F09595" },
              { num: "30%",    label: "Of breaches involve a third party — doubled in one year", color: "#85B7EB" },
              { num: "+25%",   label: "Ransomware attacks rose in 2024 (Munich Re)", color: "#F09595" },
            ].map((s) => (
              <div key={s.num} className="rounded-lg p-4 text-center" style={{ background: "rgba(255,255,255,0.07)" }}>
                <span className="block text-xl font-semibold leading-snug mb-1" style={{ color: s.color }}>{s.num}</span>
                <span className="block text-[10px] text-white/60 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
          <P>
            Cyber attacks have not changed in nature. Stolen credentials, unpatched vulnerabilities,
            and human error have dominated loss data for a decade and continue to do so. What has
            changed is the economics of attack: AI and automation have reduced the cost and skill
            required to launch attacks at scale, increased their frequency, and amplified the systemic
            reach of individual events. For insurers, frequency assumptions built on historical
            baselines are deteriorating. Severity is harder to model as large losses concentrate
            across shared infrastructure. And aggregation risk is growing in ways that traditional
            catastrophe frameworks were not designed to handle.
          </P>
          <Callout variant="info">
            The market needs dynamic pricing inputs, real-time telemetry, and tighter accumulation
            controls — the argument for each is set out below.
          </Callout>
        </Section>

        {/* ── 01 INTRODUCTION ── */}
        <Section label="01 — Introduction" title="The question the market has been circling">
          <Pullquote>
            Does the arrival of frontier AI models with genuine autonomous offensive cyber capability
            represent a step change in the risk landscape — and if so, what does that require of
            underwriting, pricing and accumulation management?
          </Pullquote>
          <P>
            That question has been building for several years, but it arrived on the boardroom agenda
            with unusual force in April 2026. The release of a frontier AI model with independently
            verified autonomous attack capability — and the emergency discussions it triggered among
            central bankers, treasury officials and bank CEOs on both sides of the Atlantic — moved a
            debate that many insurers had treated as medium-term planning into the present tense.
            Detail on those specific events is covered in the case study callout within this note.
            What they illustrate, rather than constitute, is the subject of this analysis.
          </P>
          <P>
            The more durable question is structural. Frontier AI capabilities will keep advancing and
            the specific systems in any given news cycle will be superseded. But the underlying
            dynamic — the industrialisation of cyber attack economics through AI and automation — is
            already producing measurable effects on loss frequency, severity and correlation. Those
            effects are interacting with underwriting assumptions, pricing models and accumulation
            controls calibrated for a materially different threat environment. The evidence suggests
            that interaction is already producing losses that exceed the models.
          </P>
          <P>
            This note is grounded in the most recent available data from Verizon, IBM, Munich Re and
            Lloyd's, and draws on regulatory assessments from the UK, EU and US.
          </P>
        </Section>

        {/* ── 02 REALITY CHECK ── */}
        <Section label="02 — Reality Check" title="No new playbook: attacks remain stubbornly familiar">
          <P>
            The fundamental mechanics of a cyber breach have not changed meaningfully in over a
            decade. Attackers still rely on three primary entry points: stolen credentials, unpatched
            vulnerabilities, and mistakes made by people inside organisations. The 2025 Verizon DBIR
            — covering over 20,000 incidents — found that credential abuse initiated 22% of breaches,
            vulnerability exploitation approximately 20%, and the human element remained a factor in
            60% of all breaches. Over a ten-year horizon, stolen credentials have appeared in nearly
            a third of all data breaches.
          </P>

          <div className="rounded-lg p-5 my-6" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="text-[10px] font-mono font-semibold tracking-widest uppercase text-white/60 mb-5">
              Primary initial access vectors — share of breaches (Verizon DBIR 2025)
            </p>
            {[
              { label: "Misconfig / human error",    pct: 30, color: "#4ade80" },
              { label: "Credential abuse",           pct: 22, color: "#60a5fa" },
              { label: "Vulnerability exploitation", pct: 20, color: "#f87171" },
              { label: "Phishing",                   pct: 16, color: "#fb923c" },
              { label: "Other vectors",              pct: 12, color: "#94a3b8" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3 mb-3">
                <span className="text-[12px] text-white/80 w-48 shrink-0 text-right leading-tight">{b.label}</span>
                <div className="flex-1 rounded-full h-2.5" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div className="h-2.5 rounded-full" style={{ width: `${(b.pct / 36) * 100}%`, background: b.color }} />
                </div>
                <span className="text-[12px] font-mono font-semibold text-white w-9">{b.pct}%</span>
              </div>
            ))}
            <p className="text-[10px] text-white/40 italic mt-5">
              Source: Verizon Data Breach Investigations Report 2025 (20,000+ incidents analysed)
            </p>
          </div>

          <P>
            Only 15% of perimeter-device vulnerabilities were fully remediated within the reporting
            period; nearly half remained unresolved. Exploitation of vulnerabilities nearly tripled
            year-on-year in 2024, driven by zero-day attacks on unpatched systems. The risk being
            priced today is fundamentally the same risk that existed in 2016. What has changed is not
            the attack type but its velocity, scale, and the degree to which automation is removing
            the skill requirement for execution.
          </P>
          <Callout variant="info">
            Underwriting implication: If individual policyholder risk profiles have not changed
            materially but aggregate losses are rising, the explanation lies in frequency and
            correlation — not in new attack categories requiring new coverage language.
          </Callout>
        </Section>

        {/* ── 03 ACCELERATION ── */}
        <Section label="03 — The Acceleration Effect" title="AI changes the economics, not the anatomy">
          <P>
            The significant shift underway is economic. AI and automation have materially reduced the
            cost and skill required to launch cyber attacks at scale. Ransomware-as-a-Service
            platforms offer subscription-based toolkits — including AI-enabled hacking tools — that
            have lowered the barrier to entry for less sophisticated actors. Munich Re identifies this
            as a primary driver of attack frequency, speed and precision across its 2025 and 2026
            cyber trend analyses.
          </P>
          <P>
            The scale of this industrialisation is visible in the data. The number of victims
            publicly named on ransomware leak sites has grown from 1,412 in 2020 to over 6,000 in
            2025 — a fivefold increase in five years. In 2024 alone, ransomware attacks rose
            approximately 25% year-on-year, and the volume of data exfiltrated in ransomware
            incidents nearly doubled. There are now more than 75 active groups posting across public
            leak infrastructure — a market with the characteristics of a mature criminal industry.
          </P>

          {/* Ransomware bar chart — rebuilt for full visibility */}
          <div className="rounded-lg p-5 my-6" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="text-[10px] font-mono font-semibold tracking-widest uppercase text-white/60 mb-6">
              Ransomware victims publicly named on leak sites, 2020–2025
            </p>
            <div className="flex items-end gap-3" style={{ height: "160px" }}>
              {[
                { year: "2020", val: 1412 },
                { year: "2021", val: 2100 },
                { year: "2022", val: 2900 },
                { year: "2023", val: 3800 },
                { year: "2024", val: 5000 },
                { year: "2025", val: 6000 },
              ].map((b, i) => (
                <div key={b.year} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-[11px] font-mono font-semibold text-white">
                    {(b.val / 1000).toFixed(1)}k
                  </span>
                  <div className="w-full flex-1 flex items-end">
                    <div
                      className="w-full rounded-t"
                      style={{
                        height: `${Math.round((b.val / 6500) * 100)}%`,
                        background: `rgba(239,68,68,${0.5 + i * 0.09})`,
                        minHeight: "12px",
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-white/60">{b.year}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/40 italic mt-5">
              Sources: Munich Re Cyber Risks &amp; Trends 2025; Beinsure US Cyber Insurance Premium Report 2025
            </p>
          </div>

          <P>
            Shorter exploit cycles compound this further. The time between vulnerability disclosure
            and first active exploitation in the wild has collapsed — in many cases to under 24
            hours. Attackers are consistently moving faster than defenders can patch, and the
            automation of vulnerability discovery itself is an emerging pressure that current
            underwriting assumptions do not yet reflect.
          </P>
          <Callout variant="warn">
            Underwriting implication: Frequency assumptions based on pre-2023 loss data are
            structurally too low. Models need to account for exponential growth in attack volume, not
            linear trend extensions from earlier portfolios.
          </Callout>
        </Section>

        {/* ── 04 SYSTEMIC RISK ── */}
        <Section label="04 — Systemic Risk" title="From operational risk to correlated catastrophe">
          <P>
            The most consequential structural shift is not frequency — it is correlation. Individual
            breach events are becoming less important than systemic events that propagate across
            shared infrastructure. Third-party involvement in breaches doubled from 15% to 30% in a
            single year (Verizon DBIR 2025). The 2024 CrowdStrike software update failure — a faulty
            update, not a malicious attack — produced simultaneous outages across airlines, banks,
            hospitals and stock exchanges globally, illustrating how a single shared dependency can
            function as a de facto catastrophe trigger.
          </P>

          <div className="grid grid-cols-2 gap-3 my-6">
            {[
              {
                label: "Then — Pre-2023 underwriting model",
                headerBg: "rgba(255,255,255,0.08)",
                cellBg: "rgba(255,255,255,0.04)",
                rows: [
                  ["Risk unit",     "Individual policyholders"],
                  ["Correlation",   "Low — mostly independent events"],
                  ["Data inputs",   "Annual questionnaire"],
                  ["Pricing",       "Static, renewal-driven"],
                  ["CAT scenario",  "Limited accumulation modelling"],
                ],
                labelColor: "rgba(255,255,255,0.50)",
                valColor:   "rgba(255,255,255,0.80)",
              },
              {
                label: "Now — What the data demands",
                headerBg: "#185FA5",
                cellBg: "rgba(24,95,165,0.15)",
                rows: [
                  ["Risk unit",     "Portfolio + shared infrastructure"],
                  ["Correlation",   "High — cloud, SaaS, supply chain"],
                  ["Data inputs",   "Continuous telemetry + signals"],
                  ["Pricing",       "Dynamic, exposure-adjusted"],
                  ["CAT scenario",  "Cloud/supply chain event modelling"],
                ],
                labelColor: "#85B7EB",
                valColor:   "#ffffff",
              },
            ].map((col) => (
              <div key={col.label} className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="px-3 py-2.5 text-[9.5px] font-mono font-semibold tracking-wider uppercase text-white" style={{ background: col.headerBg }}>
                  {col.label}
                </div>
                {col.rows.map(([lbl, val]) => (
                  <div key={lbl} className="px-3 py-2.5 border-t border-white/5 flex gap-2" style={{ background: col.cellBg }}>
                    <span className="text-[10px] font-semibold w-20 shrink-0 pt-px" style={{ color: col.labelColor }}>{lbl}</span>
                    <span className="text-[12px] leading-snug" style={{ color: col.valColor }}>{val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <P>
            A joint CyberCube/Munich Re study (July 2025) found that a severe malware event could
            infect up to a quarter of all systems worldwide. The expected global cost of software
            supply chain attacks is estimated to grow from $46 billion in 2023 to $60 billion in 2025
            (Juniper Research). The analogy to catastrophe risk holds precisely: just as a single
            hurricane produces simultaneous property claims across one geography, a single compromised
            software dependency can produce simultaneous business interruption claims across thousands
            of policyholders with no other common characteristic.
          </P>
          <Callout variant="info">
            Underwriting implication: Cyber risk is developing the aggregation characteristics of
            nat-cat. Accumulation exposure must be tracked at the vendor, cloud provider and software
            dependency level — not solely at the named insured level.
          </Callout>
        </Section>

        {/* ── 05 WHERE MODELS BREAK ── */}
        <Section label="05 — Where Models Break" title="Four structural failures in current underwriting practice">
          <P>
            The combination of rising frequency, amplified severity and growing correlation creates
            specific structural failures in how cyber risk is priced and managed. These are evidenced
            in claims experience and in the supervisory priorities of the FCA, EBA and SEC — all of
            which have flagged AI-enabled cyber as a priority issue for 2026.
          </P>

          <div className="my-6">
            <div className="flex justify-between text-[9px] font-mono font-semibold text-white/40 uppercase tracking-widest mb-2 px-1">
              <span>← Low systemic correlation</span>
              <span>High systemic correlation →</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { tag: "Low Severity / Low Correlation",  title: "Frequency underestimation", body: "Attack volumes rising 25–30% YoY. Historical frequency tables understate exposure across most risk classes.",                                                                          bg: "rgba(24,95,165,0.18)",  accent: "#85B7EB", titleColor: "#B5D4F4" },
                { tag: "Low Severity / High Correlation", title: "Aggregation blind spots",    body: "Small claims correlate through shared SaaS and cloud providers. Portfolio accumulation not captured by individual risk scoring.",                                                      bg: "rgba(59,109,17,0.18)", accent: "#86efac", titleColor: "#bbf7d0" },
                { tag: "High Severity / Low Correlation", title: "Severity mispricing",        body: "Avg. breach cost $4.88M globally (IBM 2024); healthcare $9.77M. Credential-based breaches average 292 days to identify and contain.",                                                bg: "rgba(133,79,11,0.18)", accent: "#fb923c", titleColor: "#fed7aa" },
                { tag: "High Severity / High Correlation",title: "CAT zone — attribution risk",body: "Nation-states blend with criminal groups. War exclusions create coverage uncertainty where legal attribution is contested.",                                                            bg: "rgba(163,45,45,0.18)", accent: "#fca5a5", titleColor: "#fecaca" },
              ].map((c) => (
                <div key={c.title} className="rounded-lg p-4" style={{ background: c.bg, border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="block text-[8.5px] font-mono font-semibold tracking-widest uppercase mb-1.5" style={{ color: c.accent }}>{c.tag}</span>
                  <span className="block text-[13px] font-semibold mb-1.5" style={{ color: c.titleColor }}>{c.title}</span>
                  <span className="block text-[12px] text-white/75 leading-snug">{c.body}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/35 italic mt-2 px-1">Framework: Eudaimon Consulting, April 2026</p>
          </div>

          <P>
            Attribution risk is the most legally complex failure. Nation-states are deploying
            criminal-style ransomware tooling, and criminal actors are being used as proxies, blurring
            the line between geopolitical acts and commercial cybercrime. Standard war exclusion
            clauses were not drafted for this hybrid environment. The legal and claims exposure for
            insurers writing affected policyholders remains genuinely uncertain.
          </P>

          {/* McKinsey-style callout */}
          <div className="rounded-b-lg overflow-hidden my-8" style={{ border: "1px solid rgba(255,255,255,0.12)", borderTop: "3px solid #60a5fa" }}>
            <div className="px-5 py-3" style={{ background: "#185FA5" }}>
              <span className="block text-[9px] font-mono font-semibold tracking-widest uppercase mb-0.5" style={{ color: "#bfdbfe" }}>
                Case study — AI capability trajectory
              </span>
              <span className="block text-[13px] font-semibold leading-snug text-white">
                What frontier models reveal about the direction of travel
              </span>
            </div>
            <div className="px-5 py-5" style={{ background: "rgba(24,95,165,0.1)" }}>
              <p className="text-[13.5px] text-white/80 leading-relaxed mb-4">
                One way to understand where AI-enabled attack automation is heading is to look at
                where frontier research capability currently sits — and how quickly that frontier has
                moved. In April 2026, independent evaluation of Anthropic's most advanced model
                provided concrete, verified data points on what leading-edge AI can do in a controlled
                offensive cybersecurity context. The findings are instructive not as a threat
                assessment of any specific model, but as a marker of a trajectory.
              </p>
              <div className="grid grid-cols-2 gap-2 my-4">
                {[
                  { num: "181×",     label: "More working exploits vs prior generation on identical vulnerability tests — same class of vulnerability, automated at a qualitatively different scale" },
                  { num: "73%",      label: "Success rate on expert-level capture-the-flag tasks where no prior model had scored above zero — a step change, not an incremental gain" },
                  { num: "32 steps", label: "Length of simulated corporate network attack completed end-to-end autonomously for the first time, covering reconnaissance, lateral movement and exfiltration" },
                  { num: "12–24 mo", label: "Historical lag between frontier research capability and availability in commercial tooling accessible to well-resourced threat actors" },
                ].map((f) => (
                  <div key={f.num} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <span className="block text-base font-semibold mb-1" style={{ color: "#93c5fd" }}>{f.num}</span>
                    <span className="block text-[11.5px] text-white/70 leading-snug">{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="my-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
              <p className="text-[13.5px] text-white/80 leading-relaxed">
                The practical implication for underwriters is in that final figure. Capabilities that
                today exist only in restricted research environments have historically become available
                in commercial attack tooling within one to two years. The underwriting models and
                pricing assumptions being written today will govern portfolios that sit squarely within
                that window. Frequency underestimation and severity mispricing are the failure modes
                most directly exposed to this trajectory. Attribution risk is compounded by the same
                dynamic: as AI lowers the operational cost of attack, the number of actors capable of
                conducting sophisticated, multi-stage campaigns grows — making the criminal-versus-state
                distinction harder to sustain in claims contexts.
              </p>
              <div className="mt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
              <p className="text-[10.5px] text-white/45 italic mt-3">
                Sources: UK AI Security Institute, evaluation of frontier AI model cyber capabilities
                (April 2026); Anthropic system card disclosure (April 2026)
              </p>
            </div>
          </div>
        </Section>

        {/* ── 06 STRATEGIC IMPLICATIONS ── */}
        <Section label="06 — Strategic Implications" title="Four decisions for insurance leadership">
          {[
            { area: "Pricing models",       action: "Move from static annual pricing to models that incorporate real-time external signals — attack surface scans, threat intelligence feeds, vulnerability disclosure cadence. Static renewal pricing cannot keep pace with an environment where exploit cycles have collapsed to hours and AI is beginning to automate discovery of previously unknown vulnerabilities." },
            { area: "Data requirements",    action: "Annual questionnaires are inadequate for a threat environment where attack automation is advancing rapidly. Continuous telemetry, independent security ratings, and external attack surface monitoring should be standard inputs for mid-market and above. The SEC's 2026 examination priorities have elevated cybersecurity and AI above crypto as the dominant supervisory risk topic." },
            { area: "Portfolio management", action: "Accumulation controls must track concentration by cloud provider, software vendor, managed service provider and critical infrastructure sector — not only by industry vertical or geography. The CrowdStrike 2024 event demonstrated that a single vendor update can simultaneously affect insurers, airlines, banks and hospitals. That is a cat event without a named peril." },
            { area: "Product design",       action: "Policy language requires review across four pressure points: war and state-actor exclusion clarity; aggregate sub-limits for systemic events; supply chain coverage triggers; and silent cyber exposure in non-cyber lines. DORA has been in force since January 2025. The EU Cyber Resilience Act applies from 2027." },
          ].map((r) => (
            <div key={r.area} className="grid gap-3 py-4 border-t border-white/10" style={{ gridTemplateColumns: "120px 1fr" }}>
              <span className="text-[12px] font-semibold text-white/60 pt-0.5">{r.area}</span>
              <p className="text-[13.5px] text-white/80 leading-relaxed m-0">{r.action}</p>
            </div>
          ))}
        </Section>

        {/* ── 07 CONCLUSION ── */}
        <Section label="07 — Conclusion" title="The new cyber equation">
          <P>
            Cyber risk has not fundamentally changed in nature. The attacks dominating loss data today
            use the same methods that dominated it a decade ago: stolen credentials, unpatched
            systems, human error. That is, in one sense, reassuring — sound cyber hygiene remains the
            most effective risk management tool available to policyholders, and underwriters can still
            assess risk quality through controls-based frameworks.
          </P>
          <P>
            What has changed, materially and with increasing speed, is scale, economics and
            correlation. AI has industrialised attack operations, removed skill barriers, and
            multiplied the number of active actors. Shared digital infrastructure means that single
            failure points now produce correlated losses across thousands of policyholders
            simultaneously. And the capability trajectory of frontier AI points to continued
            compression of the window in which current assumptions remain valid.
          </P>
          <P>
            The question posed at the outset — whether frontier AI capability represents a step change
            in the risk landscape — has a clear answer in the data: yes, in economics and correlation,
            if not yet in the fundamental nature of the attacks themselves. What that requires of
            underwriting, pricing and accumulation management is equally clear. The question is pace.
          </P>
        </Section>

        <div className="mt-12 pt-6 border-t border-white/10 text-[10.5px] text-white/45 leading-relaxed">
          <strong className="text-white/60 font-semibold">Primary sources: </strong>
          Verizon Data Breach Investigations Report 2024 &amp; 2025; IBM Cost of a Data Breach Report 2024 (Ponemon Institute);
          Munich Re Cyber Insurance Risks &amp; Trends 2025 &amp; 2026; CyberCube/Munich Re Systemic Cyber Risk Study, July 2025;
          World Economic Forum Global Cybersecurity Outlook 2024; UK AI Security Institute, frontier AI capability evaluation (April 2026);
          Anthropic system card disclosure (April 2026); Beinsure US Cyber Insurance Premium Report 2025;
          Juniper Research supply chain cost projections; EU DORA (in force January 2025); SEC Examination Priorities 2026.
          <br /><br />
          This note is prepared for strategic discussion purposes only. It does not constitute legal, actuarial or regulatory advice.
          © 2026 Eudaimon Consulting.
        </div>
      </article>

      <div className="border-t border-white/10 px-6 py-16 text-center">
        <p className="text-white/50 text-sm mb-6">Want to discuss the underwriting implications for your portfolio?</p>
        <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white transition-all hover:opacity-90" style={{ background: "#E63946" }}>
          Get in Touch
        </Link>
        <div className="mt-8">
          <Link href="/insights" className="text-white/40 hover:text-white transition-colors text-sm inline-flex items-center gap-1.5">
            <ArrowLeft size={13} />Back to all insights
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <p className="text-[9.5px] font-mono font-semibold tracking-widest uppercase text-white/45 mb-2 pb-3 border-b border-white/10">{label}</p>
      <h2 className="text-xl font-semibold text-white mb-4 leading-snug">{title}</h2>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[13.5px] text-white/80 leading-[1.8] mb-4">{children}</p>;
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-lg px-4 py-3 my-5" style={{ borderLeft: "3px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.06)" }}>
      <p className="text-[13.5px] italic text-white/85 leading-relaxed m-0">{children}</p>
    </div>
  );
}

function Callout({ children, variant }: { children: React.ReactNode; variant: "info" | "warn" }) {
  const s = variant === "info"
    ? { border: "#3b82f6", bg: "rgba(59,130,246,0.12)", text: "#93c5fd" }
    : { border: "#f59e0b", bg: "rgba(245,158,11,0.12)", text: "#fcd34d" };
  return (
    <div className="rounded-r-lg px-4 py-3 my-5" style={{ borderLeft: `3px solid ${s.border}`, background: s.bg }}>
      <p className="text-[13px] leading-relaxed m-0 font-medium" style={{ color: s.text }}>{children}</p>
    </div>
  );
}
