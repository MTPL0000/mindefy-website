"use client";

import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerGrid,
  Chip,
  H2,
  AppDevButton,
  fadeLeft,
  fadeUp,
} from "./ui";
import { Rocket, RefreshCw, Compass, Settings } from "lucide-react";

const ITEMS = [
  {
    icon: Rocket,
    title: "Greenfield Development",
    desc: 'Designing and building new products with a "Scaling-First" architecture that survives rapid growth without rewrites.',
  },
  {
    icon: RefreshCw,
    title: "System Modernization & Scaling",
    desc: "Restoring development velocity to legacy apps that have hit a technical wall — without burning the system down.",
  },
  {
    icon: Compass,
    title: "Architecture Consulting",
    desc: "Evaluating tech stacks and data models before a single line of code is written or rewritten.",
  },
];

export default function EngineeringDNA() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-24">
      {/* background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0E1A45] via-[#101e4f] to-[#0b1639]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,122,69,0.12) 0, transparent 30%), radial-gradient(circle at 85% 60%, rgba(111,122,230,0.12) 0, transparent 32%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16">
          {/* Left */}
          <ScrollReveal variants={fadeLeft}>
            <Chip>
              <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
              Engineering DNA
            </Chip>
            <H2 light>
              What We Actually{" "}
              <span className="bg-gradient-to-r from-[#FFB59E] via-[#FF7A45] to-[#FF5225] bg-clip-text text-transparent font-poppins">
                Do
              </span>
            </H2>
            <p className="text-white/75 text-lg font-poppins leading-relaxed mb-8">
              We bridge the gap between abstract business vision and durable
              technical execution through high-end custom software development.
            </p>

            <AppDevButton
              href="/contact-us-technology-innovators"
              variant="outline"
              primaryColor="#F94D00"
              secondaryColor="#0B0D17"
              surfaceColor="#FFFFFF"
            >
              Start a Technical Architecture Review
            </AppDevButton>

            <div className="mt-10 relative">
              <div className="relative overflow-hidden rounded-2xl px-2 py-2 backdrop-blur shadow-xl">
                <img
                  src="/images/yourhour/learn-serving.webp"
                  alt="image"
                  loading="lazy"
                  className="w-full aspect-auto"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right */}
          <StaggerGrid className="space-y-7">
            {ITEMS.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-5 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-white hover:shadow-2xl"
              >
                <div className="relative flex items-start gap-4">
                  <div className="relative flex p-3 items-center justify-center rounded-xl bg-[#FF5225]/80 text-white">
                    <item.icon
                      className="w-8 h-8 relative z-10"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/60 font-poppins">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-white font-semibold text-xl leading-snug font-poppins">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed font-poppins">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
