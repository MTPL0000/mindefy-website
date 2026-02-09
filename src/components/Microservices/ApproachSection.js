"use client";

const approachItems = [
  {
    title: "Architecture Design",
    description:
      "Mindеfy works closеly with you to undеrstand your businеss goals and dеvеlop a microsеrvicе architеcturе that mееts your spеcific rеquirеmеnts. Our еxpеriеncеd architеcts dеfinе sеrvicе boundariеs, communication protocols and data managеmеnt stratеgiеs to еnsurе an еfficiеnt and scalablе architеcturе.",
  },
  {
    title: "Java Development Expertise",
    description:
      "Using the power of Java, our skilled developers write clean and maintainable code for each microservice. We use industry best practices and proven frameworks like Spring Boot to accelerate development and ensure code quality.",
  },
  {
    title: "Seamless Integration",
    description:
      "We focus on the integration of microservices with other systems and components of the technology ecosystem. Whether we're integrating with existing databases, message queues, or external APIs, we ensure seamless communication and data flow between services.",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Rigorous testing is critical to the success of microservice applications. Our QA engineers use a comprehensive testing strategy, including unit testing, integration testing, and end-to-end testing, to validate the functionality, performance, and resilience of each microservice.",
  },
  {
    title: "Monitoring and Maintenance",
    description:
      "We provide ongoing support and maintenance services to keep your microservice-based Java applications running smoothly. We actively monitor performance, address potential vulnerabilities, and make necessary updates to keep your applications secure and up-to-date.",
  },
];

export default function ApproachSection() {
  return (
    <section className="mt-15 px-4 sm:px-6 lg:px-0">
      <div className="max-w-290 mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] px-4 lg:px-0">
            The Art of Java Microservices: How Our Approach Drives{" "}
            <span className="block sm:inline">Exceptional Development</span>
          </h2>
        </div>

        <div className="relative max-w-full lg:max-w-[54.81rem] mx-auto">
          <div className="absolute -left-20 rounded-xl top-0 w-3.5 bg-[#000000] h-full hidden xl:block"></div>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12.5">
            {approachItems.map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="flex-1">
                  <div className="">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mt-6 ml-0 lg:ml-2.5 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base mb-6 sm:mb-8 mx-0 lg:mx-2.5 text-[#444444] leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
