"use client";

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
    <section className="max-w-[72.37rem] mx-auto py-20">
      {/* Main Content - Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-14 items-center">
        {/* Left Content */}
        <div className="flex-1 space-y-6 mb-10 lg:space-y-8">
          {/* App Title */}
          <div className="mb-10">
            <h2 className="text-4xl sm:text-3xl font-bold text-[#2B2B2B] mb-2">
              Greenbill
            </h2>
            <h3 className="text-4xl sm:text-xl lg:text-4xl text-gray-700 mb-4 lg:mb-[1.62rem]">
              A Sustainable Solution for Digital Bill Management
            </h3>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
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
          <div className="space-y-5  lg:space-y-6">
            {/* Curated Dashboard */}
            <div className="pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="dashboard" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left px-1  rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-700 dropdown-text">
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
                  <div className="mt-3">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-1 ">
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
            <div className=" pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details
                  data-dropdown="challenges"
                  className="dropdown-details"
                >
                  <summary className="w-full flex items-center justify-between text-left  px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-700 dropdown-text">
                      Customizable Reminders and Alerts
                    </span>
                    <svg
                      className="w-5 h- lg:w-6 lg:h-6 text-gray-400 transition-transform duration-300 ease-in-out dropdown-arrow"
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
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-1 ">
                      Users can set personalized reminders and alerts to help
                      them take regular breaks, reduce excessive screen time,
                      and establish healthier usage patterns.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Addiction Level */}
            <div className=" pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="addiction" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-700 dropdown-text">
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
                  <div className="mt-3">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-1 ">
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
            <div className=" pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="stories" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left  px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-700 dropdown-text">
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
                  <div className="mt-3">
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-1  ">
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
            <div className=" pb-4">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="analytics" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left  px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-700 dropdown-text">
                      Usage Analytics
                    </span>
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400   transition-transform duration-300 ease-in-out dropdown-arrow"
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
                    <p className="text-sm lg:text-base text-gray-600 \ leading-relaxed pl-1 ">
                      Comprehensive analytics showing detailed patterns of your
                      app usage, screen time trends, and productivity insights.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="">
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
          <div className="relative w-[35.93rem] h-[47.5rem] lg:max-w-xl xl:max-w-2xl mx-auto">
            <img
              src="/images/greenbill.webp"
              alt="YourHour mobile app mockups showig dashboard and features"
              className=""
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-16">
        <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
          View All Projects
        </button>
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

        /* Add background, rounded corners, and padding when open */
        details[open] {
          background-color: #f4f0ff;
          border-radius: 0.5rem;
          padding: 1rem;
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
      `}</style>
    </section>
  );
}
