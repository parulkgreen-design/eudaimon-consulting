'use client'

import Script from 'next/script'

function initCharts() {
  if (typeof window === 'undefined') return
  const ChartJS = (window as any).Chart
  if (!ChartJS) return

  // Chart 1: Alternative Capital Growth
  const ctx1 = (document.getElementById('altCapChart') as HTMLCanvasElement)?.getContext('2d')
  if (ctx1) {
    new ChartJS(ctx1, {
      type: 'bar',
      data: {
        labels: ['2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'],
        datasets: [
          { label: 'Cat Bonds Outstanding', data: [19.4,22.0,24.0,25.5,29.7,37.0,44.0,34.4,38.5,40.5,45.0,48.0,60.0], backgroundColor: 'rgba(27,58,122,0.85)', stack: 'a' },
          { label: 'Sidecars', data: [4.1,5.5,6.2,7.1,8.5,8.2,7.8,9.0,10.2,10.5,12.0,14.0,19.6], backgroundColor: 'rgba(169,28,28,0.8)', stack: 'a' },
          { label: 'Collateralised Reinsurance', data: [18.0,22.0,24.0,28.0,34.0,36.0,38.0,37.0,36.0,35.5,42.0,45.0,43.4], backgroundColor: 'rgba(201,122,6,0.7)', stack: 'a' }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { family: "'Source Sans 3', sans-serif", size: 11 }, boxWidth: 12, padding: 16 } },
          tooltip: { callbacks: { label: (c: any) => ` ${c.dataset.label}: $${c.parsed.y}bn` } }
        },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { font: { family: "'Source Sans 3', sans-serif", size: 11 }, color: '#4A4A4A' } },
          y: { stacked: true, grid: { color: '#E8E5DE' }, ticks: { font: { family: "'Source Sans 3', sans-serif", size: 11 }, color: '#4A4A4A', callback: (v: any) => `$${v}bn` }, title: { display: true, text: 'USD Billions', font: { family: "'Source Sans 3', sans-serif", size: 10 }, color: '#6B6B6B' } }
        }
      }
    })
  }

  // Chart 2: Return Comparison
  const ctx2 = (document.getElementById('returnChart') as HTMLCanvasElement)?.getContext('2d')
  if (ctx2) {
    new ChartJS(ctx2, {
      type: 'bar',
      data: {
        labels: ['Cat Bonds','Private ILS','P&C Sidecars','Private Credit','US High Yield','Global Equities'],
        datasets: [{ label: '2025 Return (%)', data: [11.4,12.47,15.0,10.0,7.0,16.0], backgroundColor: ['rgba(27,58,122,0.88)','rgba(169,28,28,0.85)','rgba(22,101,52,0.82)','rgba(201,122,6,0.82)','rgba(107,107,107,0.75)','rgba(107,107,107,0.55)'], borderRadius: 3, borderSkipped: false }]
      },
      options: {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c: any) => ` ${c.parsed.x}%` } } },
        scales: {
          x: { grid: { color: '#E8E5DE' }, ticks: { font: { family: "'Source Sans 3', sans-serif", size: 11 }, color: '#4A4A4A', callback: (v: any) => `${v}%` }, max: 20 },
          y: { grid: { display: false }, ticks: { font: { family: "'Source Sans 3', sans-serif", size: 12, weight: '500' }, color: '#1A1A1A' } }
        }
      }
    })
  }

  // Chart 3: Cat Bond Issuance
  const ctx3 = (document.getElementById('issuanceChart') as HTMLCanvasElement)?.getContext('2d')
  if (ctx3) {
    const years = ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025']
    new ChartJS(ctx3, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [{ label: 'Cat Bond Issuance ($bn)', data: [4.6,4.9,6.4,7.0,8.2,7.0,6.3,9.6,10.3,11.7,9.3,12.5,14.1,16.2,17.7,24.7], backgroundColor: years.map((_y: string, i: number) => i === 15 ? 'rgba(169,28,28,0.9)' : 'rgba(27,58,122,0.75)'), borderRadius: 2 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c: any) => ` $${c.parsed.y}bn` } } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: "'Source Sans 3', sans-serif", size: 10 }, color: '#4A4A4A' } },
          y: { grid: { color: '#E8E5DE' }, ticks: { font: { family: "'Source Sans 3', sans-serif", size: 11 }, color: '#4A4A4A', callback: (v: any) => `$${v}bn` }, title: { display: true, text: 'USD Billions', font: { family: "'Source Sans 3', sans-serif", size: 10 }, color: '#6B6B6B' } }
        }
      }
    })
  }
}

