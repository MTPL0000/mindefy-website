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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl ">
      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:items-start ">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 order-2 lg:order-1">
          {/* App Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-2">
              GreenBill
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-700 mb-4 lg:mb-6">
              A Sustainable Solution for Digital Bill Management
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-justify text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
            <div className="pb-1">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="dashboard" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg  transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 dropdown-text">
                      Simplified bill generation
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
                      Create and manage bills digitally, eliminating the need
                      for paper-based invoices.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Smart & Curated Challenges */}
            <div className="pb-1">
              <div className="dropdown dropdown-bottom w-full">
                <details
                  data-dropdown="challenges"
                  className="dropdown-details"
                >
                  <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 dropdown-text">
                      Sales tracking
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
                      Keep a close eye on your store's sales performance with
                      real-time analytics and reporting.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Addiction Level */}
            <div className="pb-1">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="addiction" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 dropdown-text">
                      Transaction history
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
                      Access a comprehensive record of past transactions for
                      accurate record-keeping and reconciliation.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Read YourStories */}
            <div className="pb-1">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="stories" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 dropdown-text">
                      Instant digital billing
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
                      Provide customers with immediate access to digital bills,
                      enhancing convenience and efficiency.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Usage Analytics */}
            <div className="pb-1">
              <div className="dropdown dropdown-bottom w-full">
                <details data-dropdown="analytics" className="dropdown-details">
                  <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-700 dropdown-text">
                      Customization options
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
                    <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-600  text-justify leading-relaxed pl-1">
                      Personalize bills with your store's logo and branding for
                      a professional touch. Seamless integration: Integrate the
                      Merchant app with your existing systems and processes for
                      a smooth transition to digital billing.
                    </p>
                  </div>
                </details>
              </div>
            </div>
            <a
              href="greenbill-paperless-billing-software"
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

        {/* Right Content - Device Mockups */}
        <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full aspect-[1.043/1]">
            <Image
              src="/images/greenbill.webp"
              alt="GreenBill application shown on mobile devices"
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
