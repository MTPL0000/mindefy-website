"use client";

export default function IndustriesSection() {
  const industries = [
    {
      icon: "/icons/saas.svg",
      title: "SaaS",
      badge: "40+ Projects",
      text: "We help SaaS companies turn ideas into intelligent platforms that scale effortlessly. From MVP product development to AI-driven automation and analytics dashboards, we design solutions that reduce operational friction and boost customer retention.",
    },
    {
      icon: "/icons/healthcare.svg",
      title: "Healthcare",
      badge: "40+ Projects",
      text: "We build AI-powered healthcare applications that improve patient outcomes and streamline clinical workflows. From remote monitoring to predictive health analytics, we create HIPAA-compliant, secure, and innovative digital solutions.",
    },
    {
      icon: "/icons/enterprise.svg",
      title: "Enterprise",
      badge: "40+ Projects",
      text: "For modern enterprises, we create digital transformation ecosystems powered by intelligence. Our enterprise software development services help automate workflows, predict trends, and enhance productivity.",
    },
    {
      icon: "/icons/edtech.svg",
      title: "EdTech",
      badge: "40+ Projects",
      text: "We enable education platforms to personalize learning using AI-based recommendation engines and assessment systems. Our secure, scalable learning solutions improve outcomes for both educators and students.",
    },
    {
      icon: "/icons/retail.svg",
      title: "Retail & eCommerce",
      badge: "40+ Projects",
      text: "From predictive intelligence to personalized shopping experiences, our eCommerce solutions help retailers boost conversions, optimize inventory, and meet customer needs with precision.",
    },
    {
      icon: "/icons/fintech.svg",
      title: "FinTech",
      badge: "40+ Projects",
      text: "We build secure, compliant financial technologies including fraud detection, AML, automated risk systems, and next-gen digital banking experiences.",
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
        <div className="text-center mb-12">
          <p className="tracking-widest text-[#FF5225] text-sm font-bold font-poppins uppercase mb-3">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="text-3xl sm:text-4xl font-poppins text-[#2A2A2A] font-semibold leading-tight mb-3">
            Tech Solutions Tailored For Every Industry
          </h2>

          <p className="text-base font-poppins text-[#444444] max-w-2xl mx-auto leading-relaxed">
            We craft products that fit your users, your workflows, and your
            future.
          </p>
        </div>

        {/* INDUSTRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Icon + Badge */}
              <div className="flex items-center justify-between mb-5">
                <img src={item.icon} alt={item.title} className="w-10 h-10" />

                <span className="px-3 py-1 rounded-full bg-[#F0F0F0] text-xs font-semibold text-[#2A2A2A]">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-poppins text-xl font-semibold text-[#2A2A2A] mb-3">
                {item.title}
              </h3>

              <p className="text-[#444444] font-poppins text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM STATS BAR */}
        <div className="w-fit mx-auto bg-white shadow-lg rounded-2xl py-8 px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {stats.map((s, index) => (
              <div
                key={index}
                className="relative px-6 text-center flex flex-col items-center"
              >
                {/* LEFT DIVIDER */}
                {index !== 0 && (
                  <span className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-[#D9D9D9]"></span>
                )}

                {/* GRADIENT NUMBER */}
                <p className="text-3xl sm:text-4xl font-bold font-poppins bg-linear-to-r from-[#4A3AFF] to-[#FF5225] bg-clip-text text-transparent mb-2">
                  {s.value}
                </p>

                <p className="text-sm text-[#444444] font-poppins">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
