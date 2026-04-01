"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, Chip, H2 } from "./ui";

const FAQS = [
  {
    q: "How long does app development take?",
    a: "As long as required to avoid shortcuts. We don't optimize for artificial deadlines that compromise architecture. Discovery typically takes 2–3 weeks, with honest timelines provided upfront based on your project complexity and requirements.",
  },
  {
    q: "How do you balance speed vs. quality?",
    a: "We decide what must be perfect (architecture, data models, security) and what must be adaptable (UI, feature scope). This deliberate split lets us move fast where it's safe and slow down where shortcuts cost millions later.",
  },
  {
    q: "How does AI integration fit into your process?",
    a: "AI accelerates analysis — code review, pattern detection, load testing simulation — but human judgment governs architecture. We use AI to stress-test and surface risks faster, not to make structural decisions autonomously.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Three models: Dedicated Engineering Squads for long-term growth (full-stack TL, Frontend, Backend, QA), Project-Based Modernization for fixed-outcome legacy rescues or MVP launches, and Architecture-as-a-Service for ongoing consulting to maintain structural guardrails.",
  },
  {
    q: "Do you work with regulated industries?",
    a: "Yes — we have deep experience in Healthcare (HIPAA/GDPR), Fintech (data integrity, audit trails), and Logistics (real-time consistency). Compliance is treated as architecture, not a checkbox applied at the end of the project.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>FAQ</Chip>
          <H2 className="text-center">
            Common <span className="text-[#E84B27]">Questions</span>
          </H2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`border rounded-xl overflow-hidden shadow-sm transition-colors duration-200 ${
                open === i
                  ? "border-[#E84B27]"
                  : "border-gray-200 hover:border-[#162560]/30"
              }`}
            >
              {/* Question row */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 bg-transparent border-0 cursor-pointer"
              >
                <span className="text-[#162560] font-semibold text-sm">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.22 }}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[18px] font-light flex-shrink-0 transition-colors ${
                    open === i
                      ? "bg-[#E84B27] text-white"
                      : "bg-[#F8F7F4] text-[#E84B27]"
                  }`}
                >
                  +
                </motion.div>
              </button>

              {/* Answer panel */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                      {faq.a}
                    </div>
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
