import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/logo.jpg"
                  alt="Eudaimon Consulting"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-white font-semibold text-lg leading-none">
                  eudaimon
                </p>
                <p className="mono-label text-white/40 text-[9px] tracking-widest">
                  consulting
                </p>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Strategic advisory and digital transformation for financial
              services companies navigating the AI-native era.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#E63946]" />
              <div className="w-2 h-2 rounded-full bg-[#1D6FA4]" />
              <div className="w-2 h-2 rounded-full bg-[#F4A01C]" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mono-label text-white/30 mb-6">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Insights", "/insights"],
                ["Founder", "/founder"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mono-label text-white/30 mb-6">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:parul.kaul-green@eudaimon-consulting.com"
                className="text-sm text-white/50 hover:text-[#E63946] transition-colors break-all"
              >
                parul.kaul-green@
                <br />
                eudaimon-consulting.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-[#1D6FA4] transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-8">
              <p className="mono-label text-white/20 text-[9px]">
                Digital · Ethical · Profitable
              </p>
            </div>
          </div>
        </div>

        <div className="divider-gradient mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="mono-label text-white/20 text-[9px]">
            © 2024 Eudaimon Consulting. All rights reserved.
          </p>
          <p className="mono-label text-white/20 text-[9px]">
            Strategy for a Digital and AI-Native Financial Future
          </p>
        </div>
      </div>
    </footer>
  );
}
