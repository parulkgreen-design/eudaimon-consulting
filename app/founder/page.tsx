import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Award, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const credentials = [
  {
    icon: Briefcase,
    color: "#E63946",
    title: "Chief Digital Strategy Officer",
    subtitle: "Liberty Mutual Insurance",
    description:
      "Led digital transformation strategy for one of the world's largest insurers, shaping the company's AI and digital operating model.",
  },
  {
    icon: Briefcase,
    color: "#1D6FA4",
    title: "Member ExCom",
    subtitle: "AXA XL",
    description:
      "Part of the executive committee at AXA XL, driving digital capability development and innovation across the global portfolio.",
  },
  {
    icon: Briefcase,
    color: "#F4A01C",
    title: "Senior Leadership",
    subtitle: "Aviva",
    description:
      "Senior strategic role at Aviva, contributing to corporate strategy and digital transformation initiatives.",
  },
];

const recognition = [
  "Top 10 Powerful Women in Insurtech & Fintech in Europe",
  "Member — Global 100 Women in Fintech",
  "Co-author — The AI Book",
  "Distinguished Global Executive & Economist",
  "20+ Years Financial Services Experience",
];

const expertise = [
  { label: "Digital Transformation", pct: 95 },
  { label: "AI Strategy", pct: 90 },
  { label: "Corporate Strategy", pct: 92 },
  { label: "M&A Advisory", pct: 85 },
  { label: "Insurance & FS Expertise", pct: 98 },
  { label: "Technology Partnerships", pct: 88 },
];

