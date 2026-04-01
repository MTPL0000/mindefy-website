"use client";

import { motion } from "framer-motion";
import { StaggerGrid, ScrollReveal, Chip, H2, fadeUp } from "./ui";

const INDUSTRIES = [
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "HIPAA/GDPR compliance and 99.9% uptime",
    bg: "#EEF1FA",
  },
  {
    icon: "💳",
    title: "Fintech",
    desc: "High-throughput latency & data integrity",
    bg: "rgba(232,75,39,0.06)",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    desc: "Survive massive traffic spikes at peak",
    bg: "#EEF1FA",
  },
  {
    icon: "🚚",
    title: "Logistics",
    desc: "Real-time data consistency & recovery",
    bg: "rgba(232,75,39,0.06)",
  },
  {
    icon: "🎓",
    title: "Education",
    desc: "Engagement & massive concurrency",
    bg: "#EEF1FA",
  },
];

export default function VerticalExpertise() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>Vertical Expertise</Chip>
          <H2 className="text-center">
            Industries We Work In{" "}
            <span className="text-[#E84B27]">(By Constraint)</span>
          </H2>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-all group-hover:bg-[#162560]"
                style={{ background: ind.bg }}
              >
                {ind.icon}
              </div>
              <h3 className="text-[#162560] font-bold text-sm mb-2">
                {ind.title}
              </h3>
              <p className="text-gray-400 text-[12px] leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
