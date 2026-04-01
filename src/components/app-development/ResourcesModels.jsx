"use client";

import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerGrid,
  Chip,
  H2,
  ArrowIcon,
  fadeLeft,
  fadeRight,
  fadeUp,
} from "./ui";

const RESOURCES = [
  {
    icon: "🔬",
    tag: "Free Diagnostic",
    title: "The 30-Day Scaling & Technical Health Audit",
    desc: "Identify your architectural debt before it breaks your growth.",
  },
  {
    icon: "📄",
    tag: "Whitepaper",
    title:
      "Why React Native is (and isn't) the right choice for your Enterprise App",
    desc: "A technical deep-dive for engineering leaders making platform decisions.",
  },
  {
    icon: "📊",
    tag: "Case Study",
    title: "How we handled a 10× traffic spike for a global E-commerce leader",
    desc: "Real architecture decisions made under real load with measurable outcomes.",
  },
];

const MODELS = [
  {
    icon: "👥",
    title: "Dedicated Engineering Squads",
    desc: "A full-stack team (TL, Frontend, Backend, QA) integrated into your workflow. Best for long-term growth and continuous product evolution.",
  },
  {
    icon: "🎯",
    title: "Project-Based Modernization",
    desc: "Fixed-outcome sprints to rescue legacy products or launch specific MVPs. Defined deliverables, defined timelines.",
  },
  {
    icon: "🧭",
    title: "Architecture-as-a-Service",
    desc: "Ongoing consulting for internal teams to ensure structural guardrails remain in place as you scale independently.",
  },
];

export default function ResourcesModels() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* ── Intellectual Capital ─────────────────────────────────────── */}
          <div>
            <ScrollReveal variants={fadeLeft}>
              <Chip>Intellectual Capital</Chip>
              <H2>
                Authority Content{" "}
                <span className="text-[#E84B27]">&amp; Lead Magnets</span>
              </H2>
            </ScrollReveal>

            <StaggerGrid className="space-y-4 mt-8">
              {RESOURCES.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start hover:shadow-lg hover:border-[#162560]/20 transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EEF1FA] flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-[#162560] transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[#E84B27] text-[10px] font-medium tracking-[0.16em] uppercase"
                      style={{ fontFamily: "monospace" }}
                    >
                      {item.tag}
                    </span>
                    <h3 className="text-[#162560] font-bold text-sm mt-1 mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-gray-400 text-xs leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                  <div className="text-gray-300 group-hover:text-[#162560] transition-colors flex-shrink-0 mt-1">
                    <ArrowIcon />
                  </div>
                </motion.div>
              ))}
            </StaggerGrid>
          </div>

          {/* ── Engagement Models ────────────────────────────────────────── */}
          <div>
            <ScrollReveal variants={fadeRight}>
              <Chip>Engagement Models</Chip>
              <H2>
                How We Work{" "}
                <span className="text-[#E84B27]">With Your Team</span>
              </H2>
            </ScrollReveal>

            <StaggerGrid className="space-y-4 mt-8">
              {MODELS.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#162560]/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#EEF1FA] flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-[#162560] transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[#162560] font-bold text-sm mb-1">
                        {item.title}
                      </h3>
                      <div className="text-gray-500 text-xs leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
