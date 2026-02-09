"use client";

import Image from "next/image";
import CRMAdvantageCard from "./CRMAdvantageCard";

const crmFeatures = [
  {
    title: "Customer-Centric Brilliance",
    description:
      "At Mindefy, our core mission is to make every customer feel like a VIP. Our CRM solutions are meticulously designed to enhance every touchpoint with your customers, fostering authentic and long-lasting connections. Through advanced analytics and user-friendly interfaces, we empower you to understand your customers on a profound level, anticipate their desires, and consistently exceed their expectations. Mindefy's CRM goes beyond mere data management; it equips you to deliver a personalized and extraordinary customer experience that sets you apart in your industry.",
    imageSrc: "/images/CRM1.webp",
  },
  {
    title: "Seamless Harmony",
    description:
      "Appian is a powerful Low-Code platform that combines business process management, artificial intelligence, and low-code development capabilities. With Appian, you can streamline and automate complex business processes, enhance collaboration, and deliver exceptional customer experiences. Mindefy's expertise in Appian development enables you to leverage this platform's capabilities to drive efficiency and innovation within your organization.",
    imageSrc: "/images/CRM2.webp",
  },
  {
    title: "Tailored Brilliance",
    description:
      "Every business is as unique as a fingerprint, and cookie-cutter CRM solutions won't suffice. At Mindefy, we approach CRM as an art, not a science. We pay keen attention to your specific needs, challenges, and aspirations. Armed with this intimate knowledge, we meticulously tailor our CRM systems to address your business's pain points and leverage opportunities for growth. Our CRM is not just a tool; it's a customized solution that aligns precisely with your unique business objectives.",
    imageSrc: "/images/CRM3.webp",
  },
  {
    title: "Real-Time Vision",
    description:
      "Mindefy's CRM solutions provide real-time insights into customer behavior, market trends, and sales performance. Armed with this visionary knowledge, you can make data-powered choices, refine your strategies, and emerge as a leader in your industry. Leveraging these real-time insights enables you to pivot quickly in response to changing customer demands and dynamic market conditions, staying one step ahead of the competition.",
    imageSrc: "/images/CRM4.webp",
  },
  {
    title: "Legendary Support",
    description:
      "Mindefy's commitment to your success knows no bounds. Our dedicated support team is at your service around the clock, 24/7. From the initial implementation of the CRM solution to continuous maintenance and updates, we're not just your support team; we're your strategic partners in ensuring that your CRM system consistently operates at peak performance. We share your commitment to your business's success and work tirelessly to help it flourish.",
    imageSrc: "/images/CRM5.webp",
  },
];

