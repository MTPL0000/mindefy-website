"use client";

import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerGrid,
  Chip,
  H2,
  ArrowIcon,
  fadeLeft,
  fadeRight,
  fadeUp,
} from "./ui";

import {
  Settings,
  Activity,
  FileText,
  BarChart3,
  Users,
  Target,
  Compass,
} from "lucide-react";

/* ================================
   INTELLECTUAL CAPITAL DATA
================================ */

const RESOURCES = [
  {
    icon: Activity,
    title: "Free Diagnostic The 30-Day Scaling & Technical Health Audit",
    desc: "Identify your architectural debt before it breaks your growth.",
  },
  {
    icon: FileText,
    title: "Whitepaper",
    desc: "Why React Native is (and isn't) the right choice for your Enterprise App.",
  },
  {
    icon: BarChart3,
    title: "Case Study",
    desc: "How we handled a 10x traffic spike for a global E-commerce leader.",
  },
];

/* ================================
   ENGAGEMENT MODELS DATA
================================ */

const MODELS = [
  {
    icon: Users,
    title: "Dedicated Engineering Squads",
    desc: "A full-stack team (TL, Frontend, Backend, QA) integrated into your workflow. Best for long-term growth.",
  },
  {
    icon: Target,
    title: "Project-Based Modernization",
    desc: "Fixed-outcome sprints to rescue legacy products or launch specific MVPs.",
  },
  {
    icon: Compass,
    title: "Architecture-as-a-Service",
    desc: "Ongoing consulting for internal teams to ensure structural guardrails remain in place.",
  },
];

/* ================================
   COMPONENT
================================ */

export default function IntellectualCapitalEngagementModels() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#F8F7F4] to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* ================= Header ================= */}

        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            Intellectual Capital & Engagement Models
          </Chip>

          <H2 className="mt-4">
            Authority Content &{" "}
            <span className="text-[#E84B27]">How We Work With Your Team</span>
          </H2>
        </ScrollReveal>

        {/* ================= Grid ================= */}

        <div className="grid lg:grid-cols-2 gap-15">
          {/* =======================================
              INTELLECTUAL CAPITAL
          ======================================= */}

          <div>
            <ScrollReveal variants={fadeLeft}>
              <h3 className="text-[#F15A24] text-xl font-poppins font-bold mb-2">
                Authority Content & Lead Magnets
              </h3>

              <p className="text-gray-600 font-poppins text-sm mb-6">
                Explore our technical insights, diagnostic tools, and
                research-driven content designed to help engineering leaders
                make better architectural decisions.
              </p>
            </ScrollReveal>

            <StaggerGrid className="space-y-6">
              {RESOURCES.map((item, i) => {
                const Icon = item.icon;

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

          {/* =======================================
              ENGAGEMENT MODELS
          ======================================= */}

          <div>
            <ScrollReveal variants={fadeRight}>
              <h3 className="text-[#F15A24] text-xl font-bold mb-2">
                How We Work With Your Team
              </h3>

              <p className="text-gray-600 font-poppins text-sm mb-6">
                Flexible engagement models designed to support your engineering
                team, accelerate delivery, and ensure long-term technical
                stability.
              </p>
            </ScrollReveal>

            <StaggerGrid className="space-y-6">
              {MODELS.map((item, i) => {
                const Icon = item.icon;

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
