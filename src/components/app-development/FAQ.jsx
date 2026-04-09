"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, Chip, H2 } from "./ui";
import { Settings, Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "How long does app development take?",
    answer:
      "As long as required to avoid shortcuts. We don't optimize for artificial deadlines that compromise architecture. Discovery typically takes 2–3 weeks, with honest timelines provided upfront based on your project complexity and requirements.",
  },
  {
    question: "How do you balance speed vs. quality?",
    answer:
      "We decide what must be perfect (architecture, data models, security) and what must be adaptable (UI, feature scope). This deliberate split lets us move fast where it's safe and slow down where shortcuts cost millions later.",
  },
  {
    question: "How does AI integration fit into your process?",
    answer:
      "AI accelerates analysis — code review, pattern detection, load testing simulation — but human judgment governs architecture. We use AI to stress-test and surface risks faster, not to make structural decisions autonomously.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "Three models: Dedicated Engineering Squads for long-term growth (full-stack TL, Frontend, Backend, QA), Project-Based Modernization for fixed-outcome legacy rescues or MVP launches, and Architecture-as-a-Service for ongoing consulting to maintain structural guardrails.",
  },
  {
    question: "Do you work with regulated industries?",
    answer:
      "Yes — we have deep experience in Healthcare (HIPAA/GDPR), Fintech (data integrity, audit trails), and Logistics (real-time consistency). Compliance is treated as architecture, not a checkbox applied at the end of the project.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            FAQ
          </Chip>

          <H2 className="text-center">
            Common <span className="text-[#E84B27]">Questions</span>
          </H2>
        </ScrollReveal>

        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`border rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                open === i
                  ? "border-[#E84B27] shadow-md"
                  : "border-gray-200 hover:border-[#162560]/30"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full cursor-pointer text-left px-6 py-6 flex justify-between items-center gap-4"
              >
                <span className="text-[#162560] font-semibold text-xl">
                  {faq.question}
                </span>

                {/* Icon */}
                <motion.div
                  initial={false}
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`p-3 rounded-full flex items-center justify-center transition-colors ${
                    open === i
                      ? "bg-[#E84B27] text-white"
                      : "bg-[#F8F7F4] text-[#E84B27]"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {open === i ? (
                      <motion.div
                        key="minus"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Minus size={20} strokeWidth={2.5} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Plus size={20} strokeWidth={2} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      exit={{ y: 5 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 text-gray-600 text-lg leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
