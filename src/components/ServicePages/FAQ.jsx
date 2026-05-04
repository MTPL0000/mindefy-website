"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, Chip, H2 } from "./ui";
import { Settings, Plus, Minus } from "lucide-react";

export default function FAQ({ content }) {
  const [open, setOpen] = useState(null);
  const faqs = Array.isArray(content?.faqs) ? content.faqs : [];
  const heading =
    content?.heading ||
    `${content?.headingPrefix || ""}${content?.headingHighlight || ""}`.trim();

  if (!faqs.length) {
    return null;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
            {content?.badge || ""}
          </Chip>

          <H2 className="text-center">{heading}</H2>
        </ScrollReveal>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
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
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-[#E84B27]"
                >
                  {open === i ? <Minus size={20} /> : <Plus size={20} />}
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <div className="px-6 pb-6 text-[#4A5568] leading-relaxed font-poppins text-lg border-t border-gray-100 pt-4">
                      {faq.answer}
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
