"use client";

import Image from "next/image";

export default function TestimonialsMore() {
  const testimonials = [
    {
      id: 1,
      title: "Trusted Java Development Partner of Decade",
      content:
        "For the past 10 years, Mindefy Technologies has been our trusted Java development partner, providing us dedicated offshore team from India. Their expertise, transparency, and commitment to delivering high-quality solutions efficiently. The outstanding results has made them our go-to partner for innovation and agility. Highly recommended.",
      clientName: "Mr. Bunrak Saraggananda",
      clientPosition: "Chairman & CEO at Magic Software, Thailand",
      companyLogo: "/images/mst-icon.svg",
      companyName: "MST",
    },
    {
      id: 2,
      title: "JEGO Platform Transformation & Innovation",
      content:
        "Over the past three years, the transformation of the JEGO platform has been incredible, from revamping mobile apps and the portal web to migrating to latest cloud architecture, the team at Mindefy Technologies has been outstanding. Their ability to deliver scalable solutions while maintaining quality has significantly enhanced our platform's efficiency and user experience. A truly reliable and innovative tech partner!",
      clientName: "Mr. Gaurav Gupta",
      clientPosition: "Poem Media TechInvest LLC, Dubai",
      companyLogo: "/images/jego-icon.svg",
      companyName: "JEGO",
    },
    {
      id: 3,
      title: "Exceptional Website Development and Beauty Salon",
      content:
        "Mindefy Technologies has been an outstanding partner in developing the website and mobile app for Haircut and Beauty Salon. Their team delivered innovative, user-friendly solutions that has enhanced our customer experience. Their professionalism, technical expertise, and attention to detail have been exceptional and effective. I highly recommend them for anyone looking for top-notch digital solutions!",
      clientName: "Mr. Sameer Khan",
      clientPosition: "Founder, Beloved Beauty Salon, Dubai",
      companyLogo: "/images/beloved.svg",
      companyName: "Beauty Salon",
    },
    {
      id: 4,
      title: "SoliStack Platform Development & Route Optimization Excellence",
      content:
        "Building the SoliStack platform required a team with deep technical expertise and a strong understanding of route optimization. Mindefy Technologies delivered exactly that, crafting a robust, scalable solution that perfectly meets our needs. Their dedication, professionalism, and ability to translate complex requirements into an intuitive platform made all the difference. Highly recommended!",
      clientName: "Mr. Souad OMAR",
      clientPosition: "Product Owner at SoliStack France",
      companyLogo: "/images/soliroute.svg",
      companyName: "SoliStack",
    },
    {
      id: 5,
      title: "Precision-Driven Website Design & Execution",
      content:
        "Mindefy has been extremely intricate in taking both our website design and executing it well. They have been very responsive in all our requests. Done all the steep documentation, quality checks and delivered the final impeccably. We would definitely recommend for discussion-worthy. Love their ethics and principles. It's a great team overall!",
      clientName: "Mrs. Shalini Santhosh",
      clientPosition: "Founder, Haircut Beauty Salon, Dubai",
      companyLogo: "/images/earlyfoods.webp",
      companyName: "Website Design Co.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="py-8 px-4 md:py-12 md:px-6 xl:py-16 xl:px-[1rem]">
        <div className="max-w-[81.875rem] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12 xl:mb-[5.75rem]">
            <p className="text-[#FF5225] text-sm md:text-base xl:text-[1rem] font-bold mb-2 xl:mb-[0.5rem] tracking-wider">
              TESTIMONIALS
            </p>
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-gray-900 mb-4 md:mb-6 xl:mb-[2rem] px-4">
              WHAT OUR CLIENTS ARE SAYING ABOUT US
            </h1>
          </div>

          {/* Testimonials Grid */}
          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-4 lg:gap-6 xl:flex xl:flex-wrap xl:gap-[1rem] xl:justify-start">
            {testimonials.map((testimonial) => {
              // Set unique height/width based on ID for xl screens (1440px+)
              let cardSpacing = "";
              let responsiveClasses = "w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]";

              switch (testimonial.id) {
                case 1:
                  cardSpacing = "xl:w-[26.25rem] xl:h-[29.75rem]";
                  break;
                case 2:
                  cardSpacing = "xl:w-[26.25rem] xl:h-[33rem]";
                  break;
                case 3:
                  cardSpacing = "xl:w-[26.25rem] xl:h-[34.75rem]";
                  break;
                case 4:
                  // Shift this card upward by reducing top margin
                  cardSpacing = "xl:w-[26.25rem] xl:h-[31.125rem] xl:mt-[-5.25rem]";
                  break;
                case 5:
                  // Shift this card upward too
                  cardSpacing = "xl:w-[26.25rem] xl:h-[29.25rem] xl:mt-[-2rem] xl:mb-[1rem]";
                  break;
                default:
                  cardSpacing = "xl:w-[25rem] xl:h-[34.75rem] xl:p-[1.5rem] xl:m-[1rem]";
              }

              return (
                <div
                  key={testimonial.id}
                  className={`${responsiveClasses} ${cardSpacing} border border-gray-200 rounded-lg xl:rounded-[1.25rem] p-4 md:p-6 xl:p-[1.5rem] shadow-sm hover:shadow-md transition-shadow`}
                >
                  {/* Testimonial Title */}
                  <h3 className="text-lg md:text-xl xl:text-[1.375rem] font-semibold text-[#02000D] mb-4 md:mb-6 xl:mb-[1.5rem] leading-tight">
                    "{testimonial.title}"
                  </h3>

                  {/* Testimonial Content */}
                  <p className="text-sm md:text-base xl:text-[1rem] font-normal text-[#000000] mb-4 md:mb-6 xl:mb-[1.5rem] leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Company Logo and Client Info */}
                  <div className="flex flex-row items-center xl:justify-items-center">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 md:w-14 md:h-14 xl:w-[3.75rem] xl:h-[3.75rem]">
                        <Image
                          src={testimonial.companyLogo || "mst-icon.svg"}
                          alt={`${testimonial.companyName} mst`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="p-3 md:p-4 xl:p-[1rem]">
                      <p className="text-sm md:text-base xl:text-[0.875rem] font-medium text-gray-900">
                        {testimonial.clientName}
                      </p>
                      {testimonial.clientPosition && (
                        <p className="text-xs md:text-sm xl:text-[0.75rem] text-gray-500">
                          {testimonial.clientPosition}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
