"use client";

import { Settings, Rocket, CheckCircle } from "lucide-react";
import { ScrollReveal, Chip, H2, AppDevButton } from "./ui";

function StrategicCard({ data }) {
  const Icon = data.icon || Rocket;

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
              {(data.benefits || []).map((item, index) => (
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
              {data.cta || "Start Conversation"}
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
            {(data.benefits || []).map((item, index) => (
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
            {data.cta || "Start Conversation"}
          </AppDevButton>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function StrategicAlignment({
  content,
  sectionId = "strategic-alignment",
}) {
  const badge = content?.badge || "";
  const headingPrefix = content?.headingPrefix || "";
  const headingHighlight = content?.headingHighlight || "";
  const description = content?.description || "";
  const paths = Array.isArray(content?.strategicPaths)
    ? content.strategicPaths
    : [];

  if (!paths.length) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24]" />
            {badge}
          </Chip>

          <H2 className="text-center mt-4">
            {headingPrefix}
            <span className="text-[#E84B27]"> {headingHighlight}</span>
          </H2>

          <p className="text-gray-500 mt-4 text-lg leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {paths.map((path) => (
            <StrategicCard key={path.id} data={path} />
          ))}
        </div>

        {/* Bottom Note */}
        <ScrollReveal className="text-center mt-14">
          <p className="text-gray-400 text-sm">{content?.bottomNote || ""}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
