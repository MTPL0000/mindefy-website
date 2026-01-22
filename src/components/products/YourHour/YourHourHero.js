"use client";

export default function YourHourHero() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative mb-12 w-full lg:min-h-[90vh] overflow-hidden">
        {/* Left Side - White with Cyan Gradient */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full"
          style={{
            background: "rgba(255, 255, 255, 1)",
          }}
        ></div>

        {/* Left Side - Blurred Cyan Gradient Only */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 30%, rgba(34, 171, 223, 0.5) 68%, rgba(255, 255, 255, 0) 95%)",
            filter: "blur(50px)",
          }}
        ></div>

        {/* Right Side - Dark Background */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background: "rgba(18, 18, 18, 1)",
          }}
        ></div>

        {/* Right Side - Blurred Cyan Gradient Only */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(18, 18, 18, 0) 30%, rgba(34, 171, 223, 0.5) 68%, rgba(18, 18, 18, 0) 95%)",
            filter: "blur(50px)",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 pt-12 h-full">
          {/* Logo and Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              {/* Logo */}
              <div className="w-20 mr-3">
                <img
                  src="/images/yourhour/yourhour-logo.svg"
                  alt="Case Study"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <h1 className="text-4xl lg:text-5xl font-lobster font-bold text-[#21ABE1] border-b-2 border-[#21ABE1]">
                  YourHour
                </h1>
                <p className="text-sm font-poppins text-[#21ABE1] uppercase tracking-wide">
                  The Digital Wellness App
                </p>
              </div>
            </div>
          </div>

          {/* Split Content Container */}
          <div className="flex items-center justify-between w-full ">
            {/* LEFT SIDE - Case (Light Theme) */}
            <div className="w-1/2 flex flex-col items-end">
              <h2 className="text-3xl md:text-4xl font-normal text-black font-poppins mb-6 pr-1">
                Case
              </h2>
              <img
                src="/images/yourhour/yourhour-lightImg.webp"
                alt="Case Study"
                className="w-full max-w-lg object-contain"
                loading="lazy"
              />
            </div>

            {/* RIGHT SIDE - Study (Dark Theme) */}
            <div className="w-1/2 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl font-normal text-white font-poppins mb-6 pl-1">
                Study
              </h2>
              <img
                src="/images/yourhour/yourhour-darkImg.webp"
                alt="Study"
                className="w-full max-w-lg object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section with content */}
      <div className="max-w-5xl px-4 py-6 mx-auto">
        <p className="text-sm md:text-base font-poppins font-normal text-[#444444] leading-relaxed">
          YourHour is a revolutionary mobile application designed to empower
          individuals to take charge of their digital lives. With an array of
          intuitive features and insights, YourHour offers a comprehensive
          solution to help users achieve a healthier balance between screen time
          and real-life experiences. By tracking and analyzing screen time
          usage, setting personalized reminders, and providing a focus mode for
          uninterrupted productivity.
        </p>
        <p className="mt-7 text-sm md:text-base font-poppins font-normal text-[#444444] leading-relaxed">
          In a world where smartphones have become an integral part of our daily
          routines, it's easy to lose track of time and succumb to excessive
          screen time. YourHour comes to the rescue with its comprehensive suite
          of features that help users monitor and manage their screen usage
          effectively. By tracking screen time, analyzing app usage patterns,
          and setting personalized reminders, YourHour encourages users to
          develop healthier screen habits and strike a balance between the
          virtual and real worlds. By setting goals and achieving milestones,
          the app motivates users on their journey to improved productivity,
          enhanced wellbeing, and increased mindfulness.
        </p>
      </div>
    </>
  );
}
