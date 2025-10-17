'use client';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import FullScreenCaseStudies from '../components/HomePage/FullScreenCaseStudies';

export default function ImprovedCopyPage() {
    const containerRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    
    // Simplified state management
    const [sectionState, setSectionState] = useState({
        hasInteracted: false,
        zoomProgress: 0,
        isTransitioning: false,
        scrollDisabled: false,
        section2AnimationStarted: false,
        section3AnimationFinished: false,
        section5ScrollProgress: 0,
        section5HasStarted: false
    });
    
    // Use Framer Motion's animation controls
    const zoomControls = useAnimation();
    const contentZoomControls = useAnimation();
    const cardControls = useAnimation();
    
    // Improved scroll handling with useCallback
    const handleSectionTransition = useCallback((direction, fromSection) => {
        if (sectionState.isTransitioning) return;
        
        // Special handling for section 5 scroll-based animation
        if (fromSection === 5) {
            if (direction === 'down' && sectionState.section5ScrollProgress < 1) {
                // Progress through section 5 animation
                setSectionState(prev => ({
                    ...prev,
                    section5ScrollProgress: Math.min(prev.section5ScrollProgress + 0.25, 1),
                    section5HasStarted: true
                }));
                return;
            } else if (direction === 'up' && sectionState.section5ScrollProgress > 0) {
                // Go backward in section 5 animation
                setSectionState(prev => ({
                    ...prev,
                    section5ScrollProgress: Math.max(prev.section5ScrollProgress - 0.25, 0)
                }));
                return;
            }
        }
        
        setSectionState(prev => ({ ...prev, isTransitioning: true }));
        
        const transitions = {
            0: { down: 1 }, // Video → Image
            1: { up: 0, down: 2 }, // Image ↔ Video/Cards
            2: { up: 1, down: 3 }, // Cards ↔ Image/CaseStudy1
            3: { up: 2, down: 4 }, // CaseStudy1 ↔ Cards/CaseStudy2
            4: { up: 3, down: 5 }, // CaseStudy2 ↔ CaseStudy1/Offerings
            5: { up: 4 } // Offerings → CaseStudy2
        };
        
        const nextSection = transitions[fromSection]?.[direction];
        if (nextSection !== undefined) {
            setCurrentSection(nextSection);
            
            // Reset section 5 state when leaving or entering
            if (fromSection === 5 || nextSection === 5) {
                setSectionState(prev => ({
                    ...prev,
                    section5ScrollProgress: nextSection === 5 ? 0 : prev.section5ScrollProgress,
                    section5HasStarted: nextSection === 5 ? false : prev.section5HasStarted
                }));
                
                // Auto-start section 5 animation when entering (only show first card)
                if (nextSection === 5) {
                    setTimeout(() => {
                        setSectionState(prev => ({ ...prev, section5HasStarted: true }));
                        // Only show AI Solutions card by default, others require scroll
                    }, 500);
                }
            }
            
            // Reset transition state after animation
            setTimeout(() => {
                setSectionState(prev => ({ ...prev, isTransitioning: false }));
            }, 1000);
        }
    }, [sectionState.isTransitioning, sectionState.section5ScrollProgress]);
    
    // Simplified zoom animation using Framer Motion
    const triggerZoomAnimation = useCallback(async () => {
        if (currentSection !== 1 || sectionState.hasInteracted) return;
        
        setSectionState(prev => ({ ...prev, hasInteracted: true, scrollDisabled: true }));
        
        // Use Framer Motion for smooth zoom - animate both background and content together
        const zoomPromise1 = zoomControls.start({
            scale: 15,
            opacity: 0.3,
            filter: 'blur(8px)',
            transition: { duration: 2.5, ease: 'easeOut' }
        });
        
        const zoomPromise2 = contentZoomControls.start({
            scale: 15,
            opacity: 0,
            transition: { duration: 2.5, ease: 'easeOut' }
        });
        
        // Wait for both animations to complete
        await Promise.all([zoomPromise1, zoomPromise2]);
        
        // Auto-transition to next section
        setCurrentSection(2);
        
        // Mark section 2 animation as started
        setSectionState(prev => ({ ...prev, section2AnimationStarted: true }));
        
        // Trigger card animations
        cardControls.start(i => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * 0.1 + 0.5, duration: 0.5 }
        }));
        
        // Re-enable scroll after all card animations complete
        setTimeout(() => {
            setSectionState(prev => ({ 
                ...prev, 
                scrollDisabled: false, 
                section3AnimationFinished: true 
            }));
        }, 1100); // 6 cards * 100ms delay + 500ms duration + 100ms buffer
    }, [currentSection, sectionState.hasInteracted, zoomControls, contentZoomControls, cardControls]);
    
    // Improved scroll event handling
    useEffect(() => {
        let scrollTimeout;
        
        const handleWheel = (e) => {
            e.preventDefault();
            
            // Check if scroll is disabled
            if (sectionState.scrollDisabled) {
                return;
            }
            
            // Debounce scroll events
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const direction = e.deltaY > 0 ? 'down' : 'up';
                
                // Special handling for image section
                if (currentSection === 1 && !sectionState.hasInteracted) {
                    triggerZoomAnimation();
                    return;
                }
                
                handleSectionTransition(direction, currentSection);
            }, 50);
        };
        
        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => {
                container.removeEventListener('wheel', handleWheel);
                clearTimeout(scrollTimeout);
            };
        }
    }, [currentSection, sectionState, handleSectionTransition, triggerZoomAnimation]);
    
    // Animation variants for cleaner code
    const sectionVariants = {
        visible: { opacity: 1, pointerEvents: 'auto' },
        hidden: { opacity: 0, pointerEvents: 'none' }
    };
    
    const cardVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * 0.1, duration: 0.5 }
        })
    };
    
    const cardData = [
        {
            icon: '/images/ai/icons.png',
            title: 'Advanced AI Engineering',
            description: 'Expertise across NLP, generative AI, computer vision, reinforcement learning — engineered to scale, secure, and perform'
        },
        {
            icon: '/images/ai/icons-2.png',
            title: 'Custom, Not Off-the-Shelf',
            description: 'Solutions tailored to your data, ecosystem, and KPIs — no cookie-cutter models'
        },
        {
            icon: '/images/ai/icons-3.png',
            title: 'Cloud- and Edge-Ready',
            description: 'Deploy AI where it matters — on cloud, edge, or hybrid environments — seamlessly integrated into your infrastructure'
        },
        {
            icon: '/images/ai/icons-4.png',
            title: 'Business-Driven Outcomes',
            description: 'We align every AI solution with real-world metrics — operational efficiency, cost savings, predictive insights'
        },
        {
            icon: '/images/ai/icons-5.png',
            title: 'Robust MLOps & Governance',
            description: 'Continuous monitoring, compliance, and governability built in — designed for sustainable ROI'
        },
        {
            icon: '/images/ai/icons-6.png',
            title: 'Cross-Functional Expertise',
            description: 'Teams that combine data engineering, AI, cloud and domain knowledge to drive full-stack execution'
        }
    ];
    
    return (
        <div ref={containerRef} className="relative h-screen w-screen overflow-hidden">
            {/* Video Section */}
            <motion.div 
                className="absolute inset-0"
                variants={sectionVariants}
                animate={currentSection === 0 ? 'visible' : 'hidden'}
                transition={{ duration: 0.8 }}
            >
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="/images/hero_copy.mp4" type="video/mp4" />
                </video>
            </motion.div>
            
            {/* Image Zoom Section */}
            <motion.div 
                className="absolute inset-0"
                variants={sectionVariants}
                animate={currentSection === 1 ? 'visible' : 'hidden'}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/bg-copy.png)' }}
                    animate={zoomControls}
                    initial={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                />
                
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <motion.div 
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={currentSection === 1 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            animate={contentZoomControls}
                            initial={{ scale: 1, opacity: 1 }}
                        >
                        <h1 className="mb-6 font-poppins text-[40px] font-normal">
                            <div>Built With Data. Powered By AI.</div>
                            <div className="font-semibold mt-2">Delivered For Impact.</div>
                        </h1>
                        
                        <div className="space-y-4 text-lg text-gray-700 mb-8">
                            <p>AI turns data into action. We help businesses unlock that power — through tailored, scalable solutions.</p>
                            <p>We architect intelligence from raw data. Precision-built. Algorithm-driven. Future-proof.</p>
                            <p>What if your data could think? We don't just imagine it — we engineer it.</p>
                            <p>Intelligence isn't just learned. It's designed — through data, algorithms, and intent.</p>
                        </div>
                        
                        <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                            Learn More
                        </button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            
            {/* Cards Section */}
            <motion.div 
                className="absolute inset-0 bg-gray-100"
                variants={sectionVariants}
                animate={currentSection === 2 ? 'visible' : 'hidden'}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full h-screen flex flex-col items-center justify-center px-16">
                    <motion.h2 
                        className="font-poppins font-medium text-[1.5rem] tracking-[20%] text-[#FF5225] mb-4"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={currentSection === 2 ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        What sets Us apart
                    </motion.h2>
                    
                    <motion.div 
                        className="flex justify-center items-center space-x-4 mb-8"
                        initial={{ opacity: 0 }}
                        animate={currentSection === 2 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {['Smart.', 'Scalable.', 'Strategic.'].map((word, index) => (
                            <motion.span 
                                key={word}
                                className="font-poppins font-normal text-[2rem] text-[#3D3D3D]"
                                initial={{ x: 100, opacity: 0 }}
                                animate={currentSection === 2 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 + (index * 0.2) }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.div>
                    
                    <motion.p 
                        className="font-inter text-base text-center text-[#444444] mb-8 max-w-3xl mx-auto"
                        initial={{ y: 50, opacity: 0 }}
                        animate={currentSection === 2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.7, delay: 1.5 }}
                    >
                        We don't just deliver AI and data solutions — we engineer enterprise-grade intelligence systems that align with your business vision and drive measurable value
                    </motion.p>
                    
                    <div className="grid grid-cols-3 gap-6 max-w-6xl">
                        {cardData.map((card, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white p-4 rounded-[1.25rem] shadow-md flex flex-col items-center text-center"
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate={cardControls}
                            >
                                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                                    <img src={card.icon} alt={card.title} className="w-full" />
                                </div>
                                <h3 className="text-base font-semibold text-[#FF5225] mb-1">{card.title}</h3>
                                <p className="text-xs text-gray-600">{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            
            {/* Case Study 1 - Gen AI Chatbot */}
            <motion.div 
                className="absolute inset-0 bg-white"
                variants={sectionVariants}
                animate={currentSection === 3 ? 'visible' : 'hidden'}
                transition={{ duration: 0.8 }}
            >
                <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#A2E3FB] to-white px-8 lg:px-16">
                    <div className="container mx-auto max-w-7xl flex items-center justify-between">
                        {/* Left side - Phone mockup */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-11/12 aspect-[0.6137/1]">
                                <img 
                                    // src="/images/ai/chat-bot.png" 
                                    src="/images/YH-MN.gif"
                                    alt="Gen AI-Chatbot Interface" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Right side - Content */}
                        <div className="flex-1 pl-12">
                            <h2 className="text-4xl lg:text-5xl font-medium text-[#262626] mb-7">
                                Gen AI-Chatbot
                            </h2>
                            <p className="text-base font-normal text-[#000000] mb-7 leading-relaxed max-w-2xl">
                                YourHour was originally designed to monitor and reduce daily screen time with alerts. Facing rising demand for mental health support, the team enhanced the app by integrating a Retrieval-Augmented Generation (RAG) AI chatbot. This "AI companion" continued screen-time coaching while also answering mental health questions, providing personalized advice on anxiety or depression, and offering companionship—based on how screen time affects health and emotional well-being.
                            </p>
                            <a 
                                href="/gen-ai-chatbot" 
                                className="inline-block bg-[#231F20] text-white px-6 py-5 text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                            >
                                Case Study →
                            </a>
                        </div>
                    </div>
                </section>
            </motion.div>
            
            {/* Case Study 2 - ML Driven Recommendations */}
            <motion.div 
                className="absolute inset-0 bg-white"
                variants={sectionVariants}
                animate={currentSection === 4 ? 'visible' : 'hidden'}
                transition={{ duration: 0.8 }}
            >
                <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#B9FFFF] to-white px-8 lg:px-16">
                    <div className="container mx-auto max-w-7xl flex items-center justify-between">
                        {/* Left side - Content */}
                        <div className="flex-1 pr-12">
                            <h2 className="text-4xl lg:text-5xl font-medium text-[#262626] mb-7">
                                ML Driven Recommendations
                            </h2>
                            <p className="text-base font-normal text-[#000000] mb-7 leading-relaxed max-w-2xl">
                                EarlyFoods, an e-commerce platform offering millet-based products for new and expecting mothers, found customers missing relevant items—limiting cart value. To solve this, we recommended an AI-driven recommendation engine. They added it on product pages using a hybrid of collaborative and content-based filtering to deliver personalized suggestions. This has boosted average order value, enhanced product discovery, and strengthened customer trust.
                            </p>
                            <a 
                                href="/early-foods" 
                                className="inline-block bg-[#231F20] text-white px-6 py-5 text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                            >
                                Case Study →
                            </a>
                        </div>
                        
                        {/* Right side - Laptop mockup */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-lg aspect-[11/7]">
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
                className="absolute inset-0 bg-white"
                variants={sectionVariants}
                animate={currentSection === 5 ? 'visible' : 'hidden'}
                transition={{ duration: 0.8 }}
            >
                {/* Step 1: Heading appears centered initially */}
                 <motion.div
                     className="absolute inset-0 flex items-center justify-center z-10"
                     initial={{ opacity: 0 }}
                     animate={currentSection === 5 && !sectionState.section5HasStarted ? {
                         opacity: 1,
                         transition: { duration: 0.8 }
                     } : { opacity: 0, transition: { duration: 0.5 } }}
                 >
                     <motion.div
                         className="text-center"
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={currentSection === 5 && !sectionState.section5HasStarted ? {
                             opacity: 1,
                             scale: 1,
                             transition: { duration: 0.8, delay: 0.3 }
                         } : { opacity: 0, scale: 0.8 }}
                     >
                         <h2 className="text-3xl lg:text-4xl font-medium text-[#666666] mb-2">
                             Our Offering For Your Automation Needs-
                         </h2>
                         <h3 className="text-3xl lg:text-4xl font-medium text-[#262626]">
                             <span className="font-bold">The Stack That Powers Your Future.</span>
                         </h3>
                     </motion.div>
                 </motion.div>

                {/* Step 2: Final layout with heading at top and scroll-based cards */}
                 <motion.div
                     className="min-h-screen flex flex-col px-8 lg:px-16 py-16"
                     initial={{ opacity: 0 }}
                     animate={currentSection === 5 && sectionState.section5HasStarted ? {
                         opacity: 1,
                         transition: { duration: 0.8 }
                     } : { opacity: 0 }}
                 >
                     {/* Heading in final position */}
                     <motion.div
                         className="text-center mb-16"
                         initial={{ opacity: 0, y: 50 }}
                         animate={currentSection === 5 && sectionState.section5HasStarted ? {
                             opacity: 1,
                             y: 0,
                             transition: { duration: 0.8 }
                         } : { opacity: 0, y: 50 }}
                     >
                        <h2 className="text-3xl lg:text-4xl font-medium text-[#666666] mb-2">
                            Our Offering For Your Automation Needs-
                        </h2>
                        <h3 className="text-3xl lg:text-4xl font-medium text-[#262626]">
                            <span className="font-bold">The Stack That Powers Your Future.</span>
                        </h3>
                    </motion.div>

                    {/* Cards grid - scroll-based reveal */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto w-full">
                            {/* AI Solutions Card */}
                              <motion.div
                                  initial={{ opacity: 0, y: 100 }}
                                  animate={currentSection === 5 && sectionState.section5HasStarted ? {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.8,
                                          ease: "easeOut"
                                      }
                                  } : { opacity: 0, y: 100 }}
                                className="border border-gray-300 p-8 bg-white h-96 flex flex-col justify-between"
                            >
                                <div>
                                    <h4 className="text-xl font-semibold text-[#4A5568] mb-4 text-left">
                                        AI Solutions
                                    </h4>
                                    <p className="text-sm text-[#E53E3E] mb-6 text-left leading-relaxed">
                                        Build Intelligent Systems That Learn, Adapt, And Automate Complex Decisions — From GenAI To NLP And Computer Vision.
                                    </p>
                                </div>
                                <button className="flex items-center text-left text-sm font-medium text-[#262626] hover:text-[#4A5568] transition-colors">
                                    Learn More <span className="ml-2">→</span>
                                </button>
                            </motion.div>
                            
                            {/* Machine Learning Card */}
                              <motion.div
                                  initial={{ opacity: 0, y: 100 }}
                                  animate={currentSection === 5 && sectionState.section5ScrollProgress >= 0.25 ? {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.8,
                                          ease: "easeOut"
                                      }
                                  } : { opacity: 0, y: 100 }}
                                className="border border-gray-300 p-8 bg-white h-96 flex flex-col justify-between"
                            >
                                <div>
                                    <h4 className="text-xl font-semibold text-[#4A5568] mb-4 text-left">
                                        Machine Learning (ML)
                                    </h4>
                                    <p className="text-sm text-[#E53E3E] mb-6 text-left leading-relaxed">
                                        Design, Train, And Deploy Models That Predict, Classify, And Optimize — Using Structured And Unstructured Data.
                                    </p>
                                </div>
                                <button className="flex items-center text-left text-sm font-medium text-[#262626] hover:text-[#4A5568] transition-colors">
                                    Learn More <span className="ml-2">→</span>
                                </button>
                            </motion.div>
                            
                            {/* Data Engineering & Analytics Card */}
                              <motion.div
                                  initial={{ opacity: 0, y: 100 }}
                                  animate={currentSection === 5 && sectionState.section5ScrollProgress >= 0.5 ? {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.8,
                                          ease: "easeOut"
                                      }
                                  } : { opacity: 0, y: 100 }}
                                className="border border-gray-300 p-8 bg-white h-96 flex flex-col justify-between"
                            >
                                <div>
                                    <h4 className="text-xl font-semibold text-[#4A5568] mb-4 text-left">
                                        Data Engineering & Analytics
                                    </h4>
                                    <p className="text-sm text-[#E53E3E] mb-6 text-left leading-relaxed">
                                        Transform Raw Data Into A Strategic Asset — We Build Reliable Pipelines, Scalable Data Lakes, And Intelligent Warehouses That Power Insightful Dashboards, Business Intelligence, And Advanced Analytics. From Data Collection To Decision-Making, We Engineer The Entire Journey.
                                    </p>
                                </div>
                                <button className="flex items-center text-left text-sm font-medium text-[#262626] hover:text-[#4A5568] transition-colors">
                                    Learn More <span className="ml-2">→</span>
                                </button>
                            </motion.div>
                            
                            {/* Cloud Engineering Services Card */}
                              <motion.div
                                  initial={{ opacity: 0, y: 100 }}
                                  animate={currentSection === 5 && sectionState.section5ScrollProgress >= 0.75 ? {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.8,
                                          ease: "easeOut"
                                      }
                                  } : { opacity: 0, y: 100 }}
                                className="border border-gray-300 p-8 bg-white h-96 flex flex-col justify-between"
                            >
                                <div>
                                    <h4 className="text-xl font-semibold text-[#4A5568] mb-4 text-left">
                                        Cloud Engineering Services
                                    </h4>
                                    <p className="text-sm text-[#E53E3E] mb-6 text-left leading-relaxed">
                                        Build And Scale With The Power Of The Cloud. We Design Secure, High-Performance Cloud Infrastructures That Support AI, Data, And Modern Applications—Ensuring Speed, Flexibility, And Resilience Across AWS, Azure, And GCP.
                                    </p>
                                </div>
                                <button className="flex items-center text-left text-sm font-medium text-[#262626] hover:text-[#4A5568] transition-colors">
                                    Learn More <span className="ml-2">→</span>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
     );
}