export default function FounderPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div
          className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(230,57,70,0.7) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-8"
          style={{
            background:
              "radial-gradient(circle, rgba(29,111,164,0.6) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <p className="mono-label text-[#E63946] mb-6">Our Founder</p>
              <h1 className="display-xl text-white font-display mb-6">
                Parul{" "}
                <span className="italic gradient-text-red">Kaul Green</span>
              </h1>
              <p className="text-white/50 text-xl leading-relaxed mb-8">
                Distinguished global executive, economist, and strategic
                advisor. Two decades at the forefront of financial services
                transformation.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {recognition.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#E63946] text-white rounded-full font-medium hover:bg-[#c92a35] transition-all"
              >
                Work with Parul
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative flex justify-center lg:justify-end">
                {/* Decorative elements */}
                <div
                  className="absolute inset-[-30px] rounded-2xl border border-white/5"
                  style={{ transform: "rotate(3deg)" }}
                />
                <div
                  className="absolute inset-[-15px] rounded-2xl border border-white/3"
                  style={{ transform: "rotate(-2deg)" }}
                />

                <div className="relative w-[320px] h-[440px] md:w-[400px] md:h-[540px] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/assets/founder.jpg"
                    alt="Parul Kaul Green — Founder, Eudaimon Consulting"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-xl p-4">
                      <p className="font-display text-white">Parul Kaul Green</p>
                      <p className="mono-label text-white/50 text-[9px] mt-0.5">
                        Founder & Chief Strategist · Eudaimon Consulting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* Bio */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="mono-label text-[#1D6FA4] mb-6">Biography</p>
                <div className="space-y-6 text-white/60 leading-relaxed text-base">
                  <p>
                    Parul Kaul Green is a distinguished global executive and
                    economist with over two decades of experience in financial
                    services. She has spent her career at the intersection of
                    digital innovation, strategic transformation, and corporate
                    development — helping major global insurers and financial
                    services companies navigate some of the most complex
                    challenges in the industry.
                  </p>
                  <p>
                    Her most recent executive role was as Chief Digital Strategy
                    Officer at Liberty Mutual, where she was part of the global
                    senior leadership team responsible for shaping the
                    company&apos;s digital transformation agenda. Prior to
                    Liberty Mutual, she held a position as Member of the
                    Executive Committee at AXA XL, and has held senior
                    leadership roles at Aviva.
                  </p>
                  <p>
                    Across these roles, Parul has led digital transformation
                    programmes, driven innovation strategies, built technology
                    partnerships, and delivered M&A transactions that created
                    substantial value — including $100 million in digital
                    revenue, $1.5 billion pipelines, and £20 million in
                    top-line growth through strategic acquisitions.
                  </p>
                  <p>
                    Recognised as one of the{" "}
                    <span className="text-white/80">
                      Top 10 Powerful Women in Insurtech and Fintech in Europe
                    </span>{" "}
                    and a member of the global{" "}
                    <span className="text-white/80">100 Women in Fintech</span>{" "}
                    list, Parul brings a rare combination of commercial
                    credibility, strategic depth, and digital expertise to every
                    engagement.
                  </p>
                  <p>
                    She is the co-author of{" "}
                    <span className="text-white/80 italic">The AI Book</span>,
                    and a frequent speaker on digital transformation, AI
                    strategy, and responsible innovation in financial services.
                  </p>
                  <p>
                    Parul founded Eudaimon Consulting to bring this depth of
                    senior expertise directly to organisations navigating their
                    most critical strategic moments — without the overhead of a
                    large consulting firm, and with the personal commitment of
                    someone who has sat in the seat of the leaders she serves.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection delay={200}>
                {/* The AI Book */}
                <div className="glass rounded-2xl p-6 mb-6">
                  <BookOpen size={20} className="text-[#F4A01C] mb-4" />
                  <p className="mono-label text-[#F4A01C] text-[9px] mb-2">
                    Co-Author
                  </p>
                  <p className="font-display text-white text-xl mb-2 italic">
                    The AI Book
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Contributing author to the landmark publication on
                    artificial intelligence in financial services.
                  </p>
                </div>

                {/* Awards */}
                <div className="glass rounded-2xl p-6">
                  <Award size={20} className="text-[#E63946] mb-4" />
                  <p className="mono-label text-[#E63946] text-[9px] mb-4">
                    Recognition
                  </p>
                  <div className="space-y-3">
                    {recognition.map((r) => (
                      <div key={r} className="flex gap-2 items-start">
                        <div className="w-1 h-1 rounded-full bg-[#E63946] mt-2 flex-shrink-0" />
                        <p className="text-white/50 text-xs leading-relaxed">
                          {r}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="mono-label text-[#F4A01C] mb-4">Career</p>
            <h2 className="display-md text-white font-display mb-16">
              Senior leadership across{" "}
              <span className="italic">global insurers</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((cred, i) => (
              <AnimatedSection key={cred.title} delay={i * 100}>
                <div className="glass rounded-2xl p-8 h-full card-hover group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${cred.color}20` }}
                  >
                    <cred.icon size={22} style={{ color: cred.color }} />
                  </div>
                  <p
                    className="mono-label text-[9px] mb-2"
                    style={{ color: cred.color }}
                  >
                    {cred.subtitle}
                  </p>
                  <p className="font-display text-white text-xl mb-4">
                    {cred.title}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise bars */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="mono-label text-[#1D6FA4] mb-4">Areas of Expertise</p>
            <h2 className="display-md text-white font-display mb-12">
              Deep domain <span className="italic">mastery</span>
            </h2>
            <div className="space-y-6">
              {expertise.map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60 text-sm">{item.label}</span>
                    <span className="mono-label text-white/30 text-[9px]">
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${item.pct}%`,
                        background: i % 3 === 0 ? "#E63946" : i % 3 === 1 ? "#1D6FA4" : "#F4A01C",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="display-md text-white font-display mb-6">
              Work with a{" "}
              <span className="italic gradient-text-red">
                truly senior advisor.
              </span>
            </h2>
            <p className="text-white/40 mb-10">
              Bring Parul&apos;s two decades of financial services expertise
              directly into your organisation.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E63946] text-white rounded-full font-medium hover:bg-[#c92a35] transition-all"
            >
              Get in Touch
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
