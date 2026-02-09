"use client";

const reasons = [
  {
    title: "Expertise in Diverse Industries:",
    description:
      "Mindefy has extensive experience working with clients across a wide range of industries. Our team has deep knowledge and understanding of industry-specific challenges and opportunities, enabling us to provide tailored solutions that address your unique needs. Whether you operate in healthcare, finance, retail, or any other sector, we have the expertise to deliver results-driven digital transformation strategies.",
  },
  {
    title: "Holistic Approach",
    description:
      "At Mindefy, we take a holistic approach to digital transformation. We go beyond implementing technology solutions by considering the entire ecosystem of your business. Our team examines your processes, people, and technology landscape to identify areas for improvement and develop comprehensive strategies that drive holistic transformation. We focus on optimizing your operations, enhancing customer experiences, and unlocking new revenue streams.",
  },
  {
    title: "Customer-Centric Solutions",
    description:
      "We believe in putting our clients at the center of everything we do. Our team takes the time to understand your unique business requirements, challenges, and goals. We then tailor our solutions to meet your specific needs, ensuring that we deliver tangible value and measurable outcomes. With Mindefy, you can expect personalized attention and solutions that align with your vision and objectives.",
  },
  {
    title: "Strong Technological Expertise",
    description:
      "Mindefy stays ahead of the curve when it comes to technology trends and advancements. Our team is well-versed in the latest technologies and industry best practices. We leverage cutting-edge tools, platforms, and frameworks to create innovative solutions that drive digital transformation. With our strong technological expertise, we ensure that you are equipped with the most effective and future-proof solutions for your business.",
  },
  {
    title: "Agile and Collaborative Approach",
    description:
      "We embrace an agile methodology that emphasizes flexibility, collaboration, and iterative development. Our team works closely with you, ensuring constant communication and feedback throughout the project lifecycle. We believe in fostering a collaborative partnership, where your insights and ideas are valued. This approach allows us to deliver solutions that not only meet your requirements but also exceed your expectations.",
  },
  {
    title: "Emphasis on User Experience",
    description:
      "Mindefy understands the significance of user experience (UX) in digital transformation. We prioritize creating intuitive, seamless, and engaging user experiences for your customers, employees, and stakeholders. Our team employs user-centered design principles and conducts extensive usability testing to ensure that our solutions are user-friendly, visually appealing, and drive user adoption. .",
  },
  {
    title: "Commitment to Quality and Timely Delivery",
    description:
      "At Mindefy, we are committed to delivering high-quality solutions within the agreed timelines. Our rigorous quality assurance processes, testing methodologies, and project management practices ensure that your project is executed efficiently and with the utmost attention to detail.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Mindefy aims to build long-lasting partnerships with our clients. We view each engagement as a long-term relationship and are invested in your success. Our team provides ongoing support, maintenance, and continuous improvement services to ensure that your digital transformation initiatives remain effective and adaptable as your business evolves. With Mindefy, you gain a strategic partner dedicated to your growth and success.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="mt-16 lg:mt-28 mb-10 lg:mb-20 px-4 sm:px-6 lg:px-0">
      <div className="max-w-290 mx-auto">
        <div className="text-center mb-6 lg:mb-7">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000]">
            What Sets Mindefy Apart and Why Choose Us?
          </h2>
        </div>
        <div className="mb-8 lg:mb-15">
          <p className="mb-4 lg:mb-7 font-normal text-base lg:text-lg text-[#444444]">
            Mindefy offers an unrivaled USP as a Service-Based Product
            Development Company. Our key differentiator lies in treating your
            projects with the same passion and dedication as our own products,
            resulting in a holistic vision and innovative solutions. With a
            quality-centric mindset and a proven track record, we reduce
            time-to-market and enhance product value, all while fostering a
            collaborative partnership with you.
          </p>
          <p className="font-semibold text-base lg:text-lg w-full lg:w-[57.93rem] text-center mx-auto">
            Experience the power of our expertise, as we execute your projects
            with precision and drive, surpassing your goals and propelling your
            success to new heights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-3 max-w-290 mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-[#F0F0FF] rounded-2xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[22.31rem]"
            >
              <h3 className="text-lg sm:text-lg lg:text-2xl font-semibold text-[#000000] mb-4 lg:mb-6">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base text-[#444444] leading-relaxed text-justify">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
