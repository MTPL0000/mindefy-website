"use client";

import { Settings, Rocket, Database, ShieldCheck, Layers } from "lucide-react";

import { ScrollReveal, Chip, H2, fadeLeft, fadeRight } from "./ui";

/* ================================
   CASE STUDIES DATA
================================ */

const CASES = [
  {
    id: "01",
    subtitle: "Success Story 01",
    tag: "Greenfield → Scale",
    tagCls: "bg-[#EEF1FA] text-[#162560] border border-[#162560]",
    title: "The 4.5 Million User Scale",
    icon: Rocket,
    description:
      "Engineered a digital wellbeing ecosystem (YourHour) that handled growth from zero to millions of daily sessions with zero performance decay.",
    techIcons: [Rocket, Layers, ShieldCheck],
    variants: fadeLeft,
  },
  {
    id: "02",
    subtitle: "Success Story 02",
    tag: "Legacy Rescue",
    tagCls:
      "bg-[rgba(232,75,39,0.08)] text-[#E84B27] border border-[rgba(232,75,39,0.2)]",
    title: "Zero-Failure Enterprise Logistics",
    icon: Database,
    description:
      "Re-engineered a mission-critical logistics platform plagued by data inconsistency, creating layered redundancy for thousands of daily transactions.",
    techIcons: [Database, ShieldCheck, Layers],
    variants: fadeRight,
  },
];

/* ================================
   COMPONENT
================================ */

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-24 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <ScrollReveal className="text-center mb-16">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] font-poppins animate-spin-slow" />
            CASE STUDIES
          </Chip>

          <H2 className="text-center font-poppins">
            Proof:{" "}
            <span className="text-[#E84B27] font-poppins">
              Systems Under Real Load
            </span>
          </H2>
        </ScrollReveal>

        {/* Case Cards */}

        <div className="grid lg:grid-cols-2 gap-10">
          {CASES.map((c, index) => {
            const Icon = c.icon;

            return (
              <ScrollReveal key={index} variants={c.variants}>
                <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden h-full">
                  {/* Top Accent Bar */}

                  <div className="h-1 bg-gradient-to-r from-[#162560] to-[#E84B27]" />

                  <div className="p-10">
                    {/* Tag & Story */}

                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`text-xs font-poppins font-medium tracking-[0.14em] uppercase px-3 py-2 rounded-full ${c.tagCls}`}
                      >
                        {c.tag}
                      </span>

                      <span className="text-gray-300 font-poppins font-bold text-xl">
                        {c.id}
                      </span>
                    </div>

                    {/* Icon */}

                    <div className="w-14 h-14 rounded-xl bg-[#E84B27]/15 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <Icon
                        className="w-8 h-8 text-[#E84B27]"
                        strokeWidth={1.4}
                      />
                    </div>

                    {/* Subtitle */}

                    <div className="text-[#E84B27] font-poppins text-xs uppercase tracking-widest mb-2">
                      {c.subtitle}
                    </div>

                    {/* Title */}

                    <h3 className="text-[#162560] font-poppins font-extrabold text-2xl leading-tight mb-4">
                      {c.title}
                    </h3>

                    {/* Description */}

                    <p className="text-gray-500 font-poppins text-base leading-relaxed mb-8">
                      {c.description}
                    </p>

                    {/* Divider */}

                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-poppins uppercase tracking-wider">
                          System Highlights
                        </span>

                        <div className="flex gap-3">
                          {c.techIcons.map((TIcon, i) => (
                            <div
                              key={i}
                              className="w-9 h-9 rounded-lg bg-[#F8F7F4] flex items-center justify-center"
                            >
                              <TIcon
                                className="w-6 h-6 text-[#162560]"
                                strokeWidth={1.7}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}