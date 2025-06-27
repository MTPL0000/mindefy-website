"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function BPM() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Matching the provided image */}
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Buisness Process Management
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[50rem] mx-auto">
            Revolutionize Your Business with <br></br>Mindefy's Business Process
            Management
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[60.25rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.75rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed ">
              To thrive, your business needs to be at the forefront of
              innovation, and Mindefy's BPM solutions are the key to this
              transformation. In this fast-paced environment, it's not just
              about offering a great product or service; it's about efficiently
              managing your processes to ensure optimal resource utilization and
              unwavering customer satisfaction. This is where Mindefy excels,
              providing state-of-the-art BPM solutions designed to revolutionize
              your organization's operations.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative  w-full h-[30.125rem] mx-auto mb-[5rem]">
            <Image
              src="/images/WAD.webp"
              alt="Hybrid App Development - Developer working with mobile app design"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <div className="w-[68.375rem] mx-auto mb-20 flex flex-row justify-between">
        <div className="w-[37.375rem] my-9">
          <div className="mx-2.5 mt-2.5 mb-5">
            <p className="font-semibold   text-2xl text-[#000000] ">
              What is Business Process Management (BPM)?
            </p>
          </div>
          <div className="mx-2.5 mb-2.5">
            <p className="font-normal text-[1rem] text-justify text-[#444444] leading-relaxed tracking-wide ">
              Business Process Management is the amalgamation of art and
              science, focused on optimizing your organization's processes to
              enhance performance, efficiency, and agility. BPM encompasses a
              spectrum of activities, including analyzing, designing,
              implementing, and continually improving processes to achieve
              strategic goals. Mindefy's BPM solutions are meticulously tailored
              to your specific needs, ensuring that your business functions with
              the precision and reliability of a well-oiled machine.
            </p>
          </div>
        </div>
        <div className="w-[23.25rem] h-[23.25rem] relative">
          <Image
            src="/images/SIS11.webp"
            alt="Code Reusability"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Agile Benefits Section using Flex */}
      <section className=" ">
        <div className="max-w-[72.375rem] mx-auto ">
          <div className="text-center">
            <h2 className="text-center text-[1.75rem] font-semibold text-[#000000] mb-11">
              The Upsides of Opting for Mindefy's BPM Solutions
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Process Efficiency",
                desc: "Mindefy acts as a perceptive diagnostician for your business, identifying bottlenecks, redundancies, and inefficiencies within your processes. Once identified, we systematically streamline these processes, resulting in a reduction in costs and an increase in productivity. In essence, we transform your processes into lean and efficient mechanisms that drive your business forward.",
                img: "/images/BPM1.webp",
              },
              {
                title: "Improved Visibility",
                desc: "With Mindefy's advanced BPM tools, you gain real-time insights into your operations. You can monitor key performance indicators (KPIs) and make data-driven decisions that lead to more favorable outcomes. This visibility enables you to stay agile and responsive in a rapidly changing business environment.",
                img: "/images/BPM2.webp",
              },
              {
                title: "Enhanced Collaboration",
                desc: "Mindefy's BPM solutions foster seamless collaboration among teams and departments, breaking down silos and improving communication. The result is increased innovation and elevated levels of customer satisfaction. When your teams can work harmoniously and communicate effectively, it enhances your organization's ability to adapt and serve customers more effectively. ",
                img: "/images/BPM3.webp",
              },
              {
                title: "Flexibility and Scalability",
                desc: "As your business evolves and grows, your processes must adapt to support these changes. Mindefy's BPM solutions are flexible and scalable, ensuring that they not only keep pace with your business but also facilitate your expansion. This adaptability is crucial in helping your business remain agile and responsive in a dynamic marketplace.",
                img: "/images/BPM4.webp",
              },
              {
                title: "Compliance and Risk Management",
                desc: "Staying compliant with industry regulations and mitigating risks effectively is of paramount importance in today's business landscape. Mindefy's BPM tools include robust compliance and risk management features, which help ensure that your processes adhere to relevant regulations and are equipped to manage and mitigate risks effectively.",
                img: "/images/BPM5.webp",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[0.75rem]  px-6  py-5 w-[23.12rem] flex flex-col items-center text-center"
                style={{
                  boxShadow:
                    "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="w-[21.875rem] h-[4.5rem] mb-[1.125rem]">
                  <h3 className="font-semibold text-[1.5rem] ">{item.title}</h3>
                </div>
                <div className="relative w-[13.875rem] h-[12.375rem] mb-[1.125rem]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-sm font-normal  w-[21.875rem] text-[#444444] leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 ">
        <div className="max-w-[63rem] mx-auto ">
          {/* Section Header */}
          <div className=" w-[58.875rem] mx-auto text-center mb-10">
            <h2 className="text-[1.75rem] font-semibold text-[#000000] mb-7">
              The Upsides of Opting for Mindefy's BPM Solutions
            </h2>
            <h2 className="text-[1rem] font-normal text-[#000000] ">
              At Mindefy, we take a comprehensive and systematic approach to
              BPM, with a focus on delivering tangible results
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-[2.875rem] max-w-[56.25rem] mx-auto">
            {/* Full JavaScript Stack */}
            <div className="flex bg-[#E6E6E7] rounded-xl  ">
              <div className="flex-1 w-[30.875rem]  my-[3.781rem] ml-5.5 ">
                <p className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Process Discovery
                </p>
                <p className="text-[1rem]  mx-3.5 w-[30.875rem] tracking-wide text-[#444444] leading-relaxed text-justify">
                  We work closely with your team to identify existing processes,
                  pinpoint pain points, and identify opportunities for
                  improvement. This phase sets the stage for transformation.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/TA4.svg"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scalability and Performance */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5 ml-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/BPM6.webp"
                      alt="Performance"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[30.875rem]  my-[3.781rem] ml-5.5">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Process Design
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[30.875rem] tracking-wide text-[#444444] leading-relaxed text-justify">
                  Leveraging industry best practices, we design optimized
                  processes that align with your business objectives. Our
                  designs are not just improvements; they are tailored to
                  enhance your strategic goals.
                </p>
              </div>
            </div>

            {/* Rapid Development */}
            <div className="flex bg-[#E6E6E7] rounded-xl ">
              <div className="flex-1 w-[30.875rem]  my-[3.781rem] ml-5.5">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Process Automation
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[30.875rem] tracking-wide text-[#444444] leading-relaxed text-justify">
                  Automation is the cornerstone of efficiency. Mindefy leverages
                  automation to reduce manual tasks, minimize errors, and
                  elevate the overall efficiency of your processes. Automation
                  allows your team to focus on high-value tasks while routine
                  operations are handled seamlessly.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/BPM7.webp"
                      alt="Rapid Development"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Code Reusability */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center ">
                  <div className="w-[23.18rem] my-2.5 ml-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/BPM8.webp"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[30.875rem]  my-[3.781rem] ml-5.5">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Monitoring and Analytics
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[30.875rem] tracking-wide text-[#444444] leading-relaxed text-justify">
                  Real-time monitoring and data analytics provide you with
                  insights into process performance. This transparency empowers
                  you to make data-driven decisions, pivot as needed, and
                  optimize your operations continually
                </p>
              </div>
            </div>

            {/* Flexibility and Extensibility */}
            <div className="flex bg-[#E6E6E7] rounded-xl ">
              <div className="flex-1 w-[30.875rem]  my-[3.781rem] ml-5.5">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Continuous Improvement
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[30.875rem] tracking-wide text-[#444444] leading-relaxed text-justify">
                  We embrace the philosophy of continuous improvement. Our team
                  collaborates closely with you to refine processes as your
                  business evolves, ensuring that they remain aligned with your
                  dynamic business goals.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className=" flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/BPM9.webp"
                      alt="Flexibility"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mindefy is the Ideal Partner Section */}
      <section className="  mt-20">
        <div className="max-w-[62.75rem] mx-auto">
          {/* Section Header */}
          <div className="text-center w-[33.5rem] mx-auto mb-[3rem]">
            <h2 className="text-[1.75rem] font-semibold text-[#000000]">
              Why Mindefy Excels in BPM ?
            </h2>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="flex flex-wrap  max-w-[62.75rem] mx-auto">
            {/* Expertise and Experience */}
            <div className="bg-white flex-1 max-w-[31.375rem] border-r border-b border-[#000000]  basis-[calc(50%-1rem)]">
              <div className="flex items-center ml-[26.375rem] mb-4">
                <div className=" relative w-15 h-15 mr-5 mt-5">
                  <Image
                    src="/images/bpm1.svg"
                    alt="Expertise and Experience"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-7 w-[28.875rem] ">
                <h3 className="ml-[21.93rem] mb-5 text-[1.5rem] font-semibold text-[#000000]">
                  Expertise
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  Mindefy's team of seasoned BPM professionals brings a proven
                  track record of delivering results to businesses across a
                  diverse range of industries. Our collective expertise ensures
                  that you receive actionable solutions backed by real-world
                  experience.
                </p>
              </div>
            </div>

            {/* Advanced Tools and Technologies */}
            <div className="bg-white flex-1 max-w-[31.375rem] border-l border-b border-[#000000]  basis-[calc(50%-1rem)]">
              <div className="flex items-center  mb-4">
                <div className="relative w-15 h-15 ml-5 mt-5">
                  <Image
                    src="/images/bpm2.svg"
                    alt="Advanced Tools and Technologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-7 w-[28.875rem]">
                <h3 className="mb-5 text-[1.5rem] font-semibold text-[#000000]">
                  Tailored Solutions
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  We firmly believe in the principle that there is no
                  one-size-fits-all solution in BPM. As such, our BPM offerings
                  are never off-the-shelf; they are always customized to meet
                  your unique requirements. Your business is unique, and your
                  BPM solutions should reflect that uniqueness.
                </p>
              </div>
            </div>

            {/* Agile Testing Methodologies */}
            <div className="bg-white flex-1 max-w-[31.375rem] border-r border-t border-[#000000]  basis-[calc(50%-1rem)]">
              <div className="flex items-center ml-[26.375rem] mb-4">
                <div className="relative w-15 h-15 mr-5 mt-5">
                  <Image
                    src="/images/bpm3.svg"
                    alt="Agile Testing Methodologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-2.5 w-[28.875rem]">
                <h3 className="ml-[8.81rem] mb-5 text-[1.5rem] font-semibold text-[#000000]">
                  Cutting-Edge Technology
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  Mindefy consistently leverages the latest BPM tools and
                  technologies to keep your business ahead of the competition.
                  With the rapid pace of technological change, our commitment to
                  staying at the forefront ensures that your BPM solutions are
                  always at the cutting edge.
                </p>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-white flex-1 max-w-[31.375rem] border-l border-t border-[#000000]  basis-[calc(50%-1rem)]">
              <div className="flex items-center mb-4">
                <div className="relative w-15 h-15 ml-5 mt-5">
                  <Image
                    src="/images/bpm4.svg"
                    alt="Customer Satisfaction"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-2.5 w-[28.875rem]">
                <h3 className="mb-5 text-[1.5rem] font-semibold text-[#000000]">
                  Client-Centric Approach
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  Your success is our success. We work closely with you to
                  achieve your goals and drive business growth. Our commitment
                  to your success is unwavering, and we consider ourselves not
                  just your service provider but your strategic partner in your
                  journey toward BPM excellence.
                </p>
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
