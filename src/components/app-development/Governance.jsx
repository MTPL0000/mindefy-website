"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerGrid, Chip, H2, CheckIcon, fadeUp } from "./ui";

const ITEMS = [
  {
    icon: "📋",
    title: "100% IP & Asset Ownership",
    desc: "You own every line of code, design asset, and architectural diagram. No lock-in. Full portability at any time.",
  },
  {
    icon: "🔒",
    title: "Security-by-Design",
    desc: "Integrated OWASP security checks and AI-powered scanning built into the development lifecycle from day one.",
  },
  {
    icon: "🔍",
    title: "Transparent Engineering",
    desc: "Real-time access to our progress and architectural decisions. No black boxes, no surprises at delivery.",
  },
];

const FITS = [
  "You are starting a new build that must grow without constant rewrites.",
  "You are struggling with a legacy system that has become too expensive or slow to maintain.",
  'You value architectural clarity, security, and long-term maintainability over "cheap and fast."',
];

export default function Governance() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>Risk Management &amp; Compliance</Chip>
          <H2 className="text-center">
            Built on <span className="text-[#E84B27]">Trust</span>
          </H2>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-white rounded-2xl p-8 border-t-4 border-[#162560] shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-t-[#E84B27] transition-all duration-300"
            >
              <div className="text-3xl mb-5">{item.icon}</div>
              <h3 className="text-[#162560] font-bold text-[15px] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </StaggerGrid>

        {/* Ideal Partner Profile */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-[#162560] font-bold text-xl mb-6">
              This Approach is a Strong Fit If You:
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {FITS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E84B27] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
