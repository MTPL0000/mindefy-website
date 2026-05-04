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
import { BadgeCheck } from "lucide-react";

export default function IdealPartnerProfile({
  content,
  bannerImage = "/images/yourhour/mindful-pause.webp",
  sectionId = "ideal-partner-profile",
}) {
  const qualifications = content?.qualifications || [];
  const badge = content?.badge || "";
  const headingPrefix = content?.headingPrefix || "";
  const headingHighlight = content?.headingHighlight || "";
  const heading = content?.heading || "";
  const heading1 = content?.heading1 || "";
  const intro = content?.description1 || "";
  const intro2 = content?.description2 || "";
  const ctaLabel = content?.ctaLabel || "";
  const ctaLink = content?.ctaLink || "";
  const image = content?.bannerImage || bannerImage;

  if (!qualifications.length) {
    return null;
  }

  return (
    <section id={sectionId} className="bg-[#F8F7F4] py-20 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-10 flex flex-col items-center">
          <Chip className="bg-white/90">
            <BadgeCheck className="w-4 h-4 text-[#F15A24]" />
            {badge}
          </Chip>

          <H2 className="mt-4 max-w-2xl">
            {headingPrefix}
            <span className="text-[#E84B27]">{headingHighlight}</span>
          </H2>
        </ScrollReveal>

        {/* == Banner == */}

        {image && (
          <ScrollReveal className="mb-14">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={image}
                alt="Ideal Partner Profile"
                loading="lazy"
                width={1200}
                height={500}
                className="w-full aspect-auto object-cover"
              />
            </div>
          </ScrollReveal>
        )}

        {/* == Content == */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}

          <ScrollReveal variants={fadeLeft}>
            {/* <H2>{heading}</H2> */}
            <H2>
              {heading} <br/>
              <span className="text-[#FF5225] font-poppins">
                {heading1}
              </span>
            </H2>

            <p className="text-gray-500 mt-6 text-base font-poppins leading-relaxed">
              {intro}
            </p>

            <p className="text-gray-500 mt-4 text-base font-poppins leading-relaxed">
              {intro2}
            </p>

            {ctaLabel && ctaLink && (
              <div className="mt-8">
                <AppDevButton
                  href={ctaLink}
                  primaryColor="#F94D00"
                  secondaryColor="#162560"
                  textColor="#FFFFFF"
                  className="hover:shadow-orange-500/20"
                >
                  {ctaLabel}
                </AppDevButton>
              </div>
            )}
          </ScrollReveal>

          {/* Right Checklist */}

          <ScrollReveal variants={fadeRight}>
            <div className="space-y-6">
              <p className="text-[#F95B27] font-semibold text-xl font-poppins">
                {content?.checklistTitle || ""}
              </p>

              {qualifications.map((item, index) => {
                const Icon = item.icon || BadgeCheck;

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
