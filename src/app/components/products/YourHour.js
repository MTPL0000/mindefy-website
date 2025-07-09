"use client";
import Image from "next/image";


export default function YourHourProduct() {
  return (
    <section className="max-w-[90rem] mx-auto pt-16 px-4 xl:px-0">
      <div className="flex flex-col items-center justify-center gap-5 mt-8 mb-8">
        <p className="text-[#FF5225] text-[1rem] font-bold tracking-wider uppercase">
          Our Product
        </p>
        <span className="text-2xl md:text-3xl xl:text-4xl font-normal text-[#000000] text-center px-4 xl:px-0">
          <span className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#000000]">
            YourHour
          </span>{" "}
          Empowering Digital Wellbeing
        </span>
      </div>

      {/* Main Content - Flex Layout */}
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-[3.25rem]">
        {/* Section 1 */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative aspect-[1.36/1] w-full overflow-hidden">
            <Image
              src="/images/your-hour/yh-1.webp"
              alt="All Screens"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-[90%] mt-4">
            <p className="text-sm md:text-base xl:text-lg font-normal text-[#444444] leading-relaxed">
              YourHour is a revolutionary mobile application designed to empower
              individuals to take charge of their digital lives. With an array
              of intuitive features and insights, YourHour offers a
              comprehensive solution to help users achieve a healthier balance
              between screen time and real-life experiences. By tracking and
              analyzing screen time usage, setting personalized reminders, and
              providing a focus mode for uninterrupted productivity.
            </p>
            <p className="mt-7 text-sm md:text-base xl:text-lg font-normal text-[#444444] leading-relaxed">
              In a world where smartphones have become an integral part of our
              daily routines, it's easy to lose track of time and succumb to
              excessive screen time. YourHour comes to the rescue with its
              comprehensive suite of features that help users monitor and manage
              their screen usage effectively. By tracking screen time, analyzing
              app usage patterns, and setting personalized reminders, YourHour
              encourages users to develop healthier screen habits and strike a
              balance between the virtual and real worlds. By setting goals and
              achieving milestones, the app motivates users on their journey to
              improved productivity, enhanced wellbeing, and increased
              mindfulness.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-[6rem] mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mb-8">
              <p className="text-[#FF5225] text-[1rem] font-bold tracking-wider uppercase text-center px-4 xl:px-0">
                Maximize Your Success With Key Features and Advantages
              </p>
              <span className="w-full xl:w-[790px] text-lg md:text-xl xl:text-[2.13rem] font-semibold text-[#000000] text-center px-4 xl:px-0">
                Your Hour Offers A Range Of Key Features And Benefits To Its
                Users, Including
              </span>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
              <div className="w-[90%] lg:w-[80%]">
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
                  Screen Time Monitoring
                </h3>
                <p className="text-sm md:text-base xl:text-lg font-medium text-[#444444] leading-relaxed text-center lg:text-left">
                  Users can track their daily and weekly screen time usage
                  across various apps and categories, gaining insights into
                  their digital habits and identifying areas for improvement.
                </p>{" "}
              </div>
              <div className="relative aspect-[1.36/1] w-full overflow-hidden">
                <Image
                  src="/images/your-hour/yh-2.webp"
                  alt="YourHour image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          <div className="relative aspect-[1.36/1] w-full overflow-hidden">
            <Image
              src="/images/your-hour/yh-3.webp"
              alt="YourHour image"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-[90%] lg:w-[80%]">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              App Usage Analysis
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-medium text-[#444444] leading-relaxed text-center lg:text-left">
              Your Hour provides a detailed breakdown of app usage, allowing
              users to understand which apps consume the most time and make
              informed decisions about app usage management.
            </p>{" "}
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          <div className="w-[90%] lg:w-[80%]">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              Customizable Reminders
              <br className="hidden lg:block" /> And Alerts
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-medium text-[#444444] leading-relaxed text-center lg:text-left">
              Users can set personalized reminders and alerts to help them take
              regular breaks, reduce excessive screen time, and establish
              healthier usage patterns.
            </p>{" "}
          </div>
          <div className="relative aspect-[1.36/1] w-full overflow-hidden">
            <Image
              src="/images/your-hour/yh-4.webp"
              alt="YourHour image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Section 5 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          <div className="relative aspect-[1.36/1] w-full overflow-hidden">
            <Image
              src="/images/your-hour/yh-5.webp"
              alt="YourHour image"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-[90%] lg:w-[80%]">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              Curated & Scheduled <br className="hidden lg:block" /> Challenges
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-medium text-[#444444] leading-relaxed text-center lg:text-left">
              YourHour app has an algorithm based feature of curated challenges,
              as you progress on your Detox Journey with YourHour, the app
              starts auto-suggesting and curating Fast & Diet challenges on the
              apps you are most addicted to.
            </p>{" "}
          </div>
        </div>

        {/* Section 6 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          <div className="w-[90%] lg:w-[80%]">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              Personalized Detailed
              <br className="hidden lg:block" /> Reports
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-medium text-[#444444] leading-relaxed text-center lg:text-left">
              YourHour app provides its users Detailed Daily, Weekly and Monthly
              report of their app usage. Daily usage report reviews the usage of
              individual apps through a consolidated report sent through push
              notification to the user at the end of each day.
            </p>{" "}
          </div>
          <div className="relative aspect-[1.36/1] w-full overflow-hidden">
            <Image
              src="/images/your-hour/yh-6.webp"
              alt="YourHour image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Section list 1 */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-[6rem]">
            <div className="flex flex-col items-center justify-center gap-5 mt-3 mb-8">
              <p className="text-[#FF5225] text-[1rem] font-bold tracking-wider uppercase text-center px-4 xl:px-0">
                Marketing and Distribution
              </p>
              <span className="w-full xl:w-[1000px] text-lg md:text-xl xl:text-[2.13rem] font-normal text-[#000000] text-center px-4 xl:px-0">
                YourHour Employed <strong>various marketing</strong> And
                <strong> Distribution Strategies</strong> To Reach And Engage
                Its <strong>Target Audience</strong>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative aspect-[1.8/1] w-full overflow-hidden">
                <Image
                  src="/images/your-hour/md.webp"
                  alt="YourHour image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full xl:w-[60rem] px-4 xl:px-0">
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                  Digital Marketing Campaigns
                </h3>
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  The team executed targeted digital marketing campaigns using
                  social media platforms, search engine optimization, and online
                  advertisements to raise awareness about YourHour's benefits
                  and drive app downloads.
                </p>{" "}
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                  Organic virality
                </h3>
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  With a mission to tackle the growing concern of excessive
                  screen time, YourHour has witnessed unparalleled organic
                  growth since its launch. Satisfied users enthusiastically
                  share their positive experiences with friends and family,
                  triggering a powerful snowball effect of organic growth for
                  the app.
                </p>{" "}
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                  Influencer Collaborations
                </h3>
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  YourHour collaborated with social media influencers and
                  digital wellness advocates who shared their experiences using
                  the app, expanding its reach and credibility among their
                  followers.
                </p>{" "}
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                  App Store Optimization
                </h3>
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  The app's visibility and discoverability were enhanced through
                  effective app store optimization techniques, including
                  optimizing keywords, app descriptions, and screenshots.
                </p>{" "}
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                  Partnership with Educational Institutions
                </h3>
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  YourHour has established partnerships with educational
                  institutions to promote digital wellness among students. This
                  involved conducting workshops, providing resources, and
                  offering special incentives for student engagement.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Section list 2 */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-[6rem]">
            <div className="flex flex-col items-center justify-center gap-5 mb-8">
              <p className="text-[#FF5225] text-[1rem] font-bold tracking-wider uppercase text-center px-4 xl:px-0">
                Customer Response and Impact
              </p>
              <span className="w-full xl:w-[1000px] text-lg md:text-xl xl:text-[2.13rem] font-normal text-[#000000] text-center px-4 xl:px-0">
                The <strong>Response From Customers</strong> And
                <strong> The Impact Of YourHour</strong> Have Been{" "}
                <strong>Significant</strong>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative aspect-[1.36/1] w-full overflow-hidden">
                <Image
                  src="/images/your-hour/CR.webp"
                  alt="YourHour image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full xl:w-[60rem] mt-12 px-4 xl:px-0">
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                  Positive User Reviews
                </h3>
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  Users have praised YourHour for its user-friendly interface,
                  accurate tracking, and effective tools for managing screen
                  time. Many have reported improvements in productivity, reduced
                  digital distractions, and a healthier balance between screen
                  time and real-life activities.
                </p>{" "}
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                  Behavioral Shifts
                </h3>
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  YourHour's impact extends beyond individual users. By helping
                  millions of people manage their screen time, the app has
                  contributed to a broader behavioral shift towards healthier
                  digital habits, fostering better mental health, improved
                  focus, and increased productivity.
                </p>{" "}
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                  Digital Wellbeing Advocacy
                </h3>
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  YourHour's success has positioned the app as a key player in
                  the digital wellbeing space. It has become an advocate for
                  responsible technology usage and has inspired conversations
                  about the importance of digital balance, leading to increased
                  awareness and discussions around digital wellness.
                </p>{" "}
                <h3 className="text-xl md:text-2xl font-semibold text-[#000000] mb-4">
                  User Retention and Engagement
                </h3>
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  YourHour has achieved high user retention rates due to its
                  valuable features, regular updates, and strong customer
                  support. The app's active user community and engagement
                  through forums and social media platforms have created a sense
                  of belonging and moti vated users to continue their digital
                  wellbeing journey.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Section list 3 */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-[6rem]">
            <div className="flex flex-col items-center justify-center gap-5 mb-8">
              <span className="w-full xl:w-[1000px] text-lg md:text-xl xl:text-[2.13rem] font-normal text-[#000000] text-center px-4 xl:px-0">
                What <strong>Went Right</strong> For{" "}
                <strong>This Product</strong>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative aspect-[1.36/1] w-full overflow-hidden">
                <Image
                  src="/images/your-hour/TP.webp"
                  alt="YourHour image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full xl:w-[60rem] mt-12 px-4 xl:px-0">
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  YourHour entered the market at a time when concerns about
                  smartphone addiction and digital wellness were on the rise.
                  The product tapped into a growing need, positioning itself as
                  a solution for individuals seeking to regain control over
                  their screen time.
                </p>{" "}
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  YourHour's success can be attributed to its user-centric
                  design and features. The developers conducted extensive
                  research to understand user pain points and preferences,
                  leading to the creation of a comprehensive suite of tools and
                  features that addressed users' needs.
                </p>{" "}
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed mb-9">
                  YourHour prioritized delivering a seamless user experience.
                  The app's intuitive interface, smooth navigation, and
                  straightforward setup process allowed users to easily monitor
                  their screen time, set limits, and track progress without
                  feeling overwhelmed or confused.
                </p>{" "}
                <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed">
                  The developers consistently listened to user feedback and
                  incorporated valuable suggestions into the app's updates. This
                  approach helped in enhancing the functionality, performance,
                  and overall user experience of YourHour, contributing to user
                  retention and positive reviews.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Section list 4 */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-[6rem]">
            <div className="flex flex-col items-center justify-center gap-5 mb-8">
              <span className="w-full xl:w-[1000px] text-lg md:text-xl xl:text-[2.13rem] font-normal text-[#000000] text-center px-4 xl:px-0">
                What <strong>We Have Learned</strong> Serving{" "}
                <strong className="text-end">
                  <span className="relative top-2 xl:top-5 text-[3rem] md:text-[4rem] xl:text-[6.25rem]">
                    4
                  </span>{" "}
                  Million
                </strong>{" "}
                Users What
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative aspect-[1.36/1] w-full overflow-hidden">
                <Image
                  src="/images/your-hour/LSU.webp"
                  alt="YourHour image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full xl:w-[60rem] mt-12 px-4 xl:px-0">
                <div className="flex flex-col md:flex-row items-center justify-center gap-7 mb-9">
                  <div className="relative aspect-[1/1] w-[50px] md:w-[22%] overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/your-hour/cap-icon.png"
                      alt="YourHour image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#000000] text-center md:text-left">
                      Importance of Education
                    </h3>
                    <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed text-center md:text-left">
                      Serving a large user base highlighted the significance of
                      educating users about the impact of excessive screen time
                      and the benefits of digital wellbeing. YourHour invested
                      in creating informative content, including blog posts,
                      newsletters, and in-app resources, to educate and raise
                      awareness among users.
                    </p>
                  </div>
                </div>{" "}
                <div className="flex flex-col md:flex-row items-center justify-center gap-7 mb-9">
                  <div className="relative aspect-[1/1] w-[50px] md:w-[22%] overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/your-hour/hand-icon.png"
                      alt="YourHour image"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#000000] text-center md:text-left">
                      Customization is Key
                    </h3>
                    <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed text-center md:text-left">
                      User preferences and requirements vary widely when it
                      comes to managing screen time. Through interactions with
                      millions of users, YourHour learned the importance of
                      providing customizable features, allowing users to tailor
                      their experience and adapt the app to their individual
                      needs.
                    </p>
                  </div>
                </div>{" "}
                <div className="flex flex-col md:flex-row items-center justify-center gap-7 mb-9">
                  <div className="relative aspect-[1/1] w-[50px] md:w-[22%] overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/your-hour/innovation-icon.png"
                      alt="YourHour image"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#000000] text-center md:text-left">
                      Continuous Innovation
                    </h3>
                    <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed text-center md:text-left">
                      Serving a significant user base emphasized the need for
                      continuous innovation. YourHour implemented new features,
                      such as app usage categorization, goal setting, and
                      screen-free challenges, to cater to evolving user demands
                      and remain competitive in the digital wellbeing space.
                    </p>
                  </div>
                </div>{" "}
                <div className="flex flex-col md:flex-row items-center justify-center gap-7 mb-9">
                  <div className="relative aspect-[1/1] w-[50px] md:w-[22%] overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/your-hour/book-icon.png"
                      alt="YourHour image"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#000000] text-center md:text-left">
                      overloading with Features
                    </h3>
                    <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed text-center md:text-left">
                      Despite numerous ideas and feature requests, the team
                      resisted the temptation to include every possible feature
                      in YourHour. They recognized the importance of keeping the
                      app focused and user-friendly, avoiding feature bloat that
                      could overwhelm or confuse users.
                    </p>
                  </div>
                </div>{" "}
                <div className="flex flex-col md:flex-row items-center justify-center gap-7 mb-9">
                  <div className="relative aspect-[1/1] w-[50px] md:w-[22%] overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/your-hour/lock-icon.png"
                      alt="YourHour image"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#000000] text-center md:text-left">
                      Compromising User Privacy
                    </h3>
                    <p className="text-sm md:text-base font-normal text-[#000000] leading-relaxed text-center md:text-left">
                      YourHour prioritized user privacy and security from the
                      outset. They ensured that the app collected only essential
                      data for functionality, implemented strong encryption
                      protocols, and maintained transparent data handling
                      practices, earning user trust in an era of increasing data
                      privacy concerns.
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Section list 5 */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 xl:gap-[6rem]">
            <div className="flex flex-col items-center justify-center gap-5 mb-8">
              <span className="w-full xl:w-[1000px] text-lg md:text-xl xl:text-[2.13rem] font-normal text-[#000000] text-center px-4 xl:px-0">
                How <strong>We Managed</strong> To{" "}
                <strong>Release Over 250 App</strong> Updates
                <br /> With <strong>A Team Of 2 Developers</strong>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-[2rem]">
              <div className="relative aspect-[1.36/1] w-full overflow-hidden">
                <Image
                  src="/images/your-hour/MRA.webp"
                  alt="YourHour image"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center px-4 py-8 xl:py-16">
                {/* Top Row */}
                <div className="flex flex-col xl:flex-row gap-5 mb-14">
                  {/* Card 1 */}
                  <div
                    className="bg-[#FFFFFF] rounded-[14px] p-6 xl:p-8 w-full xl:w-[35.65rem] h-auto xl:h-[16.3rem] text-center"
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
                    className="bg-[#FFFFFF] rounded-[14px] p-6 xl:p-8 w-full xl:w-[35.65rem] h-auto xl:h-[16.3rem] text-center"
                    style={{
                      boxShadow: "4px 4px 17px rgba(54, 47, 115, 0.5)",
                    }}
                  >
                    <h3 className="text-xl xl:text-2xl font-semibold mb-4 xl:mb-7">
                      Prioritizing User Feedback
                    </h3>
                    <p className="text-sm xl:text-base font-medium text-[#444444] leading-relaxed">
                      User feedback played a crucial role in shaping each
                      update. The developers actively sought user input through
                      surveys, app reviews, and direct communication channels,
                      ensuring that updates addressed the most pressing user
                      concerns and pain points.
                    </p>
                  </div>
                </div>

                {/* Bottom Centered Card */}
                <div
                  className="bg-[#FFFFFF] rounded-[14px] p-6 xl:p-8 w-full xl:w-[35.65rem] h-auto xl:h-[18rem] text-center"
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
      </div>
    </section>
  );
}
