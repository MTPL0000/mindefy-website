"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const CustomMLSolution = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add intersection observer for scroll-based navigation
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px', // Trigger when section is 10% from top and bottom
        threshold: 0.1
      };

      const observerCallback = (entries) => {
        // Find the section that is most visible
        let maxIntersectionRatio = 0;
        let mostVisibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      // Observe all navigation sections
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const navigationItems = [
    { id: "introduction", label: "Introduction" },
    { id: "challenges", label: "Challenges" },
    { id: "solutions", label: "Solutions" },
    { id: "technical-implementation", label: "Technical Implementation" },
    { id: "technology-stack", label: "Technology Stack" },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#E9F6F6]">
      <div className="max-w-[100rem] mx-auto flex flex-col lg:flex-row pt-10">
        {/* Left Navigation Sidebar - Hidden on mobile/tablet */}
        <div className="hidden lg:block w-80 flex-shrink-0 mr-0 lg:mr-5 mb-6 lg:mb-0">
          <div className="sticky top-10">
            <div className="py-8 bg-white shadow-lg h-full">
              <nav className="space-y-1.5">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left p-5 hover:font-semibold transition-colors duration-200 cursor-pointer ${
                      activeSection === item.id
                        ? "bg-[#FAFFFA] text-[#2B7575] font-semibold text-base border-l-4"
                        : "text-[#52B7B7] bg-[#FAFFFA] font-medium text-base border-l-4"
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
        <div className="flex-1 min-w-0">
          {/* Introduction Section */}
          <section
            id="introduction"
            className="mb-16 sm:mb-20 lg:mb-24 px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10"
          >
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <p className="text-sm sm:text-base font-bold text-center mb-3 sm:mb-4 text-[#2B7575] uppercase tracking-wide sm:tracking-widest">
                  Early Foods: Boosting Sales and Trust
                </p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-10 lg:mb-12 text-[#000000] leading-tight">
                  ML Driven Recommendations
                </p>
                <p className="text-[#000000] mb-4 sm:mb-6 font-normal text-sm sm:text-base leading-relaxed text-left px-2 sm:px-0">
                  EarlyFoods, an e-commerce platform offering millet-based
                  products for new and expecting mothers, found customers
                  missing relevant items—limiting cart value. To solve this, we
                  recommended them an AI-driven recommendation engine. They
                  added it on product pages using a hybrid of collaborative and
                  content-based filtering to deliver personalized suggestions.
                  This has boosted average order value, enhanced product
                  discovery, and strengthened customer trust.
                </p>
              </div>

              <div className="relative aspect-[1002/552] w-full overflow-hidden ">
                <Image
                  src="/images/YH-CB.webp"
                  alt="EarlyFoods AI recommendation system interface showing product suggestions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section id="challenges" className="mb-24 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-semibold text-[#2B7575] mb-4">
                  CHALLENGES
                </h2>
                <h1 className="text-[1.25rem] font-normal text-[#333333]">
                  Boosting Product Discovery for Busy Mothers
                </h1>
              </div>

              {/* Challenge Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {/* Limited Browsing Time */}
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mx-auto mb-4 w-[7.81rem] h-[7.81rem]">
                    <Image
                      src="/images/YH-CB1.webp"
                      alt="Limited Browsing Time"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Limited Browsing Time
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-2">
                    Expectant and new mothers had little time to explore, often
                    skipping detailed product info and missing key nutritional
                    items.
                  </p>
                </div>

                {/* Lower Cart Value */}
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mx-auto mb-4 w-[7.81rem] h-[7.81rem]">
                    <Image
                      src="/images/YH-CB2.webp"
                      alt="Lower Cart Value"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Lower Cart Value
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-2">
                    Fewer product views led to fewer items added per session,
                    reducing average order value and overall customer
                    satisfaction.
                  </p>
                </div>

                {/* Need for Smart Suggestions */}
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mx-auto mb-4 w-[7.81rem] h-[7.81rem]">
                    <Image
                      src="/images/YH-CB3.webp"
                      alt="Need for Smart Suggestions"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Need for Smart Suggestions
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-2">
                    Research shows helpful recommendations increase cart
                    additions by 45%, highlighting the importance of guided
                    discovery.
                  </p>
                </div>

                {/* Risk to Conversions and AOV */}
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mx-auto mb-4 w-[7.81rem] h-[7.81rem]">
                    <Image
                      src="/images/YH-CB4.webp"
                      alt="Risk to Conversions and AOV"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Risk to Conversions and AOV
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-2">
                    Without personalized suggestions, Early Foods risked lower
                    conversion rates and reduced revenue, as seen across the
                    retail industry.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          {/* Solutions Section */}
          <section id="solutions" className="mb-24 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-[3.75rem]">
                <h2 className="text-2xl font-semibold uppercase text-[#2B7575]">
                  Solutions
                </h2>
                <h1 className="text-[1.25rem] font-normal text-[#333333] max-w-[45.25rem] mx-auto">
                  We added an AI-powered “You may also like” section that shows
                  smart product suggestions based on your browsing and
                  preferences.
                </h1>
              </div>

              {/* Solution Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
                {/* Collaborative Filtering */}
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mx-auto mb-4 w-[10.375rem] h-[7.81rem]">
                    <Image
                      src="/images/YH-CB5.webp"
                      alt="Collaborative Filtering"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Collaborative Filtering
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-0">
                    We built a user–product interaction matrix from past
                    purchases and browsing data. Using cosine similarity, the
                    model finds users with similar tastes to recommend
                    items—capturing the "wisdom of the crowd."
                  </p>
                </div>

                {/* Content-Based Filtering */}
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mx-auto mb-4 w-[10.375rem] h-[7.81rem]">
                    <Image
                      src="/images/YH-CB6.webp"
                      alt="Content-Based Filtering"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Content-Based Filtering
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-0">
                    Each product's attributes (e.g., ingredients, nutrition
                    facts, goals) are vectorized to build a feature profile. The
                    system then recommends items with similar ingredients or
                    health benefits.
                  </p>
                </div>

                {/* Nutritional Relevance */}
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mx-auto mb-4 w-[10.375rem] h-[7.81rem]">
                    <Image
                      src="/images/YH-CB7.webp"
                      alt="Nutritional Relevance"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Nutritional Relevance
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-0">
                    To suit Early Foods' audience, the engine filters by
                    category (e.g., pregnancy-safe) and ensures diversity,
                    avoiding near-duplicates to keep recommendations valuable.
                  </p>
                </div>

                {/* Real-Time Integration */}
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mx-auto mb-4 w-[10.375rem] h-[7.81rem]">
                    <Image
                      src="/images/YH-CB8.webp"
                      alt="Real-Time Integration"
                      fill
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#000000]">
                    Real-Time Integration
                  </h3>
                  <p className="text-[#000000] text-sm font-light leading-relaxed px-4 sm:px-0">
                    Built in Python with Pandas and Scikit-learn, the pipeline
                    runs on each page view, instantly showing AI-driven
                    suggestions to help users discover products without leaving
                    the page.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation Section */}
          <section id="technical-implementation" className="mb-24 ">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-semibold text-[#2B7575] mb-6">
                  TECHNICAL IMPLEMENTATION
                </h2>
                <h1 className="text-[1.25rem] font-normal text-[#333333]">
                  The recommendation engine was built as follows (high-level
                  overview):
                </h1>
              </div>

              {/* Implementation Steps Grid */}
              <div className="flex flex-wrap justify-center gap-x-20 gap-y-8">
                {/* Step 1 */}
                <div className="bg-[#F7FCFC] rounded-2xl border-2 border-[#3894FF40] w-[13.75rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-TC1.svg"
                        alt="Data Collection"
                        fill
                      />
                    </div>
                    <div className="text-7xl ml-3.5 font-normal text-[#3894FF26]">
                      1
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-[3.25rem] text-[#0D223A]">
                    Data Collection
                  </h3>
                </div>

                {/* Step 2 */}
                <div className="bg-[#F7FCFC] rounded-2xl border-2 border-[#3894FF40] w-[13.75rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-TC2.svg"
                        alt="Feature Engineering"
                        fill
                      />
                    </div>
                    <div className="text-7xl ml-3.5 font-normal text-[#3894FF26]">
                      2
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 text-[#0D223A]">
                    Feature Engineering
                  </h3>
                </div>

                {/* Step 3 */}
                <div className="bg-[#F7FCFC] rounded-2xl border-2 border-[#3894FF40] w-[13.75rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-TC3.svg"
                        alt="Similarity Computation"
                        fill
                      />
                    </div>
                    <div className="text-7xl ml-3.5 font-normal text-[#3894FF26]">
                      3
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 text-[#0D223A]">
                    Similarity <br /> Computation
                  </h3>
                </div>

                {/* Step 4 */}
                <div className="bg-[#F7FCFC] rounded-2xl border-2 border-[#3894FF40] w-[13.75rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-TC4.svg"
                        alt="Recommendation Logic"
                        fill
                      />
                    </div>
                    <div className="text-7xl ml-3.5 font-normal text-[#3894FF26]">
                      4
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 text-[#0D223A]">
                    Recommendation <br /> Logic
                  </h3>
                </div>

                {/* Step 5 */}
                <div className="bg-[#F7FCFC] rounded-2xl border-2 border-[#3894FF40] w-[13.75rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-TC5.svg"
                        alt="Real-Time Service"
                        fill
                      />
                    </div>
                    <div className="text-7xl ml-3.5 font-normal text-[#3894FF26]">
                      5
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 mb-[3.75rem] text-[#0D223A]">
                    Real-Time Service
                  </h3>
                </div>

                {/* Step 6 */}
                <div className="bg-[#F7FCFC] rounded-2xl border-2 border-[#3894FF40] w-[13.75rem] relative">
                  <div className="flex items-center justify-between">
                    <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                      <Image
                        src="/images/YH-TC6.svg"
                        alt="Monitoring & Retraining"
                        fill
                      />
                    </div>
                    <div className="text-7xl ml-3.5 font-normal text-[#3894FF26]">
                      6
                    </div>
                  </div>
                  <h3 className="text-base font-medium mx-6 text-[#0D223A]">
                    Monitoring & <br /> Retraining
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section id="technology-stack" className="mb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2B7575]">
                  TECHNOLOGY STACK
                </h2>
              </div>

              {/* First Row - Languages, Monitoring, Data Storage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
                {/* Languages */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
                    Languages
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
                          src="/images/YH-TS2.svg"
                          alt="Jupyter notebook"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        Jupyter
                      </p>
                    </div>
                  </div>
                </div>

                {/* Monitoring */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
                    Monitoring
                  </h3>
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image
                          src="/images/YH-TS3.svg"
                          alt="AWS SageMaker"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        SAGEMAKER
                      </p>
                    </div>
                  </div>
                </div>

                {/* Data Storage */}
                <div className="text-center sm:col-span-2 lg:col-span-1">
                  <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
                    Data Storage
                  </h3>
                  <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image src="/images/YH-TS4.svg" alt="AWS RDS" fill />
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base uppercase font-normal text-[#000000] leading-tight">
                        RELATIONAL
                        <br />
                        DATABASE
                        <br />
                        SERVICE
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image src="/images/YH-TS5.svg" alt="AWS S3" fill />
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base uppercase font-normal text-[#000000] leading-tight">
                        SIMPLE
                        <br />
                        STORAGE
                        <br />
                        SERVICE
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
                    Deployment/Cloud
                  </h3>
                  <div className="grid grid-cols-2 sm:flex sm:justify-center sm:gap-4 lg:gap-8 gap-4 sm:flex-wrap">
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image src="/images/YH-TS6.svg" alt="AWS Lambda" fill />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        LAMBDA
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image
                          src="/images/YH-TS3.svg"
                          alt="AWS SageMaker"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        SAGEMAKER
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image src="/images/YH-TS8.svg" alt="AWS Glue" fill />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        GLUE
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image
                          src="/images/YH-TS9.svg"
                          alt="AWS Kinesis"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        KINESIS
                      </p>
                    </div>
                  </div>
                </div>

                {/* Front-End Integration */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-gray-800">
                    Front-End Integration
                  </h3>
                  <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image
                          src="/images/YH-TS10.svg"
                          alt="JavaScript"
                          fill
                        />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        JAVASCRIPT
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                        <Image src="/images/YH-TS11.svg" alt="HTML" fill />
                      </div>
                      <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                        HTML
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

export default CustomMLSolution;
