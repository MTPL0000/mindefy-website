"use client";

import { motion } from "framer-motion";
import { ScrollReveal, Chip, H2 } from "./ui";
import { Settings } from "lucide-react";

const ROWS = [
  { feature: "Focus", trad: 'Speed to "Demo"', mindefy: "Stability at Scale" },
  {
    feature: "Architecture",
    trad: "Templated / Off-the-shelf",
    mindefy: "Bespoke / Scale-ready",
  },
  {
    feature: "Tech Debt",
    trad: '"Fix it later" (High Debt)',
    mindefy: '"Build it right" (Clean Arch)',
  },
  {
    feature: "Testing",
    trad: "Manual / Surface level",
    mindefy: "AI-Driven Chaos Engineering",
  },
  {
    feature: "Outcome",
    trad: "A Launchable MVP",
    mindefy: "An Evolvable Asset",
  },
];

export default function MarketDiff() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            Market Differentiation
          </Chip>
          <H2 className="text-center">
            Mindefy vs.{" "}
            <span className="text-[#E84B27]">Traditional Agencies</span>
          </H2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  style={{
                    background:
                      "linear-gradient(135deg, #0E1A45 0%, #162560 100%)",
                  }}
                >
                  <th
                    scope="col"
                    className="text-left px-8 py-5 text-white/50 text-[11px] font-normal tracking-[0.16em] uppercase w-[28%]"
                    style={{ fontFamily: "monospace" }}
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="text-left px-8 py-5 text-white/50 text-[11px] font-normal tracking-[0.16em] uppercase w-[36%]"
                    style={{ fontFamily: "monospace" }}
                  >
                    Traditional Agencies
                  </th>
                  <th
                    scope="col"
                    className="text-left px-8 py-5 text-[#FFB59E] text-[11px] font-normal tracking-[0.16em] uppercase w-[36%]"
                    style={{ fontFamily: "monospace" }}
                  >
                    Mindefy Engineering
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 }}
                    className="group hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-8 py-4 border-b border-gray-100 text-[#162560] font-bold text-sm">
                      {row.feature}
                    </td>
                    <td className="px-8 py-4 border-b border-gray-100 text-gray-500 text-sm">
                      {row.trad}
                    </td>
                    <td className="px-8 py-4 border-b border-gray-100 text-[#162560] font-semibold text-sm bg-[#EEF1FA]/40">
                      {row.mindefy}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
