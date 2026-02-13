"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/config/servicesConfig";
import { ArrowRight, List, Rocket, Star } from "lucide-react";

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
  },
};

export const ProjectDropdown = ({ onItemClick }) => {
  const [activeView, setActiveView] = useState("featured");

  const listHeading =
    activeView === "featured" ? "Success Stories" : "All Projects List";

  return (
    <div className="w-full max-w-7xl mx-auto pt-3 px-1 overflow-hidden rounded-[18px] border border-[#e8ddd4] bg-gradient-to-br from-[#ffffff] via-[#fffaf6] to-[#fff4ed]">
      <div className="grid lg:grid-cols-[31%_69%] min-h-[500px]">
        <aside className="flex flex-col justify-between border-b border-[#eadfd7] bg-[#fff6f1] p-6 lg:border-b-0 lg:border-r">
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-[#8f8078]">
              Our Portfolio
            </h3>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setActiveView("featured")}
                onMouseEnter={() => setActiveView("featured")}
                onFocus={() => setActiveView("featured")}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all cursor-pointer ${
                  activeView === "featured"
                    ? "border-[#e5d8ce] bg-white text-[#332771] shadow-sm"
                    : "border-transparent bg-transparent text-[#3B3C4A] hover:border-[#eadfd6] hover:bg-white"
                }`}
              >
                <Star
                  size={18}
                  className={
                    activeView === "featured"
                      ? "text-[#FF5225]"
                      : "text-[#332771]"
                  }
                />
                <span className="text-base font-semibold">Success Stories</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveView("all")}
                onMouseEnter={() => setActiveView("all")}
                onFocus={() => setActiveView("all")}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all cursor-pointer ${
                  activeView === "all"
                    ? "border-[#e5d8ce] bg-white text-[#332771] shadow-sm"
                    : "border-transparent bg-transparent text-[#3B3C4A] hover:border-[#eadfd6] hover:bg-white"
                }`}
              >
                <List
                  size={18}
                  className={
                    activeView === "all" ? "text-[#FF5225]" : "text-[#332771]"
                  }
                />
                <span className="text-base font-semibold">All Projects</span>
              </button>
            </div>
          </div>

          <div className="group relative mt-8 overflow-hidden rounded-2xl border border-[#ecded4] bg-gradient-to-br from-[#fffaf6] via-[#fff4ee] to-[#f5f1ff] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="pointer-events-none absolute -right-9 -top-10 h-24 w-24 rounded-full bg-[#ffdbcf] opacity-55 blur-xl"></div>
            <div className="pointer-events-none absolute -left-8 -bottom-9 h-24 w-24 rounded-full bg-[#d9d3ff] opacity-60 blur-xl"></div>

            <div className="relative flex items-start gap-3">
              <span className="inline-flex p-2 items-center justify-center rounded-full bg-gradient-to-br from-[#332771] to-[#FF5225] text-white">
                <Rocket size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#332771]">
                  Have an idea?
                </p>
                <p className="mt-1 text-xs text-[#53556a]">
                  Explore real delivery stories and outcomes from our case
                  studies.
                </p>
              </div>
            </div>

            <Link
              href="/mindful-ux-design-user-experience"
              onClick={onItemClick}
              className="relative mt-4 inline-flex items-center gap-1 rounded-full bg-white/85 px-4 py-2 text-xs font-bold text-[#332771] transition-all hover:bg-white hover:text-[#FF5225]"
            >
              View Case Studies
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </aside>

        <div className="p-6 lg:p-8">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5225]">
            {listHeading}
          </h4>

          {activeView === "featured" ? (
            <div className="max-h-[52vh] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {projectsData.map((project) => {
                  const meta = projectCardConfig[project.id] || {};
                  return (
                    <Link
                      key={project.id}
                      href={project.route}
                      onClick={onItemClick}
                      className="group block overflow-hidden rounded-2xl border border-[#ecded5] bg-gradient-to-br from-[#ffffff] via-[#fff9f4] to-[#f6f1ff] transition-all hover:-translate-y-0.5 hover:border-[#FF5225]"
                    >
                      <div
                        className={`relative flex h-24 items-center justify-center bg-gradient-to-br from-[#fffaf6] via-[#fff4ee] to-[#f5f1ff]`}
                      >
                        <div className="pointer-events-none absolute -right-9 -top-5 h-28 w-32 rounded-full bg-[#ffdbcf] opacity-85 blur-xl"></div>
                        <div className="pointer-events-none absolute -left-8 -bottom-4 h-28 w-32 rounded-full bg-[#d9d3ff] opacity-80 blur-xl"></div>
                        <div className="relative h-18 w-24">
                          <Image
                            src={meta.logo || "/images/nav-logo.svg"}
                            alt={meta.logoAlt || `${project.title} logo`}
                            fill
                            className="object-contain"
                            sizes="96px"
                          />
                        </div>
                      </div>

                      <div className="px-4 py-4">
                        <h5 className="text-lg font-bold text-[#332771] transition-colors">
                          {project.title}
                        </h5>
                        <p className="mt-1 text-sm text-[#4f4f5f]">
                          {meta.summary || project.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#332771] transition-colors group-hover:text-[#FF5225]">
                          Read Case Study
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="max-h-[52vh] overflow-y-auto pr-2">
              <div className="space-y-4">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-xl border border-[#ecded5] bg-white px-4 py-3 text-base font-medium text-[#332771]"
                  >
                    {project.title}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
