import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const featured = {
  tag: "AI Strategy",
  color: "#E63946",
  title: "Who Controls the Customer? AI Chatbots and the Future of Insurance Distribution",
  excerpt:
    "AI chatbots are not a new customer service channel. They are a new distribution front-end that routes customers toward insurance products without the insurer's involvement. Whoever owns that interface controls discovery, comparison, and increasingly conversion.",
  readTime: "7 min read",
  date: "April 2026",
  href: "/insights/ai-distribution",
};

const insights = [
  {
    tag: "AI Strategy",
    color: "#E63946",
    title: "Who Controls the Customer? AI Chatbots and the Future of Insurance Distribution",
    excerpt:
      "AI chatbots are not a new customer service channel. They are a new distribution front-end that routes customers toward insurance products without the insurer's involvement.",
    readTime: "7 min read",
    date: "April 2026",
    href: "/insights/ai-distribution",
  },
  {
    tag: "Corporate Strategy",
    color: "#1D6FA4",
    title: "The Optimal Frontier: Finding the Balance Between Robots and Risk",
    excerpt:
      "Carriers that architect toward Optimal Autonomy will structurally reduce combined ratios by 8–15 percentage points by 2030. A strategic research note for insurance CEOs and Chief Strategy Officers.",
    readTime: "8 min read",
    date: "March 2026",
    href: "/insights/optimal-autonomy",
  },
  {
    tag: "AI Risk · Insurance",
    color: "#E63946",
    title: "From Cyber Liability to Algorithmic Malpractice: How Insurers Can Underwrite AI Risk in 2026",
    excerpt:
      "The insurance industry spent two decades building a playbook for cyber risk. That playbook is now being challenged by AI. The shift is not gradual — it is structural.",
    readTime: "6 min read",
    date: "March 2026",
    href: "/insights/algorithmic-malpractice",
  },
  {
    tag: "M&A Strategy",
    color: "#1D6FA4",
    title: "How Insurance Giants Finance Mega-Deals: The Zurich/Beazley Playbook",
    excerpt:
      "Four landmark deals. Four different financing approaches. One unifying insight: the quality of the target determines the structure of the deal.",
    readTime: "7 min read",
    date: "March 2026",
    href: "/insights/insurance-ma-financing",
  },
  {
    tag: "AI Strategy",
    color: "#E63946",
    title: "The February 9 Sell-Off: What It Really Means for Insurance Brokers",
    excerpt:
      "When two AI tools launched inside ChatGPT, broker stocks fell sharply. Markets reacted with panic. The strategic reality is far more nuanced — and more instructive for every insurer and broker.",
    readTime: "6 min read",
    date: "February 2026",
    href: "/insights/broker-ai-disruption",
  },
  {
    tag: "Digital Transformation",
    color: "#1D6FA4",
    title: "Why Most Digital Transformations in Insurance Fail",
    excerpt:
      "Financial services companies have invested billions in digital transformation. Most have little to show for it. We explore the five structural reasons transformations stall.",
    readTime: "6 min read",
    date: "November 2024",
    href: "/contact",
  },
  {
    tag: "M&A",
    color: "#F4A01C",
    title: "The Capability Acquisition Playbook",
    excerpt:
      "In the AI era, the most valuable acquisitions are rarely about scale — they are about acquiring capabilities you cannot build fast enough.",
    readTime: "7 min read",
    date: "November 2024",
    href: "/contact",
  },
  {
    tag: "Corporate Strategy",
    color: "#E63946",
    title: "Strategy in the Age of Autonomous Systems",
    excerpt:
      "When AI systems can make decisions, execute trades, underwrite risks, and serve customers autonomously — what does corporate strategy even mean?",
    readTime: "5 min read",
    date: "October 2024",
    href: "/contact",
  },
  {
    tag: "ESG Strategy",
    color: "#F4A01C",
    title: "Integrating ESG into Financial Services Strategy",
    excerpt:
      "ESG is no longer a compliance exercise. It is a strategic imperative. We explore how financial services companies can build genuine ESG strategies that create value and manage risk.",
    readTime: "7 min read",
    date: "September 2024",
    href: "/contact",
  },
];

const topics = [
  "AI Strategy",
  "Digital Transformation",
  "M&A Advisory",
  "Corporate Strategy",
  "ESG",
  "Innovation",
  "Technology Partnerships",
  "Insurance",
];

export default function InsightsPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div
          className="absolute top-0 left-[30%] w-[400px] h-[400px] rounded-full blur-[140px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(244,160,28,0.6) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="mono-label text-[#F4A01C] mb-6">Thought Leadership</p>
            <h1 className="display-xl text-white font-display max-w-4xl mb-8">
              Insights for{" "}
              <span className="italic gradient-text-amber">financial services leaders.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-2xl">
              Strategic thinking on digital transformation, AI strategy, and the future of financial services — from practitioners who have been inside the world's largest insurers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="divider-gradient" />

      <section className="py-8 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 mono-label text-[10px] transition-all cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden group card-hover">
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-10"
                style={{
                  background: `radial-gradient(circle, ${featured.color} 0%, transparent 70%)`,
                  transform: "translate(30%, -30%)",
                }}
              />
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="inline-block mono-label text-[9px] px-3 py-1 rounded-full"
                    style={{ color: featured.color, background: `${featured.color}15` }}
                  >
                    {featured.tag}
                  </span>
                  <span className="mono-label text-white/20 text-[9px]">Featured</span>
                </div>
                <h2 className="display-md text-white font-display mb-6">{featured.title}</h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">{featured.excerpt}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-white/30">
                    <Clock size={12} />
                    <span className="mono-label text-[9px]">{featured.readTime}</span>
                  </div>
                  <span className="mono-label text-white/30 text-[9px]">{featured.date}</span>
                  <Link
                    href={featured.href}
                    className="group/link flex items-center gap-2 text-sm"
                    style={{ color: featured.color }}
                  >
                    Read more
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="mono-label text-white/30 mb-10">Latest Insights</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((article, i) => (
              <AnimatedSection key={article.title} delay={i * 80}>
                <div className="glass rounded-2xl p-8 card-hover group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="mono-label text-[9px] px-3 py-1 rounded-full"
                      style={{ color: article.color, background: `${article.color}15` }}
                    >
                      {article.tag}
                    </span>
                    <span className="mono-label text-white/20 text-[9px]">{article.date}</span>
                  </div>
                  <h3 className="font-display text-white text-xl mb-4 leading-tight flex-grow">
                    {article.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-white/30">
                      <Clock size={11} />
                      <span className="mono-label text-[9px]">{article.readTime}</span>
                    </div>
                    <Link
                      href={article.href}
                      className="group/link flex items-center gap-1 mono-label text-[9px] transition-colors"
                      style={{ color: article.color }}
                    >
                      Read
                      <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="display-md text-white font-display mb-6">
              Stay ahead of the{" "}
              <span className="italic gradient-text-amber">curve.</span>
            </h2>
            <p className="text-white/40 mb-10">
              Strategic insights on AI, digital transformation, and financial services — delivered to your inbox.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E63946] text-white rounded-full font-medium hover:bg-[#c92a35] transition-all"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
