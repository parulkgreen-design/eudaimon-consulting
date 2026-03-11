import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    color: "#E63946",
    title: "Digital",
    body: "We believe the future of financial services is digital — not as a feature, but as a foundational operating principle.",
  },
  {
    color: "#1D6FA4",
    title: "Ethical",
    body: "Sustainable profitability demands ethical foundations. We help our clients build strategies that are responsible, transparent, and future-proof.",
  },
  {
    color: "#F4A01C",
    title: "Profitable",
    body: "Good strategy creates growth. We measure our success by the commercial outcomes our clients achieve — not the volume of our deliverables.",
  },
];

const approach = [
  {
    step: "01",
    title: "Understand",
    body: "We begin every engagement with deep listening — understanding your business, your market, your people, and your ambition.",
  },
  {
    step: "02",
    title: "Diagnose",
    body: "We combine internal analysis with external benchmarking to identify precisely where opportunity lies and what is holding your organisation back.",
  },
  {
    step: "03",
    title: "Design",
    body: "We co-create strategies that are bold in vision, grounded in evidence, and tailored to your specific context — not off-the-shelf frameworks.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "We don't just hand over a deck. We develop practical roadmaps, partner with you through delivery, and measure outcomes along the way.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div
          className="absolute top-0 left-[20%] w-[400px] h-[400px] rounded-full blur-[140px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(29,111,164,0.8) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="mono-label text-[#E63946] mb-6">About Eudaimon</p>
            <h1 className="display-xl text-white font-display max-w-4xl mb-8">
              Helping organisations{" "}
              <span className="italic gradient-text-blue">flourish</span> in a
              digital world.
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-2xl">
              Eudaimon — from the ancient Greek εὐδαιμονία — means the state of
              human flourishing. True prosperity that comes not from luck, but
              from purpose, virtue, and excellent execution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <p className="mono-label text-[#F4A01C] mb-4">Our Philosophy</p>
              <h2 className="display-md text-white font-display mb-8">
                We believe great strategy creates flourishing organisations.
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed">
                <p>
                  At Eudaimon Consulting, we apply this ancient idea to modern
                  business. A truly flourishing organisation isn&apos;t simply
                  profitable — it is purposeful, adaptable, digitally capable,
                  and positioned to create value for all its stakeholders.
                </p>
                <p>
                  We work with financial services companies at their most
                  critical inflection points: navigating digital disruption,
                  integrating AI, acquiring capabilities, or redefining
                  corporate strategy for a new era.
                </p>
                <p>
                  Our mission is to help you not just survive these transitions
                  — but emerge stronger, sharper, and more competitive than
                  before.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-1 gap-4">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="glass rounded-2xl p-6 flex gap-5 items-start group card-hover"
                  >
                    <div
                      className="w-1 self-stretch rounded-full flex-shrink-0 transition-all group-hover:w-1.5"
                      style={{ background: v.color }}
                    />
                    <div>
                      <p className="font-display text-white text-xl mb-2">
                        {v.title}
                      </p>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {v.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="glass rounded-3xl p-12 md:p-20 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, #E63946 0px, #E63946 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, #1D6FA4 0px, #1D6FA4 1px, transparent 1px, transparent 20px)`,
                }}
              />
              <p className="mono-label text-white/20 mb-6">Mission</p>
              <blockquote className="font-display text-white text-2xl md:text-3xl italic leading-relaxed mb-8">
                &ldquo;We empower financial services organisations to navigate
                business challenges and seize opportunities through customised
                strategic advisory — focused on a digital, ethical, and
                sustainable future.&rdquo;
              </blockquote>
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#E63946]" />
                <div className="w-2 h-2 rounded-full bg-[#1D6FA4]" />
                <div className="w-2 h-2 rounded-full bg-[#F4A01C]" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="mono-label text-[#1D6FA4] mb-4">How We Work</p>
            <h2 className="display-md text-white font-display mb-16">
              Our approach
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((a, i) => (
              <AnimatedSection key={a.step} delay={i * 100}>
                <div className="relative glass rounded-2xl p-8 h-full group card-hover">
                  <div className="absolute top-6 right-6">
                    <span className="font-mono text-[#E63946]/20 text-5xl font-bold leading-none">
                      {a.step}
                    </span>
                  </div>
                  <div
                    className="w-8 h-0.5 mb-6"
                    style={{ background: "#E63946" }}
                  />
                  <p className="font-display text-white text-xl mb-3">
                    {a.title}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {a.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="display-md text-white font-display mb-6">
              Ready to build your{" "}
              <span className="italic gradient-text-red">AI-native future?</span>
            </h2>
            <p className="text-white/40 mb-10">
              Let&apos;s discuss how Eudaimon can support your next strategic
              move.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E63946] text-white rounded-full font-medium hover:bg-[#c92a35] transition-all"
            >
              Start the Conversation
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
