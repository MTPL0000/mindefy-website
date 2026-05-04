"use client";

import { motion } from "framer-motion";
import { Target, Settings } from "lucide-react";
import { ScrollReveal, StaggerGrid, Chip, H2, fadeLeft, fadeUp } from "./ui";

export default function ArchPhilosophy({ content }) {
  const items = content?.items || [];
  const headingPrefix = content?.headingPrefix || "";
  const headingHighlight = content?.headingHighlight || "";
  const description = content?.description || "";
  const subtext = content?.subtext || "";

  if (!items.length && !heading && !description && !subtext) {
    return null;
  }

  return (
    <section
      id="architectural-philosophy"
      className="relative isolate overflow-hidden py-20 md:py-24"
    >
      {/* background and glows */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#F7FAFF] via-white to-[#F3F6FF]"
        aria-hidden
      />
      <div
        className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#FF7A45]/12 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -right-20 -bottom-7 h-80 w-80 rounded-full bg-[#6F7AE6]/12 blur-[140px]"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <ScrollReveal variants={fadeLeft}>
            <div className="section-title">
              <Chip as="div">
                <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
                {content?.badge}
              </Chip>
              <H2 className="font-poppins font-bold">
                {headingPrefix}
                <span className="text-[#FF5225] font-poppins">
                  {headingHighlight}
                </span>
              </H2>
            </div>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed font-poppins mb-4">
              {description}
            </p>
            <p className="text-[#4A5568] font-semibold text-sm md:text-base leading-relaxed font-poppins">
              {subtext}
            </p>
          </ScrollReveal>

          {/* Right */}
          <StaggerGrid className="relative space-y-8">
            <div
              className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[#E6E8EB] to-transparent"
              aria-hidden
            />
            {items.map((item, i) => {
              const IconComponent = item.Icon || Target;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl border border-[#E6E8EB] bg-white px-5 py-5 shadow-[0_10px_40px_-18px_rgba(15,27,61,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-18px_rgba(15,27,61,0.28)] hover:border-[#FF7A45]/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5EF] via-transparent to-[#F5F7FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex gap-4 items-start">
                    <div className="relative mt-1 flex p-3 items-center justify-center rounded-xl bg-[#FFE3D7] text-[#FF5225]">
                      <IconComponent
                        className="w-8 h-8 relative z-10"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs uppercase tracking-[0.2em] text-[#7A7F86] font-poppins">
                        {item.num}
                      </div>
                      <h3 className="text-[#0B0D17] font-semibold text-base md:text-lg leading-snug font-poppins">
                        {item.title}
                      </h3>
                      <p className="text-[#4A5568] text-sm md:text-base leading-relaxed font-poppins">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
