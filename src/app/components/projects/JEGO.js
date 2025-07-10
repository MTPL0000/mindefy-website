import Image from "next/image";
export default function JEGO() {
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

          <hr class="h-px my-8 bg-[#286D7C] border-0 dark:bg-[#286D7C]"></hr>

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

          <hr class="h-px my-8 bg-[#286D7C] border-0 dark:bg-[#286D7C]"></hr>

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
    </main>
  );
}
