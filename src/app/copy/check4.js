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
        section3AnimationFinished: false
    });
    
    // Use Framer Motion's animation controls
    const zoomControls = useAnimation();
    const contentZoomControls = useAnimation();
    const cardControls = useAnimation();
    
    // Improved scroll handling with useCallback
    const handleSectionTransition = useCallback((direction, fromSection) => {
        if (sectionState.isTransitioning) return;
        
        setSectionState(prev => ({ ...prev, isTransitioning: true }));
        
        const transitions = {
            0: { down: 1 }, // Video → Image
            1: { up: 0, down: 2 }, // Image ↔ Video/Cards
            2: { up: 1, down: 3 }, // Cards ↔ Image/CaseStudy1
            3: { up: 2, down: 4 }, // CaseStudy1 ↔ Cards/CaseStudy2
            4: { up: 3 } // CaseStudy2 → CaseStudy1
        };
        
        const nextSection = transitions[fromSection]?.[direction];
        if (nextSection !== undefined) {
            setCurrentSection(nextSection);
            
            // Reset transition state after animation
            setTimeout(() => {
                setSectionState(prev => ({ ...prev, isTransitioning: false }));
            }, 1000);
        }
    }, [sectionState.isTransitioning]);
    
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
                <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 px-8 lg:px-16">
                    <div className="container mx-auto max-w-7xl flex items-center justify-between">
                        {/* Left side - Phone mockup */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-80 h-96">
                                <img 
                                    src="/images/ai/chat-bot.png" 
                                    alt="Gen AI-Chatbot Interface" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Right side - Content */}
                        <div className="flex-1 pl-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-6">
                                Gen AI-Chatbot
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                                YourHour was originally designed to monitor and reduce daily screen time with alerts. Facing rising demand for mental health support, the team enhanced the app by integrating a Retrieval-Augmented Generation (RAG) AI chatbot. This "AI companion" continued screen-time coaching while also answering mental health questions, providing personalized advice on anxiety or depression, and offering companionship—based on how screen time affects health and emotional well-being.
                            </p>
                            <a 
                                href="/gen-ai-chatbot" 
                                className="inline-block bg-[#2B2B2B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300"
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
                <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 px-8 lg:px-16">
                    <div className="container mx-auto max-w-7xl flex items-center justify-between">
                        {/* Left side - Content */}
                        <div className="flex-1 pr-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-6">
                                ML Driven Recommendations
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                                EarlyFoods, an e-commerce platform offering millet-based products for new and expecting mothers, found customers missing relevant items—limiting cart value. To solve this, we recommended an AI-driven recommendation engine. They added it on product pages using a hybrid of collaborative and content-based filtering to deliver personalized suggestions. This has boosted average order value, enhanced product discovery, and strengthened customer trust.
                            </p>
                            <a 
                                href="/early-foods" 
                                className="inline-block bg-[#2B2B2B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300"
                            >
                                Case Study →
                            </a>
                        </div>
                        
                        {/* Right side - Laptop mockup */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-96 h-64">
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
        </div>
    );
}