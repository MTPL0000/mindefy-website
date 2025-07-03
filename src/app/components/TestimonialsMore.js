"use client";

import Image from "next/image";
import Footer from "./HomePage/Footer";
import Navbar from "./HomePage/Navbar";

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
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="py-16 px-[1rem]">
        <div className="max-w-[81.875rem] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-[5.75rem]">
            <p className="text-[#FF5225] text-[1rem] font-bold mb-[0.5rem] tracking-wider">
              TESTIMONIALS
            </p>
            <h1 className="text-4xl font-semibold text-gray-900 mb-[2rem]">
              WHAT OUR CLIENTS ARE SAYING ABOUT US
            </h1>
          </div>

          {/* Testimonials Grid */}
          <div className="flex flex-wrap gap-[1rem] justify-start">
            {testimonials.map((testimonial) => {
              // Set unique height/width based on ID
              let cardSpacing = "";

              switch (testimonial.id) {
                case 1:
                  cardSpacing = "w-[26.25rem] h-[29.75rem] ";
                  break;
                case 2:
                  cardSpacing = "w-[26.25rem] h-[33rem] ";
                  break;
                case 3:
                  cardSpacing = "w-[26.25rem] h-[34.75rem] ";
                  break;
                case 4:
                  // Shift this card upward by reducing top margin
                  cardSpacing = "w-[26.25rem] h-[31.125rem]  mt-[-5.25rem]  ";
                  break;
                case 5:
                  // Shift this card upward too
                  cardSpacing =
                    "w-[26.25rem] h-[29.25rem]  mt-[-2rem]  mb-[1rem] ";
                  break;
                default:
                  cardSpacing = "w-[25rem] h-[34.75rem] p-[1.5rem] m-[1rem]";
              }

              return (
                <div
                  key={testimonial.id}
                  className={`border border-gray-200 rounded-[1.25rem] p-[1.5rem] shadow-sm hover:shadow-md transition-shadow ${cardSpacing}`}
                >
                  {/* Testimonial Title */}
                  <h3 className="text-[1.375rem] font-semibold text-[#02000D] mb-[1.5rem] leading-tight">
                    "{testimonial.title}"
                  </h3>

                  {/* Testimonial Content */}
                  <p className="text-[1rem] font-normal text-[#000000] mb-[1.5rem] leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Company Logo and Client Info */}
                  <div className="flex flex-row justify-items-center">
                    <div className="flex items-center">
                      <div className="relative w-[3.75rem] h-[3.75rem]">
                        <Image
                          src={testimonial.companyLogo || "mst-icon.svg"}
                          alt={`${testimonial.companyName} mst`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="p-[1rem]">
                      <p className="text-[0.875rem] font-medium text-gray-900">
                        {testimonial.clientName}
                      </p>
                      {testimonial.clientPosition && (
                        <p className="text-[0.75rem] text-gray-500">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
