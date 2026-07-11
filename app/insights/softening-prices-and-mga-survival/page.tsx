import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softening Prices and MGA Survival: Is a Soft Market Existential for MGAs?",
  description:
    "A soft market is widely held to be existential for MGAs. This research note tests that belief against three market cycles and current conditions, and finds it wrong about the model and right about a defined cohort of undifferentiated, single-capacity and subscale businesses.",
  openGraph: {
    title:
      "Softening Prices and MGA Survival: Is a Soft Market Existential for MGAs?",
    description:
      "A soft market is widely held to be existential for MGAs. Tested against three market cycles, the belief is wrong about the model and right about a defined cohort.",
    url: "https://www.eudaimonconsulting.com/insights/softening-prices-and-mga-survival",
    type: "article",
    images: [{ url: "/assets/logo.jpg" }],
  },
  alternates: {
    canonical:
      "https://www.eudaimonconsulting.com/insights/softening-prices-and-mga-survival",
  },
};

const ARTICLE_HTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap');
#emga-note{
  --serif:'Playfair Display',Georgia,serif;
  --sans:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;
  --mono:'JetBrains Mono',ui-monospace,monospace;
  --ink:#111111;--body:#1F1F1F;--sec:#4C4C4D;--line:#D8D4D4;
  --cobalt:#1D6FA4;--crimson:#E63946;--amber:#B86F00;
  --callout:#F2EEEE;--tint:#E8F1FB;--altrow:#FAFAF8;
  background:#ffffff;color:var(--body);font-family:var(--sans);
  font-size:17px;line-height:1.62;max-width:860px;margin:0 auto;
  padding:56px 40px 72px;border-radius:6px;
}
#emga-note *{box-sizing:border-box;}
#emga-note a{color:var(--cobalt);text-decoration:none;}
#emga-note .back{font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--sec);}
#emga-note .toprow{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:28px 0 18px;}
#emga-note .pill{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--cobalt);background:var(--tint);padding:4px 10px;border-radius:3px;}
#emga-note .label,#emga-note .read{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--sec);}
#emga-note h1{font-family:var(--serif);font-weight:700;font-size:40px;line-height:1.15;color:var(--ink);margin:0 0 18px;letter-spacing:-.005em;}
#emga-note .lead{font-size:19px;color:var(--body);line-height:1.5;margin:0 0 26px;}
#emga-note .metagrid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:18px 0;margin:0 0 34px;}
#emga-note .metagrid .mk{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--sec);margin-bottom:5px;}
#emga-note .metagrid .mv{font-size:13px;color:var(--ink);line-height:1.35;}
#emga-note h2{font-family:var(--serif);font-weight:700;font-size:23px;color:var(--ink);margin:38px 0 4px;letter-spacing:-.005em;}
#emga-note h2 .n{display:block;font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--cobalt);margin-bottom:8px;font-weight:500;}
#emga-note .h2rule{height:2px;width:30px;background:var(--cobalt);margin:10px 0 16px;}
#emga-note p{margin:0 0 14px;}
#emga-note .keyfind{background:var(--tint);border:1px solid #cfe1f3;padding:24px 26px;margin:6px 0 28px;}
#emga-note .keyfind .klead{font-size:16px;color:var(--ink);font-weight:500;margin:0 0 18px;line-height:1.5;}
#emga-note .keyfind .stat{display:flex;align-items:baseline;gap:16px;flex-wrap:wrap;}
#emga-note .keyfind .num{font-family:var(--serif);font-weight:700;font-size:52px;line-height:1;color:var(--cobalt);}
#emga-note .keyfind .klab{font-size:14px;color:var(--body);max-width:360px;line-height:1.4;}
#emga-note .keyfind .kctx{font-size:13px;color:var(--sec);margin:16px 0 0;line-height:1.5;}
#emga-note ul.rank{margin:14px 0;padding:0;list-style:none;}
#emga-note ul.rank li{padding:10px 0;border-top:1px solid var(--line);font-size:15px;}
#emga-note ul.rank li:first-child{border-top:none;}
#emga-note .tag{display:inline-block;font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;padding:2px 8px;margin-right:9px;vertical-align:1px;}
#emga-note .t-strong{background:var(--tint);color:var(--cobalt);}
#emga-note .t-mod{background:#F6EAD4;color:var(--amber);}
#emga-note .t-weak{background:#FBE4E6;color:var(--crimson);}
#emga-note .pq{font-family:var(--serif);font-style:italic;font-weight:400;font-size:19px;line-height:1.4;color:var(--ink);border-left:3px solid var(--cobalt);padding:2px 0 2px 20px;margin:26px 0;}
#emga-note figure{margin:28px 0;border:1px solid var(--line);background:#fff;padding:20px 20px 14px;}
#emga-note .exh-label{font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--cobalt);font-weight:500;}
#emga-note .exh-title{font-family:var(--serif);font-weight:700;font-size:17px;color:var(--ink);margin:3px 0 14px;line-height:1.25;}
#emga-note figcaption{font-size:12.5px;color:var(--sec);margin-top:12px;line-height:1.5;}
#emga-note figcaption b{color:var(--ink);font-weight:600;}
#emga-note svg{display:block;width:100%;height:auto;}
#emga-note table{border-collapse:collapse;width:100%;font-size:13.5px;}
#emga-note th,#emga-note td{text-align:left;padding:8px 9px;border-bottom:1px solid var(--line);vertical-align:top;}
#emga-note th{background:var(--callout);color:var(--ink);font-weight:700;font-size:13px;}
#emga-note td.rowh,#emga-note th.rowh{background:var(--altrow);font-weight:600;color:var(--ink);width:22%;}
#emga-note tbody tr:last-child td{border-bottom:none;}
#emga-note .sc-strong{color:var(--cobalt);font-weight:700;}
#emga-note .sc-mod{color:var(--amber);font-weight:700;}
#emga-note .sc-weak{color:var(--crimson);font-weight:700;}
#emga-note .assess{background:var(--tint);border-left:3px solid var(--cobalt);padding:22px 26px;margin:8px 0 0;}
#emga-note .assess h2{margin-top:0;}
#emga-note .assess p{font-size:15px;margin:0 0 12px;}
#emga-note .assess p:last-child{margin-bottom:0;}
#emga-note .endblock{margin-top:30px;}
#emga-note .endblock h3{font-family:var(--sans);font-weight:600;font-size:14px;text-transform:uppercase;letter-spacing:.04em;color:var(--ink);margin:0 0 8px;}
#emga-note .endblock .txt{font-size:12.5px;color:var(--sec);line-height:1.55;}
#emga-note .endblock .txt b{color:var(--ink);font-weight:600;}
#emga-note .disclaimer{border-top:1px solid var(--line);padding-top:16px;}
#emga-note .copyright{border-top:1px solid var(--line);margin-top:22px;padding-top:12px;font-size:12px;color:var(--sec);}
#emga-note .cta{margin-top:36px;border-top:2px solid var(--ink);padding-top:24px;}
#emga-note .cta .cq{font-family:var(--serif);font-size:20px;color:var(--ink);margin:0 0 14px;}
#emga-note .cta a{display:inline-block;background:var(--crimson);color:#fff;font-weight:600;font-size:14px;padding:12px 24px;border-radius:40px;}
@media(max-width:640px){
  #emga-note{padding:36px 20px 56px;font-size:16px;}
  #emga-note h1{font-size:29px;}
  #emga-note .metagrid{grid-template-columns:repeat(2,1fr);}
}
</style>

