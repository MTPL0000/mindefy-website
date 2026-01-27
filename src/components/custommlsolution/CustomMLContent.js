"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import useHeaderHeight from "@/hooks/useHeaderHeight";
import IntroductionSection from "./IntroductionSection";
import NavigationSidebar from "./NavigationSidebar";

const ChallengesSection = dynamic(() => import("./ChallengesSection"), {
  ssr: false,
});

const SolutionsSection = dynamic(() => import("./SolutionsSection"), {
  ssr: false,
});

const TechnicalImplementationSection = dynamic(() => import("./TechnicalImplementationSection"), {
  ssr: false,
});

const TechnologyStackSection = dynamic(() => import("./TechnologyStackSection"), {
  ssr: false,
});

export default function CustomMLContent() {
  const headerHeight = useHeaderHeight();
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: "-10% 0px -10% 0px",
        threshold: 0.1,
      };

      const observerCallback = (entries) => {
        let maxIntersectionRatio = 0;
        let mostVisibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#E9F6F6]">
      <div className="max-w-screen mx-auto flex flex-col lg:flex-row">
        <NavigationSidebar
          headerHeight={headerHeight}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
        <div className="flex-1 min-w-0 pt-10">
          <IntroductionSection />
          <ChallengesSection />
          <SolutionsSection />
          <TechnicalImplementationSection />
          <TechnologyStackSection />
        </div>
      </div>
    </div>
  );
}
