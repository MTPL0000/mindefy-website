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
            <p className="text-[#FF5225] tracking-[0.2em] text-sm md:text-base font-bold uppercase text-center px-4 xl:px-0">
              Maximize Your Success With Key Features and Advantages
            </p>
            <span className="w-full xl:w-3xl text-lg md:text-xl xl:text-4xl font-medium text-[#000000] text-center px-4 xl:px-0 leading-snug">
              YourHour{" "}
              <span className="font-bold">Offers A Range Of Key Features</span>{" "}
              And <span className="font-bold">Benefits To Its Users,</span>{" "}
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
          <p className="text-[#FF5225] tracking-[0.2em] font-poppins text-sm md:text-base font-bold uppercase">
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

      {/* What Went Right For This Product */}
      <div className="max-w-7xl px-4 py-12 mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-poppins font-normal text-[#1A1A1A] text-center mb-8 lg:mb-16 leading-snug">
          What <span className="font-bold">Went Right</span> For{" "}
          <span className="font-bold">This Product</span>
        </h2>

        {/* Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12 lg:gap-20">
          {/* LEFT SIDE – CHART CARD */}
          <div
            className="flex flex-col justify-center rounded-2xl p-9 h-fit"
            style={{ boxShadow: "0px 0px 16px 0px #00000026" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold font-poppins text-[#000000] mb-4">
              Year-Wise User Growth
              <span className="block text-sm text-[#6A7282] font-poppins font-medium">
                2018 – 2025 Journey
              </span>
            </h3>

            {/* Chart Image */}
            <div className="relative w-full aspect-[4/2.5] mb-6">
              <img
                src="/images/your-hour/growth-graph.png"
                alt="User Growth Chart"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="w-38 bg-[#A6D6FF] p-4 rounded-2xl text-center">
                <p className="text-xl text-[#20448F] font-poppins font-semibold mb-1">
                  68.5M
                </p>
                <p className="text-xs text-[#20448F] font-medium font-poppins">
                  Total Users
                </p>
              </div>
              <div className="w-38 bg-[#A6D6FF] p-4 rounded-2xl text-center">
                <p className="text-xl text-[#20448F] font-poppins font-semibold mb-1">
                  +137x
                </p>
                <p className="text-xs text-[#20448F] font-medium font-poppins">
                  Growth
                </p>
              </div>
              <div className="w-38 bg-[#A6D6FF] p-4 rounded-2xl text-center">
                <p className="text-xl text-[#20448F] font-poppins font-semibold mb-1">
                  7 yrs
                </p>
                <p className="text-xs text-[#20448F] font-medium font-poppins">
                  Journey
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – TEXT CONTENT */}
          <div className="space-y-12 text-sm md:text-base lg:text-lg font-medium font-poppins text-[#101010] leading-relaxed">
            <p>
              Your Hour entered the market at a time when concerns about
              smartphone addiction and digital wellness were on the rise. The
              product tapped into a growing need, positioning itself as a
              solution for individuals seeking to regain control over their
              screen time.
            </p>

            <p>
              Your Hour's success can be attributed to its user-centric design
              and features. The developers conducted extensive research to
              understand user pain points and preferences, leading to the
              creation of a comprehensive suite of tools and features that
              addressed users' needs.
            </p>

            <p>
              Your Hour prioritized delivering a seamless user experience. The
              app's intuitive interface, smooth navigation, and straightforward
              setup process allowed users to easily monitor their screen time,
              set limits, and track progress without feeling overwhelmed or
              confused.
            </p>

            <p>
              The developers consistently listened to user feedback and
              incorporated valuable suggestions into the app's updates. This
              approach helped in enhancing the functionality, performance, and
              overall user experience of Your Hour, contributing to user
              retention and positive reviews.
            </p>
          </div>
        </div>
      </div>

      {/* Marketing and Distribution Section */}
      <div className="px-4 py-8 md:py-16 mx-auto bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#FF5225] tracking-[0.2em] font-poppins text-sm md:text-base font-bold uppercase mb-4">
              MARKETING AND DISTRIBUTION
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-normal text-[#000000] leading-snug">
              YourHour Employed{" "}
              <span className="font-bold">Various Marketing</span> And{" "}
              <span className="font-bold">Distribution Strategies</span> To
              <br className="hidden md:block" />
              Reach And Engage Its{" "}
              <span className="font-bold">Target Audience</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-18 mt-[5rem]">
              {/* Digital Marketing Campaigns */}
              <div className="space-y-3">
                <h3 className="w-full text-base md:text-lg font-poppins font-semibold text-[#000000] border-b border-[#000000] pb-2 inline-block">
                  Digital Marketing Campaigns
                </h3>
                <p className="max-w-88 text-xs font-poppins text-[#000000] leading-relaxed text-justify">
                  The Team Executed Targeted Digital Marketing Campaigns Using
                  Social Media Platforms, Search Engine Optimization, And Online
                  Advertisements To Raise Awareness About YourHour's Benefits
                  And Drive App Downloads.
                </p>
              </div>

              {/* Organic Virality */}
              <div className="space-y-3">
                <h3 className="w-full text-base md:text-lg font-poppins font-semibold text-[#000000] border-b border-[#000000] pb-2 inline-block">
                  Organic Virality
                </h3>
                <p className="max-w-88 text-xs font-poppins text-[#000000] leading-relaxed text-justify">
                  With A Mission To Tackle The Growing Concern Of Excessive
                  Screen Time, YourHour Has Witnessed Unparalleled Organic
                  Growth Since Its Launch. Satisfied Users Enthusiastically
                  Share Their Positive Experiences With Friends And Family,
                  Triggering A Powerful Effect Of Organic Growth For The App.
                </p>
              </div>

              {/* Partnership with Educational Institutions */}
              <div className="space-y-3 mt-[-1rem]">
                <h3 className="w-full text-base md:text-lg font-poppins font-semibold text-[#000000] border-b border-[#000000] pb-2 inline-block">
                  Partnership with Educational Institutions
                </h3>
                <p className="max-w-88 text-xs font-poppins text-[#000000] leading-relaxed text-justify">
                  YourHour Has Established Partnerships With Educational
                  Institutions To Promote Digital Wellness Among Students. This
                  Involved Conducting Workshops, Providing Resources, And
                  Offering Special Incentives For Student Engagement.
                </p>
              </div>
            </div>

            {/* marketingImg Illustration */}
            <div className="relative w-[420px] h-[732px] mx-auto">
              <Image
                src="/images/your-hour/marketingImg.webp"
                alt="Marketing and Distribution Strategies"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>

            {/* Right Column - Illustration and More Text */}
            <div className="space-y-16">
              {/* App Store Optimization */}
              <div className="space-y-3 text-right mt-[5rem]">
                <h3 className="w-full text-base md:text-lg font-poppins font-semibold text-[#000000] border-b border-[#000000] pb-2 inline-block">
                  App Store Optimization
                </h3>
                <p className="max-w-88 text-xs font-poppins text-[#000000] leading-relaxed ml-auto">
                  The App's Visibility And Discoverability Were Enhanced Through
                  Effective App Store Optimization Techniques, Including
                  Optimizing Keywords, App Descriptions, And Screenshots.
                </p>
              </div>

              {/* Influencer Collaborations */}
              <div className="space-y-3 text-right mt-[6rem]">
                <h3 className="w-full text-base md:text-lg font-poppins font-semibold text-[#000000] border-b border-[#000000] pb-2 inline-block">
                  Influencer Collaborations
                </h3>
                <p className="max-w-88 text-xs font-poppins text-[#000000] leading-relaxed ml-auto">
                  YourHour Collaborated With Social Media Influencers And
                  Digital Wellness Advocates Who Shared Their Experiences Using
                  The App, Expanding Its Reach And Credibility Among Their
                  Followers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Response and Impact */}
      <div className="max-w-7xl px-4 py-4 md:py-16 mx-auto">
        <p className="text-[#FF5225] tracking-[0.2em] font-poppins text-sm md:text-base font-bold uppercase text-center mb-10">
          CUSTOMER RESPONSE AND IMPACT
        </p>

        <h2 className="max-w-3xl text-2xl md:text-3xl font-poppins font-normal text-[#1A1A1A] text-center mb-8 lg:mb-16 leading-snug mx-auto">
          The <span className="font-bold">Response From Customers</span> And{" "}
          <span className="font-bold">The Impact Of YourHour</span> Have Been{" "}
          <span className="font-bold">Significant</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Phone + Reviews */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-square">
              <Image
                src="/images/your-hour/customer-response.webp"
                alt="YourHour Reviews Phone"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-10">
            <div>
              <h4 className="text-xl font-semibold text-[#212353] mb-2">
                Positive User Reviews
              </h4>
              <p className="text-[#545671] leading-relaxed">
                Users Have Praised YourHour For Its User-Friendly Interface,
                Accurate Tracking, And Effective Tools For Managing Screen Time.
                Many Have Reported Improvements In Productivity, Reduced Digital
                Distractions, And A Healthier Balance Between Screen Time And
                Real-Life Activities.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#212353] mb-2">
                Behavioral Shifts
              </h4>
              <p className="text-[#545671] leading-relaxed">
                YourHour&apos;s Impact Extends Beyond Individual Users. By
                Helping Millions Of People Manage Their Screen Time, The App Has
                Contributed To A Broader Behavioral Shift Towards Healthier
                Digital Habits, Fostering Better Mental Health, Improved Focus,
                And Increased Productivity.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#212353] mb-2">
                Digital Wellbeing Advocacy
              </h4>
              <p className="text-[#545671] leading-relaxed">
                YourHour&apos;s Success Has Positioned The App As A Key Player
                In The Digital Wellbeing Space. It Has Become An Advocate For
                Responsible Technology Usage And Has Inspired Conversations
                About The Importance Of Digital Balance, Leading To Increased
                Awareness And Discussions Around Digital Wellness.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#212353] mb-2">
                User Retention and Engagement
              </h4>
              <p className="text-[#545671] leading-relaxed">
                YourHour Has Achieved High User Retention Rates Due To Its
                Valuable Features, Regular Updates, And Strong Customer Support.
                The App&apos;s Active User Community And Engagement Through
                Forums And Social Media Platforms Have Created A Sense Of
                Belonging And Motivated Users To Continue Their Digital
                Wellbeing Journey.
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
