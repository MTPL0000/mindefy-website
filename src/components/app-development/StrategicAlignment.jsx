"use client";

import { Settings, Rocket, Wrench, CheckCircle } from "lucide-react";
import {
  ScrollReveal,
  Chip,
  H2,
  AppDevButton,
  fadeLeft,
  fadeRight,
} from "./ui";

/* ================================
   DATA (Reusable & Extendable)
================================ */

const strategicPaths = [
  {
    id: "founder",
    label: "For Founders — Fresh Build",
    title: "Build a Scalable Foundation",
    description:
      "Create a strong technical base ready for Series A due diligence, rapid scaling, and long-term product stability.",
    icon: Rocket,
    variant: "dark",
    cta: "Build My MVP Architecture",
    benefits: [
      "Scalable architecture from day one",
      "Cloud-ready infrastructure",
      "Clean and maintainable codebase",
      "Fast MVP and product launch",
    ],
    animation: fadeLeft,
  },
  {
    id: "cto",
    label: "For CTOs — Legacy Project",
    title: "Modernize Your Stack",
    description:
      "Remove technical debt, improve performance, and restore engineering velocity in complex legacy systems.",
    icon: Wrench,
    variant: "light",
    cta: "Audit My Legacy System",
    benefits: [
      "Complete technical audit",
      "Performance optimization",
      "Infrastructure modernization",
      "Faster engineering delivery",
    ],
    animation: fadeRight,
  },
];

/* ================================
   CARD COMPONENT
================================ */

function StrategicCard({ data }) {
  const Icon = data.icon;

  if (data.variant === "dark") {
    return (
      <ScrollReveal variants={data.animation}>
        <div
          className="relative rounded-3xl p-10 lg:p-12 text-white h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0E1A45 0%, #162560 100%)",
          }}
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-[#E84B27]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <Icon className="w-5 h-5 text-[#F15A24]" />
              <span className="text-[#F15A24] text-xs tracking-widest uppercase">
                {data.label}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold mb-4 leading-tight">
              {data.title}
            </h3>

            {/* Description */}
            <p className="text-white/70 mb-8 leading-relaxed">
              {data.description}
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {data.benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F15A24]" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <AppDevButton
              href="#contact"
              variant="outline"
              primaryColor="#F94D00"
              secondaryColor="#162560"
              surfaceColor="#FFFFFF"
              size="sm"
              className="!px-7 !py-3.5 !text-sm shadow-lg"
            >
              {data.cta}
            </AppDevButton>
          </div>
        </div>
      </ScrollReveal>
    );
  }

  /* Light Variant */

  return (
    <ScrollReveal variants={data.animation}>
      <div className="relative rounded-3xl p-10 lg:p-12 bg-white border border-gray-100 shadow-xl h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E84B27] to-[#162560] rounded-t-3xl"></div>

        <div className="relative z-10">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <Icon className="w-5 h-5 text-[#E84B27]" />
            <span className="text-[#E84B27] text-xs tracking-widest uppercase">
              {data.label}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-[#162560] mb-4 leading-tight">
            {data.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 mb-8 leading-relaxed">
            {data.description}
          </p>

          {/* Benefits */}
          <ul className="space-y-4 mb-10">
            {data.benefits.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#E84B27]" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <AppDevButton
            href="#contact"
            primaryColor="#E84B27"
            secondaryColor="#0B0D17"
            textColor="#FFFFFF"
            size="sm"
            className="!px-7 !py-3.5 !text-sm hover:shadow-lg hover:shadow-[rgba(232,75,39,0.3)]"
          >
            {data.cta}
          </AppDevButton>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ================================
   MAIN COMPONENT
================================ */

export default function StrategicAlignment({
  title = "Choose Your Path",
  highlight = "Your Path",
  description = "Whether you're building a new product or modernizing an existing system, we provide the right technical direction to accelerate growth and reduce engineering risks.",
  sectionId = "strategic-alignment",
}) {
  return (
    <section
      id={sectionId}
      className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24]" />
            Strategic Alignment
          </Chip>

          <H2 className="text-center mt-4">
            {title.replace(highlight, "")}
            <span className="text-[#E84B27]"> {highlight}</span>
          </H2>

          <p className="text-gray-500 mt-4 text-lg leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {strategicPaths.map((path) => (
            <StrategicCard key={path.id} data={path} />
          ))}
        </div>

        {/* Bottom Note */}
        <ScrollReveal className="text-center mt-14">
          <p className="text-gray-400 text-sm">
            Not sure which path fits your situation? We help you decide during
            the discovery call.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
