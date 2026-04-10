"use client";

import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/config/servicesConfig";
import { ArrowRight } from "lucide-react";

const projectCardConfig = {
  memolect: {
    logo: "/images/flashcard-logo.svg",
    logoAlt: "Memolect logo",
    summary: "Flashcard learning app focused on memory retention and learning.",
  },
  jego: {
    logo: "/images/jego-icon.svg",
    logoAlt: "JEGO logo",
    summary: "Scalable OTT streaming platform and content experience.",
  },
  solistack: {
    logo: "/images/soliroute-logo.svg",
    logoAlt: "SoliStack logo",
    summary: "Enterprise integration solutions for logistics workflows.",
  },
  earlyfoods: {
    logo: "/images/projects/EF-logo.webp",
    logoAlt: "EarlyFoods logo",
    summary: "Organic food e-commerce marketplace and digital storefront.",
  },
  greenbill: {
    logo: "/images/projects/DBA-icon-1.svg",
    logoAlt: "GreenBill logo",
    summary: "Paperless billing software for modern retail operations.",
  },
  spector: {
    logo: "/images/sp-logo.webp",
    logoAlt: "Spector.ai logo",
    summary:
      "360° Asset Health Platform powered by AI and AI Agents for industry.",
    accent: "#f2e9ff",
  },
};

const accentColorCycle = ["#e7f0ff", "#fff1e8", "#ecf6ed", "#f3edff"];

export const ProjectDropdown = ({ onItemClick }) => {
  return (
    <div className="group w-full max-w-5xl pt-2 overflow-hidden font-poppins rounded-2xl border border-[#e8ddd4] bg-[#ffffff] shadow-[0_30px_70px_-40px_rgba(20,24,34,0.45)] transition-shadow duration-300 hover:shadow-[0_36px_80px_-44px_rgba(20,24,34,0.5)]">
      <div className="relative px-5 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase text-[#FF5225]">
              Success Stories
            </p>
            <h3 className="text-2xl font-bold text-[#332771]">
              Projects that mirror your screenshot layout
            </h3>
            <p className="text-sm text-[#4f4f5f] font-medium">
              Explore the products and platforms we have shipped recently.
            </p>
          </div>

          <Link
            href="/mindful-ux-design-user-experience"
            onClick={onItemClick}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#332771] hover:text-[#FF5225]"
          >
            View all case studies
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-6 max-h-[68vh] overflow-y-auto pr-1">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {projectsData.map((project, index) => {
              const meta = projectCardConfig[project.id] || {};
              const accent =
                meta.accent ||
                accentColorCycle[index % accentColorCycle.length];

              return (
                <Link
                  key={project.id}
                  href={project.route}
                  onClick={onItemClick}
                  className="group/card relative flex items-start gap-4 rounded-2xl border border-[#ecded5] bg-white px-4 py-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(51,39,113,0.35)]"
                >
                  <div
                    className="flex h-18 w-18 shrink-0 items-center justify-center rounded-xl border border-[#e6dcd2]"
                    style={{ backgroundColor: accent }}
                  >
                    <div className="relative h-12 w-12">
                      <Image
                        src={meta.logo || "/images/nav-logo.svg"}
                        alt={meta.logoAlt || `${project.title} logo`}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-base font-semibold text-[#1f1d38] sm:text-lg">
                      {project.title}
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-[#4f4f5f]">
                      {meta.summary || project.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
