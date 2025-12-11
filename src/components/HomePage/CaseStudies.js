import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 py-12 sm:py-16 lg:py-20 bg-linear-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#2B2B2B] mb-12">
          Our Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Gen AI-Chatbot Case Study */}
          <div className="bg-linear-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/ai/chat-bot.png"
                  alt="Gen AI-Chatbot"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl md:text-2xl font-bold text-[#2B2B2B] mb-2">
                  Gen AI-Chatbot
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 grow">
                  YourHour was originally designed to monitor and reduce daily
                  screen time with alerts. Facing rising demand for mental
                  health support, the team enhanced the app by integrating a
                  Retrieval-Augmented Generation (RAG) AI chatbot. This "AI
                  companion" continued screen-time coaching while also answering
                  mental health questions, providing personalized advice on
                  anxiety or depression, and offering companionship—based on how
                  screen time affects health and emotional well-being.
                </p>
                <Link
                  href="/generative-ai-chatbot-development"
                  className="inline-block bg-[#2B2B2B] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300 self-start"
                >
                  Case Study →
                </Link>
              </div>
            </div>
          </div>

          {/* ML Driven Recommendations Case Study */}
          <div className="bg-linear-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col h-full">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/images/ai/early-foods.png"
                  alt="ML Driven Recommendations"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl md:text-2xl font-bold text-[#2B2B2B] mb-2">
                  ML Driven Recommendations
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 grow">
                  EarlyFoods, an e-commerce platform offering millet-based
                  products for new and expecting mothers, found customers
                  missing relevant items—limiting cart value. To solve this, we
                  recommended an AI-driven recommendation engine. They added it
                  on product pages using a hybrid of collaborative and
                  content-based filtering to deliver personalized suggestions.
                  This has boosted average order value, enhanced product
                  discovery, and strengthened customer trust.
                </p>
                <Link
                  href="/early-foods-e-commerce"
                  className="inline-block bg-[#2B2B2B] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300 self-start"
                >
                  Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
