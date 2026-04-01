"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StaggerGrid, ScrollReveal, Chip, H2, ArrowIcon, fadeUp } from "./ui";
import {
  Rocket,
  Building2,
  Smartphone,
  Globe2,
  Cog,
  HelpCircle,
} from "lucide-react";

const SERVICES = [
  {
    num: "01",
    tag: "Startup",
    Icon: Rocket,
    title: "Startup Development",
    desc: "Robust, audit-ready foundations for early-stage companies designed to survive rapid growth and Series A due diligence.",
  },
  {
    num: "02",
    tag: "Enterprise",
    Icon: Building2,
    title: "Enterprise Development",
    desc: "High-complexity systems designed to modernize legacy logic, ensure strict compliance, and handle massive organizational data.",
  },
  {
    num: "03",
    tag: "Mobile",
    Icon: Smartphone,
    title: "Mobile Development",
    desc: "High-fidelity native and cross-platform development (iOS, Android, React Native, Flutter) engineered for performance.",
  },
  {
    num: "04",
    tag: "Web",
    Icon: Globe2,
    title: "Web Development",
    desc: "Distributed web systems and Progressive Web Apps (PWAs) built for high-concurrency and SEO authority.",
  },
  {
    num: "05",
    tag: "Custom",
    Icon: Cog,
    title: "Custom Development",
    desc: "Bespoke solutions designed for unique business logic that off-the-shelf templates cannot handle.",
  },
  {
    cta: true,
    num: null,
    tag: null,
    Icon: HelpCircle,
    title: "Not sure which track fits?",
    desc: "Let's evaluate your requirements and recommend the right engineering approach for your project.",
  },
];

/* ─── Service Card ─── */
function ServiceCard({ s }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-76 sm:h-80 select-none"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ══ FRONT ══════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 rounded-2xl bg-[#162560]/8 px-6 py-8 flex flex-col justify-between border border-[#E2DDD4] shadow-[0 8px 32px -12px rgba(22,37,96,0.10)] overflow-hidden">
          {/* Number + corner tick */}
          <div className="flex items-start justify-between">
            <span className="text-4xl text-[#C93D0E] font-semibold">
              {s.num ?? "—"}
            </span>
            {!s.cta && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1h12v12"
                  stroke="#162560"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          {/* Icon bubble */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="bg-[#162560]/90 flex items-center justify-center rounded-xl w-16 h-14 shadow-[0 6px 18px -4px rgba(22,37,96,0.35)]">
              <s.Icon size={32} color="#fff" strokeWidth={1.3} />
            </div>

            <h3 className="text-[#162560] text-xl font-semibold leading-snug">
              {s.title}
            </h3>
          </div>

          {/* Bottom tag */}
          <div className="flex items-center pt-1">
            <span className="text-sm text-[#C93D0E] uppercase tracking-[0.18em]">
              {s.tag ?? "Hover to explore →"}
            </span>
          </div>
        </div>

        {/* ══ BACK ═══════════════════════════════════════════════════════ */}
        <div
          className="absolute bg-[#F15A24] inset-0 rounded-2xl px-5 py-5 flex flex-col gap-4 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Dot-grid texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />

          {/* Icon + title header */}
          <div className="relative flex items-center gap-4">
            <div className="bg-white/20 w-12 h-12 shrink-0 flex items-center justify-center rounded-xl">
              <s.Icon size={28} color="#fff" strokeWidth={1.3} />
            </div>
            <h3 className="text-white text-xl font-bold leading-tight">
              {s.title}
            </h3>
          </div>

          <div className="relative top-8 flex-1 overflow-hidden">
            <p className="text-white text-base leading-relaxed">{s.desc}</p>
          </div>

          {/* CTA button */}
          <div className="relative">
            <a
              href="#contact"
              className="bg-[#ffff] text-[#162560] cursor-pointer inline-flex items-center gap-2 rounded-full text-sm font-semibold transition-all hover:scale-95 hover:opacity-90 px-5 py-2.5"
            >
              {s.cta ? "Start Architecture Review" : "Service Details"}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Section ─── */
export default function CoreCompetencies() {
  return (
    <section
      id="services"
      className="relative isolate py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #F9F8F4 0%, #FFFFFF 50%, #F4F2EC 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -left-32 -top-8 h-96 w-96 rounded-full blur-[140px]"
        style={{ background: "rgba(241,90,36,0.12)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full blur-[160px]"
        style={{ background: "rgba(22,37,96,0.10)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <Chip>Core Competencies</Chip>
          <H2 className="text-center">
            Specialized{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F15A24 0%, #C93D0E 100%)",
              }}
            >
              Engineering
            </span>{" "}
            Services
          </H2>
          <p className="text-[#4A5568] text-lg max-w-xl mx-auto">
            We help teams navigate the transition from concept to
            high-performance system through specialized engineering tracks.
          </p>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SERVICES.map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <ServiceCard s={s} />
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
