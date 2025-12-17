"use client";

export default function BlueprintSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      text: "We begin by understanding your business goals, target audience, and project requirements. Our team conducts thorough research and creates a detailed roadmap for success.",
    },
    {
      number: "02",
      title: "Design & Prototype",
      text: "Our design team translates strategy into intuitive experiences. We create wireframes, UI concepts, and functional prototypes that reflect your brand and user intent, forming the foundation for a seamless AI-powered digital product.",
    },
    {
      number: "03",
      title: "Develop & Integrate",
      text: "This is where innovation takes form. Our engineers leverage the latest frameworks, APIs, and machine learning models to build custom AI software and scalable applications. As a custom product development company, we ensure every line of code meets enterprise-grade standards.",
    },
    {
      number: "04",
      title: "Test & Optimize",
      text: "Quality is non-negotiable. We run extensive testing from performance and load to AI model accuracy, ensuring reliability and precision. Every product development solution undergoes continuous optimization to adapt to user behavior and new data.",
    },
    {
      number: "05",
      title: "Launch & Evolve",
      text: "Once deployed, we stay connected. Our post-launch support includes maintenance, model retraining, and product scaling. Whether it’s an MVP or enterprise rollout, our AI product development process ensures your solution grows smarter with every interaction.",
    },
  ];

  return (
    <section className="px-4 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SECTION */}
        <div>
          <p className="tracking-widest text-center lg:text-left text-[#FF5225] text-sm sm:text-base font-bold mb-5 sm:mb-7 uppercase">
            THE MINDEFY APPROACH
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left font-normal leading-normal mb-5 sm:mb-7">
            The Blueprint: <br />
            How We Build{" "}
            <span className="font-bold">
              Future- <br />
              Ready Products
            </span>
          </h2>
          <p className="text-[#444444] text-center lg:text-left font-poppins text-base leading-relaxed mx-auto lg:mx-0 lg:max-w-md">
            We begin by understanding your business goals, target audience, and
            project requirements. Through in-depth research and strategic
            analysis, we define a clear product vision. Our team identifies
            challenges, opportunities, and success metrics early on. This phase
            ensures alignment between business objectives and user needs. A
            structured roadmap is then created to guide development with clarity
            and confidence.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-8">
          {steps.map((s, index) => (
            <div key={index} className="flex items-start gap-8">
              {/* GRADIENT NUMBER */}
              <span className="text-5xl font-semibold font-poppins bg-linear-to-r from-[#4A3AFF] to-[#FF5225] bg-clip-text text-transparent">
                {s.number}
              </span>

              <div>
                <h3 className="font-poppins text-xl md:text-2xl font-semibold text-[#332771] mb-5">
                  {s.title}
                </h3>

                <p className="text-[#444444] font-poppins text-base font-normal leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
