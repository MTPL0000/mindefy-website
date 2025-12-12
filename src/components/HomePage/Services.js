import Image from "next/image";

const services = [
  {
    title: "Product Development",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: [
      "Android Applications",
      "iOS Applications",
      "Hybrid App Development",
      "MEAN and MERN Stack Development",
      "Web Application Development",
      "Agile & Rapid Application Development Model",
    ],
  },
  {
    title: "Digital Transformation Services",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: [
      "Digital Transformation Services",
      "Building Microservices Architecture",
      "Low Code – No Code Platforms",
      "Application Test Automation and QA Services",
    ],
  },
  {
    title: "Startup Support & Consulting",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: [
      "Startup Support and Consulting",
      "MVP Development & PMF Test",
      "White Label App Solutions",
      "Startup Incubation Services",
    ],
  },
  {
    title: "Mindful UX Design Studio",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: ["Mindefy Design Studio", "Portfolio for UI/UX Design Work"],
  },
  {
    title: "Enterprise Business Solutions",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: [
      "Enterprise Business Solutions",
      "CRM Solutions",
      "Business Process Management",
      "Ecommerce and Marketplace",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: ["Cloud & DevOps"],
  },
];

export default function Services() {
  return (
    <section className="px-4 lg:px-10 py-8 lg:py-16 bg-[#F6F6F6]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-15">
          <p className="text-sm sm:text-base font-bold text-[#FF5225] font-poppins tracking-widest mb-6 md:mb-8 uppercase">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-poppins font-semibold leading-tight">
            Explore Our Expertise
          </h2>
          <p className="text-sm md:text-base mt-6 md:mt-8 font-poppins max-w-2xl mx-auto text-[#444444] leading-relaxed">
            Turning bold ideas into intelligent digital realities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-sm min-h-148 bg-white shadow-lg rounded-2xl p-8 transition hover:shadow-xl hover:scale-105 duration-300"
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 border border-[#33277140] rounded-full shrink-0">
                  <Image
                    src="/images/rocket.webp"
                    alt="Icon"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] font-poppins leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-sm sm:text-base font-medium text-[#000000] font-poppins mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Points */}
              <ul className="list-none space-y-4 sm:space-y-6 text-[#000000] font-poppins font-medium text-sm sm:text-base uppercase">
                {service.points.map((point, i) => (
                  <li key={i} className="flex justify-start items-center gap-3">
                    <span className="text-[#000000] font-poppins text-base shrink-0">
                      ➔
                    </span>
                    <span className="text-[#000000] font-poppins text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
