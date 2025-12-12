"use client";

import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    title: "Trusted Java Development Partner for a Decade",
    content:
      "For the past 10 years, Mindefy Technologies has been our trusted Java development partner, providing a dedicated offshore team from India. Their...",
    author: "Mr. Bunrak Saraggananda",
    position: "Chairman & CEO at Magic Software, Thailand",
    logo: "/images/mst-icon.svg",
    logoAlt: "MST Logo",
  },
  {
    id: 2,
    title: "JEGO Platform Transformation & Innovation",
    content:
      "Over the past three years, the transformation of the JEGO platform has been incredible. From revamping mobile apps and the admin web to migrating...",
    author: "Mr. Gaurav Gupta",
    position: "Poem Media Techinvest LLC, Dubai",
    logo: "/images/jego-icon.svg",
    logoAlt: "JEGO Logo",
  },
  {
    id: 3,
    title: "Exceptional Website Development for Beloved Beauty Salon",
    content:
      "Mindefy Technologies has been an outstanding partner in developing the website and mobile app for Beloved Beauty Salon. Their team understood...",
    author: "Mr. Sameer Khan",
    position: "Founder, Beloved Beauty Salon, Dubai",
    logo: "/images/beloved.svg",
    logoAlt: "Beloved Beauty Salon Logo",
  },
  {
    id: 4,
    title: "Precision-Driven Website Design & Execution",
    content:
      "Mindefy has been extremely intricate in doing both our website design and executing it well. They are a process oriented company, and have all the...",
    author: "Mrs. Shalini Santhosh",
    position: "Founder & Director at Early Foods, Dubai",
    logo: "/images/earlyfoods.webp",
    logoAlt: "Early Foods Logo",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 lg:px-10 py-8 lg:py-16 bg-[#F6F6F6]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm sm:text-base font-bold text-[#FF5225] font-poppins tracking-widest mb-5 md:mb-7 uppercase">
            CLIENTS TESTIMONIAL
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-poppins font-normal leading-tight">
            What {""}
            <span className="font-semibold">Our Customers</span>
            {""} Are Saying
          </h2>
          <p className="text-left md:text-center text-sm md:text-base mt-5 md:mt-7 font-poppins mx-auto text-[#444444] leading-relaxed">
            Partnering with Mindefy has been a game-changer for their business.
            Their team of experts has helped us modernize our IT infrastructure,
            streamline our processes, and enhance overall efficiency. Mindefy's
            proactive approach, attention to detail, and deep understanding of
            our business have made them an invaluable asset to our organization.
            Mindefy's team takes time to truly understand the business
            requirements and provides innovative solutions that have
            significantly improved operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-5 md:mb-7">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl py-8 px-6 border border-[#EFF0F6] shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 min-h-80 max-w-2xl flex flex-col"
            >
              {/* Testimonial Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#02000D] font-poppins mb-6 leading-tight shrink-0">
                {testimonial.title}
              </h3>

              {/* Testimonial Content */}
              <p className="text-sm sm:text-base font-normal text-[#000000] font-poppins leading-relaxed mb-6 grow">
                {testimonial.content}
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 shrink-0">
                {/* Company Logo */}
                <div className="relative w-15 h-15 rounded-full flex items-center justify-center shrink-0">
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={testimonial.logoAlt}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Author Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-base sm:text-lg font-medium text-[#000000] leading-tight">
                    {testimonial.author}
                  </p>
                  <p className="text-sm font-normal text-[#000000] mb-1 leading-tight">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/customer-testimonials-reviews"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#353535] text-[#F4F4F4] px-5 py-4 rounded-full text-base md:text-lg font-medium hover:scale-105 transition-all duration-300"
          >
            View All Testimonials
            <svg
              className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5"
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
          </Link>
        </div>
      </div>
    </section>
  );
}
