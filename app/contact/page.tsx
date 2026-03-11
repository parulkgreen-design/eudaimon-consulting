"use client";
import { useState } from "react";
import { ArrowRight, Mail, Linkedin, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reasons = [
  "Digital Transformation Strategy",
  "AI Strategy & Operating Model",
  "Corporate Strategy",
  "M&A Advisory",
  "ESG Strategy",
  "Speaking Engagement",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div
          className="absolute top-0 right-[20%] w-[400px] h-[400px] rounded-full blur-[140px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(29,111,164,0.8) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="mono-label text-[#1D6FA4] mb-6">Get in Touch</p>
            <h1 className="display-xl text-white font-display max-w-3xl mb-6">
              Let&apos;s build something{" "}
              <span className="italic gradient-text-blue">extraordinary.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed max-w-2xl">
              Whether you&apos;re exploring a transformation, navigating an
              acquisition, or building your AI strategy — we&apos;d love to
              hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="divider-gradient" />

      {/* Main content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="mono-label text-white/30 mb-8">Direct Contact</p>

                <div className="space-y-6 mb-12">
                  <a
                    href="mailto:parul.kaul-green@eudaimon-consulting.com"
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E63946]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E63946]/20 transition-colors">
                      <Mail size={16} className="text-[#E63946]" />
                    </div>
                    <div>
                      <p className="mono-label text-white/30 text-[9px] mb-1">
                        Email
                      </p>
                      <p className="text-white/70 text-sm group-hover:text-white transition-colors break-all">
                        parul.kaul-green@eudaimon-consulting.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1D6FA4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1D6FA4]/20 transition-colors">
                      <Linkedin size={16} className="text-[#1D6FA4]" />
                    </div>
                    <div>
                      <p className="mono-label text-white/30 text-[9px] mb-1">
                        LinkedIn
                      </p>
                      <p className="text-white/70 text-sm group-hover:text-white transition-colors">
                        Parul Kaul Green
                      </p>
                    </div>
                  </a>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#F4A01C]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[#F4A01C]" />
                    </div>
                    <div>
                      <p className="mono-label text-white/30 text-[9px] mb-1">
                        Location
                      </p>
                      <p className="text-white/70 text-sm">
                        London, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="glass rounded-2xl p-6">
                  <p className="mono-label text-white/30 text-[9px] mb-6">
                    What to Expect
                  </p>
                  <div className="space-y-4">
                    {[
                      [
                        "01",
                        "Initial response within 24 hours",
                        "We respond to every enquiry personally.",
                      ],
                      [
                        "02",
                        "Discovery conversation",
                        "A no-obligation call to understand your situation.",
                      ],
                      [
                        "03",
                        "Tailored proposal",
                        "A bespoke approach scoped to your specific challenge.",
                      ],
                    ].map(([num, title, body]) => (
                      <div key={num} className="flex gap-3">
                        <span className="font-mono text-[#E63946]/40 text-xs mt-0.5 flex-shrink-0">
                          {num}
                        </span>
                        <div>
                          <p className="text-white/70 text-sm font-medium">
                            {title}
                          </p>
                          <p className="text-white/30 text-xs mt-0.5">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={150}>
                {submitted ? (
                  <div className="glass rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 bg-[#E63946]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={24} className="text-[#E63946]" />
                    </div>
                    <h3 className="font-display text-white text-2xl mb-3">
                      Message received.
                    </h3>
                    <p className="text-white/50">
                      Thank you for reaching out. We will be in touch within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="glass rounded-2xl p-8 md:p-10 space-y-6"
                  >
                    <p className="mono-label text-white/30 text-[9px] mb-8">
                      Send a Message
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="mono-label text-white/30 text-[9px] block mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E63946]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="mono-label text-white/30 text-[9px] block mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          placeholder="Your company"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E63946]/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mono-label text-white/30 text-[9px] block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E63946]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="mono-label text-white/30 text-[9px] block mb-2">
                        I&apos;m interested in
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {reasons.map((reason) => (
                          <button
                            key={reason}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, reason })
                            }
                            className={`px-3 py-1.5 rounded-full border mono-label text-[9px] transition-all ${
                              formData.reason === reason
                                ? "border-[#E63946] text-[#E63946] bg-[#E63946]/10"
                                : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/60"
                            }`}
                          >
                            {reason}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mono-label text-white/30 text-[9px] block mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your situation and how we can help..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E63946]/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E63946] text-white rounded-xl font-medium hover:bg-[#c92a35] transition-all duration-200"
                    >
                      Send Message
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
