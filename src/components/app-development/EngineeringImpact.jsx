"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerGrid, Counter, Chip, H2, fadeUp } from "./ui";

const METRICS = [
  {
    numStr: null,
    numInt: 99.99,
    suffix: "%",
    label: "Uptime",
    desc: "Average availability for Mindefy-engineered core systems",
    orange: false,
  },
  {
    numStr: "4.5M+",
    numInt: null,
    label: "Users Handled",
    desc: "By our most scalable digital ecosystem to date",
    orange: true,
  },
  {
    numStr: null,
    numInt: 60,
    suffix: "%",
    label: "Debt Reduction",
    desc: "Average decrease in technical debt for modernized legacy systems",
    orange: false,
  },
  {
    numStr: "Zero",
    numInt: null,
    label: "Failure Rate",
    desc: "Maintained during high-concurrency traffic spikes",
    orange: true,
  },
];

export default function EngineeringImpact() {
  return (
    <section id="metrics" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>Engineering Impact</Chip>
          <H2 className="text-center">
            The ROI of <span className="text-[#E84B27]">High-Performance</span>{" "}
            Architecture
          </H2>
          <p className="text-gray-500 text-[17px] max-w-lg mx-auto">
            Real numbers from real systems built under real load.
          </p>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* animated bottom gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E84B27] to-[#162560] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <div
                className={`font-extrabold leading-none mb-2 tracking-tight ${
                  m.orange ? "text-[#E84B27]" : "text-[#162560]"
                }`}
                style={{
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                {m.numStr ?? <Counter end={m.numInt} suffix={m.suffix ?? ""} />}
              </div>
              <h3 className="text-[#162560] font-bold text-sm mb-2">
                {m.label}
              </h3>
              <div className="text-gray-400 text-xs leading-relaxed">
                {m.desc}
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
