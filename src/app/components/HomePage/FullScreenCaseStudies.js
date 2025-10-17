import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function FullScreenCaseStudies() {
  return (
    <>
      {/* Gen AI-Chatbot Case Study - Full Screen */}
      <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          {/* Left side - Phone mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-96">
              <Image 
                src="/images/ai/chat-bot.png" 
                alt="Gen AI-Chatbot Interface" 
                fill 
                className="object-contain"
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
            <Link 
              href="/gen-ai-chatbot" 
              className="inline-block bg-[#2B2B2B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* ML Driven Recommendations Case Study - Full Screen */}
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
            <Link 
              href="/early-foods" 
              className="inline-block bg-[#2B2B2B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Case Study →
            </Link>
          </div>
          
          {/* Right side - Laptop mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-96 h-64">
              <Image 
                src="/images/ai/early-foods.png" 
                alt="ML Driven Recommendations Interface" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}