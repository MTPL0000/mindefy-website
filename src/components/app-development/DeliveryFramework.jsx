"use client";

import { motion } from "framer-motion";
import { ScrollReveal, Chip, H2 } from "./ui";

const STEPS = [
  {
    n: "01",
    title: "Product Discovery & Strategy",
    desc: "User journeys vs. technical constraints",
  },
  {
    n: "02",
    title: "Architectural Design",
    desc: "Service boundaries & stack selection",
  },
  {
    n: "03",
    title: "Intent-Driven UI/UX",
    desc: "Prototyping for real-world patterns",
  },
  {
    n: "04",
    title: "Engineering Guardrails",
    desc: "Clean Architecture, strict type-safety",
  },
  {
    n: "05",
    title: "Stress Testing (QA)",
    desc: "Chaos Engineering finds failure points",
  },
  {
    n: "06",
    title: "Orchestrated Deployment",
    desc: "Zero-downtime releases & ASO",
  },
  {
    n: "07",
    title: "Intelligent Observability",
    desc: "Real-time monitoring drives iteration",
  },
];

export default function DeliveryFramework() {
  return (
    <section id="process" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <Chip>Delivery Framework</Chip>
          <H2 className="text-center">
            The Mindefy{" "}
            <span className="text-[#E84B27]">Durability Protocol</span>
          </H2>
          <p className="text-gray-500 text-[17px] max-w-lg mx-auto">
            Our proprietary 7-step lifecycle works for both new builds and deep
            audits.
          </p>
        </ScrollReveal>

        {/* Desktop — horizontal timeline */}
        <div className="hidden lg:block relative mt-20">
          <div className="absolute top-[22px] left-[6%] right-[6%] h-0.5 bg-gradient-to-r from-[#162560] to-[#E84B27]" />
          <div className="grid grid-cols-7">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                className="flex flex-col items-center text-center px-1 group"
              >
                <div
                  className="w-[44px] h-[44px] rounded-full bg-white border-2 border-[#162560] flex items-center justify-center text-[#162560] font-bold text-[11px] mb-4 relative z-10 shadow-md group-hover:bg-[#162560] group-hover:text-white transition-all group-hover:scale-110"
                  style={{ fontFamily: "monospace" }}
                >
                  {step.n}
                </div>
                <h3 className="text-[#162560] font-bold text-[11px] mb-1.5 leading-tight">
                  {step.title}
                </h3>
                <div className="text-gray-400 text-[11px] leading-relaxed">
                  {step.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical list */}
        <div className="lg:hidden space-y-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex gap-4 items-start bg-[#F8F7F4] rounded-xl p-4"
            >
              <div
                className="w-10 h-10 rounded-full bg-[#162560] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0"
                style={{ fontFamily: "monospace" }}
              >
                {step.n}
              </div>
              <div>
                <h3 className="text-[#162560] font-bold text-sm mb-0.5">
                  {step.title}
                </h3>
                <div className="text-gray-500 text-xs leading-relaxed">
                  {step.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