const advantageCards = [
  {
    title: "Maestros at Your Service",
    description:
      "Mindefy's CRM services provide you with access to a team of CRM virtuosos. These experts have honed their skills in the art of customer relationship management across diverse sectors. Their knowledge and experience provide you with confidence that your customer connections are in the hands of seasoned professionals who understand the nuances of your industry and are well-equipped to drive customer engagement and loyalty.",
    imageSrc: "/images/CRM7.webp",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row bg-[#F0EDF8] rounded-2xl p-4 lg:p-0",
    contentClassName:
      "flex-1 w-full lg:w-111 my-2.5 lg:ml-6 order-2 lg:order-1",
    imageWrapperClassName: "shrink-0 order-1 lg:order-2",
    imageInnerClassName: "flex items-center justify-center",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-85 my-4 lg:my-[4.198rem] lg:mr-6 h-48 sm:h-52 lg:h-[13.60rem] relative",
    imageFirst: false,
  },
  {
    title: "Innovation Unleashed",
    description:
      "Stay ahead of the curve with Mindefy's groundbreaking CRM solutions, infused with the latest technology and industry-leading best practices. We're committed to keeping you at the forefront of technological advancements and ensuring your CRM is aligned with the most up-to-date industry standards. This commitment empowers you to remain adaptable and agile in the ever-evolving business landscape.",
    imageSrc: "/images/CRM8.webp",
    imageAlt: "Performance",
    containerClassName: "flex flex-col lg:flex-row rounded-xl p-4 lg:p-0",
    contentClassName: "flex-1 w-full lg:w-111 my-4 lg:my-14 lg:ml-6 order-2",
    imageWrapperClassName: "shrink-0 order-1",
    imageInnerClassName: "flex items-center justify-center",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-75 my-4 lg:my-12 lg:ml-6 lg:mr-12 h-48 sm:h-60 lg:h-[17.63rem] relative",
    imageFirst: true,
  },
  {
    title: "Scale the Summit",
    description:
      "Mindefy's CRM solutions are flexible and scalable, designed to grow with your business. Whether you're a budding startup or an established global enterprise, our CRM systems evolve to accommodate your expanding needs. You won't outgrow our CRM; it will evolve in parallel with your business, ensuring that you have the capabilities and tools necessary to drive customer relationships and growth as your business expands.",
    imageSrc: "/images/CRM6.webp",
    imageAlt: "Rapid Development",
    containerClassName:
      "flex flex-col lg:flex-row bg-[#F0EDF8] rounded-2xl p-4 lg:p-0",
    contentClassName:
      "flex-1 w-full lg:w-111 my-4 lg:my-14 lg:ml-6 order-2 lg:order-1",
    imageWrapperClassName: "shrink-0 order-1 lg:order-2",
    imageInnerClassName: "flex items-center justify-center",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-75 my-4 lg:my-12 lg:ml-6 lg:mr-12 h-48 sm:h-60 lg:h-[17.63rem] relative",
    imageFirst: false,
  },
  {
    title: "Ironclad Security",
    description:
      "Mindefy places a paramount emphasis on the security of your data. We employ state-of-the-art security measures to protect your sensitive information. Your data's safety is our utmost priority, granting you peace of mind as you focus on building and maintaining invaluable customer connections. Our commitment to security extends to safeguarding your customer data, ensuring their trust and confidence in your business.",
    imageSrc: "/images/CRM10.webp",
    imageAlt: "Code Reusability",
    containerClassName: "flex flex-col lg:flex-row rounded-xl p-4 lg:p-0",
    contentClassName: "flex-1 w-full lg:w-111 my-4 lg:my-14 lg:ml-6 order-2",
    imageWrapperClassName: "shrink-0 order-1",
    imageInnerClassName: "flex items-center",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-75 my-4 lg:my-12 lg:ml-6 lg:mr-12 h-48 sm:h-60 lg:h-[17.63rem] relative",
    imageFirst: true,
  },
  {
    title: "Results That Shine",
    description:
      "Join the ranks of delighted clients who have experienced tangible outcomes, from soaring customer satisfaction to turbocharged sales, all thanks to Mindefy's CRM brilliance. The impact of our CRM solutions isn't just theoretical; it's measurable and real, providing your business with a competitive edge and quantifiable growth.",
    imageSrc: "/images/CRM9.webp",
    imageAlt: "Flexibility",
    containerClassName:
      "flex flex-col lg:flex-row bg-[#F0EDF8] rounded-2xl p-4 lg:p-0",
    contentClassName:
      "flex-1 w-full lg:w-111 my-4 lg:my-16.5 lg:ml-6 order-2 lg:order-1",
    imageWrapperClassName: "shrink-0 order-1 lg:order-2",
    imageInnerClassName: "flex items-center justify-center",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-87 my-4 lg:my-12 lg:ml-6 lg:mr-12 h-48 sm:h-60 lg:h-87 relative",
    imageFirst: false,
  },
];

export default function CRMFeatures() {
  return (
    <>
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-250 mx-auto">
          <div className="text-center mb-15">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#000000] mb-4">
              Our CRM Solutions<br></br> Where Connections Lead to Triumph
            </h2>
          </div>
          <div className="flex flex-col gap-6.5 max-w-251 mx-auto mb-15">
            {crmFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6.25 bg-white p-4 lg:px-1.5 lg:py-0 rounded-lg"
                style={{
                  boxShadow:
                    "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                  <div className="w-48 sm:w-56 lg:w-[16.18rem] my-2.5 h-40 sm:h-48 lg:h-55.5 relative">
                    <Image
                      src={feature.imageSrc}
                      alt="Performance"
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1 lg:mx-2.5">
                  <h3 className="text-lg lg:text-xl mt-2.5 font-semibold text-[#000000] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base font-normal text-[#444444] leading-relaxed text-left lg:text-justify mb-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-220 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#000000]">
              The Advantages of Opting for Mindefy's CRM Services
            </h2>
          </div>
          <div className="flex flex-col gap-10 max-w-220 mx-auto">
            {advantageCards.map((card) => (
              <CRMAdvantageCard
                key={card.title}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                containerClassName={card.containerClassName}
                contentClassName={card.contentClassName}
                imageWrapperClassName={card.imageWrapperClassName}
                imageInnerClassName={card.imageInnerClassName}
                imageSizeClassName={card.imageSizeClassName}
                imageFirst={card.imageFirst}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
