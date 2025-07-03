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
                <span role="img" aria-label="pin">
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
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
}
