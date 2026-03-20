"use client";

import { ScrollReveal, Chip, H2, ArrowIcon } from "./ui";

export default function BottomLine() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0E1A45 0%, #162560 100%)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,75,39,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Decorative large text */}
      <div
        className="absolute bottom-0 right-0 text-[clamp(120px,16vw,200px)] font-extrabold leading-none text-white/[0.02] select-none pointer-events-none"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        BUILD
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <Chip>The Bottom Line</Chip>

          <H2
            light
            className="text-center mb-5"
            style={{
              fontSize: "clamp(36px, 6vw, 76px)",
            }}
          >
            Build Something That
            <br />
            <span style={{ color: "#FFB59E" }}>Doesn&apos;t Need</span>
            <br />
            to Be Rewritten.
          </H2>

          <p className="text-white/55 text-[17px] max-w-md mx-auto mb-12 leading-relaxed">
            Whether you are starting fresh or fixing a failing system,
            let&apos;s talk architecture before it becomes expensive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#E84B27] text-white font-bold px-8 py-4 rounded-lg text-sm hover:bg-[#FF5C35] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[rgba(232,75,39,0.3)] transition-all no-underline"
            >
              Claim Your 30-Day Technical Audit <ArrowIcon />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-sm hover:bg-white/20 transition-all no-underline"
            >
              View Our Work <ArrowIcon />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
