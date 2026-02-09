"use client";

export default function CDSDevOps() {
  return (
    <section className="mt-8 xl:mt-15 px-4 sm:px-6 xl:px-0">
      <div className="max-w-full xl:max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 xl:mb-15">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-[#000000]">
            DevOps Solutions at Your Fingertips
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-[#000000] mb-6 xl:mb-11">
            Achieve Agile and Efficient Software Delivery with Our DevOps
            Services
          </h3>
          <p className="text-sm sm:text-base lg:text-base xl:text-base font-normal text-[#444444] leading-relaxed mx-auto text-justify">
            Fastеn your softwarе dеvеlopmеnt lifеcyclе with our comprеhеnsivе
            DеvOps sеrvicеs. Our DevOps experts work closely with your team to
            streamline processes, automate workflows, and foster a culture of
            continuous integration and delivery. By simply integrating
            development and operations, Mindеfy can help you reduce time to
            market, improve software quality, and increase customer
            satisfaction.
          </p>
        </div>

        {/* DevOps Services Grid */}
        <div className="flex flex-col gap-4 lg:flex-wrap lg:gap-6 lg:justify-center xl:w-6xl pb-12 xl:pb-20">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-5 xl:max-w-6xl">
            {/* Continuous Integration & Delivery */}
            <div
              className="flex-1 bg-[#FFFFFF] rounded-[1.25rem] w-full xl:w-141.5 p-4 xl:p-4.5 shadow-sm border border-gray-100"
              style={{
                boxShadow:
                  " 8px 8px 18px rgba(0, 0, 0, 0.1),1px 1px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-[#000000] mb-4 xl:mb-6 mt-2 xl:mt-2.5">
                Continuous Integration
                <br />& Delivery
              </h4>
              <p className="text-sm sm:text-base lg:text-base xl:text-base font-normal text-[#444444] leading-relaxed text-justify">
                We implement a state-of-the-art CI/CD pipeline to automate the
                development, testing and deployment of your applications. This
                establishes faster and more reliable software relays so your
                team can focus on innovation and deliver value to your
                customers.
              </p>
            </div>

            {/* Containerization & Orchestration */}
            <div
              className="flex-1 bg-[#FFFFFF] rounded-[1.25rem] w-full xl:w-141.5 p-4 xl:p-4.5 shadow-sm border border-gray-100"
              style={{
                boxShadow:
                  " 8px 8px 18px rgba(0, 0, 0, 0.1),1px 1px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-[#000000] mb-4 xl:mb-6 mt-2 xl:mt-2.5">
                Containerization
                <br />& Orchestration
              </h4>
              <p className="text-sm sm:text-base lg:text-base xl:text-base font-normal text-[#444444] leading-relaxed text-justify">
                Take advantage of containerization with container orchestration
                platforms like Docker and Kubernetes. We help you contain your
                applications, effectively manage your contained environment, and
                ensure scalability and portability.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-5 xl:max-w-6xl">
            {/* Infrastructure as Code */}
            <div
              className="flex-1 bg-[#FFFFFF] rounded-[1.25rem] w-full xl:w-141.5 p-4 xl:p-4.5 shadow-sm border border-gray-100"
              style={{
                boxShadow:
                  " 8px 8px 18px rgba(0, 0, 0, 0.1),1px 1px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-[#000000] mb-4 xl:mb-6 mt-2 xl:mt-2.5">
                Infrastructure
                <br />
                as Code
              </h4>
              <p className="text-sm sm:text-base lg:text-base xl:text-base font-normal text-[#444444] leading-relaxed text-justify">
                Leverage infrastructure automation with our Infrastructure as
                Code (IaC) solution. We define and manage your infrastructure
                programmatically using tools like Terraform and Ansible,
                ensuring consistent deployment, vibration control and rapid
                scalability.
              </p>
            </div>

            {/* Monitoring & Analytics */}
            <div
              className="flex-1 bg-[#FFFFFF] rounded-[1.25rem] w-full xl:w-141.5 p-4 xl:p-4.5 shadow-sm border border-gray-100"
              style={{
                boxShadow:
                  " 8px 8px 18px rgba(0, 0, 0, 0.1),1px 1px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 className="text-lg sm:text-xl lg:text-2xl xl:text-2xl font-semibold text-[#000000] mb-4 xl:mb-6 mt-2 xl:mt-2.5">
                Monitoring
                <br />& Analytics
              </h4>
              <p className="text-sm sm:text-base lg:text-base xl:text-base font-normal text-[#444444] leading-relaxed text-justify">
                Gain insight into application performance and health with our
                monitoring and analytics solutions. deploy powerful monitoring
                tools and set up proactive alerts to quickly identify and
                resolve issues and ensure optimal application performance and
                user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
