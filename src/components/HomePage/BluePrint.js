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
      text: "Our design team translates strategy into intuitive experiences. We create wireframes, UI concepts, and functional prototypes that reflect your brand and user intent.",
    },
    {
      number: "03",
      title: "Develop & Integrate",
      text: "This is where innovation takes form. Our engineers leverage modern frameworks, APIs, and machine learning models to build custom AI software.",
    },
    {
      number: "04",
      title: "Test & Optimize",
      text: "We run extensive testing from performance and load to AI model accuracy, ensuring reliability and precision.",
    },
    {
      number: "05",
      title: "Launch & Evolve",
      text: "Once deployed, we stay connected with support, optimization, and scaling as your solution grows.",
    },
  ];

  return (
    <section className="px-4 lg:px-10 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT SECTION */}
        <div>
          <p className="text-[#FF5225] text-sm tracking-widest font-bold font-poppins uppercase mb-4">
            THE MINDEFY APPROACH
          </p>

          <h2 className="text-3xl sm:text-4xl font-poppins font-normal text-[#2A2A2A] leading-tight mb-6">
            The Blueprint: <br />
            How We Build{" "}
            <span className="font-semibold">Future-Ready Products</span>
          </h2>

          <p className="text-[#444444] font-poppins text-base leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-10">
          {steps.map((s, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* GRADIENT NUMBER */}
              <span className="text-3xl font-bold font-poppins bg-linear-to-r from-[#4A3AFF] to-[#FF5225] bg-clip-text text-transparent">
                {s.number}
              </span>

              <div>
                <h3 className="font-poppins text-lg font-semibold text-[#2A2A2A] mb-1">
                  {s.title}
                </h3>

                <p className="text-[#444444] font-poppins text-base leading-relaxed">
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
