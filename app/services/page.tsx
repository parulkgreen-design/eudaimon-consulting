import Link from "next/link";
import { ArrowRight, Zap, Globe, TrendingUp, Shield, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    id: "digital",
    icon: Zap,
    color: "#E63946",
    title: "Digital Transformation Strategy",
    tagline: "From legacy to leading-edge",
    description:
      "We help financial services organisations assess their digital maturity, reimagine their operating model, and build a credible path to the digital future — with a roadmap that drives real business outcomes.",
    problem:
      "Many insurers and financial services firms have launched dozens of digital pilots without achieving scale. Technology spend is rising, third-party oversight is weak, and transformation momentum stalls.",
    approach:
      "We begin with a forensic digital capability assessment, benchmarking you against industry leaders. We identify which initiatives have genuine product-market fit and scalability potential, then build a focused transformation programme.",
    outcomes: [
      "Digital capability assessment and maturity benchmarking",
      "Digital transition roadmap tailored to your business",
      "Innovation management review and alignment",
      "Technology partnership strategy",
      "Innovation delivery roadmap",
    ],
    caseStudy: {
      metric: "$100M",
      label: "Digital Revenue Generated",
      context:
        "International specialty re/insurance company — scaled from 40+ fragmented pilots to a focused digital distribution strategy.",
    },
  },
  {
    id: "ai",
    icon: Globe,
    color: "#1D6FA4",
    title: "AI Strategy",
    tagline: "Intelligence at the core",
    description:
      "Artificial intelligence is reshaping financial services faster than any previous technology wave. We help you identify where AI creates the most value in your organisation, design responsible AI operating models, and build executable implementation roadmaps.",
    problem:
      "Financial services companies face immense pressure to adopt AI, but many lack a coherent strategy. Proof-of-concept projects rarely scale. Governance is an afterthought. The risks — reputational, regulatory, operational — are real.",
    approach:
      "We map your AI opportunity landscape with rigour. We design AI operating models that balance ambition with responsibility, and we develop implementation roadmaps that move from strategy to delivery.",
    outcomes: [
      "AI opportunity and use-case mapping",
      "Responsible AI framework development",
      "AI operating model design",
      "Build, buy, partner evaluation",
      "AI implementation and governance roadmap",
    ],
    caseStudy: {
      metric: "Build·Buy·Partner",
      label: "AI Strategy Framework",
      context:
        "UK composite insurer developed a comprehensive AI and innovation strategy incorporating digital diagnostics, wellness products, and startup studio.",
    },
  },
  {
    id: "corporate",
    icon: TrendingUp,
    color: "#F4A01C",
    title: "Corporate Strategy",
    tagline: "Clarity of direction, precision of execution",
    description:
      "We help financial services leaders formulate ambitious, rigorous corporate strategies — three to five year plans that align your organisation, energise your leadership team, and create lasting competitive advantage.",
    problem:
      "Many financial services companies operate without a clear, distinctive strategy. Decisions are reactive. Growth stalls. Cost programmes erode morale without improving performance.",
    approach:
      "We combine rigorous analysis of internal performance data, competitive dynamics, and market opportunity with structured leadership engagement. The result is a strategy that is evidenced, owned, and executable.",
    outcomes: [
      "Three to five year corporate strategy formulation",
      "Market entry strategy development",
      "Strategic transformation and restructuring advice",
      "Cost transformation and efficiency programmes",
      "Strategic narrative and stakeholder communications",
    ],
    caseStudy: {
      metric: "10% Loss Ratio",
      label: "Improvement in 2 Years",
      context:
        "Large international commercial insurer reversed declining profitability with a focused restructuring strategy and $100M profitability improvement.",
    },
  },
  {
    id: "ma",
    icon: Shield,
    color: "#E63946",
    title: "Mergers & Acquisitions",
    tagline: "Strategic acquisition for digital capability",
    description:
      "In an era of rapid digital disruption, acquisition is often the fastest path to transformative capability. We help financial services companies identify, evaluate, negotiate, and integrate acquisitions that advance their strategic agenda.",
    problem:
      "Most financial services M&A is driven by scale logic. The most powerful acquisitions of the digital era are capability-led — acquiring technology, talent, data, or market access. Few organisations have the expertise to pursue these systematically.",
    approach:
      "We develop your acquisition thesis, identify targets that fit your strategic rationale, conduct comprehensive evaluation, and manage the negotiation process — bringing discipline and senior judgment to every stage.",
    outcomes: [
      "Strategic acquisition thesis and rationale",
      "Target identification and market scanning",
      "Due diligence oversight and evaluation",
      "Deal negotiation and term management",
      "Integration strategy and planning",
    ],
    caseStudy: {
      metric: "£20M",
      label: "Top-Line Growth via Acquisition",
      context:
        "UK health insurer expanded into eldercare adjacency, launching a healthcare ecosystem strategy from a single targeted acquisition.",
    },
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div
          className="absolute top-0 right-[20%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(230,57,70,0.7) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="mono-label text-[#E63946] mb-6">What We Offer</p>
            <h1 className="display-xl text-white font-display max-w-4xl mb-8">
              Services built for{" "}
              <span className="italic gradient-text-red">
                financial services transformation.
              </span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-2xl">
              Four integrated service pillars — each grounded in deep domain
              expertise and designed to deliver measurable commercial outcomes.
            </p>
          </AnimatedSection>

          {/* Service nav pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 mono-label text-[10px] transition-all"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* Service Detail Sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 px-6 ${i % 2 === 1 ? "bg-[#080808]" : ""}`}
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${service.color}20` }}
                    >
                      <service.icon
                        size={22}
                        style={{ color: service.color }}
                      />
                    </div>
                    <div>
                      <p
                        className="mono-label text-[9px]"
                        style={{ color: service.color }}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <h2 className="display-md text-white font-display mb-6">
                    {service.title}
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-10">
                    {service.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <p
                        className="mono-label text-[9px] mb-3"
                        style={{ color: service.color }}
                      >
                        The Problem
                      </p>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {service.problem}
                      </p>
                    </div>
                    <div>
                      <p
                        className="mono-label text-[9px] mb-3"
                        style={{ color: service.color }}
                      >
                        Our Approach
                      </p>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {service.approach}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Outcomes */}
                  <div className="glass rounded-2xl p-8">
                    <p
                      className="mono-label text-[9px] mb-6"
                      style={{ color: service.color }}
                    >
                      What We Deliver
                    </p>
                    <div className="space-y-4">
                      {service.outcomes.map((outcome) => (
                        <div key={outcome} className="flex gap-3 items-start">
                          <CheckCircle
                            size={14}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: service.color }}
                          />
                          <p className="text-white/60 text-sm">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case study preview */}
                  <div
                    className="rounded-2xl p-8 relative overflow-hidden"
                    style={{ background: `${service.color}10`, border: `1px solid ${service.color}30` }}
                  >
                    <p
                      className="mono-label text-[9px] mb-4"
                      style={{ color: service.color }}
                    >
                      Client Impact
                    </p>
                    <p
                      className="font-display text-4xl font-bold mb-1"
                      style={{ color: service.color }}
                    >
                      {service.caseStudy.metric}
                    </p>
                    <p className="text-white/70 text-sm font-medium mb-3">
                      {service.caseStudy.label}
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {service.caseStudy.context}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="display-md text-white font-display mb-6">
              Which challenge are you{" "}
              <span className="italic gradient-text-amber">facing?</span>
            </h2>
            <p className="text-white/40 mb-10">
              Let&apos;s have a conversation about how Eudaimon can support
              your strategic agenda.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E63946] text-white rounded-full font-medium hover:bg-[#c92a35] transition-all"
            >
              Talk to Us
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
