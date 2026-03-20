"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerGrid, Chip, H2, fadeLeft, fadeUp } from "./ui";

const ITEMS = [
  {
    num: "01",
    icon: "🎯",
    title: "Product Thinking Before Feature Lists",
    desc: 'We define the "why" before the "how." No feature gets built without a validated systems rationale.',
  },
  {
    num: "02",
    icon: "🏗",
    title: "Architecture Before UI Polish",
    desc: "We don't decorate what isn't structurally sound. Foundation first, finishes second — always.",
  },
  {
    num: "03",
    icon: "📡",
    title: "Observability Before Assumptions",
    desc: "Monitoring is built into core logic so the system signals stress before failure occurs.",
  },
];

export default function ArchPhilosophy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal variants={fadeLeft}>
            <Chip>Architectural Philosophy</Chip>
            <H2>
              We Design <span className="text-[#E84B27]">Decision Systems</span>
            </H2>
            <p className="text-gray-500 text-[17px] leading-relaxed mb-4">
              Every application is a system of decisions: how data flows, where
              logic lives, and what breaks first. While most agencies optimize
              for delivery milestones, we optimize for long-term system
              behavior.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-[#162560]">
                We Don&apos;t &ldquo;Build Apps.&rdquo;
              </strong>{" "}
              We Engineer Predictable Systems.
            </p>
          </ScrollReveal>

          {/* Right */}
          <StaggerGrid className="space-y-4">
            {ITEMS.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex gap-5 items-start bg-[#F8F7F4] rounded-xl p-6 border border-transparent hover:border-[#162560]/15 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEF1FA] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#162560] transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <div
                    className="text-[#E84B27] text-[10px] font-medium tracking-[0.18em] uppercase mb-1"
                    style={{ fontFamily: "monospace" }}
                  >
                    {item.num}
                  </div>
                  <h3 className="text-[#162560] font-bold text-[15px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
