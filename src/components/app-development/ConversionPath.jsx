"use client";

import { Settings } from "lucide-react";
import { ScrollReveal, Chip, H2, ArrowIcon } from "./ui";

const FIELDS = [
  {
    label: "Project Type",
    options: [
      "New Build (Greenfield)",
      "Legacy Modernization",
      "Architecture Consulting",
    ],
  },
  {
    label: "Complexity",
    options: ["MVP / Early Stage", "Mid-Scale Product", "Enterprise Grade"],
  },
  {
    label: "Core Challenge",
    options: [
      "Scaling Issues",
      "Technical Debt",
      "Starting from Scratch",
      "Performance Degradation",
    ],
  },
];

export default function ConversionPath() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            Conversion Path
          </Chip>
          <H2 className="text-center">
            Ready to{" "}
            <span className="text-[#E84B27]">Engineer for Growth?</span>
          </H2>
          <p className="text-gray-500 text-[17px] max-w-lg mx-auto">
            Tell us about your project. We&apos;ll respond with a custom
            architectural brief within 48 hours.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100">
            {/* Select fields */}
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              {FIELDS.map((f, i) => (
                <div key={i}>
                  <label className="block text-[#162560] text-[11px] font-bold mb-2 tracking-[0.08em] uppercase">
                    {f.label}
                  </label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full bg-[#F8F7F4] border border-gray-200 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium focus:outline-none focus:border-[#162560] focus:ring-2 focus:ring-[rgba(22,37,96,0.1)] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {f.options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    {/* chevron */}
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                      ▾
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit */}
            <button
              type="button"
              className="w-full bg-[#162560] text-white font-bold py-4 rounded-lg hover:bg-[#1E3280] hover:-translate-y-0.5 hover:shadow-xl transition-all text-sm flex items-center justify-center gap-2 border-0 cursor-pointer"
            >
              Claim Your 30-Day Audit &amp; Whiteboard Session <ArrowIcon />
            </button>

            <p className="text-center text-gray-400 text-xs mt-4">
              No commitment required · Response within 48 hours
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
