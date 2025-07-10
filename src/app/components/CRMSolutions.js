"use client";

import Image from "next/image";

export default function CRMSolutions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            CRM Solutions
          </p>

          {/* Main Title */}
          <h1 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-[50rem] mx-auto px-4">
            <span className="font-normal">Unleash the </span>Power of
            Connections
            <span className="font-normal"> with </span>Mindefy's CRM Mastery
          </h1>

          {/* Description Paragraphs */}
          <div className="w-full max-w-[61.375rem] font-normal mx-auto mb-[2.25rem] px-4 lg:text-justify text-left space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              Mindefy , your trusted partner in the art of forging meaningful
              relationships with your customers. In today's dynamic business
              world, customer relationships are the lifeblood of success. But to
              truly excel, you need more than just CRM software; you need a CRM
              solution that takes your business to the next level.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-[20rem] sm:h-[25rem] lg:h-[30.125rem] mx-auto mb-6">
            <Image
              src="/images/CRM.webp"
              alt="Web Application Development - Developer working with web applications"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Expertise in Low-Code Platform Development Section */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[62.5rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-[3.75rem]">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-semibold text-[#000000] mb-4">
              Our CRM Solutions<br></br> Where Connections Lead to Triumph
            </h2>
          </div>

          {/* Platform Cards */}
          <div className="flex flex-col gap-[1.625rem] max-w-[62.75rem] mx-auto mb-[3.75rem]">
            {/* OutSystems */}
            <div
              className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6.25 bg-white p-4 lg:px-1.5 lg:py-0 rounded-lg"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                <div className="w-[12rem] sm:w-[14rem] lg:w-[16.18rem] my-2.5 h-[10rem] sm:h-[12rem] lg:h-[13.875rem] relative">
                  <Image
                    src="/images/CRM1.webp"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 lg:mx-2.5">
                <h3 className="text-[1.125rem] lg:text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  Customer-Centric Brilliance
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-left lg:text-justify mb-4">
                  At Mindefy, our core mission is to make every customer feel
                  like a VIP. Our CRM solutions are meticulously designed to
                  enhance every touchpoint with your customers, fostering
                  authentic and long-lasting connections. Through advanced
                  analytics and user-friendly interfaces, we empower you to
                  understand your customers on a profound level, anticipate
                  their desires, and consistently exceed their expectations.
                  Mindefy's CRM goes beyond mere data management; it equips you
                  to deliver a personalized and extraordinary customer
                  experience that sets you apart in your industry.
                </p>
              </div>
            </div>

            {/* Appian */}
            <div
              className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6.25 bg-white p-4 lg:px-1.5 lg:py-0 rounded-lg"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                <div className="w-[12rem] sm:w-[14rem] lg:w-[16.18rem] my-2.5 h-[10rem] sm:h-[12rem] lg:h-[13.875rem] relative">
                  <Image
                    src="/images/CRM2.webp"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 lg:mx-2.5">
                <h3 className="text-[1.125rem] lg:text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  Seamless Harmony
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-left lg:text-justify mb-4">
                  Appian is a powerful Low-Code platform that combines business
                  process management, artificial intelligence, and low-code
                  development capabilities. With Appian, you can streamline and
                  automate complex business processes, enhance collaboration,
                  and deliver exceptional customer experiences. Mindefy's
                  expertise in Appian development enables you to leverage this
                  platform's capabilities to drive efficiency and innovation
                  within your organization.
                </p>
              </div>
            </div>

            {/* ServiceNow */}
            <div
              className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6.25 bg-white p-4 lg:px-1.5 lg:py-0 rounded-lg"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                <div className="w-[12rem] sm:w-[14rem] lg:w-[16.18rem] my-2.5 h-[10rem] sm:h-[12rem] lg:h-[13.875rem] relative">
                  <Image
                    src="/images/CRM3.webp"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 lg:mx-2.5">
                <h3 className="text-[1.125rem] lg:text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  Tailored Brilliance
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-left lg:text-justify mb-4">
                  Every business is as unique as a fingerprint, and
                  cookie-cutter CRM solutions won't suffice. At Mindefy, we
                  approach CRM as an art, not a science. We pay keen attention
                  to your specific needs, challenges, and aspirations. Armed
                  with this intimate knowledge, we meticulously tailor our CRM
                  systems to address your business's pain points and leverage
                  opportunities for growth. Our CRM is not just a tool; it's a
                  customized solution that aligns precisely with your unique
                  business objectives.
                </p>
              </div>
            </div>

            {/* Zoho Creator */}
            <div
              className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6.25 bg-white p-4 lg:px-1.5 lg:py-0 rounded-lg"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                <div className="w-[12rem] sm:w-[14rem] lg:w-[16.18rem] my-2.5 h-[10rem] sm:h-[12rem] lg:h-[13.875rem] relative">
                  <Image
                    src="/images/CRM4.webp"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 lg:mx-2.5">
                <h3 className="text-[1.125rem] lg:text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  Real-Time Vision
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-left lg:text-justify mb-4">
                  Mindefy's CRM solutions provide real-time insights into
                  customer behavior, market trends, and sales performance. Armed
                  with this visionary knowledge, you can make data-powered
                  choices, refine your strategies, and emerge as a leader in
                  your industry. Leveraging these real-time insights enables you
                  to pivot quickly in response to changing customer demands and
                  dynamic market conditions, staying one step ahead of the
                  competition.
                </p>
              </div>
            </div>

            {/* Magic XPA */}
            <div
              className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6.25 bg-white p-4 lg:px-1.5 lg:py-0 rounded-lg"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                <div className="w-[12rem] sm:w-[14rem] lg:w-[16.18rem] my-2.5 h-[10rem] sm:h-[12rem] lg:h-[13.875rem] relative">
                  <Image
                    src="/images/CRM5.webp"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 lg:mx-2.5">
                <h3 className="text-[1.125rem] lg:text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  Legendary Support
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-left lg:text-justify mb-4">
                  Mindefy's commitment to your success knows no bounds. Our
                  dedicated support team is at your service around the clock,
                  24/7. From the initial implementation of the CRM solution to
                  continuous maintenance and updates, we're not just your
                  support team; we're your strategic partners in ensuring that
                  your CRM system consistently operates at peak performance. We
                  share your commitment to your business's success and work
                  tirelessly to help it flourish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEAN and MERN Advantages Section */}
      <section className="mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[55rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-[2.5rem]">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-semibold text-[#000000]">
              The Advantages of Opting for Mindefy's CRM Services
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-[2.5rem] max-w-[55rem] mx-auto">
            {/* Full JavaScript Stack */}
            <div
              className="flex flex-col lg:flex-row bg-[#F0EDF8] rounded-2xl p-4 lg:p-0"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-1 w-full lg:w-[27.75rem] my-2.5 lg:ml-6 order-2 lg:order-1">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] lg:ml-3.5 mt-2.5 font-semibold text-[#000000] mb-4">
                  Maestros at Your Service
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] lg:mx-3.5 mb-2.5 w-full lg:w-[26rem] text-[#444444] leading-relaxed text-left lg:text-justify">
                  Mindefy's CRM services provide you with access to a team of
                  CRM virtuosos. These experts have honed their skills in the
                  art of customer relationship management across diverse
                  sectors. Their knowledge and experience provide you with
                  confidence that your customer connections are in the hands of
                  seasoned professionals who understand the nuances of your
                  industry and are well-equipped to drive customer engagement
                  and loyalty.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2">
                <div className="flex items-center justify-center">
                  <div className="w-[16rem] sm:w-[18rem] lg:w-[21.25rem] my-4 lg:my-[4.198rem] lg:mr-6 h-[12rem] sm:h-[13rem] lg:h-[13.60rem] relative">
                    <Image
                      src="/images/CRM7.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scalability and Performance */}
            <div
              className="flex flex-col lg:flex-row rounded-xl p-4 lg:p-0"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-shrink-0 order-1">
                <div className="flex items-center justify-center">
                  <div className="w-[16rem] sm:w-[18rem] lg:w-[18.75rem] my-4 lg:my-[3rem] lg:ml-6 lg:mr-12 h-[12rem] sm:h-[15rem] lg:h-[17.63rem] relative">
                    <Image
                      src="/images/CRM8.webp"
                      alt="Performance"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[27.75rem] my-4 lg:my-14 lg:ml-6 order-2">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] lg:ml-3.5 mt-2.5 font-semibold text-[#000000] mb-4">
                  Innovation Unleashed
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] lg:mx-3.5 mb-2.5 w-full lg:w-[26rem] text-[#444444] leading-relaxed text-left lg:text-justify">
                  Stay ahead of the curve with Mindefy's groundbreaking CRM
                  solutions, infused with the latest technology and
                  industry-leading best practices. We're committed to keeping
                  you at the forefront of technological advancements and
                  ensuring your CRM is aligned with the most up-to-date industry
                  standards. This commitment empowers you to remain adaptable
                  and agile in the ever-evolving business landscape.
                </p>
              </div>
            </div>

            {/* Rapid Development */}
            <div
              className="flex flex-col lg:flex-row bg-[#F0EDF8] rounded-2xl p-4 lg:p-0"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-1 w-full lg:w-[27.75rem] my-4 lg:my-14 lg:ml-6 order-2 lg:order-1">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] lg:ml-3.5 mt-2.5 font-semibold text-[#000000] mb-4">
                  Scale the Summit
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] lg:mx-3.5 mb-2.5 w-full lg:w-[26rem] text-[#444444] leading-relaxed text-left lg:text-justify">
                  Mindefy's CRM solutions are flexible and scalable, designed to
                  grow with your business. Whether you're a budding startup or
                  an established global enterprise, our CRM systems evolve to
                  accommodate your expanding needs. You won't outgrow our CRM;
                  it will evolve in parallel with your business, ensuring that
                  you have the capabilities and tools necessary to drive
                  customer relationships and growth as your business expands.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2">
                <div className="flex items-center justify-center">
                  <div className="w-[16rem] sm:w-[18rem] lg:w-[18.75rem] my-4 lg:my-[3rem] lg:ml-6 lg:mr-12 h-[12rem] sm:h-[15rem] lg:h-[17.63rem] relative">
                    <Image
                      src="/images/CRM6.webp"
                      alt="Rapid Development"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Code Reusability */}
            <div
              className="flex flex-col lg:flex-row rounded-xl p-4 lg:p-0"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-shrink-0 order-1">
                <div className="flex items-center">
                  <div className="w-[16rem] sm:w-[18rem] lg:w-[18.75rem] my-4 lg:my-[3rem] lg:ml-6 lg:mr-12 h-[12rem] sm:h-[15rem] lg:h-[17.63rem] relative">
                    <Image
                      src="/images/CRM10.webp"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[27.75rem] my-4 lg:my-14 lg:ml-6 order-2">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] lg:ml-3.5 mt-2.5 font-semibold text-[#000000] mb-4">
                  Ironclad Security
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] lg:mx-3.5 mb-2.5 w-full lg:w-[26rem] text-[#444444] leading-relaxed text-left lg:text-justify">
                  Mindefy places a paramount emphasis on the security of your
                  data. We employ state-of-the-art security measures to protect
                  your sensitive information. Your data's safety is our utmost
                  priority, granting you peace of mind as you focus on building
                  and maintaining invaluable customer connections. Our
                  commitment to security extends to safeguarding your customer
                  data, ensuring their trust and confidence in your business.
                </p>
              </div>
            </div>

            {/* Flexibility and Extensibility */}
            <div
              className="flex flex-col lg:flex-row bg-[#F0EDF8] rounded-2xl p-4 lg:p-0"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-1 w-full lg:w-[27.75rem] my-4 lg:my-[4.125rem] lg:ml-6 order-2 lg:order-1">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] lg:ml-3.5 mt-2.5 font-semibold text-[#000000] mb-4">
                  Results That Shine
                </h3>
                <p className="text-[0.9rem] lg:text-[1rem] lg:mx-3.5 mb-2.5 w-full lg:w-[26rem] text-[#444444] leading-relaxed text-left lg:text-justify">
                  Join the ranks of delighted clients who have experienced
                  tangible outcomes, from soaring customer satisfaction to
                  turbocharged sales, all thanks to Mindefy's CRM brilliance.
                  The impact of our CRM solutions isn't just theoretical; it's
                  measurable and real, providing your business with a
                  competitive edge and quantifiable growth.
                </p>
              </div>
              <div className="flex-shrink-0 order-1 lg:order-2">
                <div className="flex items-center justify-center">
                  <div className="w-[16rem] sm:w-[18rem] lg:w-[21.75rem] my-4 lg:my-[3rem] lg:ml-6 lg:mr-12 h-[12rem] sm:h-[15rem] lg:h-[21.75rem] relative">
                    <Image
                      src="/images/CRM9.webp"
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
    </div>
  );
}
