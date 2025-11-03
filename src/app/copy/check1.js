"use client";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { scroller } from "react-scroll";
import { useHeaderHeight } from "@/hooks/useHeaderHeight";

const cardData = [
  {
    icon: "/images/ai/icons.png",
    title: "Advanced AI Engineering",
    description:
      "Expertise across NLP, generative AI, computer vision, reinforcement learning — engineered to scale, secure, and perform",
  },
  {
    icon: "/images/ai/icons-2.png",
    title: "Custom, Not Off-the-Shelf",
    description:
      "Solutions tailored to your data, ecosystem, and KPIs — no cookie-cutter models",
  },
  {
    icon: "/images/ai/icons-3.png",
    title: "Cloud- and Edge-Ready",
    description:
      "Deploy AI where it matters — on cloud, edge, or hybrid environments — seamlessly integrated into your infrastructure",
  },
  {
    icon: "/images/ai/icons-4.png",
    title: "Business-Driven Outcomes",
    description:
      "We align every AI solution with real-world metrics — operational efficiency, cost savings, predictive insights",
  },
  {
    icon: "/images/ai/icons-5.png",
    title: "Robust MLOps & Governance",
    description:
      "Continuous monitoring, compliance, and governability built in — designed for sustainable ROI",
  },
  {
    icon: "/images/ai/icons-6.png",
    title: "Cross-Functional Expertise",
    description:
      "Teams that combine data engineering, AI, cloud and domain knowledge to drive full-stack execution",
  },
];

const offersCards = [
  {
    title: "AI Solutions",
    text: "Build Intelligent Systems That Learn, Adapt, And Automate Complex Decisions — From GenAI To NLP And Computer Vision.",
    link: "/",
  },
  {
    title: "Machine Learning (ML)",
    text: "Design, Train, And Deploy Models That Predict, Classify, And Optimize — Using Structured And Unstructured Data.",
    link: "/",
  },
  {
    title: "Data Engineering & Analytics",
    text: "Transform Raw Data Into A Strategic Asset — We Build Reliable Pipelines, Scalable Data Lakes, And Intelligent Warehouses That Power Insightful Dashboards, Business Intelligence, And Advanced Analytics. From Data Collection To Decision-Making, We Engineer The Entire Journey.",
    link: "/",
  },
  {
    title: "Cloud Engineering Services",
    text: "Build And Scale With The Power Of The Cloud. We Design Secure, High-Performance Cloud Infrastructures That Support AI, Data, And Modern Applications—Ensuring Speed, Flexibility, And Resilience Across AWS, Azure, And GCP.",
    link: "/",
  },
];

