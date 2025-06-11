"use client";

import { useEffect } from "react";

export default function YourHour() {
  useEffect(() => {
    // Handle DaisyUI dropdown behavior - close others when one opens
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const summary = dropdown.querySelector("summary");
      if (summary) {
        summary.addEventListener("click", () => {
          // Close all other dropdowns
          dropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
              const otherDetails = otherDropdown.querySelector("details");
              if (otherDetails) {
                otherDetails.removeAttribute("open");
              }
            }
          });
        });
      }
    });

    // Initially open the first dropdown (Curated Dashboard)
    const firstDropdown = document.querySelector('[data-dropdown="dashboard"]');
    if (firstDropdown) {
      firstDropdown.setAttribute("open", "");
    }
  }, []);

  return (
    <section className="max-w-[72.37rem] mx-auto py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-[#FF5225] text-[1rem] font-bold tracking-wider uppercase mb-8">
          PORTFOLIO
        </p>
        <h1 className="text-[2.5rem] font-semibold text-gray-900">
          Recent Product Works
        </h1>
      </div>

      {/* Main Content - Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-14 items-center">
        {/* Left Content */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          {/* App Title */}
          <div>
            <h2 className="text-4xl sm:text-3xl font-bold text-[#2B2B2B] mb-2">
              YourHour
            </h2>
            <h3 className="text-4xl sm:text-xl lg:text-4xl text-gray-700 mb-4 lg:mb-[1.62rem]">
              Empowering Digital Wellbeing
            </h3>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              YourHour is an innovative mobile application designed to empower
              individuals to manage their digital lives. From screen time
              monitoring and app usage analysis to customizable reminders and a
              unique Focus Mode.
            </p>
          </div>

          {/* Dropdown Sections */}
          <div className="space-y-4  lg:space-y-6">
            {/* Curated Dashboard */}
            <div className="border-b  border-gray-200 pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="dashboard" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 dropdown-text">
                      Curated Dashboard
                    </span>
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="mt-3">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-4 border-l-2 border-purple-200">
                      Dashboard provides the consolidated summary of your
                      screentime & app usage patterns with all important metrics
                      shown in one place!
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Smart & Curated Challenges */}
            <div className="border-b border-gray-200 pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details
                  data-dropdown="challenges"
                  className="dropdown-details"
                >
                  <summary className="w-full flex items-center justify-between text-left py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 dropdown-text">
                      Smart & Curated Challenges
                    </span>
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="mt-3">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200">
                      Participate in carefully designed challenges to reduce
                      screen time and build healthier digital habits with
                      gamified experiences.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Addiction Level */}
            <div className="border-b border-gray-200 pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="addiction" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 dropdown-text">
                      Addiction Level
                    </span>
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="mt-3">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200">
                      Get personalized insights about your digital addiction
                      level with detailed analysis and recommendations for
                      improvement.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Read YourStories */}
            <div className="border-b border-gray-200 pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="stories" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 dropdown-text">
                      Read YourStories
                    </span>
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="mt-3">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200">
                      Read inspiring stories from other users who successfully
                      managed their digital wellbeing and transformed their
                      lives.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Usage Analytics */}
            <div className="border-b border-gray-200 pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="analytics" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 dropdown-text">
                      Usage Analytics
                    </span>
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="mt-3">
                    <p className="text-sm lg:text-base text-gray-600 \ leading-relaxed pl-4 border-l-2 border-gray-200">
                      Comprehensive analytics showing detailed patterns of your
                      app usage, screen time trends, and productivity insights.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6 lg:pt-8">
            <a
              href="#"
              className="inline-flex items-center text-base lg:text-lg text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              VIEW CASE STUDY
              <svg
                className="ml-2 w-4 h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Phone */}
        <div className="flex-1 relative">
          <div className="relative max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
            <img
              src="/images/smartphone.svg"
              alt="YourHour mobile app mockups showing dashboard and features"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* CSS for dropdown styling and arrow rotation */}
      <style jsx>{`
        /* Arrow rotation when dropdown is open */
        details[open] .dropdown-arrow {
          transform: rotate(180deg);
        }

        /* Change text color to purple when dropdown is open */
        details[open] .dropdown-text {
          color: #9333ea !important;
          transition: color 0.3s ease;
        }

        /* Default text color transition */
        .dropdown-text {
          transition: color 0.3s ease;
        }

        /* Hide default details markers */
        details summary::-webkit-details-marker {
          display: none;
        }
        details summary::marker {
          display: none;
        }

        /* Smooth transitions for all dropdown elements */
        .dropdown-details {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
