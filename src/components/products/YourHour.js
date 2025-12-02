"use client";
import Image from "next/image";

export default function YourHourProduct() {
  return (
    <section className="bg-white mx-auto px-0">
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
              "linear-gradient(180deg, rgba(18, 18, 18, 0) 30%, rgba(34, 171, 223, 0.45) 68%, rgba(18, 18, 18, 0) 95%)",
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
                  src="/images/your-hour/yourhour-logo.svg"
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
              <h2 className="text-3xl md:text-4xl font-medium text-black font-poppins mb-6 pr-1">
                Case
              </h2>
              <img
                src="/images/your-hour/yourhour-lightImg.webp"
                alt="Case Study"
                className="w-full max-w-lg object-contain"
                loading="lazy"
              />
            </div>

            {/* RIGHT SIDE - Study (Dark Theme) */}
            <div className="w-1/2 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl font-medium text-white font-poppins mb-6 pl-1">
                Study
              </h2>
              <img
                src="/images/your-hour/yourhour-darkImg.webp"
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
        <p className="text-sm md:text-base font-normal text-[#444444] leading-relaxed">
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

      {/* Screen Time Monitoring */}
      <div className="flex items-center justify-center px-4 py-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-24 mt-6">
          <div className="flex flex-col items-center justify-center gap-5 mb-8">
            <p className="text-[#FF5225] text-base font-bold tracking-wider uppercase text-center px-4 xl:px-0">
              Maximize Your Success With Key Features and Advantages
            </p>
            <span className="w-full xl:w-3xl text-lg md:text-xl xl:text-4xl font-semibold text-[#000000] text-center px-4 xl:px-0 leading-snug">
              YourHour Offers A Range Of Key Features And Benefits To Its Users,
              Including
            </span>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <div className="max-w-lg">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
                Screen Time Monitoring
              </h3>
              <p className="text-sm md:text-base xl:text-lg font-poppins font-medium text-[#444444] leading-relaxed text-center lg:text-left">
                Users can track their daily and weekly screen time usage across
                various apps and categories, gaining insights into their digital
                habits and identifying areas for improvement.
              </p>{" "}
            </div>
            <div className="relative aspect-[1/1] w-full md:w-xl overflow-hidden">
              <Image
                src="/images/your-hour/yh-2.webp"
                alt="YourHour image"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* App Usage Analysis */}
      <div className="flex items-center justify-center px-4 py-4 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="relative aspect-[1/1] w-full md:w-xl overflow-hidden">
            <Image
              src="/images/your-hour/yh-3.webp"
              alt="YourHour image"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
          <div className="max-w-lg">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              App Usage Analysis
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-poppins font-medium text-[#444444] leading-relaxed text-center lg:text-left">
              YourHour provides a detailed breakdown of app usage, allowing
              users to understand which apps consume the most time and make
              informed decisions about app usage management.
            </p>
          </div>
        </div>
      </div>

      {/* Customizable Reminders And Alerts */}
      <div className="flex items-center justify-center px-4 py-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="max-w-lg">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              Customizable Reminders And Alerts
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-poppins font-medium text-[#444444] leading-relaxed text-center lg:text-left">
              Users can set personalized reminders and alerts to help them take
              regular breaks, reduce excessive screen time, and establish
              healthier usage patterns.
            </p>
          </div>
          <div className="relative aspect-[1/1] w-full md:w-xl overflow-hidden">
            <Image
              src="/images/your-hour/yh-4.webp"
              alt="YourHour image"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Curated & Scheduled Challenges */}
      <div className="flex items-center justify-center px-4 py-4 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="relative aspect-[1/1] w-full md:w-xl overflow-hidden">
            <Image
              src="/images/your-hour/yh-5.webp"
              alt="YourHour image"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
          <div className="max-w-lg">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              Curated & Scheduled Challenges
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-poppins font-medium text-[#444444] leading-relaxed text-center lg:text-left">
              YourHour app has an algorithm based feature of curated challenges,
              as you progress on your Detox Journey with YourHour, the app
              starts auto-suggesting and curating Fast & Diet challenges on the
              apps you are most addicted to.
            </p>
          </div>
        </div>
      </div>

      {/* Personalized Detailed Reports */}
      <div className="flex items-center justify-center px-4 py-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="max-w-lg">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              Personalized Detailed Reports
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-poppins font-medium text-[#444444] leading-relaxed text-center lg:text-left">
              YourHour app provides its users Detailed Daily, Weekly and Monthly
              report of their app usage. Daily usage report reviews the usage of
              individual apps through a consolidated report sent through push
              notification to the user at the end of each day.
            </p>
          </div>
          <div className="relative aspect-[1/1] w-full md:w-xl overflow-hidden">
            <Image
              src="/images/your-hour/yh-6.webp"
              alt="YourHour image"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* NEW FEATURES INTRODUCED */}
      <div className="px-4 py-4 mx-auto">
        <div className="max-w-5xl flex flex-col gap-7 items-center justify-center mx-auto px-4">
          {/* Top Tag */}
          <p className="text-[#FF5225] font-poppins text-sm md:text-base font-bold uppercase">
            NEW FEATURES INTRODUCED
          </p>

          {/* Heading */}
          <h2 className="text-xl md:text-4xl font-poppins font-semibold text-black">
            Mindful Pause | Usage Pattern
          </h2>

          {/* Description */}
          <p className="text-[#444444] max-w-4xl font-poppins font-medium leading-relaxed text-sm md:text-base mx-auto">
            We’ve Added Two Powerful Features To Help You Stay Aware And In
            Control Of Your Screentime:
          </p>

          {/* Paragraphs */}
          <p className="text-[#444444] max-w-4xl font-poppins font-medium leading-relaxed text-sm md:text-base mx-auto">
            <span className="font-semibold">Mindful Pause</span> – Get Notified
            When You Exceed Yourself Beyond Your Set App Usage Limit. A Gentle
            Reminder Appears Right On The App’s Opening Screen To Help You Take
            A Mindful Break.
          </p>

          <p className="text-[#444444] max-w-4xl font-poppins font-medium leading-relaxed text-sm md:text-base mx-auto">
            <span className="font-semibold">Usage Pattern</span> – Visualize
            Your App Habits With Easy-To-Read Graphs. See How Often You Open An
            App And How Much Time You Spend, Categorized Into Four Behavioral
            Types For Better Self-Awareness.
          </p>
        </div>

        {/* Image */}
        <div className="relative aspect-[1/0.7] w-full md:w-[46rem] lg:w-[50.65rem] mx-auto overflow-hidden">
          <Image
            src="/images/your-hour/mindful-pause.webp"
            alt="YourHour image"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* What We Learned Section */}
      <div className="px-4 py-4 mx-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Heading */}
          <h2 className="hidden md:visible md:flex items-center flex-wrap justify-center gap-3 text-3xl md:text-4xl font-poppins font-normal text-[#1A1A1A] leading-snug">
            What <span className="font-bold">We Have Learned</span> Serving
            <span className="font-bold text-8xl">5</span>
            <span className="font-bold">Million</span> Users
          </h2>

          {/* Heading for mobile */}
          <h2 className="md:hidden visible text-center text-2xl md:text-3xl font-poppins font-bold text-[#1A1A1A] leading-snug">
            What We Have Learned Serving 5 Million Users
          </h2>

          {/* Illustration */}
          <div className="relative w-full aspect-[1/0.9] md:w-[45rem] mx-auto">
            <Image
              src="/images/your-hour/learn-serving.webp"
              alt="Learned Illustration"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-10 md:space-y-15">
            {/* Importance of Education */}
            <div>
              <h3 className="text-xl md:text-2xl text-[#000000] font-poppins font-semibold mb-4">
                Importance of Education
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#000000] font-poppins font-normal">
                Serving a large user base highlighted the significance of
                educating users about the impact of excessive screen time and
                the benefits of digital wellbeing. YourHour invested in creating
                informative content, including blog posts, newsletters, and
                in-app resources, to educate and raise awareness among users.
              </p>
            </div>

            {/* Customization is Key */}
            <div>
              <h3 className="text-xl md:text-2xl text-[#000000] font-poppins font-semibold mb-4">
                Customization is Key
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#000000] font-poppins font-normal">
                User preferences and requirements vary widely when it comes to
                managing screen time. Through interactions with millions of
                users, YourHour learned the importance of providing customizable
                features, allowing users to tailor their experience and adapt
                the app to their individual needs.
              </p>
            </div>

            {/* Continuous Innovation */}
            <div>
              <h3 className="text-xl md:text-2xl text-[#000000] font-poppins font-semibold mb-4">
                Continuous Innovation
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#000000] font-poppins font-normal">
                Serving a significant user base emphasized the need for
                continuous innovation. YourHour implemented new features, such
                as app usage categorization, goal setting, and screen-free
                challenges, to cater to evolving user demands and remain
                competitive in the digital wellbeing space.
              </p>
            </div>

            {/* Overloading with Features */}
            <div>
              <h3 className="text-xl md:text-2xl text-[#000000] font-poppins font-semibold mb-4">
                Overloading with Features
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#000000] font-poppins font-normal">
                Despite numerous ideas and feature requests, the team resisted
                the temptation to include every possible feature in YourHour.
                They recognized the importance of keeping the app focused and
                user-friendly, avoiding feature bloat that could overwhelm or
                confuse users.
              </p>
            </div>

            {/* Compromising User Privacy */}
            <div>
              <h3 className="text-xl md:text-2xl text-[#000000] font-poppins font-semibold mb-4">
                Compromising User Privacy
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#000000] font-poppins font-normal">
                YourHour prioritized user privacy and security from the outset.
                They ensured that the app collected only essential data for
                functionality, implemented strong encryption protocols, and
                maintained transparent data handling practices, earning user
                trust in an era of increasing data privacy concerns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Managed Release */}
      <div className="px-4 py-4 md:py-16 mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-10 md:gap-15">
            <div className="flex flex-col items-center justify-center gap-5">
              <h2 className="w-full xl:w-5xl text-lg md:text-xl xl:text-4xl font-normal text-[#000000] text-center px-4 xl:px-0 leading-snug">
                How <strong>We Managed</strong> To{" "}
                <strong>Release Over 250 App</strong> Updates
                <br /> With <strong>A Team Of 2 Developers</strong>
              </h2>
            </div>
            <div className="flex flex-col items-center px-4">
              {/* Top Row */}
              <div className="flex flex-col xl:flex-row gap-5 mb-14">
                {/* Card 1 */}
                <div
                  className="bg-[#FFFFFF] rounded-2xl p-6 xl:p-8 w-full xl:w-[35.65rem] h-auto xl:h-[16.3rem] text-center"
                  style={{
                    boxShadow: "4px 4px 17px rgba(54, 47, 115, 0.5)",
                  }}
                >
                  <h3 className="text-xl xl:text-2xl font-semibold mb-4 xl:mb-7">
                    Agile Development Methodology
                  </h3>
                  <p className="text-sm xl:text-base font-medium text-[#444444] leading-relaxed">
                    The team adopted an agile development approach, breaking
                    down tasks into manageable sprints and maintaining a
                    continuous feedback loop with users. This methodology
                    allowed for faster iterations and the ability to address
                    issues promptly.
                  </p>
                </div>

                {/* Card 2 */}
                <div
                  className="bg-[#FFFFFF] rounded-2xl p-6 xl:p-8 w-full xl:w-[35.65rem] h-auto xl:h-[16.3rem] text-center"
                  style={{
                    boxShadow: "4px 4px 17px rgba(54, 47, 115, 0.5)",
                  }}
                >
                  <h3 className="text-xl xl:text-2xl font-semibold mb-4 xl:mb-7">
                    Prioritizing User Feedback
                  </h3>
                  <p className="text-sm xl:text-base font-medium text-[#444444] leading-relaxed">
                    User feedback played a crucial role in shaping each update.
                    The developers actively sought user input through surveys,
                    app reviews, and direct communication channels, ensuring
                    that updates addressed the most pressing user concerns and
                    pain points.
                  </p>
                </div>
              </div>

              {/* Bottom Centered Card */}
              <div
                className="bg-[#FFFFFF] rounded-2xl p-6 xl:p-8 w-full xl:w-[35.65rem] h-auto xl:h-[18rem] text-center"
                style={{ boxShadow: "4px 4px 17px rgba(54, 47, 115, 0.5)" }}
              >
                <h3 className="text-xl xl:text-2xl font-semibold mb-4 xl:mb-7">
                  Efficient Collaboration And Task Management
                </h3>
                <p className="text-sm xl:text-base font-medium text-[#444444] leading-relaxed">
                  The team utilized project management tools and effective
                  communication channels to streamline collaboration and task
                  management. Clear roles, responsibilities, and efficient
                  workflows enabled them to deliver updates regularly,
                  maintaining a rapid release cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
