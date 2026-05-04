"use client";

import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerGrid,
  Chip,
  H2,
  AppDevButton,
  fadeLeft,
  fadeUp,
} from "./ui";
import { Rocket, Settings } from "lucide-react";

export default function EngineeringDNA({ content }) {
  const items = content?.items || [];
  const badge = content?.badge || "";
  const headingPrefix = content?.headingPrefix || "";
  const headingHighlight = content?.headingHighlight || "";
  const description = content?.description || "";
  const ctaLabel = content?.ctaLabel || "";
  const ctaLink = content?.ctaLink || "";
  const image = content?.image || "";

  if (!items.length && !headingPrefix && !headingHighlight && !description) {
    return null;
  }

  return (
    <section className="relative isolate overflow-hidden py-20 md:py-24">
      {/* background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0E1A45] via-[#101e4f] to-[#0b1639]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,122,69,0.12) 0, transparent 30%), radial-gradient(circle at 85% 60%, rgba(111,122,230,0.12) 0, transparent 32%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16">
          {/* Left */}
          <ScrollReveal variants={fadeLeft}>
            <Chip>
              <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
              {badge}
            </Chip>
            <H2 light>
              {headingPrefix}
              <span className="bg-gradient-to-r from-[#FFB59E] via-[#FF7A45] to-[#FF5225] bg-clip-text text-transparent font-poppins">
                {headingHighlight}
              </span>
            </H2>
            <p className="text-white/75 text-lg font-poppins leading-relaxed mb-8">
              {description}
            </p>

            {ctaLabel && ctaLink && (
              <AppDevButton
                href={ctaLink}
                variant="outline"
                primaryColor="#F94D00"
                secondaryColor="#0B0D17"
                surfaceColor="#FFFFFF"
              >
                {ctaLabel}
              </AppDevButton>
            )}

            {image && (
              <div className="mt-10 relative">
                <div className="relative overflow-hidden rounded-2xl px-2 py-2 backdrop-blur shadow-xl">
                  <img
                    src={image}
                    alt={badge}
                    loading="lazy"
                    className="w-full aspect-auto"
                  />
                </div>
              </div>
            )}
          </ScrollReveal>

          {/* Right */}
          <StaggerGrid className="space-y-7">
            {items.map((item, i) => {
              const Icon = item.icon || Rocket;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-5 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-white hover:shadow-2xl"
                >
                  <div className="relative flex items-start gap-4">
                    <div className="relative flex p-3 items-center justify-center rounded-xl bg-[#FF5225]/80 text-white">
                      <Icon
                        className="w-8 h-8 relative z-10"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs uppercase tracking-[0.18em] text-white/60 font-poppins">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-white font-semibold text-xl leading-snug font-poppins">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-base leading-relaxed font-poppins">
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
