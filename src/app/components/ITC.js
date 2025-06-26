"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function ITC() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Matching the provided image */}
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            IT Consulting
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[50rem] mx-auto">
            Cultivating Innovation with Mindefy's <br></br>IT Consulting
            Services
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[61.375rem] font-normal mx-auto  mb-[2.25rem] text-justify space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              Transform your IT landscape, refine your startup concepts, and
              streamline your operations with Mindefy's IT Consulting
              Services.We understand that navigating the ever-evolving landscape
              of information technology can be both challenging and
              daunting.Mindefy is dedicated to enhancing your technical
              capabilities and refining your products for success.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative  w-full h-[30.125rem] mx-auto mb-20">
            <Image
              src="/images/WAD.webp"
              alt="Web Application Development - Developer working with web applications"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[62.75rem] mb-[3.75rem]">
        <div className=" text-[#2E0473] w-[60.25rem] mx-5 text-[2rem] font-medium mb-2.5 ">
          <p>What sets us apart</p>
        </div>
        <div className="font-normal mx-5 text-[1rem] text-justify text-[#000000]">
          <p>
            is our commitment to offering these services separately from
            development, allowing you the flexibility to choose only the
            consulting part that suits your needs.
          </p>
        </div>
      </div>

      {/* React and Angular Detailed Section */}
      <section className=" bg-white">
        <div className="max-w-[72.5rem] mx-auto ">
          {/* Header Illustration */}
          <div className=" mb-[3.75rem]">
            <div className=" mb-[3.75rem] h-[5.25rem] mx-auto text-center w-[32.81rem] font-semibold text-[1.75rem]">
              <p>Our IT Consulting Approach</p>
            </div>
            <div className="relative  w-full h-[30.125rem] mx-auto mb-[7.25rem]">
              <Image
                src="/images/ARD.webp"
                alt="MEAN MERN Stack Development - Developer working with web applications"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[62.375rem] mx-auto flex flex-col mb-[3.75rem] gap-12">
          {/* Row 1 */}
          <div className="flex  md:flex-row justify-between gap-12">
            {/* Box 1 */}
            <div className="flex gap-4  w-[29.68rem]  flex-1">
              <div className="relative w-[2.93rem] h-[5.625rem]  flex-shrink-0">
                <Image
                  src="/images/1.svg"
                  alt="1"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-2xl space-y-2.5  mt-5.75">
                  <p>Product</p>
                  <p> Refinement</p>
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed ml-[-2.85rem] text-justify">
                  Your product's success depends on its quality and
                  user-friendliness. Mindefy's experts will work with you to
                  refine your products, starting from the idea stage. This
                  comprehensive approach ensures that your products are not only
                  robust but also aligned with market demands.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex gap-4  w-[29.68rem]      flex-1">
              <div className="relative w-[4.625rem] h-[5.625rem]  flex-shrink-0">
                <Image
                  src="/images/2.svg"
                  alt="2"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-2xl space-y-2.5  mt-5.75">
                  <p>Functional </p>
                  <p> Consulting</p>
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed ml-[-5.25rem] text-justify">
                  Optimizing business processes is crucial for sustained growth.
                  Our functional consulting services analyze your current
                  operations and help you identify areas for improvement. We
                  work closely with you to streamline workflows, enhance
                  productivity, and align your business goals with your IT
                  strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex  md:flex-row justify-between gap-12">
            {/* Box 3 */}
            <div className="flex gap-4  w-[29.68rem]   flex-1">
              <div className="relative w-[4.812rem] h-[5.625rem]  flex-shrink-0">
                <Image
                  src="/images/3.svg"
                  alt="3"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-2xl space-y-2.5  mt-5.75">
                  <p>Comprehensive</p>
                  <p> Technical Insights</p>
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed ml-[-5.25rem] text-justify">
                  Mindefy's team comprises experts well-versed in the latest
                  industry trends and technological advancements. This means
                  you'll receive detailed, up-to-date technical insights that
                  help you make informed decisions about your IT infrastructure.
                  Whether you're optimizing existing systems or exploring new
                  solutions, our experts ensure you're on the right path.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="flex gap-4  w-[29.68rem]  flex-1">
              <div className="relative w-[5.3125rem] h-[5.625rem]  flex-shrink-0">
                <Image
                  src="/images/4.svg"
                  alt="4"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-2xl space-y-1.5  mt-[-.5rem]">
                  <p> User </p>
                  <p> Experience</p>
                  <p> Consulting</p>
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed ml-[-5.85rem] text-justify">
                  At Mindefy, we understand the critical role of user experience
                  (UX) in the success of any digital product. Our UI consulting
                  services focus on enhancing user experiences through intuitive
                  and visually appealing interfaces. We collaborate closely with
                  you to design interfaces that captivate users and ensure
                  smooth interactions with your applications and websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - SoliRoute */}
      <section className="py-21 bg-[#E9F1FE]">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className="flex lg:flex-row gap-20 items-center">
            {/* Left Content */}
            <div className="flex-1  space-y-6">
              {/* Logo */}
              <div className="flex items-center  mb-7.5">
                <div className="relative w-[10.125rem] h-[6.25rem]  flex-shrink-0">
                  <Image
                    src="/images/soliroute-logo.svg"
                    alt="logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6 text-[#444444] text-justify">
                <p className="leading-relaxed">
                  Our collaboration with the SoliRoute resulted in the
                  development of an application boasting an extraordinarily
                  user-friendly interface. This partnership represents a
                  concerted endeavor to enhance the user experience within the
                  application, emphasizing not just functionality, but also the
                  ease with which users can interact with it.
                </p>

                <p className="leading-relaxed">
                  Mindefy played a pivotal role in every phase of the project,
                  from initial requirements gathering and drafting user stories
                  to offering valuable user experience consultation and
                  ultimately creating the Figma designs. This comprehensive
                  involvement ensured the successful delivery of a top-notch
                  user interface that exceeded the client's requirements.
                </p>
              </div>

              {/* Read Less Link */}
              <button className="text-[#6A53E1] text-lg cursor-pointer font-medium transition-colors">
                READ LESS
              </button>

              {/* CTA Button */}
              <div className="">
                <button className="bg-[#FCDD3F] hover:bg-yellow-500 text-[#172044] font-medium w-[15.25rem] h-[4.125rem] rounded-full space-x-2 transition-colors">
                  <div className="flex flex-row justify-center gap-4 items-center">
                    <p>SOLIROUTE</p>
                    <div className="relative w-8 h-8  flex-shrink-0">
                      <Image
                        src="/images/soliroute2.svg"
                        alt="logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Application Mockups */}
            <div className="flex-1 relative h-96">
              <Image
                src="/images/Soliroute.webp"
                alt="SoliRoute application mockups showing desktop and mobile interfaces"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="  w-[58.875rem] mx-auto mt-[3.75rem] rounded-2xl bg-[#F9F9F9]">
        <p className="p-5 font-semibold text-lg text-[#444444] ">
          At Mindefy, we understand the importance of a positive user
          experience, and we're committed to delivering designs that make a
          lasting impression. Our approach, exemplified by the SoliRoute
          project, demonstrates our expertise in creating exceptional user
          experiences that drive success.
        </p>
      </div>

      <section className="mt-[3.75rem] ">
        <div className="max-w-[60.375rem] mx-auto ">
          {/* Header */}
          <div className=" mb-10">
            <h2 className=" p-2.5 text-[1.75rem] font-semibold text-[#000000] mb-6">
              The Advantages of Selecting
              <br />
              Mindefy's IT Consulting Services
            </h2>
            <p className="text-[1rem] = text-[#444444]  font-normal leading-relaxed max-w-[59.125rem] mx-auto text-justify">
              Mindefy's IT consulting services offer a holistic approach to cost
              and time savings, expert guidance, tailored solutions, a dedicated
              focus on innovation, and a commitment to collaborative long-term
              partnerships. We provide your business with a robust foundation
              for success, whether you're addressing immediate issues, planning
              for the future, or innovating to stay ahead in your industry.
              Mindefy is your trusted partner in achieving your IT and business
              goals.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="space-y-6  mx-auto w-[60.18rem]">
            {/* Cost and Time Savings */}
            <div className="flex flex-col lg:flex-row items-center bg-[#F6E0DC] rounded-2xl  py-2.5 px-3.5">
              <div className="flex-1 ">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Cost and Time Savings
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  Mindefy's approach to cost and time savings is not just about
                  addressing current challenges; it's about building a resilient
                  and efficient IT infrastructure for the long term.
                </p>
              </div>
              <div className="flex-1 relative h-64">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/ITC1.svg"
                    alt="Cost and Time Savings - People working with hourglass illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Problem-Solving Prowess */}
            <div className="flex flex-col lg:flex-row items-center  rounded-2xl py-2.5 px-3.5">
              <div className="flex-1 relative h-64">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/ITC2.svg"
                    alt="Problem-Solving Prowess - People working with gears illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Problem-Solving Prowess
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  Mindefy's consultants are skilled at identifying potential
                  bottlenecks, security vulnerabilities, and operational
                  inefficiencies before they become critical issues. By
                  proactively addressing these concerns, we save your business
                  from costly disruptions and downtime in the future. This not
                  only preserves your financial resources but also ensures that
                  your business operations remain uninterrupted.
                </p>
              </div>
            </div>

            {/* Efficient Resource Allocation */}
            <div className="flex flex-col lg:flex-row items-center bg-[#F6E0DC] rounded-2xl  py-2.5 px-3.5">
              <div className="flex-1">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Efficient Resource Allocation
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  Through our consulting services, you gain clarity on where to
                  allocate your resources most effectively. This means
                  optimizing your budget by investing in areas that have the
                  most significant impact. By strategically managing your
                  resources, you reduce waste and improve the overall
                  cost-efficiency of your IT projects.
                </p>
              </div>
              <div className="flex-1 relative h-64">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/ITC3.svg"
                    alt="Efficient Resource Allocation - People working with gears illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Strategic Decision-Making */}
            <div className="flex flex-col lg:flex-row items-center  rounded-2xl  py-2.5 px-3.5 ">
              <div className="flex-1 relative h-64">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/ITC4.svg"
                    alt="Strategic Decision-Making - People around target illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Strategic Decision-Making
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  Mindefy's consultants act as strategic partners, helping you
                  make informed decisions about your IT investments. They bring
                  insights from a wide range of industries and projects,
                  ensuring that your choices align with best practices and
                  industry trends. This strategic approach contributes to your
                  business's long-term growth and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions, Innovation Focus, and Collaborative Partnership Section */}
      <section className="mt-[3.75rem]">
        <div className="max-w-[72.5rem] mx-auto">
          {/* Tailored Solutions */}
          <div className="  p-2.5  mb-[3.75rem]">
            <div className="text-center mb-11">
              <h2 className="text-[1.75rem] font-semibold text-[#000000] mb-4">
                Tailored Solutions
              </h2>
              <p className="text-[1.5rem] font-medium text-[#000000] leading-relaxed max-w-[53.625rem] mx-auto">
                Our commitment to customization ensures that you receive
                solutions designed precisely for your unique needs
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4  justify-between">
              {/* Holistic Problem Solving */}
              <div className="flex-1 border-[#E9E9E9] border-[0.06625rem] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]   bg-[#FFFFFF] rounded-[1.25rem]">
                <div className="flex pl-2.5 pt-2.5 pb-2">
                  <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
                    <Image
                      src="/images/ITC5.png"
                      alt="Holistic Problem Solving Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="pl-2.5 pr-6 pb-9 ">
                  <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                    Holistic Problem Solving
                  </h3>

                  <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                    Mindefy understands that off-the-shelf solutions don't
                    always address your particular challenges. Our consultants
                    conduct a thorough assessment of your business, focusing on
                    its individual pain points, opportunities, and goals. The
                    result is a bespoke solution that seamlessly integrates into
                    your organization, addressing specific issues and fostering
                    efficiency.
                  </p>
                </div>
              </div>

              {/* Scalability and Adaptability */}
              <div className="flex-1 border-[#E9E9E9] border-[0.06625rem] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]   bg-[#FFFFFF] rounded-[1.25rem]">
                <div className="flex pl-2.5 pt-2.5 pb-2">
                  <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
                    <Image
                      src="/images/ITC6.png"
                      alt="Scalability and Adaptability Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="pl-2.5 pr-6 pb-9">
                  <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                    Scalability and Adaptability
                  </h3>

                  <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                    Mindefy's tailored solutions are designed with scalability
                    and adaptability in mind. They grow with your business and
                    accommodate changes in your industry. This adaptability is
                    crucial for long-term success, as it means you won't have to
                    undergo a costly and time-consuming system overhaul each
                    time your business evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {focus} */}
        <div className="max-w-[72.5rem] mx-auto">
          {/* Tailored Solutions */}
          <div className="  p-2.5  mb-[3.75rem]">
            <div className="text-center mb-11">
              <h2 className="text-[1.75rem] font-semibold text-[#000000] mb-4">
                Innovation Focus
              </h2>
              <p className="text-[1.5rem] font-medium text-[#000000] leading-relaxed max-w-[53.625rem] mx-auto">
                Mindefy's dedication to fostering innovation has a significant
                impact, particularly for startups and businesses looking to stay
                competitive
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4  justify-between">
              {/* Holistic Problem Solving */}
              <div className="flex-1 border-[#E9E9E9] border-[0.06625rem] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]   bg-[#FFFFFF] rounded-[1.25rem]">
                <div className="flex pl-2.5 pt-2.5 pb-2">
                  <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
                    <Image
                      src="/images/ITC7.png"
                      alt="Holistic Problem Solving Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="pl-2.5 pr-6 pb-9 ">
                  <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                    Competitive Advantage
                  </h3>

                  <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                    Mindefy's consultants understand the evolving landscape and
                    can help you create innovative products, services, or
                    processes that set you apart from competitors. This
                    innovation is a powerful tool for attracting customers,
                    driving growth, and securing a competitive advantage.
                  </p>
                </div>
              </div>

              {/* Scalability and Adaptability */}
              <div className="flex-1 border-[#E9E9E9] border-[0.06625rem] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]   bg-[#FFFFFF] rounded-[1.25rem]">
                <div className="flex pl-2.5 pt-2.5 pb-2">
                  <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
                    <Image
                      src="/images/ITC8.png"
                      alt="Scalability and Adaptability Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="pl-2.5 pr-6 pb-9">
                  <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                    Risk Mitigation
                  </h3>

                  <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                    Innovation often involves taking calculated risks. Mindefy's
                    experts can guide you through the innovation process,
                    helping you identify and manage potential risks, thus
                    reducing the likelihood of costly setbacks. By approaching
                    innovation strategically, you maximize the return on your
                    investment and minimize the chances of failure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[72.5rem] mx-auto">
          {/* Tailored Solutions */}
          <div className="  p-2.5  mb-[3.75rem]">
            <div className="text-center mb-11">
              <h2 className="text-[1.75rem] font-semibold text-[#000000] mb-4">
                Collaborative Partnership
              </h2>
              <p className="text-[1.5rem] font-medium text-[#000000] leading-relaxed max-w-[53.625rem] mx-auto">
                Mindefy's commitment to building long-lasting relationships
                ensures that you have a dedicated partner on your IT journey
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4  justify-between">
              {/* Holistic Problem Solving */}
              <div className="flex-1 border-[#E9E9E9] border-[0.06625rem] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]   bg-[#FFFFFF] rounded-[1.25rem]">
                <div className="flex pl-2.5 pt-2.5 pb-2">
                  <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
                    <Image
                      src="/images/ITC9.png"
                      alt="Holistic Problem Solving Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="pl-2.5 pr-6 pb-9 ">
                  <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                    Ongoing Support
                  </h3>

                  <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                    Mindefy doesn't view your project as a one-time engagement.
                    We are committed to providing ongoing support as your
                    trusted partner. This means that you can rely on us for
                    guidance, problem-solving, and strategic advice as your
                    business evolves and faces new challenges. Our commitment to
                    your long-term success goes beyond project completion.
                  </p>
                </div>
              </div>

              {/* Scalability and Adaptability */}
              <div className="flex-1 border-[#E9E9E9] border-[0.06625rem] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]   bg-[#FFFFFF] rounded-[1.25rem]">
                <div className="flex pl-2.5 pt-2.5 pb-2">
                  <div className="relative w-[3.75rem] h-[3.75rem] flex-shrink-0">
                    <Image
                      src="/images/ITC10.png"
                      alt="Scalability and Adaptability Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="pl-2.5 pr-6 pb-9">
                  <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                    Knowledge Sharing
                  </h3>

                  <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                    Our collaborative approach extends to knowledge sharing. We
                    believe in sharing insights, best practices, and the latest
                    industry trends with you. This educational aspect ensures
                    that you are informed and well-prepared to make sound
                    decisions, even beyond our direct engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
