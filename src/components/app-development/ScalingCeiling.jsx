"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, Chip, H2, fadeLeft } from "./ui";

const CONTENT = {
  gf: {
    tag: "For Fresh Builds",
    tagCls: "bg-[#EEF1FA] text-[#162560]",
    title: "The Greenfield Trap",
    items: [
      {
        icon: "⚡",
        t: "Speed Over Structure",
        d: 'Initial builds that become technical liabilities within months because they were optimized for "demo speed" only.',
      },
      {
        icon: "🏚",
        t: "Architectural Debt",
        d: "Most scalability problems are designed in during the first 20% of development.",
      },
      {
        icon: "🔀",
        t: "Premature Decisions",
        d: "Teams solving the wrong problems early while ignoring structural decisions that matter at scale.",
      },
    ],
  },
  lg: {
    tag: "For Legacy Systems",
    tagCls:
      "bg-[rgba(232,75,39,0.08)] text-[#E84B27] border border-[rgba(232,75,39,0.2)]",
    title: "The Legacy Wall",
    items: [
      {
        icon: "📉",
        t: "Performance Decay",
        d: "Apps that worked once but now degrade under modern user loads.",
      },
      {
        icon: "🔒",
        t: "Engineering Paralysis",
        d: "Teams stuck maintaining decisions they can't undo, making every new feature a risk.",
      },
      {
        icon: "💸",
        t: "Infrastructure Bloat",
        d: "Rising operational costs paired with declining system performance.",
      },
    ],
  },
};

const RIGHT_CARDS = [
  {
    icon: "⚡",
    title: "Technical Decisions Without Long-Term Thinking",
    stat: "20%",
    statLabel: "of dev time creates 80% of future problems",
    delay: 0,
  },
  {
    icon: "🏗",
    title: "Architecture-First Development",
    stat: "60%",
    statLabel: "reduction in technical debt average",
    delay: 0.12,
  },
  {
    icon: "📈",
    title: "Scaling-Ready From Day One",
    stat: "4.5M+",
    statLabel: "users on a single engineered ecosystem",
    delay: 0.24,
  },
];

export default function ScalingCeiling() {
  const [tab, setTab] = useState("gf");
  const c = CONTENT[tab];

  return (
    <section className="py-24 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Left ─────────────────────────────────────────────────────────── */}
          <ScrollReveal variants={fadeLeft}>
            <Chip>Diagnostic Analysis</Chip>
            <H2>
              The <span className="text-[#E84B27]">Scaling Ceiling</span>
            </H2>
            <p className="text-gray-500 text-[17px] leading-relaxed mb-8">
              Most teams don&apos;t fail because they lack developers. They fail
              because technical decisions are made without understanding
              long-term consequences.
            </p>

            {/* Tab toggle */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => setTab("gf")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer border-0 ${
                  tab === "gf"
                    ? "bg-[#162560] text-white shadow-lg"
                    : "bg-white text-[#162560] border border-gray-200 hover:border-[#162560]"
                }`}
              >
                Fresh Build
              </button>
              <button
                onClick={() => setTab("lg")}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer border-0 ${
                  tab === "lg"
                    ? "bg-[#E84B27] text-white shadow-lg"
                    : "bg-white text-[#E84B27] border border-gray-200 hover:border-[#E84B27]"
                }`}
              >
                Legacy System
              </button>
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className={`inline-block text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-5 ${c.tagCls}`}
                  style={{ fontFamily: "monospace" }}
                >
                  {c.tag}
                </span>
                <h3 className="text-[#162560] text-[22px] font-bold mb-6">
                  {c.title}
                </h3>
                <div className="space-y-4">
                  {c.items.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-[16px] flex-shrink-0 mt-0.5"
                        style={{
                          background:
                            tab === "gf" ? "#EEF1FA" : "rgba(232,75,39,0.08)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[#162560] font-bold text-sm mb-1">
                          {item.t}
                        </div>
                        <div className="text-gray-500 text-sm leading-relaxed">
                          {item.d}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>

          {/* ── Right ────────────────────────────────────────────────────────── */}
          <div className="space-y-4 lg:pt-10">
            {RIGHT_CARDS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: c.delay,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start hover:shadow-lg hover:border-[#162560]/20 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EEF1FA] flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-[#162560] transition-colors duration-300">
                  {c.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[#162560] font-semibold text-sm mb-1.5">
                    {c.title}
                  </div>
                  <div className="text-[#E84B27] font-extrabold text-xl leading-none">
                    {c.stat}{" "}
                    <span className="text-gray-400 text-xs font-normal">
                      {c.statLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
