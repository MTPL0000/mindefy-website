"use client";

import Image from "next/image";
import { Fragment } from "react";

const benefits = [
  {
    title: "Increased Flexibility",
    desc: "Agile development provides flexibility to adapt to changing needs and market dynamics. By breaking the project down into manageable steps, we can easily make adjustments to ensure the end product meets your changing needs.",
    img: "/images/MARD1.svg",
  },
  {
    title: "Faster Time-to-Market",
    desc: "Our agile approach accelerates time to market so you can capitalize on business opportunities and gain competitive advantage. By delivering functional software in short time, we speed up the development process and ensure your product gets to market quickly.",
    img: "/images/MARD2.svg",
  },
  {
    title: "Improved Collaboration",
    desc: "Collaboration is at the heart of agile development. With our team of professionals, we facilitate close collaboration between developers, stakeholders and end users. This provides you with a clear understanding of your vision and allows us to create software solutions that meet your business goals.",
    img: "/images/MARD3.svg",
  },
  {
    title: "Enhanced Quality",
    desc: "Through continuous feedback and regular testing, we prioritize quality at all stages of development. By resolving issues in a timely manner, we maintain high standards of software quality, reduce the potential for errors, and increase overall user satisfaction.",
    img: "/images/MARD4.svg",
  },
  {
    title: "Efficient Resource Utilization",
    desc: "Agile methods ensure efficient allocation of resources. By breaking down projects into smaller phases, we optimize the use of resources and ensure that the right skills and knowledge are brought in at the right time, which saves costs and streamlines development.",
    img: "/images/MARD5.svg",
  },
];

const processModel = [
  {
    title: "Accelerated Time-to-Market",
    desc: "Through rapid prototyping and iterative development, the RAD model process accelerates your app's time-to-market, ensuring your app reaches your target audience quickly.",
    img: "/images/MARD2.svg",
  },
  {
    title: "Flexibility and Adaptability",
    desc: "The iterative nature of the RAD modeling process allows you to flexibly adapt to changes and evolving requirements, ensuring the end product meets your dynamic business needs.",
    img: "/images/MARD1.svg",
  },
  {
    title: "Enhanced Collaboration and Stakeholder Involvement",
    desc: "The RAD model process encourages close collaboration between stakeholders, end users, and development teams. Their involvement throughout the process ensures that the app lives up to your vision and meets user expectations.",
    img: "/images/MARD3.svg",
  },
  {
    title: "Efficient Resource Allocation",
    desc: "The RAD model process optimizes resource allocation by breaking down projects into small steps. This enables efficient use of resources, reduced costs and increased productivity.",
    img: "/images/MARD5.svg",
  },
];

