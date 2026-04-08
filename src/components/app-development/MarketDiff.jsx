"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Target,
  Layers,
  AlertTriangle,
  Activity,
  Trophy,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { AppDevButton } from "./ui";

/* ================================
   DATA
================================ */

const comparisonData = [
  {
    title: "Focus",
    icon: Target,
    traditional: 'Speed to "Demo"',
    mindefy: "Stability at Scale",
  },
  {
    title: "Architecture",
    icon: Layers,
    traditional: "Templated / Off-the-shelf",
    mindefy: "Bespoke / Scale-ready",
  },
  {
    title: "Tech Debt",
    icon: AlertTriangle,
    traditional: '"Fix it later" (High Debt)',
    mindefy: '"Build it right" (Clean Architecture)',
  },
  {
    title: "Testing",
    icon: Activity,
    traditional: "Manual / Surface level",
    mindefy: "AI-Driven Chaos Engineering",
  },
  {
    title: "Outcome",
    icon: Trophy,
    traditional: "A Launchable MVP",
    mindefy: "An Evolvable Asset",
  },
];

/* ================================
   COMPONENT
================================ */

export default function MarketDifferentiation() {
  return (
    <section className="bg-[#F8F7F4] py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6"
          >
            <Settings className="w-4 h-4 text-[#E84B27]" />
            <span className="text-sm font-poppins font-semibold text-[#E84B27]">
              MARKET DIFFERENTIATION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-poppins text-[#162560] leading-tight"
          >
            Traditional Agencies vs{" "}
            <span className="text-[#E84B27] font-poppins">
              Mindefy Engineering
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base font-poppins mt-4 max-w-2xl mx-auto"
          >
            We don't just build software fast — we build systems that scale,
            evolve, and remain stable under real-world pressure.
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
              Traditional Agencies
            </h3>

            <div className="space-y-4">
              {comparisonData.map((item, i) => {
                const Icon = item.icon;

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

            <h3 className="text-xl font-semibold mb-6">Mindefy Engineering</h3>

            <div className="space-y-4">
              {comparisonData.map((item, i) => {
                const Icon = item.icon;

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <AppDevButton
            href="/contact-us-technology-innovators"
            primaryColor="#F94D00"
            secondaryColor="#0B0D17"
            textColor="#FFFFFF"
            className="hover:shadow-orange-500/20"
          >
            Start Your Engineering Journey
          </AppDevButton>
        </motion.div>
      </div>
    </section>
  );
}
