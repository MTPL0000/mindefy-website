"use client";

import Image from "next/image";

export default function WhiteLabel() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive */}
      <section className="mt-28 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[0.875rem] sm:text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            White Label App Solution
          </p>

          {/* Main Title */}
          <h1 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-[90%] sm:max-w-[80%] lg:max-w-[50rem] mx-auto px-4 sm:px-0">
            White Label App Solutions <br className="hidden sm:block" /> for Various Industries
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60.25rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.5rem] px-4 sm:px-0">
            <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed">
              At Mindefy, we strive to provide superior white label app
              solutions you can trust. With our extensive knowledge and
              experience, we provide excellent services in multiple areas,
              enabling businesses to excel in the digital environment.
            </p>
            <p className="text-[0.875rem] sm:text-[1rem] font-normal text-[#444444] leading-relaxed">
              Our white label app solutions are fully customizable to match your
              brand image, providing a seamless and engaging user experience.
              From app design and functionality to color schemes and logos, we
              work closely with you to create unique branding solutions. Our
              customizable and end-to-end applications address a variety of
              industry needs, including Digital Health, Payments and Point of
              Sale, School Automation, Live Streaming and OTT, Food Delivery,
              Taxi and Ride Sharing, Unity 3D Gaming and Edtech
            </p>
          </div>

          {/* Hero Image - Responsive */}
          <div className="relative w-[90%] sm:w-[85%] md:w-[80%] lg:w-full h-[20rem] sm:h-[25rem] lg:h-[30.125rem] xl:h-[30.125rem] mx-auto mb-[3rem] sm:mb-[4rem] lg:mb-[5rem]">
            <Image
              src="/images/WL.webp"
              alt="WHITE LABEL"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60.43rem] mx-auto mb-16 sm:mb-20 px-4 sm:px-0">
          <p className="font-medium text-[0.875rem] sm:text-[1rem] text-[#000000] tracking-normal text-center sm:text-left">
            We further unlock your business potential by providing customized
            white label application solutions to increase productivity and
            optimize operations
          </p>
        </div>

        <div
          className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[42.75rem] mx-auto mb-[3.75rem] rounded-[0.75rem] bg-[#FFFFFF] p-4 sm:p-5 shadow-lg"
          style={{
            boxShadow: `
                     1px 1px 4px rgba(0, 0, 0, 0.2), 8px 8px 18px rgba(0, 0, 0, 0.1)`,
          }}
        >
          <p className="w-full xl:w-[40.25rem] text-center font-medium text-[1.25rem] sm:text-[1.5rem] lg:text-2xl tracking-normal text-[#2F2175] px-2 sm:px-0">
            Partner with us and experience the transformative Power of Our
            Cutting-Edge Technology
          </p>
        </div>
      </section>

      {/* Agile Benefits Section - Responsive Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[72.5rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
            {[
              {
                title: "Digital Wellness App",
                desc: "Improve your business with Mindefy's comprehensive digital health app development services. Our team is committed to taking your app idea from concept to completion, providing a robust, user-friendly and market-ready solution. With our expertise, we enable companies to meet the growing demand for on-demand mobile applications, deliver a seamless user experience and increase customer satisfaction.",
                img: "/images/WL1.webp",
              },
              {
                title: "Digital Invoicing and Point of Sale Application",
                desc: "Mindefy specializes in developing digital invoices and points of sale that meet the unique needs of businesses. Whether you need an invoicing solution, inventory management system, payment processing integration or a comprehensive point-of-sale platform, we have the expertise to make your vision a reality.",
                img: "/images/WL2.webp",
              },
              {
                title: "Unity 3D Game ",
                desc: "Mindefy specializes in providing superior white label application solutions for Unity 3D games. With our team of skilled developers, we offer high-quality solutions that can be tailored exactly to your needs. We offer clones of popular games like Ludo, Chess and more, ensuring you can tap into their timeless appeal. Our white label solution allows you to rebrand your game using branding and design elements while ensuring speed to market and cost efficiency.",
                img: "/images/WL3.webp",
              },
              {
                title: "Food Delivery",
                desc: "Unleash your food delivery business potential with Mindefy's comprehensive food delivery app development services. Our team of professionals can turn your app ideas into powerful, user-friendly and market-ready solutions. With our expertise in food delivery technology, we can help you streamline operations, improve customer experience and expand your presence in the highly competitive food delivery industry.",
                img: "/images/WL4.webp",
              },
              {
                title: "School Automation",
                desc: "Maximize the efficiency of your educational institution with Mindefy's comprehensive school automation app development services. Our goal is to provide a powerful and easy-to-use application that meets your institution's requirements and improves overall efficiency. Mindefy offers customization options to tailor the app to your specific needs, brand and workflow.",
                img: "/images/WL5.webp",
              },
              {
                title: "Taxi and Ride Booking",
                desc: "Mindefy has a proven track record in developing taxi and ride-hailing apps. Our experience in this field allows us to understand the specific needs and challenges of the transport industry. Thanks to our deep understanding of industry trends and user preferences, we can deliver applications that are tailored to your business needs and exceed customer expectations.",
                img: "/images/WL6.webp",
              },
              {
                title: "EdTech App",
                desc: "Mindefy provides comprehensive EdTech application development services to support your education business. With our experience and expertise in creating custom and powerful edtech apps, we can transform your app ideas into user-friendly and market-ready solutions. From interactive learning platforms to online assessments, progress tracking and personalized learning experiences, our apps optimize engagement and improve student learning outcomes. Partner with Mindefy to revolutionize education delivery, facilitate a seamless learning experience, and stay ahead of the evolving edtech landscape.",
                img: "/images/WL7.webp",
              },
              {
                title: "Live Streaming and OTT App",
                desc: "Enjoy live streaming and Over-The-Top (OTT) app development services from Mindefy. With our expertise in live streaming and OTT technologies, we enable you to engage your audience, deliver engaging content and build a strong digital presence. With our wide range of services, you can build powerful applications that enable you to deliver engaging live and on-demand content to your viewers. Create a strong digital presence, engage your audience and open new revenue streams.",
                img: "/images/WL8.webp",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[1.25rem] px-4 sm:px-6 py-5 w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[35rem] xl:w-[35rem] flex flex-col"
                style={{
                  boxShadow:
                    "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="relative w-full lg:w-[31.25rem] xl:w-[31.25rem] mb-[1.125rem] h-[18rem] sm:h-[20rem] lg:h-[22.187rem] xl:h-[22.187rem] mx-auto">
                  <Image
                    src={item.img || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-[1.25rem] sm:text-[1.5rem] mb-2.5 text-center lg:text-left">
                  {item.title}
                </h3>

                <p className="text-[0.8125rem] sm:text-sm font-normal text-[#444444] leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
