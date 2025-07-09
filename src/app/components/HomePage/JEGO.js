"use client";

import Image from "next/image";
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
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Main Content - Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-14">
          {/* Left Content - Device Mockups */}
          <div className="flex-1 relative">
            <div className="relative max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto aspect-[5/4]">
              <Image
                src="/images/jegolaptop.webp"
                alt="JEGO application shown on laptop and mobile devices"
                fill
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
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-justify leading-relaxed">
                The collaborative application development journey between
                Mindefy and JEGO signifies a shared commitment to inspiring and
                empowering individuals. Together, we have harnessed cutting-edge
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
              <div className="pb-1">
                <div className="dropdown dropdown-bottom w-full">
                  <details
                    data-dropdown="transformation"
                    className="dropdown-details"
                  >
                    <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 dropdown-text">
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
                      <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-600 text-justify leading-relaxed pl-1">
                        JEGO has had a profound impact on individuals' personal
                        growth and transformation. Users have reported improved
                        self-awareness, enhanced well-being, increased
                        confidence, and a greater sense of purpose in their
                        lives.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Global Accessibility */}
              <div className="pb-1">
                <div className="dropdown dropdown-bottom w-full">
                  <details
                    data-dropdown="accessibility"
                    className="dropdown-details"
                  >
                    <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 dropdown-text">
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
                      <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-600 text-justify leading-relaxed pl-1">
                        JEGO has made high-quality personal development
                        education accessible to individuals around the globe.
                        The platform's mobile application and online nature have
                        democratized learning, breaking down geographical
                        barriers and offering flexible access to knowledge.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Community Building */}
              <div className="pb-1">
                <div className="dropdown dropdown-bottom w-full">
                  <details
                    data-dropdown="community"
                    className="dropdown-details"
                  >
                    <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 dropdown-text">
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
                      <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-600 text-justify leading-relaxed pl-1">
                        The community aspect of JEGO has created a supportive
                        ecosystem where learners can connect, share experiences,
                        and form meaningful relationships. Users have reported a
                        sense of belonging and the opportunity to network with
                        like-minded individuals.
                      </p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Positive Social Impact */}
              <div className="pb-1">
                <div className="dropdown dropdown-bottom w-full">
                  <details data-dropdown="impact" className="dropdown-details">
                    <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 dropdown-text">
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
                      <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-600 text-justify leading-relaxed pl-1">
                        JEGO's emphasis on personal growth and well-being has
                        had a ripple effect on society. Users have applied their
                        learnings to improve relationships, contribute to their
                        communities, and create positive change in various
                        spheres of life.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
              <a
                href="#"
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
              </a>
            </div>
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
