"use client";

import { ScrollReveal, Chip, fadeLeft, fadeRight } from "./ui";

const STATS = [
  { val: "8+", label: "Years Engineering at Scale" },
  { val: "150+", label: "Systems Delivered" },
  { val: "40+", label: "Engineers on Staff" },
];

export default function ExpertPerspective() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0E1A45 0%, #162560 60%, #1a2d78 100%)",
      }}
    >
      {/* decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-10 right-0 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(232,75,39,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-10 text-[240px] font-extrabold leading-none text-white/[0.025] select-none"
          style={{ fontFamily: "sans-serif" }}
        >
          &ldquo;
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-center">
          {/* Quote */}
          <ScrollReveal variants={fadeLeft}>
            <Chip as="h2">Expert Perspective</Chip>
            <blockquote
              className="text-white font-semibold leading-relaxed mb-8"
              style={{
                fontSize: "clamp(20px, 2.8vw, 32px)",
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              We don&apos;t build features; we build the systems that deliver
              them. Whether you are launching your first MVP or rescuing a
              legacy product,{" "}
              <em className="text-[#FFB59E] not-italic">
                architecture is your only defense against irrelevance.
              </em>
            </blockquote>
            <div
              className="text-white/40 text-[11px] font-medium tracking-[0.2em] uppercase"
              style={{ fontFamily: "monospace" }}
            >
              — Mindefy Leadership
            </div>
          </ScrollReveal>

          {/* Side stats */}
          <ScrollReveal variants={fadeRight} delay={0.15}>
            <div className="space-y-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/[0.06] border border-white/10 rounded-xl p-5 flex items-center gap-4"
                >
                  <div
                    className="text-[#E84B27] font-extrabold text-3xl w-20 flex-shrink-0"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {s.val}
                  </div>
                  <div className="text-white/60 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
