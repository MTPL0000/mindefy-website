import Image from "next/image";

export default function Services() {
  return (
    <section className="px-[3.18rem] mt-20 py-[4rem] bg-[#F6F6F6] text-gray-800">
      <div className="text-center mt-[3.25rem] mb-[3rem]">
        <p className="text-[0.875rem] font-bold text-[#FF5225] tracking-widest mb-[2.12rem]">
          OUR SERVICES
        </p>
        <h2 className="text-[2.5rem] font-normal leading-snug mt-2">
          We <span className="font-semibold">Provide Various</span> Kind Of{" "}
          <br />
          <span className="font-semibold">Services</span> For{" "}
          <span className="font-semibold">You</span>
        </h2>
        <p className="text-[1rem] mt-[1.62rem] max-w-[30rem] mx-auto text-gray-600">
          We offer the below services to our end clients, we only cater to
          services and projects that we can deliver the best!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[1.5rem]">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-1 min-w-[26.87rem] max-w-[26.87rem] min-h-[31.93rem] bg-white shadow-lg rounded-[1rem] p-[2rem] gap-6 transition hover:shadow-xl "
          >
            <div className="flex items-center text-2xl  gap-4 mb-[1rem]">
              <div className="relative w-[4.125rem] h-[4.125rem]">
                <Image
                  src="/images/rocket.svg"
                  alt="Rocket Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[1.25rem] font-semibold text-[#332771]">
                {service.title}
              </h3>
            </div>
            <p className="text-[1rem] font-medium  text-[#332771] mb-[1rem]">
              {service.description}
            </p>
            <ul className="list-none space-y-6 text-[#000000] font-medium text-[0.875rem] uppercase ">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">➔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    title: "Modern Application Development",
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
    points: ["Mindsey Design Studio", "Portfolio for UI/UX Design Work"],
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
    title: "Cloud & Cloud",
    description:
      "Our team of experts combines technology, platform proficiency, and business acumen to empower startups",
    points: ["Cloud & Cloud"],
  },
];
