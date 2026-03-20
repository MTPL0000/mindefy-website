"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, Chip, H2 } from "./ui";

const ITEMS = [
  {
    q: "Mindefy didn't just give us an app; they gave us a foundation that hasn't flinched through two massive growth rounds.",
    attr: "CTO, Fintech Pioneer",
  },
  {
    q: "The transparency in their architectural decisions saved us from a $200k rewrite that our previous agency had made inevitable.",
    attr: "Product Lead, Global Logistics",
  },
  {
    q: "Working with Mindefy felt like having a senior architecture team embedded in our company. They caught design problems we had not even thought about yet.",
    attr: "VP Engineering, E-commerce Platform",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % ITEMS.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>Voice of the Customer</Chip>
          <H2 className="text-center">
            Client <span className="text-[#E84B27]">Outcomes</span>
          </H2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0E1A45 0%, #162560 100%)",
            }}
          >
            {/* decorative quote mark */}
            <div
              className="absolute top-6 left-8 text-[130px] leading-none font-bold text-white/[0.04] select-none"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              &ldquo;
            </div>

            <div className="p-10 lg:p-14 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(5)].map((_, k) => (
                      <span key={k} className="text-[#E84B27] text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  <blockquote
                    className="text-white font-medium leading-relaxed mb-8"
                    style={{ fontSize: "clamp(17px, 2vw, 22px)" }}
                  >
                    {ITEMS[idx].q}
                  </blockquote>

                  <div
                    className="text-white/40 text-[11px] font-medium tracking-[0.18em] uppercase"
                    style={{ fontFamily: "monospace" }}
                  >
                    — {ITEMS[idx].attr}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dot nav */}
              <div className="flex gap-2 mt-10 items-center">
                {ITEMS.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setIdx(k)}
                    className={`h-1.5 rounded-full transition-all duration-300 border-0 cursor-pointer ${
                      k === idx
                        ? "bg-[#E84B27] w-7"
                        : "bg-white/20 w-4 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
