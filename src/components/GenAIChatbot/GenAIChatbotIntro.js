"use client";

import Image from "next/image";

export default function GenAIChatbotIntro({ introductionRef }) {
  return (
    <section
      ref={introductionRef}
      id="introduction"
      className="flex items-center mt-10 sm:mt-12 md:mt-14 lg:mt-18"
    >
      <div className="mx-auto p-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-6  md:gap-8 lg:gap-18 justify-center items-center lg:flex-row lg:justify-center lg:items-start">
          {/* Left Content */}
          <div className="space-y-0 w-full max-w-[21.56rem] lg:ml-6">
            <div className="text-[#000000] mb-6">
              <p className="font-bold text-sm mb-4 text-center lg:text-left">
                CASE STUDY
              </p>
              <h1 className="text-[1.86rem] font-semibold text-center lg:text-left">
                Gen AI-Chatbot
              </h1>
            </div>
            <p className="text-[#000000] font-normal text-sm leading-relaxed tracking-normal text-center lg:text-left">
              YourHour was originally designed to monitor and reduce daily
              screen time with alerts. Facing rising demand for mental
              health support, the team enhanced the app by integrating a
              Retrieval-Augmented Generation (RAG) AI chatbot. This "AI
              companion" continued screen-time coaching while also
              answering mental health questions, providing personalized
              advice on anxiety or depression, and offering
              companionship—based on how screen time affects health and
              emotional well-being.
            </p>
          </div>

          {/* Right Content - Chat Interface Image */}
          <div className="mt-0 lg:-mt-8 flex justify-center">
            <div className="relative overflow-hidden h-80 lg:h-140 xl:h-160 aspect-3/4">
              <Image
                src="/images/YH-MN.gif"
                alt="YourHour App with AI Chatbot"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
