"use client";

import { useState, useEffect } from "react";
import {
  Settings,
  Rocket,
  Database,
  ShieldCheck,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, Chip, H2 } from "./ui";

/* ================================
   CASE STUDIES DATA
================================ */

const CASES = [
  {
    id: "01",
    subtitle: "Success Story 01",
    tag: "Greenfield → Scale",
    tagCls: "bg-[#EEF1FA] text-[#162560] border border-[#162560]",
    title: "The 4.5 Million User Scale",
    icon: Rocket,
    description:
      "Engineered a digital wellbeing ecosystem (YourHour) that handled growth from zero to millions of daily sessions with zero performance decay.",
    techIcons: [Rocket, Layers, ShieldCheck],
    image: "/images/yourhour/customer-response.webp",
  },
  {
    id: "02",
    subtitle: "Success Story 02",
    tag: "Legacy Rescue",
    tagCls:
      "bg-[rgba(232,75,39,0.08)] text-[#E84B27] border border-[rgba(232,75,39,0.2)]",
    title: "Zero-Failure Enterprise Logistics",
    icon: Database,
    description:
      "Re-engineered a mission-critical logistics platform plagued by data inconsistency, creating layered redundancy for thousands of daily transactions.",
    techIcons: [Database, ShieldCheck, Layers],
    image: "/images/AAD.webp",
  },
];

/* ================================
   COMPONENT
================================ */

export default function CaseStudies() {
  const [index, setIndex] = useState(0);

  /* ================================
     AUTO SLIDE
  ================================ */

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  /* ================================
     SLIDE FUNCTIONS
  ================================ */

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % CASES.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + CASES.length) % CASES.length);
  };

  const currentCase = CASES[index];
  const Icon = currentCase.icon;
  const isReverse = index % 2 !== 0;

  return (
    <section id="case-studies" className="py-20 md:py-24 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <ScrollReveal className="text-center mb-16">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            CASE STUDIES
          </Chip>

          <H2 className="text-center">
            Systems <span className="text-[#E84B27]">Under Real Load</span>
          </H2>
        </ScrollReveal>

        {/* Carousel */}

        <div className="relative">
          {/* LEFT ARROW */}

          <button
            onClick={prevSlide}
            className="absolute left-0 lg:-left-6 top-[48%] md:top-1/2 -translate-y-1/2 z-10 
            bg-white shadow-lg hover:shadow-xl border border-gray-200
            w-12 h-12 rounded-full flex items-center justify-center
            hover:bg-[#162560] hover:text-white transition cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* RIGHT ARROW */}

          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-6 top-[48%] md:top-1/2 -translate-y-1/2 z-10 
            bg-white shadow-lg hover:shadow-xl border border-gray-200
            w-12 h-12 rounded-full flex items-center justify-center
            hover:bg-[#162560] hover:text-white transition cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide */}

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center justify-center py-3`}
              >
                {/* Image */}

                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className={`${isReverse ? "lg:order-2" : ""}`}
                >
                  <div className="rounded-2xl p-3 overflow-hidden shadow-xl">
                    <img
                      src={currentCase.image}
                      alt={currentCase.title}
                      loading="lazy"
                      className="w-full aspect-auto"
                    />
                  </div>
                </motion.div>

                {/* Content */}

                <div
                  className={`bg-white rounded-2xl p-4 md:p-10 shadow-lg ${
                    isReverse ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-medium font-poppins tracking-[0.14em] uppercase px-3 py-2 rounded-full ${currentCase.tagCls}`}
                    >
                      {currentCase.tag}
                    </span>

                    <span className="text-gray-300 font-poppins font-bold text-xl">
                      {currentCase.id}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-[#E84B27]/15 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#E84B27]" />
                  </div>

                  <div className="text-[#E84B27] font-poppins text-xs uppercase tracking-widest mb-2">
                    {currentCase.subtitle}
                  </div>

                  <h3 className="text-[#162560] font-poppins font-extrabold text-2xl leading-tight mb-4">
                    {currentCase.title}
                  </h3>

                  <p className="text-gray-500 font-poppins leading-relaxed mb-8">
                    {currentCase.description}
                  </p>

                  {/* System Highlights */}

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-poppins uppercase tracking-wider">
                        System Highlights
                      </span>

                      <div className="flex gap-3">
                        {currentCase.techIcons.map((TIcon, i) => (
                          <div
                            key={i}
                            className="w-9 h-9 rounded-lg bg-[#F8F7F4] flex items-center justify-center"
                          >
                            <TIcon className="w-5 h-5 text-[#162560]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}

          <div className="flex justify-center gap-3 mt-10">
            {CASES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-4 h-2.5 rounded-full font-poppins transition ${
                  index === i ? "bg-[#E84B27] w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
