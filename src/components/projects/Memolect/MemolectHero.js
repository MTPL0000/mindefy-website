"use client";

import Image from "next/image";

export default function MemolectHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-3 md:pb-16 pt-3">
        <div className="flex flex-col">
          {/* Top right dots image */}
          <div className="flex justify-end mb-6 md:mb-10">
            <div className="relative overflow-hidden w-24 sm:w-28 md:w-32 aspect-square">
              <Image
                src="/images/dots-img.svg"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Main content area */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-24">
            {/* Left image */}
            <div className="relative overflow-hidden w-full sm:max-w-md md:max-w-lg lg:max-w-3xl aspect-square">
              <Image
                src="/images/flashcard-img-1.webp"
                alt="image"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right content */}
            <div className="flex flex-col items-center lg:items-start justify-center gap-4 text-center lg:text-left">
              {/* Logo box */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#263649] rounded-sm p-4">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/flashcard-logo.svg"
                    alt="image"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Texts */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#13151A] font-poppins">
                  Memolect
                </h1>
                <p className="text-lg sm:text-xl text-[#263649] font-normal font-poppins mt-2">
                  Interactive Learning Flashcards
                </p>
              </div>

              {/* UX Case Study image (with underline) */}
              <div className="relative w-64 sm:w-72 md:w-80 h-32 sm:h-36 md:h-40">
                <Image
                  src="/images/underline-icon.svg"
                  alt="UX Case Study"
                  fill
                  className="object-contain object-left lg:object-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-45">
            <div className="w-full md:w-[40%] flex flex-col gap-6">
              <h2 className="text-2xl lg:text-4xl font-semibold text-[#13151A] font-poppins">
                Product Overview
                <div className="w-28 h-1 bg-[#004C99] mt-2 rounded-md"></div>
              </h2>

              <div>
                <p className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins">
                  Memolect is a mobile-first flashcard learning application
                  designed to help users retain knowledge effectively using
                  scientifically-backed training techniques. With personalized
                  memory modes, subject/flashcard creation, and spaced
                  repetition logic, the app aims to serve learners ranging from
                  students to professionals.
                </p>
                <p className="text-[#263649] font-normal text-lg md:text-xl leading-relaxed font-poppins">
                  Our mission is to craft an intuitive, highly engaging, and
                  flexible user experience that enhances memory retention across
                  subjects and disciplines.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden w-full sm:max-w-86 aspect-9/16">
              <Image
                src="/images/flashcard-img-2.webp"
                alt="image"
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
