"use client";

import { motion } from "framer-motion";
import { StaggerGrid, ScrollReveal, Chip, H2, fadeUp } from "./ui";
import { Settings } from "lucide-react";

export default function VerticalExpertise({ content }) {
  const industries = Array.isArray(content?.industries)
    ? content.industries
    : [];
  const badge = content?.badge || "";
  const headingPrefix = content?.headingPrefix || "";
  const headingHighlight = content?.headingHighlight || "";

  if (!industries.length) {
    return null;
  }

  return (
    <section className="relative isolate overflow-hidden py-20 md:py-24 bg-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(79,209,197,0.12) 0, transparent 30%), radial-gradient(circle at 80% 30%, rgba(111,122,230,0.12) 0, transparent 28%), radial-gradient(circle at 50% 80%, rgba(255,122,69,0.10) 0, transparent 28%)",
        }}
        aria-hidden
      />
      <div className="relative container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            {badge}
          </Chip>
          <H2 className="text-center font-poppins mt-6">
            {headingPrefix}
            <span className="text-[#E84B27] font-poppins">
              {headingHighlight}
            </span>
          </H2>
        </ScrollReveal>

        <StaggerGrid className="flex items-center justify-center flex-wrap gap-10">
          {industries.map((ind) => {
            const Icon = ind.icon || Settings;

            return (
              <motion.article
                key={ind.title}
                variants={fadeUp}
                className="group relative text-center w-sm h-64 px-6 py-8 rounded-3xl bg-white/70 backdrop-blur border border-[#E6E8EB] shadow-[0_12px_40px_-22px_rgba(12,23,54,0.25)] hover:-translate-y-2 hover:shadow-[0_20px_70px_-24px_rgba(12,23,54,0.25)] transition-all duration-400"
              >
                <div className="space-y-4">
                  <div
                    className="mx-auto w-18 h-18 rounded-full flex items-center justify-center shadow-lg transition-transform duration-400 group-hover:scale-105"
                    style={{
                      background: `${ind.color}22`,
                      color: ind.color,
                    }}
                  >
                    <Icon className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#0B0D17] font-semibold text-2xl font-poppins">
                    {ind.title}
                  </h3>
                  <p className="text-[#4A5568] text-base font-poppins leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    boxShadow: `0 0 0 1px ${ind.color}33, 0 20px 60px -30px ${ind.color}66`,
                  }}
                  aria-hidden
                />
              </motion.article>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