const radSteps = [
  {
    title: "Requirements Gathering",
    description:
      "We work closely with you to understand your business goals, functional needs and target audience. By gathering comprehensive requirements, we ensure you have a clear understanding of your project goals.",
    imageSrc: "/images/RAD1.svg",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row bg-[#FFF5F5] rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0",
    imageWrapperClassName: "shrink-0 flex justify-center lg:justify-start",
  },
  {
    title: "Rapid Prototyping",
    description:
      "We rapidly develop functional prototypes based on the initial requirements. These prototypes provide a visual representation of the application's interface and functionality. Through iterative feedback and refinement, we continuously enhance the prototype.",
    imageSrc: "/images/AAD2.webp",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0",
    imageWrapperClassName: "shrink-0 flex justify-center lg:justify-start",
  },
  {
    title: "Iterative Development",
    description:
      "The RAD model process involves breaking down a project into small iterations or steps. During each iteration, we develop and test specific features. This iterative approach allows for rapid progress and continuous feedback.",
    imageSrc: "/images/RAD2.svg",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row bg-[#FFF5F5] rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0",
    imageWrapperClassName: "shrink-0 flex justify-center lg:justify-start",
  },
  {
    title: "Continuous Feedback and Collaboration",
    description:
      "Regular communication and collaboration is essential to the RAD model process. We engage stakeholders and end users throughout the development cycle, collect their feedback and incorporate it into future iterations.",
    imageSrc: "/images/RAD5.svg",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0",
    imageWrapperClassName: "shrink-0 flex justify-center lg:justify-start",
    imageInnerClassName: "flex items-center lg:mt-10 justify-center",
  },
  {
    title: "Rapid Testing and Quality Assurance",
    description:
      "We prioritize testing and quality assurance in all phases of the RAD model process. Through constant testing and timely problem solving, we ensure that the application is stable and reliable.",
    imageSrc: "/images/AAD6.webp",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0",
    imageWrapperClassName: "shrink-0 flex justify-center lg:justify-start",
  },
  {
    title: "Iteration Review and Refinement",
    description:
      "At the end of each iteration, we review the features developed with stakeholders and end users. This feedback helps us improve and improve the application to ensure that it meets your requirements and expectations.",
    imageSrc: "/images/AAD4.webp",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0",
    imageWrapperClassName: "shrink-0 flex justify-center lg:justify-start",
  },
  {
    title: "Incremental Deployment",
    description:
      "As each iteration is completed and reviewed, we gradually introduce features so that you can begin to realize the benefits of your application as you continue to evolve.",
    imageSrc: "/images/AAD7.webp",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0",
    imageWrapperClassName: "shrink-0 flex justify-center lg:justify-start",
  },
  {
    title: "Continuous Enhancement",
    description:
      "The RAD model process is a continuous cycle of development, feedback and refinement. We are constantly iterating and improving the application based on user feedback and evolving needs to ensure it continues to improve.",
    imageSrc: "/images/IOS1.webp",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row rounded-2xl gap-4 lg:gap-36 p-4 lg:p-0",
    imageWrapperClassName: "shrink-0 flex justify-center lg:justify-start",
  },
];

export default function AgileRapidFeatures() {
  const headerTextBase =
    "text-center font-semibold text-base lg:text-2xl text-[#2B4473]";

  const journeySteps = [
    {
      title: "Project Initiation",
      headerTextClassName: `w-full lg:w-[11.43rem] lg:ml-99.5 ${headerTextBase}`,
      description:
        "We start by understanding your business goals, requirements and project scope. Our team works closely with you to define clear goals and establish effective communication channels.",
      imageSrc: "/images/AAD1.webp",
      imageAlt: "JavaScript Stack",
      imageFirst: true,
    },
    {
      title: "Agile Framework Selection",
      headerTextClassName: `w-full lg:w-[19.68rem] lg:ml-[21.31rem] ${headerTextBase}`,
      description:
        "We help you choose the most suitable agile framework, such as Scrum or Kanban, based on your project requirements and organizational needs. Each system has its own set of practices and principles to guide the development process.",
      imageSrc: "/images/AAD4.webp",
      imageAlt: "JavaScript Stack",
      imageFirst: false,
    },
    {
      title: "Product Backlog Creation",
      headerTextClassName: `w-full lg:w-[17.87rem] lg:ml-[22.18rem] ${headerTextBase}`,
      description:
        "With your input, we created a product backlog, a prioritized list of features and requirements. This work-in-progress acts as a roadmap for the development process, ensuring that the most valuable and important topics are tackled first",
      imageSrc: "/images/AAD2.webp",
      imageAlt: "JavaScript Stack",
      imageFirst: true,
    },
    {
      title: "Sprint planning",
      headerTextClassName: `w-full lg:w-[11.43rem] lg:ml-[25.81rem] ${headerTextBase}`,
      description:
        "We plan our work for each iteration, called a sprint. During the sprint planning meeting, we collaborate to select a backlog to work on. We break them down into smaller, manageable tasks and estimate the effort required to complete each task.",
      imageSrc: "/images/ARD1.webp",
      imageAlt: "JavaScript Stack",
      imageFirst: false,
    },
    {
      title: "Sprint Execution",
      headerTextClassName: `w-full lg:w-[11.43rem] lg:ml-99.5 ${headerTextBase}`,
      description:
        "The development team starts work on the tasks defined in the sprint plan. Daily stand-ups keep everyone on the same page, encourage collaboration, and provide an opportunity to address any challenges or obstacles that arise.",
      imageSrc: "/images/AAD7.webp",
      imageAlt: "JavaScript Stack",
      imageFirst: true,
    },
    {
      title: "Continuous Testing and Integration",
      headerTextClassName: `w-full lg:w-104 lg:ml-[18.815rem] ${headerTextBase}`,
      description:
        "We emphasize the importance of continuous testing and integration throughout the development process. By regularly testing and integrating new features into existing systems, we ensure that issues are identified early and changes are integrated seamlessly.",
      imageSrc: "/images/AAD6.webp",
      imageAlt: "JavaScript Stack",
      imageFirst: false,
    },
    {
      title: "Sprint Review and Retrospective",
      headerTextClassName: `w-full lg:w-98.5 lg:ml-78 ${headerTextBase}`,
      description:
        "At the end of each sprint, we conduct a sprint review to show the work we've done to stakeholders and gather feedback. This feedback helps us improve and improve our products. We also conduct sprint retrospectives to reflect on the sprint and identify areas for further improvement.",
      imageSrc: "/images/ARD2.webp",
      imageAlt: "JavaScript Stack",
      imageFirst: true,
    },
    {
      title: "Repeat and Iterate",
      headerTextClassName: `w-full lg:w-[14.18rem] lg:ml-[24.685rem] ${headerTextBase}`,
      description:
        "Agile development processes are iterative and incremental. After each sprint, we repeat this cycle, starting with backlog adjustment and sprint planning. This allows us to continuously improve our products, incorporate feedback and adapt to changing needs.",
      imageSrc: "/images/AAD4.webp",
      imageAlt: "JavaScript Stack",
      imageFirst: true,
    },
  ];

  const imageWrapperBase = "shrink-0 flex justify-center lg:justify-start";
  const imageWrapperReverse =
    "shrink-0 order-1 lg:order-2 flex justify-center lg:justify-start";
  const contentBase =
    "flex-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0";
  const contentReverse =
    "flex-1 order-2 lg:order-1 lg:mt-[5.65rem] w-full lg:w-[36.06rem] lg:my-[2.93rem] lg:ml-2.5 px-4 lg:px-0";

  return (
    <>
      <div className="w-full max-w-[90%] sm:max-w-180 lg:w-241 mx-auto px-4 lg:px-0">
        <div className="">
          <p className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-5">
            Agile Development <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>Accelerating Innovation and
            Collaboration
          </p>
          <p className="font-normal text-sm sm:text-base mb-15 text-[#444444] text-justify">
            Our agile development methodology emphasizes iterative and
            collaborative project management to deliver high-quality software
            faster. We facilitate adaptability and responsiveness to changing
            needs by breaking down the development process into smaller, more
            manageable phases.Our agile development methodology emphasizes
            iterative and collaborative project management to deliver
            high-quality software faster. We facilitate adaptability and
            responsiveness to changing needs by breaking down the development
            process into smaller, more manageable phases.
          </p>
        </div>
      </div>

      <section className="mb-20 px-4 lg:px-0">
        <div className="max-w-[90%] sm:max-w-200 lg:max-w-247 mx-auto">
          <div className="text-center mb-10">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] mb-4">
              The Agile Development Journey at Mindefy
            </p>
            <p className="text-sm sm:text-base lg:text-lg mx-auto text-justify w-full max-w-[90%] sm:max-w-160 lg:w-204 font-normal text-[#444444] mb-11">
              The Agile development process is a collaborative and iterative
              approach to software development that focuses on delivering value
              to customers through continuous improvement and adaptive planning.
            </p>
          </div>

          <div className="flex flex-col gap-11 max-w-full lg:max-w-247 mx-auto">
            {journeySteps.map((step) => {
              const content = (
                <div className={step.imageFirst ? contentBase : contentReverse}>
                  <p className="text-sm lg:text-lg font-normal w-full lg:w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                    {step.description}
                  </p>
                </div>
              );
              const image = (
                <div
                  className={
                    step.imageFirst ? imageWrapperBase : imageWrapperReverse
                  }
                >
                  <div className="flex items-center justify-center">
                    <div className="w-[18rem] h-48 lg:w-[23.18rem] lg:h-[16.56rem] relative">
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );

              return (
                <Fragment key={step.title}>
                  <div className="flex items-center w-full lg:w-247 mx-auto h-16 lg:h-22 bg-[#D0DEF8] px-4 lg:px-0">
                    <p className={step.headerTextClassName}>{step.title}</p>
                  </div>
                  <div className="flex flex-col lg:flex-row bg-[#FFFFFF] gap-4 lg:gap-0">
                    {step.imageFirst ? image : content}
                    {step.imageFirst ? content : image}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0">
        <div className="max-w-[90%] lg:max-w-296.5 mx-auto">
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] mb-10">
            Maximize Agile Development Benefits at Mindefy
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 w-full max-w-[20rem] lg:w-95.5 flex flex-col items-center text-center"
                style={{
                  boxShadow:
                    "1px 1px 4px rgba(0, 0, 0, 0.2), 8px 8px 18px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="font-semibold text-base lg:text-xl mb-6">
                  {item.title}
                </h3>
                <div className="relative w-40 h-36 lg:w-55.5 lg:h-49.5 mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

                <p className="text-sm lg:text-sm text-[#444444] leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-20 px-4 lg:px-0">
        <div className="max-w-[90%] lg:max-w-251 mx-auto">
          <div className="text-center mb-12 mx-auto w-full lg:w-241">
            <p className="text-xl sm:text-2xl lg:text-3xl mx-auto lg:mx-51.5 font-semibold text-[#000000] w-full lg:w-138 mb-5">
              Rapid Application Development (RAD) Streamlining Software
              Development
            </p>
            <p className="text-sm lg:text-base mx-auto text-justify font-normal text-[#444444]">
              At Mindefy, we specialize in RAD, a methodology that emphasizes
              rapid prototyping, iterative development, and close collaboration
              between developers and stakeholders. RAD enables companies to
              quickly build and deploy functional software applications. As a
              leading provider of RAD services, we help companies accelerate
              software development processes, reduce time to market and achieve
              remarkable results. With Mindefy, you can unleash the power of RAD
              and transform your application development journey.
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-full lg:max-w-251 mx-auto">
            {radSteps.map((step) => (
              <div key={step.title} className={step.containerClassName}>
                <div className={step.imageWrapperClassName}>
                  <div
                    className={
                      step.imageInnerClassName ||
                      "flex items-center justify-center"
                    }
                  >
                    <div className="w-[18rem] h-48 lg:w-[23.18rem] lg:h-[16.56rem] relative">
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full lg:w-99 lg:my-11 lg:mr-[5.31rem]">
                  <p className="text-lg lg:text-2xl mb-4 font-semibold lg:mt-2.5 lg:ml-3.5 text-[#232323]">
                    {step.title}
                  </p>
                  <p className="text-sm lg:text-base font-normal lg:mx-3.5 w-full lg:w-92 text-[#444444] leading-relaxed text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0">
        <div className="max-w-[90%] lg:max-w-290 mx-auto">
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] mb-15">
            Exploring the Key Benefits of the
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>RAD Model Process
          </h2>
          <div className="flex flex-wrap justify-center gap-5 lg:gap-[3.12rem]">
            {processModel.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 w-full max-w-[20rem] lg:w-92.5 flex flex-col items-center text-center"
                style={{
                  boxShadow:
                    "1px 1px 4px rgba(0, 0, 0, 0.2), 8px 8px 18px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="font-semibold text-base lg:text-xl mb-6">
                  {item.title}
                </h3>
                <div className="relative w-40 h-36 lg:w-55.5 lg:h-49.5 mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

                <p className="text-sm lg:text-sm text-[#444444] leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
