"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, Chip, H2, fadeUp } from "./ui";
import { ChevronLeft, ChevronRight, Quote, Settings } from "lucide-react";

const ITEMS = [
  {
    q: "Mindefy didn't just give us an app; they gave us a foundation that hasn't flinched through two massive growth rounds.",
    name: "Esther Howard",
    role: "Nursing Assistant",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
  {
    q: "The transparency in their architectural decisions saved us from a $200k rewrite that our previous agency had made inevitable.",
    name: "Courtney Henry",
    role: "Nursing Assistant",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  },
  {
    q: "Working with Mindefy felt like having a senior architecture team embedded in our company. They caught design problems we had not even thought about yet.",
    name: "Wade Warren",
    role: "Product Lead",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&q=80",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const len = ITEMS.length;
  const next = () => {
    setDir(1);
    setIdx((p) => (p + 1) % len);
  };
  const prev = () => {
    setDir(-1);
    setIdx((p) => (p - 1 + len) % len);
  };

  // autoplay
  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIdx((p) => (p + 1) % len);
    }, 5000);
    return () => clearInterval(t);
  }, [len]);

  const visible = [ITEMS[idx], ITEMS[(idx + 1) % len]];

  return (
    <section className="relative isolate overflow-hidden px-3 py-20 md:py-24 bg-[#F5F3EE]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,122,69,0.12) 0, transparent 32%), radial-gradient(circle at 75% 40%, rgba(111,122,230,0.12) 0, transparent 30%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4">
        <ScrollReveal className="text-center mb-14">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            TESTIMONIALS
          </Chip>
          <H2 className="text-center">
            Voice of the{" "}
            <span className="text-[#E84B27] font-poppins">Customer</span>
          </H2>
        </ScrollReveal>

        <div className="relative">
          {/* Arrows */}
          <button
            aria-label="Previous testimonials"
            onClick={prev}
            className="cursor-pointer absolute -left-3 lg:-left-6 top-[45%] -translate-y-1/2 h-12 w-12 z-10 rounded-full bg-white shadow-lg border border-[#E6E8EB] flex items-center justify-center text-[#0B0D17] hover:-translate-x-1 hover:text-[#162560] hover:bg-[#E84B27] transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next testimonials"
            onClick={next}
            className="cursor-pointer absolute -right-3 lg:-right-6 top-[45%] -translate-y-1/2 h-12 w-12 z-10 rounded-full bg-white shadow-lg border border-[#E6E8EB] flex items-center justify-center text-[#0B0D17] hover:translate-x-1 hover:text-[#162560] hover:bg-[#E84B27] transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-center" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: dir * 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 28 }}
              transition={{ duration: 0.35 }}
              className="grid lg:grid-cols-2 gap-6"
            >
              {visible.map((item, i) => (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  className="group relative rounded-3xl bg-white h-full min-h-76 px-6 py-6 shadow-[0_12px_40px_-24px_rgba(12,23,54,0.3)] border border-[#E6E8EB] flex flex-col gap-5 hover:-translate-y-1 hover:shadow-[0_20px_70px_-26px_rgba(12,23,54,0.28)] transition-all duration-400"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-[#7A7F86]" />

                  <div className="flex items-center gap-4">
                    <div className="relative h-18 w-18">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-[#dfe3eb] shadow-inner" />
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="relative h-18 w-18 rounded-full object-cover border-2 border-white shadow"
                      />
                    </div>
                    <div>
                      <div className="flex gap-1 mb-1">
                        {[...Array(5)].map((_, k) => (
                          <span
                            key={k}
                            className="text-[#FF7A45] text-base font-poppins"
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-[#0B0D17] font-semibold text-lg font-poppins leading-tight">
                        {item.name}
                      </p>
                      <p className="text-[#4A5568] text-sm font-poppins">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#4A5568] text-lg leading-relaxed font-poppins">
                    {item.q}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-2 mt-10 justify-center">
            {ITEMS.map((_, k) => (
              <button
                key={k}
                onClick={() => setIdx(k)}
                className={`h-1.5 rounded-full transition-all duration-300 border-0 cursor-pointer ${
                  k === idx
                    ? "bg-[#FF7A45] w-7"
                    : "bg-[#C7CCD6] w-4 hover:bg-[#9EA6B7]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
