import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    title: "AI & ML Development",
    link: "/ai-ml-services",
    icon: "/images/aiml.svg",
    description:
      "Our AI specialists build solutions that learn, predict, and automate intelligently. Using advanced analytics, machine learning, and generative AI, our AI development services empower organizations to extract insights, enhance experiences, and make faster, data-backed decisions.",
    points: [
      "Custom AI Development",
      "Machine Learning Development",
      "Generative AI & Chatbot",
      "Data Engineering & Analytics",
    ],
    pointsLinks: [
      "/custom-ai-solutions-enterprises",
      "/machine-learning-services",
      "/generative-ai-chatbot-development",
      "/advanced-data-engineering-services",
    ],
  },

  {
    title: "Product Development",
    icon: "/images/product.svg",
    description:
      "As a trusted product development company, we transform bold ideas into powerful digital products from intuitive mobile apps to enterprise-grade platforms. Our process combines design thinking, agile development, and emerging technologies to deliver solutions that are seamless, user-driven, and ready to scale.",
    points: [
      "Android App Development",
      "iOS App Development",
      "Hybrid App Development",
      "Web Application Development",
      "MVP Development & PMF Test",
      "Design & UX",
    ],
    pointsLinks: [
      "/android-app-development-experts",
      "/ios-app-development-services",
      "/hybrid-app-development-services",
      "/web-application-development-solutions",
      "/mvp-development-startup-support",
      "/mindful-ux-design-user-experience",
    ],
  },

  {
    title: "Cloud & Platform Engineering",
    icon: "/images/cloud.svg",
    description:
      "We design and manage cloud platforms that are secure, adaptive, and built for performance. From modernization to migration, our engineering teams create infrastructures that enhance reliability, scalability, and operational efficiency across your ecosystem.",
    points: [
      "Cloud Migration",
      "DevOps Automation",
      "Digital Transformation Services",
      "QA & Test Automation",
      "Building Micro-services Architecture",
    ],
    pointsLinks: [
      "/cloud-engineering-services",
      "/cloud-devops-engineering",
      "/digital-transformation-consulting",
      "/test-automation-qa-services",
      "/microservices-architecture-consulting",
    ],
  },

  {
    title: "Business IT Solutions",
    icon: "/images/business.svg",
    description:
      "We help businesses unlock new possibilities through strategic innovation and operational agility. From digital transformation to process optimization, our experts align technology with business goals to accelerate outcomes and fuel long-term growth.",
    points: [
      "IT Consulting Services",
      "Enterprise Solutions",
      "Team Augmentation",
      "Startup Support and Consulting",
      "Startup Incubation Services",
      "White Label App Solutions",
    ],
    pointsLinks: [
      "/it-consulting-strategy",
      "/enterprise-software-solutions",
      "/staff-augmentation-services",
      "/startup-support-consulting",
      "/startup-incubation-consulting-services",
      "/white-label-software-solutions",
    ],
  },

  {
    title: "Game Development",
    icon: "/images/game.svg",
    description:
      "We design and develop games that captivate players and inspire creativity. From 2D and 3D to immersive AR experiences, our artists and developers blend storytelling with technology to deliver engaging gameplay across platforms.",
    points: [
      "2D & 3D Game Animation",
      "Unity and Unreal Game Development",
      "AR VR Game Development",
    ],
    pointsLinks: [
      "/game-animation-graphics",
      "/unity-unreal-engine-development",
      "/ar-vr-game-development",
    ],
  },

  {
    title: "E-commerce & Marketplace Solutions",
    icon: "/images/marketplace.svg",
    description:
      "We craft e-commerce and marketplace ecosystems that deliver seamless, personalized shopping experiences. From intuitive design to advanced analytics, we help brands connect with customers and grow faster in the digital economy.",
    points: [
      "E-commerce Development",
      "CRM Solutions",
      "Business Process Management",
      "Low Code Development",
    ],
    pointsLinks: [
      "/ecommerce-marketplace-development",
      "/crm-software-solutions",
      "/business-process-management-solutions",
      "/low-code-app-development-services",
    ],
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
              className="w-full max-w-sm min-h-148 bg-white shadow-lg rounded-2xl px-6 py-8 transition hover:shadow-xl duration-300"
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 p-3 border border-[#33277140] rounded-full shrink-0">
                  <Image
                    src={service.icon}
                    alt="Icon"
                    width={42}
                    height={42}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

                {/* CLICKABLE TITLE */}
                {service.link ? (
                  <Link
                    href={service.link}
                    className="text-xl md:text-2xl font-semibold text-[#000000] font-poppins leading-tight hover:text-[#FF5225] transition"
                  >
                    {service.title}
                  </Link>
                ) : (
                  <h3 className="text-xl md:text-2xl font-semibold text-[#000000] font-poppins leading-tight">
                    {service.title}
                  </h3>
                )}
              </div>

              {/* Service Description */}
              <p className="text-sm sm:text-base font-medium text-[#000000] font-poppins mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Points */}
              <ul className="list-none space-y-4 sm:space-y-6 text-[#000000] font-poppins font-medium text-sm sm:text-base uppercase">
                {service.points.map((point, i) => {
                  const pointLink =
                    service.pointsLinks && service.pointsLinks[i]
                      ? service.pointsLinks[i]
                      : null;

                  return (
                    <li key={i} className="flex justify-start items-center">
                      {/* CLICKABLE POINTS */}
                      {pointLink ? (
                        <Link
                          href={pointLink}
                          className="text-[#000000] font-poppins text-sm leading-relaxed hover:text-[#FF5225] transition"
                        >
                          <span className="text-[#000000] font-poppins text-base shrink-0 mr-3 hover:text-[#FF5225] transition">
                            ➔
                          </span>
                          {point}
                        </Link>
                      ) : (
                        <span className="text-[#000000] font-poppins text-sm leading-relaxed">
                          <span className="text-[#000000] font-poppins text-base shrink-0 mr-3">
                            ➔
                          </span>
                          {point}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
