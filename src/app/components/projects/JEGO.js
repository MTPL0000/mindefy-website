import Image from "next/image";
export default function JEGO() {
  const backlogItems = [
    // Row 1
    "Visibility over the internet",
    "SignUp/SignIn via 3rd party",
    "Enhance input box",
    "Show/Hide Password",
    "Authenticate Subject",
    "Working OTP Link",
    "Read Notification Status",

    // Row 2
    "Lesson details and time",
    "Events what/how it works",
    "Register button on events",
    "Event model/ agenda",
    "Redesign Profile Section",
    "Button Action on Enter",
    "Include Apple for SignUp",

    // Row 3
    "Jego Introduction",
    "Introduction of Crystal",
    "Relatable Thumbnails",
    "Course Description",
    "Placeholder Image for Profile",
    "Crystal intro in icon itself",
    "Ask help apart from FAQ",

    // Row 4
    "Help and FAQ move to settings",
    "Redesign the player",
    "Redesign Subscription page",
    "Mentors Profile",
    "Benefits explained",
    "Introduce decoy to the subs",
    "New look for paid users",
  ];

  const primaryColors = [
    "#286D7C",
    "#3E8D9E",
    "#5AAEC0",
    "#7BD0E2",
    "#9DEEFF",
    "#B3F1FF",
    "#C9F5FF",
    "#DFF9FF",
    "#F5FDFF",
  ];

  const secondaryColors = [
    "#483E0F",
    "#655819",
    "#827224",
    "#A08D32",
    "#BDA741",
    "#DAC353",
    "#FFED96",
    "#FFF4C3",
    "#FFFCF0",
  ];

  return (
    <main className="bg-[#164E5A] w-full flex flex-col items-center justify-center gap-32 pb-16 mx-auto">
      {/* Main Image */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/projects/JG-1.webp"
          alt="JEGO Dashboard"
          width={1440}
          height={900}
          className="object-contain"
        />
      </section>

      {/* GIF Section */}
      <section className="w-[70.5rem] flex flex-col items-start justify-center gap-15">
        <h3 className="text-[#FFFFFF] font-bold text-3xl font-poppins text-left">
          The Process
        </h3>
        {/* GIF Image */}
        <div className="relative overflow-hidden">
          <Image
            src="/images/projects/JG-GIF.gif"
            alt="Animation"
            width={1126}
            height={426}
            className="object-contain"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="w-[70.5rem] flex items-start justify-between">
        <h3 className="text-[#FFFFFF] font-bold text-3xl font-poppins text-left">
          About the project
        </h3>

        <div className="w-[43.5rem] flex flex-col items-center justify-center gap-8">
          <p className="text-[#5AAEC0] font-normal text-base font-poppins text-justify leading-normal">
            How do you reflect joy, ease, grace, and being omnipresent?
            <br />
            "S M I L E," the first thing that comes even before a thought, Jego
            brings those blessings into your life. Content that is rich in
            meditation trips and condensed wisdom to succeed in relationships,
            business, and a package of how to live a full-spectrum life
          </p>
          <p className="text-[#5AAEC0] font-normal text-base font-poppins text-justify leading-normal">
            Introduction to the Mentor's profiles, to persuade you to trust or
            encourage you to allow an app to become a part of your everyday life
            by raising the visibility of the individuals who created those
            courses. Along with mentors, it might occasionally be challenging to
            aid you with that competence and to know where to start. Jego
            Mastery, thanks to mentors for carefully choosing the course
            sequences. More features introduced to the remainder of the
            application's overhaul.
          </p>
        </div>
      </section>

      {/* UX Laws and Psychologies Section */}
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl flex flex-col items-start gap-10">
          <h2 className="text-[#FFFFFF] font-bold text-3xl font-poppins text-left">
            UX Laws and Psychologies
          </h2>
          {/* Top Row: Link, Gap, Description */}
          <div className="w-full flex items-center justify-center gap-6">
            <span className="text-[#C9F5FF] text-sm font-medium max-w-92 text-left leading-normal">
              A lot of disconnects with user and no prompt or nudge to create or
              keep up the engagement
            </span>

            <span className="text-[#C9F5FF] text-[100px]">&#8592;</span>
            <span className="bg-[#F5FDFF] mt-4 px-7 py-1 text-[#164E5A] text-2xl font-semibold rounded-md">
              Gap
            </span>
            <span className="text-[#C9F5FF] text-[100px]">&#8594;</span>

            <span className="text-[#C9F5FF] text-sm font-medium max-w-92 text-left leading-normal">
              Friendly Connection with Users, Introduce Nudges &amp;, reduce
              cognitive load. Make app more engaging &amp; delightful to use.
            </span>
          </div>
        </div>

        <div className="w-full max-w-6xl flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-5">
            {/* Subtitle */}
            <span className="text-[#C9F5FF] text-2xl font-normal">
              Our Brains Automatically blocks anything that’s:
            </span>

            {/* Highlighted Keywords */}
            <div className="flex items-center justify-center gap-8">
              <span className="text-[#F7DE66] font-semibold text-2xl">
                High Effort
              </span>
              <span className="text-[#F7DE66] font-semibold text-2xl">
                Unrelated
              </span>
              <span className="text-[#F7DE66] font-semibold text-2xl">
                Redundant
              </span>
            </div>
          </div>

          {/* Grid of Laws */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-18 w-full">
            <div className="flex items-start justify-center gap-7">
              {/* Hicks Law */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Hicks Law
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  Time and Efforts it takes to make a Decision increases with
                  Number of Options.
                </p>
              </div>
              {/* Selective Attention */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Selective Attention
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  Anything that’s not part of what we are currently doing, has
                  little chance of getting noticed
                </p>
              </div>
              {/* Banner Blindness */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Banner Blindness
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  User ignore content which resembles ads, is close to ads, or
                  appears in location dedicated to ads.
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center gap-7">
              {/* Priming */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Priming
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  Activating association or representation in user’s short term
                  memory just before another task is introduced.
                </p>
              </div>
              {/* Baader-Meinhof Effect */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Baader-Meinhof Effect
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  When your awareness of something increases, when brain
                  reinforces the new acquired information
                </p>
              </div>
              {/* Cognitive Load */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Cognitive Load
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  Cognitive load is the total amount of effort required to
                  complete a task it influences the way we receive the
                  information
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center gap-7">
              {/* Loss Aversion */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Loss Aversion
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  We hate loosing way more than we love winning, in other words
                  losing 500 will hurt us more than the joy of earning 500
                </p>
              </div>
              {/* Discoverability */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Discoverability
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  It is the ease at which user can find features within a
                  product
                </p>
              </div>
              {/* Labor Illusions */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Labor Illusions
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  People find wait more tolerable when they can see work is
                  being done on their behalf
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center gap-7">
              {/* Progressive Disclosures */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Progressive Disclosures
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  An interface is easier to use when complex features are
                  gradually revealed
                </p>
              </div>
              {/* Curiosity Gap */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Curiosity Gap
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  When we want to know something but, can’t. It’s like having an
                  itch that we need to scratch.
                </p>
              </div>
              {/* Scarcity */}
              <div className="w-[18.75rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Scarcity
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  We tend to want more of what we can’t have; Time, Quantity,
                  Access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market and Competition Research Section */}
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl flex flex-col gap-10">
          <h2 className="text-[#F5FDFF] font-bold text-3xl font-poppins text-left mb-6">
            Market and Competition Research
          </h2>
          <div className="w-full flex justify-center items-start gap-12 ml-6">
            <div className="w-54 flex flex-col items-start justify-center gap-8">
              <span className="text-[#F7DE66] text-xl font-normal">
                Competitor
              </span>
              <div className="h-54 flex flex-col items-center gap-2">
                <div className="relative w-42 h-32 bg-[#1E1E1E] rounded-md">
                  <Image
                    src="/images/projects/JG-2.png"
                    alt="Master-Class"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="h-54 flex flex-col items-center gap-2">
                <div className="w-42 h-32 bg-[#F15628] py-2 rounded-md flex flex-col gap-1 items-center justify-center">
                  <Image
                    src="/images/projects/JG-3.png"
                    alt="Round-Glass"
                    width={74}
                    height={74}
                  />
                  <span className="text-[#FFFFFF] font-semibold text-xl">
                    roundglass
                  </span>
                </div>
              </div>
            </div>

            <div className="w-86 flex flex-col items-start justify-center gap-8">
              <span className="text-[#F7DE66] text-xl font-normal">
                Unique Value Proposition
              </span>
              <p className="h-54 text-[#C9F5FF] font-normal text-sm text-left leading-normal">
                Masterclass is the streaming platform that makes it possible for
                anyone to watch or listen to hundreds of video lessons taught by
                150+ of the world’s best.
              </p>
              <p className="h-54 text-[#C9F5FF] font-normal text-sm text-left leading-normal">
                Founded by entrepreneur Sunny Singh, who aims to revolutionize
                health care with a focus on prevention. But that’s just the
                beginning.
              </p>
            </div>

            <div className="w-73 flex flex-col items-start justify-center gap-8">
              <span className="text-[#F7DE66] text-xl font-normal">
                Company Advantages
              </span>
              <ul className="h-54 text-[#C9F5FF] font-normal text-sm text-left  leading-normal list-none list-inside space-y-4">
                <li>Easy to use app with clean and dynamic layout.</li>
                <li>
                  To extract with fellow learners community forums are
                  available.
                </li>
                <li>Cross platform usability with option to watch offline</li>
              </ul>
              <ul className="h-54 text-[#C9F5FF] font-normal text-sm text-left leading-normal list-none list-inside space-y-4">
                <li>UI with a gentle guide for anyone to use it seamlessly.</li>
                <li>
                  Plays in background and which really helps user while
                  meditating or hearing something positive in background while
                  working
                </li>
                <li>
                  An app that can really be adapted in daily use with verity of
                  content to discover
                </li>
              </ul>
            </div>

            <div className="w-80 flex flex-col items-start justify-center gap-8">
              <span className="text-[#F7DE66] text-xl font-normal">
                Company Disadvantages
              </span>
              <ul className="h-54 text-[#C9F5FF] font-normal text-sm text-left leading-normal list-none list-inside space-y-4">
                <li>
                  No Flexibility in payment options and upbeat price from
                  options available in market.
                </li>
                <li>No Test of skills no QA no certificates</li>
                <li>Not wonderful reputation in education circle.</li>
              </ul>
              <ul className="h-54 text-[#C9F5FF] font-normal text-sm text-left leading-normal list-none list-inside space-y-4">
                <li>
                  App has some bugs while watching the content and browsing.
                </li>
                <li>Little Expensive with no flexibility in payment options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Market Research Grid Section */}
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl flex flex-col px-[3.125rem] gap-8">
          {/* Row 1 */}
          <div className="flex flex-row ">
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                LinkedIn Learning
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[3.14rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Khan Academy
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                68% Experienced Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                42% Budget Constraints
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                32 Average age of Online Learning
              </span>
            </div>
            <div className="bg-[#3E8D9E] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Lack of time 61%
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-row ">
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Udemy
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[3.14rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Skillshare
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.125rem] w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Online Education will be worth $374 Billion by year 2026
              </span>
            </div>
            <div className="bg-[#3E8D9E]  w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                More learning due to social distancing each of the 2020 pandemic
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-row">
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Domestika
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Coursera
              </span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-row">
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                MasterClass
              </span>
            </div>
          </div>

          {/* Demographics Row */}
          <div className="flex flex-row mt-8">
            <div className="bg-[#F7DE66]  mr-[3.81rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#483E0F] w-[7.875rem]  text-base font-medium font-inter text-center">
                16-22 <br></br>Gen Z
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Bored Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Stuck at Home Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Expanding Skillset Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Business Offered Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E]  w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Advancing Skills Learners
              </span>
            </div>
          </div>

          <hr className="h-px my-8 bg-[#286D7C] border-0 dark:bg-[#286D7C]"></hr>

          {/* Millennials Row */}
          <div className="flex flex-row ">
            <div className="bg-[#F7DE66]  mr-[3.81rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#483E0F] w-[7.875rem]  text-base font-medium font-inter text-center">
                25-38 Millennials
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Influencer generation
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Spends 3 hours on average per day
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                The Smallest earning potential
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.166rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                On track to be the best educated generation
              </span>
            </div>
          </div>

          <hr className="h-px my-8 bg-[#286D7C] border-0 dark:bg-[#286D7C]"></hr>

          {/* Boomers Row */}
          <div className="flex flex-row ">
            <div className="bg-[#F7DE66]  mr-[3.81rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#483E0F] w-[7.875rem]  text-base font-medium font-inter text-center">
                56-74 Boomers
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.125rem] w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Slowest down in social media use
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.125rem] w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                19% College Degree
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.125rem] w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Less Money than other generation
              </span>
            </div>
          </div>

          {/* Gen X Row */}
          <div className="flex flex-row">
            <div className="bg-[#F7DE66]  mr-[3.81rem] w-[9.375rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#483E0F] w-[7.875rem]  text-base font-medium font-inter text-center">
                39-55 Gen X
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.125rem] w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                The Smallest Generation
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.125rem] w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Best Earning Years
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.125rem] w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                29% College Degree
              </span>
            </div>
          </div>

          {/* Final Row */}
          <div className="flex flex-row">
            <div className="bg-[#3E8D9E] ml-[13.18rem] mr-[1.125rem] w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                Great increase in social media
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-[1.125rem] w-[16.25rem] h-[9.375rem] pt-[0.780rem]  pl-[0.780rem]  pr-[.719rem]">
              <span className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium font-inter text-center">
                The Fastest growing smartphone owners
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* User Behavior Mapping Section */}
      <section className="w-6xl flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl flex flex-col gap-[4.5rem]">
          <h2 className="text-[#F5FDFF] font-bold text-[2rem] text-left">
            User Behavior Mapping
          </h2>

          {/* Action Headers */}
          <div className="grid grid-cols-4  gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#F7DE66] font-semibold text-2xl">Action</h3>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#5AAEC0] font-normal text-2xl">
                Download & Install
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#5AAEC0] font-normal text-2xl">
                SignUp/SignIn
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#5AAEC0] font-normal text-2xl">
                Open app & Browse Content
              </h3>
            </div>
          </div>

          {/* Task List Row */}
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#F7DE66] font-semibold text-2xl">
                Task List
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#C9F5FF] font-semibold text-sm leading-relaxed">
                <p>A. Search App over Playstore</p>
                <p>B. Download and Install</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#C9F5FF] font-semibold text-sm leading-relaxed">
                <p>SignUp/SignIn</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#C9F5FF] font-semibold text-sm leading-relaxed">
                <p>A. Know what is Jego</p>
                <p>B. Browse Categories</p>
                <p>C. Choose Category to Start Watching.</p>
              </div>
            </div>
          </div>

          {/* Feeling Adjective Row */}
          <div className="grid grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#F7DE66] font-semibold text-2xl">
                Feeling Adjective
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#C9F5FF] font-semibold text-sm leading-relaxed space-y-3">
                <p>Why I am not able to find the in search. Is this the app?</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#C9F5FF] font-semibold text-sm leading-relaxed space-y-3">
                <p>Okay I can quickly signup using my Gmail/Facebook.</p>
                <p>Oops! This isn't working.</p>
                <p>
                  I need to write everything. Why they are asking for my phone
                  number?
                </p>
                <p>
                  And I am not sure if I have entered the password what I wanted
                  it to be.
                </p>
                <p>
                  If I enter one information wrong whole form goes blank but the
                  information entered is visible until I press submit.
                </p>
                <p>Why Mail Subject is Contact?</p>
                <p>And the verification link throws error.</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#C9F5FF] font-semibold text-sm leading-relaxed space-y-3">
                <p>Why this name Jego what does this mean?</p>
                <p>
                  What are these crystals? It says I can use it in In-App
                  Purchases. but I am not sure if I want to purchase anything
                  yet.
                </p>
                <p>
                  What is the Video for on the Top. What I am subscribing to?
                </p>
                <p>Some Thumbnails are Broken.</p>
                <p>
                  Only title with an image I have no clue what this content will
                  help me with.
                </p>
                <p>
                  Why this crystal has notification bubble do I have to do
                  something to make it go away?
                </p>
              </div>
            </div>
          </div>

          {/* Feeling Emotion Row */}
          <div className="grid grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#F7DE66] font-semibold text-2xl">
                Feeling Emotion
              </h3>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F7DE66] rounded-full flex items-center justify-center">
                  <span className="text-[#164E5A] text-lg">😊</span>
                </div>
                <span className="text-[#F5FDFF] font-semibold text-2xl">
                  Okay
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F7DE66] rounded-full flex items-center justify-center">
                  <span className="text-[#164E5A] text-lg">😤</span>
                </div>
                <span className="text-[#F5FDFF] font-semibold text-2xl">
                  Frustrated
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F7DE66] rounded-full flex items-center justify-center">
                  <span className="text-[#164E5A] text-lg">😕</span>
                </div>
                <span className="text-[#F5FDFF] font-semibold text-2xl">
                  Upset
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Map Section */}
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl flex flex-col  gap-[4.5rem]">
          <h2 className="text-[#F5FDFF] font-bold text-[2rem]  text-left">
            Empathy Map
          </h2>

          {/* Empathy Map Grid */}
          <div className="grid grid-cols-2 gap-14 mb-10">
            {/* Says Section */}
            <div className=" ">
              <div className="flex flex-col w-[32.35rem] mb-[12.875rem]  gap-[1.125rem]">
                <h3 className="text-[#F7DE66] font-semibold text-2xl">Says</h3>
                <div className="grid grid-cols-3 gap-4.5">
                  <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                    <span className="text-[#C9F5FF] text-base font-medium">
                      Talks Passionately about the subject
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                    <span className="text-[#C9F5FF] text-base font-medium">
                      Discuss dreams
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                    <span className="text-[#C9F5FF] text-base font-medium">
                      They like hands on learning
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                    <span className="text-[#C9F5FF] text-base font-medium">
                      Open minded
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                    <span className="text-[#C9F5FF] text-base font-medium">
                      Visual learners
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                    <span className="text-[#C9F5FF] text-base font-medium">
                      Knowledge is power
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Does Section */}
            <div className="flex flex-col w-[32.35rem]  gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-2xl">Does</h3>
              <div className="grid grid-cols-3 gap-4.5">
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Job
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Travel
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Adventures
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Watch YouTube reels and Instagram
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Hangout with loved one
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Working from Home
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Loves learning new things
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Netflix
                  </span>
                </div>
              </div>
            </div>

            {/* Thinks Section */}
            <div className="flex flex-col w-[32.35rem]  gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-2xl">Thinks</h3>
              <div className="grid grid-cols-3 gap-4.5">
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Advance in career
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Achieve Dreams
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Underestimates self
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Options
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Business is better
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Understand things don’t memorize
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Chaos is bad
                  </span>
                </div>
              </div>
            </div>

            {/* Feels Section */}
            <div className="flex flex-col w-[32.35rem] mb-[14.81rem] gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-2xl">Feels</h3>
              <div className="grid grid-cols-3 gap-4.5">
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Frustrated
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Got Late
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    How classmates have grown that fast
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Urge of becoming a better person
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Visualize achievements
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Career is Slow or not going anywhere
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Passionate towards learning
                  </span>
                </div>
              </div>
            </div>

            {/* Pains Section */}
            <div className="flex flex-col w-[32.35rem]  gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-2xl">Pains</h3>
              <div className="grid grid-cols-3 gap-4.5">
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Money
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    No Patience
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Procrastination
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Won’t be worth the money
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Get discouraged by learning
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Lots of distractions
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Lack of focus
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Short attention spans
                  </span>
                </div>
              </div>
            </div>

            {/* Gains Section */}
            <div className="flex flex-col w-[32.35rem]  gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-2xl">Gains</h3>
              <div className="grid grid-cols-3 gap-4.5">
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Advance knowledge
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Advance career
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Find self-worth in learning
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Connection with like-minded people
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Getting confidence of owning a business
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-[10rem] h-[10rem] pt-[0.833rem]  pl-[0.833rem] pr-[0.791rem]">
                  <span className="text-[#C9F5FF] text-base font-medium">
                    Learn about new life dimensions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona Section */}
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-[70.5rem] flex flex-col items-start gap-[4.5rem]">
          <h2 className="text-[#FFFFFF] font-bold text-[2rem]  text-left">
            User Persona
          </h2>

          {/* Persona Card */}
          <div className="">
            {/* Header */}
            {/* Main Content */}
            <div className="flex gap-7 mb-16">
              {/* Left Side - Image and Basic Info */}
              <div className="flex flex-col gap-6">
                {/* Profile Image Placeholder */}
                <div className="">
                  {/* This is where you'll place your image */}
                  <div className="relative w-55 h-61">
                    <Image
                      src="/images/UP-PP.webp"
                      alt="Profile Picture"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Basic Information */}
                <div className="flex flex-col gap-[1.875rem] w-48.5 text-[#FFFFFF]">
                  <div className="text-xl text-[#C9F5FF]">
                    <span className=" block font-normal">Age:</span>
                    <span className="font-medium">29 Years</span>
                  </div>
                  <div className="text-xl text-[#C9F5FF]">
                    <span className="block font-normal">Occupation:</span>
                    <span className="font-medium">Developer</span>
                  </div>
                  <div className="text-xl text-[#C9F5FF]">
                    <span className="block font-normal">Location:</span>
                    <span className="font-medium">Ahmedabad</span>
                  </div>
                  <div className="text-xl text-[#C9F5FF]">
                    <span className="block font-normal">Education:</span>
                    <span className="font-medium">BE Graduate</span>
                  </div>
                  <div className="text-xl text-[#C9F5FF]">
                    <span className="block font-normal">Status:</span>
                    <span className="font-medium">Unmarried/Single</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Name, Bio, and Personality */}
              <div className="flex-1 flex flex-col gap-6">
                {/* Name and Bio */}
                <div>
                  <h4 className="text-[#F7DE66] font-semibold text-4xl mb-2">
                    Siddharth Desai
                  </h4>
                  <span className="text-[#F7DE66] text-[1.625rem] font-semibold block mb-2">
                    Bio
                  </span>
                  <p className="text-[#C9F5FF] text-xl text-justify font-normal ">
                    Siddharth is a cheerful, kind, and helpful person who values
                    his family and friends. He has experience teaching and is
                    currently working in IT. He also intakes some commissioned
                    projects which help him master trending technologies to
                    advance in his career.
                  </p>
                </div>

                {/* Personality Traits */}
                <div className="ml-25">
                  <h5 className="text-[#F7DE66] font-semibold text-[1.25rem] mb-4.5">
                    Personality
                  </h5>
                  <div className="relative w-[45.43rem] h-[26.43rem]">
                    <Image
                      src="/images/UP1.webp"
                      alt="Profile Picture"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Interests, Influences, etc. */}
            <div className="grid grid-cols-3 gap-12 text-[#FFFFFF]">
              {/* Interests */}
              <div>
                <h5 className="text-[#F7DE66] font-semibold text-3xl mb-7">
                  Interests
                </h5>
                <ul className="space-y-4 text-xl text-[#C9F5FF] font-normal">
                  <li>Cricket watching and Playing</li>
                  <li>News</li>
                  <li>Coding</li>
                  <li>Punjabi Music</li>
                </ul>
              </div>

              {/* Influences */}
              <div>
                <h5 className="text-[#F7DE66] font-semibold text-3xl mb-7">
                  Influences
                </h5>
                <ul className="space-y-4 text-xl text-[#C9F5FF] font-normal">
                  <li>MS Dhoni</li>
                  <li>Father (Teacher)</li>
                  <li>Batch mates</li>
                  <li>Indian Gods and Literature</li>
                </ul>
              </div>

              {/* Needs & Expectations */}
              <div>
                <h5 className="text-[#F7DE66] font-semibold text-3xl mb-7">
                  Needs & Expectations
                </h5>
                <ul className="space-y-4 text-xl text-[#C9F5FF] font-normal">
                  <li>Learning New Skills</li>
                  <li>Change the city</li>
                  <li>become financially independent</li>
                </ul>
              </div>

              {/* Motivations */}
              <div>
                <h5 className="text-[#F7DE66] font-semibold text-3xl mb-7">
                  Motivations
                </h5>
                <ul className="space-y-4 text-xl text-[#C9F5FF] font-normal">
                  <li>Project completion</li>
                  <li>Promotions in job</li>
                  <li>Healthy and happy family</li>
                  <li>Good and trusted friends</li>
                </ul>
              </div>

              {/* Goals */}
              <div>
                <h5 className="text-[#F7DE66] font-semibold text-3xl mb-7">
                  Goals
                </h5>
                <ul className="space-y-4 text-xl text-[#C9F5FF] font-normal">
                  <li>Financial Freedom</li>
                  <li>Excel in Career</li>
                  <li>Own a Home and Car</li>
                  <li>Getting married to good person</li>
                </ul>
              </div>

              {/* Frustrations */}
              <div>
                <h5 className="text-[#F7DE66] font-semibold text-3xl mb-7">
                  Frustrations
                </h5>
                <ul className="space-y-4 text-xl text-[#C9F5FF] font-normal">
                  <li>Lack of focus</li>
                  <li>Short attention span</li>
                  <li>No decided career guide</li>
                  <li>Age</li>
                  <li>Current Town</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[71.25rem] mx-auto ">
        <div className="mb-[4.5rem]">
          <p className="font-semibold text-[2rem] text-[#FFFFFF]">Storyboard</p>
        </div>
        <div className="relative w-full  aspect-[1140/648]">
          <Image
            src="/images/JEGO-SB.webp"
            alt="Profile Picture"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Brainstorm and Ideation Section */}
      <section className="w-[71.25rem] flex flex-col items-center justify-center">
        <div className="w-[71.25rem] flex flex-col items-start gap-[4.5rem]">
          <h2 className="text-[#FFFFFF] font-bold text-[2rem]  text-left">
            Brainstorm and Ideation
          </h2>

          {/* Sticky Notes Grid */}
          <div className="w-[70.375rem] grid grid-cols-6 gap-3  ">
            {/* I Like Column */}
            <div className="bg-[#F7DE66] w-[10rem] h-[10rem] ">
              <h3 className="text-[#483E0F] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                I Like
              </h3>
            </div>

            {/* Empty space */}
            <div></div>

            {/* I Wish Column */}
            <div className="bg-[#F7DE66] w-[10rem] h-[10rem] ">
              <h3 className="text-[#483E0F] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                I Wish
              </h3>
            </div>

            {/* Empty space */}
            <div></div>

            {/* What If Column */}
            <div className="bg-[#F7DE66] w-[10rem] h-[10rem] ">
              <h3 className="text-[#483E0F] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                What If
              </h3>
            </div>

            {/* Empty space */}
            <div></div>

            {/* Row 2 */}
            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Speed variation options
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Learning Categories
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Offline Learning
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Learning from Multiple Mentors
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Community to chat with people learning same things
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Some kind of marking to pass the class
              </h4>
            </div>

            {/* Row 3 */}
            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Learning at my convenience
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Lessons I can like to revisit and watch again
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                A learning path to know where to start
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Interact with like-minded people
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Can bring in more content from other mentors as well
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Family plans for premium members
              </h4>
            </div>

            {/* Row 4 */}
            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Loyalty Crystals usability with in-app purchase
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Events
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Bifurcation of learning expertise before choosing the course
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                A little more about the course and the mentor
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Little more emphasis on crystal to treat them as streaks
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Download options for certain period to watch offline on
                convenience
              </h4>
            </div>

            {/* Row 5 */}
            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Meaning of JEGO
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Pre-instructions for Meditation courses
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Scorecards/ Leaderboard
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                QA at the end to know things learned
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                A Progress dashboard to see the activities
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Motivation factors such as Badges
              </h4>
            </div>

            {/* Row 6 */}
            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                The daily wisdom and Quotes
              </h4>
            </div>

            <div></div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Questions with instructors feedback
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Easy shareable progress
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                A full page lesson with copy of the video content some facts and
                information
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Practical projects or activities
              </h4>
            </div>

            {/* Row 7 */}
            <div></div>
            <div></div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Subtitles/Copy of the Video Narration
              </h4>
            </div>

            <div className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
              <h4 className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                Reviews on Class
              </h4>
            </div>

            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <div className="">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h1 className="text-white text-[2rem] font-bold mb-[4.5rem] ">
            Backlogs
          </h1>

          {/* Grid Container */}
          <div className="grid grid-cols-7 gap-0.5">
            {backlogItems.map((item, index) => (
              <div key={index} className="bg-[#3E8D9E] w-[10rem] h-[10rem]">
                <p className="text-[#C9F5FF] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-6xl mx-auto">
        <p className=" text-[#FFFFFF] font-bold text-3xl mb-20">
          Paper Wireframe Mobile
        </p>

        <div className=" relative aspect-[1140/1494] overflow-hidden ">
          <Image
            src="/images/JEGO-PWM.webp"
            alt="Profile Picture"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-6xl mx-auto">
        <p className=" text-[#FFFFFF] font-bold text-3xl mb-20">
          Web Wireframe
        </p>
        <div className="grid grid-cols-3 gap-7 ">
          <div className=" relative aspect-[371/264] overflow-hidden ">
            <Image
              src="/images/JEGO-WF1.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/264] overflow-hidden ">
            <Image
              src="/images/JEGO-WF2.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/264] overflow-hidden ">
            <Image
              src="/images/JEGO-WF3.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/264] overflow-hidden ">
            <Image
              src="/images/JEGO-WF4.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/264] overflow-hidden ">
            <Image
              src="/images/JEGO-WF5.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/264] overflow-hidden ">
            <Image
              src="/images/JEGO-WF6.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/354] overflow-hidden ">
            <Image
              src="/images/JEGO-WF7.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/365] overflow-hidden ">
            <Image
              src="/images/JEGO-WF8.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/365] overflow-hidden ">
            <Image
              src="/images/JEGO-WF9.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/584] overflow-hidden ">
            <Image
              src="/images/JEGO-WF10.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/345] overflow-hidden ">
            <Image
              src="/images/JEGO-WF11.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className=" relative aspect-[371/338] overflow-hidden ">
            <Image
              src="/images/JEGO-WF12.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div></div>
          <div className=" mt-[-15rem] relative aspect-[371/296] overflow-hidden ">
            <Image
              src="/images/JEGO-WF13.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h1 className="text-[#FFFFFF] text-[2rem] font-bold mb-12 text-center ">
            Branding
          </h1>

          {/* Fontface Section */}
          <section className="flex flex-row gap-24">
            <div>
              <h2 className="text-[#F7DE66] text-2xl font-bold ">Fontface</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" rounded-lg  ">
                <div className="flex flex-row items-center mb-7 font-fredoka">
                  <div className="w-3 h-3 mr-7 bg-[#C9F5FF]"></div>
                  <div>
                    <p className="text-xs font-normal text-[#C9F5FF] ">
                      Primary Typeface
                    </p>
                    <p className="text-2xl font-bold text-[#C9F5FF] ">
                      Fredoka One
                    </p>
                    <p className="text-xs font-normal text-[#C9F5FF] ">
                      01 LOWER CASE | 02 REGULAR
                    </p>
                  </div>
                </div>
                <div className="text-[2rem] text-justify font-fredoka font-semibold text-[#C9F5FF] w-[25rem]  tracking-widest leading-relaxed mb-12">
                  a b c d e f g h i j <br></br>k l m n o p q r s<br></br> t u v
                  w x y z
                </div>
              </div>
              <div className=" rounded-lg  ">
                <div className="flex flex-row items-center mb-7 font-noto">
                  <div className="w-3 h-3 mr-7 bg-[#C9F5FF]"></div>
                  <div>
                    <p className="text-xs font-normal text-[#C9F5FF]">
                      Primary Typeface
                    </p>
                    <p className="text-2xl font-bold text-[#C9F5FF]">
                      Noto Sans
                    </p>
                    <p className="text-xs font-normal text-[#C9F5FF]">
                      01 REGULAR | 02 SEMI BOLD | 03 BOLD
                    </p>
                  </div>
                </div>
                <div className="text-[2rem] font-noto font-semibold text-[#C9F5FF] w-[25rem]  tracking-widest leading-relaxed mb-12 ">
                  a b c d e f g h i j <br></br>k l m n o p q r s<br></br> t u v
                  w x y z
                </div>
              </div>
            </div>
          </section>

          {/* Colors Section */}
          <section className="flex flex-row gap-32 ">
            <div>
              <h2 className="text-[#F7DE66] text-2xl font-bold ">Colors</h2>
            </div>

            <div className="grid grid-cols-2 gap-8 ">
              {/* Primary Colors */}
              <div className="border-1 border-[#286D7C] rounded-xl text-center w-[27.75rem] shadow-xl">
                <h3 className="text-[#F5FDFF] text-5xl font-semibold mb-7 mt-14">
                  #164E5A
                </h3>
                <p className="text-[#3E8D9E] font-normal text-2xl mb-7">
                  Primary
                </p>
                <div className="flex gap-2 w-[26.5rem] mx-2.5 mb-14">
                  {primaryColors.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Secondary Colors */}
              <div className="border-1 border-[#F7DE66]] bg-[#F7DE66] rounded-xl text-center w-[27.75rem] shadow-xl">
                <h3 className="text-[#483E0F] text-5xl font-semibold mb-7 mt-14">
                  #F7DE66
                </h3>
                <p className="text-[#A08D32] font-normal text-2xl mb-7">
                  Primary
                </p>
                <div className="flex gap-2 w-[26.5rem] mx-2.5 mb-14">
                  {secondaryColors.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* App Icon Section */}
          <section>
            <h2 className="text-[#F7DE66] text-2xl font-bold mb-12 ">
              App Icon
            </h2>

            <div className="flex flex-col items-center gap-8">
              {/* Logo Design */}
              <div className="relative">
                <div className="w-64 h-32 bg-gray-600 rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/branding/logo-design.png"
                    alt="JEGO Logo Design"
                    width={256}
                    height={128}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* App Icons */}
              <div className="relative">
                <div className="w-72 h-48 bg-[#5AAEC0] rounded-3xl flex items-center justify-center p-8">
                  <Image
                    src="/images/branding/app-icons.png"
                    alt="JEGO App Icons"
                    width={288}
                    height={192}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* ────────────── Block 1 ────────────── */}
          <div className="flex flex-col md:flex-row items-center gap-[3.875rem]">
            {/* phone mock‑up */}
            <div className="flex-shrink-0">
              <Image
                src="/images/JEGO-Iphone.webp" // 390 × 800 or similar
                width={620}
                height={855}
                alt="Mentors phone UI"
                className="object-contain"
                priority
              />
            </div>

            {/* copy */}
            <div className="w-[26.5rem] ">
              <h3 className=" text-[#F7DE66] text-3xl font-bold mb-7">
                Mentors
              </h3>
              <p className=" text-[#C9F5FF] leading-relaxed text-sm md:text-base opacity-90">
                Now meet the Mentors, influential personalities and creator of
                life changing courses brought to you by Jego.
              </p>
            </div>
          </div>

          {/* ────────────── Block 2 (reversed on md+) ────────────── */}
          <div className="  flex flex-row items-center gap-[3.875rem]">
            {/* copy */}
            <div className="w-[26.5rem] ml-[8.437rem]">
              <h3 className="text-[#F7DE66]  text-3xl font-bold mb-7">
                Jego Home
              </h3>
              <p className="text-[#C9F5FF] leading-relaxed text-sm md:text-base opacity-90">
                The all new home page is designed with user centric approach it
                helps user navigate to any course content or setting fluently.
              </p>
            </div>
            {/* phone mock‑up */}
            <div className="flex-shrink-0">
              <Image
                src="/images/JEGO-Iphone1.webp" // 390 × 800 or similar
                width={344}
                height={696}
                alt="Jego Home phone UI"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[3.35rem] ">
        <div className=" relative w-[89.937rem] h-[27.18rem] overflow-hidden ">
          <Image
            src="/images/JEGO-GO1.webp"
            alt="Profile Picture"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <section className="">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-[#F7DE66] mb-7 w-[26.5rem]">
          <h3 className="text-lg font-bold text-[#FFD966] mb-2">Onboarding</h3>
          <p className="text-[1.25rem] leading-relaxed text-[#C9F5FF]">
            The onboarding is intended to explain the user about the Jego app and then help him register to the system.
          </p>
        </div>

        {/* Background Image */}
        {/* <div className="absolute top-0 right-0 h-full w-1/2">
          <Image
            src="/images/JEGO-GO1.webp" // Add your image path
            alt="Background shape"
            fill
            className="object-contain object-right opacity-60 pointer-events-none"
          />
        </div> */}

        {/* Phone Layout */}
        <div className="relative z-10 flex flex-col justify-items-center">
          {/* Column 1 */}
          <div className="">
            <Image src="/images/onboarding-1.png" alt="Onboarding 1" width={220} height={475} className="rounded-xl shadow-xl" />
            <Image src="/images/onboarding-2.png" alt="Onboarding 2" width={220} height={475} className="rounded-xl shadow-xl" />
          </div>

          {/* Column 2 */}
          <div className="">
            <Image src="/images/onboarding-3.png" alt="Onboarding 3" width={220} height={475} className="rounded-xl shadow-xl" />
          </div>

          {/* Column 3 */}
          <div className="">
            <Image src="/images/signin.png" alt="Sign in" width={220} height={475} className="rounded-xl shadow-xl" />
            <Image src="/images/create-account.png" alt="Create account" width={220} height={475} className="rounded-xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
