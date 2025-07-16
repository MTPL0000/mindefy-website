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

  // Data for each group
  const brainstormGroups = [
    {
      title: "I Like",
      notes: [
        "Speed variation options",
        "Learning Categories",
        "Learning at my convenience",
        "Lessons I can like to revisit and watch again",
        "Loyalty Crystals usability with in-app purchase",
        "Events",
        "Meaning of JEGO",
        "The daily wisdom and Quotes",
      ],
    },
    {
      title: "I Wish",
      notes: [
        "Offline Learning",
        "Learning from Multiple Mentors",
        "A learning path to know where to start",
        "Interact with like-minded people",
        "Bifurcation of learning expertise before choosing the course",
        "A little more about the course and the mentor",
        "PRE Instructions for Meditation courses",
        "Scorecards/ Leader board",
        "QA at the end to know things learned",
        "Questions with instructors feedback",
        "Easy shareable progress",
      ],
    },
    {
      title: "What If",
      notes: [
        "Community to chat with people learning same things",
        "Some kind of marking to pass the class",
        "Can bring in more content from other mentors as well",
        "Family plans for premium members",
        "Little more emphasis on crystal to treat them as streaks",
        "Download lessons for certain period to watch offline on convenience",
        "A Progress dashboard to see the activities",
        "Motivation factors such as Badges",
        "A full page lesson with copy of the video content some facts and information",
        "Practical projects or activities",
        "Subtitles/Copy of the Video Narration",
        "Reviews on Class",
      ],
    },
  ];

  return (
    <main className="bg-[#164E5A] w-full flex flex-col items-center justify-center gap-32 pb-16 md:px-0 lg:px-0 mx-auto">
      {/* Main Image */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Image
          src="/images/projects/JG-1.webp"
          alt="JEGO Dashboard"
          width={1440}
          height={900}
          className="object-contain w-full h-auto"
        />
      </section>
      {/* GIF Section */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-8">
        <h3 className="text-[#FFFFFF] font-bold text-2xl sm:text-3xl font-poppins text-left">
          The Process
        </h3>
        <div className="relative w-full max-w-3xl mx-auto">
          <Image
            src="/images/projects/JG-GIF.gif"
            alt="Animation"
            width={1126}
            height={426}
            className="object-contain w-full h-auto"
          />
        </div>
      </section>
      {/* About Section */}
      <section className="container mx-auto max-w-7xl px-4 justify-between sm:px-6 lg:px-8 w-full flex flex-col md:flex-row gap-8">
        <h3 className="text-[#FFFFFF] font-bold text-2xl sm:text-3xl font-poppins text-left mb-4 md:mb-0">
          About the project
        </h3>
        <div className="w-full md:w-7/12 flex flex-col gap-8">
          <p className="text-[#5AAEC0] font-normal text-base sm:text-lg font-poppins text-justify leading-normal">
            How do you reflect joy, ease, grace, and being omnipresent?
            <br />
            "S M I L E," the first thing that comes even before a thought, Jego
            brings those blessings into your life. Content that is rich in
            meditation trips and condensed wisdom to succeed in relationships,
            business, and a package of how to live a full-spectrum life
          </p>
          <p className="text-[#5AAEC0] font-normal text-base sm:text-lg font-poppins text-justify leading-normal">
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
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div className="w-full max-w-6xl flex flex-col items-start gap-6 md:gap-10">
          <h2 className="text-[#FFFFFF] font-bold text-2xl sm:text-3xl font-poppins text-left">
            UX Laws and Psychologies
          </h2>
          {/* Top Row: Link, Gap, Description */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <span className="text-[#C9F5FF] text-sm font-medium max-w-92 text-left leading-normal">
              A lot of disconnects with user and no prompt or nudge to create or
              keep up the engagement
            </span>
            <span className="hidden md:inline text-[#C9F5FF] text-[100px]">
              &#8592;
            </span>
            <span className="bg-[#F5FDFF] mt-4 px-7 py-1 text-[#164E5A] text-xl sm:text-2xl font-semibold rounded-md">
              Gap
            </span>
            <span className="hidden md:inline text-[#C9F5FF] text-[100px]">
              &#8594;
            </span>
            <span className="text-[#C9F5FF] text-sm font-medium max-w-92 text-left leading-normal">
              Friendly Connection with Users, Introduce Nudges &amp;, reduce
              cognitive load. Make app more engaging &amp; delightful to use.
            </span>
          </div>
        </div>
        <div className="w-full max-w-6xl flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-5">
            <span className="text-[#C9F5FF] text-2xl font-normal text-center">
              Our Brains Automatically blocks anything that's:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
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
            {/* Each row becomes a responsive flex-wrap row */}
            <div className="flex flex-wrap items-start lg:justify-center md:justify-start gap-4 md:gap-7 w-full">
              {/* Each law box: use responsive width */}
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Hicks Law
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  Time and Efforts it takes to make a Decision increases with
                  Number of Options.
                </p>
              </div>
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Selective Attention
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  Anything that's not part of what we are currently doing, has
                  little chance of getting noticed
                </p>
              </div>
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Banner Blindness
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  User ignore content which resembles ads, is close to ads, or
                  appears in location dedicated to ads.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-start lg:justify-center md:justify-start gap-4 md:gap-7 w-full">
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Priming
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  Activating association or representation in user's short term
                  memory just before another task is introduced.
                </p>
              </div>
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Baader-Meinhof Effect
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  When your awareness of something increases, when brain
                  reinforces the new acquired information
                </p>
              </div>
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
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
            <div className="flex flex-wrap items-start lg:justify-center md:justify-start gap-4 md:gap-7 w-full">
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Loss Aversion
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  We hate loosing way more than we love winning, in other words
                  losing 500 will hurt us more than the joy of earning 500
                </p>
              </div>
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Discoverability
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  It is the ease at which user can find features within a
                  product
                </p>
              </div>
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Labor Illusions
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  People find wait more tolerable when they can see work is
                  being done on their behalf
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-start lg:justify-center md:justify-start gap-4 md:gap-7 w-full">
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Progressive Disclosures
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  An interface is easier to use when complex features are
                  gradually revealed
                </p>
              </div>
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Curiosity Gap
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  When we want to know something but, can't. It's like having an
                  itch that we need to scratch.
                </p>
              </div>
              <div className="w-full sm:w-[18rem] flex flex-col gap-2">
                <h4 className="text-[#F7DE66] font-semibold text-2xl">
                  Scarcity
                </h4>
                <p className="text-[#C9F5FF] font-medium text-base">
                  We tend to want more of what we can't have; Time, Quantity,
                  Access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Market and Competition Research Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div className="w-full max-w-6xl flex flex-col gap-8 md:gap-10">
          <h2 className="text-[#F5FDFF] font-bold text-2xl md:text-3xl font-poppins text-left mb-6">
            Market and Competition Research
          </h2>
          <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8 md:gap-12 ml-0 lg:ml-6">
            <div className="w-full lg:w-54 flex flex-col items-start justify-center gap-8">
              <span className="text-[#F7DE66] text-lg md:text-xl font-normal">
                Competitor
              </span>
              <div className="lg:h-54 flex flex-col items-center gap-2">
                <div className="relative w-42 max-w-[168px] h-32 bg-[#1E1E1E] rounded-md">
                  <Image
                    src="/images/projects/JG-2.png"
                    alt="Master-Class"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:h-54 flex flex-col items-center gap-2">
                <div className="w-42 max-w-[168px] h-32 bg-[#F15628] py-2 rounded-md flex flex-col gap-1 items-center justify-center">
                  <Image
                    src="/images/projects/JG-3.png"
                    alt="Round-Glass"
                    width={74}
                    height={74}
                  />
                  <span className="text-[#FFFFFF] font-semibold text-lg md:text-xl">
                    roundglass
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-86 flex flex-col items-start justify-center gap-8">
              <span className="text-[#F7DE66] text-lg md:text-xl font-normal">
                Unique Value Proposition
              </span>
              <p className="lg:h-54 text-[#C9F5FF] font-normal text-sm md:text-base text-left leading-normal">
                Masterclass is the streaming platform that makes it possible for
                anyone to watch or listen to hundreds of video lessons taught by
                150+ of the world's best.
              </p>
              <p className="lg:h-54 text-[#C9F5FF] font-normal text-sm md:text-base text-left leading-normal">
                Founded by entrepreneur Sunny Singh, who aims to revolutionize
                health care with a focus on prevention. But that's just the
                beginning.
              </p>
            </div>
            <div className="w-full lg:w-73 flex flex-col items-start justify-center gap-8">
              <span className="text-[#F7DE66] text-lg md:text-xl font-normal">
                Company Advantages
              </span>
              <ul className="lg:h-54 text-[#C9F5FF] font-normal text-sm md:text-base text-left leading-normal list-none list-inside space-y-4">
                <li>Easy to use app with clean and dynamic layout.</li>
                <li>
                  To extract with fellow learners community forums are
                  available.
                </li>
                <li>Cross platform usability with option to watch offline</li>
              </ul>
              <ul className="lg:h-54 text-[#C9F5FF] font-normal text-sm md:text-base text-left leading-normal list-none list-inside space-y-4">
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
            <div className="w-full lg:w-80 flex flex-col items-start justify-center gap-8">
              <span className="text-[#F7DE66] text-lg md:text-xl font-normal">
                Company Disadvantages
              </span>
              <ul className="lg:h-54 text-[#C9F5FF] font-normal text-sm md:text-base text-left leading-normal list-none list-inside space-y-4">
                <li>
                  No Flexibility in payment options and upbeat price from
                  options available in market.
                </li>
                <li>No Test of skills no QA no certificates</li>
                <li>Not wonderful reputation in education circle.</li>
              </ul>
              <ul className="h-lg:h-54 text-[#C9F5FF] font-normal text-sm md:text-base text-left leading-normal list-none list-inside space-y-4">
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
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div className="w-full max-w-6xl flex flex-col px-2 sm:px-4 md:px-[3.125rem] gap-6 md:gap-8">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row flex-wrap">
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                LinkedIn Learning
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[3.14rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Khan Academy
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                68% Experienced Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                42% Budget Constraints
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                32 Average age of Online Learning
              </span>
            </div>
            <div className="bg-[#3E8D9E] w-full sm:w-[9.375rem] md:mb-4 h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Lack of time 61%
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row flex-wrap">
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Udemy
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[3.14rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Skillshare
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 sm:mr-[1.125rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Online Education will be worth $374 Billion by year 2026
              </span>
            </div>
            <div className="bg-[#3E8D9E] w-full md:mr-4 md:mb-4 sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                More learning due to social distancing each of the 2020 pandemic
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col sm:flex-row flex-wrap">
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Domestika
              </span>
            </div>
            <div className="bg-[#3E8D9E] w-full sm:w-[9.375rem] md:mr-4 md:mb-4 h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Coursera
              </span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col sm:flex-row flex-wrap">
            <div className="bg-[#3E8D9E] w-full  sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                MasterClass
              </span>
            </div>
          </div>

          {/* Demographics Row */}
          <div className="flex flex-col sm:flex-row flex-wrap mt-8">
            <div className="bg-[#F7DE66] mr-0 md:mr-4 md:mb-4 sm:mr-[3.81rem] mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#483E0F] w-full text-base font-medium font-inter text-center">
                16-22 <br />
                Gen Z
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Bored Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Stuck at Home Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Expanding Skillset Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 lg:mr-[1.166rem] md:mr-4 md:mb-4 mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Business Offered Learners
              </span>
            </div>
            <div className="bg-[#3E8D9E] w-full sm:w-[9.375rem] md:mr-4 md:mb-4 h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Advancing Skills Learners
              </span>
            </div>
          </div>

          <hr className="h-px my-8 bg-[#286D7C] border-0 dark:bg-[#286D7C]" />

          {/* Millennials Row */}
          <div className="flex flex-col sm:flex-row flex-wrap">
            <div className="bg-[#F7DE66] mr-0 md:mr-4 md:mb-4 sm:mr-[3.81rem] mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#483E0F] w-full text-base font-medium font-inter text-center">
                25-38 Millennials
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 sm:mr-[1.166rem] mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Influencer generation
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 sm:mr-[1.166rem] mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Spends 3 hours on average per day
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 sm:mr-[1.166rem] mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                The Smallest earning potential
              </span>
            </div>
            <div className="bg-[#3E8D9E] w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                On track to be the best educated generation
              </span>
            </div>
          </div>

          <hr className="h-px my-8 bg-[#286D7C] border-0 dark:bg-[#286D7C]" />

          {/* Boomers Row */}
          <div className="flex flex-col sm:flex-row flex-wrap">
            <div className="bg-[#F7DE66] mr-0 md:mr-4 md:mb-4 sm:mr-[3.81rem] mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#483E0F] w-full text-base font-medium font-inter text-center">
                56-74 Boomers
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 sm:mr-[1.125rem] mb-2 sm:mb-0 w-full sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Slowest down in social media use
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 sm:mr-[1.125rem] mb-2 sm:mb-0 w-full sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                19% College Degree
              </span>
            </div>
            <div className="bg-[#3E8D9E] w-full sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Less Money than other generation
              </span>
            </div>
          </div>

          {/* Gen X Row */}
          <div className="flex flex-col sm:flex-row flex-wrap">
            <div className="bg-[#F7DE66] mr-0 md:mr-4 md:mb-4 sm:mr-[3.81rem] mb-2 sm:mb-0 w-full sm:w-[9.375rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#483E0F] w-full text-base font-medium font-inter text-center">
                39-55 Gen X
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 sm:mr-[1.125rem] mb-2 sm:mb-0 w-full sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                The Smallest Generation
              </span>
            </div>
            <div className="bg-[#3E8D9E] mr-0 sm:mr-[1.125rem] mb-2 sm:mb-0 w-full sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Best Earning Years
              </span>
            </div>
            <div className="bg-[#3E8D9E] w-full sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                29% College Degree
              </span>
            </div>
          </div>

          {/* Final Row */}
          <div className="flex flex-col sm:flex-row flex-wrap">
            <div className="bg-[#3E8D9E] ml-0 lg:ml-[13.18rem] mr-0 sm:mr-[1.125rem] mb-2 sm:mb-0 w-full sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                Great increase in social media
              </span>
            </div>
            <div className="bg-[#3E8D9E] w-full sm:w-[16.25rem] h-[6rem] sm:h-[9.375rem] pt-[0.780rem] pl-[0.780rem] pr-[.719rem] flex items-center justify-center">
              <span className="text-[#C9F5FF] w-full text-base font-medium font-inter text-center">
                The Fastest growing smartphone owners
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* User Behavior Mapping Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div className="w-full flex flex-col gap-8 md:gap-[4.5rem]">
          <h2 className="text-[#F5FDFF] font-bold text-2xl md:text-[2rem] text-left">
            User Behavior Mapping
          </h2>

          {/* Action Headers */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                Action
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#5AAEC0] font-normal text-xl md:text-2xl">
                Download & Install
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#5AAEC0] font-normal text-xl md:text-2xl">
                SignUp/SignIn
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[#5AAEC0] font-normal text-xl md:text-2xl">
                Open app & Browse Content
              </h3>
            </div>
          </div>

          {/* Task List Row */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                Task List
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#C9F5FF] font-semibold text-sm md:text-base leading-relaxed">
                <p>A. Search App over Playstore</p>
                <p>B. Download and Install</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#C9F5FF] font-semibold text-sm md:text-base leading-relaxed">
                <p>SignUp/SignIn</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#C9F5FF] font-semibold text-sm md:text-base leading-relaxed">
                <p>A. Know what is Jego</p>
                <p>B. Browse Categories</p>
                <p>C. Choose Category to Start Watching.</p>
              </div>
            </div>
          </div>

          {/* Feeling Adjective Row */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                Feeling Adjective
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#C9F5FF] font-semibold text-sm md:text-base leading-relaxed space-y-3">
                <p>Why I am not able to find the in search. Is this the app?</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[#C9F5FF] font-semibold text-sm md:text-base leading-relaxed space-y-3">
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
              <div className="text-[#C9F5FF] font-semibold text-sm md:text-base leading-relaxed space-y-3">
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
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 md:gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                Feeling Emotion
              </h3>
            </div>
            <div className="flex flex-col gap-4 lg:items-center md:items-start">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F7DE66] rounded-full flex items-center justify-center">
                  <span className="text-[#164E5A] text-lg">😊</span>
                </div>
                <span className="text-[#F5FDFF] font-semibold text-xl md:text-2xl">
                  Okay
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:items-center md:items-start">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F7DE66] rounded-full flex items-center justify-center">
                  <span className="text-[#164E5A] text-lg">😤</span>
                </div>
                <span className="text-[#F5FDFF] font-semibold text-xl md:text-2xl">
                  Frustrated
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:items-center md:items-start">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#F7DE66] rounded-full flex items-center justify-center">
                  <span className="text-[#164E5A] text-lg">😕</span>
                </div>
                <span className="text-[#F5FDFF] font-semibold text-xl md:text-2xl">
                  Upset
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Empathy Map Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div className="w-full max-w-6xl flex flex-col gap-8 md:gap-[4.5rem]">
          <h2 className="text-[#F5FDFF] font-bold text-2xl md:text-[2rem] text-left">
            Empathy Map
          </h2>

          {/* Empathy Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 mb-10">
            {/* Says Section */}
            <div>
              <div className="flex flex-col w-full md:w-[32.35rem] mb-8 gap-4 md:gap-[1.125rem]">
                <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                  Says
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                    <span className="text-[#C9F5FF] text-base font-medium text-center">
                      Talks Passionately about the subject
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                    <span className="text-[#C9F5FF] text-base font-medium text-center">
                      Discuss dreams
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                    <span className="text-[#C9F5FF] text-base font-medium text-center">
                      They like hands on learning
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                    <span className="text-[#C9F5FF] text-base font-medium text-center">
                      Open minded
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                    <span className="text-[#C9F5FF] text-base font-medium text-center">
                      Visual learners
                    </span>
                  </div>
                  <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                    <span className="text-[#C9F5FF] text-base font-medium text-center">
                      Knowledge is power
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Does Section */}
            <div className="flex flex-col w-full md:w-[32.35rem] gap-4 md:gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                Does
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Job
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Travel
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Adventures
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Watch YouTube reels and Instagram
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Hangout with loved one
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Working from Home
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Loves learning new things
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Netflix
                  </span>
                </div>
              </div>
            </div>

            {/* Thinks Section */}
            <div className="flex flex-col w-full md:w-[32.35rem] gap-4 md:gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                Thinks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Advance in career
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Achieve Dreams
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Underestimates self
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Options
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Business is better
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Understand things don't memorize
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Chaos is bad
                  </span>
                </div>
              </div>
            </div>

            {/* Feels Section */}
            <div className="flex flex-col w-full md:w-[32.35rem] mb-8 gap-4 md:gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                Feels
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Frustrated
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Got Late
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    How classmates have grown that fast
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Urge of becoming a better person
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Visualize achievements
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Career is Slow or not going anywhere
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Passionate towards learning
                  </span>
                </div>
              </div>
            </div>

            {/* Pains Section */}
            <div className="flex flex-col w-full md:w-[32.35rem] gap-4 md:gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                Pains
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Money
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    No Patience
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Procrastination
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Won't be worth the money
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Get discouraged by learning
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Lots of distractions
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Lack of focus
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Short attention spans
                  </span>
                </div>
              </div>
            </div>

            {/* Gains Section */}
            <div className="flex flex-col w-full md:w-[32.35rem] gap-4 md:gap-[1.125rem]">
              <h3 className="text-[#F7DE66] font-semibold text-xl md:text-2xl">
                Gains
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Advance knowledge
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Advance career
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Find self-worth in learning
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Connection with like-minded people
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Getting confidence of owning a business
                  </span>
                </div>
                <div className="bg-[#3E8D9E] w-full h-[6rem] md:w-[10rem] md:h-[10rem] pt-2 md:pt-[0.833rem] pl-2 md:pl-[0.833rem] pr-2 md:pr-[0.791rem] flex items-center justify-center">
                  <span className="text-[#C9F5FF] text-base font-medium text-center">
                    Learn about new life dimensions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* User Persona Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div className="w-full max-w-6xl flex flex-col items-start gap-8 md:gap-[4.5rem]">
          <h2 className="text-[#FFFFFF] font-bold text-2xl md:text-[2rem] text-left">
            User Persona
          </h2>

          {/* Persona Card */}
          <div className="flex flex-col lg:flex-row gap-7 mb-8 md:mb-16 w-full">
            <div className="flex flex-col gap-6 items-center lg:items-start w-full max-w-xs">
              <div className="relative w-40 h-40 md:w-55 md:h-61 mx-auto">
                <Image
                  src="/images/UP-PP.webp"
                  alt="Profile Picture"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Basic Information */}
              <div className="flex flex-col gap-6 md:gap-[1.875rem] w-full text-[#FFFFFF]">
                <div className="text-lg md:text-xl text-[#C9F5FF]">
                  <span className="block font-normal">Age:</span>
                  <span className="font-medium">29 Years</span>
                </div>
                <div className="text-lg md:text-xl text-[#C9F5FF]">
                  <span className="block font-normal">Occupation:</span>
                  <span className="font-medium">Developer</span>
                </div>
                <div className="text-lg md:text-xl text-[#C9F5FF]">
                  <span className="block font-normal">Location:</span>
                  <span className="font-medium">Ahmedabad</span>
                </div>
                <div className="text-lg md:text-xl text-[#C9F5FF]">
                  <span className="block font-normal">Education:</span>
                  <span className="font-medium">BE Graduate</span>
                </div>
                <div className="text-lg md:text-xl text-[#C9F5FF]">
                  <span className="block font-normal">Status:</span>
                  <span className="font-medium">Unmarried/Single</span>
                </div>
              </div>
            </div>

            {/* Right Side - Name, Bio, and Personality */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Name and Bio */}
              <div>
                <h4 className="text-[#F7DE66] font-semibold text-2xl md:text-4xl mb-2">
                  Siddharth Desai
                </h4>
                <span className="text-[#F7DE66] text-lg md:text-[1.625rem] font-semibold block mb-2">
                  Bio
                </span>
                <p className="text-[#C9F5FF] text-base md:text-xl text-justify font-normal ">
                  Siddharth is a cheerful, kind, and helpful person who values
                  his family and friends. He has experience teaching and is
                  currently working in IT. He also intakes some commissioned
                  projects which help him master trending technologies to
                  advance in his career.
                </p>
              </div>

              {/* Personality Traits */}
              <div className="ml-0">
                <h5 className="text-[#F7DE66] font-semibold text-lg md:text-[1.25rem] mb-4 md:mb-4.5">
                  Personality
                </h5>
                <div className="relative w-full h-40 md:w-[45.43rem] md:h-[26.43rem]">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-[#FFFFFF] w-full">
            {/* Interests */}
            <div>
              <h5 className="text-[#F7DE66] font-semibold text-2xl md:text-3xl mb-4 md:mb-7">
                Interests
              </h5>
              <ul className="space-y-2 md:space-y-4 text-base md:text-xl text-[#C9F5FF] font-normal">
                <li>Cricket watching and Playing</li>
                <li>News</li>
                <li>Coding</li>
                <li>Punjabi Music</li>
              </ul>
            </div>

            {/* Influences */}
            <div>
              <h5 className="text-[#F7DE66] font-semibold text-2xl md:text-3xl mb-4 md:mb-7">
                Influences
              </h5>
              <ul className="space-y-2 md:space-y-4 text-base md:text-xl text-[#C9F5FF] font-normal">
                <li>MS Dhoni</li>
                <li>Father (Teacher)</li>
                <li>Batch mates</li>
                <li>Indian Gods and Literature</li>
              </ul>
            </div>

            {/* Needs & Expectations */}
            <div>
              <h5 className="text-[#F7DE66] font-semibold text-2xl md:text-3xl mb-4 md:mb-7">
                Needs & Expectations
              </h5>
              <ul className="space-y-2 md:space-y-4 text-base md:text-xl text-[#C9F5FF] font-normal">
                <li>Learning New Skills</li>
                <li>Change the city</li>
                <li>become financially independent</li>
              </ul>
            </div>

            {/* Motivations */}
            <div>
              <h5 className="text-[#F7DE66] font-semibold text-2xl md:text-3xl mb-4 md:mb-7">
                Motivations
              </h5>
              <ul className="space-y-2 md:space-y-4 text-base md:text-xl text-[#C9F5FF] font-normal">
                <li>Project completion</li>
                <li>Promotions in job</li>
                <li>Healthy and happy family</li>
                <li>Good and trusted friends</li>
              </ul>
            </div>

            {/* Goals */}
            <div>
              <h5 className="text-[#F7DE66] font-semibold text-2xl md:text-3xl mb-4 md:mb-7">
                Goals
              </h5>
              <ul className="space-y-2 md:space-y-4 text-base md:text-xl text-[#C9F5FF] font-normal">
                <li>Financial Freedom</li>
                <li>Excel in Career</li>
                <li>Own a Home and Car</li>
                <li>Getting married to good person</li>
              </ul>
            </div>

            {/* Frustrations */}
            <div>
              <h5 className="text-[#F7DE66] font-semibold text-2xl md:text-3xl mb-4 md:mb-7">
                Frustrations
              </h5>
              <ul className="space-y-2 md:space-y-4 text-base md:text-xl text-[#C9F5FF] font-normal">
                <li>Lack of focus</li>
                <li>Short attention span</li>
                <li>No decided career guide</li>
                <li>Age</li>
                <li>Current Town</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Storyboard Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8 md:mb-[4.5rem]">
          <p className="font-semibold text-xl md:text-[2rem] text-[#FFFFFF]">
            Storyboard
          </p>
        </div>
        <div className="relative w-full aspect-[2/1] md:aspect-[1140/648]">
          <Image
            src="/images/JEGO-SB.webp"
            alt="Profile Picture"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Brainstorm and Ideation Section */}
      {(() => {
        return (
          <section className="w-full max-w-6x px-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl flex flex-col items-start gap-10">
              <h2 className="font-semibold text-xl md:text-[2rem] text-[#FFFFFF] mb-4">
                Brainstorm and Ideation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full">
                {brainstormGroups.map((group, idx) => (
                  <div
                    key={group.title}
                    className="flex flex-col items-left h-full"
                  >
                    {/* Yellow header sticky note */}
                    <div className="flex flex-col items-center justify-between bg-[#F7DE66] w-[10rem] h-[10rem] mb-4">
                      <h3 className="text-[#483E0F] w-[7.875rem]  text-base font-medium  ml-[0.83rem] mt-[0.83rem] mr-[0.793rem]">
                        {group.title}
                      </h3>
                      <span className="text-[#483E0F] w-[7.875rem] text-sm font-medium  ml-[0.83rem] mb-[0.83rem] mr-[0.793rem]">
                        Artist Banda
                      </span>
                    </div>
                    {/* Blue sticky notes in 2-column grid */}
                    <div className="grid-cols-2 sm:grid-cols-3 md:grid-cols-1 grid lg:grid-cols-2 gap-6 w-full">
                      {group.notes.map((note, nidx) => (
                        <div
                          key={nidx}
                          className="bg-[#3E8D9E] w-full h-[12rem] lg:h-[10rem] md:h-[10rem] aspect-square flex flex-col justify-between items-start px-2 py-2 shadow-md"
                        >
                          <h4 className="text-[#C9F5FF] text-sm font-semibold text-left w-full mb-2">
                            {note}
                          </h4>
                          <span className="text-[#483E0F]  text-sm font-normal mt-auto">
                            Artist Banda
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Backlogs Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-white text-[2rem] font-bold mb-[4.5rem]">
          Backlogs
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-0.5">
          {backlogItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-[#3E8D9E] w-full h-32 flex items-center"
            >
              <p className="text-[#C9F5FF] text-base font-medium px-4 py-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <p className="text-[#FFFFFF] font-bold text-2xl md:text-3xl mb-8 md:mb-20">
          Paper Wireframe Mobile
        </p>
        <div className="relative aspect-[3/4] md:aspect-[1140/1494] overflow-hidden">
          <Image
            src="/images/JEGO-PWM.webp"
            alt="Profile Picture"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-4">
        <p className="text-[#FFFFFF] font-bold text-2xl md:text-3xl mb-8 md:mb-20">
          Web Wireframe
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
          <div className="relative aspect-[371/264] overflow-hidden">
            <Image
              src="/images/JEGO-WF1.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/264] overflow-hidden">
            <Image
              src="/images/JEGO-WF2.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/264] overflow-hidden">
            <Image
              src="/images/JEGO-WF3.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/264] overflow-hidden">
            <Image
              src="/images/JEGO-WF4.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/264] overflow-hidden">
            <Image
              src="/images/JEGO-WF5.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/264] overflow-hidden">
            <Image
              src="/images/JEGO-WF6.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/354] overflow-hidden">
            <Image
              src="/images/JEGO-WF7.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/365] overflow-hidden">
            <Image
              src="/images/JEGO-WF8.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/365] overflow-hidden">
            <Image
              src="/images/JEGO-WF9.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/584] overflow-hidden">
            <Image
              src="/images/JEGO-WF10.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/345] overflow-hidden">
            <Image
              src="/images/JEGO-WF11.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[371/338] overflow-hidden">
            <Image
              src="/images/JEGO-WF12.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
          <div></div>
          <div className="lg:mt-[-15rem] md:mt-0 sm:mt-0 relative aspect-[371/296] overflow-hidden">
            <Image
              src="/images/JEGO-WF13.png"
              alt="Profile Picture"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <h1 className="text-[#FFFFFF] text-2xl md:text-[2rem] font-bold mb-8 md:mb-12 text-center">
          Branding
        </h1>

        {/* Fontface Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row gap-8 md:gap-24">
          <div>
            <h2 className="text-[#F7DE66] text-xl md:text-2xl font-bold">
              Fontface
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg">
              <div className="flex flex-row items-center lg:mb-4 md:mb-7 font-fredoka">
                <div className="w-3 h-3 mr-4 md:mr-7 bg-[#C9F5FF]"></div>
                <div>
                  <p className="text-xs font-normal text-[#C9F5FF]">
                    Primary Typeface
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-[#C9F5FF]">
                    Fredoka One
                  </p>
                  <p className="text-xs font-normal text-[#C9F5FF]">
                    01 LOWER CASE | 02 REGULAR
                  </p>
                </div>
              </div>
              <div className="text-lg md:text-[2rem] text-justify font-fredoka font-semibold text-[#C9F5FF] w-full md:w-[25rem] tracking-widest leading-relaxed mb-6 md:mb-12">
                a b c d e f g h i j <br />k l m n o p q r s<br /> t u v w x y z
              </div>
            </div>
            <div className="rounded-lg">
              <div className="flex flex-row items-center lg:mb-4 md:mb-7 font-noto">
                <div className="w-3 h-3 mr-4 md:mr-7 bg-[#C9F5FF]"></div>
                <div>
                  <p className="text-xs font-normal text-[#C9F5FF]">
                    Primary Typeface
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-[#C9F5FF]">
                    Noto Sans
                  </p>
                  <p className="text-xs font-normal text-[#C9F5FF]">
                    01 REGULAR | 02 SEMI BOLD | 03 BOLD
                  </p>
                </div>
              </div>
              <div className="text-lg md:text-[2rem] font-noto font-semibold text-[#C9F5FF] lg:w-full md:w-[25rem] tracking-widest leading-relaxed mb-6 md:mb-12">
                a b c d e f g h i j <br />k l m n o p q r s<br /> t u v w x y z
              </div>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row gap-8 md:gap-32 mt-8">
          <div>
            <h2 className="text-[#F7DE66] lg:text-xl md:text-2xl font-bold">
              Colors
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Primary Colors */}
            <div className="border border-[#286D7C] rounded-xl text-center lg:w-full md:w-[27.75rem] shadow-xl">
              <h3 className="text-[#F5FDFF] text-3xl md:text-5xl font-semibold mb-4 md:mb-7 mt-6 md:mt-14">
                #164E5A
              </h3>
              <p className="text-[#3E8D9E] font-normal text-lg md:text-2xl mb-4 md:mb-7">
                Primary
              </p>
              <div className="flex gap-1 md:gap-2 lg:w-full md:w-[26.5rem] mx-auto mb-6 md:mb-14 justify-center lg:px-2">
                {primaryColors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 md:w-10 md:h-10 rounded"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="border border-[#F7DE66] bg-[#F7DE66] rounded-xl text-center lg:w-full md:w-[27.75rem] shadow-xl">
              <h3 className="text-[#483E0F] text-3xl md:text-5xl font-semibold mb-4 md:mb-7 mt-6 md:mt-14">
                #F7DE66
              </h3>
              <p className="text-[#A08D32] font-normal text-lg md:text-2xl mb-4 md:mb-7">
                Primary
              </p>
              <div className="flex gap-1 md:gap-2 lg:w-full md:w-[26.5rem] mx-auto mb-6 md:mb-14 justify-center lg:px-2">
                {secondaryColors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 md:w-10 md:h-10 rounded"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* App Icon Section */}
        <section className="mt-10 mr-10 px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-[#F7DE66] lg:text-xl md:text-2xl font-bold">
            App Icon
          </h2>
          {/* Logo Design */}
          <div className="relative aspect-[2/1] lg:w-[1440px] md:w-[990px] overflow-hidden">
            <Image
              src="/images/projects/JG-4.webp"
              alt="JEGO Logo"
              fill
              className="object-contain"
            />
          </div>
        </section>
      </div>
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-10 px-2 sm:px-4">
        {/* ────────────── Block 1 ────────────── */}
        <div className="flex flex-col lg:flex-row md:flex-row lg:gap-[3.875rem] md:gap-0 gap-8 items-center">
          {/* phone mock‑up */}
          <div className="flex-shrink-0 w-full max-w-[620px] mx-auto">
            <Image
              src="/images/JEGO-Iphone.webp"
              width={620}
              height={855}
              alt="Mentors phone UI"
              className="object-contain w-full h-auto"
              priority
            />
          </div>
          <div className="w-full max-w-xl mt-6 lg:mt-0 px-5">
            <h3 className="text-[#F7DE66] text-3xl font-bold mb-7">Mentors</h3>
            <p className="text-[#C9F5FF] leading-relaxed font-normal text-xl opacity-90">
              Now meet the Mentors, influential personalities and creator of
              life changing courses brought to you by Jego.
            </p>
          </div>
        </div>
        {/* ────────────── Block 2 (reversed on md+) ────────────── */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-[3.875rem]">
          <div className="w-full max-w-xl mt-6 md:mt-0 md:ml-8 lg:ml-[8.437rem] px-5">
            <h3 className="text-[#F7DE66] text-3xl font-bold mb-7">
              Jego Home
            </h3>
            <p className="text-[#C9F5FF] leading-relaxed font-normal text-xl opacity-90">
              The all new home page is designed with user centric approach it
              helps user navigate to any course content or setting fluently.
            </p>
          </div>
          {/* phone mock‑up */}
          <div className="flex-shrink-0 w-full max-w-[344px] mx-auto">
            <Image
              src="/images/JEGO-Iphone1.webp"
              width={344}
              height={696}
              alt="Jego Home phone UI"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="mt-[3.35rem] w-full px-2 sm:px-4">
        <div className="relative w-full max-w-[1440px] h-auto aspect-[2/1] mx-auto overflow-hidden">
          <Image
            src="/images/JEGO-GO1.webp"
            alt="Profile Picture"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <section className="py-12 w-full px-2 sm:px-4">
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex flex-col items-center justify-between gap-16 w-full max-w-lg mx-auto">
            <div className="lg:mt-20 flex-shrink-0 w-full h-auto mt-10 px-5 md:w-[25rem]">
              <h3 className="text-3xl font-bold text-[#F7DE66] mb-4">
                Onboarding
              </h3>
              <p className="text-xl leading-relaxed text-[#C9F5FF] font-normal">
                The onboarding is intended to explain the user about the Jego
                app and then help him register to the system.
              </p>
            </div>
            <div className="relative overflow-hidden w-full max-w-[344px] mx-auto">
              <Image
                src="/images/projects/JG-5.webp"
                alt="image"
                width={344}
                height={696}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
          {/* Right Phone Mockups Grid */}
          <div className="w-full max-w-lg mx-auto relative flex flex-col gap-10">
            <div className="absolute w-full h-full opacity-70 z-0 hidden md:block">
              <Image
                src="/images/projects/JG-BG.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-10 z-10">
              <div className="flex justify-end">
                <div className="relative overflow-hidden w-full max-w-[344px] mx-auto">
                  <Image
                    src="/images/projects/JG-7.webp"
                    alt="image"
                    width={344}
                    height={696}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex justify-start">
                <div className="relative overflow-hidden w-full max-w-[344px] mx-auto">
                  <Image
                    src="/images/projects/JG-8.webp"
                    alt="image"
                    width={344}
                    height={696}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Row - Additional Phone Mockups */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 px-0 md:px-22 mt-16 w-full">
          <div className="relative overflow-hidden w-full max-w-[344px] mx-auto">
            <Image
              src="/images/projects/JG-6.webp"
              alt="image"
              width={344}
              height={696}
              className="object-contain w-full h-auto"
            />
          </div>
          <div className="relative overflow-hidden w-full max-w-[344px] mx-auto">
            <Image
              src="/images/projects/JG-9.webp"
              alt="image"
              width={344}
              height={696}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
        {/* Text Section */}
        <div className="relative lg:top-[10rem] md:top-5 w-full flex flex-col items-start gap-6 mt-10 md:mt-16 lg:mt-40">
          <h3 className="text-3xl font-bold text-[#F7DE66]">Courses</h3>
          <p className="text-xl leading-relaxed text-[#C9F5FF] font-normal">
            Equiped with powerful search and filters <br />
            the courses page help you access content.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[1/1] mt-8">
          <Image
            src="/images/projects/JG-10.webp"
            alt="image"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-center gap-20">
        {/* Section 1 */}
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex justify-end lg:ml-0 md:ml-8">
            <div className="relative overflow-hidden">
              <Image
                src="/images/projects/JG-12.webp"
                alt="image"
                width={344}
                height={696}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center justify-between gap-16">
            <div className="w-full max-w-xl mb-10 px-5 lg:pl-8 mt-6 lg:mt-0">
              <h3 className="text-[#F7DE66] text-3xl font-bold mb-4">
                Search, Events & Profile
              </h3>
              <p className="text-xl font-normal leading-relaxed text-[#C9F5FF]">
                Some of the most powerful pages to navigate through application
                The Search, The Events & Profile and Settings.
              </p>
            </div>
            <div className="relative overflow-hidden w-full max-w-[423px] mx-auto">
              <Image
                src="/images/projects/JG-11.webp"
                alt="image"
                width={423}
                height={696}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Section 2 with Background */}
        <div className="w-full relative mt-10">
          {/* Background Image */}
          <div className="absolute top-12 w-full h-full opacity-70 z-0 hidden md:block">
            <Image
              src="/images/projects/JG-BG-1.png"
              alt="image"
              fill
              className="object-contain"
            />
          </div>

          {/* Home and Mastery */}
          <div className="relative mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center md:gap-8 lg:gap-16 lg:w-[67rem] w-full">
            <div className="flex-shrink-0 w-full max-w-[344px] mx-auto">
              <Image
                src="/images/projects/JG-13.webp"
                width={344}
                height={696}
                alt="Jego Home phone UI"
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="w-full max-w-xl px-5 lg:pl-8 mt-6 lg:mt-0">
              <h3 className="text-[#F7DE66] text-3xl font-bold mb-7">
                Home and Mastery
              </h3>
              <p className="text-[#C9F5FF] leading-relaxed text-xl font-normal opacity-90">
                Dynamic home page offers you to promote what's now going on and
                the Mastery helps you with guided path to achieve your goals.
              </p>
            </div>
          </div>

          {/* About Mentors */}
          <div className="relative mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center md:gap-5 lg:gap-10 mt-16 lg:w-[67rem] w-full">
            {/* Left */}
            <div className="flex flex-col items-center justify-between gap-16">
              <div className="w-full lg:mt-25 lg:mb-30 max-w-xl px-5 lg:pl-8 mt-0">
                <h3 className="text-[#F7DE66] text-3xl font-bold mb-4">
                  About Mentors
                </h3>
                <p className="text-[#C9F5FF] leading-relaxed text-xl font-normal">
                  Mentors and their profile helps you know more about your
                  teachers.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/projects/JG-15.webp"
                  alt="image"
                  width={344}
                  height={696}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-end w-full max-w-[344px] mx-auto lg:mx-0 mt-10 lg:mt-0">
              <div className="relative overflow-hidden w-full">
                <Image
                  src="/images/projects/JG-14.webp"
                  alt="image"
                  width={344}
                  height={696}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Lessons and Player */}
          <div className="relative mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center md:gap-5 lg:gap-10 mt-16 lg:w-[67rem] w-full">
            {/* Left */}
            <div className="flex flex-col items-center justify-between gap-16">
              <div className="w-full max-w-xl lg:mt-25 lg:mb-30 px-5 lg:pl-8 mt-6">
                <h3 className="text-[#F7DE66] text-3xl font-bold mb-4">
                  Lessons and Player
                </h3>
                <p className="text-[#C9F5FF] leading-relaxed text-xl font-normal">
                  Browse your lessons, download to watch offline and make your
                  list of favourites. The player is equipped with all the
                  powerful speed and captions.
                </p>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/projects/JG-17.webp"
                  alt="image"
                  width={344}
                  height={696}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-end w-full max-w-[344px] mx-auto lg:mx-0 mt-10 lg:mt-0">
              <div className="relative overflow-hidden w-full">
                <Image
                  src="/images/projects/JG-16.webp"
                  alt="image"
                  width={344}
                  height={696}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-5 sm:px-4">
        <div className="flex flex-col items-start justify-center relative z-10 w-full">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-[#F7DE66] text-3xl font-bold mb-4">Web UI</h2>
            <p className="text-[#C9F5FF] leading-relaxed text-xl font-normal max-w-[38.63rem]">
              The Jego web UI takes user experience to the next level with the
              power of cloud you can continue your learning on larger screen
              with Jego Web.
            </p>
          </div>
          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-8 auto-rows-min">
            {/* Row 1 - Top Section */}
            <div className="lg:col-span-6 md:col-span-1 row-span-2">
              <Image
                src="/images/projects/JG-19.webp"
                alt="Login Screen"
                width={556}
                height={393}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="lg:col-span-6 md:col-span-1 row-span-2">
              <Image
                src="/images/projects/JG-20.webp"
                alt="What is Jego"
                width={556}
                height={393}
                className="object-contain w-full h-auto"
              />
            </div>
            {/* Row 2 - Middle Large Section */}
            <div className="lg:col-span-8 md:col-span-1 row-span-3">
              <Image
                src="/images/projects/JG-21.webp"
                alt="User Profiles"
                width={834}
                height={593}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-1 row-span-3 flex flex-col gap-4">
              <Image
                src="/images/projects/JG-22.webp"
                alt="Main Dashboard"
                width={276}
                height={272}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-23.webp"
                alt="Course Management"
                width={276}
                height={272}
                className="object-contain w-full h-auto hidden lg:block md:hidden"
              />
            </div>
            {/* Row 3 - Middle Large Section */}
            <div className="lg:col-span-6 md:col-span-1 row-span-2 flex flex-col gap-4">
              <Image
                src="/images/projects/JG-24.webp"
                alt="Learning Interface"
                width={556}
                height={672}
                className="object-contain w-full h-auto"
              />
              <div className="mt-4">
                <Image
                  src="/images/projects/JG-26.webp"
                  alt="Course Details"
                  width={556}
                  height={890}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
            <div className="mt-4 lg:col-span-6 md:col-span-1 row-span-2">
              <Image
                src="/images/projects/JG-25.webp"
                alt="Course Catalog"
                width={556}
                height={1470}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-4">
        <div className="flex flex-col items-start justify-center relative z-10 w-full">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-[#F7DE66] text-3xl font-bold mb-4">
              Components
            </h2>
            <p className="text-[#C9F5FF] leading-relaxed text-xl font-normal max-w-[38.63rem]">
              Components and Variants used it this entire system.
            </p>
          </div>
          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-8 auto-rows-min">
            {/* Col 1 - Left Section */}
            <div className="col-span-1 lg:col-span-6 flex flex-col gap-4">
              <Image
                src="/images/projects/JG-27.webp"
                alt="Component"
                width={614}
                height={406}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-28.webp"
                alt="Component"
                width={614}
                height={187}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-29.webp"
                alt="Component"
                width={614}
                height={554}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-30.webp"
                alt="Component"
                width={614}
                height={615}
                className="object-contain w-full h-auto"
              />
            </div>
            {/* Col 2 - Right Section */}
            <div className="col-span-1 lg:col-span-6 flex flex-col gap-4">
              <Image
                src="/images/projects/JG-31.webp"
                alt="Component"
                width={510}
                height={261}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-32.webp"
                alt="Component"
                width={510}
                height={261}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-33.webp"
                alt="Component"
                width={510}
                height={131}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-34.webp"
                alt="Component"
                width={510}
                height={131}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-35.webp"
                alt="Component"
                width={510}
                height={131}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-36.webp"
                alt="Component"
                width={510}
                height={131}
                className="object-contain w-full h-auto"
              />
              <Image
                src="/images/projects/JG-37.webp"
                alt="Component"
                width={510}
                height={300}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto py-16 px-6 md:px-12 sm:px-10">
        <div className="flex flex-col items-start justify-center relative z-10 w-full">
          <h2 className="mb-10 lg:mb-18 text-[#F7DE66] text-3xl font-bold">
            The Grid
          </h2>
          <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-center md:items-start md:gap-10 gap-5 w-full">
            <div className="relative w-full max-w-[864px] md:w-[700px] aspect-[1/1] mx-auto">
              <Image
                src="/images/projects/JG-38.webp"
                alt="Component"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[250px] mx-auto">
              <Image
                src="/images/projects/JG-39.webp"
                alt="Component"
                width={250}
                height={756}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
