"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerGrid, H2, fadeUp } from "./ui";
import {
  Cog,
  ShieldCheck,
  LockKeyhole,
  SearchCheck,
  Settings,
} from "lucide-react";

const ITEMS = [
  {
    Icon: ShieldCheck,
    title: "100% IP & Asset Ownership",
    desc: "You own every line of code, design asset, and diagram.",
  },
  {
    Icon: LockKeyhole,
    title: "Security By Design",
    desc: "Integrated OWASP security checks and AI-powered scanning.",
  },
  {
    Icon: SearchCheck,
    title: "Transparent Engineering",
    desc: "Real-time access to our progress and architectural decisions.",
  },
];

function ServiceCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={fadeUp}
      tabIndex={0}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-[#E5DFD5] bg-white/95 
      shadow-[0_18px_60px_-28px_rgba(22,37,96,0.55)] backdrop-blur 
      transition-all duration-500 ease-in-out 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]/70 
      hover:shadow-[0_28px_80px_-30px_rgba(22,37,96,0.6)] 
      min-h-76 md:h-100"
    >
      {/* animated color wipe top */}
      <motion.div
        className="absolute inset-x-0 top-0 bg-[#F15A24]"
        initial={{ height: "0%" }}
        animate={{ height: hovered ? "55%" : "0%" }}
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        aria-hidden="true"
      />

      {/* animated color wipe bottom */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-[#F15A24]"
        initial={{ height: "0%" }}
        animate={{ height: hovered ? "55%" : "0%" }}
        transition={{
          duration: 1,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-start gap-16 px-8 py-6">
        <div className="flex flex-col gap-12">
          <motion.span
            animate={{
              scale: hovered ? 1.08 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={`flex h-22 w-22 items-center justify-center rounded-full 
            shadow-[0_12px_32px_-14px_rgba(22,37,96,0.45)] 
            transition-all duration-500 ease-in-out ${
              hovered ? "bg-white" : "bg-[#F15A24]"
            }`}
          >
            <item.Icon
              size={38}
              strokeWidth={1.5}
              color={hovered ? "#F15A24" : "#FFFFFF"}
              aria-hidden="true"
            />
          </motion.span>

          <h3
            className={`text-2xl font-semibold h-12 leading-tight 
            transition-all duration-500 ease-in-out ${
              hovered ? "text-white" : "text-[#162560]"
            }`}
          >
            {item.title}
          </h3>
        </div>

        <p
          className={`text-lg leading-relaxed 
          transition-all duration-500 ease-in-out ${
            hovered ? "text-white/90" : "text-[#4A5568]"
          }`}
        >
          {item.desc}
        </p>
      </div>
    </motion.article>
  );
}

export default function Governance() {
  return (
    <section
      id="governance"
      className="relative isolate overflow-hidden py-20 md:py-24"
      style={{
        background:
          "radial-gradient(circle at 10% 10%, rgba(241,90,36,0.08), transparent 32%), radial-gradient(circle at 90% 0%, rgba(22,37,96,0.08), transparent 34%), linear-gradient(180deg, #F9F8F4 0%, #FFFFFF 54%, #F4F2EC 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full blur-[120px]"
        style={{ background: "rgba(22,37,96,0.08)" }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-16 bottom-4 h-80 w-80 rounded-full blur-[120px]"
        style={{ background: "rgba(241,90,36,0.10)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E84B27]/25 bg-white/80 px-4 py-2 shadow-[0_14px_38px_-24px_rgba(22,37,96,0.55)] backdrop-blur">
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />

            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-[#E84B27]">
              GOVERNANCE
            </span>
          </div>

          <H2 className="text-center font-poppins mt-5">
            Risk Management &
            <span
              className="bg-clip-text text-transparent ml-2"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F15A24 0%, #C93D0E 100%)",
              }}
            >
              Compliance
            </span>
          </H2>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
