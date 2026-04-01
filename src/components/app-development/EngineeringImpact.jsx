"use client";

import { motion } from "framer-motion";
import { ScrollReveal, Counter, H2, ArrowIcon, fadeUp } from "./ui";
import { Settings } from "lucide-react";
import Link from "next/link";

const METRICS = [
  {
    numStr: null,
    numInt: 99.99,
    suffix: "%",
    label: "Uptime",
    desc: "Average availability for Mindefy-engineered core systems",
    tags: ["Available", "Reliable", "Scalable"],
  },
  {
    numStr: "4.5M+",
    numInt: null,
    label: "Users Handled",
    desc: "By our most scalable digital ecosystem to date",
    tags: ["Concurrent", "Active", "Growth"],
  },
  {
    numStr: null,
    numInt: 60,
    suffix: "%",
    label: "Debt Reduction",
    desc: "Average decrease in technical debt for modernized legacy systems",
    tags: ["Refactor", "Clean", "Velocity"],
  },
  {
    numStr: "Zero",
    numInt: null,
    label: "Failure Rate",
    desc: "Maintained during high-concurrency traffic spikes",
    tags: ["Robust", "Secure", "Durable"],
  },
];

export default function EngineeringImpact() {
  return (
    <section className="feature-section py-12 bg-white fix overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 px-3 py-2 text-sm font-bold text-[#0B0D17] bg-[#F2F5F7] rounded-full uppercase leading-none font-poppins shadow-sm mb-5"
          >
            <Settings width={16} height={16} />
            ENGINEERING IMPACT
          </motion.span>
          <H2 className="text-center font-poppins font-bold">
            High-Performance <br />
            <span className="text-[#FF5225]">Software Solutions</span>
          </H2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {METRICS.map((item, i) => (
            <div
              key={i}
              className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 px-4 mb-8"
            >
              <ScrollReveal
                variants={fadeUp}
                delay={i * 0.1}
                className="h-full"
              >
                <div className="feature-box-itemss group h-full flex flex-col bg-[#F2F5F7] rounded-xl px-5 py-7 relative z-10 transition-all duration-500 hover:text-white before:absolute before:content-[''] before:inset-0 before:bg-[#FF5225] before:rounded-xl before:scale-y-[0.3] before:opacity-0 before:origin-center before:transition-all before:duration-500 hover:before:scale-y-100 hover:before:opacity-100 before:-z-10 overflow-hidden shadow-sm hover:shadow-2xl">
                  <h3 className="text-[#534F5A] group-hover:text-white/80 font-poppins text-base font-medium tracking-tighter mb-6 transition-colors duration-500">
                    00{i + 1}.
                  </h3>
                  <h4 className="text-[#0B0D17] group-hover:text-white font-poppins text-2xl font-bold mb-5 transition-colors duration-500">
                    <span className="block text-[#FF5225] group-hover:text-white text-3xl mb-1">
                      {item.numStr ?? (
                        <Counter end={item.numInt} suffix={item.suffix ?? ""} />
                      )}
                    </span>
                    {item.label}
                  </h4>
                  <p className="text-[#534F5A] group-hover:text-white/90 font-poppins text-base leading-relaxed mb-14 transition-colors duration-500 flex-1">
                    {item.desc}
                  </p>

                  <div className="feature-info-box bg-white rounded-lg px-4 py-6 flex items-center justify-center mt-auto transition-all duration-500">
                    <ul className="flex flex-wrap items-center gap-3">
                      {item.tags.map((tag, j) => (
                        <li
                          key={j}
                          className="px-3 py-1 rounded-full border border-[#E6E8EB] text-[#0B0D17] text-xs font-semibold font-poppins transition-all duration-400 hover:bg-[#FF5225] hover:text-white hover:border-[#FF5225]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
