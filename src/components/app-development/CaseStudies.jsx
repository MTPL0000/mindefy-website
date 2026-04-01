"use client";

import { ScrollReveal, Chip, H2, fadeLeft, fadeRight } from "./ui";

const CASES = [
  {
    tag: "Greenfield → Scale",
    tagCls: "bg-[#EEF1FA] text-[#162560]",
    num: "01",
    title: "The 4.5 Million User Scale",
    desc: "Engineered a digital wellbeing ecosystem (YourHour) that handled growth from zero to millions of daily sessions with zero performance decay across all scaling milestones.",
    stats: [
      { l: "Users", v: "4.5M+" },
      { l: "Uptime", v: "99.99%" },
      { l: "Growth", v: "10×" },
    ],
    variants: fadeLeft,
  },
  {
    tag: "Legacy Rescue",
    tagCls:
      "bg-[rgba(232,75,39,0.08)] text-[#E84B27] border border-[rgba(232,75,39,0.2)]",
    num: "02",
    title: "Zero-Failure Enterprise Logistics",
    desc: "Re-engineered a mission-critical logistics platform plagued by data inconsistency, creating layered redundancy architecture for thousands of daily transactions without incident.",
    stats: [
      { l: "Failure Rate", v: "0%" },
      { l: "Trans./day", v: "10K+" },
      { l: "Debt Cut", v: "60%" },
    ],
    variants: fadeRight,
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-24 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>Case Studies</Chip>
          <H2 className="text-center">
            Proof:{" "}
            <span className="text-[#E84B27]">Systems Under Real Load</span>
          </H2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {CASES.map((c, i) => (
            <ScrollReveal key={i} variants={c.variants}>
              <div className="group bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden h-full">
                {/* Background number */}
                <div
                  className="absolute right-6 top-4 text-[110px] font-extrabold text-gray-100 leading-none select-none"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {c.num}
                </div>
                <span
                  className={`inline-block text-[10px] font-medium tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-5 ${c.tagCls}`}
                  style={{ fontFamily: "monospace" }}
                >
                  {c.tag}
                </span>
                <h3
                  className="text-[#162560] font-extrabold text-2xl mb-4 leading-tight relative z-10"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8 relative z-10">
                  {c.desc}
                </p>
                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-gray-100">
                  {c.stats.map((s, j) => (
                    <div key={j} className="text-center">
                      <div
                        className="text-[#162560] font-extrabold text-[22px] leading-none"
                        style={{
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                        }}
                      >
                        {s.v}
                      </div>
                      <div className="text-gray-400 text-[11px] mt-1">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
