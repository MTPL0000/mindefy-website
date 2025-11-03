"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useHeaderHeight from "@/hooks/useHeaderHeight";

const navigationItems = [
  { id: "introduction", label: "Introduction" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "technical-implementation", label: "Technical Implementation" },
  { id: "technology-stack", label: "Technology Stack" },
  { id: "contact", label: "Lets Get In Touch" },
];

const GenAIChatbot = () => {
  const headerHeight = useHeaderHeight();
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMobile, setIsMobile] = useState(false);
  const [introductionHeight, setIntroductionHeight] = useState(0);
  const introductionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 500; // Offset for better detection

      // Check if we should hide the navigation
      const techStackSection = document.getElementById("technology-stack");

      if (techStackSection) {
        const techStackBottom =
          techStackSection.offsetTop + techStackSection.offsetHeight;
        setShowNavigation(scrollPosition < techStackBottom);
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(navigationItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  // Calculate introduction section height at runtime
  useEffect(() => {
    const calculateHeight = () => {
      if (introductionRef.current) {
        const height = introductionRef.current.offsetHeight;
        setIntroductionHeight(height);
        console.log("Introduction section height:", height, "px");
      }
    };

    // Calculate on mount
    calculateHeight();

    // Recalculate on window resize
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-screen mx-auto flex flex-col lg:flex-row">
        <div
          className="absolute left-0 w-full -z-10"
          style={{
            height: `${introductionHeight}px`,
            top: `${headerHeight}px`,
            background: "linear-gradient(to bottom, #FFFFFF, #A2E3FB, #FEFEFE)",
          }}
        ></div>
        {/* Left Navigation Sidebar - Hidden on mobile/tablet */}
        <div className="hidden lg:block w-80 flex-shrink-0 mr-0 mb-6 lg:mb-0 relative">
          <div className="sticky" style={{ top: `${headerHeight}px` }}>
            <div className="py-8 bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.2)] h-full">
              <nav className="space-y-1.5">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left p-5 hover:font-semibold transition-colors duration-200 cursor-pointer border-l-4 ${
                      activeSection === item.id
                        ? "bg-[#FAFFFA] text-[#21ABE1] hover:text-[#21ABE1] font-semibold text-base border-[#21ABE1]"
                        : "text-[#142E149E] bg-[#FAFFFA] font-medium text-base border-[#21ABFF80]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 pt-10">
          {/* Introduction Section */}
          <section
            ref={introductionRef}
            id="introduction"
            className="flex items-center mt-10 sm:mt-12 md:mt-14 lg:mt-18"
          >
            <div className="mx-auto p-4 sm:px-6 lg:px-8 w-full">
              <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-start">
                {/* Left Content */}
                <div className="space-y-0 w-full lg:max-w-[37.14%]">
                  <div className="text-[#000000] mb-6">
                    <p className="font-bold text-sm mb-4 text-center lg:text-left">CASE STUDY</p>
                    <h1 className="text-[1.86rem] font-semibold text-center lg:text-left">
                      Gen AI-Chatbot
                    </h1>
                  </div>
                  {/* <div className="mr-0"> */}
                  <p className="text-[#000000] font-normal text-sm leading-relaxed tracking-normal text-center lg:text-left">
                    YourHour was originally designed to monitor and reduce daily
                    screen time with alerts. Facing rising demand for mental
                    health support, the team enhanced the app by integrating a
                    Retrieval-Augmented Generation (RAG) AI chatbot. This “AI
                    companion” continued screen-time coaching while also
                    answering mental health questions, providing personalized
                    advice on anxiety or depression, and offering
                    companionship—based on how screen time affects health and
                    emotional well-being.
                  </p>
                  {/* </div> */}
                </div>

                {/* Right Content - Chat Interface Image */}
                <div className="mt-0 lg:-mt-38 flex justify-center">
                  <div className="relative overflow-hidden h-[23rem] sm:h-[30rem] lg:h-[52.48rem] aspect-[1/1.63]">
                    <Image
                      src="/images/YH-MN.gif"
                      alt="YourHour App with AI Chatbot"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section id="challenges" className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto w-full">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl font-semibold text-[#21ABE1]">
                  CHALLENGES
                </h2>
              </div>

              {/* Challenge Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {/* Card 1: Mental Health Risks from Screen Overuse */}
                <div className="text-center w-full max-w-[20rem] mx-auto">
                  <div className="relative mx-auto mb-4 h-32 aspect-[55/63]">
                    <Image
                      src="/images/YH-CB1.svg"
                      alt="Mental Health Risks from Screen Overuse"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Mental health risks from <br />
                    screen overuse
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed">
                    Extended screen use causes stress, sleep disruption, and
                    reduced happiness.
                  </p>
                </div>

                {/* Card 2: Demand for Interactive Support */}
                <div className="text-center w-full max-w-[20rem] mx-auto">
                  <div className="relative mx-auto mb-4 h-32 aspect-[16618/12600]">
                    <Image
                      src="/images/YH-CB2.svg"
                      alt="Demand for Interactive Support"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Demand for
                    <br /> interactive support
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed">
                    Users wanted more than alerts - AI conversations soothe
                    stress and loneliness like real human connection.
                  </p>
                </div>

                {/* Card 3: Building a Trustworthy Knowledge Base */}
                <div className="text-center w-full max-w-[20rem] mx-auto">
                  <div className="relative mx-auto mb-4 h-32 aspect-[6209/6300]">
                    <Image
                      src="/images/YH-CB3.png"
                      alt="Building a Trustworthy Knowledge Base"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Building a trustworthy
                    <br /> knowledge base
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed">
                    Trusted mental health content powered the chatbot’s accurate
                    and empathetic RAG-based responses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section id="solutions" className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto w-full">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl font-semibold uppercase text-[#21ABE1] mb-4">
                  Solutions
                </h2>
                <h1 className="text-[1.25rem] font-normal leading-12 text-[#333333] max-w-[45.25rem] mx-auto">
                  We built a RAG-based AI chatbot integrated into YourHour to
                  serve
                  <br /> as a digital wellness buddy. Key features:
                </h1>
              </div>

              {/* Solution Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Knowledge-Augmented Q&A */}
                <div className="text-center max-w-[20rem] mx-auto">
                  <div className="relative mx-auto mb-4 h-32 aspect-[2477/2100]">
                    <Image
                      src="/images/YH-CB4.svg"
                      alt="Knowledge-Augmented Q&A"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Knowledge-
                    <br />
                    augmented Q&A
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-0">
                    Using RAG and credible content, the chatbot delivers
                    accurate answers on lifestyle and mental health.
                  </p>
                </div>

                {/* Companionship & Personalized Advice */}
                <div className="text-center max-w-[20rem] mx-auto">
                  <div className="relative mx-auto mb-4 h-32 aspect-[4063/3150]">
                    <Image
                      src="/images/YH-CB5.svg"
                      alt="Companionship & Personalized Advice"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Companionship &<br /> personalized advice
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-0">
                    Empathy, CBT, and mindfulness help the bot address anxiety,
                    loneliness, and emotional well-being.
                  </p>
                </div>

                {/* Holistic Well-being Focus */}
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mx-auto mb-4 h-32 aspect-[12671/12600]">
                    <Image
                      src="/images/YH-CB6.svg"
                      alt="Holistic Well-being Focus"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Holistic well-being
                    <br /> Focus
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-0">
                    Solution supports digital wellness by tracking screen time
                    and suggesting breaks or offline activities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation Section */}
          <section
            id="technical-implementation"
            className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8"
          >
            <div className="max-w-6xl mx-auto w-full">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-2xl font-semibold uppercase text-[#21ABE1] mb-4">
                  TECHNICAL IMPLEMENTATION
                </h2>
                <h1 className="text-[1.25rem] font-normal leading-9 text-[#333333]">
                  The project was completed in 2 weeks following an agile,
                  <br /> parallel workflow. Key steps included:
                </h1>
              </div>

              {/* Implementation Steps Grid */}
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-8">
                {/* Step 1 */}
                <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-I1.svg"
                        alt="Data Collection"
                        fill
                      />
                    </div>
                    <div className="text-7xl mr-7.5  font-normal text-[#3894FF26]">
                      1
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-7 text-[#0D223A]">
                    Research and data collection
                  </h3>
                </div>

                {/* Step 2 */}
                <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-I2.svg"
                        alt="Feature Engineering"
                        fill
                      />
                    </div>
                    <div className="text-7xl mr-7.5  font-normal text-[#3894FF26]">
                      2
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-7 text-[#0D223A]">
                    Data curation and Preprocessing
                  </h3>
                </div>

                {/* Step 3 */}
                <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-I3.svg"
                        alt="Similarity Computation"
                        fill
                      />
                    </div>
                    <div className="text-7xl mr-7.5  font-normal text-[#3894FF26]">
                      3
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-7 text-[#0D223A]">
                    Model selection and fine-tuning
                  </h3>
                </div>

                {/* Step 4 */}
                <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-I4.svg"
                        alt="Recommendation Logic"
                        fill
                      />
                    </div>
                    <div className="text-7xl mr-7  font-normal text-[#3894FF26]">
                      4
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-7 text-[#0D223A]">
                    LangChain RAG pipeline integration
                  </h3>
                </div>

                {/* Step 5 */}
                <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-I5.svg"
                        alt="Real-Time Service"
                        fill
                      />
                    </div>
                    <div className="text-7xl mr-7 font-normal text-[#3894FF26]">
                      5
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-7 text-[#0D223A]">
                    Vector store deployment
                  </h3>
                </div>

                {/* Step 6 */}
                <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-I6.svg"
                        alt="Monitoring & Retraining"
                        fill
                      />
                    </div>
                    <div className="text-7xl mr-7  font-normal text-[#3894FF26]">
                      6
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-7 text-[#0D223A]">
                    AWS deployment
                  </h3>
                </div>

                <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-I7.svg"
                        alt="Monitoring & Retraining"
                        fill
                      />
                    </div>
                    <div className="text-7xl mr-8  font-normal text-[#3894FF26]">
                      7
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-7 text-[#0D223A]">
                    Secure chat flow
                  </h3>
                </div>

                <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-I8.svg"
                        alt="Monitoring & Retraining"
                        fill
                      />
                    </div>
                    <div className="text-7xl mr-7 font-normal text-[#3894FF26]">
                      8
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-7 text-[#0D223A]">
                    Privacy and Compliance
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section id="technology-stack" className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto w-full">
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#21ABE1]">
                  TECHNOLOGY STACK
                </h2>
              </div>

              {/* First Row - Languages, Monitoring, Data Storage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
                {/* Languages */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
                    Languages & Frameworks
                  </h3>
                  <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image
                          src="/images/YH-TS1.svg"
                          alt="Python programming language"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        python
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image
                          src="/images/YH_TS2.svg"
                          alt="Python programming language"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        langchain
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image
                          src="/images/YH_TS3.svg"
                          alt="Jupyter notebook"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        Streamlit
                      </p>
                    </div>
                  </div>
                </div>

                {/* Monitoring */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
                    Models & Data
                  </h3>
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image
                          src="/images/YH_TS4.svg"
                          alt="AWS SageMaker"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        Open ai
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row - Deployment/Cloud and Front-End Integration */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Deployment/Cloud */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
                    Vector Database
                  </h3>
                  <div className="grid grid-cols-2 sm:flex sm:justify-center sm:gap-4 lg:gap-8 gap-4 sm:flex-wrap">
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image src="/images/YH_TS5.svg" alt="AWS Lambda" fill />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        Meta
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image
                          src="/images/YH_TS6.svg"
                          alt="AWS Kinesis"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        Chroma
                      </p>
                    </div>
                  </div>
                </div>

                {/* Front-End Integration */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-gray-800">
                    Cloud & Deployment
                  </h3>
                  <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image src="/images/YH_TS7.svg" alt="JavaScript" fill />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        Elastic Beanstalk
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image src="/images/YH_TS8.svg" alt="JavaScript" fill />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        Simple Storage Service
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image src="/images/YH_TS9.svg" alt="HTML" fill />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        CloudWatch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GenAIChatbot;
