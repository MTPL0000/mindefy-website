"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import useHeaderHeight from "@/hooks/useHeaderHeight";
import GenAIChatbotIntro from "./GenAIChatbotIntro";
import SectionLoader from "../ui/SectionLoader";

const GenAIChatbotSections = dynamic(() => import("./GenAIChatbotSections"), {
  loading: () => <SectionLoader minHeight="min-h-screen" />,
  ssr: true,
});

const navigationItems = [
  { id: "introduction", label: "Introduction" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "technical-implementation", label: "Technical Implementation" },
  { id: "technology-stack", label: "Technology Stack" },
  { id: "contact", label: "Lets Get In Touch" },
];

const GenAIChatbot = () => {
  const headerHeight = useHeaderHeight();
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMobile, setIsMobile] = useState(false);
  const [introductionHeight, setIntroductionHeight] = useState(0);
  const introductionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 500; // Offset for better detection

      // Check if we should hide the navigation
      const techStackSection = document.getElementById("technology-stack");

      if (techStackSection) {
        const techStackBottom =
          techStackSection.offsetTop + techStackSection.offsetHeight;
        setShowNavigation(scrollPosition < techStackBottom);
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(navigationItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  // Calculate introduction section height at runtime
  useEffect(() => {
    const calculateHeight = () => {
      if (introductionRef.current) {
        const height = introductionRef.current.offsetHeight;
        setIntroductionHeight(height);
        console.log("Introduction section height:", height, "px");
      }
    };

    // Calculate on mount
    calculateHeight();

    // Recalculate on window resize
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-screen mx-auto flex flex-col lg:flex-row">
        <div
          className="absolute left-0 w-full -z-10"
          style={{
            height: `${introductionHeight}px`,
            top: `${headerHeight}px`,
            background: "linear-gradient(to bottom, #FFFFFF, #A2E3FB, #FEFEFE)",
          }}
        ></div>
        {/* Left Navigation Sidebar - Hidden on mobile/tablet */}
        <div className="hidden lg:block w-80 shrink-0 mr-0 mb-6 lg:mb-0 relative">
          <div className="sticky" style={{ top: `${headerHeight}px` }}>
            <div className="py-8 bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.2)] h-full">
              <nav className="space-y-1.5">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left p-5 hover:font-semibold transition-colors duration-200 cursor-pointer border-l-4 ${
                      activeSection === item.id
                        ? "bg-[#FAFFFA] text-[#21ABE1] hover:text-[#21ABE1] font-semibold text-base border-[#21ABE1]"
                        : "text-[#142E149E] bg-[#FAFFFA] font-medium text-base border-[#21ABFF80]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 pt-10">
          {/* Introduction Section - Loaded immediately */}
          <GenAIChatbotIntro introductionRef={introductionRef} />

          {/* Below-the-fold sections - Lazy loaded */}
          <GenAIChatbotSections />
        </div>
      </div>
    </div>
  );
};

export default GenAIChatbot;
