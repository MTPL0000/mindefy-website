"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function ProductShowcase({
  imagePosition = "right",
  data = {},
}) {
  // Destructure data object with defaults
  const {
    imageSrc,
    imageAlt,
    title,
    subtitle,
    description,
    dropdowns = [],
    caseStudyLink,
    caseStudyText = "VIEW CASE STUDY",
    showHeader = false,
    headerLabel = "PORTFOLIO",
    headerTitle = "Recent Product Works",
    aspectRatio = "1/1",
  } = data;

  useEffect(() => {
    // Handle DaisyUI dropdown behavior - close others when one opens
    const dropdownElements = document.querySelectorAll(".dropdown");

    dropdownElements.forEach((dropdown) => {
      const summary = dropdown.querySelector("summary");
      if (summary) {
        summary.addEventListener("click", () => {
          // Close all other dropdowns
          dropdownElements.forEach((otherDropdown) => {
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

    // Cleanup
    return () => {
      dropdownElements.forEach((dropdown) => {
        const summary = dropdown.querySelector("summary");
        if (summary) {
          summary.removeEventListener("click", () => {});
        }
      });
    };
  }, []);

  const isImageRight = imagePosition === "right";

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl">
      {/* Header Section */}
      {showHeader && (
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[#FF5225] text-sm sm:text-base font-bold tracking-wider uppercase mb-6 sm:mb-8">
            {headerLabel}
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-semibold text-gray-900">
            {headerTitle}
          </p>
        </div>
      )}

      {/* Main Content - Responsive Layout */}
      <div
        className={`flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:items-center ${
          isImageRight ? "" : ""
        }`}
      >
        {/* Left Content */}
        <div
          className={`w-full lg:w-1/2 space-y-6 lg:space-y-8 ${
            isImageRight ? "order-2 lg:order-1" : "order-2 lg:order-2"
          }`}
        >
          {/* App Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-[#3D3D3D] mb-2">
              {title}
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal font-poppins text-[#353535] mb-4 lg:mb-6">
              {subtitle}
            </h3>
            <p className="text-sm sm:text-base text-justify font-normal font-poppins text-[#444444] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
          </div>

          {/* Dropdown Sections */}
          <div className="space-y-4">
            {dropdowns.map((dropdown, index) => (
              <div key={index} className="pb-3 sm:pb-1">
                <div className="dropdown dropdown-bottom w-full">
                  <details
                    data-dropdown={dropdown.id}
                    className="dropdown-details"
                  >
                    <summary className="w-full flex items-center justify-between text-left px-2 sm:px-3 py-2 sm:py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer list-none dropdown-summary">
                      <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#393939] dropdown-text">
                        {dropdown.title}
                      </span>
                      <svg
                        className="w-5 h-5 lg:w-6 lg:h-6 text-[#393939] transition-transform duration-300 ease-in-out dropdown-arrow shrink-0"
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
                      <p className="text-sm sm:text-base font-normal text-[#444444] text-justify leading-relaxed pl-3">
                        {dropdown.content}
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            ))}

            {/* Case Study Link */}
            {caseStudyLink && (
              <Link
                href={caseStudyLink}
                className="ml-2 inline-flex items-center text-base md:text-lg font-medium text-[#6A53E1] hover:underline group transition-all duration-300"
              >
                {caseStudyText}
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
            )}
          </div>
        </div>

        {/* Right Content - Device Mockups */}
        <div
          className={`w-full lg:w-1/2 flex justify-center ${
            isImageRight
              ? "lg:justify-end order-1 lg:order-2"
              : "lg:justify-start order-1 lg:order-1"
          }`}
        >
          <div
            className={`relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full ${
              aspectRatio === "5/4"
                ? "aspect-5/4"
                : aspectRatio === "1/0.9"
                ? "aspect-[1/0.9]"
                : aspectRatio === "1/1.2"
                ? "aspect-[1/1.2]"
                : "aspect-[1/0.9]"
            }`}
          >
            <Image src={imageSrc} alt={imageAlt} fill />
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
          color: #6a53e1 !important;
          transition: color 0.3s ease;
        }

        /* Add background, rounded corners, and padding when open */
        details[open] {
          background-color: #f5f3ff;
          border-radius: 0.5rem;
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
