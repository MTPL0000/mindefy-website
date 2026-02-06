"use client";

import Image from "next/image";
import YourHourGrowthChart from "../YourHourGrowthChart";
import FeatureSection from "./FeatureSection";

const learnedItems = [
  {
    title: "Importance of Education",
    description:
      "Serving a large user base highlighted the significance of educating users about the impact of excessive screen time and the benefits of digital wellbeing. YourHour invested in creating informative content, including blog posts, newsletters, and in-app resources, to educate and raise awareness among users.",
  },
  {
    title: "Customization is Key",
    description:
      "User preferences and requirements vary widely when it comes to managing screen time. Through interactions with millions of users, YourHour learned the importance of providing customizable features, allowing users to tailor their experience and adapt the app to their individual needs.",
  },
  {
    title: "Continuous Innovation",
    description:
      "Serving a significant user base emphasized the need for continuous innovation. YourHour implemented new features, such as app usage categorization, goal setting, and screen-free challenges, to cater to evolving user demands and remain competitive in the digital wellbeing space.",
  },
  {
    title: "Overloading with Features",
    description:
      "Despite numerous ideas and feature requests, the team resisted the temptation to include every possible feature in YourHour. They recognized the importance of keeping the app focused and user-friendly, avoiding feature bloat that could overwhelm or confuse users.",
  },
  {
    title: "Compromising User Privacy",
    description:
      "YourHour prioritized user privacy and security from the outset. They ensured that the app collected only essential data for functionality, implemented strong encryption protocols, and maintained transparent data handling practices, earning user trust in an era of increasing data privacy concerns.",
  },
];

const responseItems = [
  {
    title: "Positive User Reviews",
    description:
      "Users Have Praised YourHour For Its User-Friendly Interface, Accurate Tracking, And Effective Tools For Managing Screen Time. Many Have Reported Improvements In Productivity, Reduced Digital Distractions, And A Healthier Balance Between Screen Time And Real-Life Activities.",
  },
  {
    title: "Behavioral Shifts",
    description:
      "YourHour's Impact Extends Beyond Individual Users. By Helping Millions Of People Manage Their Screen Time, The App Has Contributed To A Broader Behavioral Shift Towards Healthier Digital Habits, Fostering Better Mental Health, Improved Focus, And Increased Productivity.",
  },
  {
    title: "Digital Wellbeing Advocacy",
    description:
      "YourHour's Success Has Positioned The App As A Key Player In The Digital Wellbeing Space. It Has Become An Advocate For Responsible Technology Usage And Has Inspired Conversations About The Importance Of Digital Balance, Leading To Increased Awareness And Discussions Around Digital Wellness.",
  },
  {
    title: "User Retention and Engagement",
    description:
      "YourHour Has Achieved High User Retention Rates Due To Its Valuable Features, Regular Updates, And Strong Customer Support. The App's Active User Community And Engagement Through Forums And Social Media Platforms Have Created A Sense Of Belonging And Motivated Users To Continue Their Digital Wellbeing Journey.",
  },
];

const releaseCards = [
  {
    title: "Agile Development Methodology",
    description:
      "The team adopted an agile development approach, breaking down tasks into manageable sprints and maintaining a continuous feedback loop with users. This methodology allowed for faster iterations and the ability to address issues promptly.",
    heightClass: "xl:h-[16.3rem]",
  },
  {
    title: "Prioritizing User Feedback",
    description:
      "User feedback played a crucial role in shaping each update. The developers actively sought user input through surveys, app reviews, and direct communication channels, ensuring that updates addressed the most pressing user concerns and pain points.",
    heightClass: "xl:h-[16.3rem]",
  },
  {
    title: "Efficient Collaboration And Task Management",
    description:
      "The team utilized project management tools and effective communication channels to streamline collaboration and task management. Clear roles, responsibilities, and efficient workflows enabled them to deliver updates regularly, maintaining a rapid release cycle.",
    heightClass: "xl:h-72",
  },
];