export default function ImprovedCopyPage() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [section1Progress, setSection1Progress] = useState(0);
  const [section3Progress, setSection3Progress] = useState(0);
  const [section5Progress, setSection5Progress] = useState(0);
  const [section6Progress, setSection6Progress] = useState(0);
  const headerHeight = useHeaderHeight('nav');

  // Use Framer Motion's animation controls
  const zoomControls = useAnimation();
  const contentZoomControls = useAnimation();
  const cardControls = useAnimation();

  // Handle scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      
      setScrollProgress(scrollPercent);

      // Calculate section 1 progress (Image Zoom section) - scroll-based
      const section1Element = document.getElementById("section-1");
      if (section1Element) {
        const rect = section1Element.getBoundingClientRect();
        const section3Element = document.getElementById("section-3");
        
        if (section3Element) {
          const section3Rect = section3Element.getBoundingClientRect();
          
          // Calculate progress from when section 1 top reaches header to when section 3 reaches top
          const startPoint = headerHeight; // When section 1 reaches header
          
          // Progress: 0 when section 1 is below start point, 1 when section 3 reaches top
          let progress = 0;
          if (rect.top <= startPoint) {
            // Section 1 has started scrolling up
            progress = Math.min(1, (startPoint - rect.top) / (window.innerHeight * 0.8));
          }
          
          setSection1Progress(progress);
          
          // Apply zoom animation based on scroll progress
          zoomControls.set({
            scale: 1 + progress * 14, // Scale from 1 to 15
            opacity: 1 - progress * 0.7, // Opacity from 1 to 0.3
            filter: `blur(${progress * 8}px)`, // Blur from 0 to 8px
          });

          contentZoomControls.set({
            scale: 1 + progress * 14, // Scale from 1 to 15
            opacity: 1 - progress, // Opacity from 1 to 0
          });

          // Animate cards based on progress
          if (progress > 0.5) {
            const cardProgress = (progress - 0.5) / 0.5; // 0 to 1 after 50% scroll
            cardControls.set((i) => ({
              y: 100 - cardProgress * 100,
              opacity: cardProgress,
            }));
          }
        }
      }

      // Calculate section 3 progress (Cards section)
      const section3Element = document.getElementById("section-3");
      if (section3Element) {
        const rect = section3Element.getBoundingClientRect();
        const elementProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setSection3Progress(Math.floor(elementProgress * 6)); // 0-6 steps
      }

      // Calculate section 5 progress (Offerings section)
      const section5Element = document.getElementById("section-5");
      if (section5Element) {
        const rect = section5Element.getBoundingClientRect();
        const elementProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setSection5Progress(elementProgress);
      }

      // Calculate section 6 progress (Cards column animation)
      // Animation starts when section 6 reaches the top (like section 1)
      const section6Element = document.getElementById("section-6");
      if (section6Element) {
        const rect = section6Element.getBoundingClientRect();
        const triggerPoint = headerHeight; // When section 6 reaches header
        
        // Only calculate progress after section 6 reaches the top
        if (rect.top <= triggerPoint) {
          // Progress: 0 when section 6 reaches header, 1 when fully scrolled past
          const progress = Math.min(1, (triggerPoint - rect.top) / (window.innerHeight * 0.8));
          setSection6Progress(Math.floor(progress * 4)); // 0-4 steps for 4 columns
        } else {
          // Reset progress when section 6 is not at top yet
          setSection6Progress(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight, zoomControls, contentZoomControls, cardControls]);

  // Animation variants for cleaner code
  const sectionVariants = {
    visible: { opacity: 1, pointerEvents: "auto" },
    hidden: { opacity: 0, pointerEvents: "none" },
  };

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-hidden"
    >
      {/* Video Section */}
      <div
        id="section-0"
        className="w-full flex items-center justify-center bg-black"
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/hero_copy.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Image Zoom Section */}
      <div
        id="section-1"
        className="w-full flex items-center justify-center relative overflow-hidden"
        style={{ height: `calc(100vh - ${headerHeight}px)`}}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/bg-copy.png)" }}
          animate={zoomControls}
          initial={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        />

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={contentZoomControls}
              initial={{ scale: 1, opacity: 1 }}
            >
              <h1 className="mb-6 font-poppins text-[2.5rem] font-normal text-[#3D3D3D]">
                <div>Built With Data. Powered By AI.</div>
                <div className="font-semibold mt-2">Delivered For Impact.</div>
              </h1>

              <div className="space-y-4 text-lg font-poppins text-gray-700 mb-8">
                <p>
                  AI turns data into action. We help businesses unlock that
                  power — through tailored, scalable solutions.
                </p>
                <p>
                  We architect intelligence from raw data. Precision-built.
                  Algorithm-driven. Future-proof.
                </p>
                <p>
                  What if your data could think? We don't just imagine it — we
                  engineer it.
                </p>
                <p>
                  Intelligence isn't just learned. It's designed — through data,
                  algorithms, and intent.
                </p>
              </div>

              <button className="bg-[#34333D] text-white font-poppins px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div
        id="section-3"
        className="w-full min-h-screen bg-[#FFFFFF] flex items-center justify-center py-20 relative"
        // style={{ zIndex: 20 }}
      >
        <div className="w-full flex flex-col items-center justify-center px-16">
          {/* Title */}
          <motion.h2
            className="font-poppins font-medium text-[1.5rem] tracking-[20%] text-[#FF5225] mb-4"
            animate={{
              opacity: section3Progress >= 0 ? 1 : 0,
              y: section3Progress >= 0 ? 0 : 50,
            }}
            transition={{ duration: 0.4 }}
          >
            What sets Us apart
          </motion.h2>

          {/* Subtitle (word by word) */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            {["Smart.", "Scalable.", "Strategic."].map((word, index) => (
              <motion.span
                key={word}
                className="font-poppins font-normal text-[2.5rem] text-[#3D3D3D]"
                initial={{ opacity: 0, x: index === 0 ? -80 : 80 }}
                animate={{
                  opacity:
                    section3Progress >= index + 1 ? 1 : 0,
                  x:
                    section3Progress >= index + 1
                      ? 0
                      : index === 0
                      ? -80
                      : 80,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Description */}
          <motion.p
            className="font-inter font-normal text-base text-center text-[#444444] mb-8 max-w-3xl mx-auto"
            animate={{
              opacity: section3Progress >= 4 ? 1 : 0,
              y: section3Progress >= 4 ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
          >
            We don't just deliver AI and data solutions — we engineer
            enterprise-grade intelligence systems that align with your business
            vision and drive measurable value.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center justify-center gap-6 text-center min-h-70"
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: section3Progress >= 5 ? 1 : 0,
                  y: section3Progress >= 5 ? 0 : 100,
                }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={card.icon} alt={card.title} className="w-full" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-[#FF5225]">
                  {card.title}
                </h3>
                <p className="text-sm font-poppins text-gray-600">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study 1 - Gen AI Chatbot */}
      <div
        id="section-4"
        className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB] to-white px-6 sm:px-8 lg:px-16 py-10"
      >
        <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-16 py-10">
          <div className="container mx-auto w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
            {/* Left side - Phone mockup */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="relative w-9/12 sm:w-7/12 md:w-6/12 lg:w-11/12 aspect-[0.6137/1]">
                <img
                  src="/images/YH-MN.gif"
                  alt="Gen AI-Chatbot Interface"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl font-poppins sm:text-4xl lg:text-5xl font-medium text-[#262626] mb-6">
                Gen AI-Chatbot
              </h2>
              <p className="text-sm font-poppins sm:text-base font-normal text-[#000000] mb-7 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                YourHour was originally designed to monitor and reduce daily
                screen time with alerts. Facing rising demand for mental health
                support, the team enhanced the app by integrating a
                Retrieval-Augmented Generation (RAG) AI chatbot. This "AI
                companion" continued screen-time coaching while also answering
                mental health questions, providing personalized advice on
                anxiety or depression, and offering companionship—based on how
                screen time affects health and emotional well-being.
              </p>
              <a
                href="/gen-ai-chatbot"
                className="inline-block font-poppins bg-[#231F20] text-white px-8 py-4 rounded-xs sm:py-4 text-base sm:text-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Case Study →
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Case Study 2 - ML Driven Recommendations */}
      <div
        id="section-5"
        className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#B9FFFF] to-white px-6 sm:px-8 lg:px-16 py-10"
      >
        <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-16 py-10">
          <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left side - Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl font-poppins sm:text-4xl lg:text-5xl font-medium text-[#262626] mb-6">
                ML Driven Recommendations
              </h2>
              <p className="text-sm font-poppins sm:text-base font-normal text-[#000000] mb-7 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                EarlyFoods, an e-commerce platform offering millet-based
                products for new and expecting mothers, found customers missing
                relevant items—limiting cart value. To solve this, we
                recommended an AI-driven recommendation engine. They added it on
                product pages using a hybrid of collaborative and content-based
                filtering to deliver personalized suggestions. This has boosted
                average order value, enhanced product discovery, and
                strengthened customer trust.
              </p>
              <a
                href="/early-foods"
                className="inline-block font-poppins bg-[#231F20] text-white px-8 py-4 rounded-xs sm:py-4 text-base sm:text-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Case Study →
              </a>
            </motion.div>

            {/* Right side - Laptop mockup */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="relative w-10/12 sm:w-8/12 md:w-7/12 lg:w-11/12 aspect-[11/7]">
                <img
                  src="/images/ai/early-foods.png"
                  alt="ML Driven Recommendations Interface"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Section 6 - Our Offering For Your Automation Needs */}
      <div
        id="section-6"
        className="w-full min-h-screen bg-white py-20"
      >
        {/* Initial heading phase */}
        <motion.div
          className="flex flex-col px-6 md:px-10 lg:px-16 pt-16 pb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          {/* Heading */}
          <motion.div
            className="text-center font-poppins mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2 },
            }}
          >
            <h2 className="text-2xl font-poppins md:text-3xl lg:text-4xl font-normal text-[#3D3D3D] mb-2">
              Our Offering For Your Automation Needs-
            </h2>
            <h3 className="text-2xl font-poppins md:text-3xl lg:text-4xl font-medium text-[#3D3D3D]">
              <span className="font-semibold font-poppins">
                The Stack That Powers Your Future.
              </span>
            </h3>
          </motion.div>

          {/* Responsive 4-column cards */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                {offersCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    animate={
                      section6Progress > index
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, ease: "easeOut" },
                          }
                        : { opacity: 0, y: 100 }
                    }
                    className={`group py-8 px-2.5 flex flex-col justify-between bg-white h-[34rem] border-b border-l border-t-none border-r-none border-[#000000] transition-colors duration-300`}
                  >
                    <div>
                      <h4 className="text-3xl font-normal text-[#332771] mb-6 text-left font-poppins">
                        {card.title}
                      </h4>
                      <p className="text-base text-[#D84326] mb-6 text-left leading-relaxed font-poppins">
                        {card.text}
                      </p>
                    </div>
                    <a
                      href={card.link}
                      className="w-fit flex items-center text-left text-xl font-poppins font-medium text-[#000000] hover:text-[#D84326] hover:scale-105 transition-all duration-300"
                      onMouseEnter={(e) =>
                        e.currentTarget
                          .closest(".group")
                          .classList.add("hovered")
                      }
                      onMouseLeave={(e) =>
                        e.currentTarget
                          .closest(".group")
                          .classList.remove("hovered")
                      }
                    >
                      Learn More <span className="ml-2">→</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
