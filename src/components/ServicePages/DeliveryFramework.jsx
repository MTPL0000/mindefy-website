"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { ScrollReveal, Chip, H2 } from "./ui";

export default function DeliveryFramework({ content }) {
  const steps = Array.isArray(content?.steps) ? content.steps : [];
  const badge = content?.badge || "";
  const headingPrefix = content?.headingPrefix || "";
  const headingHighlight = content?.headingHighlight || "";
  const description = content?.description || "";

  if (!steps.length) {
    return null;
  }

  return (
    <section id="process" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            {badge}
          </Chip>

          <H2 className="text-center">
            {headingPrefix}
            <span className="text-[#E84B27] font-poppins">
              {headingHighlight}
            </span>
          </H2>

          <p className="text-gray-500 text-lg font-poppins max-w-2xl mx-auto mt-4">
            {description}
          </p>
        </ScrollReveal>

        {/* Process Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon || Settings;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-[#F8F7F4] rounded-2xl p-8 border border-gray-200 hover:border-[#162560]  hover:shadow-xl hover:-translate-y-1 transition relative overflow-hidden"
              >
                {/* Step Number */}

                <div className="absolute right-6 top-8 text-6xl font-poppins font-extrabold text-[#162560]">
                  {step.n}
                </div>

                {/* Icon */}

                <div className="w-14 h-14 rounded-xl bg-white border border-[#E84B27] flex items-center justify-center mb-12 shadow-sm group-hover:scale-110 transition">
                  <Icon className="w-8 h-8 text-[#E84B27]" />
                </div>

                {/* Title */}

                <h3 className="text-[#E84B27] font-poppins font-bold text-xl mb-5">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="text-gray-500 font-poppins text-base leading-relaxed">
                  {step.desc}
                </p>

                {/* Bottom Accent */}

                <div className="mt-6 h-1 w-10 bg-gradient-to-r from-[#162560] to-[#E84B27] rounded-full group-hover:w-20 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
