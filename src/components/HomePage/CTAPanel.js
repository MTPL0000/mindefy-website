"use client";

import { CheckCircle } from "lucide-react";

export default function CTAPanel() {
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
    <section className="px-5 lg:px-10 py-16">
      <div
        className="max-w-296 mx-auto rounded-4xl text-center px-6 py-16 md:py-18"
        style={{
          background:
            "linear-gradient(180deg, #434AE4 0%, #5441B7 30.77%, #E86343 100%)",
        }}
      >
        {/* TITLE */}
        <h2 className="text-white font-poppins text-2xl sm:text-3xl md:text-5xl leading-tight font-normal">
          Turn Your <span className="font-bold">AI Idea</span> into a
        </h2>

        <h2 className="text-white font-poppins text-2xl sm:text-3xl md:text-5xl leading-tight font-bold mt-3">
          Scalable Product
        </h2>

        {/* SUBTITLE */}
        <p className="text-white/90 max-w-3xl mx-auto mt-6 text-base sm:text-lg leading-relaxed font-poppins">
          Collaborate with a team that understands both AI innovation and
          product–market fit — faster delivery, smarter outcomes.
        </p>

        {/* FEATURES */}
        <div className="mx-auto max-w-2xl flex flex-wrap justify-center gap-x-10 gap-y-4 mt-12">
          {[
            "AI-Powered Product Innovation",
            "Custom Software Engineering",
            "Dedicated AI & Software Developers",
            "MVP to Enterprise Growth",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white font-poppins text-sm sm:text-base"
            >
              <CheckCircle className="w-5 h-5 text-white" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <button
          className="mt-12 bg-white text-[#333333] font-poppins px-8 py-3 rounded-full cursor-pointer text-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          onClick={scrollToContact}
        >
          Book A Call
        </button>
      </div>
    </section>
  );
}
