"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { servicesData } from "@/config/servicesConfig";
import {
  Apple,
  ArrowRight,
  Brain,
  Building2,
  Clock3,
  Cloud,
  Code2,
  Gamepad2,
  Globe,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

const serviceById = servicesData.reduce((acc, service) => {
  acc[service.id] = service;
  return acc;
}, {});

const sectionConfig = [
  {
    id: "ai-data",
    label: "AI Development & Data Services",
    title: "AI Development & Data Services",
    highlight: "Core AI & Data Services",
    icon: Brain,
    pillIds: [
      "custom-ai-solutions-enterprises",
      "machine-learning-services",
      "generative-ai-chatbot-development",
      "advanced-data-engineering-services",
    ],
    cardIds: [
      "custom-ai-solutions-enterprises",
      "machine-learning-services",
      "generative-ai-chatbot-development",
      "advanced-data-engineering-services",
    ],
  },
  {
    id: "product",
    label: "Product Development",
    title: "Product Development",
    highlight: "Mobile, Web and Product Engineering",
    icon: Smartphone,
    pillIds: [
      "android-app-development-experts",
      "ios-app-development-services",
      "hybrid-app-development-services",
      "web-app-development",
    ],
    cardIds: [
      "android-app-development-experts",
      "ios-app-development-services",
      "hybrid-app-development-services",
      "web-app-development",
      "mvp-development-startup-support",
      "mindful-ux-design-user-experience",
    ],
  },
  {
    id: "cloud-platform",
    label: "Cloud & Platform Engineering",
    title: "Cloud & Platform Engineering",
    highlight: "Cloud, DevOps and Platform Engineering",
    icon: Cloud,
    pillIds: [
      "cloud-engineering-services",
      "cloud-devops-engineering",
      "digital-transformation-consulting",
      "test-automation-qa-services",
    ],
    cardIds: [
      "cloud-engineering-services",
      "cloud-devops-engineering",
      "digital-transformation-consulting",
      "test-automation-qa-services",
      "microservices-architecture-consulting",
    ],
  },
  {
    id: "business-it",
    label: "Business IT Solutions",
    title: "Business IT Solutions",
    highlight: "Strategic Business Technology Services",
    icon: Building2,
    pillIds: [
      "IT Consulting Services",
      "enterprise-software-solutions",
      "staff-augmentation-services",
      "startup-support-consulting",
    ],
    cardIds: [
      "IT Consulting Services",
      "enterprise-software-solutions",
      "staff-augmentation-services",
      "startup-support-consulting",
      "startup-incubation-consulting-services",
      "white-label-software-solutions",
    ],
  },
  {
    id: "game",
    label: "Game Development",
    title: "Game Development",
    highlight: "Immersive Game Experiences",
    icon: Gamepad2,
    pillIds: [
      "2D & 3D Game Animation",
      "Unity and unreal Game Development",
      "AR VR Game Development",
    ],
    cardIds: [
      "2D & 3D Game Animation",
      "Unity and unreal Game Development",
      "AR VR Game Development",
    ],
  },
  {
    id: "ecom-marketplace",
    label: "E-commerce and Marketplace",
    title: "E-commerce and Marketplace",
    highlight: "Commerce and Business Platform Services",
    icon: ShoppingCart,
    pillIds: [
      "ecommerce-marketplace-development",
      "crm-software-solutions",
      "business-process-management-solutions",
      "low-code-app-development-services",
    ],
    cardIds: [
      "ecommerce-marketplace-development",
      "crm-software-solutions",
      "business-process-management-solutions",
      "low-code-app-development-services",
    ],
  },
];

const pillIconMap = {
  "ios-app-development-services": Apple,
  "android-app-development-experts": Smartphone,
  "hybrid-app-development-services": Smartphone,
  "web-app-development": Globe,
  "generative-ai-chatbot-development": Sparkles,
  "custom-ai-solutions-enterprises": Brain,
  "machine-learning-services": Brain,
  "cloud-devops-engineering": Cloud,
  "ecommerce-marketplace-development": ShoppingCart,
  "IT Consulting Services": Building2,
};

function getServicesByIds(ids) {
  return ids.map((id) => serviceById[id]).filter(Boolean);
}

export default function ServicesDrop({ onItemClick, onCtaClick }) {
  const [activeSection, setActiveSection] = useState(sectionConfig[0].id);

  const section = useMemo(
    () =>
      sectionConfig.find((item) => item.id === activeSection) ||
      sectionConfig[0],
    [activeSection]
  );

  const pills = getServicesByIds(section.pillIds);
  const cards = getServicesByIds(section.cardIds);
  const sectionIndex =
    sectionConfig.findIndex((item) => item.id === section.id) + 1;

  return (
    <div className="max-w-7xl mx-auto pt-3 px-1 pointer-events-auto">
      <div className="overflow-hidden rounded-[18px] border border-[#e8ddd4] bg-gradient-to-br from-[#ffffff] via-[#fffaf6] to-[#fff4ed] shadow-[0_30px_70px_-40px_rgba(20,24,34,0.45)]">
        <div className="grid grid-cols-[34%_66%] min-h-[500px]">
          <aside className="border-r border-[#eadfd7] bg-[#fff6f1] p-6">
            <h3 className="mb-4 px-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#8f8078]">
              Core Authorities
            </h3>

            <div className="space-y-1.5">
              {sectionConfig.map((item) => {
                const Icon = item.icon;
                const active = item.id === activeSection;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveSection(item.id)}
                    onFocus={() => setActiveSection(item.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left border transition-all cursor-pointer ${
                      active
                        ? "border-[#e5d8ce] bg-white text-[#332771] shadow-sm"
                        : "border-transparent bg-transparent text-[#3B3C4A] hover:bg-white/85 hover:border-[#eadfd6]"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={active ? "text-[#FF5225]" : "text-[#332771]"}
                    />
                    <span className="text-sm font-semibold leading-tight">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="p-5">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5225]">
              {String(sectionIndex).padStart(2, "0")}. {section.title}
            </h4>

            <div className="mb-6 rounded-2xl border border-[#efdfd5] bg-[#fff8f3] p-5">
              <h5 className="mb-4 text-base font-semibold text-[#212353]">
                {section.highlight}
              </h5>

              <div className="flex flex-wrap gap-4">
                {pills.map((service) => {
                  const PillIcon = pillIconMap[service.id] || Code2;
                  return (
                    <Link
                      key={service.id}
                      href={service.route}
                      onClick={onItemClick}
                      className="inline-flex items-center gap-1.5 rounded-[10px] border border-[#eadbcf] bg-white px-4 py-2 text-sm font-medium text-[#3B3C4A] transition-colors hover:border-[#FF5225] hover:text-[#FF5225]"
                    >
                      <PillIcon size={18} />
                      {service.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {cards.map((service) => (
                <Link
                  key={service.id}
                  href={service.route}
                  onClick={onItemClick}
                  className="group rounded-2xl border border-[#ecded5] bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:bg-[#fffaf5] hover:border-[#FF5225]"
                >
                  <h6 className="mb-1 text-base font-semibold text-[#332771] transition-colors group-hover:text-[#FF5225]">
                    {service.title}
                  </h6>
                  <p className="text-xs font-normal text-[#444444]">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-gradient-to-r from-[#332771] via-[#4a3aff] to-[#FF5225] px-6 py-5 text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-semibold">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#edbaad]" />
              NDA Included
            </span>
            <span className="inline-flex items-center gap-2">
              <Zap size={18} className="text-[#ffd37c]" />
              Free Architecture Review
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={18} className="text-[#f5d9c4]" />
              24h Response
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles size={18} className="text-[#ffc7b5]" />
              Dedicated AI Experts
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe size={18} className="text-[#d1d7ff]" />
              MVP to Enterprise Growth
            </span>
          </div>

          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-7 py-3 text-sm font-bold text-[#332771] transition-all hover:bg-[#fff7f2] hover:text-[#FF5225] cursor-pointer lg:self-auto"
          >
            Build Your Digital Ecosystem
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
