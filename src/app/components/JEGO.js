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
    <section className="max-w-[72.37rem] mx-auto ">
      {/* Main Content - Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-14 ">
        {/* Left Content - Device Mockups */}
        <div className="flex-1 relative">
          <div className="relative max-w-lg lg:max-w-xl xl:max-w-2xl  mx-auto">
            <img
              src="/images/jegolaptop.webp"
              alt="JEGO application shown on laptop and mobile devices"
              className="w-full"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          {/* App Title */}
          <div className="mb-10">
            <h2 className="text-4xl sm:text-3xl font-bold text-[#2B2B2B] mb-2">
              JEGO - Redefining
            </h2>
            <h3 className="text-4xl sm:text-xl lg:text-4xl text-gray-700 mb-4 lg:mb-[1.62rem]">
              Growth And Transformation
            </h3>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
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
                  <summary className="w-full flex items-center justify-between text-left  px-1 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-700 dropdown-text">
                      Personal Transformation
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
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-1">
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
                  <summary className="w-full flex items-center justify-between text-left  px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-lg sm:text-lg lg:text-xl font-extrabold text-gray-700 dropdown-text">
                      Global Accessibility
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
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-1">
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
                  <summary className="w-full flex items-center justify-between text-left  px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-700 dropdown-text">
                      Community Building
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
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-1">
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
                  <summary className="w-full flex items-center justify-between text-left  px-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-700 dropdown-text">
                      Positive Social Impact
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
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed pl-1">
                      Beyond individual growth, JEGO is committed to creating
                      positive social change. The platform encourages users to
                      apply their personal development in ways that benefit
                      their communities and address social challenges.
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
