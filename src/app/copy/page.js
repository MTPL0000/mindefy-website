"use client";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

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
  const [currentSection, setCurrentSection] = useState(0);
  const [allAnimationsComplete, setAllAnimationsComplete] = useState(false);
  const [canScrollBack, setCanScrollBack] = useState(false);

  // Simplified state management
  const [sectionState, setSectionState] = useState({
    hasInteracted: false,
    zoomProgress: 0,
    isTransitioning: false,
    scrollDisabled: false,
    section2AnimationStarted: false,
    section3AnimationFinished: false,
    section5ScrollProgress: 0,
    section5HasStarted: false,
    section1ZoomedOut: false,
    section3ScrollProgress: 0,
    section3HasStarted: false,
  });

  // Use Framer Motion's animation controls
  const zoomControls = useAnimation();
  const contentZoomControls = useAnimation();
  const cardControls = useAnimation();

  // Improved scroll handling with useCallback
  const handleSectionTransition = useCallback(
    (direction, fromSection) => {
      if (sectionState.isTransitioning) return;

      // Special handling for section 5 scroll-based animation
      if (fromSection === 5) {
        if (direction === "down" && sectionState.section5ScrollProgress < 1) {
          // Progress through section 5 animation
          const newProgress = Math.min(
            sectionState.section5ScrollProgress + 0.25,
            1
          );
          setSectionState((prev) => ({
            ...prev,
            section5ScrollProgress: newProgress,
            section5HasStarted: true,
          }));

          // Check if we've completed all animations
          if (newProgress >= 1) {
            setTimeout(() => {
              setAllAnimationsComplete(true);
              setCanScrollBack(true);
            }, 800); // Wait for animation to complete
          }
          return;
        } else if (
          direction === "up" &&
          sectionState.section5ScrollProgress > 0
        ) {
          // Go backward in section 5 animation
          setSectionState((prev) => ({
            ...prev,
            section5ScrollProgress: Math.max(
              prev.section5ScrollProgress - 0.25,
              0
            ),
          }));
          setAllAnimationsComplete(false);
          return;
        }
      }

      // handling for Cards Section
      // If we're in section 2, use internal progress steps first (0..3),
      // and only when progress is already at max (3) allow transition to the next section.
      if (fromSection === 2) {
        if (direction === "down") {
          if (sectionState.section3ScrollProgress < 6) {
            // Increment internal staged animation progress (title -> subtitle -> description -> cards)
            setSectionState((prev) => ({
              ...prev,
              section3ScrollProgress: prev.section3ScrollProgress + 1,
              section3HasStarted: true,
            }));
            return; // stay in section 2
          }
        } else if (direction === "up") {
          if (sectionState.section3ScrollProgress > 0) {
            // Go back inside section 2
            setSectionState((prev) => ({
              ...prev,
              section3ScrollProgress: prev.section3ScrollProgress - 1,
            }));
            return; // stay in section 2
          }
          // else: progress === 0 -> fall through to normal transitions (move to prev section)
        }
      }

      // Normal transitions map (keeps your original flow)
      const transitions = {
        0: { down: 1 }, // Video → Image
        1: { up: 0, down: 2 }, // Image ↔ Video/Cards
        2: { up: 1, down: 3 }, // Cards ↔ Image/CaseStudy1
        3: { up: 2, down: 4 }, // CaseStudy1 ↔ Cards/CaseStudy2
        4: { up: 3, down: 5 }, // CaseStudy2 ↔ CaseStudy1/Offerings
        5: { up: 4 }, // Offerings → CaseStudy2
      };

      const nextSection = transitions[fromSection]?.[direction];
      if (nextSection !== undefined) {
        setSectionState((prev) => ({ ...prev, isTransitioning: true }));

        // Reset card-section progress when leaving section 2 (entering or leaving)
        if (fromSection === 2 || nextSection === 2) {
          setSectionState((prev) => ({
            ...prev,
            section3ScrollProgress:
              nextSection === 2 ? 0 : prev.section3ScrollProgress,
            section3HasStarted:
              nextSection === 2 ? false : prev.section3HasStarted,
          }));
        }

        setCurrentSection(nextSection);

        // Existing special-case zoom-out handling when moving FROM 2 -> 1 (backwards),
        // keep your previous 'zoomControls' logic. If you had other logic tied to specific
        // transitions (like auto-starting section 5), keep them below as you already had.

        // Your existing zoom-out on transition to section 1 (backward) kept here:
        if (nextSection === 1 && direction === "up") {
          setSectionState((prev) => ({ ...prev, scrollDisabled: true }));

          // Zoom out animation (reverse of zoom in)
          zoomControls.start({
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 1.5, ease: "easeInOut" },
          });

          contentZoomControls.start({
            scale: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut" },
          });

          // Mark that zoom out is complete and re-enable scroll
          setTimeout(() => {
            setSectionState((prev) => ({
              ...prev,
              scrollDisabled: false,
              section1ZoomedOut: true,
            }));
          }, 1500);
        }

        // Reset/start section5 state like before
        if (fromSection === 5 || nextSection === 5) {
          setSectionState((prev) => ({
            ...prev,
            section5ScrollProgress:
              nextSection === 5 ? 0 : prev.section5ScrollProgress,
            section5HasStarted:
              nextSection === 5 ? false : prev.section5HasStarted,
          }));

          // Auto-start section 5 animation when entering (only show first card)
          if (nextSection === 5) {
            setTimeout(() => {
              setSectionState((prev) => ({
                ...prev,
                section5HasStarted: true,
              }));
              // Only show AI Solutions card by default, others require scroll
            }, 1200); // Increased delay to allow centered heading to fully disappear
          }
        }

        // Finish transition lock after animation time
        setTimeout(() => {
          setSectionState((prev) => ({ ...prev, isTransitioning: false }));
        }, 1000);
      }
    },
    [
      sectionState.isTransitioning,
      sectionState.section5ScrollProgress,
      sectionState.section3ScrollProgress,
      zoomControls,
      contentZoomControls,
    ]
  );

  // Simplified zoom animation using Framer Motion
  const triggerZoomAnimation = useCallback(async () => {
    if (currentSection !== 1 || sectionState.hasInteracted) return;

    setSectionState((prev) => ({
      ...prev,
      hasInteracted: true,
      scrollDisabled: true,
    }));

    // Use Framer Motion for smooth zoom - animate both background and content together
    const zoomPromise1 = zoomControls.start({
      scale: 15,
      opacity: 0.3,
      filter: "blur(8px)",
      transition: { duration: 2.5, ease: "easeOut" },
    });

    const zoomPromise2 = contentZoomControls.start({
      scale: 15,
      opacity: 0,
      transition: { duration: 2.5, ease: "easeOut" },
    });

    // Wait for both animations to complete
    await Promise.all([zoomPromise1, zoomPromise2]);

    // Auto-transition to next section
    setCurrentSection(2);

    // Mark section 2 animation as started
    setSectionState((prev) => ({ ...prev, section2AnimationStarted: true }));

    // Trigger card animations
    cardControls.start((i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 + 0.5, duration: 0.5 },
    }));

    // Re-enable scroll after all card animations complete
    setTimeout(() => {
      setSectionState((prev) => ({
        ...prev,
        scrollDisabled: false,
        section3AnimationFinished: true,
      }));
    }, 1100); // 6 cards * 100ms delay + 500ms duration + 100ms buffer
  }, [
    currentSection,
    sectionState.hasInteracted,
    zoomControls,
    contentZoomControls,
    cardControls,
  ]);

  // Improved scroll event handling
  useEffect(() => {
    let scrollTimeout;

    const handleWheel = (e) => {
      // If all animations are complete, allow native scroll
      if (allAnimationsComplete) {
        return; // Let browser handle scroll naturally
      }

      e.preventDefault();

      // Check if scroll is disabled
      if (sectionState.scrollDisabled) {
        return;
      }

      // Debounce scroll events
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const direction = e.deltaY > 0 ? "down" : "up";

        // Special handling for image section - forward scroll only
        if (
          currentSection === 1 &&
          !sectionState.hasInteracted &&
          direction === "down"
        ) {
          triggerZoomAnimation();
          return;
        }

        handleSectionTransition(direction, currentSection);
      }, 50);
    };

    // Handle scroll back to animations when user scrolls up from normal scroll
    const handleScrollBack = () => {
      if (allAnimationsComplete && canScrollBack) {
        const scrollPosition =
          window.scrollY || containerRef.current?.scrollTop || 0;

        // If user scrolls to the very top, reset to animation mode
        if (scrollPosition === 0) {
          setAllAnimationsComplete(false);
          setCanScrollBack(false);
          setCurrentSection(5); // Return to section 5
          setSectionState((prev) => ({
            ...prev,
            section5ScrollProgress: 1,
            section5HasStarted: true,
          }));
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("scroll", handleScrollBack, { passive: true });

      return () => {
        container.removeEventListener("wheel", handleWheel);
        window.removeEventListener("scroll", handleScrollBack);
        clearTimeout(scrollTimeout);
      };
    }
  }, [
    currentSection,
    sectionState,
    handleSectionTransition,
    triggerZoomAnimation,
    allAnimationsComplete,
    canScrollBack,
  ]);

  // Animation variants for cleaner code
  const sectionVariants = {
    visible: { opacity: 1, pointerEvents: "auto" },
    hidden: { opacity: 0, pointerEvents: "none" },
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-screen ${
        allAnimationsComplete ? "overflow-y-auto" : "h-screen overflow-hidden"
      }`}
    >
      {/* Video Section */}
      <motion.div
        className="absolute inset-0 h-screen"
        variants={sectionVariants}
        animate={currentSection === 0 ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        style={{ display: allAnimationsComplete ? "none" : "block" }}
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
      </motion.div>

      {/* Image Zoom Section */}
      <motion.div
        className="absolute inset-0 h-screen"
        variants={sectionVariants}
        animate={currentSection === 1 ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        style={{ display: allAnimationsComplete ? "none" : "block" }}
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
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={
              currentSection === 1
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.8, y: 50 }
            }
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
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="absolute inset-0 bg-gray-100 h-screen"
        variants={sectionVariants}
        animate={currentSection === 2 ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        style={{ display: allAnimationsComplete ? "none" : "block" }}
      >
        <div className="w-full h-screen flex flex-col items-center justify-center px-16">
          {/* Title */}
          <motion.h2
            className="font-poppins font-medium text-[1.5rem] tracking-[20%] text-[#FF5225] mb-4"
            animate={{
              opacity: sectionState.section3ScrollProgress >= 0 ? 1 : 0,
              y: sectionState.section3ScrollProgress >= 0 ? 0 : 50,
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
                    sectionState.section3ScrollProgress >= index + 1 ? 1 : 0,
                  x:
                    sectionState.section3ScrollProgress >= index + 1
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
              opacity: sectionState.section3ScrollProgress >= 4 ? 1 : 0,
              y: sectionState.section3ScrollProgress >= 4 ? 0 : 50,
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
                animate={{
                  opacity: sectionState.section3ScrollProgress >= 5 ? 1 : 0,
                  y: sectionState.section3ScrollProgress >= 5 ? 0 : 100,
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
      </motion.div>

      {/* Case Study 1 - Gen AI Chatbot */}
      <motion.div
        className="absolute inset-0 bg-white h-screen"
        variants={sectionVariants}
        animate={currentSection === 3 ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        style={{ display: allAnimationsComplete ? "none" : "block" }}
      >
        <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB] to-white px-6 sm:px-8 lg:px-16 py-12">
          <div className="container mx-auto w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left side - Phone mockup */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-9/12 sm:w-7/12 md:w-6/12 lg:w-10/12 aspect-[0.6137/1]">
                <img
                  src="/images/YH-MN.gif"
                  alt="Gen AI-Chatbot Interface"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 text-center lg:text-left lg:pl-12">
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
            </div>
          </div>
        </section>
      </motion.div>

      {/* Case Study 2 - ML Driven Recommendations */}
      <motion.div
        className="absolute inset-0 bg-white h-screen"
        variants={sectionVariants}
        animate={currentSection === 4 ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        style={{ display: allAnimationsComplete ? "none" : "block" }}
      >
        <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#B9FFFF] to-white px-6 sm:px-8 lg:px-16 py-12">
          <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left side - Content */}
            <div className="flex-1 text-center lg:text-left lg:pr-12">
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
            </div>

            {/* Right side - Laptop mockup */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-10/12 sm:w-8/12 md:w-7/12 lg:w-10/12 aspect-[11/7]">
                <img
                  src="/images/ai/early-foods.png"
                  alt="ML Driven Recommendations Interface"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Section 5 - Our Offering For Your Automation Needs */}
      <motion.div
        className={`${
          allAnimationsComplete ? "relative" : "absolute inset-0"
        } bg-white ${!allAnimationsComplete ? "h-screen" : ""}`}
        variants={sectionVariants}
        animate={
          currentSection === 5 || allAnimationsComplete ? "visible" : "hidden"
        }
        transition={{ duration: 0.8 }}
      >
        {/* Initial heading phase */}
        {!sectionState.section5HasStarted ? (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={
              currentSection === 5
                ? { opacity: 1, transition: { duration: 0.8 } }
                : { opacity: 0 }
            }
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                currentSection === 5
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.8, delay: 0.3 },
                    }
                  : { opacity: 0, scale: 0.8 }
              }
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
          </motion.div>
        ) : (
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
                        currentSection === 5 &&
                        sectionState.section5ScrollProgress >= index * 0.25
                          ? {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.8, ease: "easeOut" },
                            }
                          : { opacity: 0, y: 100 }
                      }
                      className={`py-8 px-2.5 flex flex-col justify-between bg-white h-[37.5rem] border-b border-l border-t-none border-r-none border-[#000000]`}
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
                        className="w-fit flex items-center text-left text-xl font-poppins font-medium text-[#000000] hover:text-[#4A5568] transition-colors"
                      >
                        Learn More <span className="ml-2">→</span>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
