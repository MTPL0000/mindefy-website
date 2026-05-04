"use client";

import { Settings } from "lucide-react";
import { ScrollReveal, Chip, fadeLeft, fadeRight } from "./ui";

export default function ExpertPerspective({ content }) {
  const stats = content?.stats || [];
  const heading = content?.heading || "";
  const description = content?.description || "";
  const highlight = content?.highlight || "";
  const quote = content?.quote || "";
  const authorName = content?.authorName || "";
  const authorRole = content?.authorRole || "";
  const initials = content?.authorInitials || "";

  if (!stats.length && !heading && !description && !quote) {
    return null;
  }

  return (
    <section
      id="expert-perspective"
      className="relative isolate overflow-hidden py-20 md:py-24 my-20 md:my-24"
    >
      {/* background + glow */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#080E24] via-[#0F1B3F] to-[#0A122B]"
        aria-hidden
      />
      <div
        className="absolute -left-20 top-10 w-72 h-72 rounded-full bg-[#FF5225]/15 blur-[110px]"
        aria-hidden
      />
      <div
        className="absolute -right-20 -bottom-10 w-96 h-96 rounded-full bg-[#6F7AE6]/15 blur-[140px]"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">
          {/* Left: headline + stats */}
          <ScrollReveal variants={fadeLeft}>
            <div className="space-y-6">
              <Chip as="div">
                <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
                {content?.badge}
              </Chip>

              <h2
                className="text-white font-extrabold font-poppins leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                }}
              >
                {heading}
              </h2>

              <p className="text-white/80 text-base md:text-lg leading-relaxed font-poppins max-w-3xl">
                {description.split(highlight).length > 1 ? (
                  <>
                    {description.split(highlight)[0]}
                    <span className="text-[#F15A24] font-semibold font-poppins">
                      {highlight}
                    </span>
                    {description.split(highlight)[1]}
                  </>
                ) : (
                  description
                )}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5225]/50 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#FF5225]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex flex-col items-center">
                      <div className="text-2xl font-extrabold text-white font-poppins">
                        {item.val}
                      </div>
                      <p className="text-white/70 text-sm leading-snug font-poppins">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: quote card */}
          <ScrollReveal variants={fadeRight} delay={0.12}>
            <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5225]/50 hover:shadow-3xl">
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/5 via-[#FF5225]/10 to-transparent"
                aria-hidden
              />

              <div className="relative p-8 md:p-10 space-y-6">
                <div className="text-7xl leading-none text-white/10 select-none font-extrabold">
                  &ldquo;
                </div>

                <p className="text-white/90 text-lg leading-relaxed font-poppins">
                  {quote}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="h-12 w-12 rounded-full bg-[#FF5225]/15 text-white flex items-center justify-center font-semibold font-poppins">
                    {initials}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-poppins">
                      {authorName}
                    </h4>
                    <span className="text-white/60 text-xs uppercase tracking-[0.2em] font-poppins">
                      {authorRole}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
