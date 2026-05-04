"use client";

import { motion } from "framer-motion";
import { Settings, Target, CheckCircle, XCircle } from "lucide-react";
import { AppDevButton, Chip } from "./ui";

export default function MarketDifferentiation({ content }) {
  const data = Array.isArray(content?.comparisonData)
    ? content.comparisonData
    : [];
  const badge = content?.badge || "";
  const headingPrefix = content?.headingPrefix || "";
  const headingHighlight = content?.headingHighlight || "";
  const description = content?.description || "";
  const traditionalTitle = content?.traditionalTitle || "";
  const mindefyTitle = content?.mindefyTitle || "";
  const ctaLabel = content?.ctaLabel || "";
  const ctaLink = content?.ctaLink || "";

  if (!data.length) {
    return null;
  }

  return (
    <section className="bg-[#F8F7F4] py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Chip as="div">
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            {badge}
          </Chip>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-poppins text-[#162560] leading-tight"
          >
            {headingPrefix}
            <span className="text-[#E84B27] font-poppins">
              {headingHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base font-poppins mt-4 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Comparison Section */}

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Traditional Card */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-poppins font-semibold text-gray-700 mb-8">
              {traditionalTitle}
            </h3>

            <div className="space-y-4">
              {data.map((item, i) => {
                const Icon = item.icon || Target;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-200 transition"
                  >
                    <Icon className="w-6 h-6 text-gray-400 mt-1" />

                    <div>
                      <p className="text-sm text-gray-500 font-poppins">
                        {item.title}
                      </p>

                      <div className="flex items-center gap-3 font-poppins text-base font-medium text-gray-600 mt-1">
                        <XCircle className="w-5 h-5 text-[#E84B27]" />

                        {item.traditional}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Mindefy Card */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-[#162560] to-[#0E1A45] rounded-2xl shadow-xl p-8 text-white relative overflow-hidden hover:shadow-2xl"
          >
            {/* Glow Effect */}

            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E84B27] opacity-20 rounded-full blur-3xl"></div>

            <h3 className="text-xl font-semibold mb-6">{mindefyTitle}</h3>

            <div className="space-y-4">
              {data.map((item, i) => {
                const Icon = item.icon || Target;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/10 transition"
                  >
                    <Icon className="w-6 h-6 text-[#E84B27] mt-1" />

                    <div>
                      <p className="font-poppins text-sm text-white/50">
                        {item.title}
                      </p>

                      <div className="flex items-center gap-3 font-poppins text-base font-medium mt-1">
                        <CheckCircle className="w-5 h-5 text-[#E84B27]" />

                        {item.mindefy}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}

        {ctaLabel && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <AppDevButton
              href={ctaLink}
              primaryColor="#F94D00"
              secondaryColor="#162560"
              textColor="#FFFFFF"
              className="hover:shadow-orange-500/20"
            >
              {ctaLabel}
            </AppDevButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}
