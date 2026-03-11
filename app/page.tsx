"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Zap, Globe, TrendingUp, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    icon: Zap,
    color: "#E63946",
    label: "Digital Transformation",
    description:
      "Reimagine your operating model for the digital and AI-native era. From capability assessment to full transformation roadmaps.",
  },
  {
    icon: Globe,
    color: "#1D6FA4",
    label: "AI Strategy",
    description:
      "Identify, prioritise and implement AI opportunities that create lasting competitive advantage in financial services.",
  },
  {
    icon: TrendingUp,
    color: "#F4A01C",
    label: "M&A Advisory",
    description:
      "Strategic acquisition support — from target identification and rationale development to negotiation and integration.",
  },
  {
    icon: Shield,
    color: "#E63946",
    label: "Corporate Strategy",
    description:
      "Three to five year strategies tailored to your market, competitors, and ambition — built for execution.",
  },
];

const differentiators = [
  {
    number: "01",
    title: "Boutique Senior Expertise",
    body: "Every engagement is led by a senior practitioner with two decades of financial services experience. No juniors, no hand-offs.",
  },
  {
    number: "02",
    title: "Deep Financial Services Focus",
    body: "We work exclusively with insurers, investment managers, and financial services firms — we speak your language.",
  },
  {
    number: "03",
    title: "AI-Enabled Strategy",
    body: "We embed AI thinking into every strategic recommendation. Not as an afterthought — as a core lens.",
  },
  {
    number: "04",
    title: "Built for Execution",
    body: "Our strategies come with actionable roadmaps. We don't just advise — we build the foundations for delivery.",
  },
];

