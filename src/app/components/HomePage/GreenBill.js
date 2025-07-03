"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function GreenBill() {
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
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content - Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* Left Content */}
          <div className="flex-1 space-y-6 mb-8 lg:mb-10 lg:space-y-8">
            {/* App Title */}
            <div className="mb-8 lg:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-2">
                Greenbill
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-700 mb-4 lg:mb-[1.62rem]">
                A Sustainable Solution for Digital Bill Management
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                An innovative application developed by Mindefy, designed to
                revolutionize digital bill generation and management while
                promoting environmental sustainability. With a strong focus on
                environmental sustainability and efficiency, GreenBill is
                revolutionizing the way businesses generate and manage bills. Say
                goodbye to paper waste and embrace a paperless future with our
                comprehensive suite of apps: Merchant, Admin, and Customer.
              </p>
            </div>

            {/* Dropdown Sections */}
            <div className="space-y-4 lg:space-y-6">
              {/* Curated Dashboard */}
              <div className="pb-4">
                <div className="dropdown dropdown-bottom w-full">
                  <details data-dropdown="dashboard" className="dropdown-details">
                    <summary className="w-full flex items-center justify-between text-left px-1 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-gray-700 dropdown-text">
                        Screen Time Monitoring
                      </span>
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow flex-shrink-0"
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
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed pl-1">
                        Users can track their daily and weekly screen time usage
                        across various apps and categories, gaining insights into
                        their digital habits and identifying areas for
                        improvement.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Smart & Curated Challenges */}
              <div className="pb-4">
                <div className="dropdown dropdown-bottom w-full">
                  <details
                    data-dropdown="challenges"
                    className="dropdown-details"
                  >
                    <summary className="w-full flex items-center justify-between text-left px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-gray-700 dropdown-text">
                        Customizable Reminders and Alerts
                      </span>
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow flex-shrink-0"
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
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed pl-1">
                        Users can set personalized reminders and alerts to help
                        them take regular breaks, reduce excessive screen time,
                        and establish healthier usage patterns.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Addiction Level */}
              <div className="pb-4">
                <div className="dropdown dropdown-bottom w-full">
                  <details data-dropdown="addiction" className="dropdown-details">
                    <summary className="w-full flex items-center justify-between text-left px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-gray-700 dropdown-text">
                        Focus Mode
                      </span>
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow flex-shrink-0"
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
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed pl-1">
                        YourHour includes a Focus Mode that allows users to block
                        distractions by temporarily disabling selected apps or
                        notifications, enabling them to concentrate on important
                        tasks or enjoy screen-free time.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Read YourStories */}
              <div className="pb-4">
                <div className="dropdown dropdown-bottom w-full">
                  <details data-dropdown="stories" className="dropdown-details">
                    <summary className="w-full flex items-center justify-between text-left px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-gray-700 dropdown-text">
                        Goal Setting and Achievements
                      </span>
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow flex-shrink-0"
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
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed pl-1">
                        Users can set goals for reducing screen time or achieving
                        specific usage targets. The app tracks progress and
                        rewards users with achievements upon reaching milestones,
                        providing motivation and a sense of accomplishment.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Usage Analytics */}
              <div className="pb-4">
                <div className="dropdown dropdown-bottom w-full">
                  <details data-dropdown="analytics" className="dropdown-details">
                    <summary className="w-full flex items-center justify-between text-left px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-gray-700 dropdown-text">
                        Usage Analytics
                      </span>
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow flex-shrink-0"
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
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed pl-1">
                        Comprehensive analytics provide detailed insights into
                        usage patterns, helping users understand their digital
                        behavior and make informed decisions about their screen
                        time management.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="flex-1 relative">
            <div className="relative max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto aspect-[1.043/1]">
              <Image
                src="/images/greenbill.webp"
                alt="GreenBill application interface"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
