"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, Chip, H2 } from "./ui";
import { Settings } from "lucide-react";

const LAYERS = [
  {
    num: "01",
    title: "Infrastructure & Reliability",
    chips: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    num: "02",
    title: "Backend & Distributed Data",
    chips: [
      "Node.js",
      "Go",
      "Python / FastAPI",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
    ],
  },
  {
    num: "03",
    title: "Core Logic & Interface",
    chips: [
      "Swift / SwiftUI",
      "Kotlin",
      "React Native",
      "Flutter",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    num: "04",
    title: "Intelligence & AI",
    chips: [
      "GPT-4o",
      "Claude 3.5",
      "Llama 3",
      "LangChain",
      "OpenCV",
      "PyTorch",
      "Pinecone",
    ],
  },
];

export default function TechStack() {
  const [active, setActive] = useState(0);

  return (
    <section id="stack" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            Technology Stack
          </Chip>
          <H2 className="text-center">
            A Layered <span className="text-[#E84B27]">Defense System</span>
          </H2>
          <p className="text-gray-500 text-[17px] max-w-lg mx-auto">
            We engineer for resilience using a multi-layered technology
            approach.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl grid lg:grid-cols-5">
            {/* Left tabs */}
            <div className="lg:col-span-2 bg-[#F8F7F4]">
              {LAYERS.map((l, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-6 py-6 border-b border-gray-200 transition-all duration-200 cursor-pointer ${
                    active === i ? "bg-[#162560]" : "hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`text-[10px] font-medium tracking-[0.18em] uppercase mb-1 ${
                      active === i ? "text-[#FFB59E]" : "text-[#E84B27]"
                    }`}
                    style={{ fontFamily: "monospace" }}
                  >
                    Layer {l.num}
                  </div>
                  <div
                    className={`font-bold text-sm ${
                      active === i ? "text-white" : "text-[#162560]"
                    }`}
                  >
                    {l.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Right chip panel */}
            <div className="lg:col-span-3 p-8 bg-white flex flex-col justify-center min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.28 }}
                >
                  <div
                    className="text-[#E84B27] text-[10px] font-medium tracking-[0.18em] uppercase mb-2"
                    style={{ fontFamily: "monospace" }}
                  >
                    Layer {LAYERS[active].num}
                  </div>
                  <h3 className="text-[#162560] font-bold text-xl mb-6">
                    {LAYERS[active].title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {LAYERS[active].chips.map((chip, j) => (
                      <motion.span
                        key={chip}
                        initial={{ opacity: 0, scale: 0.88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.045 }}
                        className="text-sm text-gray-600 bg-[#F8F7F4] border border-gray-200 px-4 py-2 rounded-full hover:bg-[#162560] hover:text-white hover:border-[#162560] transition-colors cursor-default"
                        style={{ fontFamily: "monospace" }}
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
