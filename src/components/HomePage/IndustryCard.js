"use client";

import Image from "next/image";

export default function IndustriesSection() {
  const industries = [
    {
      icon: "/images/AI-ML/manufactur-icon.svg",
      title: "SaaS",
      project: "40+ Projects",
      text: "We help SaaS companies turn ideas into intelligent platforms that scale effortlessly. From MVP product development to AI-driven automation and analytics dashboards, we design solutions that reduce operational friction and boost customer retention. Whether you’re building a new SaaS product or enhancing an existing one, our software development services ensure smarter, data-informed performance.",
    },
    {
      icon: "/images/AI-ML/health-icon.svg",
      title: "Healthcare",
      project: "40+ Projects",
      text: "We build AI-powered healthcare applications that improve patient outcomes and streamline clinical workflows. From remote monitoring platforms to predictive health analytics, Mindefy’s custom software development approach ensures privacy, compliance, and innovation helping healthcare organizations focus on care, not complexity.",
    },
    {
      icon: "/images/enterprise.svg",
      title: "Enterprise",
      project: "40+ Projects",
      text: "For modern enterprises, we create digital transformation ecosystems driven by intelligence. Our custom AI development and software integration services empower teams to automate workflows, predict market trends, and drive strategic decisions through real-time insights.",
    },
    {
      icon: "/images/edTech.svg",
      title: "EdTech",
      project: "40+ Projects",
      text: "We enable education platforms to personalize learning experiences using AI-based recommendation engines and smart assessment systems. Our digital product development team builds engaging, secure, and scalable learning platforms that help students and educators connect in meaningful, measurable ways.",
    },
    {
      icon: "/images/AI-ML/glob-icon.svg",
      title: "Retail & eCommerce",
      project: "40+ Projects",
      text: "From personalized shopping experiences to demand forecasting, our eCommerce development solutions help retailers stay ahead of customer needs. We blend mobile app development with predictive intelligence to optimize inventory, enhance product discovery, and boost conversions.",
    },
    {
      icon: "/images/AI-ML/retail-icon.svg",
      title: "FinTech",
      project: "40+ Projects",
      text: "We develop secure, compliant, and intelligent FinTech applications that redefine digital finance. With expertise in custom software development, Mindefy helps FinTech innovators detect fraud faster, automate risk management, and create seamless user experiences.",
    },
  ];

  const stats = [
    { value: "280+", label: "Total Projects" },
    { value: "150+", label: "Happy Clients" },
    { value: "6", label: "Industries" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <section className="px-4 lg:px-10 py-16 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADING */}
        <div className="text-center mb-12 md:mb-15">
          <p className="tracking-widest text-[#FF5225] text-sm sm:text-base font-bold mb-5 sm:mb-6 uppercase">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins text-[#2A2A2A] font-bold leading-normal mb-5 sm:mb-6">
            Tech Solutions Tailored For Every Industry
          </h2>

          <p className="text-base font-poppins text-[#444444] font-normal max-w-2xl mx-auto leading-relaxed">
            We craft products that fit your users, your workflows, and your
            future.
          </p>
        </div>

        {/* INDUSTRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 md:mb-15">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white min-h-100 rounded-3xl p-6 border border-[#F0F0F0] hover:shadow-sm transition"
            >
              {/* Icon + project */}
              <div className="flex items-center justify-between mb-5">
                <div className="relative p-2 rounded-full w-12 h-12">
                  <Image
                    src={item.icon}
                    alt="icon"
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <span className="p-2 text-center rounded-full bg-[#EBE6E6] text-xs font-semibold text-[#332771]">
                  {item.project}
                </span>
              </div>

              <h3 className="font-poppins text-xl md:text-2xl font-bold text-[#000000] mb-5">
                {item.title}
              </h3>

              <p className="text-[#444444] font-poppins text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM STATS BAR */}
        <div className="w-fit mx-auto bg-white shadow-md rounded-2xl flex flex-wrap justify-center items-center py-8 px-6">
          {stats.map((s, index) => (
            <>
              <div
                key={index}
                className="px-4 md:px-8 lg:px-16 text-center flex flex-col items-center mb-4"
              >
                <p className="text-3xl sm:text-4xl font-semibold font-poppins bg-linear-to-r from-[#4A3AFF] to-[#FF5225] bg-clip-text text-transparent mb-3">
                  {s.value}
                </p>
                <p className="text-sm text-[#444444] font-bold font-poppins">
                  {s.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div
                  key={`divider-${index}`}
                  className="hidden md:block h-14 w-px bg-[#E0E0E0]"
                ></div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
