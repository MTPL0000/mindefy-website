"use client";

import Image from "next/image";

export function WhyChooseSection({ data }) {
  // Function to scroll to contact section
  const scrollToContact = () => {
    // Function to calculate and scroll to contact section with retry logic
    const performScroll = (attempt = 1) => {
      const contactSection = document.getElementById("contact");

      if (!contactSection) {
        console.warn("Contact section not found on current page");
        return;
      }

      // Wait for any ongoing layout changes to complete
      requestAnimationFrame(() => {
        // Force layout recalculation
        void contactSection.offsetHeight;

        // Get current positions
        const rect = contactSection.getBoundingClientRect();
        const scrollY =
          window.pageYOffset || document.documentElement.scrollTop;

        // Calculate absolute position from top of document
        const absoluteTop = rect.top + scrollY;

        // Account for navbar (120px) and add small buffer
        const targetPosition = Math.max(0, absoluteTop - 120);

        // Perform smooth scroll
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Verify scroll worked correctly (optional retry for complex pages)
        if (attempt === 1) {
          setTimeout(() => {
            const newRect = contactSection.getBoundingClientRect();
            // If element is not near the top of viewport, try again once
            if (newRect.top > 200) {
              performScroll(2);
            }
          }, 1000);
        }
      });
    };

    // Initial delay to ensure page is stable
    setTimeout(() => performScroll(), 200);
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-[8.83rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image Section */}
          <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] flex justify-center">
            <Image
              src={data.image}
              alt="Why Enterprises Choose Us"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Text Section */}
          <div>
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#434AE4] to-[#5441B7] to-[#E86343] font-poppins bg-clip-text text-transparent">
                {data.title}
              </span>
            </h2>

            {data.subTitle && (
              <p className="text-base md:text-lg text-[#444444] font-semibold leading-relaxed font-poppins">
                {data.subTitle}
              </p>
            )}

            {/* Bullet Points */}
            <ul className="space-y-2">
              {data.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full"></span>
                  <p className="text-base md:text-lg text-[#444444] font-medium leading-relaxed font-poppins">
                    {point.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            {data.buttonText && (
              <div className="pt-2 flex items-center justify-center mt-8 sm:mt-8">
                <button
                  onClick={scrollToContact}
                  className="inline-block cursor-pointer bg-[#332771] text-white font-poppins font-medium text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {data.buttonText}
                </button>
              </div>
            )}
          </div>
        </div>
        {data.ctaText && (
          <div className="text-center mt-8">
            <span className="inline-block border border-[#332771] text-[#332771] font-poppins px-7 py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-lg transition-all duration-300 hover:scale-105">
              {data.ctaText}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
