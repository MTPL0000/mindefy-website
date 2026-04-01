"use client";

import { ScrollReveal, Chip, H2, ArrowIcon, fadeLeft, fadeRight } from "./ui";

export default function StrategicAlignment() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>Strategic Alignment</Chip>
          <H2 className="text-center">
            Choose <span className="text-[#E84B27]">Your Path</span>
          </H2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Founder */}
          <ScrollReveal variants={fadeLeft}>
            <div
              className="relative rounded-2xl p-10 lg:p-12 overflow-hidden h-full"
              style={{
                background: "linear-gradient(135deg, #0E1A45 0%, #162560 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(232,75,39,0.1) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div
                  className="text-[#FFB59E] text-[11px] font-medium tracking-[0.18em] uppercase mb-5"
                  style={{ fontFamily: "monospace" }}
                >
                  // For Founders — Fresh Build
                </div>
                <h3
                  className="text-white font-extrabold text-[26px] leading-tight mb-4"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Build a Scalable Foundation
                </h3>
                <p className="text-white/65 text-[15px] leading-relaxed mb-9">
                  Ready for Series A due diligence and rapid growth. Build it
                  right from day one so you never have to rebuild under
                  pressure.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-[#162560] font-bold px-6 py-3.5 rounded-lg text-sm hover:bg-[#EEF1FA] transition-colors shadow-lg no-underline"
                >
                  Start My MVP Architecture <ArrowIcon />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* CTO */}
          <ScrollReveal variants={fadeRight}>
            <div className="relative rounded-2xl p-10 lg:p-12 bg-white border border-gray-100 shadow-xl overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E84B27] to-[#162560]" />
              <div
                className="text-[#E84B27] text-[11px] font-medium tracking-[0.18em] uppercase mb-5"
                style={{ fontFamily: "monospace" }}
              >
                // For CTOs — Legacy Project
              </div>
              <h3
                className="text-[#162560] font-extrabold text-[26px] leading-tight mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Modernize Your Stack
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-9">
                Remove technical debt and restore engineering velocity. We
                rescue products that have become too expensive or slow to
                maintain.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#E84B27] text-white font-bold px-6 py-3.5 rounded-lg text-sm hover:bg-[#FF5C35] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgba(232,75,39,0.3)] transition-all no-underline"
              >
                Begin Legacy Audit <ArrowIcon />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
