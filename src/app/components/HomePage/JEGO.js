"use client";

import { useEffect } from "react";

export default function JEGO() {
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

    // Initially open the first dropdown (Personal Transformation)
    const firstDropdown = document.querySelector(
      '[data-dropdown="transformation"]'
    );
    if (firstDropdown) {
      firstDropdown.setAttribute("open", "");
    }
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content - Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-14">
          {/* Left Content - Device Mockups */}
          <div className="flex-1 relative">
            <div className="relative max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
              <img
                src="/images/jegolaptop.webp"
                alt="JEGO application shown on laptop and mobile devices"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            {/* App Title */}
            <div className="mb-8 lg:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-2">
                JEGO - Redefining
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-700 mb-4 lg:mb-[1.62rem]">
                Growth And Transformation
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                The collaborative application development journey between Mindefy
                and JEGO signifies a shared commitment to inspiring and empowering
                individuals. Together, we have harnessed cutting-edge
                technologies, user-centric design, and iterative development
                processes to create remarkable applications that revolutionize
                personal growth journeys. By leveraging our expertise in app
                development and digital solutions, we have helped JEGO create a
                unique and impactful platform.
              </p>
            </div>

            {/* Dropdown Sections */}
            <div className="space-y-4 lg:space-y-6">
              {/* Personal Transformation */}
              <div className="pb-4">
                <div className="dropdown dropdown-bottom w-full">
                  <details
                    data-dropdown="transformation"
                    className="dropdown-details"
                  >
                    <summary className="w-full flex items-center justify-between text-left px-1 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-gray-700 dropdown-text">
                        Personal Transformation
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
                        JEGO has had a profound impact on individuals' personal
                        growth and transformation. Users have reported improved
                        self-awareness and significant positive changes in their
                        mindset and behaviors.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Global Accessibility */}
              <div className="pb-4">
                <div className="dropdown dropdown-bottom w-full">
                  <details
                    data-dropdown="accessibility"
                    className="dropdown-details"
                  >
                    <summary className="w-full flex items-center justify-between text-left px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-gray-700 dropdown-text">
                        Global Accessibility
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
                        JEGO's platform is designed to be accessible worldwide,
                        breaking down geographical barriers to personal
                        development. The application supports multiple languages
                        and offers culturally relevant content for diverse
                        audiences.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Community Building */}
              <div className="pb-4">
                <div className="dropdown dropdown-bottom w-full">
                  <details data-dropdown="community" className="dropdown-details">
                    <summary className="w-full flex items-center justify-between text-left px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-gray-700 dropdown-text">
                        Community Building
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
                        JEGO fosters a supportive community where users can
                        connect, share experiences, and learn from each other. The
                        platform includes discussion forums, group challenges, and
                        collaborative projects to enhance the learning experience.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Positive Social Impact */}
              <div className="pb-4">
                <div className="dropdown dropdown-bottom w-full">
                  <details data-dropdown="impact" className="dropdown-details">
                    <summary className="w-full flex items-center justify-between text-left px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-extrabold text-gray-700 dropdown-text">
                        Positive Social Impact
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
                        Through its focus on personal growth and transformation,
                        JEGO contributes to positive social change by empowering
                        individuals to become better versions of themselves and
                        positively impact their communities.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