<div id="emga-note">
  <a class="back" href="/insights">&larr; Back to Insights</a>

  <div class="toprow">
    <span class="pill">Specialty Insurance</span>
    <span class="label">Strategic Research Note</span>
    <span class="read">10 min read</span>
  </div>

  <h1>Softening prices and MGA survival</h1>
  <p class="lead">A soft market is widely held across the industry to be existential for MGAs as a distribution model. This note tests that belief against three market cycles and current conditions.</p>

  <div class="metagrid">
    <div><div class="mk">Published</div><div class="mv">July 2026</div></div>
    <div><div class="mk">Coverage</div><div class="mv">Global commercial MGA market</div></div>
    <div><div class="mk">Focus</div><div class="mv">London Market, Lloyd&rsquo;s, US specialty &amp; E&amp;S</div></div>
    <div><div class="mk">Format</div><div class="mv">Executive research note</div></div>
  </div>

  <div class="keyfind">
    <p class="klead">The belief that soft markets are existential for MGAs is wrong about the model and right about a definable cohort.</p>
    <div class="stat">
      <div class="num">3&ndash;4&times;</div>
      <div class="klab">the size of the MGA sector today versus its last true soft market</div>
    </div>
    <p class="kctx">US MGA premium sat flat at $40&ndash;50bn through 2014&ndash;2020 and reached roughly $109bn in 2025. Today&rsquo;s far larger, more leveraged sector has no soft-market precedent, which is exactly why the question is live.</p>
  </div>

  <p>It is close to an article of faith in specialty distribution that a soft market is existential for MGAs. The logic is intuitive. An MGA earns on premium it does not retain, holds no balance sheet, and depends on capacity that becomes harder to justify as rates fall. When the cycle turns, the belief runs, the businesses that flourished on hard-market rate are the first to fail. The analytical task is to establish whether the record supports that belief, for which businesses, and through what mechanism.</p>

  <p>The answer sits between two readings: that the model is broadly resilient, and that this cycle is uniquely dangerous. Both are partly correct, and for the same reason. The sector has grown to a scale, and under an ownership structure, that has never been tested by a full soft market.</p>

  <h2><span class="n">01 &middot; The historical record</span>What the evidence actually shows</h2>
  <div class="h2rule"></div>

  <p>The single most important fact is that the modern MGA sector has essentially never experienced a soft market at its current scale. On statutory filings, US MGA premium sat in a $40bn to $50bn band throughout 2014 to 2020, the last genuinely soft phase. Growth accelerated only from 2021, driven by hard-market rate, a tighter admitted market, talent migration from carriers, and fronting capacity. Premium reached roughly $92bn in 2024 and $109bn in 2025 on the same basis, with broader estimates that include Lloyd&rsquo;s-sourced business above $114bn. The sector now in question is therefore three to four times larger than the one that last saw sustained rate reductions, and its growth to that size is itself a hard-market artefact.</p>

  <figure>
    <div class="exh-label">Exhibit 1</div>
    <div class="exh-title">US MGA premium against the commercial pricing cycle, 2014&ndash;2026</div>
    <svg viewBox="0 0 800 400" role="img" aria-label="MGA premium was flat through the last soft market and surged only in the hard market from 2021">
      <line x1="70" y1="40" x2="70" y2="320" stroke="#D8D4D4"/>
      <line x1="70" y1="320" x2="760" y2="320" stroke="#D8D4D4"/>
      <line x1="760" y1="40" x2="760" y2="320" stroke="#D8D4D4"/>
      <g font-family="DM Sans, sans-serif">
      <text x="62" y="322" text-anchor="end" font-size="11" fill="#4C4C4D">0</text>
      <text x="62" y="252" text-anchor="end" font-size="11" fill="#4C4C4D">30</text>
      <text x="62" y="182" text-anchor="end" font-size="11" fill="#4C4C4D">60</text>
      <text x="62" y="112" text-anchor="end" font-size="11" fill="#4C4C4D">90</text>
      <text x="62" y="66" text-anchor="end" font-size="11" fill="#4C4C4D">120</text>
      <text x="26" y="185" text-anchor="middle" font-size="11" fill="#111" transform="rotate(-90 26 185)">MGA premium ($bn)</text>
      <text x="770" y="92" font-size="11" fill="#B86F00">+20%</text>
      <text x="770" y="224" font-size="11" fill="#B86F00">0%</text>
      <text x="770" y="284" font-size="11" fill="#B86F00">-10%</text>
      <path d="M70,217 L127,215 L185,213 L242,211 L300,210 L357,208 L415,208 L472,189 L530,166 L587,138 L645,105 L702,66 L702,320 L70,320 Z" fill="#1D6FA4" opacity="0.10"/>
      <polyline points="70,217 127,215 185,213 242,211 300,210 357,208 415,208 472,189 530,166 587,138 645,105 702,66" fill="none" stroke="#1D6FA4" stroke-width="2.4"/>
      <line x1="70" y1="208" x2="415" y2="208" stroke="#4C4C4D" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
      <text x="150" y="200" font-size="11.5" fill="#4C4C4D" font-style="italic">flat $40&ndash;50bn band, 2014&ndash;2020</text>
      <circle cx="70" cy="217" r="3" fill="#1D6FA4"/>
      <circle cx="645" cy="105" r="3.4" fill="#1D6FA4"/><text x="645" y="97" text-anchor="middle" font-size="11.5" fill="#111" font-weight="700">$92bn</text>
      <circle cx="702" cy="66" r="3.4" fill="#1D6FA4"/><text x="712" y="60" font-size="11.5" fill="#111" font-weight="700">$109bn</text>
      <polyline points="70,224 127,238 185,256 242,238 300,224 357,168 415,88 472,120 530,168 587,216 645,248 702,272 760,280" fill="none" stroke="#B86F00" stroke-width="2.2"/>
      <circle cx="415" cy="88" r="3" fill="#B86F00"/><text x="415" y="80" text-anchor="middle" font-size="11" fill="#B86F00">peak +22% (late 2020)</text>
      <circle cx="760" cy="280" r="3" fill="#B86F00"/><text x="740" y="298" text-anchor="end" font-size="11" fill="#B86F00">-5% Q1&rsquo;26 (7th cut)</text>
      <text x="70" y="338" text-anchor="middle" font-size="11" fill="#4C4C4D">2014</text>
      <text x="300" y="338" text-anchor="middle" font-size="11" fill="#4C4C4D">2018</text>
      <text x="415" y="338" text-anchor="middle" font-size="11" fill="#4C4C4D">2020</text>
      <text x="587" y="338" text-anchor="middle" font-size="11" fill="#4C4C4D">2023</text>
      <text x="760" y="338" text-anchor="middle" font-size="11" fill="#4C4C4D">2026</text>
      <rect x="70" y="366" width="22" height="3" fill="#1D6FA4"/><text x="98" y="370" font-size="11.5" fill="#111">US MGA premium (statutory basis)</text>
      <rect x="360" y="366" width="22" height="3" fill="#B86F00"/><text x="388" y="370" font-size="11.5" fill="#111">Global commercial rate change (YoY)</text>
      </g>
    </svg>
    <figcaption>Premium series on statutory-filing basis; 2014&ndash;2020 band and cumulative growth per <b>Aon</b>; 2024&ndash;2025 anchors per <b>AM Best</b> ($92.3bn, $108.7bn). Pricing shape per <b>Marsh Global Insurance Market Index</b>; intermediate points indicative of the composite cycle. The point is structural: the MGA boom is a hard-market phenomenon of 2021 onward, so today&rsquo;s far larger sector has no soft-market precedent.</figcaption>
  </figure>

  <p>Two facts qualify the resilience story. First, underwriting quality already deteriorated during and after the last soft phase. MGA loss and loss-adjustment ratios ran around eight points above the wider P&amp;C industry across 2017 to 2022, having been roughly five points better in 2014 to 2016. The channel&rsquo;s aggregate performance edge eroded as it grew. Second, capacity has proven fragile even in a hard market. The 2023 Vesttoo collateral fraud and the Trisura write-down forced fronting carriers such as Clear Blue to replace more than half of affected reinsurance panels at short notice, showing how quickly the balance sheet beneath an MGA can move.</p>

  <figure>
    <div class="exh-label">Exhibit 2</div>
    <div class="exh-title">MGA market indicators across three soft-market periods</div>
    <table>
      <thead>
        <tr><th class="rowh">Indicator</th><th>2007&ndash;2010</th><th>2014&ndash;2018</th><th>2025&ndash;2026</th></tr>
      </thead>
      <tbody>
        <tr><td class="rowh">Commercial pricing</td><td>Softening after 2006 peak; rates falling into the financial crisis</td><td>Prolonged soft market; alternative capital and excess capacity</td><td>Softening; 7 consecutive quarterly declines, -5% in Q1 2026</td></tr>
        <tr><td class="rowh">US MGA premium</td><td>Small and fragmented; pre-fronting, pre-platform</td><td>Flat $40&ndash;50bn band</td><td>~$109bn (2025), +17.8%; fifth straight year of double-digit growth</td></tr>
        <tr><td class="rowh">Formation &amp; M&amp;A</td><td>Limited; crisis suppressed deal flow</td><td>Steady coverholder growth; PE interest building late</td><td>Formation continuing into 2026; M&amp;A active; discipline tightening</td></tr>
        <tr><td class="rowh">Valuations</td><td>Low; pre-PE-platform era</td><td>Rising toward double-digit EBITDA as PE entered</td><td>Peak; platform ~18x EBITDA, bifurcating by capacity model</td></tr>
        <tr><td class="rowh">Capacity</td><td>Contracted post-crisis, then recovered</td><td>Abundant; alternative-capital inflow</td><td>Abundant but selective; constraints partner-specific</td></tr>
      </tbody>
    </table>
    <figcaption>2007&ndash;2010 entries are directional; MGA-specific disclosure for that period is thin and the modern fronting and PE structure barely existed. Sources: <b>Marsh</b>, <b>Aon</b>, <b>AM Best</b>, <b>Conning</b>, <b>S&amp;P Global</b>.</figcaption>
  </figure>

  <p>The historical read is therefore mixed, and should be stated as such. There is no clean precedent of soft pricing destroying a large MGA population, because no such population existed in the last soft market. What the record does show is that MGA outperformance is cyclical, that capacity is contingent, and that the weakest operators lose their performance advantage first. That is enough to make the belief credible for a subset of the market without validating it as a general rule.</p>

  <h2><span class="n">02 &middot; The failure mechanism</span>What actually kills an MGA in a soft market</h2>
  <div class="h2rule"></div>

  <p>Rate softening does not kill MGAs directly. It works through a chain. Falling rates compress the premium base on which an MGA earns commission and, more importantly, erode the loss-ratio margin that funds profit commission and justifies a carrier&rsquo;s capital. As results drift, capacity providers reprice or withdraw authority. An MGA that depends on a single carrier then loses its balance sheet with no ready replacement. A subscale business cannot carry its fixed cost or the J-curve of a new underwriting team, which runs to one to two million pounds per team. The trigger is price. The cause of failure is the interaction of price with capacity dependence, weak differentiation and lack of scale.</p>

  <p>Ranking the drivers on the available evidence:</p>
  <ul class="rank">
    <li><span class="tag t-strong">Strong</span>Capacity withdrawal, single-carrier dependence, loss-ratio deterioration, weak underwriting differentiation and lack of scale. These are the factors capacity providers now screen on, and constraints are increasingly partner-specific rather than market-wide.</li>
    <li><span class="tag t-mod">Moderate</span>Rate compression in isolation (a trigger, not a root cause), technology disadvantage (a widening divide between leaders and laggards, rarely fatal alone), and regulatory change (rising Lloyd&rsquo;s, FCA and PRA expectations that lift the fixed cost of compliance for smaller MGAs).</li>
    <li><span class="tag t-weak">Weak</span>Distribution weakness as an independent cause. Most failing MGAs lose capacity before they lose distribution.</li>
  </ul>

  <p class="pq">The fatal variable is not the market. It is concentration.</p>

  <p>An MGA with four to five carrier relationships capable of leading its class can survive a capacity exit. One with a single binder cannot. This is why the belief is most accurate at the level of the individual business and least accurate at the level of the model.</p>

  <h2><span class="n">03 &middot; Investors and valuations</span>How capital behaves when the cycle turns</h2>
  <div class="h2rule"></div>

  <p>Investor behaviour through past soft markets has been consistent. Soft conditions have been treated as consolidation opportunities, not exit signals. Private equity now owns more than 30% of US MGA entities, and platform MGAs that traded at around ten times EBITDA five years ago have reached about eighteen times, with MGUs at the top of a nine-to-eighteen-times range. The asset-light model, 20% to 30% EBITDA margins and roughly 90% renewal retention explain the premium. Consolidation is accelerating, and the public market has reopened as an exit, with the Accelerant and Slide listings in 2025 repricing the sector upward.</p>

  <p>Two features of this cycle change the risk. First, valuations have bifurcated. Multi-capacity, data-rich platforms hold twelve to sixteen times EBITDA, while single-capacity businesses, including much of the cyber cohort built on one partner during 2021 to 2023, now clear six to nine times. The market is already pricing the vulnerability at the heart of the belief. Second, and more dangerous, the leverage and entry multiples were set on hard-market economics. An MGA acquired at eighteen times peak EBITDA, carrying acquisition debt, does not need to fail operationally to become a problem. A soft market that compresses its earnings converts the multiple into a refinancing and valuation issue for its sponsor. This is the genuinely existential mechanism, and it is financial rather than underwriting.</p>

  <figure>
    <div class="exh-label">Exhibit 3</div>
    <div class="exh-title">MGA valuations have bifurcated as consolidation accelerated</div>
    <svg viewBox="0 0 800 300" role="img" aria-label="EBITDA multiple ranges and recent deals showing bifurcation between resilient and vulnerable MGAs">
      <g font-family="DM Sans, sans-serif">
      <text x="20" y="26" font-size="13" fill="#111" font-weight="700">EBITDA multiples (x)</text>
      <line x1="20" y1="234" x2="470" y2="234" stroke="#D8D4D4"/>
      <g font-size="10.5" fill="#4C4C4D" text-anchor="middle">
        <text x="20" y="250">0</text><text x="110" y="250">5</text><text x="200" y="250">10</text><text x="290" y="250">15</text><text x="380" y="250">20</text><text x="470" y="250">25</text>
      </g>
      <text x="20" y="52" font-size="11.5" fill="#111">Single-capacity / undifferentiated</text>
      <rect x="128" y="58" width="54" height="22" fill="#E63946"/>
      <text x="188" y="74" font-size="11" fill="#E63946" font-weight="700">6&ndash;9x</text>
      <text x="20" y="98" font-size="11.5" fill="#111">Lower mid-market ($2&ndash;10m rev)</text>
      <rect x="200" y="104" width="72" height="22" fill="#B86F00"/>
      <text x="278" y="120" font-size="11" fill="#B86F00" font-weight="700">10&ndash;14x</text>
      <text x="20" y="144" font-size="11.5" fill="#111">Multi-capacity, data-enabled</text>
      <rect x="236" y="150" width="72" height="22" fill="#7FB3D6"/>
      <text x="314" y="166" font-size="11" fill="#1D6FA4" font-weight="700">12&ndash;16x</text>
      <text x="20" y="190" font-size="11.5" fill="#111">Platform scale (peak ~18x)</text>
      <rect x="290" y="196" width="126" height="22" fill="#1D6FA4"/>
      <text x="422" y="212" font-size="11" fill="#1D6FA4" font-weight="700">15&ndash;22x</text>
      <line x1="510" y1="30" x2="510" y2="270" stroke="#D8D4D4"/>
      <text x="530" y="26" font-size="13" fill="#111" font-weight="700">Recent deals &amp; listings</text>
      <g font-size="11.5" fill="#4C4C4D">
        <text x="530" y="58"><tspan fill="#111" font-weight="700">2023&ndash;24 </tspan>Skyward, Bowhead IPOs reopen exit</text>
        <text x="530" y="86"><tspan fill="#111" font-weight="700">Early 25 </tspan>NSM US commercial &rarr; New Mountain</text>
        <text x="530" y="114"><tspan fill="#111" font-weight="700">Jun 25 </tspan>Slide IPO, ~$2.6bn valuation</text>
        <text x="530" y="142"><tspan fill="#111" font-weight="700">Jul 25 </tspan>Accelerant IPO, ~$6.4bn; +35% day one</text>
        <text x="530" y="170"><tspan fill="#111" font-weight="700">2025&ndash;26 </tspan>Sponsors buy anchor books and build</text>
        <text x="530" y="198"><tspan fill="#111" font-weight="700">2026 </tspan>Valuation discipline tightening</text>
      </g>
      <text x="530" y="238" font-size="11" fill="#E63946" font-weight="600">The gap between quadrants is the risk in question.</text>
      </g>
    </svg>
    <figcaption>Multiple ranges per <b>Sica Fletcher</b>, <b>PitchBook</b> and market commentary; PE ownership share per <b>Deloitte</b>; deal detail per <b>PwC</b> and primary transaction reporting. The capital is still there. Its terms are not what they were.</figcaption>
  </figure>

  <p>Buyers have started to discriminate accordingly. Sponsors are acquiring smaller anchor portfolios and building around them rather than paying full multiples for established platforms, and advisers report tightening valuation discipline as softening rates make buyers more cautious.</p>

  <h2><span class="n">04 &middot; Vulnerability</span>Which archetypes are exposed</h2>
  <div class="h2rule"></div>

  <p>Exposure maps onto two axes: underwriting differentiation, and capacity strength (the breadth and durability of carrier relationships, together with any proprietary distribution). The vulnerable cohort is specific. It is the undifferentiated generalists, single-capacity binders and subscale businesses below roughly $25m to $50m of GWP, the threshold for a credible standalone franchise. These are the operators whose growth tracked the hard-market wave rather than any durable edge, and they are the businesses the industry belief describes even when it is voiced as a claim about the whole model. The resilient cohort is equally definable: specialist underwriting franchises, data-enabled and embedded-distribution models, multi-capacity platforms, and businesses that have integrated vertically into their own risk, such as MGAs that have taken Lloyd&rsquo;s syndicate participations to share in results.</p>

  <figure>
    <div class="exh-label">Exhibit 4</div>
    <div class="exh-title">MGA vulnerability matrix</div>
    <svg viewBox="0 0 640 440" role="img" aria-label="Two by two matrix of underwriting differentiation against capacity and distribution strength">
      <rect x="90" y="40" width="235" height="170" fill="#F6EAD4"/>
      <rect x="325" y="40" width="235" height="170" fill="#E8F1FB"/>
      <rect x="90" y="210" width="235" height="170" fill="#FBE4E6"/>
      <rect x="325" y="210" width="235" height="170" fill="#F6EAD4"/>
      <line x1="90" y1="40" x2="90" y2="380" stroke="#111" stroke-width="1.5"/>
      <line x1="90" y1="380" x2="560" y2="380" stroke="#111" stroke-width="1.5"/>
      <line x1="325" y1="40" x2="325" y2="380" stroke="#D8D4D4" stroke-dasharray="4 4"/>
      <line x1="90" y1="210" x2="560" y2="210" stroke="#D8D4D4" stroke-dasharray="4 4"/>
      <g font-family="DM Sans, sans-serif">
      <text x="325" y="410" text-anchor="middle" font-size="13" fill="#111" font-weight="700">Underwriting differentiation &rarr;</text>
      <text x="30" y="210" text-anchor="middle" font-size="13" fill="#111" font-weight="700" transform="rotate(-90 30 210)">Capacity &amp; distribution &rarr;</text>
      <text x="207" y="60" text-anchor="middle" font-size="11.5" fill="#B86F00" font-weight="700">MODERATE</text>
      <text x="207" y="118" text-anchor="middle" font-size="12" fill="#111">Strong panel,</text>
      <text x="207" y="136" text-anchor="middle" font-size="12" fill="#111">thin differentiation;</text>
      <text x="207" y="154" text-anchor="middle" font-size="12" fill="#111">loss ratios drifting</text>
      <text x="442" y="60" text-anchor="middle" font-size="11.5" fill="#1D6FA4" font-weight="700">RESILIENT</text>
      <text x="442" y="112" text-anchor="middle" font-size="12" fill="#111">Specialist franchises,</text>
      <text x="442" y="130" text-anchor="middle" font-size="12" fill="#111">data-enabled, embedded,</text>
      <text x="442" y="148" text-anchor="middle" font-size="12" fill="#111">multi-capacity, integrated</text>
      <text x="207" y="230" text-anchor="middle" font-size="11.5" fill="#E63946" font-weight="700">HIGHLY VULNERABLE</text>
      <text x="207" y="284" text-anchor="middle" font-size="12" fill="#111">Undifferentiated generalists,</text>
      <text x="207" y="302" text-anchor="middle" font-size="12" fill="#111">single-capacity binders,</text>
      <text x="207" y="320" text-anchor="middle" font-size="12" fill="#111">subscale (&lt;$25&ndash;50m GWP)</text>
      <text x="442" y="230" text-anchor="middle" font-size="11.5" fill="#B86F00" font-weight="700">MODERATE</text>
      <text x="442" y="284" text-anchor="middle" font-size="12" fill="#111">Genuine niche but</text>
      <text x="442" y="302" text-anchor="middle" font-size="12" fill="#111">narrow capacity panel;</text>
      <text x="442" y="320" text-anchor="middle" font-size="12" fill="#111">single-partner concentration</text>
      </g>
    </svg>
    <figcaption>The consolidation logic follows directly: the resilient quadrant acquires talent and portfolios from the vulnerable one. That is the sector&rsquo;s third path, separating high-quality underwriting franchises from distribution-led businesses that only worked in a hard market.</figcaption>
  </figure>

  <h2><span class="n">05 &middot; This cycle</span>What is structurally different</h2>
  <div class="h2rule"></div>

  <p>Separating structural from cyclical change is essential. The cyclical elements are familiar: abundant capacity, falling rates, easing terms. The structural elements are new, and they cut in both directions.</p>

  <p>On the supportive side, the decoupling of underwriting from the carrier balance sheet, equity-aligned incentives, modern technology and embedded distribution have partly uncoupled MGA growth from the rate cycle. This is why the sector kept expanding into the softening of 2025 and 2026, and why formation continues, with several new MGAs and Lloyd&rsquo;s syndicates slated to launch in 2026. AI-enabled underwriting and algorithmic pricing widen the gap between operators that can hold loss-ratio discipline as rates fall and those that cannot. Lloyd&rsquo;s oversight reforms and enhanced performance management raise the floor on governance, which protects the channel&rsquo;s credibility while raising the fixed cost of participation for the smallest MGAs.</p>

  <p>On the dangerous side, the same private capital that fuelled the supercycle has concentrated leverage and peak-multiple entry across the sector. That is a financial fragility which did not exist in 2014 to 2018, when MGAs were largely founder-owned and lightly capitalised.</p>

  <p class="pq">The structural changes have made strong MGAs stronger and made weak ones more exposed than their predecessors.</p>

  <p>This is precisely why the current cycle is more threatening to the vulnerable cohort than any previous soft market, and less threatening to the model as a whole. The two halves of the industry belief are both visible in the same data, attached to different businesses.</p>

  <div class="assess">
    <h2><span class="n">Assessment</span>Where the evidence lands</h2>
    <p><b>1. Historical evidence of existential risk:</b> limited and mixed. No precedent exists of soft pricing destroying MGAs at scale, but the sector has never faced a soft market at this size, and its performance edge has already been shown to erode.</p>
    <p><b>2. Models that have struggled:</b> undifferentiated generalists, single-capacity and subscale MGAs whose economics depend on favourable conditions.</p>
    <p><b>3. Models that gained share:</b> specialist underwriting franchises, data-enabled, embedded and multi-capacity platforms, and vertically integrated businesses.</p>
    <p><b>4. More or less threatening than prior cycles:</b> more threatening to the vulnerable cohort, because of PE leverage and peak-multiple entry; less threatening to the model in aggregate, which is larger, better capitalised and more strategically embedded than before.</p>
    <p><b>5. Does the evidence support the belief:</b> only in qualified form. As a general proposition that a soft market is existential for MGAs as a distribution model, the evidence contradicts it. As a claim about a definable cohort of undifferentiated, single-capacity and subscale businesses, the evidence strongly supports it, through capacity withdrawal and financial fragility.</p>
  </div>

  <figure>
    <div class="exh-label">Exhibit 5</div>
    <div class="exh-title">Evidence scorecard: strength of support for the belief</div>
    <table>
      <thead>
        <tr><th class="rowh">Proposition</th><th>Evidence</th><th>Basis</th></tr>
      </thead>
      <tbody>
        <tr><td class="rowh">Soft markets destroy MGAs at large</td><td class="sc-weak">Weak</td><td>No precedent at scale; last soft market saw flat, not collapsing, premium</td></tr>
        <tr><td class="rowh">Rate compression as direct cause</td><td class="sc-mod">Moderate</td><td>Trigger, not root cause; acts through margin and capacity</td></tr>
        <tr><td class="rowh">Capacity withdrawal / single-carrier dependence</td><td class="sc-strong">Strong</td><td>Providers now screen on this; constraints partner-specific</td></tr>
        <tr><td class="rowh">Subscale and weak differentiation</td><td class="sc-strong">Strong</td><td>Fixed cost and J-curve; loss-ratio drift above industry</td></tr>
        <tr><td class="rowh">PE leverage / peak-multiple refinancing risk</td><td class="sc-strong">Strong</td><td>New this cycle; 18x peak entry, acquisition debt</td></tr>
        <tr><td class="rowh">Consolidation and valuation bifurcation</td><td class="sc-strong">Strong</td><td>6&ndash;9x vs 12&ndash;16x already priced by the market</td></tr>
        <tr><td class="rowh">Belief for a defined cohort</td><td class="sc-strong">Supported</td><td>Definable cohort faces genuine existential risk</td></tr>
        <tr><td class="rowh">Belief as a general rule (the whole model)</td><td class="sc-weak">Contradicted</td><td>Model in aggregate is resilient and still forming</td></tr>
      </tbody>
    </table>
  </figure>

  <p>The belief is right about a tail and wrong about the whole. The soft market will not end the MGA model. It will end the MGAs that were only ever a hard-market trade, and it will transfer their talent and their books to the platforms built to hold underwriting discipline through the cycle.</p>

  <div class="endblock disclaimer">
    <h3>Disclaimer</h3>
    <p class="txt">This research note is prepared by Eudaimon Consulting for general information and discussion only. It does not constitute investment, financial, legal, regulatory or tax advice, and it should not be relied upon as such. The analysis draws on third-party sources believed to be reliable, but Eudaimon Consulting makes no representation or warranty as to their accuracy or completeness and accepts no liability for any decision taken on the basis of this note. Views expressed reflect conditions at the date of publication and are subject to change without notice.</p>
  </div>

  <div class="endblock">
    <h3>Sources</h3>
    <p class="txt">Marsh Global Insurance Market Index (Q1 2026); AM Best DUAE market segment report (2025); Conning, <b>Managing General Agents: Built for What&rsquo;s Next</b> (2025); Aon MGA and carrier analysis; S&amp;P Global Ratings (2025); Deloitte; PwC Global M&amp;A Trends in Financial Services (2026 mid-year); Sica Fletcher and PitchBook via transaction commentary; industry commentary on delegated authority through 2025 and 2026 (Insurance Insider, The Insurer, TMPAA mid-year meeting); DA Strategy; KBRA and reporting on the 2023 Vesttoo and Trisura events. Figures for the 2007&ndash;2010 cycle are directional given limited MGA-specific disclosure for that period.</p>
  </div>

  <div class="copyright">&copy; 2026 Eudaimon Consulting Ltd. All rights reserved.</div>

  <div class="cta">
    <p class="cq">Navigating delegated authority strategy through the cycle?</p>
    <a href="/contact">Talk to Eudaimon Consulting</a>
  </div>
</div>
`;

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: ARTICLE_HTML }} />;
}
