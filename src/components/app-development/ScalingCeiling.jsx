"use client";

import { motion } from "framer-motion";
import { ScrollReveal, H2, fadeUp } from "./ui";
import {
  Zap,
  Layers,
  Activity,
  Lock,
  DollarSign,
  Settings,
} from "lucide-react";

const CATEGORIES = [
  {
    id: "fresh",
    label: "For Fresh Builds",
    tagline: "The Greenfield Trap",
    color: "#0B0D17",
    bg: "bg-[#F2F5F7]",
    hoverBg: "hover:bg-white",
    border: "border-l-4 border-[#332771]",
    items: [
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Speed Over Structure",
        desc: 'Initial builds that become technical liabilities within months because they were optimized for "demo speed" only.',
      },
      {
        icon: <Layers className="w-5 h-5" />,
        title: "Architectural Debt",
        desc: "Most scalability problems are designed in during the first 20% of development.",
      },
    ],
  },
  {
    id: "legacy",
    label: "For Legacy Systems",
    tagline: "The Legacy Wall",
    color: "#F94D00",
    bg: "bg-[#F2F5F7]",
    hoverBg: "hover:bg-white",
    border: "border-l-4 border-[#F94D00]",
    items: [
      {
        icon: <Activity className="w-5 h-5" />,
        title: "Performance Decay",
        desc: "Apps that worked once but now degrade under modern user loads.",
      },
      {
        icon: <Lock className="w-5 h-5" />,
        title: "Engineering Paralysis",
        desc: "Teams stuck maintaining decisions they can’t undo, making every new feature a risk.",
      },
      {
        icon: <DollarSign className="w-5 h-5" />,
        title: "Infrastructure Bloat",
        desc: "Rising operational costs paired with declining system performance.",
      },
    ],
  },
];

export default function ScalingCeiling() {
  return (
    <section className="relative py-20 md:py-24 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#0B0D17 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-24 w-100 h-100 rounded-full bg-[#F94D00]/5 blur-[80px] -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -left-24 w-100 h-100 rounded-full bg-[#0B0D17]/5 blur-[80px] -z-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2F5F7] rounded-full mb-6 border border-gray-100 shadow-sm"
          >
            <Settings className="w-4 h-4 text-[#0B0D17] animate-spin-slow" />
            <span className="text-xs font-bold text-[#0B0D17] uppercase tracking-widest font-poppins">
              [DIAGNOSTIC ANALYSIS]
            </span>
          </motion.div>

          <H2 className="text-3xl md:text-5xl font-bold text-[#0B0D17] leading-tight mb-8 font-poppins">
            The Scaling Ceiling: <br />
            <span className="text-[#F94D00]">The Real Problem</span> (Not
            Symptoms)
          </H2>

          <p className="text-[#534F5A] text-lg md:text-xl max-w-2xl mx-auto font-poppins leading-relaxed">
            Most teams don’t fail because they lack developers. They fail
            because technical decisions are made without understanding long-term
            consequences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {CATEGORIES.map((cat, idx) => (
            <ScrollReveal key={cat.id} variants={fadeUp} delay={idx * 0.2}>
              <div
                className={`group h-full ${cat.bg} ${cat.hoverBg} ${cat.border} p-8 lg:p-12 rounded-2xl shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
              >
                <div className="mb-10">
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-poppins ${
                      idx === 0
                        ? "bg-[#332771] text-white"
                        : "bg-[#F94D00] text-white"
                    }`}
                  >
                    {cat.label}
                  </span>
                  <h3
                    className={`text-2xl lg:text-3xl font-bold text-[#0B0D17] font-poppins mb-2 transition-colors duration-300 ${
                      idx === 0
                        ? "group-hover:text-[#332771]"
                        : "group-hover:text-[#F94D00]"
                    }`}
                  >
                    {cat.tagline}
                  </h3>
                  <div
                    className={`w-12 h-1 bg-gray-200 group-hover:w-24 group-hover:bg-[${
                      idx === 0 ? "#332771" : "#F94D00"
                    }] transition-all duration-500`}
                  />
                </div>

                <div className="space-y-10">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div
                        className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          idx === 0
                            ? "bg-[#0B0D17]/5 text-[#0B0D17] group-hover:bg-[#332771] group-hover:text-white"
                            : "bg-[#F94D00]/5 text-[#F94D00] group-hover:bg-[#F94D00] group-hover:text-white"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#0B0D17] mb-2 font-poppins leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[#534F5A] text-base leading-relaxed font-poppins">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
