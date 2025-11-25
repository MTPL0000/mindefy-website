"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function YourHour() {
  useEffect(() => {
    // Force close all dropdowns with a small delay to override any default behavior
    const forceCloseDropdowns = () => {
      const dropdowns = document.querySelectorAll(".dropdown-details");
      dropdowns.forEach((dropdown) => {
        dropdown.removeAttribute("open");
        dropdown.open = false;
      });
    };

    // Close immediately and after a small delay
    forceCloseDropdowns();
    const timeoutId = setTimeout(forceCloseDropdowns, 100);

    // Handle DaisyUI dropdown behavior - close others when one opens
    const handleDropdownClick = (dropdown) => {
      return () => {
        // Close all other dropdowns
        const allDropdowns = document.querySelectorAll(".dropdown-details");
        allDropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.removeAttribute("open");
            otherDropdown.open = false;
          }
        });
      };
    };

    const clickHandlers = [];
    const dropdowns = document.querySelectorAll(".dropdown-details");
    dropdowns.forEach((dropdown) => {
      const summary = dropdown.querySelector("summary");
      if (summary) {
        const handler = handleDropdownClick(dropdown);
        summary.addEventListener("click", handler);
        clickHandlers.push({ summary, handler });
      }
    });

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      clickHandlers.forEach(({ summary, handler }) => {
        summary.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl ">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <p className="text-[#FF5225] text-sm sm:text-base font-bold tracking-wider uppercase mb-6 sm:mb-8">
          PORTFOLIO
        </p>
        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-semibold text-gray-900">
          Recent Product Works
        </p>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:items-start ">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 order-2 lg:order-1">
          {/* App Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-2">
              YourHour
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-700 mb-4 lg:mb-6">
              Empowering Digital Wellbeing
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-justify text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              YourHour is a revolutionary mobile application designed to empower
              individuals to take charge of their digital lives. With an array
              of intuitive features and insights, YourHour offers a
              comprehensive solution to help users achieve a healthier balance
              between screen time and real-life experiences. By tracking and
              analyzing screen time usage, setting personalized reminders, and
              providing a focus mode for uninterrupted productivity.
            </p>
          </div>

          {/* Dropdown Sections */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Screen Time Monitoring */}
            <div className="pb-3 sm:pb-1">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="dashboard" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 rounded-lg transition-colors cursor-pointer list-none dropdown-summary hover:bg-gray-50">
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 dropdown-text">
                      Screen Time Monitoring
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
                  <div className="mt-3 px-2 sm:px-3">
                    <p className="text-sm sm:text-base lg:text-base font-medium text-gray-600 text-justify leading-relaxed">
                      Users can track their daily and weekly screen time usage
                      across various apps and categories, gaining insights into
                      their digital habits and identifying areas for
                      improvement.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Customizable Reminders and Alerts */}
            <div className="pb-3 sm:pb-1">
              <div className="dropdown dropdown-bottom w-full">
                <details
                  data-dropdown="challenges"
                  className="dropdown-details"
                >
                  <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 dropdown-text">
                      Customizable Reminders and Alerts
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
                  <div className="mt-3 px-2 sm:px-3">
                    <p className="text-sm sm:text-base lg:text-base font-medium text-gray-600 text-justify leading-relaxed">
                      Users can set personalized reminders and alerts to help
                      them take regular breaks, reduce excessive screen time,
                      and establish healthier usage patterns.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Focus Mode */}
            <div className="pb-3 sm:pb-1">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="addiction" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 dropdown-text">
                      Focus Mode
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
                  <div className="mt-3 px-2 sm:px-3">
                    <p className="text-sm sm:text-base lg:text-base font-medium text-gray-600 text-justify leading-relaxed">
                      YourHour includes a Focus Mode that allows users to block
                      distractions by temporarily disabling selected apps or
                      notifications, enabling them to concentrate on important
                      tasks or enjoy screen-free time.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Goal Setting and Achievements */}
            <div className="pb-3 sm:pb-1">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="stories" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 dropdown-text">
                      Goal Setting and Achievements
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
                  <div className="mt-3 px-2 sm:px-3">
                    <p className="text-sm sm:text-base lg:text-base font-medium text-gray-600 text-justify leading-relaxed">
                      Users can set goals for reducing screen time or achieving
                      specific usage targets. The app tracks progress and
                      rewards users with achievements upon reaching milestones,
                      providing motivation and a sense of accomplishment.
                    </p>
                  </div>
                </details>
              </div>
            </div>
            <Link
              href="/yourhour-screentime-app"
              className=" ml-2 inline-flex items-center text-lg font-medium text-[#6A53E1] hover:underline group transition-all duration-300"
            >
              VIEW CASE STUDY
              <span className="ml-2 transition-transform group-hover:translate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#BCA6FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Right Content - Device Mockups */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full aspect-[15/16]">
            <Image
              src="/images/smartphone.webp"
              alt="YourHour application shown on mobile devices"
              fill
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
          transition: color 0.5s ease;
        }

        /* Hide default marker */
        details summary::-webkit-details-marker {
          display: none;
        }
        details summary::marker {
          display: none;
        }

        /* Smooth transitions for dropdown */
        .dropdown-details {
          transition: all 0.3s ease;
        }

        /* Ensure dropdowns are closed by default */
        .dropdown-details:not([open]) > div {
          display: none;
        }

        /* Force closed state */
        .dropdown-details {
          background-color: transparent !important;
          padding: 0 !important;
        }

        /* Only apply open styles when actually open */
        .dropdown-details[open] {
          background-color: #f4f0ff !important;
          border-radius: 0.5rem !important;
          padding: 1rem !important;
        }
      `}</style>
    </section>
  );
}
