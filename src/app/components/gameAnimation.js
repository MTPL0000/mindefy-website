"use client";
import Image from "next/image";

export default function GameAnimation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 xl:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <h1 className="text-[#FF5225] text-[0.875rem] lg:text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            2D & 3D Game Animation
          </h1>

          {/* Main Title */}
          <p className="text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] xl:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-[55.25rem] mx-auto px-4 xl:px-0">
            Immersive Game Animation That Brings
            <br className="hidden sm:block"></br> Worlds to Life
          </p>

          {/* Description Paragraphs */}
          <div className="w-full max-w-[61.375rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.25rem] px-4 xl:px-0">
            <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed">
              Our in-house animation team brings every frame to life with
              creativity, precision, and storytelling finesse. Whether it's
              charming pixel art, smooth 2D animations, or hyper-realistic 3D
              models, we craft visuals that captivate and engage. We specialize
              in character rigging, dynamic environment animation, and immersive
              UI transitions—ensuring that every movement feels natural and
              purposeful. From indie projects to AAA titles, we tailor our
              animation style to fit your game's tone, narrative, and gameplay
              mechanics. The result? Visually rich experiences that resonate
              deeply with your audience and elevate the overall gameplay to the
              next level.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-[20rem] sm:h-[25rem] lg:h-[30.125rem] mx-auto mb-12 lg:mb-20">
            <Image
              src="/images/GA1.svg"
              alt="Game Animation - Immersive 2D and 3D game animation services"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2D Game Art & Development Section */}
      <section className="bg-white px-4 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[3.75rem] items-center">
            {/* Left Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative w-[20rem] sm:w-[22rem] lg:w-[25rem] xl:w-[25rem] h-[20rem] sm:h-[22rem] lg:h-[25rem] xl:h-[25rem] lg:ml-2.5">
                <Image
                  src="/images/GA2.webp"
                  alt="2D Game Art & Development"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 w-full">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#232323] mb-6 lg:mb-8">
                2D Game Art & Development
              </h2>

              <p className="text-sm sm:text-base text-[#444444] text-justify font-normal leading-relaxed mb-4 lg:mb-3">
                At Mindefy Technologies, we bring your game ideas to life
                through stunning 2D visuals and robust gameplay mechanics. Our
                team excels in both 2D game art and development, delivering
                end-to-end solutions that cover concept, design, and launch.
                From characters and environments to animations and user
                interface – every element is thoughtfully designed to enhance
                player experience across mobile, web, PC, and consoles.
              </p>

              <div className="mb-4 lg:mb-3">
                <h3 className="text-[#444444] font-normal mb-3">
                  Our Expertise Includes:
                </h3>
                <ul className="text-sm text-[#444444] space-y-2">
                  <li>• Custom 2D character design, environments & UI art</li>
                  <li>
                    • Concept art, sprite sheets, and frame-by-frame animation
                  </li>
                  <li>
                    • Cross-platform 2D game development (iOS, Android, Web, PC)
                  </li>
                  <li>
                    • Game logic, level design, and monetization integration
                  </li>
                  <li>• Optimization for performance and smooth gameplay</li>
                </ul>
              </div>

              <p className="text-sm sm:text-[1rem] text-[#444444] text-justify leading-relaxed">
                Whether you're building a fast-paced arcade game or a
                story-driven adventure, we combine creativity and code to make
                it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Game Art & Development Section */}
      <section className="bg-white mb-12 lg:mb-20 px-4 xl:px-0 mt-12 lg:mt-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[3.75rem] items-center">
            {/* Left Content */}
            <div className="flex-1 w-full order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#232323] mb-6 lg:mb-8">
                3D Game Art & Development
              </h2>

              <p className="text-sm sm:text-base text-[#444444] text-justify font-normal leading-relaxed mb-4 lg:mb-3">
                At Mindefy Technologies, we specialize in crafting high-quality
                3D games that deliver immersive experiences across platforms.
                From detailed character models and lifelike environments to
                smooth animations and engaging mechanics, our team handles the
                full cycle of 3D game art and development. We turn your concepts
                into fully playable, optimized games for mobile, web, PC, and
                console.
              </p>

              <div className="mb-4 lg:mb-3">
                <h3 className="text-[#444444] font-normal mb-3">
                  Our Expertise Includes:
                </h3>
                <ul className="text-sm text-[#444444] space-y-2">
                  <li>• 3D modeling of characters, assets & environments</li>
                  <li>• Rigging, skinning, and realistic animation</li>
                  <li>• Unity and Unreal Engine-based 3D game development</li>
                  <li>• Physics, gameplay mechanics & level design</li>
                  <li>• Cross-platform optimization and performance tuning</li>
                </ul>
              </div>

              <p className="text-sm sm:text-[1rem] text-[#444444] text-justify leading-relaxed">
                Whether it's a casual 3D game or a complex simulation, we bring
                your vision to life with precision, creativity, and scalability.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-[20rem] sm:w-[22rem] lg:w-[25rem] xl:w-[25rem] h-[20rem] sm:h-[22rem] lg:h-[25rem] xl:h-[25rem] lg:mr-2.5">
                <Image
                  src="/images/GA3.svg"
                  alt="3D Game Art & Development"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="bg-white px-4 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#000000] text-center mb-8 lg:mb-12">
            Our Work
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            {/* 3D Game Column */}
            <div className="flex-1 w-full">
              <h3 className="text-lg sm:text-xl lg:text-[1.75rem] font-semibold text-[#000000] text-center mb-4 lg:mb-3">
                3D Game
              </h3>
              <div className="relative w-full max-w-[28.375rem] mx-auto h-[15rem] sm:h-[18rem] lg:h-[20.125rem]">
                <Image
                  src="/images/GA4.webp"
                  alt="3D Game Development - Mindefy Technologies"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 2D Game Column */}
            <div className="flex-1 w-full">
              <h3 className="text-lg sm:text-xl lg:text-[1.75rem] font-semibold text-[#000000] text-center mb-4 lg:mb-3">
                2D Game
              </h3>
              <div className="relative w-full max-w-[39.25rem] mx-auto h-[15rem] sm:h-[18rem] lg:h-[20.687rem]">
                <Image
                  src="/images/GA5.webp"
                  alt="2D Game Development - Mindefy Technologies"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