const caseStudyPreviews = [
  {
    tag: "Digital Transformation",
    color: "#E63946",
    headline: "$100M digital revenue generated",
    body: "International specialty re/insurance company — digital distribution strategy from 40+ pilots to scalable execution.",
  },
  {
    tag: "M&A Advisory",
    color: "#F4A01C",
    headline: "£20M top-line growth via acquisition",
    body: "UK health insurer expanded into eldercare adjacency, launching a new healthcare ecosystem strategy.",
  },
  {
    tag: "Transformation",
    color: "#1D6FA4",
    headline: "$100M profitability improvement",
    body: "Large commercial insurer reversed loss-making trajectory with a focused 3-year restructuring roadmap.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        {/* Geometric gradient blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(29,111,164,0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(230,57,70,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(244,160,28,0.5) 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse" />
                <span className="mono-label text-white/50 text-[9px]">
                  Boutique Strategic Advisory
                </span>
              </div>

              <h1 className="display-xl text-white mb-6 font-display">
                Strategy for a{" "}
                <span className="italic gradient-text-multi">
                  Digital & AI-Native
                </span>{" "}
                Financial Future.
              </h1>

              <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
                We help financial services companies navigate digital
                transformation, build AI-powered operating models, and execute
                strategic acquisitions — with senior expertise at every step.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="group flex items-center gap-2 px-6 py-3.5 bg-[#E63946] text-white rounded-full text-sm font-medium hover:bg-[#c92a35] transition-all duration-200"
                >
                  Our Services
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-6 py-3.5 border border-white/15 text-white/70 rounded-full text-sm font-medium hover:border-white/40 hover:text-white transition-all duration-200"
                >
                  Contact Us
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "$1.5B+", label: "Pipeline Created" },
                  { value: "4", label: "Service Pillars" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-white text-2xl font-bold">
                      {stat.value}
                    </p>
                    <p className="mono-label text-white/30 text-[9px] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — founder image with decoration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute inset-[-20px] rounded-full border border-white/5" />
                <div className="absolute inset-[-40px] rounded-full border border-white/3" />

                {/* Main image container */}
                <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/assets/founder.jpg"
                    alt="Founder - Eudaimon Consulting"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />

                  {/* Founder label */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-xl px-4 py-3">
                      <p className="font-display text-white text-base">
                        Parul Kaul Green
                      </p>
                      <p className="mono-label text-white/50 text-[9px] mt-0.5">
                        Founder · Chief Strategist
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating accent cards */}
                <div className="absolute -left-10 top-16 glass rounded-xl px-4 py-3 hidden md:block">
                  <p className="mono-label text-[#E63946] text-[9px]">
                    Top 10
                  </p>
                  <p className="text-white/70 text-xs mt-0.5">
                    Women in Insurtech
                  </p>
                </div>

                <div className="absolute -right-8 bottom-32 glass rounded-xl px-4 py-3 hidden md:block">
                  <p className="mono-label text-[#F4A01C] text-[9px]">
                    Co-author
                  </p>
                  <p className="text-white/70 text-xs mt-0.5">The AI Book</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="mono-label text-[#E63946] mb-4">What We Do</p>
              <h2 className="display-lg text-white font-display">
                Four core <span className="italic">capabilities</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.label} delay={i * 100}>
                <div className="glass rounded-2xl p-6 card-hover h-full group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${cap.color}20` }}
                  >
                    <cap.icon size={18} style={{ color: cap.color }} />
                  </div>
                  <p className="font-display text-white text-lg mb-3">
                    {cap.label}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {cap.description}
                  </p>
                  <div
                    className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: cap.color }}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <p className="mono-label text-[#1D6FA4] mb-4">Why Eudaimon</p>
              <h2 className="display-lg text-white font-display mb-6">
                Not your typical{" "}
                <span className="italic gradient-text-blue">consultancy.</span>
              </h2>
              <p className="text-white/40 leading-relaxed max-w-md">
                We combine the senior expertise of a major firm with the agility
                and focus of a boutique. Every engagement is personal,
                customised, and built to last.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="group flex items-center gap-2 text-[#1D6FA4] hover:text-white transition-colors text-sm"
                >
                  Learn more about us
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((d, i) => (
                <AnimatedSection key={d.number} delay={i * 100}>
                  <div className="glass rounded-2xl p-6 h-full">
                    <p className="font-mono text-[#E63946]/40 text-xs mb-4">
                      {d.number}
                    </p>
                    <p className="font-display text-white text-base mb-2">
                      {d.title}
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {d.body}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES PREVIEW ── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
              <div>
                <p className="mono-label text-[#F4A01C] mb-4">Proven Impact</p>
                <h2 className="display-lg text-white font-display">
                  Results that{" "}
                  <span className="italic gradient-text-amber">speak.</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
              >
                View all case studies
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudyPreviews.map((cs, i) => (
              <AnimatedSection key={cs.headline} delay={i * 120}>
                <div className="relative glass rounded-2xl p-8 card-hover overflow-hidden group h-full">
                  {/* Background accent */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-20"
                    style={{
                      background: cs.color,
                      transform: "translate(30%, -30%)",
                    }}
                  />

                  <span
                    className="inline-block mono-label text-[9px] px-3 py-1 rounded-full mb-6"
                    style={{
                      color: cs.color,
                      background: `${cs.color}15`,
                    }}
                  >
                    {cs.tag}
                  </span>

                  <h3 className="font-display text-white text-xl mb-4 leading-tight">
                    {cs.headline}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed">
                    {cs.body}
                  </p>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: cs.color }}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER PREVIEW ── */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="glass rounded-3xl p-10 md:p-16 overflow-hidden relative">
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-10"
                style={{
                  background:
                    "radial-gradient(circle, #E63946 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <p className="mono-label text-[#E63946] mb-4">Our Founder</p>
                  <h2 className="display-md text-white font-display mb-6">
                    Two decades shaping financial services strategy.
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-6">
                    Parul Kaul Green brings unmatched senior experience from
                    Liberty Mutual, AXA XL, and Aviva — now channelled into
                    bespoke advisory for ambitious financial services companies.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      "Liberty Mutual",
                      "AXA XL",
                      "Aviva",
                      "Top 10 Women in Insurtech",
                      "100 Women in Fintech",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/founder"
                    className="group flex items-center gap-2 text-[#E63946] hover:text-white transition-colors text-sm"
                  >
                    Meet Parul
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                <div className="flex justify-center md:justify-end">
                  <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src="/assets/founder.jpg"
                      alt="Parul Kaul Green"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="mono-label text-white/30 mb-6">Start the Conversation</p>
            <h2 className="display-lg text-white font-display mb-6">
              Build the future of your{" "}
              <span className="italic gradient-text-multi">organisation.</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto">
              Whether you're navigating a complex transformation, exploring
              acquisitions, or building your AI strategy — we'd love to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-[#E63946] text-white rounded-full font-medium hover:bg-[#c92a35] transition-all duration-200"
              >
                Get in Touch
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/services"
                className="group flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 rounded-full font-medium hover:border-white/40 hover:text-white transition-all duration-200"
              >
                Explore Services
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
