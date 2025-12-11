import Image from "next/image";

export default function Services() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#F6F6F6] text-gray-800">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm sm:text-base font-bold text-[#FF5225] tracking-widest mb-6 sm:mb-8 lg:mb-[2.12rem] uppercase">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal leading-tight">
            We <span className="font-semibold">Provide Various</span> Kind Of{" "}
            <br className="hidden sm:block" />
            <span className="font-semibold">Services</span> For{" "}
            <span className="font-semibold">You</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 lg:mt-[1.62rem] max-w-2xl mx-auto text-gray-600 px-4">
            We offer the below services to our end clients, we only cater to
            services and projects that we can deliver the best!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-sm lg:max-w-md xl:max-w-lg bg-white shadow-lg rounded-2xl p-6 sm:p-8 transition hover:shadow-xl hover:scale-105 duration-300"
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-4 sm:mb-6">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-16.5 lg:h-16.5 shrink-0">
                  <Image
                    src="/images/rocket.webp"
                    alt="Rocket Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-[1.25rem] font-semibold text-[#332771] leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-sm sm:text-base lg:text-[1rem] font-medium text-[#332771] mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Points */}
              <ul className="list-none space-y-3 sm:space-y-4 lg:space-y-6 text-[#000000] font-medium text-xs sm:text-sm lg:text-[0.875rem] uppercase">
                {service.points.map((point, i) => (
                  <li key={i} className="flex justify-start items-center gap-2">
                    <span className="text-blue-500 text-base sm:text-lg shrink-0 mt-0.5">
                      ➔
                    </span>
                    <span className="leading-relaxed">{point}</span>
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
    title: "IT Consulting & Staff Augmentation",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: [
      "IT Consulting Services",
      "Startup Incubation Services",
      "IT Staff Augmentation Services",
    ],
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
    title: "Products Portfolio",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: ["YouHour – An App with 5M+ Users", "Digital Wellbeing Solutions"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: ["Cloud & DevOps"],
  },
];
