"use client";

import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
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

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[#FF5225] text-sm sm:text-base font-bold tracking-wider uppercase mb-4 sm:mb-6 lg:mb-7">
            CLIENTS TESTIMONIAL
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-[#2B2B2B] mb-4 sm:mb-6 lg:mb-7 leading-tight">
            What {""}
            <span className="font-semibold">Our Customers</span>
            {""} Are Saying
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-normal text-[#444444] leading-relaxed max-w-4xl mx-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 h-auto min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col"
            >
              {/* Testimonial Title */}
              <h3 className="text-lg sm:text-xl lg:text-[1.375rem] font-semibold text-[#2B2B2B] mb-3 sm:mb-4 lg:mb-6 leading-tight flex-shrink-0">
                {testimonial.title}
              </h3>

              {/* Testimonial Content */}
              <p className="text-sm sm:text-base lg:text-lg font-normal text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10 flex-grow">
                {testimonial.content}
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                {/* Company Logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={testimonial.logoAlt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Author Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-base lg:text-[1.125rem] font-medium text-[#000000] leading-tight">
                    {testimonial.author}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-[0.875rem] font-normal text-[#2B2B2B] mb-1 leading-tight">
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
            target="_self"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#2B2B2B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-medium hover:bg-gray-800 transition-colors duration-300"
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
