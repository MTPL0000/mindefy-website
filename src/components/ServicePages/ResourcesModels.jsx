"use client";

import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerGrid,
  Chip,
  H2,
  fadeLeft,
  fadeRight,
  fadeUp,
} from "./ui";

import { Settings, Activity, Users } from "lucide-react";

export default function IntellectualCapitalEngagementModels({ content }) {
  const resources = content?.resources || [];
  const models = content?.models || [];
  const badge = content?.badge || "";
  const heading = content?.heading || "";
  const leftTitle = content?.leftTitle || "";
  const leftDescription = content?.leftDescription || "";
  const rightTitle = content?.rightTitle || "";
  const rightDescription = content?.rightDescription || "";

  if (!resources.length && !models.length) {
    return null;
  }

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#F8F7F4] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            {badge}
          </Chip>

          <H2 className="mt-4">
            {heading.replace("How We Work With Your Team", "")}
            <span className="text-[#E84B27]">How We Work With Your Team</span>
          </H2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-15">
          {/* == INTELLECTUAL CAPITAL == */}

          <div>
            <ScrollReveal variants={fadeLeft}>
              <h3 className="text-[#F15A24] text-xl font-poppins font-bold mb-2">
                {leftTitle}
              </h3>

              <p className="text-gray-600 font-poppins text-sm mb-6">
                {leftDescription}
              </p>
            </ScrollReveal>

            <StaggerGrid className="space-y-6">
              {resources.map((item, i) => {
                const Icon = item.icon || Activity;

                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#162560]/20 transition-all"
                  >
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[#EEF1FA] flex items-center justify-center shrink-0 group-hover:bg-[#F15A24] transition-all">
                        <Icon className="w-7 h-7 text-[#F15A24] group-hover:text-white transition-colors" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-[#162560] font-bold text-base font-poppins mt-1 mb-2 leading-snug">
                          {item.title}
                        </h4>

                        {item.desc && (
                          <p className="text-gray-600 text-sm font-poppins leading-relaxed">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </StaggerGrid>
          </div>

          {/* == ENGAGEMENT MODELS == */}

          <div>
            <ScrollReveal variants={fadeRight}>
              <h3 className="text-[#F15A24] text-xl font-bold mb-2">
                {rightTitle}
              </h3>

              <p className="text-gray-600 font-poppins text-sm mb-6">
                {rightDescription}
              </p>
            </ScrollReveal>

            <StaggerGrid className="space-y-6">
              {models.map((item, i) => {
                const Icon = item.icon || Users;

                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#162560]/20 transition-all"
                  >
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[#EEF1FA] flex items-center justify-center shrink-0 group-hover:bg-[#F15A24] transition-all">
                        <Icon className="w-7 h-7 text-[#F15A24] group-hover:text-white transition-colors" />
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-[#162560] font-bold font-poppins text-base mb-2">
                          {item.title}
                        </h4>

                        <p className="text-gray-600 text-sm font-poppins leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </StaggerGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
