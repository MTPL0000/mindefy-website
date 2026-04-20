"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AppDevButton } from "./ui";
import { Settings } from "lucide-react";

export default function Hero({ content }) {
  // Use provided content or fallback to defaults
  const badge = content?.badge || "APP DEVELOPMENT";
  const headingPrefix = content?.headingPrefix || "Scalable App Development Services ";
  const headingHighlight = content?.headingHighlight || "From Startup MVPs to Enterprise Modernization";
  const paragraph1 = content?.paragraph1 || "Whether you're starting from zero or fixing what's broken, stop building fragile software.";
  const paragraph2 = content?.paragraph2 || "Most software breaks not at launch, but at scale. We engineer applications with the architecture, data flow, and decision systems that hold up whether you are launching a fresh product or modernizing a legacy system that has hit a wall.";
  const image = content?.image || "/images/AAD.webp";
  
  const button1 = content?.button1 || { label: "Get started now", link: "/contact-us-technology-innovators" };
  const button2 = content?.button2 || { label: "Let’s talk", link: "/contact-us-technology-innovators" };

  return (
    <section className="relative overflow-hidden bg-linear-to-l from-[#FFFFFF] via-[#FFFFFF] to-[#ebdad4] pt-16 pb-0 lg:pb-25 hero-5 fix">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="hero-content flex flex-col items-start relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-[#F15A24] bg-white rounded-full uppercase leading-none font-poppins shadow-sm"
              >
                <Settings width={16} height={16} />
                {badge}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0B0D17] lg:leading-18 font-poppins"
              >
                {headingPrefix}{" "}
                <span className="text-[#F94D00]">
                  {headingHighlight}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#534F5A] text-lg font-poppins font-semibold max-w-120 leading-relaxed"
              >
                {paragraph1}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#534F5A] text-lg font-poppins mb-6 max-w-120 leading-relaxed"
              >
                {paragraph2}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mt-7"
              >
                {button1 && (
                  <AppDevButton
                    href={button1.link}
                    primaryColor="#F94D00"
                    secondaryColor="#0B0D17"
                    textColor="#FFFFFF"
                    className="hover:shadow-orange-500/20"
                  >
                    {button1.label}
                  </AppDevButton>
                )}
                {button2 && (
                  <AppDevButton
                    href={button2.link}
                    variant="outline"
                    primaryColor="#F94D00"
                    secondaryColor="#0B0D17"
                    surfaceColor="#FFFFFF"
                  >
                    {button2.label}
                  </AppDevButton>
                )}
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="hero-image-5 relative overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src={image}
                alt={badge || "Service Hero Image"}
                width={1000}
                height={600}
                className="w-full h-150 object-cover transform transition-transform duration-700 hover:scale-105"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
