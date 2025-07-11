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
    "sometimes appear on not contextual to page's data",
    "Filters can be lot more dynamic and the list we see now should go under dropdown on top",
    "Sorting can be brought in",
    "Image per category will help user know what exactly they will find inside and also generate curiosity",
    "Quick shop flow can be changed to View Product Details",
    "Reviews can be hidden",
    "Avoid Images with text",
    'The action of "Quick shop" can be performed by "add to cart" button',
    "Alignment of of the product on product grid",
  ];

  const interviewCards = [
    {
      name: "Neha Kumar",
      role: "Mother",
      feedback:
        "Can you please make the app for the phone . iPhone or android and make it user friendly and easy to purchase.No COD | Technical Difficulty",
    },
    {
      name: "Hima Shah",
      role: "Teacher",
      feedback:
        "Couldn't find the Laddoos category easily, but rest all was good | Can't find products.. example Rusks.. I have to search",
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
        "I cant able to find right products to my baby i didn't understood what to order of its month wise seperated its its easy to find",
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
  const column1 = [
    "31% of parents of children aged 3–7 said they eat organic food at least once a week.",
    "75% of parents said they are interested in buying organic baby food products online",
    "8% saying they would be very interested in purchasing packaged ready-to-eat meals.",
    "72% of new mothers said they are interested in convenient, pre-prepared meals",
    "A significant percentage of parents purchase baby food, and the majority of the baby food purchases are for convenience.",
    "The e-store image is an important factor continue influencing the purchase intention rate of consumers.",
    "Convenience is the primary factor for purchasing baby food online, followed by price and product reviews.",
  ];

  const column2 = [
    "76% of parents said they would be interested in purchasing pre-prepared, ready-to-eat food items for their children, particularly if the food items are organic or GMO-free.",
    "72% of new mothers said they are interested in convenient, pre-prepared meals",
    "87% said they would be more likely to buy a product if it has been endorsed by a trusted source.",

    "92% of new mothers said they are interested in price discounts on website purchases",
    "Organic and specialty baby foods have a lower market share, but are more likely to be purchased by those in higher socio-economic levels.",
    "Product information and design of the e-store are key factors in driving purchase intention.",
  ];

  const column3 = [
    "92% of new mothers said they are interested in price discounts on website purchases",
    "87% said they would be more likely to buy a product if it has been endorsed by a trusted source",
    "18% saying they would be very interested in purchasing packaged ready-to-eat meals.",
    "Parents conduct research prior to purchasing baby care products, with the majority of the research being online.",
    "Consumers prefer an e-store with more information, modern design, and fewer distractions.",
  ];
  const problems = [
    "Irrelevant Filter Options",
    "Misplaced Content in Product Information",
    "Photo Clarity Enhancement",
    "Footer Title Revisions",
    "Testimonial Section Revamp",
    "Inclusion of Product-Based FAQs",
    "Visual Breaks on Landing Page",
    "Blog Section Renaming",
    "Incorporation of User Reviews",
    "Sugar-Free Products Elaboration",
    "Product Texture Details",
    "Age Group Specifications",
    "Bundle Offers on Product",
    "Clear Product Information",
  ];
  const fullRows = problems.slice(0, Math.floor(problems.length / 3) * 3); // multiples of 3
  const lastRow = problems.slice(fullRows.length); // 1 or 2 remaining items

  const solutions = [
    "Enhance Support Accessibility",
    "Encouraging User Feedback",
    "Referral Program & Promotion Codes",
    "Enhanced Search Functionality",
    "Favourites and Wish List Feature",
    "Personalized User Experience",
    "Simplified Sign-Up/Sign-In Process",
    "New User Shopping Guide",
    "Sequential Product Imagery",
    "Unique Selling Point (USP) Emphasis",
    "Recommend Product and Filters",
    "Dynamic Product Page Banners",
    "Estimated Delivery Time",
    "Comprehensive User Profile",
    "Introducing New Iconography",
    "Improved UX Writing",
    "Gamified Newsletter Subscription",
    "Redesigned Navigation Menu and Website Flow",
  ];

  const icons = [
    { src: "/images/transparency.svg", label: "Transparency" },
    { src: "/images/secure.svg", label: "Secure" },
    { src: "/icons/fresh-food.svg", label: "Fresh Food" },
    { src: "/icons/refined-flour.svg", label: "Refined Flour" },
    { src: "/icons/sugar-salt.svg", label: "Added Sugar/Salt" },
    { src: "/icons/thickeners.svg", label: "Thickeners" },
    { src: "/icons/soda.svg", label: "Soda" },
    { src: "/icons/artificial.svg", label: "Artificial Flour" },
    { src: "/icons/milk.svg", label: "Milk Powder" },
    { src: "/icons/preservatives.svg", label: "Preservatives" },
    { src: "/icons/bad-stuff.svg", label: "Bad Stuff" },
    { src: "/icons/almond.svg", label: "Almond" },
    { src: "/icons/jowar.svg", label: "Jowar millet" },
    { src: "/icons/ragi.svg", label: "Ragi millet" },
    { src: "/icons/bajra.svg", label: "Bajra millet" },
    { src: "/icons/flax.svg", label: "Flax seeds" },
    { src: "/icons/sesame.svg", label: "Sesame seeds" },
    { src: "/icons/curry.svg", label: "Curry leaves" },
    { src: "/icons/jaggery.svg", label: "Jaggery" },
    { src: "/icons/rice.svg", label: "Rice" },
    { src: "/icons/wheat.svg", label: "Whole Wheat" },
    { src: "/icons/rava.svg", label: "Rava" },
    { src: "/icons/oil.svg", label: "Oil" },
  ];

  return (
    <div className="bg-[#E9F6F6]">
      <section className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-12">
        <div className="relative max-w-[90rem] mx-auto overflow-hidden pt-12 sm:pt-16 lg:pt-24">
          <div className="m-auto max-w-[58rem] flex flex-col items-center justify-center gap-3 sm:gap-4 relative z-10 px-4 text-center">
            <h3 className="text-[#FC6B81] text-xl sm:text-2xl lg:text-3xl font-medium">CASE STUDY</h3>
            <div className="relative aspect-[2/1] w-[10rem] sm:w-[11rem] lg:w-[13.25rem]">
              <Image
                src="/images/projects/EF-logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-normal text-center leading-relaxed px-2 sm:px-4">
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
            alt="bg-decor"
            width={1440}
            height={866}
            className="object-contain absolute top-0 left-0 hidden lg:block"
          />
          <div className="relative w-full max-w-[90rem] mx-auto mt-6 sm:mt-8 lg:mt-10 px-4 z-10">
            <Image
              src="/images/projects/EF-1.png"
              alt="device preview"
              width={1440}
              height={866}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="m-auto w-full max-w-[43.75rem] px-4 sm:px-6 flex flex-col items-center justify-center gap-2">
          <h3 className="text-[#FC6B81] text-lg sm:text-xl lg:text-2xl font-normal uppercase">
            INTRODUCTION
          </h3>
          <h3 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[2.65rem] font-semibold text-center">
            About This Project
          </h3>
          <p className="text-[#2B7575] text-base sm:text-lg lg:text-xl font-normal text-center leading-normal">
            Early Foods is a mom-founded premium organic food company that
            envisions to feed natural, fresh and chemical free food to our
            children.
          </p>
        </div>
        <div className="max-w-[71.5rem] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-15">
          <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h3 className="text-[#FC6B81] text-lg sm:text-xl lg:text-2xl font-normal uppercase tracking-wide">
              Get Started
            </h3>
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[2.65rem] font-semibold leading-tight">
              Overview
            </h2>
            <p className="text-[#2B7575] text-base sm:text-lg font-normal text-justify leading-relaxed">
              When founder Shalini a new mom, struggled to find healthy food
              options for her own baby, she found her purpose: to re-introduce
              the traditional Indian foods for people. EarlyFoods is a very
              successful E-Commerce Store for buying healthy snacks for
              expecting mothers, breast-feeding mothers, infants and children
              who are beginning to develop their taste buds and also building
              their body.
            </p>
            <span className="block text-[#FC6B81] text-lg sm:text-xl font-normal mb-2">
              Platform
            </span>
            <a
              className="inline-flex items-center gap-3 bg-[#FC6B81] hover:bg-[#e65570] transition rounded-lg px-4 sm:px-6 py-2 sm:py-3"
              href="https://earlyfoods.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative aspect-[1.2/1] w-[1.2rem] sm:w-[1.5rem] overflow-hidden">
                <Image
                  src="/images/globe-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-base sm:text-lg font-medium">Web</span>
            </a>
          </div>
          <div className="relative w-full lg:w-[80%] aspect-[1.3/1] max-w-[400px] lg:max-w-none">
            <Image
              src="/images/projects/EF-2.png"
              alt="EarlyFoods circular visual"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="max-w-[71.5rem] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-15 mt-5">
          <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[2.65rem] font-semibold leading-tight uppercase">
              The STORY
            </h2>
            <div className="bg-[#BBE5E5] w-full h-0.5 leading-relaxed"></div>
            <p className="text-[#2B7575] text-base sm:text-lg font-normal text-justify leading-relaxed">
              We kicked off the discussion by asking how we can get folks to
              check out more of our products and make their journey with us
              super easy and enjoyable. As we kept talking, we also wondered how
              we could build trust, especially for first-time visitors to our
              WebApp.
            </p>
            <p className="text-[#2B7575] text-base sm:text-lg font-normal text-justify leading-relaxed">
              Think about Instagram—some people are a bit wary about buying
              stuff online because of bad experiences on other platforms. It
              gets even trickier when it's about health, especially for
              themselves and their kids. So, we need to figure out how to make
              them feel comfy and trust us right from the start.
            </p>
          </div>
          <div className="relative w-full lg:w-[80%] aspect-[1.3/1] max-w-[400px] lg:max-w-none">
            <Image
              src="/images/projects/EF-3.png"
              alt="EarlyFoods circular visual"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full max-w-[71.5rem] mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-12 gap-6 lg:gap-0">
            <div className="w-full lg:w-auto">
              <h3 className="text-[#F690A1] text-lg sm:text-xl lg:text-[2rem] font-normal flex items-center gap-2">
                <span className="w-6 sm:w-8" role="img" aria-label="pin">
                  📍
                </span>{" "}
                Preparation
              </h3>
              <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[4rem] font-bold mt-2">
                DESIGN PROCESS
              </h2>
            </div>
            <div className="w-full lg:w-auto">
              <h4 className="text-[#F88598] text-sm sm:text-base font-bold mb-2">
                Design Flow
              </h4>
              <ul className="text-[#2B7575] list-disc list-inside leading-relaxed text-xs sm:text-sm font-normal">
                <li>Research & Ideation</li>
                <li>Design & Prototype</li>
                <li>Testing</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
            {list.map((step, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="flex flex-col items-center relative">
                  <span className="w-6 h-6 bg-[#FA798D] rounded-full mb-2"></span>
                  {i !== 3 && (
                    <div className="h-[1px] w-full border-dashed border-t-2 border-[#FC6B81] absolute top-2 left-[50%] translate-x-[12px] z-[-1] w-[150%] sm:w-[120%] hidden lg:block"></div>
                  )}
                </div>
                <h4 className="text-[#F8889A] text-lg sm:text-xl font-semibold mt-3">
                  {step.title}
                </h4>
                <p className="text-[#2B7575] text-sm sm:text-base mt-1 max-w-[250px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[71.5rem] mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-3 items-start">
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-2">
              Design Timeline
            </h2>
            <span className="text-[#2B7575] text-base sm:text-lg font-normal">
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
        <div className="w-full max-w-[71.5rem] mx-auto px-4 sm:px-6">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {dataList.map((section, index) => (
              <div key={index}>
                <div className="bg-[#CBEBEB] text-[#52B7B7] text-sm sm:text-base px-3 sm:px-4 py-2 rounded-md font-semibold mb-3 sm:mb-4">
                  {section.title}
                </div>
                <ul className="text-[#2B7575] list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm font-normal">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mx-auto px-4 sm:px-6 mt-4">
          <div className="relative aspect-[3/1] w-full overflow-hidden">
            <div className="relative z-10 flex flex-col gap-2 items-center">
              <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-2 mb-4">
                My Role
              </h2>
              <span className="w-full max-w-[47rem] px-4 text-[#377D7D] text-sm sm:text-base font-normal text-center">
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
          <div className="w-full max-w-[80rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-15 text-center px-4 sm:px-6">
            {roleList.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[25rem] mx-auto flex flex-col items-center gap-3"
              >
                <div className="relative aspect-[1/1] w-[2rem] overflow-hidden">
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-[#52B7B7] font-semibold text-lg sm:text-xl lg:text-2xl">
                  {item.title}
                </h4>
                <p className="text-[#2B7575] text-sm sm:text-base leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[71.5rem] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 gap-6 lg:gap-0">
            <div>
              <h3 className="text-[#FC6B81] text-lg sm:text-xl lg:text-[2rem] font-normal flex items-center gap-2">
                <span className="w-6 sm:w-8" role="img" aria-label="pin">
                  📍
                </span>{" "}
                Preparation
              </h3>
              <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[4rem] font-bold mt-2">
                UX Audit
              </h2>
            </div>
            <div>
              <h4 className="text-[#F98194] text-sm sm:text-base font-black mb-2">
                Design Flow
              </h4>
              <ul className="text-[#2B7575] list-disc list-inside leading-relaxed text-xs sm:text-sm font-normal">
                <li>Heat Map Testing</li>
                <li>Usability Testing</li>
                <li>Scenario Testing</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-1">
              <div className="relative">
                <Image
                  src="/images/projects/EF-6.webp"
                  alt="image"
                  width={668}
                  height={985}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/projects/EF-7.webp"
                  alt="image"
                  width={668}
                  height={1094}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full lg:w-[38%] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {notes.map((text, i) => (
                <div
                  key={i}
                  className="bg-[#FFD966] w-full aspect-square max-w-[12rem] mx-auto text-[#222222] text-xs sm:text-sm lg:text-base font-normal rounded-sm p-2 sm:p-3 shadow-md flex items-center justify-center"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full max-w-[71.5rem] mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
          <div className="mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-15">
            <div className="flex flex-col justify-between items-start gap-6">
              <div className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
                <div>
                  <h4 className="text-[#F690A1] text-lg sm:text-xl lg:text-[2rem] font-normal flex items-center gap-2">
                    <span className="w-6 sm:w-8" role="img" aria-label="pin">
                      📍
                    </span>{" "}
                    Preparation
                  </h4>
                  <h1 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[4rem] font-bold mt-1 uppercase">
                    USER RESEARCH
                  </h1>
                </div>
                <div>
                  <h4 className="text-[#F88598] text-sm sm:text-base font-bold mb-2">
                    Research Plan
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                    <ul className="list-disc list-inside text-[#2B7575] font-normal text-xs sm:text-sm space-y-1 sm:space-y-2">
                      <li>Survey</li>
                      <li>Interview</li>
                      <li>Personas</li>
                    </ul>
                    <ul className="list-disc list-inside text-[#2B7575] font-normal text-xs sm:text-sm space-y-1 sm:space-y-2">
                      <li>Empathy Map</li>
                      <li>User Journey</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-[#2B7575] text-base sm:text-lg lg:text-xl font-normal mt-4 leading-relaxed">
                User research is a process to find out the user point of view,
                their frustrations and their struggle to get their
                understanding. I have two used methods which contributed hugely
                in addition to my own findings
              </p>
            </div>
            <div>
              <h3 className="flex items-center justify-start gap-2.5 text-[#F88598] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                <div className="bg-[#F88598] w-2 sm:w-2.5 h-8 sm:h-11"></div>SURVEY
              </h3>
              <p className="w-full max-w-[61.5rem] text-[#2B7575] text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
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
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative">
                <Image
                  src="/images/projects/EFS-1.png"
                  alt="image"
                  width={566}
                  height={370}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/projects/EFS-2.png"
                  alt="image"
                  width={566}
                  height={370}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/projects/EFS-3.png"
                  alt="image"
                  width={566}
                  height={370}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/projects/EFS-4.png"
                  alt="image"
                  width={566}
                  height={370}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[71.5rem] mx-auto px-4 sm:px-6 mt-5">
          <div className="mx-auto flex flex-col gap-8 sm:gap-12">
            <div>
              <h3 className="flex items-center justify-start gap-2.5 text-[#F88598] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                <div className="bg-[#F88598] w-2 sm:w-2.5 h-8 sm:h-11 uppercase"></div>
                INTERVIEW
              </h3>
              <p className="w-full max-w-[61.5rem] text-[#2B7575] text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
                From the survey that I have done, I did filtering, and got 2
                people for direct interview. I did online interviews using Zoom
                and invited them at different times.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {interviewCards.map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#CBEBEB] px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-14 w-full max-w-[35.5rem] mx-auto h-auto min-h-[18rem] sm:min-h-[20rem] lg:h-[23rem] flex flex-col justify-end"
                >
                  <div className="absolute top-4 sm:top-6 right-6 sm:right-9 text-[#E9F6F6] text-[6rem] sm:text-[8rem] lg:text-[12rem] leading-none font-serif select-none">
                    &rdquo;
                  </div>
                  <div className="mb-4 sm:mb-7">
                    <h4 className="text-[#52B7B7] font-bold text-base sm:text-lg mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[#F88598] text-xs sm:text-sm font-normal">
                      {item.role}
                    </p>
                  </div>
                  <p className="text-[#377D7D] text-sm sm:text-base lg:text-lg font-normal leading-6 sm:leading-8">
                    {item.feedback}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mx-auto px-4 sm:px-6 mt-4">
          <div
            style={{
              background: "#E9F6F6",
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: "50% 100%",
              borderBottomRightRadius: "50% 100%",
              boxShadow: "0 35px 44px 0 rgba(30, 66, 66, 0.05)",
            }}
            className="relative w-full overflow-hidden bg-[#E9F6F7]"
          >
            <div className="relative flex flex-col gap-2 items-center pt-12 sm:pt-16 pb-16 sm:pb-24">
              <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                User Persona
              </h2>
              <p className="text-[#377D7D] text-sm sm:text-base font-normal text-center w-full max-w-[47rem] px-4">
                It embodies the characteristics, goals, motivations, and
                behaviors of real users, serving as a reference point for design
                and decision-making processes in UX/UI development
              </p>
            </div>
          </div>

          <div className="max-w-[75rem] mx-auto mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start px-4 sm:px-6">
            <div className="mt-6 sm:mt-12">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="relative mx-auto sm:mx-0 flex-shrink-0">
                  <Image
                    src="/images/projects/EF-8.png"
                    alt="image"
                    width={172}
                    height={172}
                    className="object-contain w-32 h-32 sm:w-[172px] sm:h-[172px]"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-[#52B7B7] text-xl sm:text-2xl font-bold mb-1">
                    Rachna Rajora
                  </h3>
                  <i className="bg-[#CBEBEB] text-[#377D7D] px-4 sm:px-6 rounded-sm text-xs sm:text-sm font-semibold">
                    "Explorer"
                  </i>
                  <ul className="text-[#377D7D] text-xs sm:text-[10px] font-medium list-disc list-inside mt-4 sm:mt-5 mb-4 space-y-1 sm:space-y-2">
                    <li>Female</li>
                    <li>Age: 32 Years</li>
                    <li>Housewife</li>
                    <li>Bangalore</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#BBE5E5] w-full h-0.5 leading-relaxed mt-6 sm:mt-8 mb-2"></div>
              <h4 className="text-[#F88598] font-bold text-base sm:text-lg">Bio</h4>
              <p className="w-full max-w-[42rem] text-[#377D7D] font-normal text-justify text-sm sm:text-base lg:text-lg mt-2 leading-relaxed">
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
            <div className="relative mx-auto lg:ml-10 xl:ml-20">
              <Image
                src="/images/projects/EF-9.png"
                alt="image"
                width={545}
                height={608}
                className="object-contain w-full max-w-[400px] lg:max-w-[545px] h-auto"
              />
            </div>
          </div>
          <div className="max-w-[75rem] mx-auto mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left px-4 sm:px-6">
            {personaCards.map((card, i) => (
              <div
                key={i}
                className="bg-[#CBEBEB] mb-3 p-4 sm:p-6 lg:p-8 rounded-md shadow-sm flex flex-col gap-2"
              >
                <h4 className="text-[#377D7D] font-bold text-base sm:text-lg mb-2 sm:mb-3">
                  {card.title}
                </h4>
                <ul className="text-[#377D7D] ml-2 text-xs sm:text-sm font-medium list-disc list-inside space-y-1 sm:space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mx-auto">
          <div className="relative overflow-hidden">
            <div className="relative top-[6rem] sm:top-[8rem] lg:top-[10rem] flex flex-col gap-2 items-center px-4 sm:px-6">
              <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4">
                Empathy Map
              </h2>
              <span className="w-full max-w-[47rem] text-[#377D7D] text-sm sm:text-base font-normal text-center">
                An empathy map is a collaborative visualization used to
                articulate what we know about a particular type of user. It
                helps to synthesize research data to bit assist to understand
                how people make decisions.
              </span>
            </div>
            <Image
              src="/images/projects/EF-10.webp"
              alt="image"
              width={1440}
              height={1760}
              className="object-contain w-full"
            />
          </div>
          <div className="w-full max-w-[72rem] mx-auto mt-8 px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#CBEBEB] flex flex-col justify-center w-full max-w-[36rem] mx-auto h-auto min-h-[20rem] sm:min-h-[22rem] lg:h-[25rem] p-6 sm:p-8 lg:p-10 relative">
                <div className="absolute top-2 right-6 sm:right-9 text-[#377D7D] text-[6rem] sm:text-[8rem] lg:text-[12rem] leading-none font-serif select-none">
                  &rdquo;
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F690A1] mb-4 text-center">
                  Gain
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Enhanced Accessibility of Help and Support
                  </li>
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Favourites and Wish List Feature
                  </li>
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Simplified Sign-Up/Sign-In Process
                  </li>
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Comprehensive and Sequential Product Imagery
                  </li>
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Estimated Delivery Time
                  </li>
                </ul>
              </div>
              <div className="bg-[#CBEBEB] flex flex-col justify-center w-full max-w-[36rem] mx-auto h-auto min-h-[20rem] sm:min-h-[22rem] lg:h-[25rem] p-6 sm:p-8 lg:p-10 relative">
                <div className="absolute top-2 right-6 sm:right-9 text-[#377D7D] text-[6rem] sm:text-[8rem] lg:text-[12rem] leading-none font-serif select-none">
                  &rdquo;
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F690A1] mb-4 text-center">
                  Pain
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Irrelevant Filter Options
                  </li>
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Misplaced Content in Product Information
                  </li>
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Inclusion of Product-Based FAQs
                  </li>
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Product Texture Details
                  </li>
                  <li className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium">
                    <span className="mr-2">•</span>
                    Age Group Specifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* User Journey Map Section */}
        <div className="w-full mx-auto mt-12 sm:mt-16 px-4 sm:px-6">
          <div className="max-w-[75rem] mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12 lg:mb-[3.185rem] gap-6 lg:gap-0">
              <div>
                <h3 className="text-[#F88598] text-lg sm:text-xl lg:text-[2rem] font-normal flex items-center gap-2 mb-2">
                  <span>
                    <Image
                      src="/images/EF.png"
                      alt="User Journey Map - Complete journey phases with touchpoints, doing, opportunities and needs sections"
                      width={32}
                      height={32}
                      className="w-6 sm:w-8 h-6 sm:h-8 object-contain"
                    />
                  </span>
                  Define
                </h3>
                <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[4rem] font-bold">
                  USER JOURNEY MAP
                </h2>
              </div>
              <div className="w-full lg:w-[10.68rem] mt-0 lg:mt-8">
                <h4 className="text-[#F88598] text-sm sm:text-base font-bold mb-2">
                  Point take away
                </h4>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <ul className="text-[#2B7575] text-xs sm:text-sm font-normal space-y-1">
                    <li>• Entice</li>
                    <li>• Enter</li>
                    <li>• Engage</li>
                  </ul>
                  <ul className="text-[#2B7575] text-xs sm:text-sm font-normal space-y-1">
                    <li>• Exit</li>
                    <li>• Extend</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Journey Map Container */}
            <div className="  overflow-hidden">
              {/* Main Journey Map Image */}
              <div className="relative w-full">
                <Image
                  src="/images/earlyfoods1.webp"
                  alt="User Journey Map - Complete journey phases with touchpoints, doing, opportunities and needs sections"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Summary Section Image */}
              <div className="relative w-full mt-[3.1rem] mb-[2.875rem]">
                <Image
                  src="/images/earlyfoods2.webp"
                  alt="User Journey Map Summary - Satisfaction metrics and total respondent data"
                  width={1200}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Extensive Research Section */}
        <div className="w-full mx-auto mt-12 sm:mt-16 bg-[#E8F4F4]">
          <div className="mx-auto px-4 sm:px-6">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 gap-6 lg:gap-0">
              <div>
                <h3 className="text-[#F690A1] text-lg sm:text-xl lg:text-[2rem] font-normal flex items-center gap-2 mb-2">
                  <span className="w-6 sm:w-8" role="img" aria-label="pin">
                    📍
                  </span>
                  Define
                </h3>
                <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[4rem] font-bold">
                  Extensive Research
                </h2>
              </div>
              <div className="w-full lg:w-[22.31rem] mt-0 lg:mt-8">
                <h4 className="text-[#F690A1] text-left text-sm sm:text-base font-bold mb-2">
                  Research Plan
                </h4>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <ul className="text-[#2B7575] text-xs sm:text-sm font-normal space-y-1">
                    <li>• Methodology</li>
                    <li>• Competitor Research</li>
                    <li>• Extensive Survey</li>
                  </ul>
                  <ul className="text-[#2B7575] text-xs sm:text-sm font-normal space-y-1">
                    <li>• Behaviour Psychology</li>
                    <li>• Gaps & Fixes</li>
                    <li>• Backlogs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="mb-6 sm:mb-8 w-full max-w-[71.5rem] mx-auto">
              <h3 className="text-[#52B7B7] text-xl sm:text-2xl lg:text-[2rem] font-bold mb-4">
                Introduction
              </h3>
              <p className="text-[#2B7575] font-medium text-sm sm:text-base leading-relaxed mb-4">
                This research uses the{" "}
                <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">
                  Stimulus-Organism-Response (S-O-R)
                </span>{" "}
                paradigm to understand online consumer behaviour, particularly
                in the context of baby foods e-Stores, with the intention to
                explore the effect of perceived value as a mediator.
              </p>
              <p className="text-[#2B7575] font-medium text-sm sm:text-base leading-relaxed mb-4">
                <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">
                  Stimulus
                </span>{" "}
                in this context is the Baby Food E-Store image for ages 0-3. The
                research uses four dimensions of the image:{" "}
                <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">
                  e-store design, order fulfilment, communication services, and
                  security and confidentiality.
                </span>{" "}
                These parameters are chosen to reflect consumers' perception of
                the online store's functionality.
              </p>
              <p className="text-[#2B7575] font-medium text-sm sm:text-base leading-relaxed mb-4">
                <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">
                  The organism
                </span>{" "}
                in this context is{" "}
                <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">
                  the Perceived Value
                </span>
                , seen as a comparison of the benefits received versus the cost
                paid during the buying process. This extends beyond simply the
                income-cost comparison, it also incorporates consumers'
                expectations and feelings towards a specific product or service.
                The research adopts Hallem and Barth's division of consumers'
                perceived value into emotional and functional values.
              </p>
              <p className="text-[#2B7575] font-medium text-sm sm:text-base leading-relaxed mb-6">
                <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">
                  Response
                </span>{" "}
                refers to{" "}
                <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">
                  consumers' purchase intention
                </span>
                , which will be measured against the baby food e-store image and
                the perceived value derived from it. The S-O-R model aims to
                provide insights into what features can genuinely capture
                consumers' intentions, satisfy their needs, and increase their
                online consumer behaviours, particularly in the continuously
                evolving online market.
              </p>
            </div>

            {/* Baby Food E-Store Image Section */}
            <div className="bg-[#C8E6E6] rounded-3xl p-6 mb-20 text-center">
              <h3 className="text-[#52B7B7] text-xl font-semibold">
                Baby Food E-Store Image
              </h3>
            </div>

            <div className="w-[60.5rem] mx-auto  flex flex-row justify-between">
              <div className="w-[8.75rem] h-[4.125rem] bg-[#CBEBEB] rounded-3xl flex items-center justify-center mb-11 mx-auto">
                <span className="text-[#52B7B7] text-2xl font-bold">S</span>
              </div>
              <div className="w-[8.75rem] h-[4.125rem] bg-[#CBEBEB] rounded-3xl flex items-center justify-center mb-11 mx-auto">
                <span className="text-[#52B7B7] text-2xl font-bold">O</span>
              </div>
              <div className="w-[8.75rem] h-[4.125rem] bg-[#CBEBEB] rounded-3xl flex items-center justify-center mb-11 mx-auto">
                <span className="text-[#52B7B7] text-2xl font-bold">R</span>
              </div>
            </div>
            {/* S-O-R Model Diagram */}
            <div className=" w-[60.5rem] mx-auto  mb-8">
              <div className="flex justify-center items-center ">
                {/* S Section */}
                <div className="">
                  <div className="space-y-5">
                    <div className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-8 pr-16 py-5 rounded-3xl  border-l-4 border-[#F88598]">
                      <p className="  text-sm  w-[9.06rem] font-semibold">
                        E-Store Design
                      </p>
                    </div>
                    <div className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-9 py-5 rounded-3xl  border-l-4 border-[#F88598]">
                      <span className="text-sm  w-[9.06rem] font-semibold">
                        Order Fulfilment
                      </span>
                    </div>
                    <div className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-9 py-5 rounded-3xl  border-l-4 border-[#F88598]">
                      <span className="text-sm  w-[9.06rem] font-semibold">
                        Communication
                      </span>
                    </div>
                    <div className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-9 py-5 rounded-3xl  border-l-4 border-[#F88598]">
                      <span className="text-sm  w-[9.06rem] font-semibold">
                        Security
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full ">
                    <Image
                      src="/images/EF-ER1.png"
                      alt="arrow"
                      width={133}
                      height={288}
                      className=" object-contain"
                    />
                  </div>
                </div>

                {/* O Section */}
                <div className="">
                  <div className="space-y-5">
                    <div className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-9 py-5 rounded-3xl  border-l-4 border-[#F88598]">
                      <span className="text-sm  w-[9.06rem] font-semibold">
                        Emotional Value
                      </span>
                    </div>
                    <div className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-9 py-5 rounded-3xl  border-l-4 border-[#F88598]">
                      <span className="text-sm  w-[9.06rem] font-semibold">
                        Functional Value
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow 2 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full ">
                    <Image
                      src="/images/EF-ER2.png"
                      alt="arrow"
                      width={133}
                      height={288}
                      className=" object-contain"
                    />
                  </div>
                </div>

                {/* R Section */}
                <div className="">
                  <div>
                    <div className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-9 py-5 rounded-3xl  border-l-4 border-[#F88598]">
                      <span className="text-sm  w-[9.06rem] font-semibold">
                        Purchase Intention
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagram Description */}
            <p className=" text-justify mb-12 text-base text-[#2B7575] mt-10 font-medium">
              This research focuses on the impact of different aspects of
              e-commerce platforms on the perceived value of the customer and
              their subsequent purchase intention. The hypotheses can be
              summarized as follows:
            </p>
            {/* Detailed Explanations */}
            <div className="space-y-12">
              {/* E-store Design */}
              <div className="   flex flex-row gap-9">
                <h4 className="text-[#2B7575] w-[13.75rem] text-2xl font-semibold mb-3">
                  E-store Design:
                </h4>
                <p className="text-[#2B7575] text-justify w-[55.43rem] font-medium text-base leading-relaxed">
                  The design of an online shop, including elements like page
                  layout, art design, search functions, and convenience,
                  significantly affects the customers' perceived emotional and
                  functional value. Poorly designed stores can lead to customer
                  rejection.
                </p>
              </div>

              {/* Order Fulfillment */}
              <div className=" flex flex-row gap-9">
                <h4 className="text-[#2B7575] w-[13.75rem] text-2xl font-semibold mb-3">
                  Order Fulfillment:
                </h4>
                <p className="text-[#2B7575] text-justify w-[55.43rem] font-medium text-base leading-relaxed">
                  The consistency of an e-commerce platform in fulfilling its
                  promises to customers impacts the perceived functional and
                  emotional value. Inconsistencies can lead to a decrease in
                  perceived value and customer trust.
                </p>
              </div>

              {/* Communication Service */}
              <div className=" flex flex-row gap-9">
                <h4 className="text-[#2B7575] w-[13.75rem] text-2xl font-semibold mb-3">
                  Communication Service:
                </h4>
                <p className="text-[#2B7575] text-justify w-[55.43rem] font-medium text-base leading-relaxed">
                  The quality of the customer service, including timely and
                  professional responses, affects the perceived emotional and
                  functional value. Frequent communication and exchanges between
                  buyers and sellers can increase trust and, therefore,
                  perceived value.
                </p>
              </div>

              {/* Security */}
              <div className=" flex flex-row gap-9">
                <h4 className="text-[#2B7575] w-[13.75rem] text-2xl font-semibold mb-3">
                  Security:
                </h4>
                <p className="text-[#2B7575] text-justify w-[55.43rem] font-medium text-base leading-relaxed">
                  The image of security and confidentiality is crucial for easy
                  and safe online shopping. Concerns about personal data leaks,
                  unsafe payment methods, and unclear commissions can impact the
                  perceived emotional and functional value.
                </p>
              </div>

              {/* Perceived Value and Purchase Intention */}
              <div className="">
                <h4 className="text-[#2B7575] text-2xl font-bold ">
                  Perceived Value and Purchase Intention:
                </h4>
                <p className="text-[#2B7575] text-base font-medium leading-relaxed">
                  A positive perceived value, both emotional and functional, can
                  significantly drive consumers' purchasing behavior. Higher
                  perceived benefits compared to costs result in stronger
                  purchase intention.
                </p>
              </div>

              {/* Mediating Effect */}
              <div className="">
                <h4 className="text-[#2B7575] text-2xl font-bold">
                  Mediating Effect of Perceived Value:
                </h4>
                <p className="text-[#2B7575] text-base font-medium leading-relaxed">
                  The image of the online store can impact customers' perceived
                  value, which in turn influences their purchase intentions.
                  Both emotional and functional value play a mediating role
                  between the online store image and customer purchase
                  intentions.
                </p>
              </div>

              {/* Context Summary */}
              <div className="">
                <p className="text-[#2B7575] text-base font-medium leading-relaxed">
                  In the context of a baby food online store, these hypotheses
                  suggest that factors like design, order fulfillment,
                  communication service, and security strongly influence the
                  customer's overall experience and their decision to make a
                  purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Competitor Analysis Section */}
        <div className="w-full mx-auto mt-12 sm:mt-16 lg:mt-20 bg-[#E9F6F6]">
          <div className="mx-auto py-8 sm:py-10 lg:py-12">
            {/* Header Section */}
            <div
              style={{
                background: "#E9F6F6",
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: "50% 100%",
                borderBottomRightRadius: "50% 100%",
                boxShadow: "0 35px 44px 0 rgba(30, 66, 66, 0.05)",
              }}
              className="relative w-full overflow-hidden bg-[#E9F6F6] mb-8 sm:mb-10 lg:mb-12"
            >
              <div className="relative flex flex-col gap-2 items-center pt-12 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6">
                <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center">
                  Competitor Analysis
                </h2>
                <p className="text-[#377D7D] leading-relaxed text-sm sm:text-base font-normal text-center w-full max-w-[47rem] px-4">
                  To evaluate the features, usability, and user experience of
                  competitors' products or services. This analysis helps
                  identify strengths, weaknesses, opportunities, and threats in
                  the market, enabling designers and companies to uncover gaps,
                  differentiate their offerings, and enhance user satisfaction.
                </p>
              </div>
            </div>

            {/* Competitors Container */}
            <div className="space-y-6 sm:space-y-7 w-full max-w-[45.81rem] mx-auto px-4 sm:px-6 lg:px-0">
              {/* Manna Foods */}
              <div className="">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                  {/* Logo Section */}
                  <div className="flex-shrink-0 order-1 sm:order-1">
                    <div className="relative w-16 sm:w-20 lg:w-3xs aspect-square mr-0 sm:mr-7 mx-auto">
                      <Image
                        src="/images/EF(manna).svg"
                        alt="Maana"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 w-full sm:w-[28.06rem] order-2 sm:order-2">
                    <h3 className="text-[#2B7575] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                      Manna Foods
                    </h3>

                    {/* Unique Value Proposition */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Unique value proposition
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        Manna Foods is offering healthy, organic, and GMO-free
                        baby food products.
                      </p>
                    </div>

                    {/* Advantages */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Advantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        The advantages include its continued focus on producing
                        natural, organic products as well as its established
                        reputation in the industry.
                      </p>
                    </div>

                    {/* Disadvantages */}
                    <div>
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Disadvantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        The disadvantage includes the relatively high cost of
                        its products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* My Toddler */}
              <div className="">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                  {/* Content Section */}
                  <div className="flex-1 w-full order-2 sm:order-1">
                    <h3 className="text-[#2B7575] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                      My Toddler
                    </h3>

                    {/* Unique Value Proposition */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Unique value proposition
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        My Toddler, the unique value proposition is providing
                        affordable and convenient baby food and meal options.
                      </p>
                    </div>

                    {/* Advantages */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Advantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        The advantages include its competitive pricing and
                        easy-to-access platform, as well as its selection of
                        healthy food items.
                      </p>
                    </div>

                    {/* Disadvantages */}
                    <div>
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Disadvantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        The disadvantage includes its limited range of product
                        offerings.
                      </p>
                    </div>
                  </div>

                  {/* Logo Section */}
                  <div className="flex-shrink-0 order-1 sm:order-2">
                    <div className="relative w-16 sm:w-20 lg:w-3xs aspect-square ml-0 sm:ml-7 mx-auto">
                      <Image
                        src="/images/EF2.png"
                        alt="Web Application Development - Developer working with web applications"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* TOTS AND MOMS */}
              <div className="">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                  {/* Logo Section */}
                  <div className="flex-shrink-0 order-1 sm:order-1">
                    <div className="relative w-16 sm:w-20 lg:w-3xs aspect-square mr-0 sm:mr-7 mx-auto">
                      <Image
                        src="/images/EF3.png"
                        alt="Maana"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 w-full sm:w-[28.06rem] order-2 sm:order-2">
                    <h3 className="text-[#2B7575] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                      Tots and Moms
                    </h3>

                    {/* Unique Value Proposition */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Unique value proposition
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        Tots and Moms, the unique value proposition is
                        highlighting health and nutrition in its product
                        offerings.
                      </p>
                    </div>

                    {/* Advantages */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Advantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        The advantages include its focus on healthy and natural
                        ingredients, as well as its commitment to customer
                        satisfaction.
                      </p>
                    </div>

                    {/* Disadvantages */}
                    <div>
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Disadvantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        The disadvantage includes its lack of a direct to
                        consumer e-commerce platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* My TIMIOS */}
              <div className="">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                  {/* Content Section */}
                  <div className="flex-1 w-full order-2 sm:order-1">
                    <h3 className="text-[#2B7575] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                      My Timios
                    </h3>

                    {/* Unique Value Proposition */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Unique value proposition
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        The unique value proposition is providing a personalized
                        shopping cart based on a customer's individual needs.
                      </p>
                    </div>

                    {/* Advantages */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Advantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        The advantages include its personalized shopping
                        experience and its range of organic, whole food options.
                      </p>
                    </div>

                    {/* Disadvantages */}
                    <div>
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Disadvantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        The disadvantage includes the high price of its
                        products.
                      </p>
                    </div>
                  </div>

                  {/* Logo Section */}
                  <div className="flex-shrink-0 order-1 sm:order-2">
                    <div className="relative w-16 sm:w-20 lg:w-3xs aspect-square ml-0 sm:ml-7 mx-auto">
                      <Image
                        src="/images/EF4.png"
                        alt="Web Application Development - Developer working with web applications"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SLURP FARM */}
              <div className="">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                  {/* Logo Section */}
                  <div className="flex-shrink-0 order-1 sm:order-1">
                    <div className="relative w-16 sm:w-20 lg:w-3xs aspect-square mr-0 sm:mr-7 mx-auto">
                      <Image
                        src="/images/EF5.png"
                        alt="Maana"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 w-full sm:w-[28.06rem] order-2 sm:order-2">
                    <h3 className="text-[#2B7575] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                      Slurrp Farm
                    </h3>

                    {/* Unique Value Proposition */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Unique value proposition
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        Slurp Farm offers organic, preservative-free, and
                        healthy food products for children, focusing on the
                        provision of essential nutrients.
                      </p>
                    </div>

                    {/* Advantages */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Advantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        Transparent Branding: Their focus on transparency about
                        their ingredients builds trust with customers.
                      </p>
                    </div>

                    {/* Disadvantages */}
                    <div>
                      <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">
                        Disadvantages
                      </h4>
                      <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">
                        Perception of Taste: While Slurp Farm works hard to make
                        their products tasty, some children (or their parents)
                        may prefer the taste of less healthy, but more
                        traditionally flavorful options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Market Research Section */}
        <div className="w-full mx-auto mt- px-6 bg-[#E9F6F6] relative overflow-hidden">
          <div className=" mx-auto pt-16">
            {/* Header Section */}
            <div
              style={{
                background: "#E9F6F6",
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: "50% 100%",
                borderBottomRightRadius: "50% 100%",
                boxShadow: "0 35px 44px 0 rgba(30, 66, 66, 0.05)",
              }}
              className="relative w-full overflow-hidden bg-[#E9F6F6] mb-12"
            >
              <div className="relative flex flex-col gap-2 items-center pt- pb-24">
                <h2 className="text-[#52B7B7] text-5xl font-extrabold">
                  Market Research
                </h2>
                <p className="text-[#377D7D] leading-relaxed text-base font-normal text-center w-[47rem]">
                  Market research involves gathering, analyzing, and
                  interpreting information about a market, including a product's
                  or service's nature, characteristics, and potential customer
                  base.
                </p>
              </div>
            </div>

            <div className="bg-[#E9F6F6] p-10">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center">
                {[column1, column2, column3].map((col, i) => (
                  <div key={i} className="flex flex-col gap-16">
                    {col.map((text, j) => (
                      <div
                        key={j}
                        className="bg-[#FFD966] w-[15rem] p-5 text-base font-normal rounded-sm shadow-md"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Section */}
            <div className="w-[60.5rem] mx-auto mb-[3.75rem]">
              <p className="text-[#2B7575] text-[1.25rem] font-medium leading-relaxed text-justify">
                These findings indicate that there is a strong market for
                organic and healthier pre-prepared and ready-to-eat meals and
                snacks among parents and new mothers. It is likely that such a
                product would be successful in the market if it is backed by
                trusted sources, offers convenience and reduces stress (such as
                reductions in cost), and offers
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto mt- mb-[7.5rem] px-6 bg-[#E9F6F6] relative overflow-hidden">
          {/* Header */}
          <div
            style={{
              background: "#E9F6F6",
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: "50% 100%",
              borderBottomRightRadius: "50% 100%",
              boxShadow: "0 35px 44px 0 rgba(30, 66, 66, 0.05)",
            }}
            className="relative w-full overflow-hidden bg-[#E9F6F6] mb-12"
          >
            <div className="relative flex flex-col gap-2 items-center pt- pb-24">
              <h2 className="text-[#52B7B7] text-5xl font-extrabold">
                The Problems
              </h2>
              <p className="text-[#377D7D] leading-relaxed text-base font-normal text-center w-[47rem]">
                After the extensive research, surveys, and interviews I was able
                to find out these problems in the current user experience and
                visual elements, below mentioned are only the high priority
                problems.
              </p>
            </div>
          </div>

          {/* Full Rows (3-column grid) */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {fullRows.map((item, i) => (
              <div
                key={i}
                className="bg-[#FFD4DA] max-w-[22.375rem] p-4.5 rounded-lg font-bold text-xl text-[#5F5456] shadow"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Last row centered (only if not a multiple of 3) */}
          {lastRow.length > 0 && (
            <div className="max-w-6xl mx-auto flex justify-center gap-6 flex-wrap">
              {lastRow.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FFD4DA] max-w-[22.375rem] p-4.5 rounded-lg font-bold text-xl text-[#5F5456] shadow"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-full mx-auto  mb-[7.5rem] px-6 bg-[#E9F6F6] relative overflow-hidden">
          {/* Header */}
          <div
            style={{
              background: "#E9F6F6",
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: "50% 100%",
              borderBottomRightRadius: "50% 100%",
              boxShadow: "0 35px 44px 0 rgba(30, 66, 66, 0.05)",
            }}
            className="relative w-full overflow-hidden bg-[#E9F6F6] mb-12"
          >
            <div className="relative flex flex-col gap-2 items-center pt- pb-24">
              <h2 className="text-[#52B7B7] text-5xl font-extrabold">
                The Solutions
              </h2>
              <p className="text-[#377D7D] leading-relaxed text-base font-normal text-center w-[47rem]">
                Based on the problems we found out below are the solutions that
                we proposed client in order to enhance the overall User
                experience and enhance the joy of shopping from the Early Foods.
              </p>
            </div>
          </div>

          {/* Simple Grid Layout */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {solutions.map((item, i) => (
              <div
                key={i}
                className="bg-[#CBEBEB] max-w-[22.375rem] p-4.5 rounded-lg font-bold text-xl text-[#2B7575] shadow"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#eaf6f6] w-full mx-auto  ">
          {/* Header Section */}
          <div className="flex justify-between items-start w-[71.75rem] mx-auto">
            <div className="">
              <h3 className="text-[#F690A1] text-[2rem] font-normal flex items-center gap-2 mb-2">
                <span className="w-8" role="img" aria-label="pin">
                  📍
                </span>
                UI Design
              </h3>
              <h2 className="text-[#52B7B7] text-[4rem] font-bold">
                Visual Design
              </h2>
            </div>
            <div className="w-[22.31rem] pl-[10rem] mt-8">
              <h4 className="text-[#F690A1] text-left text-base font-bold mb-2">
                Point take away
              </h4>
              <div className="flex gap-8">
                <ul className="text-[#2B7575] text-sm font-normal space-y-1">
                  <li>• UI Screens</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Top laptop screen with annotations */}
          <div className="flex justify-center my-[4.5rem] ">
            <Image
              src="/images/EF-laptop1.webp" // Replace with actual path
              alt="Main UI with annotations"
              width={1147}
              height={506}
              className="object-contain"
            />
          </div>

          {/* Middle row: 2 laptop images */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 justify-items-center max-w-6xl mx-auto mb-[4.5rem]">
            <Image
              src="/images/EF-laptop2.webp"
              alt="Product detail UI"
              width={559}
              height={400}
              className="object-contain"
            />
            <Image
              src="/images/EF-laptop3.webp"
              alt="Category UI"
              width={559}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Bottom row: Before section */}
          <div className="text-center mb-6">
            <h3 className="text-5xl font-bold text-[#52B7B7]">Before</h3>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-7">
            <Image
              src="/images/EF-Laptop4.webp"
              alt="Old homepage"
              width={559}
              height={400}
              className="object-contain"
            />
            <Image
              src="/images/EF-Laptop5.webp"
              alt="Old product page"
              width={559}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-[#eaf6f6] py-12 px-4 ">
          {/* Header */}
          <div className="mb-10  relative">
            <p className="text-[#F690A1] font-normal text-[2rem]">
              📍 UI Design
            </p>
            <h1 className="text-[4rem] font-bold text-[#52B7B7]">
              Style Guide
            </h1>
            <p className="absolute right-0 top-0 font-normal text-[#2B7575] text-sm text-left mt-7">
              <span className="text-[#F88598] font-bold text-base">
                Point take away
              </span>{" "}
              <br />• Typography <br />• Color <br />• Iconography
            </p>
          </div>

          <div className="flex flex-row">
            {/* Side Label */}
            <div className="bg-[#F88CA2] w-10 h-86 mt-2.5 mr-12  flex items-center justify-center">
              <p className="text-white font-bold text-2xl px-2 py-[3.75rem] rotate-180 writing-vertical-lr">
                COLOR STYLE GUIDE
              </p>
            </div>

            {/* Color Tables */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Primary Main */}
              <div>
                <h3 className="text-[#3BB7AC] text-[2rem] font-medium font-noto">
                  Primary - Main
                </h3>
                <p className="text-xs font-normal text-[#F690A1] mt-2 font-noto">
                  Colors that represent EarlyFood brand, used as primary color.
                </p>
                <div className="mt-4 space-y-0.5">
                  {/* Color Card 1 */}
                  <div className="bg-white p-4  flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#FFB6C1]"></div>
                    <div className="text-sm font-normal font-noto">
                      <p className="font-medium text-base">
                        Main 01 (EF Light Pink)
                      </p>
                      <p className="text-[#666666] text-xs">
                        #FFB6C1 &nbsp; | &nbsp; EF-Light Pink/06-base
                      </p>
                    </div>
                  </div>

                  {/* Color Card 2 */}
                  <div className="bg-white p-4  flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#87CEFA]"></div>
                    <div className="text-sm font-normal font-noto">
                      <p className="font-medium text-base">
                        Main 02 (EF Sky Blue)
                      </p>
                      <p className="text-[#666666] text-xs">
                        #87CEFA &nbsp; | &nbsp; EF-Sky Blue/06-base
                      </p>
                    </div>
                  </div>

                  {/* Color Card 3 */}
                  <div className="bg-white p-4  flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#B4E2E2]"></div>
                    <div className="text-sm font-normal font-noto">
                      <p className="font-medium text-base">
                        Main 03 (EF Green)
                      </p>
                      <p className="text-[#666666] text-xs">
                        #B4E2E2 &nbsp; | &nbsp; EF-Green/06-base
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Supplementary */}
              <div>
                <h3 className="text-[#3BB7AC] text-[2rem] font-medium font-noto">
                  Primary - Supplementary
                </h3>
                <p className="text-xs font-normal text-[#F690A1] mt-2 font-noto">
                  Colors that complement the use of primary colors.
                </p>
                <div className="mt-4 space-y-0.5">
                  {/* Supplementary 01 */}
                  <div className="bg-white p-4  flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#D5C7FF]"></div>
                    <div className="text-sm font-normal font-noto">
                      <p className="font-medium text-base">
                        Supplementary 01 (Lavender Blue)
                      </p>
                      <p className="text-[#666666] text-xs">
                        #D5C7FF &nbsp; | &nbsp; Lavender Blue/06-base
                      </p>
                    </div>
                  </div>

                  {/* Supplementary 02 */}
                  <div className="bg-white p-4  flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#FFEEA2]"></div>
                    <div className="text-sm font-normal font-noto">
                      <p className="font-medium text-base">
                        Supplementary 02 (Yellow)
                      </p>
                      <p className="text-[#666666] text-xs">
                        #FFEEA2 &nbsp; | &nbsp; Yellow/06-base
                      </p>
                    </div>
                  </div>

                  {/* Supplementary 03 */}
                  <div className="bg-white p-4  flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#FFD9A0]"></div>
                    <div className="text-sm font-normal font-noto">
                      <p className="font-medium text-base">
                        Supplementary 03 (Caramel)
                      </p>
                      <p className="text-[#666666] text-xs">
                        #FFD9A0 &nbsp; | &nbsp; Caramel/06-base
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typography Section */}
          <div className="mt-12 sm:mt-16 mb-12 sm:mb-16">
            <p className="text-[#F690A1] font-bold text-lg sm:text-xl lg:text-[2rem] mb-8 sm:mb-11">
              📍 Typography
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#CBEBEB] rounded-lg">
                <div className="flex flex-row items-center py-4 sm:py-7 px-6 sm:px-12">
                  <div className="w-3 h-3 mr-4 sm:mr-7 bg-[#377D7D]"></div>
                  <div>
                    <p className="text-xs font-normal text-[#377D7D]">
                      Primary Typeface
                    </p>
                    <p className="text-lg sm:text-2xl font-bold text-[#377D7D]">
                      Fredoka One
                    </p>
                    <p className="text-xs font-normal text-[#377D7D]">
                      01 LOWER CASE | 02 REGULAR
                    </p>
                  </div>
                </div>
                <div className="text-lg sm:text-xl lg:text-[2rem] text-justify font-fredoka font-semibold text-[#377D7D] w-full max-w-[25rem] mx-auto px-6 sm:px-[5.375rem] tracking-widest leading-relaxed mb-8 sm:mb-12">
                  a b c d e f g h i j <br></br>k l m n o p q r s<br></br> t u v
                  w x y z
                </div>
              </div>
              <div className="bg-[#CBEBEB] rounded-lg">
                <div className="flex flex-row items-center py-4 sm:py-7 px-6 sm:px-12">
                  <div className="w-3 h-3 mr-4 sm:mr-7 bg-[#377D7D]"></div>
                  <div>
                    <p className="text-xs font-normal text-[#377D7D]">
                      Primary Typeface
                    </p>
                    <p className="text-lg sm:text-2xl font-bold text-[#377D7D]">
                      Noto Sans
                    </p>
                    <p className="text-xs font-normal text-[#377D7D]">
                      01 REGULAR | 02 SEMI BOLD | 03 BOLD
                    </p>
                  </div>
                </div>
                <div className="text-lg sm:text-xl lg:text-[2rem] font-noto font-semibold text-[#377D7D] w-full max-w-[25rem] mx-auto px-6 sm:px-[5.375rem] tracking-widest leading-relaxed mb-8 sm:mb-12">
                  a b c d e f g h i j <br></br>k l m n o p q r s<br></br> t u v
                  w x y z
                </div>
              </div>
            </div>
          </div>

          {/* Iconography */}
          <div className="">
            <p className="text-[#F690A1] font-bold text-lg sm:text-xl lg:text-[2rem] mb-8 sm:mb-12">
              📍 ICONOGRAPHY
            </p>
            {/* First Row - 10 Icons */}
            <div className="flex justify-center">
              <Image
                src="/images/Icons.webp" // Replace with actual path
                alt="Main UI with annotations"
                width={1168}
                height={220}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto mt-20  px-6 bg-[#E8F4F4] relative overflow-hidden">
          <div
            style={{
              background: "#E9F6F6",
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: "50% 100%",
              borderBottomRightRadius: "50% 100%",
              boxShadow: "0 35px 44px 0 rgba(30, 66, 66, 0.05)",
            }}
            className="relative w-full overflow-hidden bg-[#E9F6F6] "
          >
            <div className="relative flex flex-col gap-2 items-center  pb-24">
              <h2 className="text-[#52B7B7] text-5xl font-extrabold">
                Information Architecture
              </h2>
              <p className="text-[#377D7D] leading-relaxed text-base font-normal text-center w-[46.875rem]">
                People often use the word “Information Architecture” to mean the
                menus on website or apps, but thats not really correct. while
                menus are a part of IA. they’re really only one part of it.
                Information architecture is all about organisation of
                information in a clear and logical way. such organisation
                follows a clear purpose helping users navigate complex sets of
                information
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-[6rem] ">
            <Image
              src="/images/EF-INFO.webp" // Replace with actual path
              alt="Main UI with annotations"
              width={1147}
              height={1600}
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full mx-auto  px-6 bg-[#E9F6F6] relative overflow-hidden">
          <div
            style={{
              background: "#E9F6F6",
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: "50% 100%",
              borderBottomRightRadius: "50% 100%",
              boxShadow: "0 35px 44px 0 rgba(30, 66, 66, 0.05)",
              top: "10rem",
            }}
            className="relative w-full overflow-hidden bg-[#E9F6F6] "
          >
            <div className="relative flex flex-col gap-2 items-center pb-16 sm:pb-24">
              <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                UI Design
              </h2>
              <p className="text-[#377D7D] leading-relaxed text-sm sm:text-base font-normal text-center w-full max-w-[47rem] px-4">
                Every components layout structures, and color combinations are
                backed by strong human psychology of perceiving experiences
                quoted by sir Don Norman in the book - The design of everyday
                Things.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/UIDesgin.webp" // Replace with actual path
              alt="Main UI with annotations"
              width={1440}
              height={2000}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
