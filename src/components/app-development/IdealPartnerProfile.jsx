"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  Chip,
  H2,
  fadeLeft,
  fadeRight,
  fadeUp,
  AppDevButton,
} from "./ui";
import {
  BadgeCheck,
  Rocket,
  Wrench,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

/* ================================
   DATA
================================ */

const QUALIFICATIONS = [
  {
    icon: Rocket,
    text: "Are starting a new build that must grow without constant rewrites.",
  },
  {
    icon: Wrench,
    text: "Are struggling with a legacy system that has become too expensive or slow to maintain.",
  },
  {
    icon: ShieldCheck,
    text: 'Value architectural clarity, security, and long-term maintainability over "cheap and fast."',
  },
];

/* ================================
   COMPONENT
================================ */

export default function IdealPartnerProfile({
  bannerImage = "/images/ideal-partner-banner.jpg",
  sectionId = "ideal-partner-profile",
}) {
  return (
    <section id={sectionId} className="bg-[#F8F7F4] py-20 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ================= Header Centered ================= */}

        <ScrollReveal className="text-center mb-10 flex flex-col items-center">
          <Chip className="bg-white/90">
            <BadgeCheck className="w-4 h-4 text-[#F15A24]" />
            Ideal Partner Profile
          </Chip>

          <H2 className="mt-4 max-w-2xl">
            Qualification:{" "}
            <span className="text-[#E84B27]">Who This Approach Is For</span>
          </H2>
        </ScrollReveal>

        {/* ================= Banner ================= */}

        <ScrollReveal className="mb-14">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src={bannerImage}
              alt="Ideal Partner Profile"
              loading="lazy"
              width={1200}
              height={500}
              className="w-full h-64 md:h-80 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#162560]/50" />
          </div>
        </ScrollReveal>

        {/* ================= Content ================= */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}

          <ScrollReveal variants={fadeLeft}>
            <H2>
              This approach is designed for{" "}
              <span className="text-[#E84B27]">growing engineering teams</span>
            </H2>

            <p className="text-gray-500 mt-6 text-base font-poppins leading-relaxed">
              We partner with companies that want to build scalable,
              maintainable, and secure software systems that can grow without
              frequent rewrites or costly technical debt.
            </p>

            <p className="text-gray-500 mt-4 text-base font-poppins leading-relaxed">
              Our approach focuses on long-term engineering clarity,
              architectural stability, and structured development practices to
              ensure your product remains reliable and future-ready.
            </p>

            <div className="mt-8">
              <AppDevButton
                href="/contact-us-technology-innovators"
                primaryColor="#F94D00"
                secondaryColor="#162560"
                textColor="#FFFFFF"
                className="hover:shadow-orange-500/20"
              >
                Check Your Project Fit
              </AppDevButton>
            </div>
          </ScrollReveal>

          {/* Right Checklist */}

          <ScrollReveal variants={fadeRight}>
            <div className="space-y-6">
              <p className="text-[#F95B27] font-semibold text-xl font-poppins">
                This is a strong fit if you:
              </p>

              {QUALIFICATIONS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="group flex gap-4 bg-white px-5 py-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#F15A24] transition"
                  >
                    <div className="w-13 h-13 rounded-xl bg-[#EEF1FA] flex items-center justify-center shrink-0 group-hover:bg-[#F15A24] transition-all">
                      <Icon className="w-7 h-7 text-[#162560] group-hover:text-white transition-colors" />
                    </div>

                    <p className="text-gray-700 text-base font-poppins leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
