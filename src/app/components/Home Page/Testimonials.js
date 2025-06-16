"use client";

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
      logo: "/images/earlyfoods.svg",
      logoAlt: "Early Foods Logo",
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-[67.25rem]  mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-wider uppercase mb-7">
            CLIENTS TESTIMONIAL
          </p>
          <h2 className=" text-[2.5rem] font-normal text-[#2B2B2B] mb-7 leading-tight">
            What {""}
            <span className="text-[2.5rem] font-semibold">Our Customers</span>
            {""} Are Saying
          </h2>
          <p className="text-[1rem] font-normal text-[#444444] leading-relaxed max-w-[67.25rem] mx-auto">
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

        {/* Testimonials Flex Container */}
        <div className="flex flex-wrap gap-6 mb-12">
          {/* First Row */}
          <div className="flex flex-col lg:flex-row gap-6">
            {testimonials.slice(0, 2).map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-1 w-[30.375rem] h-[19.87rem] rounded-2xl pl-6 pt-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Testimonial Title */}
                <h3 className="text-[1.375rem] font-semibold text-[#2B2B2B] pr-[3.25rem] mb-4 leading-tight">
                  "{testimonial.title}"
                </h3>

                {/* Testimonial Content */}
                <p className="text-[1rem] font-normal text-gray-600 pr-[2.128rem] leading-relaxed mb-8">
                  {testimonial.content}
                </p>

                {/* Author Section */}
                <div className="flex items-center pb-8 pr-6 gap-4">
                  {/* Company Logo */}
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={testimonial.logoAlt}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Author Info */}
                  <div>
                    <p className="text-[0.875rem] font-normal text-[#000000] mb-1">
                      {testimonial.position}
                    </p>
                    <p className="text-[1.125rem] font-medium text-[#2B2B2B]">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row gap-6 ">
            {testimonials.slice(2, 4).map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-1 w-[30.375rem] h-[19.87rem]  rounded-[1rem] pl-6 pt-8  shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Testimonial Title */}
                <h3 className="text-[1.25rem] font-semibold text-[#2B2B2B] pr-[3.25rem] mb-4 leading-tight">
                  "{testimonial.title}"
                </h3>

                {/* Testimonial Content */}
                <p className="text-[1rem] font-normal text-gray-600 pr-[2.128rem] leading-relaxed mb-8">
                  {testimonial.content}
                </p>

                {/* Author Section */}
                <div className="flex items-center pb-8 pr-6 gap-4">
                  {/* Company Logo */}
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={testimonial.logoAlt}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Author Info */}
                  <div>
                    <p className="text-[0.875rem] font-normal text-[#000000] mb-1">
                      {testimonial.position}
                    </p>
                    <p className="text-[1.125rem] font-medium text-[#2B2B2B]">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center bg-[#2B2B2B] text-white px-8 py-4 rounded-full text-[1rem] font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            View All Testimonials
            <svg
              className="ml-3 w-5 h-5"
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
    </section>
  );
}
