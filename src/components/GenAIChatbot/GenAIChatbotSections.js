"use client";

import Image from "next/image";

const challengeCards = [
  {
    image: "/images/YH-CB1.svg",
    alt: "Mental Health Risks from Screen Overuse",
    title: "Mental health risks from",
    titleLine2: "screen overuse",
    description:
      "Extended screen use causes stress, sleep disruption, and reduced happiness.",
    aspectRatio: "aspect-55/63",
  },
  {
    image: "/images/YH-CB2.svg",
    alt: "Demand for Interactive Support",
    title: "Demand for",
    titleLine2: "interactive support",
    description:
      "Users wanted more than alerts - AI conversations soothe stress and loneliness like real human connection.",
    aspectRatio: "aspect-16618/12600",
  },
  {
    image: "/images/YH-CB3.png",
    alt: "Building a Trustworthy Knowledge Base",
    title: "Building a trustworthy",
    titleLine2: "knowledge base",
    description:
      "Trusted mental health content powered the chatbot's accurate and empathetic RAG-based responses.",
    aspectRatio: "aspect-6209/6300",
  },
];

const solutionCards = [
  {
    image: "/images/YH-CB4.svg",
    alt: "Knowledge-Augmented Q&A",
    title: "Knowledge-",
    titleLine2: "augmented Q&A",
    description:
      "Using RAG and credible content, the chatbot delivers accurate answers on lifestyle and mental health.",
    aspectRatio: "aspect-2477/2100",
  },
  {
    image: "/images/YH-CB5.svg",
    alt: "Companionship & Personalized Advice",
    title: "Companionship &",
    titleLine2: "personalized advice",
    description:
      "Empathy, CBT, and mindfulness help the bot address anxiety, loneliness, and emotional well-being.",
    aspectRatio: "aspect-4063/3150",
  },
  {
    image: "/images/YH-CB6.svg",
    alt: "Holistic Well-being Focus",
    title: "Holistic well-being",
    titleLine2: "Focus",
    description:
      "Solution supports digital wellness by tracking screen time and suggesting breaks or offline activities.",
    aspectRatio: "aspect-12671/12600",
  },
];

const implementationSteps = [
  { image: "/images/YH-I1.svg", title: "Research and data collection" },
  { image: "/images/YH-I2.svg", title: "Data curation and Preprocessing" },
  { image: "/images/YH-I3.svg", title: "Model selection and fine-tuning" },
  { image: "/images/YH-I4.svg", title: "LangChain RAG pipeline integration" },
  { image: "/images/YH-I5.svg", title: "Vector store deployment" },
  { image: "/images/YH-I6.svg", title: "AWS deployment" },
  { image: "/images/YH-I7.svg", title: "Secure chat flow" },
  { image: "/images/YH-I8.svg", title: "Privacy and Compliance" },
];

const techStack = {
  languagesFrameworks: [
    { image: "/images/YH-TS1.svg", name: "python" },
    { image: "/images/YH_TS2.svg", name: "langchain" },
    { image: "/images/YH_TS3.svg", name: "Streamlit" },
  ],
  modelsData: [{ image: "/images/YH_TS4.svg", name: "Open ai" }],
  vectorDatabase: [
    { image: "/images/YH_TS5.svg", name: "Meta" },
    { image: "/images/YH_TS6.svg", name: "Chroma" },
  ],
  cloudDeployment: [
    { image: "/images/YH_TS7.svg", name: "Elastic Beanstalk" },
    { image: "/images/YH_TS8.svg", name: "Simple Storage Service" },
    { image: "/images/YH_TS9.svg", name: "CloudWatch" },
  ],
};

function ChallengesSection() {
  return (
    <section
      id="challenges"
      className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl font-semibold text-[#21ABE1]">CHALLENGES</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {challengeCards.map((card, idx) => (
            <div key={idx} className="text-center w-full max-w-[20rem] mx-auto">
              <div className={`relative mx-auto mb-4 h-32 ${card.aspectRatio}`}>
                <Image src={card.image} alt={card.alt} fill loading="lazy" />
              </div>
              <h3 className="text-lg font-medium mb-4 text-[#000000]">
                {card.title} <br />
                {card.titleLine2}
              </h3>
              <p className="text-[#000000] text-sm font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl font-semibold uppercase text-[#21ABE1] mb-4">
            Solutions
          </h2>
          <h2 className="text-[1.25rem] font-normal leading-12 text-[#333333] max-w-181 mx-auto">
            We built a RAG-based AI chatbot integrated into YourHour to serve
            <br /> as a digital wellness buddy. Key features:
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutionCards.map((card, idx) => (
            <div
              key={idx}
              className={`text-center ${idx === 2 ? "max-w-md" : "max-w-[20rem]"} mx-auto`}
            >
              <div className={`relative mx-auto mb-4 h-32 ${card.aspectRatio}`}>
                <Image src={card.image} alt={card.alt} fill loading="lazy" />
              </div>
              <h3 className="text-lg font-medium mb-4 text-[#000000]">
                {card.title}
                <br />
                {card.titleLine2}
              </h3>
              <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-0">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalImplementationSection() {
  return (
    <section
      id="technical-implementation"
      className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl font-semibold uppercase text-[#21ABE1] mb-4">
            TECHNICAL IMPLEMENTATION
          </h2>
          <h2 className="text-[1.25rem] font-normal leading-9 text-[#333333]">
            The project was completed in 2 weeks following an agile,
            <br /> parallel workflow. Key steps included:
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-8">
          {implementationSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative"
            >
              <div className="flex items-center justify-between">
                <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                  <Image src={step.image} alt={step.title} fill loading="lazy" />
                </div>
                <div
                  className={`text-7xl ${idx === 6 ? "mr-8" : "mr-7"} font-normal text-[#3894FF26]`}
                >
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-base font-medium mx-6 mb-7 text-[#0D223A]">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyStackSection() {
  return (
    <section
      id="technology-stack"
      className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#21ABE1]">
            TECHNOLOGY STACK
          </h2>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Languages & Frameworks */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
              Languages & Frameworks
            </h3>
            <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
              {techStack.languagesFrameworks.map((tech, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Image src={tech.image} alt={tech.name} fill loading="lazy" />
                  </div>
                  <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Models & Data */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
              Models & Data
            </h3>
            <div className="flex justify-center">
              {techStack.modelsData.map((tech, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Image src={tech.image} alt={tech.name} fill loading="lazy" />
                  </div>
                  <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Vector Database */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
              Vector Database
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:justify-center sm:gap-4 lg:gap-8 gap-4 sm:flex-wrap">
              {techStack.vectorDatabase.map((tech, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Image src={tech.image} alt={tech.name} fill loading="lazy" />
                  </div>
                  <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & Deployment */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-gray-800">
              Cloud & Deployment
            </h3>
            <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
              {techStack.cloudDeployment.map((tech, idx) => (
                <div key={idx} className="text-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Image src={tech.image} alt={tech.name} fill loading="lazy" />
                  </div>
                  <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GenAIChatbotSections() {
  return (
    <>
      <ChallengesSection />
      <SolutionsSection />
      <TechnicalImplementationSection />
      <TechnologyStackSection />
    </>
  );
}
