"use client";

import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerGrid,
  Chip,
  H2,
  ArrowIcon,
  fadeLeft,
  fadeUp,
} from "./ui";

const ITEMS = [
  {
    icon: "🌱",
    color: "#162560",
    title: "Greenfield Development",
    desc: 'Designing and building new products with a "Scaling-First" architecture that survives rapid growth without rewrites.',
  },
  {
    icon: "⚡",
    color: "#E84B27",
    title: "System Modernization & Scaling",
    desc: "Restoring development velocity to legacy apps that have hit a technical wall — without burning the system down.",
  },
  {
    icon: "🧭",
    color: "#162560",
    title: "Architecture Consulting",
    desc: "Evaluating tech stacks and data models before a single line of code is written or rewritten.",
  },
];

export default function EngineeringDNA() {
  return (
    <section className="py-24 bg-[#EEF1FA]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal variants={fadeLeft}>
            <Chip>Engineering DNA</Chip>
            <H2>
              What We Actually <span className="text-[#E84B27]">Do</span>
            </H2>
            <p className="text-gray-500 text-[17px] leading-relaxed mb-8">
              We bridge the gap between abstract business vision and durable
              technical execution through high-end custom software development.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#162560] text-white font-bold px-7 py-4 rounded-lg text-sm hover:bg-[#1E3280] hover:-translate-y-0.5 hover:shadow-xl transition-all no-underline"
            >
              Start a Technical Architecture Review <ArrowIcon />
            </a>
          </ScrollReveal>

          {/* Right */}
          <StaggerGrid className="space-y-5">
            {ITEMS.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white rounded-2xl p-6 border border-transparent shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
                style={{ borderLeft: `4px solid ${item.color}` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background:
                        item.color === "#E84B27"
                          ? "rgba(232,75,39,0.08)"
                          : "#EEF1FA",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[#162560] font-bold text-[15px] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
