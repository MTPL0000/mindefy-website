import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";
import Navbar from "./HomePage/Navbar";
import Image from "next/image";

export default function EarlyFoods() {
  const list = [
    {
      title: "Ideate",
      desc: "Turn idea from concept and brainstorm to MVP",
    },
    {
      title: "Design",
      desc: "Sketch out the product to align the user needs",
    },
    {
      title: "Develop",
      desc: "Convert the designs into a live application",
    },
    {
      title: "Deploy",
      desc: "Launching the application to the market",
    },
  ];

  const dataList = [
    {
      title: "01 - Ideation",
      items: ["Brainstorming", "Research", "Interview"],
    },
    {
      title: "02 Research and wireframe",
      items: [
        "Interview",
        "Empathy Map",
        "Competitor analysis",
        "User journey",
        "General Flow",
        "Low Fi Testing (A/B)",
      ],
    },
    {
      title: "03 Hifi Design",
      items: [
        "Brand identity",
        "Design Main Cases",
        "Design Edge Cases",
        "Design UI documentation",
        "Design System",
        "Design Flow Per Cases",
      ],
    },
    {
      title: "04 Prototype and Testing (UT)",
      items: [
        "General Prototype",
        "Edge cases Prototype",
        "Usability Testing",
        "Gather Feedback",
        "Design Revision",
      ],
    },
    {
      title: "05 Development",
      items: [
        "Handoff to developer",
        "Assets Documentation",
        "Translate from UI to code",
        "Unit Testing",
        "UI audit",
        "Gather Feedback",
        "Layout Revision after feedback",
        "Ready to test",
      ],
    },
    {
      title: "Testing → Release",
      items: [
        "Testcase Creation",
        "Flow Creation from QA",
        "QA documentation",
        "UI Audit",
        "Revision to developer",
        "General Testing",
        "Release MVP",
      ],
    },
  ];

  const roleList = [
    {
      title: "Research",
      desc: "This process is made so that the requirements and problems obtained meet the target market.",
      icon: "/images/projects/EF-icon-1.svg",
    },
    {
      title: "Flow Documentation",
      desc: "When the application is continued, it can be easily carried out.",
      icon: "/images/projects/EF-icon-2.svg",
    },
    {
      title: "UI Audit",
      desc: "Perform UI audits, make sure nothing goes wrong when the App is made.",
      icon: "/images/projects/EF-icon-3.svg",
    },
    {
      title: "Provide Assets",
      desc: "Ensure Assets contained in the UI are usable and provide in multiple sizes.",
      icon: "/images/projects/EF-icon-4.svg",
    },
    {
      title: "Prototyping",
      desc: "Creation of UI documentation so that developers can code well.",
      icon: "/images/projects/EF-icon-5.svg",
    },
    {
      title: "Branding",
      desc: "User testing using UT and AB testing, so that the App can be well received by the user.",
      icon: "/images/projects/EF-icon-6.svg",
    },
  ];

  const notes = [
    "Menu needs to be perceived we can see almost no attention user has over the menu",
    "Other images of product can come below",
    "Color theme needs to be redefined",
    "BG color in descriptions can be removed or changed",
    "Search needs to be accessible without a click",
    "Reviews can be hidden",
    "CTAs on banner need to have better contrast and visibility",
    "Alignment to cart icon",
    "Indicator of changing the image",
    "Next product can have a affordance",
    "A checkbox will be a perfect cue for user to see and confirm the selected category",
    "sometimes appear on not contextual to page’s data",
    "Filters can be lot more dynamic and the list we see now should go under dropdown on top",
    "Sorting can be brought in",
    "Image per category will help user know what exactly they will find inside and also generate curiosity",
    "Quick shop flow can be changed to View Product Details",
    "Reviews can be hidden",
    "Avoid Images with text",
    "The action of “Quick shop” can be performed by “add to cart” button",
    "Alignment of of the product on product grid",
  ];

  const interviewCards = [
    {
      name: "Neha Kumar",
      role: "Mother",
      feedback:
        "Can you please make the app for the phone . iPhone or android and make it user friendly and easy to purchase. No COD | Technical Difficulty",
    },
    {
      name: "Hima Shah",
      role: "Teacher",
      feedback:
        "Couldn’t find the Laddoos category easily, but rest all was good | Can’t find products.. example Rusks.. I have to search",
    },
    {
      name: "Ramya",
      role: "Nutritionist",
      feedback:
        "Product description or the way shown is not much user friendly",
    },
    {
      name: "Ankita",
      role: "Home Maker",
      feedback:
        "No difficulty, sometimes if I search for an ingredient, not everything will show in the results",
    },
    {
      name: "Tahera",
      role: "Doctor",
      feedback:
        "No information about product was given and no tracking id or any information is provided",
    },
    {
      name: "Lik Emy",
      role: "Food Seller",
      feedback:
        "I cant able to find right products to my baby i didn’t understood what to order of its month wise seperated its its easy to find",
    },
  ];

  const personaCards = [
    {
      title: "Interests",
      items: ["Sugar Free Products", "Post Partum Products", "Laddoos"],
    },
    {
      title: "Influences",
      items: [
        "Mom-Centered Business",
        "Transparent Ingredients",
        "Ayurveda Inspired",
      ],
    },
    {
      title: "Needs and expectations",
      items: [
        "Focus on Child Growth",
        "Healthy Snacks",
        "Trial packs for all variants",
      ],
    },
    {
      title: "Goals",
      items: ["Freshly Made Products", "Healthy Snacks", "Trustable Platform"],
    },
    {
      title: "Motivations",
      items: [
        "100% Clean",
        "Women Empowerment",
        "Wish there were noodles/snacks",
      ],
    },
    {
      title: "Pain points and frustrations",
      items: ["Sugar in everything", "Artificial Colors", "Hidden ingredients"],
    },
  ];

  return (
    <div className="bg-[#E9F6F6] flex flex-col">
      <Navbar />
      <section className="w-full flex flex-col items-center justify-center gap-16">
        <div className="relative h-[866px] w-full overflow-hidden">
          <div className="m-auto w-[58rem] flex flex-col items-center justify-center gap-4 mt-24">
            <h3 className="text-[#FC6B81] text-3xl font-medium">CASE STUDY</h3>
            <div className="relative aspect-[2/1] w-[13.25rem] overflow-hidden">
              <Image
                src="/images/projects/EF-logo.png"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-4xl font-normal text-center leading-relaxed">
              <span className="text-[#2B7575]">a</span>{" "}
              <span className="text-[#FC6B81]">mom-founded</span>{" "}
              <span className="text-[#92BA4D]">
                premium organic food company
              </span>{" "}
              <span className="text-[#2B7575]">that envisions to feed</span>{" "}
              <span className="text-[#92BA4D]">
                natural, fresh and chemical free food
              </span>{" "}
              <span className="text-[#2B7575]">to</span>{" "}
              <span className="text-[#FC6B81]">our children</span>
              <span className="text-[#2B7575]">.</span>
            </p>
          </div>
          <Image
            src="/images/projects/EF-bg-1.png"
            alt="image"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative aspect-[2/1] w-full overflow-hidden">
          <Image
            src="/images/projects/EF-1.png"
            alt="image"
            fill
            className="object-contain"
          />
        </div>

        <div className="m-auto w-[43.75rem] flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#FC6B81] text-2xl font-normal uppercase">
            INTRODUCTION
          </h3>
          <h3 className="text-[#52B7B7] text-[2.65rem] font-semibold">
            About This Project
          </h3>
          <p className="text-[#2B7575] text-xl font-normal text-center leading-normal">
            Early Foods is a mom-founded premium organic food company that
            envisions to feed natural, fresh and chemical free food to our
            children.
          </p>
        </div>

        <div className="max-w-[71.5rem] mx-auto flex items-center justify-between  gap-15">
          {/* Left Text Section */}
          <div className="w-[60%] flex flex-col items-start justify-center gap-5">
            <h3 className="text-[#FC6B81] text-2xl font-normal uppercase tracking-wide">
              Get Started
            </h3>
            <h2 className="text-[#52B7B7] text-[2.65rem] font-semibold leading-tight">
              Overview
            </h2>
            <p className="text-[#2B7575] text-lg font-normal text-justify leading-relaxed">
              When founder Shalini a new mom, struggled to find healthy food
              options for her own baby, she found her purpose: to re-introduce
              the traditional Indian foods for people. EarlyFoods is a very
              successful E-Commerce Store for buying healthy snacks for
              expecting mothers, breast-feeding mothers, infants and children
              who are beginning to develop their taste buds and also building
              their body.
            </p>

            <span className="block text-[#FC6B81] text-xl font-normal mb-2">
              Platform
            </span>

            <a
              className="inline-flex items-center gap-3 bg-[#FC6B81] hover:bg-[#e65570] transition rounded-lg px-6 py-3"
              href="https://earlyfoods.com/"
              target="_blank"
            >
              <div className="relative aspect-[1.2/1] w-[1.5rem] overflow-hidden">
                <Image
                  src="/images/globe-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-lg font-medium">Web</span>
            </a>
          </div>

          {/* Right Image Section */}
          <div className="relative w-[80%] aspect-[1.3/1]">
            <Image
              src="/images/projects/EF-2.png"
              alt="EarlyFoods circular visual"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-[71.5rem] mx-auto flex items-center justify-between gap-15 mt-5">
          {/* Left Text Section */}
          <div className="w-[60%] flex flex-col items-start justify-center gap-5">
            <h2 className="text-[#52B7B7] text-[2.65rem] font-semibold leading-tight uppercase">
              The STORY
            </h2>
            <div className="bg-[#BBE5E5] w-full h-0.5 leading-relaxed"></div>
            <p className="text-[#2B7575] text-lg font-normal text-justify leading-relaxed">
              We kicked off the discussion by asking how we can get folks to
              check out more of our products and make their journey with us
              super easy and enjoyable. As we kept talking, we also wondered how
              we could build trust, especially for first-time visitors to our
              WebApp.
            </p>
            <p className="text-[#2B7575] text-lg font-normal text-justify leading-relaxed">
              Think about Instagram—some people are a bit wary about buying
              stuff online because of bad experiences on other platforms. It
              gets even trickier when it’s about health, especially for
              themselves and their kids. So, we need to figure out how to make
              them feel comfy and trust us right from the start.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative w-[80%] aspect-[1.3/1]">
            <Image
              src="/images/projects/EF-3.png"
              alt="EarlyFoods circular visual"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-[71.5rem] mx-auto  py-16 px-6">
          {/* Section Heading */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-[#F690A1] text-[2rem] font-normal flex items-center gap-2">
                <span className="w-8" role="img" aria-label="pin">
                  📍
                </span>{" "}
                Preparation
              </h3>
              <h2 className="text-[#52B7B7] text-[4rem] font-bold mt-2">
                DESIGN PROCESS
              </h2>
            </div>
            <div>
              <h4 className="text-[#F88598] text-base font-bold mb-2">
                Design Flow
              </h4>
              <ul className="text-[#2B7575] list-disc list-inside leading-relaxed text-sm font-normal">
                <li>Research & Ideation</li>
                <li>Design & Prototype</li>
                <li>Testing</li>
              </ul>
            </div>
          </div>

          {/* 4-Step Process */}
          <div className="grid grid-cols-4 gap-6 text-start">
            {list.map((step, i) => (
              <div key={i} className="flex flex-col items-start">
                {/* Dot and Line */}
                <div className="flex flex-col items-center relative">
                  <span className="w-6 h-6 bg-[#FA798D] rounded-full mb-2"></span>
                  {i !== 3 && (
                    <div className="h-[1px] w-full border-dashed border-t-2 border-[#FC6B81] absolute top-2 left-[50%] translate-x-[12px] z-[-1] w-[150%] sm:w-[120%]"></div>
                  )}
                </div>
                {/* Text */}
                <h4 className="text-[#F8889A] text-xl font-semibold mt-3">
                  {step.title}
                </h4>
                <p className="text-[#2B7575] text-base mt-1 max-w-[250px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[71.5rem] mx-auto px-6">
          {/* Section Heading */}
          <div className="flex flex-col gap-3 items-start">
            <h2 className="text-[#52B7B7] text-5xl font-extrabold mt-2">
              Design Timeline
            </h2>
            <span className="text-[#2B7575] text-lg font-normal">
              Our achievement in the journey depicted in numbers
            </span>

            <div className="relative aspect-[2/1] w-full overflow-hidden">
              <Image
                src="/images/projects/EF-4.png"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-[71.5rem] mx-auto px-6">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step Blocks */}
            {dataList.map((section, index) => (
              <div key={index}>
                <div className="bg-[#CBEBEB] text-[#52B7B7] text-base px-4 py-2 rounded-md font-semibold mb-4">
                  {section.title}
                </div>
                <ul className="text-[#2B7575] list-disc list-inside space-y-2 text-sm font-normal">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mx-auto px-6 mt-4">
          {/* Section Heading */}

          <div className="relative aspect-[3/1] w-full overflow-hidden">
            <div className="relative z-30 flex flex-col gap-2 items-center">
              <h2 className="text-[#52B7B7] text-5xl font-extrabold mt-2 mb-4">
                My Role
              </h2>
              <span className="w-[47rem] text-[#377D7D] text-base font-normal text-center">
                This process provided me with clear visibility to move the
                project forward, including creating backlogs, wireframes,
                branding, and ultimately designing the interface.
              </span>
            </div>
            <Image
              src="/images/projects/EF-5.png"
              alt="image"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-[80rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 text-center">
            {roleList.map((item, index) => (
              <div
                key={index}
                className=" w-[25rem] flex flex-col items-center gap-3"
              >
                <div className="relative aspect-[1/1] w-[2rem] overflow-hidden">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-[#52B7B7] font-semibold text-2xl">
                  {item.title}
                </h4>
                <p className="text-[#2B7575] text-base leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[71.5rem] mx-auto">
          {/* Section Heading */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-[#FC6B81] text-[2rem] font-normal flex items-center gap-2">
                <span className="w-8" role="img" aria-label="pin">
                  📍
                </span>{" "}
                Preparation
              </h3>
              <h2 className="text-[#52B7B7] text-[4rem] font-bold mt-2">
                UX Audit
              </h2>
            </div>
            <div>
              <h4 className="text-[#F98194] text-base font-black mb-2">
                Design Flow
              </h4>
              <ul className="text-[#2B7575] list-disc list-inside leading-relaxed text-sm font-normal">
                <li>Heat Map Testing</li>
                <li>Usability Testing</li>
                <li>Scenario Testing</li>
              </ul>
            </div>
          </div>

          {/* Heatmap + Feedback Sticky Notes */}
          <div className="w-full flex flex-col lg:flex-row gap-12">
            {/* Left: Heatmap Image */}
            <div className="flex flex-col gap-8">
              <div className="relative">
                <Image
                  src="/images/projects/EF-6.webp"
                  alt="image"
                  width={668}
                  height={985}
                  className="object-contain"
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/projects/EF-7.webp"
                  alt="image"
                  width={668}
                  height={1094}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Sticky Notes */}
            <div className="w-full lg:w-[38%] grid grid-cols-2 gap-4">
              {notes.map((text, i) => (
                <div
                  key={i}
                  className="bg-[#FFD966] w-[12rem] h-[12rem] text-[#222222] text-base font-normal rounded-sm p-3 shadow-md"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[71.5rem] mx-auto mt-12">
          <div className="mx-auto flex flex-col gap-15">
            <div className="flex flex-col justify-between items-start gap-6">
              <div className="w-full flex justify-between">
                <div>
                  <h4 className="text-[#F690A1] text-[2rem] font-normal flex items-center gap-2">
                    <span className="w-8" role="img" aria-label="pin">
                      📍
                    </span>{" "}
                    Preparation
                  </h4>
                  <h1 className="text-[#52B7B7] text-[4rem] font-bold mt-1 uppercase">
                    USER RESEARCH
                  </h1>
                </div>

                <div>
                  <h4 className="text-[#F88598] text-base font-bold mb-2">
                    Research Plan
                  </h4>
                  <div className="flex gap-10">
                    <ul className="list-disc list-inside text-[#2B7575] font-normal text-sm space-y-2">
                      <li>Survey</li>
                      <li>Interview</li>
                      <li>Personas</li>
                    </ul>
                    <ul className="list-disc list-inside text-[#2B7575] font-normal text-sm space-y-2">
                      <li>Empathy Map</li>
                      <li>User Journey</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-[#2B7575] text-xl font-normal mt-4 leading-relaxed">
                User research is a process to find out the user point of view,
                their frustrations and their struggle to get their
                understanding. I have two used methods which contributed hugely
                in addition to my own findings
              </p>
            </div>

            <div>
              <h3 className="flex items-center justify-start gap-2.5 text-[#F88598] text-4xl font-bold mb-4">
                <div className="bg-[#F88598] w-2.5 h-11"></div>SURVEY
              </h3>
              <p className="w-[61.5rem] text-[#2B7575] text-xl font-normal leading-relaxed">
                I did survey with{" "}
                <strong className="font-bold text-[#2B7575]">
                  394 potential users
                </strong>{" "}
                in combination with interviews from individual conversation to
                know their{" "}
                <strong className="font-bold text-[#2B7575]">
                  views, experience
                </strong>{" "}
                and to collect{" "}
                <strong className="font-bold text-[#2B7575]">
                  quantitive and qualitative data
                </strong>
                . the target audience were between the age 21–50 Years old
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  src="/images/projects/EFS-1.png"
                  alt="image"
                  width={566}
                  height={370}
                  className="object-contain"
                />
              </div>

              <div className="relative">
                <Image
                  src="/images/projects/EFS-2.png"
                  alt="image"
                  width={566}
                  height={370}
                  className="object-contain"
                />
              </div>

              <div className="relative">
                <Image
                  src="/images/projects/EFS-3.png"
                  alt="image"
                  width={566}
                  height={370}
                  className="object-contain"
                />
              </div>

              <div className="relative">
                <Image
                  src="/images/projects/EFS-4.png"
                  alt="image"
                  width={566}
                  height={370}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[71.5rem] mx-auto mt-5">
          <div className="mx-auto flex flex-col gap-12">
            <div>
              <h3 className="flex items-center justify-start gap-2.5 text-[#F88598] text-4xl font-bold mb-4">
                <div className="bg-[#F88598] w-2.5 h-11 uppercase"></div>
                INTERVIEW
              </h3>
              <p className="w-[61.5rem] text-[#2B7575] text-xl font-normal leading-relaxed">
                From the survey that I have done, I did filtering, and got 2
                people for direct interview. I did online interviews using Zoom
                and invited them at different times.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {interviewCards.map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#CBEBEB] px-10 py-14 w-[35.5rem] h-[23rem] flex flex-col justify-end"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-9 text-[#E9F6F6] text-[12rem] leading-none font-serif select-none">
                    &rdquo;
                  </div>
                  {/* Name & Role */}
                  <div className="mb-7">
                    <h4 className="text-[#52B7B7] font-bold text-lg mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[#F88598] text-sm font-normal">
                      {item.role}
                    </p>
                  </div>
                  {/* Feedback */}
                  <p className="text-[#377D7D] text-lg font-normal leading-8">
                    {item.feedback}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mx-auto px-6 mt-4">
          {/* Section Heading */}
          <div
            style={{
              background: "#E9F6F6",
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: "50% 100%",
              borderBottomRightRadius: "50% 100%",
              boxShadow: "0 35px 44px 0 rgba(30, 66, 66, 0.05)",
            }}
            className="relative w-full overflow-hidden bg-[#E9F7F7]"
          >
            {/* Section Content */}
            <div className="relative z-30 flex flex-col gap-2 items-center pt-16 pb-24">
              <h2 className="text-[#52B7B7] text-5xl font-extrabold">
                User Persona
              </h2>
              <p className="text-[#377D7D] text-base font-normal text-center w-[47rem]">
                It embodies the characteristics, goals, motivations, and
                behaviors of real users, serving as a reference point for design
                and decision-making processes in UX/UI development
              </p>
            </div>
          </div>

          {/* Profile + Personality */}
          <div className="max-w-[75rem] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: User Profile Info */}
            <div className="mt-12">
              <div className="flex gap-5">
                <div className="relative">
                  <Image
                    src="/images/projects/EF-8.png"
                    alt="image"
                    width={172}
                    height={172}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[#52B7B7] text-2xl font-bold mb-1">
                    Rachna Rajora
                  </h3>
                  <i className="bg-[#CBEBEB] text-[#377D7D] px-6 rounded-sm text-sm font-semibold">
                    "Explorer"
                  </i>
                  <ul className="text-[#377D7D] text-[10px] font-medium list-disc list-inside mt-5 mb-4 space-y-2">
                    <li>Female</li>
                    <li>Age: 32 Years</li>
                    <li>Housewife</li>
                    <li>Bangalore</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#BBE5E5] w-full h-0.5 leading-relaxed mt-8 mb-2"></div>
              <h4 className="text-[#F88598] font-bold text-lg">Bio</h4>
              <p className=" w-[42rem] text-[#377D7D] font-normal text-justify text-lg mt-2 leading-relaxed">
                Hi I am Rachana. I am from Neemuch but I live in Bangalore. My
                family was neither too open but mother has been always
                supportive and because of her I have achieved a lot of things in
                my life. I have done graduation and a diploma in hospitality. I
                have learned a lot from my career as I used to keep changing my
                jobs. I started my own business as well in Gurgaon. My business
                was my achievement I was so proud of and now being a mother is
                my another achievement as I love this phase of my life. I have a
                small and beautiful family of a baby boy, my dog, and my
                husband. I love doing DIY projects, painting, and traveling.
                Thanks
              </p>
            </div>

            {/* Right: Personality */}
            <div className="relative ml-20">
              <Image
                src="/images/projects/EF-9.png"
                alt="image"
                width={545}
                height={608}
                className="object-contain"
              />
            </div>
          </div>

          {/* Grid Cards: Interests, Influences, Goals, etc. */}
          <div className="max-w-[75rem] mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {personaCards.map((card, i) => (
              <div
                key={i}
                className="bg-[#CBEBEB] mb-3 p-8 rounded-md shadow-sm flex flex-col gap-2"
              >
                <h4 className="text-[#377D7D] font-bold text-lg mb-3">
                  {card.title}
                </h4>
                <ul className="text-[#377D7D] ml-2 text-sm font-medium list-disc list-inside space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
}
