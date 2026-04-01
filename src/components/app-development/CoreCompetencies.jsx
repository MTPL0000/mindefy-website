"use client";

import { motion } from "framer-motion";
import { StaggerGrid, ScrollReveal, Chip, H2, ArrowIcon, fadeUp } from "./ui";

const SERVICES = [
  {
    num: "01",
    tag: "Startup",
    icon: "🚀",
    title: "Startup App Development",
    desc: "Robust, audit-ready foundations for early-stage companies designed to survive rapid growth and Series A due diligence.",
  },
  {
    num: "02",
    tag: "Enterprise",
    icon: "🏢",
    title: "Enterprise App Development",
    desc: "High-complexity systems designed to modernize legacy logic, ensure strict compliance, and handle massive organizational data.",
  },
  {
    num: "03",
    tag: "Mobile",
    icon: "📱",
    title: "Mobile App Development",
    desc: "High-fidelity native and cross-platform development (iOS, Android, React Native, Flutter) engineered for performance.",
  },
  {
    num: "04",
    tag: "Web",
    icon: "🌐",
    title: "Web App Development",
    desc: "Distributed web systems and Progressive Web Apps (PWAs) built for high-concurrency and SEO authority.",
  },
  {
    num: "05",
    tag: "Custom",
    icon: "⚙️",
    title: "Custom Software Development",
    desc: "Bespoke solutions designed for unique business logic that off-the-shelf templates cannot handle.",
  },
  {
    cta: true,
    title: "Not sure which track fits?",
    desc: "Let's evaluate your requirements and recommend the right engineering approach for your project.",
  },
];

export default function CoreCompetencies() {
  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>Core Competencies</Chip>
          <H2 className="text-center">
            Specialized <span className="text-[#E84B27]">Engineering</span>{" "}
            Services
          </H2>
          <p className="text-gray-500 text-[17px] max-w-xl mx-auto">
            We help teams navigate the transition from concept to
            high-performance system through specialized engineering tracks.
          </p>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`group rounded-2xl p-8 border transition-all duration-300 flex flex-col ${
                s.cta
                  ? "bg-gradient-to-br from-[#0E1A45] to-[#162560] border-transparent items-center justify-center text-center hover:-translate-y-1.5 hover:shadow-2xl"
                  : "bg-white border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#162560]/20"
              }`}
            >
              {s.cta ? (
                <>
                  <div className="text-4xl mb-5">✨</div>
                  <p className="text-white font-semibold text-base mb-3">
                    {s.title}
                  </p>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed">
                    {s.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-white text-[#162560] font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#EEF1FA] transition-colors shadow-lg no-underline"
                  >
                    Start Architecture Review <ArrowIcon />
                  </a>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-[#EEF1FA] flex items-center justify-center text-[16px] group-hover:bg-[#162560] transition-colors">
                      {s.icon}
                    </div>
                    <span
                      className="text-[#E84B27] text-[10px] font-medium tracking-[0.14em] uppercase bg-[rgba(232,75,39,0.07)] border border-[rgba(232,75,39,0.15)] px-3 py-1 rounded-full group-hover:bg-[#E84B27] group-hover:text-white group-hover:border-[#E84B27] transition-colors"
                      style={{ fontFamily: "monospace" }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-[#162560] font-bold text-[17px] mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[#162560] text-xs font-semibold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all">
                    Learn more <ArrowIcon />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