const wentRightPoints = [
  "Your Hour entered the market at a time when concerns about smartphone addiction and digital wellness were on the rise. The product tapped into a growing need, positioning itself as a solution for individuals seeking to regain control over their screen time.",
  "Your Hour's success can be attributed to its user-centric design and features. The developers conducted extensive research to understand user pain points and preferences, leading to the creation of a comprehensive suite of tools and features that addressed users' needs.",
  "Your Hour prioritized delivering a seamless user experience. The app's intuitive interface, smooth navigation, and straightforward setup process allowed users to easily monitor their screen time, set limits, and track progress without feeling overwhelmed or confused.",
  "The developers consistently listened to user feedback and incorporated valuable suggestions into the app's updates. This approach helped in enhancing the functionality, performance, and overall user experience of Your Hour, contributing to user retention and positive reviews.",
];

export default function YourHourSections() {
  return (
    <>
      {/* Screen Time Monitoring */}
      <div className="flex items-center justify-center px-4 py-8 md:py-12 mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-24 mt-6">
          <div className="flex flex-col items-center justify-center gap-5 mb-8">
            <p className="text-[#FF5225] tracking-[0.2em] text-sm md:text-base font-bold font-poppins uppercase text-center px-4 xl:px-0">
              Maximize Your Success With Key Features and Advantages
            </p>
            <span className="w-full max-w-3xl text-lg md:text-4xl font-normal font-poppins text-[#000000] text-center px-4 xl:px-0 leading-snug">
              YourHour{" "}
              <span className="font-bold">Offers A Range Of Key Features</span>{" "}
              And <span className="font-bold">Benefits To Its Users,</span>{" "}
              Including
            </span>
          </div>
          <div className="max-w-7xl mx-auto">
            <FeatureSection
              title="Screen Time Monitoring"
              description="Users can track their daily and weekly screen time usage across various apps and categories, gaining insights into their digital habits and identifying areas for improvement."
              imageSrc="/images/yourhour/dashboard.webp"
              imageAlt="YourHour image"
              contentClassName="w-full max-w-[33.15rem]"
            />
          </div>
        </div>
      </div>

      {/* App Usage Analysis */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <FeatureSection
          title="App Usage Analysis"
          description="YourHour provides a detailed breakdown of app usage, allowing users to understand which apps consume the most time and make informed decisions about app usage management."
          imageSrc="/images/yourhour/analysis.webp"
          imageAlt="YourHour image"
          reverse
        />
      </div>

      {/* Customizable Reminders And Alerts */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <FeatureSection
          title="Customizable Reminders And Alerts"
          description="Users can set personalized reminders and alerts to help them take regular breaks, reduce excessive screen time, and establish healthier usage patterns."
          imageSrc="/images/yourhour/alerts.webp"
          imageAlt="YourHour image"
        />
      </div>

      {/* Curated & Scheduled Challenges */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <FeatureSection
          title="Curated & Scheduled Challenges"
          description="YourHour app has an algorithm based feature of curated challenges, as you progress on your Detox Journey with YourHour, the app starts auto-suggesting and curating Fast & Diet challenges on the apps you are most addicted to."
          imageSrc="/images/yourhour/challenges.webp"
          imageAlt="YourHour image"
          reverse
        />
      </div>

      {/* Personalized Detailed Reports */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <FeatureSection
          title="Personalized Detailed Reports"
          description="YourHour app provides its users Detailed Daily, Weekly and Monthly report of their app usage. Daily usage report reviews the usage of individual apps through a consolidated report sent through push notification to the user at the end of each day."
          imageSrc="/images/yourhour/reports.webp"
          imageAlt="YourHour image"
        />
      </div>

      {/* NEW FEATURES Mindful Pause */}
      <div className="px-4 py-8 mx-auto">
        <div className="max-w-5xl flex flex-col gap-7 items-center justify-center mx-auto">
          <p className="text-[#FF5225] tracking-[0.2em] text-sm md:text-base font-bold font-poppins uppercase text-center ">
            NEW FEATURES INTRODUCED
          </p>
          <span className="w-full max-w-3xl text-lg md:text-4xl font-semibold font-poppins text-[#000000] text-center leading-snug">
            Mindful Pause | Usage Pattern
          </span>
          <p className="max-w-4xl font-poppins font-normal text-[#444444] leading-relaxed text-sm md:text-base mx-auto">
            We've Added Two Powerful Features To Help You Stay Aware And In
            Control Of Your Screentime:
          </p>
          <p className="max-w-4xl font-poppins font-normal text-[#444444] leading-relaxed text-sm md:text-base mx-auto">
            <span className="font-semibold">Mindful Pause</span> – Get Notified
            When You Exceed Yourself Beyond Your Set App Usage Limit. A Gentle
            Reminder Appears Right On The App's Opening Screen To Help You Take
            A Mindful Break.
          </p>
          <p className="max-w-4xl font-poppins font-normal text-[#444444] leading-relaxed text-sm md:text-base mx-auto">
            <span className="font-semibold">Usage Pattern</span> – Visualize
            Your App Habits With Easy-To-Read Graphs. See How Often You Open An
            App And How Much Time You Spend, Categorized Into Four Behavioral
            Types For Better Self-Awareness.
          </p>
        </div>
        <div className="relative aspect-[1/0.7] w-full max-w-5xl mx-auto">
          <Image
            src="/images/yourhour/mindful-pause.webp"
            alt="YourHour image"
            fill
            className="object-contain scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* What We Learned Section */}
      <div className="px-4 py-6 mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="hidden md:visible md:flex items-center flex-wrap justify-center gap-3 text-lg md:text-4xl font-normal font-poppins text-[#000000] text-center leading-snug">
            What <span className="font-bold">We Have Learned</span> Serving
            <span className="font-bold text-8xl">5</span>
            <span className="font-bold">Million</span> Users
          </h2>
          <h2 className="md:hidden visible text-center text-2xl md:text-3xl font-poppins font-bold text-[#1A1A1A] leading-snug">
            What We Have Learned Serving 5 Million Users
          </h2>
          <div className="relative w-full aspect-[1/0.9] md:w-180 mx-auto">
            <Image
              src="/images/yourhour/learn-serving.webp"
              alt="Learned Illustration"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
          <div className="space-y-10 md:space-y-15">
            {learnedItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl md:text-2xl text-[#000000] font-poppins font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-[#000000] font-poppins font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Went Right For This Product */}
      <div className="max-w-7xl px-4 py-12 mx-auto">
        <h2 className="text-lg md:text-4xl font-normal font-poppins text-[#000000] text-center mb-8 lg:mb-16 leading-snug">
          What <span className="font-bold">Went Right</span> For{" "}
          <span className="font-bold">This Product</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12 lg:gap-20">
          <YourHourGrowthChart />
          <div className="space-y-12 text-sm md:text-base font-normal font-poppins text-[#101010] leading-relaxed">
            {wentRightPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Marketing and Distribution Section */}
      <div className="px-4 py-8 md:py-16 mx-auto bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF5225] tracking-[0.2em] text-sm md:text-base font-bold font-poppins uppercase text-center mb-8 lg:mb-16">
              MARKETING AND DISTRIBUTION
            </p>
            <h2 className="text-lg md:text-4xl font-normal font-poppins text-[#000000] text-center leading-snug">
              YourHour Employed{" "}
              <span className="font-bold">Various Marketing</span> And{" "}
              <span className="font-bold">Distribution Strategies</span> To
              <br className="hidden md:block" />
              Reach And Engage Its{" "}
              <span className="font-bold">Target Audience</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
            <div className="space-y-18 mt-20">
              <div className="space-y-3">
                <h3 className="w-full text-base md:text-lg font-poppins font-semibold text-[#000000] border-b border-[#000000] pb-2 inline-block">
                  Digital Marketing Campaigns
                </h3>
                <p className="max-w-88 text-xs font-poppins text-[#000000] leading-relaxed">
                  The Team Executed Targeted Digital Marketing Campaigns Using
                  Social Media Platforms, Search Engine Optimization, And Online
                  Advertisements To Raise Awareness About YourHour's Benefits
                  And Drive App Downloads.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="w-full text-base md:text-lg font-poppins font-semibold text-[#000000] border-b border-[#000000] pb-2 inline-block">
                  Organic Virality
                </h3>
                <p className="max-w-88 text-xs font-poppins text-[#000000] leading-relaxed">
                  With A Mission To Tackle The Growing Concern Of Excessive
                  Screen Time, YourHour Has Witnessed Unparalleled Organic
                  Growth Since Its Launch. Satisfied Users Enthusiastically
                  Share Their Positive Experiences With Friends And Family,
                  Triggering A Powerful Effect Of Organic Growth For The App.
                </p>
              </div>
              <div className="space-y-3 -mt-4">
                <h3 className="w-full text-base md:text-lg font-poppins font-semibold text-[#000000] border-b border-[#000000] pb-2 inline-block">
                  Partnership with Educational Institutions
                </h3>
                <p className="max-w-88 text-xs font-poppins text-[#000000] leading-relaxed">
                  YourHour Has Established Partnerships With Educational
                  Institutions To Promote Digital Wellness Among Students. This
                  Involved Conducting Workshops, Providing Resources, And
                  Offering Special Incentives For Student Engagement.
                </p>
              </div>
            </div>
            <div className="relative w-full max-w-[420px] h-[732px] mx-auto px-4">
              <Image
                src="/images/yourhour/marketingImg.webp"
                alt="Marketing and Distribution Strategies"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            <div className="space-y-16">
              <div className="space-y-3 text-right mt-20">
                <h3 className="w-full text-base md:text-lg font-poppins font-semibold text-[#000000] border-b border-[#000000] pb-2 inline-block">
                  App Store Optimization
                </h3>
                <p className="max-w-88 text-xs font-poppins text-[#000000] leading-relaxed ml-auto">
                  The App's Visibility And Discoverability Were Enhanced Through
                  Effective App Store Optimization Techniques, Including
                  Optimizing Keywords, App Descriptions, And Screenshots.
                </p>
              </div>
              <div className="space-y-3 text-right mt-24">
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
      <div className="max-w-7xl px-4 py-6 md:py-16 mx-auto">
        <p className="text-[#FF5225] tracking-[0.2em] text-sm md:text-base font-bold font-poppins uppercase text-center mb-8 lg:mb-16">
          CUSTOMER RESPONSE AND IMPACT
        </p>
        <h2 className="full max-w-4xl text-lg md:text-4xl font-normal font-poppins text-[#000000] text-center mb-8 lg:mb-16 leading-snug mx-auto">
          The <span className="font-bold">Response From Customers</span> And{" "}
          <span className="font-bold">The Impact Of YourHour</span> Have Been{" "}
          <span className="font-bold">Significant</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative w-full aspect-square">
              <Image
                src="/images/yourhour/customer-response.webp"
                alt="YourHour Reviews Phone"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-10">
            {responseItems.map((item) => (
              <div key={item.title}>
                <h4 className="text-xl font-semibold text-[#101010] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base font-normal font-poppins text-[#101010] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Managed Release */}
      <div className="px-4 py-6 md:py-16 mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-10 md:gap-15">
            <div className="flex flex-col items-center justify-center gap-5">
              <h2 className="w-full xl:w-5xl text-lg md:text-4xl font-normal font-poppins text-[#000000] text-center leading-snug">
                How <strong>We Managed</strong> To{" "}
                <strong>Release Over 350 App</strong> Updates
                <br /> With <strong>A Team Of 2 Developers</strong>
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col xl:flex-row gap-5 mb-14">
                {releaseCards.slice(0, 2).map((card) => (
                  <div
                    key={card.title}
                    className={`bg-[#FFFFFF] rounded-2xl p-6 xl:p-8 w-full xl:w-[35.65rem] h-auto ${card.heightClass} text-center`}
                    style={{
                      boxShadow: "4px 4px 17px rgba(54, 47, 115, 0.5)",
                    }}
                  >
                    <h3 className="text-xl xl:text-2xl font-semibold mb-4 xl:mb-7">
                      {card.title}
                    </h3>
                    <p className="text-sm xl:text-base font-normal text-[#444444] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
              {releaseCards.slice(2).map((card) => (
                <div
                  key={card.title}
                  className={`bg-[#FFFFFF] rounded-2xl p-6 xl:p-8 w-full xl:w-[35.65rem] h-auto ${card.heightClass} text-center`}
                  style={{ boxShadow: "4px 4px 17px rgba(54, 47, 115, 0.5)" }}
                >
                  <h3 className="text-xl xl:text-2xl font-semibold mb-4 xl:mb-7">
                    {card.title}
                  </h3>
                  <p className="text-sm xl:text-base font-normal text-[#444444] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