export default function ILSInstitutionalCapitalPage() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"
        strategy="afterInteractive"
        onLoad={initCharts}
      />

      <div id="art-ils">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

          #art-ils {
            --crimson: #A81C1C;
            --crimson-light: #C62828;
            --crimson-pale: #FEF2F2;
            --cobalt: #1B3A7A;
            --cobalt-light: #2751A3;
            --cobalt-pale: #EEF2FF;
            --amber: #C97A06;
            --amber-light: #D97706;
            --amber-pale: #FFFBEB;
            --ink: #161616;
            --ink-2: #2D2D2D;
            --ink-3: #4A4A4A;
            --ink-4: #6B6B6B;
            --rule: #D4D0C8;
            --rule-light: #E8E5DE;
            --paper: #F8F6F1;
            --white: #FFFFFF;
            --serif: 'EB Garamond', Georgia, serif;
            --sans: 'Source Sans 3', system-ui, sans-serif;
            --mono: 'JetBrains Mono', monospace;
            background: var(--paper);
            color: var(--ink);
            font-family: var(--serif);
            line-height: 1.7;
            -webkit-font-smoothing: antialiased;
          }

          #art-ils *, #art-ils *::before, #art-ils *::after { box-sizing: border-box; margin: 0; padding: 0; }

          #art-ils .masthead { background: var(--cobalt); padding: 0; position: relative; overflow: hidden; }
          #art-ils .masthead-bar { background: var(--crimson); height: 5px; width: 100%; }
          #art-ils .masthead-inner { max-width: 980px; margin: 0 auto; padding: 48px 40px 40px; display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 40px; }
          #art-ils .firm-wordmark { font-family: var(--sans); font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.55); margin-bottom: 16px; }
          #art-ils .report-label { font-family: var(--sans); font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--amber-light); margin-bottom: 10px; }
          #art-ils .main-title { font-family: var(--serif); font-size: clamp(30px, 4vw, 44px); font-weight: 500; color: #FFFFFF; line-height: 1.2; letter-spacing: -0.01em; margin-bottom: 12px; }
          #art-ils .main-subtitle { font-family: var(--serif); font-size: 17px; font-weight: 400; font-style: italic; color: rgba(255,255,255,0.7); line-height: 1.5; max-width: 560px; }
          #art-ils .masthead-meta { text-align: right; flex-shrink: 0; }
          #art-ils .meta-item { font-family: var(--sans); font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.45); letter-spacing: 0.05em; margin-bottom: 4px; }
          #art-ils .meta-item strong { color: rgba(255,255,255,0.8); font-weight: 600; }
          #art-ils .masthead-divider { background: rgba(255,255,255,0.12); height: 1px; max-width: 980px; margin: 0 auto; }
          #art-ils .masthead-bottom { max-width: 980px; margin: 0 auto; padding: 14px 40px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
          #art-ils .tag-list { display: flex; gap: 8px; flex-wrap: wrap; }
          #art-ils .tag { font-family: var(--sans); font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.2); padding: 3px 8px; border-radius: 2px; }
          #art-ils .reading-time { font-family: var(--sans); font-size: 11px; color: rgba(255,255,255,0.35); letter-spacing: 0.05em; }

          #art-ils .page-wrap { max-width: 980px; margin: 0 auto; padding: 0 40px; }

          #art-ils .exec-summary { background: var(--white); border-left: 4px solid var(--crimson); padding: 28px 32px; margin: 40px 0 0; }
          #art-ils .exec-summary-label { font-family: var(--sans); font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--crimson); margin-bottom: 14px; }
          #art-ils .exec-summary p { font-family: var(--serif); font-size: 16.5px; line-height: 1.7; color: var(--ink-2); margin-bottom: 10px; }
          #art-ils .exec-summary p:last-child { margin-bottom: 0; }

          #art-ils .stat-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 32px 0; }
          #art-ils .stat-cell { background: var(--white); padding: 22px 20px; text-align: center; }
          #art-ils .stat-number { font-family: var(--serif); font-size: 30px; font-weight: 600; color: var(--cobalt); line-height: 1.1; margin-bottom: 4px; letter-spacing: -0.02em; }
          #art-ils .stat-number.accent { color: var(--crimson); }
          #art-ils .stat-number.amber { color: var(--amber); }
          #art-ils .stat-label { font-family: var(--sans); font-size: 11px; font-weight: 500; color: var(--ink-4); line-height: 1.35; letter-spacing: 0.01em; }
          #art-ils .stat-source { font-family: var(--sans); font-size: 9.5px; color: var(--ink-4); margin-top: 4px; font-style: italic; }

          #art-ils .section { padding: 40px 0; border-top: 1px solid var(--rule-light); }
          #art-ils .section:first-of-type { border-top: none; }
          #art-ils .section-number { font-family: var(--sans); font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--crimson); margin-bottom: 8px; display: block; }

          #art-ils h2 { font-family: var(--serif); font-size: 26px; font-weight: 500; color: var(--ink); line-height: 1.3; letter-spacing: -0.01em; margin-bottom: 20px; }
          #art-ils h3 { font-family: var(--serif); font-size: 18px; font-weight: 600; color: var(--cobalt); margin: 32px 0 10px; letter-spacing: -0.01em; }
          #art-ils p { font-family: var(--serif); font-size: 16.5px; line-height: 1.75; color: var(--ink-2); margin-bottom: 16px; }
          #art-ils p:last-child { margin-bottom: 0; }
          #art-ils strong { font-weight: 600; color: var(--ink); }

          #art-ils .chart-block { background: var(--white); border: 1px solid var(--rule); margin: 32px 0; padding: 28px 28px 20px; }
          #art-ils .chart-title { font-family: var(--sans); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 4px; }
          #art-ils .chart-subtitle { font-family: var(--sans); font-size: 12.5px; font-weight: 400; color: var(--ink-4); margin-bottom: 20px; }
          #art-ils .chart-canvas-wrap { position: relative; height: 280px; }
          #art-ils .chart-source { font-family: var(--sans); font-size: 10px; color: var(--ink-4); margin-top: 14px; font-style: italic; border-top: 1px solid var(--rule-light); padding-top: 10px; }

          #art-ils .pull-quote { border-top: 2px solid var(--crimson); border-bottom: 1px solid var(--rule-light); padding: 20px 0; margin: 32px 0; }
          #art-ils .pull-quote p { font-family: var(--serif); font-size: 19px; font-weight: 400; font-style: italic; line-height: 1.55; color: var(--cobalt); margin-bottom: 0; }

          #art-ils .allocator-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 28px 0; }
          #art-ils .allocator-card { background: var(--white); padding: 20px 22px; }
          #art-ils .allocator-name { font-family: var(--sans); font-size: 12px; font-weight: 700; color: var(--cobalt); letter-spacing: 0.03em; text-transform: uppercase; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid var(--rule-light); }
          #art-ils .allocator-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px; }
          #art-ils .allocator-key { font-family: var(--sans); font-size: 11px; font-weight: 400; color: var(--ink-4); }
          #art-ils .allocator-val { font-family: var(--mono); font-size: 12px; font-weight: 500; color: var(--ink); letter-spacing: -0.02em; }
          #art-ils .allocator-val.green { color: #166534; }
          #art-ils .allocator-val.red { color: var(--crimson); }

          #art-ils .instrument-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-family: var(--sans); font-size: 12.5px; }
          #art-ils .instrument-table thead { background: var(--cobalt); color: white; }
          #art-ils .instrument-table thead th { padding: 10px 14px; text-align: left; font-weight: 600; font-size: 10.5px; letter-spacing: 0.08em; text-transform: uppercase; border: none; }
          #art-ils .instrument-table tbody tr { border-bottom: 1px solid var(--rule-light); }
          #art-ils .instrument-table tbody tr:nth-child(even) { background: var(--paper); }
          #art-ils .instrument-table td { padding: 10px 14px; color: var(--ink-2); vertical-align: top; line-height: 1.4; }
          #art-ils .instrument-table td:first-child { font-weight: 600; color: var(--cobalt); white-space: nowrap; }

          #art-ils .badge { display: inline-block; font-size: 9.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 2px 6px; border-radius: 2px; }
          #art-ils .badge-liq { background: #DCFCE7; color: #166534; }
          #art-ils .badge-semi { background: var(--amber-pale); color: #92400E; }
          #art-ils .badge-illiq { background: var(--crimson-pale); color: var(--crimson); }

          #art-ils .callout { border: 1px solid var(--amber-light); border-left: 4px solid var(--amber-light); background: var(--amber-pale); padding: 20px 24px; margin: 28px 0; }
          #art-ils .callout-label { font-family: var(--sans); font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--amber); margin-bottom: 8px; }
          #art-ils .callout p { font-size: 14.5px; color: #1C1C1C; margin-bottom: 6px; }

          #art-ils .rate-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-family: var(--sans); font-size: 12.5px; border: 1px solid var(--rule); }
          #art-ils .rate-table thead { background: var(--paper); border-bottom: 2px solid var(--rule); }
          #art-ils .rate-table thead th { padding: 9px 14px; font-size: 10.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); text-align: left; }
          #art-ils .rate-table tbody td { padding: 9px 14px; border-bottom: 1px solid var(--rule-light); color: var(--ink-2); }
          #art-ils .rate-table tbody td:first-child { font-weight: 500; }
          #art-ils .negative { color: #B91C1C; font-family: var(--mono); font-size: 12px; }
          #art-ils .positive { color: #166534; font-family: var(--mono); font-size: 12px; }

          #art-ils .matrix-wrap { background: var(--white); border: 1px solid var(--rule); padding: 24px 28px 20px; margin: 32px 0; }
          #art-ils .matrix-title { font-family: var(--sans); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 18px; }

          #art-ils .endnotes { border-top: 1px solid var(--rule); padding-top: 24px; margin-top: 40px; }
          #art-ils .endnotes-title { font-family: var(--sans); font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 12px; }
          #art-ils .endnotes ol { padding-left: 18px; }
          #art-ils .endnotes li { font-family: var(--sans); font-size: 10.5px; line-height: 1.6; color: var(--ink-4); margin-bottom: 4px; }

          #art-ils .footer { border-top: 3px solid var(--cobalt); margin-top: 60px; padding: 28px 0 40px; }
          #art-ils .footer-inner { display: grid; grid-template-columns: 1fr auto; gap: 32px; align-items: start; }
          #art-ils .footer-disclaimer { font-family: var(--sans); font-size: 10.5px; line-height: 1.7; color: var(--ink-4); }
          #art-ils .footer-contact { text-align: right; flex-shrink: 0; }
          #art-ils .footer-wordmark { font-family: var(--sans); font-size: 13px; font-weight: 700; letter-spacing: 0.05em; color: var(--cobalt); margin-bottom: 4px; }
          #art-ils .footer-email { font-family: var(--sans); font-size: 11px; color: var(--ink-4); }

          @media (max-width: 680px) {
            #art-ils .page-wrap { padding: 0 20px; }
            #art-ils .masthead-inner { padding: 32px 20px 28px; grid-template-columns: 1fr; }
            #art-ils .masthead-bottom { padding: 12px 20px; }
            #art-ils .masthead-meta { text-align: left; }
            #art-ils .stat-strip { grid-template-columns: repeat(2, 1fr); }
            #art-ils .allocator-grid { grid-template-columns: 1fr; }
            #art-ils .footer-inner { grid-template-columns: 1fr; }
            #art-ils .footer-contact { text-align: left; }
            #art-ils h2 { font-size: 22px; }
          }
        `}</style>

        {/* MASTHEAD */}
        <div className="masthead">
          <div className="masthead-bar"></div>
          <div className="masthead-inner">
            <div>
              <div className="firm-wordmark">Eudaimon Consulting &nbsp;|&nbsp; Strategic Insight</div>
              <div className="report-label">Explainer — Insight Note</div>
              <h1 className="main-title">The $123bn Conviction:<br />Why Institutional Capital Keeps<br />Moving Toward Insurance Risk</h1>
              <p className="main-subtitle">An explainer for senior insurance executives on why institutional investors are entering their market, what they are buying, and what it means for the competitive landscape.</p>
            </div>
            <div className="masthead-meta">
              <div className="meta-item"><strong>Date</strong><br />May 2026</div>
              <div className="meta-item" style={{marginTop:'10px'}}><strong>Pages</strong><br />Research Note</div>
              <div className="meta-item" style={{marginTop:'10px'}}><strong>Reading time</strong><br />~9 minutes</div>
            </div>
          </div>
          <div className="masthead-divider"></div>
          <div className="masthead-bottom">
            <div className="tag-list">
              <span className="tag">ILS</span>
              <span className="tag">Alternative Capital</span>
              <span className="tag">Reinsurance</span>
              <span className="tag">Asset Allocation</span>
              <span className="tag">Catastrophe Bonds</span>
              <span className="tag">Pension Funds</span>
            </div>
            <div className="reading-time">For general information only</div>
          </div>
        </div>

        {/* PAGE BODY */}
        <div className="page-wrap">

          {/* EXEC SUMMARY */}
          <div className="exec-summary">
            <div className="exec-summary-label">Overview</div>
            <p>Something significant is happening in the capital markets that sit around the insurance and reinsurance industry. The pool of institutional investors — pension funds, sovereign wealth funds, endowments, private equity — committing capital to insurance risk has grown materially, persistently, and across underwriting cycles. By the end of 2025, total alternative reinsurance capital stood at $123bn, cat bond issuance hit a record $24.7bn, and major US pension funds including CalPERS made their first formal allocations to the asset class. This note explains why.</p>
            <p>The purpose is not to advocate for any particular allocation or structure. It is to give insurance executives a clear account of the forces pulling institutional capital into their market, the structures through which that capital is deployed, and what it means for competitive dynamics, pricing, and the strategic position of traditional (re)insurers.</p>
            <p>The key insight is that institutional investors are not buying &quot;insurance risk&quot; as a generic concept. They are selecting specific premium types — complexity, illiquidity, duration, underwriting exposure — from a widening spectrum of structures. Understanding that distinction matters for any insurer or reinsurer trying to make sense of where this capital goes, why it stays, and how it influences the markets it enters.</p>
          </div>

          {/* STAT STRIP */}
          <div className="stat-strip">
            <div className="stat-cell">
              <div className="stat-number">$123bn</div>
              <div className="stat-label">Total alternative reinsurance capital outstanding, 2025</div>
              <div className="stat-source">Guy Carpenter / Howden Re</div>
            </div>
            <div className="stat-cell">
              <div className="stat-number accent">$24.7bn</div>
              <div className="stat-label">Cat bond issuance 2025 — highest in market history</div>
              <div className="stat-source">Swiss Re ILS Market Insights, Feb 2026</div>
            </div>
            <div className="stat-cell">
              <div className="stat-number amber">11.4%</div>
              <div className="stat-label">Swiss Re Cat Bond Total Return Index, full year 2025</div>
              <div className="stat-source">Swiss Re</div>
            </div>
            <div className="stat-cell">
              <div className="stat-number">60%</div>
              <div className="stat-label">Institutional investors planning to increase ILS allocations</div>
              <div className="stat-source">Gallagher Securities survey, May 2026</div>
            </div>
          </div>

          {/* SECTION 1 */}
          <div className="section">
            <span className="section-number">Section 01</span>
            <h2>The Capital Flows Don&apos;t Lie</h2>
            <p>The question for an alternatives committee is rarely whether an asset class exists. It is whether the flow of sophisticated capital into it is durable, whether the return profile is structurally sound, and whether the allocation improves the portfolio in ways that matter. On all three counts, insurance risk now has a credible institutional record.</p>
            <p>The catastrophe bond market outstanding reached nearly $60bn by year-end 2025, up from $48bn a year earlier and roughly 75% higher than in 2020. Total issuance in 2025 reached $24.7bn — the highest annual figure since the market&apos;s inception in the mid-1990s. The number of first-time sponsors increased sharply, and new perils continued to enter the market: earthquake in Israel, cyber, terrorism, and parametric structures covering previously uninsurable exposures. This is not a market servicing a narrow set of US wind and Japanese earthquake cedants. It is becoming a broad capital market for transferring underwriting risk.</p>
            <p>The investor base has changed significantly. The early ILS market was dominated by specialist hedge funds and dedicated ILS managers. The allocators anchoring the market in 2026 are substantively different in type and scale.</p>

            <div className="allocator-grid">
              <div className="allocator-card">
                <div className="allocator-name">PGGM / PFZW (Netherlands)</div>
                <div className="allocator-row"><span className="allocator-key">ILS &amp; Reinsurance AUM</span><span className="allocator-val">$8.9bn</span></div>
                <div className="allocator-row"><span className="allocator-key">% of total pension fund</span><span className="allocator-val">3%</span></div>
                <div className="allocator-row"><span className="allocator-key">2025 return (USD)</span><span className="allocator-val green">+12.4%</span></div>
                <div className="allocator-row"><span className="allocator-key">Fund size</span><span className="allocator-val">€252bn</span></div>
              </div>
              <div className="allocator-card">
                <div className="allocator-name">Florida State Board of Administration</div>
                <div className="allocator-row"><span className="allocator-key">ILS allocation</span><span className="allocator-val">$2.23bn</span></div>
                <div className="allocator-row"><span className="allocator-key">% of total fund</span><span className="allocator-val">1%</span></div>
                <div className="allocator-row"><span className="allocator-key">Allocation growth since 2018</span><span className="allocator-val green">$100m → $2.23bn</span></div>
                <div className="allocator-row"><span className="allocator-key">Fund size</span><span className="allocator-val">$222.5bn</span></div>
              </div>
              <div className="allocator-card">
                <div className="allocator-name">CalPERS (USA)</div>
                <div className="allocator-row"><span className="allocator-key">ILS allocation (end 2025)</span><span className="allocator-val">$1.45bn</span></div>
                <div className="allocator-row"><span className="allocator-key">Structures</span><span className="allocator-val">Cat bonds, quota share, priv. ILS</span></div>
                <div className="allocator-row"><span className="allocator-key">First allocation</span><span className="allocator-val">2025</span></div>
                <div className="allocator-row"><span className="allocator-key">Total AUM</span><span className="allocator-val">~$600bn</span></div>
              </div>
              <div className="allocator-card">
                <div className="allocator-name">City of Zurich Pension Fund</div>
                <div className="allocator-row"><span className="allocator-key">ILS allocation</span><span className="allocator-val">$1.58bn</span></div>
                <div className="allocator-row"><span className="allocator-key">2025 return</span><span className="allocator-val green">+6.9%</span></div>
                <div className="allocator-row"><span className="allocator-key">ILS managers</span><span className="allocator-val">10 (incl. life, casualty)</span></div>
                <div className="allocator-row"><span className="allocator-key">Growth since 2024</span><span className="allocator-val green">+38%</span></div>
              </div>
            </div>

            <p>What distinguishes these allocations from earlier waves of ILS capital is persistence. CalPERS entered in 2025 with diversified access across three structure types from the outset — quota share reinsurance, catastrophe bonds, and private collateralised reinsurance — establishing an institutional platform rather than a tactical trade. PGGM has held its allocation through two major loss years (2017 and 2022), multiple soft markets, and the trapped capital episodes that affected parts of the ILS market between 2017 and 2021. The fact that it is still adding to its position — and that the assets now amount to 3% of a €252bn pension fund — speaks to conviction grounded in long-term portfolio logic rather than return-chasing.</p>
            <p>The Gallagher Securities survey published in May 2026, covering more than 60 large institutional investors with direct allocation authority, found that 60% intend to increase their ILS positions over the next two years. The direction of travel in institutional allocations is consistent, even if the pace varies by investor type and governance framework.</p>

            <div className="chart-block">
              <div className="chart-title">Fig. 1 — Alternative Reinsurance Capital Growth</div>
              <div className="chart-subtitle">Outstanding capital in ILS market structures, USD billions (cat bonds, sidecars, collateralised reinsurance)</div>
              <div className="chart-canvas-wrap"><canvas id="altCapChart"></canvas></div>
              <div className="chart-source">Sources: Swiss Re ILS Market Insights; Aon Securities ILS Annual Report; Artemis.bm; Guy Carpenter; Howden Re. Cat bond figures from Swiss Re; total alternative capital estimates include sidecars and collateralised reinsurance.</div>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="section">
            <span className="section-number">Section 02</span>
            <h2>The Macroeconomic Case in 2026</h2>
            <p>The growth in institutional ILS capital did not begin in 2025. But the macroeconomic environment of the past three years has materially improved the relative attractiveness of insurance risk, and understanding why requires examining the mechanics rather than the narrative.</p>

            <h3>Floating Rate in a Higher-for-Longer Environment</h3>
            <p>Most catastrophe bonds pay a floating coupon tied to US Treasury money market rates plus a spread representing the insurance risk premium. When base rates were near zero, the total return depended almost entirely on that spread. With three-month US Treasury yields still above 4%, cat bonds now offer a genuinely attractive all-in yield — 11.4% on the Swiss Re Total Return Index for full-year 2025 — without duration risk. For pension allocators managing liability mismatches, fixed income exposure to rising yields has been a source of significant mark-to-market pain since 2022. Cat bonds do not carry that risk, and the floating rate structure means that investors are not locked into spreads established at today&apos;s pricing as rates eventually move.</p>

            <h3>What Correlation Means in Practice</h3>
            <p>The phrase &quot;uncorrelated returns&quot; has become almost meaningless through overuse. What it actually means in the context of short-tail insurance risk — catastrophe bonds covering US hurricane, Japanese earthquake, European windstorm — is that loss events are driven by physical processes that have no causal relationship with credit cycles, equity risk premia, or monetary policy. When credit markets sold off in Q1 2025 amid tariff uncertainty, the Swiss Re Cat Bond Index continued generating positive returns. That is not a coincidence or a temporary anomaly. It reflects the absence of any economic transmission mechanism connecting sovereign bond yields to the frequency of Atlantic hurricanes.</p>
            <p>This distinction matters enormously when examining what has happened to other alternative asset classes. Private credit spreads have tightened substantially since 2022 as capital has flooded the market. Middle-market direct lending, which was generating base plus 600–700bps in 2022 and 2023, is now pricing materially tighter as competition from bank re-entry, CLO demand, and new entrant capital weighs on spreads. Infrastructure debt and real asset strategies are experiencing similar dynamics. In an environment where traditional alternative risk premia are compressing because capital is competing them away, insurance risk offers something structurally different: a pool of exposures that cannot be arbitraged because the underlying supply of risk is determined by the physical world, not by investor appetite.</p>

            <div className="pull-quote">
              <p>&quot;The underlying supply of catastrophe risk cannot be competed away. Unlike credit spreads, which compress as lenders multiply, the frequency of major natural disasters is not sensitive to how much capital is available to take the risk.&quot;</p>
            </div>

            <div className="chart-block">
              <div className="chart-title">Fig. 2 — 2025 Risk-Adjusted Return Comparison</div>
              <div className="chart-subtitle">Full-year 2025 returns across alternative and fixed income asset classes</div>
              <div className="chart-canvas-wrap"><canvas id="returnChart"></canvas></div>
              <div className="chart-source">Sources: Swiss Re Cat Bond Total Return Index (cat bonds, 11.4%); ILS Advisers Fund Index (private ILS, 12.47%); EY sidecar analysis (sidecars, ~15%); Bloomberg (US high yield ~7%, equities ~16%); Preqin estimates (private credit ~10%). Private credit return reflects all-in yield, not spread alone.</div>
            </div>

            <h3>The Search for Real Return Streams</h3>
            <p>Persistent inflation, even as it moderates, has complicated liability management for pension funds and eroded the real value of fixed-rate credit positions entered at lower yields. Insurance risk has an indirect inflation sensitivity that is actually constructive for investors: as insured asset values rise with inflation, the demand for risk transfer increases, which supports spreads and premium adequacy over time. Higher replacement costs for homes and commercial properties push cedants to buy more protection, creating structural demand for ILS capacity. This does not make insurance risk an inflation hedge in any precise sense, but it does mean that inflation conditions do not erode the investment case as they do for nominal fixed-rate credit.</p>
          </div>

          {/* SECTION 3 */}
          <div className="section">
            <span className="section-number">Section 03</span>
            <h2>Why Softening Conditions Do Not Undermine the Case</h2>
            <p>The most legitimate objection to increasing ILS allocations in 2026 is that underwriting conditions have turned. Property catastrophe reinsurance rates fell 12% globally at the January 2026 renewal, with European rates down 15% and retrocession pricing off more than 16%. The cycle has clearly turned from the hard market of 2022–2024.</p>
            <p>This concern is real but analytically incomplete. Three things need to be understood about the current soft market before drawing conclusions about capital returns.</p>

            <div className="chart-block" style={{padding:'22px 26px 18px'}}>
              <div className="chart-title">Fig. 3 — Reinsurance &amp; Insurance Pricing Dynamics Across Key Lines</div>
              <div className="chart-subtitle">Rate movements and market context for property catastrophe, casualty, and cyber — January 2026 renewals and 2025 primary market</div>
              <table className="rate-table">
                <thead>
                  <tr>
                    <th>Line / Segment</th>
                    <th>Recent Rate Direction</th>
                    <th>Jan 2026 / 2025 Movement</th>
                    <th>ILS Relevance</th>
                    <th>Key Dynamic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td colSpan={5} style={{background:'var(--cobalt-pale)',color:'var(--cobalt)',fontFamily:'var(--sans)',fontSize:'10px',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',padding:'8px 14px'}}>Property Catastrophe Reinsurance</td></tr>
                  <tr>
                    <td>Global Property Cat (Guy Carpenter Index)</td>
                    <td className="negative">Softening</td>
                    <td className="negative">−12.0%</td>
                    <td>Cat bonds, sidecars, collat. re</td>
                    <td>Still 38% above 2017 trough; reinsurer ROE ~17.6%</td>
                  </tr>
                  <tr>
                    <td>US Property Cat</td>
                    <td className="negative">Softening</td>
                    <td className="negative">−12.0%</td>
                    <td>Dominant ILS peril</td>
                    <td>66% cumulative increase since 2017 still intact</td>
                  </tr>
                  <tr>
                    <td>European Property Cat</td>
                    <td className="negative">Softening (fastest)</td>
                    <td className="negative">−15.0%</td>
                    <td>Cat bonds, ILWs</td>
                    <td>Excess capacity weighing hardest on European placements</td>
                  </tr>
                  <tr>
                    <td>Property Retrocession (Howden Re)</td>
                    <td className="negative">Softening</td>
                    <td className="negative">−16.5%</td>
                    <td>Private ILS, sidecars</td>
                    <td>Capacity exceeded demand; buyers requested up to $800m additional limit</td>
                  </tr>
                  <tr><td colSpan={5} style={{background:'var(--amber-pale)',color:'#92400E',fontFamily:'var(--sans)',fontSize:'10px',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',padding:'8px 14px'}}>Casualty Reinsurance &amp; Long-Tail Lines</td></tr>
                  <tr>
                    <td>US General Liability / Umbrella</td>
                    <td className="positive">Mixed — modest upward pressure</td>
                    <td>Flat to +3–5% (loss-affected)</td>
                    <td>Casualty sidecars, reserve LPTs</td>
                    <td>Social inflation; nuclear verdicts driving reserve concern and cedant demand for capital</td>
                  </tr>
                  <tr>
                    <td>US Workers&apos; Compensation</td>
                    <td className="negative">Competitive / softening</td>
                    <td className="negative">Flat to −3%</td>
                    <td>Casualty ILS</td>
                    <td>Favourable frequency; loss cost stability; attractive for sidecar structures</td>
                  </tr>
                  <tr>
                    <td>D&amp;O / Professional Liability (Global)</td>
                    <td className="negative">Softening</td>
                    <td className="negative">−10 to −20%</td>
                    <td>Specialty sidecars, Lloyd&apos;s vehicles</td>
                    <td>Hard market unwind; excess capacity from new entrants; rate still above 2019 levels</td>
                  </tr>
                  <tr>
                    <td>Casualty Reserve Adequacy</td>
                    <td style={{color:'#92400E',fontFamily:'var(--mono)',fontSize:'11.5px'}}>Under scrutiny</td>
                    <td style={{color:'#92400E'}}>Ongoing adverse development risk</td>
                    <td>Reserve sidecars, LPTs</td>
                    <td>Social inflation and tort system changes create long-tail reserve uncertainty; LPT demand rising</td>
                  </tr>
                  <tr><td colSpan={5} style={{background:'#ECFDF5',color:'#065F46',fontFamily:'var(--sans)',fontSize:'10px',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',padding:'8px 14px'}}>Cyber Insurance &amp; Reinsurance</td></tr>
                  <tr>
                    <td>Primary Cyber (Global market ~$16.3bn)</td>
                    <td className="negative">Normalising after hard market</td>
                    <td className="negative">−3 to −15% (well-managed risks)</td>
                    <td>Cyber cat bonds (emerging)</td>
                    <td>After 50–200% rate increases in 2021–2023, capacity has returned; ransomware stabilising</td>
                  </tr>
                  <tr>
                    <td>Cyber Reinsurance / Cat Market</td>
                    <td className="positive">Growing structural demand</td>
                    <td>Nascent; spreads reflecting model uncertainty</td>
                    <td>Cyber cat bonds, parametric ILS</td>
                    <td>Cyber now recognised as ILS &quot;third peak peril&quot; alongside US wind and Japan quake</td>
                  </tr>
                  <tr>
                    <td>Systemic / Accumulation Risk</td>
                    <td style={{color:'#065F46',fontFamily:'var(--mono)',fontSize:'11.5px'}}>Key constraint</td>
                    <td>Pricing reflects model immaturity</td>
                    <td>Limits ILS scale for now</td>
                    <td>Correlated loss scenarios (cloud outage, protocol attack) limit how much ILS can absorb today</td>
                  </tr>
                </tbody>
              </table>
              <div className="chart-source">Sources: Guy Carpenter January 2026 Reinsurance Renewal Report; Howden Re January 2026 renewal analysis; Aon Reinsurance Market Dynamics January 2026; AM Best cyber market analysis; Artemis.bm; NAIC; Willis Re. Rate movements reflect risk-adjusted changes on brokered placements. Casualty figures are indicative ranges; outcomes varied materially by cedant, programme structure, and loss history.</div>
            </div>

            <p>First, absolute pricing remains historically elevated. The Guy Carpenter Global Property Catastrophe Rate-on-Line Index still sits above every year from 2014 through 2022 inclusive, and 38% above its 2017 trough. The 2026 renewal was softer than 2025, which was itself softer than 2024, but the level of pricing remains consistent with meaningful underwriting profitability. Reinsurers are expected to generate returns on equity of roughly 17.6% in 2025, comfortably exceeding their cost of equity for the third consecutive year.</p>
            <p>Second, the soft market is a rational and expected response to the capital thesis working. Capital has entered the market because returns were attractive. That capital is now competing rates lower, which is exactly what happens in efficient risk markets. The appropriate question is not whether rates have fallen from their peak, but whether current pricing offers adequate risk-adjusted returns relative to alternatives — and on that measure, the comparison remains favourable.</p>
            <p>Third, the softening has been structurally contained in a way that earlier cycles were not. Reinsurers maintained higher attachment points and stricter terms from 2023, and in 2025 bore only 11% of total insured catastrophe losses despite $121bn in industry losses — compared to 20% in years preceding the 2023 market restructuring. That means underlying underwriting profitability has been resilient even in a period of elevated catastrophe activity. For ILS investors in catastrophe bonds, losses affecting the outstanding portfolio have remained limited, supporting the strong return environment despite cat activity.</p>

            <div className="callout">
              <div className="callout-label">Analytical Note: Spread Compression vs. Absolute Return</div>
              <p>Cat bond spreads have tightened from their 2023–2024 peaks. But the relevant comparison is against alternatives, not against prior peak levels. The cat bond risk premium still exceeds average US 1–3 year high-yield spreads despite compression, with comparable or lower default rates. Empirical cat bond default rates are roughly equivalent to BB+ rated credit — but pricing has historically reflected higher spreads than equivalent rated corporate bonds. Even in a normalised environment, cat bonds have typically offered 100–200bps of additional spread versus credit of comparable rating quality, without the correlation to credit cycles that corporate high yield carries.</p>
            </div>
          </div>

          {/* SECTION 4 */}
          <div className="section">
            <span className="section-number">Section 04</span>
            <h2>The Instrument Spectrum: What Institutional Capital Is Actually Choosing</h2>
            <p>One reason early ILS commentary struggled to gain traction with generalist allocators was that it treated the market as a single asset class with a single risk/return profile. The reality has always been more differentiated, and that differentiation has increased substantially as the market has matured. Institutional investors are not buying &quot;insurance risk.&quot; They are selecting specific premium types from a spectrum of structures that differ meaningfully in liquidity, duration, complexity, and the nature of the underwriting exposure they provide.</p>

            <table className="instrument-table">
              <thead>
                <tr>
                  <th>Structure</th>
                  <th>Liquidity</th>
                  <th>2025 Market Size</th>
                  <th>Typical Return Profile</th>
                  <th>Key Investor Appeal</th>
                  <th>Current Concern</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Catastrophe Bonds (144A)</td>
                  <td><span className="badge badge-liq">Liquid</span></td>
                  <td>~$60bn outstanding</td>
                  <td>~10–12% all-in (2025); floating rate</td>
                  <td>Transparent, scalable, rated, secondary market</td>
                  <td>Spread compression as capital deepens</td>
                </tr>
                <tr>
                  <td>Industry Loss Warranties (ILWs)</td>
                  <td><span className="badge badge-semi">Semi-liquid</span></td>
                  <td>Estimated $10–15bn</td>
                  <td>Higher spreads than cat bonds; basis risk</td>
                  <td>Binary trigger; easier modelling; faster settlement</td>
                  <td>Basis risk vs. actual loss; model dependency</td>
                </tr>
                <tr>
                  <td>Collateralised Reinsurance</td>
                  <td><span className="badge badge-illiq">Illiquid</span></td>
                  <td>Part of $123bn total alt. capital</td>
                  <td>12–15%+ (illiquidity premium)</td>
                  <td>Bespoke terms; higher spreads; direct underwriting access</td>
                  <td>Model risk; trapped capital; manager selection</td>
                </tr>
                <tr>
                  <td>Sidecars (P&amp;C)</td>
                  <td><span className="badge badge-illiq">Illiquid</span></td>
                  <td>~$19.6bn (+40% YoY)</td>
                  <td>~15% in 2025</td>
                  <td>Alignment with experienced underwriter; scalable</td>
                  <td>Sponsor quality; governance; reserving transparency</td>
                </tr>
                <tr>
                  <td>Casualty ILS / Sidecars</td>
                  <td><span className="badge badge-illiq">Illiquid</span></td>
                  <td>~$1.7bn+ active (nascent)</td>
                  <td>Underwriting + investment return; lower vol.</td>
                  <td>Brings private credit logic; float management; diversifier vs. cat</td>
                  <td>Long tail uncertainty; social inflation; reserve development</td>
                </tr>
                <tr>
                  <td>Cyber Cat Bonds</td>
                  <td><span className="badge badge-liq">Liquid</span></td>
                  <td>Emerging; 3rd peak peril in ILS</td>
                  <td>Higher spreads; anthropogenic risk</td>
                  <td>Non-meteorological correlation; structurally innovative</td>
                  <td>Model immaturity; accumulation risk; trigger design</td>
                </tr>
                <tr>
                  <td>Life / Mortality Bonds</td>
                  <td><span className="badge badge-semi">Semi-liquid</span></td>
                  <td>Niche; used by major life insurers</td>
                  <td>Long duration; mortality/longevity driven</td>
                  <td>Genuine diversifier; regulatory capital efficiency for sponsors</td>
                  <td>Long duration; pandemic tail risk; complex modelling</td>
                </tr>
                <tr>
                  <td>Reserve Sidecars / LPTs</td>
                  <td><span className="badge badge-illiq">Illiquid</span></td>
                  <td>Private; growing private credit crossover</td>
                  <td>Asset-liability management premium; credit-like structure</td>
                  <td>Reserve adequacy play; defined cash flows; private credit adjacent</td>
                  <td>Adverse development risk; reserving uncertainty; long tail</td>
                </tr>
              </tbody>
            </table>

            <h3>The Cat Bond Market: Depth and Normalisation</h3>
            <p>Cat bonds remain the most accessible and transparent entry point, and the 2025 data shows continued structural maturation. Record quarterly issuance in Q2 2025, a first-time sponsor count exceeding ten, and the introduction of new peril types — including earthquake in Israel, cyber, and parametric wildfire structures — demonstrate that the market is deepening rather than concentrating. SCOR Investment Partners noted in early 2026 that January alone brought close to $3bn in new transactions across nine deals, suggesting that 2026 issuance could approach or match 2025&apos;s record. The risk for cat bond investors is not demand collapse but continued spread compression as capital supply outpaces the organic growth in cedant demand. That is a meaningful risk for those expecting 2023-level returns, but it does not undermine the absolute case.</p>

            <h3>The Sidecar Expansion: Scale and Diversification</h3>
            <p>The most striking structural development of 2025 was the near-doubling of the sidecar market to approximately $19.6bn, representing 15.8% of total ILS capacity. Sidecar structures delivered returns of roughly 15% in 2025, outperforming cat bonds and more or less in line with equities — but without the equity market correlation. More significantly, the sidecar format is now being applied beyond property catastrophe. Casualty sidecars — covering long-tail commercial liability lines — attracted institutional capital from private credit investors drawn by the aligned structure, the float management opportunity, and the low volatility of casualty returns relative to property catastrophe. In the second half of 2025, several transactions exceeding $500m each added meaningful scale to what had been a nascent market segment. EY analysis from May 2026 estimated casualty sidecar capacity at approximately 8.7% of total P&amp;C sidecar capacity, with further expansion anticipated through 2026.</p>

            <div className="chart-block">
              <div className="chart-title">Fig. 4 — Catastrophe Bond Issuance by Year</div>
              <div className="chart-subtitle">Annual 144A cat bond issuance, USD billions, 2010–2025</div>
              <div className="chart-canvas-wrap"><canvas id="issuanceChart"></canvas></div>
              <div className="chart-source">Sources: Swiss Re ILS Market Insights February 2026; Artemis Deal Directory; NAIC Insurance Topics: Insurance-Linked Securities. 2025 figure of $24.7bn represents full-year settled issuance per Swiss Re, the highest in market history.</div>
            </div>

            <h3>Casualty ILS: A Different Risk Premium Entirely</h3>
            <p>The casualty ILS market deserves specific attention because it is bringing in a genuinely different investor profile and changing the correlation argument. Casualty reserve sidecars and quota share structures offer returns driven by underwriting profitability in long-tail commercial liability lines — workers&apos; compensation, directors and officers, general liability, professional indemnity. These returns have some exposure to social inflation and reserve development, which creates a correlation with macroeconomic conditions that pure short-tail cat exposure does not carry. But they also offer something that property cat ILS cannot: the asset management return on the collateral over the multi-year development tail, and a volatility profile that is substantially lower from period to period. Private credit investors entering casualty ILS are essentially taking a view on the quality of underwriting at an insurer, combined with the return on a conservatively managed asset portfolio. That is a familiar value proposition, and it explains why the crossover between private credit and casualty ILS capital is accelerating.</p>
          </div>

          {/* MATRIX */}
          <div className="matrix-wrap">
            <div className="matrix-title">Fig. 5 — ILS Instrument Matrix: Liquidity vs. Complexity Premium</div>
            <svg viewBox="0 0 780 430" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto',display:'block'}}>
              <rect x="80" y="36" width="310" height="168" fill="rgba(254,242,242,0.45)"/>
              <rect x="390" y="36" width="370" height="168" fill="rgba(238,242,255,0.35)"/>
              <rect x="80" y="204" width="310" height="164" fill="rgba(250,250,249,0.6)"/>
              <rect x="390" y="204" width="370" height="164" fill="rgba(238,242,255,0.2)"/>
              <line x1="390" y1="36" x2="390" y2="368" stroke="#D4D0C8" strokeWidth="1" strokeDasharray="5,3"/>
              <line x1="80" y1="204" x2="760" y2="204" stroke="#D4D0C8" strokeWidth="1" strokeDasharray="5,3"/>
              <text x="235" y="58" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9" fontWeight="700" fill="#C0BAB0" letterSpacing="1.2">ILLIQUID · HIGH PREMIUM</text>
              <text x="575" y="58" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9" fontWeight="700" fill="#C0BAB0" letterSpacing="1.2">LIQUID · HIGH PREMIUM</text>
              <text x="235" y="358" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9" fontWeight="700" fill="#D0CCC3" letterSpacing="1.2">ILLIQUID · LOWER PREMIUM</text>
              <text x="575" y="358" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9" fontWeight="700" fill="#D0CCC3" letterSpacing="1.2">LIQUID · LOWER PREMIUM</text>
              <line x1="80" y1="368" x2="80" y2="40" stroke="#6B6B6B" strokeWidth="1.5"/>
              <polygon points="80,34 74,48 86,48" fill="#6B6B6B"/>
              <line x1="80" y1="368" x2="754" y2="368" stroke="#6B6B6B" strokeWidth="1.5"/>
              <polygon points="760,368 746,362 746,374" fill="#6B6B6B"/>
              <text x="90" y="385" fontFamily="'Source Sans 3',sans-serif" fontSize="10" fill="#9CA3AF">Illiquid</text>
              <text x="726" y="385" fontFamily="'Source Sans 3',sans-serif" fontSize="10" fill="#9CA3AF" textAnchor="end">Liquid</text>
              <text x="420" y="410" fontFamily="'Source Sans 3',sans-serif" fontSize="11" fill="#4A4A4A" fontWeight="700" textAnchor="middle">LIQUIDITY</text>
              <text fontFamily="'Source Sans 3',sans-serif" fontSize="11" fill="#4A4A4A" fontWeight="700" textAnchor="middle" transform="rotate(-90) translate(-200,24)">COMPLEXITY PREMIUM</text>
              <text fontFamily="'Source Sans 3',sans-serif" fontSize="10" fill="#9CA3AF" textAnchor="middle" transform="rotate(-90) translate(-352,24)">Lower</text>
              <text fontFamily="'Source Sans 3',sans-serif" fontSize="10" fill="#9CA3AF" textAnchor="middle" transform="rotate(-90) translate(-55,24)">Higher</text>
              <circle cx="640" cy="285" r="36" fill="#EEF2FF" stroke="#1B3A7A" strokeWidth="1.8"/>
              <text x="640" y="280" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="10" fill="#1B3A7A" fontWeight="700">Cat Bond</text>
              <text x="640" y="294" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9" fill="#4A4A4A">Liquid / Rated</text>
              <circle cx="490" cy="235" r="32" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.8"/>
              <text x="490" y="230" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="10" fill="#92400E" fontWeight="700">ILW</text>
              <text x="490" y="244" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9" fill="#4A4A4A">Binary trigger</text>
              <circle cx="150" cy="120" r="38" fill="#FEF2F2" stroke="#A81C1C" strokeWidth="1.8"/>
              <text x="150" y="112" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9.5" fill="#A81C1C" fontWeight="700">Collateralised</text>
              <text x="150" y="125" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9.5" fill="#A81C1C" fontWeight="700">Reinsurance</text>
              <text x="150" y="138" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="8.5" fill="#4A4A4A">Bespoke / Private</text>
              <circle cx="262" cy="105" r="36" fill="#F0FDF4" stroke="#166534" strokeWidth="1.8"/>
              <text x="262" y="99" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9.5" fill="#166534" fontWeight="700">P&amp;C Sidecar</text>
              <text x="262" y="113" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="8.5" fill="#4A4A4A">Aligned structure</text>
              <circle cx="148" cy="268" r="36" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="1.8"/>
              <text x="148" y="261" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9.5" fill="#5B21B6" fontWeight="700">Casualty ILS</text>
              <text x="148" y="275" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="8.5" fill="#4A4A4A">Long-tail / Private</text>
              <circle cx="570" cy="145" r="34" fill="#ECFDF5" stroke="#059669" strokeWidth="1.8"/>
              <text x="570" y="138" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9.5" fill="#065F46" fontWeight="700">Cyber Cat Bond</text>
              <text x="570" y="152" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="8.5" fill="#4A4A4A">Emerging / 144A</text>
              <circle cx="330" cy="258" r="36" fill="#FFF7ED" stroke="#C2410C" strokeWidth="1.8"/>
              <text x="330" y="251" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9.5" fill="#7C2D12" fontWeight="700">Reserve Sidecar</text>
              <text x="330" y="264" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9.5" fill="#7C2D12" fontWeight="700">/ LPT</text>
              <text x="330" y="277" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="8.5" fill="#4A4A4A">Structured / Private</text>
              <circle cx="440" cy="140" r="34" fill="#F0F9FF" stroke="#0369A1" strokeWidth="1.8"/>
              <text x="440" y="133" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="9.5" fill="#0C4A6E" fontWeight="700">Life / Mortality</text>
              <text x="440" y="147" textAnchor="middle" fontFamily="'Source Sans 3',sans-serif" fontSize="8.5" fill="#4A4A4A">Long duration</text>
            </svg>
            <div className="chart-source" style={{marginTop:'8px'}}>Schematic representation. Position reflects relative liquidity profile and complexity/illiquidity premium characteristics. Not drawn to scale by market size. Sources: Swiss Re, Aon Securities, EY, Artemis.bm, Schroders Capital, Willis Re.</div>
          </div>

          {/* SECTION 5 */}
          <div className="section">
            <span className="section-number">Section 05</span>
            <h2>The Real Question for Allocators in 2026</h2>
            <p>The framing that treats insurance risk as a single allocation decision misses the more important question. The CIO&apos;s committee is not choosing between &quot;ILS&quot; and &quot;private credit.&quot; They are deciding which premia types to buy, in what structure, at what liquidity profile, and with which governance overhead. The answers differ materially depending on the investor&apos;s return requirements, liability structure, governance capacity, and existing portfolio exposures.</p>
            <p>For investors with shorter liquidity horizons and high governance requirements — some sovereign wealth funds, university endowments, family offices — the catastrophe bond market offers a credible starting point. It is rated, transparent, has a functioning secondary market, and a return history extending back to the late 1990s. The asset class now has dedicated fund structures, ETF wrappers, and UCITS vehicles approaching launch, lowering the operational complexity of entry. For these investors, the relevant question is not whether to allocate, but how much of the fixed income allocation to rebalance toward floating-rate cat bond exposure, and whether the spread compression seen in 2025 is sufficient to reduce expected returns below their target.</p>
            <p>For investors with longer horizons, higher illiquidity tolerance, and stronger analytical capability — major pension funds, large endowments, some private equity vehicles — the more interesting opportunity lies further along the structure spectrum. Private collateralised reinsurance and sidecar vehicles continue to offer materially higher spreads than cat bonds, because the barriers to entry are higher: manager selection is critical, due diligence requires underwriting expertise, and the governance overhead is meaningful. The return differential in 2025 was significant — private ILS funds returned 12.47% on the ILS Advisers Fund Index, compared to 10.1% for cat bond funds — and that differential tends to widen when cat bond spreads are compressing, because private market pricing adjusts with a lag and private deals offer more bespoke terms.</p>
            <p>The casualty market is the next boundary to be crossed at scale. Private credit firms that understand liability management, asset-liability matching, and long-tail reserving are well-positioned to evaluate casualty sidecar structures, because the analytical framework transfers directly. The difference is that casualty sidecars offer the additional dimension of underwriting risk — which is both the source of excess return and the primary due diligence challenge. Investors who can credibly assess cedant underwriting quality and reserve adequacy will access a premium that generalist capital cannot. That is exactly the kind of structural advantage that sophisticated institutions have historically exploited in private markets.</p>

            <div className="callout">
              <div className="callout-label">For the Alternatives Committee: Three Questions Worth Asking</div>
              <p><strong>1. Which premium type fits our return profile?</strong> Liquid cat bonds target 9–12% all-in in the current environment. Private ILS and sidecars have historically offered 200–400bps more, with commensurate governance and liquidity requirements. Casualty structures offer lower volatility at potentially similar or lower absolute returns, with longer duration.</p>
              <p><strong>2. What is our actual correlation position?</strong> Short-tail catastrophe exposure is genuinely uncorrelated with credit cycles and equity markets. Long-tail casualty exposure has more macroeconomic sensitivity through social inflation and claims trends. These are different diversification arguments and should be evaluated separately.</p>
              <p><strong>3. What does manager selection look like in this market?</strong> The 2017–2021 period demonstrated that ILS fund performance dispersion is wide and manager quality matters enormously. The difference between top-quartile and bottom-quartile ILS managers over a decade is not a rounding error. Governance, risk modelling capability, and alignment structures should receive the same scrutiny as any private market GP selection.</p>
            </div>
          </div>

          {/* SECTION 6 */}
          <div className="section">
            <span className="section-number">Section 06</span>
            <h2>Implications for Insurers, Reinsurers, and Capital Providers</h2>
            <p>The structural expansion of alternative capital is changing competitive dynamics for traditional (re)insurers in ways that are not fully reflected in current market commentary. Alternative capital now accounts for approximately 20% of global reinsurance capacity, and its influence on pricing at renewals is now a documented feature of market dynamics rather than a marginal effect. Guy Carpenter explicitly noted that ILS investor appetite was a contributing factor to the double-digit rate declines at January 2026 renewals. When a single asset class can measurably influence pricing across the global property catastrophe market, it has passed a threshold of institutional significance.</p>
            <p>For primary insurers, the growth of alternative capital presents a genuine structuring opportunity. The spectrum of available structures — from vanilla cat bonds to complex casualty sidecars to reserve monetisation transactions — means that the cost and form of capital relief is no longer binary. Insurers with the structuring capability and investor relationships to access multiple capital types can optimise their capital stack in ways that were not commercially available a decade ago. Lloyd&apos;s London Bridge 2 vehicle, which deployed $1.92bn through diverse transactions in 2024, is an early institutional expression of this trend.</p>
            <p>For reinsurers, the strategic question is more uncomfortable. A sustained, large-scale institutional allocation to ILS compresses the pricing that has historically provided excess reinsurance returns. The reinsurance market&apos;s profitability in 2023–2025 — driven by high attachment points, better terms, and reduced exposure to frequency losses — was partly a structural reset that improved economics for all capital providers. But if the long-term effect of durable institutional capital is to keep risk transfer pricing closer to actuarially fair value, the premium that traditional reinsurers earn above their cost of capital will narrow over time. That is a return compression story for rated reinsurance equity, and a reason why some of the more sophisticated reinsurers are aggressively building their own ILS origination platforms and investor relationships rather than competing purely on balance sheet.</p>
            <p>For institutional capital providers evaluating entry or expansion, the current environment offers something that earlier entry points did not: a market with sufficient depth, manager infrastructure, regulatory familiarity, and return history to make a credible allocation without depending on a single manager or a single peril type. The risk of the market today is not that it does not work. It is that having worked, it has attracted enough capital to normalise the excess returns that attracted early movers. Managing that dynamic — choosing structures and risk layers where genuine information advantages or complexity premia persist — is the core discipline for the next decade of insurance risk investing.</p>
          </div>

          {/* ENDNOTES */}
          <div className="endnotes">
            <div className="endnotes-title">Sources &amp; References</div>
            <ol>
              <li>Swiss Re ILS Market Insights, February 2026 — 2025 issuance ($24.7bn), outstanding market (~$60bn), Swiss Re Cat Bond Total Return Index (11.4% 2025)</li>
              <li>Guy Carpenter, January 1 2026 Reinsurance Renewal Report — Global property cat ROL decline (−12%), reinsurer ROE (17.6%), reinsurers&apos; share of cat losses (11%), dedicated reinsurance capital ($660bn)</li>
              <li>Howden Re, January 2026 Renewal Analysis — property cat (−14.7%), retrocession (−16.5%), alternative capital ($124bn)</li>
              <li>Gallagher Re / Artemis.bm — Alternative reinsurance capital ($118bn H1 2025, rising to $123–124bn by year-end); Gallagher Securities institutional investor survey (60% planning to increase allocations), May 2026</li>
              <li>Aon Securities ILS Annual Report 2025 — Sidecar market ($17bn at mid-year 2025, ~70% YoY growth); total alternative capital ($121bn mid-year)</li>
              <li>EY, &quot;P&amp;C Reinsurance Sidecars: Scaling Institutional Capital&quot;, May 2026 — Sidecar market ($19.6bn, +40% YoY), sidecar returns (~15%), casualty sidecar share (8.7%)</li>
              <li>ILS Advisers Fund Index, January 2026 — Cat bond fund returns (10.1%), private ILS fund returns (12.47%) for full year 2025</li>
              <li>Artemis.bm — PGGM/PFZW ($8.9bn AUM, 12.4% 2025 return); Florida State Board of Administration ($2.23bn); CalPERS ($1.45bn, first allocations 2025); City of Zurich Pension ($1.58bn, 6.9% 2025 return)</li>
              <li>Artex Risk Solutions — &quot;ILS becoming a significant force in casualty and cyber&quot;, July 2025</li>
              <li>Willis Re — &quot;Casualty ILS set for potential exponential growth&quot;, January 2026; sidecar use-case expansion, November 2025</li>
              <li>SCOR Investment Partners, ILS Market Insights February/March 2026 — January 2026 issuance pace, spread normalisation, primary market outlook</li>
              <li>CFA Institute Enterprising Investor — ILS Growth Story, December 2025; market expansion 75%+ since 2020</li>
              <li>bfinance, &quot;Insurance-Linked Securities: Key Questions for Manager Selectors&quot;, December 2025 — Mandate design, manager selection, post-2017 lessons</li>
              <li>GAM / Swiss Re, &quot;A combination of attributes increasingly rare in fixed income&quot;, December 2025 — Cat bond default rates vs. high yield; risk premium comparison</li>
              <li>NAIC Insurance Topics: Insurance-Linked Securities, 2025 — Secondary market absorption, first-time sponsors, collateral practices</li>
              <li>Lloyd&apos;s of London — London Bridge 2 SPV deployment ($1.92bn in 2024, eight managing agents, ten institutional investors)</li>
              <li>Reinsurance News / Guy Carpenter — &quot;Alternative capital redesigning reinsurance&quot;, May 2026 — ILS influence on reinsurance dynamics; 20% of reinsurance capacity</li>
            </ol>
          </div>

          {/* FOOTER */}
          <div className="footer">
            <div className="footer-inner">
              <div className="footer-disclaimer">
                <strong>Disclaimer.</strong> This is an insight note produced by Eudaimon Consulting, a strategy consulting boutique, for general informational and educational purposes. It is not investment research, institutional analysis, or regulated financial advice of any kind. It does not constitute a solicitation, recommendation, or offer to buy or sell any financial instrument or to participate in any investment strategy or transaction. The data, analysis, and commentary are drawn from publicly available sources and are believed to be reliable at the time of publication; Eudaimon Consulting makes no representation as to their accuracy or completeness. Views expressed are those of Eudaimon Consulting and are subject to change without notice. Recipients should not rely on this note in making any commercial, investment, or strategic decision and should seek independent professional advice appropriate to their circumstances. Past performance of any market, index, or structure referenced herein is not indicative of future results. Eudaimon Consulting has no financial interest in any product, manager, or transaction referenced in this note.
              </div>
              <div className="footer-contact">
                <div className="footer-wordmark">Eudaimon Consulting</div>
                <div className="footer-email">info@eudaimon-consulting.com</div>
                <div className="footer-email" style={{marginTop:'6px',color:'#9CA3AF'}}>© 2026 Eudaimon Consulting</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
