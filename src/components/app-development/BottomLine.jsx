"use client";

import { Settings } from "lucide-react";
import { ScrollReveal, Chip, H2, AppDevButton } from "./ui";

export default function BottomLine() {
  return (
    <section
      className="relative py-20 md:py-24 my-20 md:my-24 overflow-hidden"
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
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            The Bottom Line
          </Chip>

          <H2
            light
            className="text-center mb-5"
            style={{
              fontSize: "clamp(36px, 6vw, 76px)",
            }}
          >
            Build Something That
            <br />
            <span className="text-[#F15A24]">Doesn&apos;t Need</span>
            <br />
            to Be Rewritten.
          </H2>

          <p className="text-white/55 text-[17px] max-w-md mx-auto mb-12 leading-relaxed">
            Whether you are starting fresh or fixing a failing system,
            let&apos;s talk architecture before it becomes expensive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AppDevButton
              href="#contact"
              primaryColor="#E84B27"
              secondaryColor="#0B0D17"
              textColor="#FFFFFF"
            >
              Claim Your 30-Day Technical Audit
            </AppDevButton>
            <AppDevButton
              href="#case-studies"
              primaryColor="rgba(255,255,255,0.12)"
              secondaryColor="#0B0D17"
              textColor="#FFFFFF"
              className="backdrop-blur"
            >
              View Our Work
            </AppDevButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}