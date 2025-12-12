"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What if my idea isn’t fully defined? Can you help me shape it?",
    answer:
      "Definitely. Many of our projects start from early concepts or MVPs. Our product development services include strategy workshops and rapid prototyping to translate ideas into technical blueprints. If you’re building a digital product powered by AI, we help validate its market potential before writing a single line of code.",
  },
  {
    question: "Can I start small, like building an MVP and add AI later?",
    answer:
      "Yes, and it’s often the smarter approach. We frequently help startups and enterprises launch an MVP product development phase focused on core functionality, followed by iterative AI development once real user data is available. This minimizes risk and ensures the AI features are genuinely useful rather than theoretical.",
  },
  {
    question: "What does your typical project timeline look like?",
    answer:
      "It depends on complexity, data readiness, and integration scope. A proof-of-concept AI solution can take 4–6 weeks, while a full-scale custom software development or AI product might take 3–6 months. We provide detailed timelines and milestones before any engagement, keeping everything transparent from day one.",
  },
  {
    question: "Do you work with non-tech founders or enterprise teams only?",
    answer:
      "We work with both. Startups come to us to transform early ideas into products, while enterprises partner with us for digital product development or modernization. You don’t need technical knowledge to start. We’ll translate your vision into a clear product and AI development strategies.",
  },
  {
    question: "Can Mindefy build both the AI model and the product around it?",
    answer:
      "Yes. We specialize in AI product development; we design, engineer, and deploy them inside functional software products. Whether it’s a recommendation engine, computer vision system, or conversational AI tool, our team handles the full cycle: from custom AI development to UI, APIs, and infrastructure setup.",
  },
  {
    question:
      "How does Mindefy approach data privacy and security in AI projects?",
    answer:
      "Data is the backbone of any AI system, and we treat it like critical infrastructure. Every AI software development project at Mindefy follows strict compliance and security standards, including encryption, anonymization, and controlled data access. For enterprise clients, we align with GDPR and ISO guidelines to ensure privacy-by-design from the very first sprint.",
  },
  {
    question:
      "How do you maintain product quality during fast-paced development?",
    answer:
      "We use a test-driven and agile methodology with weekly sprints and quality gates. Continuous integration, peer reviews, and automated testing are part of every build. Whether it’s a mobile app, a SaaS platform, or an internal tool, quality assurance is baked into the process.",
  },
  {
    question:
      "Can I hire developers from Mindefy to work as part of my internal team?",
    answer:
      "Yes, we offer flexible engagement models. You can hire dedicated software developers to work exclusively on your project, fully integrated into your team. This gives you the control of an in-house setup with the cost efficiency and technical depth of an external partner.",
  },
  {
    question: "How flexible are your pricing models?",
    answer:
      "We work on fixed-price models for clearly defined scopes and time-and-material models for evolving projects. For ongoing partnerships, you can hire developers monthly or set up a dedicated product team that grows with your roadmap.",
  },
  {
    question: "What does the ideal client partnership look like to Mindefy?",
    answer:
      "We work best with teams that value collaboration and long-term growth. Whether you’re a founder building your first product or a digital team modernizing your stack, we see ourselves as an extension of your vision, providing not just developers, but a strategic technology partnership from planning to post-launch success.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 lg:px-10 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="tracking-widest text-[#FF5225] text-sm sm:text-base font-bold font-poppins mb-4 sm:mb-6 uppercase">
            FAQS
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2A2A2A] font-poppins leading-tight mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-sm md:text-base font-poppins font-normal text-[#444444] leading-relaxed">
            Find answers to common questions about our services and process
          </p>
        </div>

        {/* FAQ LIST */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="py-5 border-b border-[#BDBCBC]">
              <button
                className="w-full flex justify-between items-center text-left py-1 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-[#2A2A2A] font-poppins">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#2A2A2A] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-base text-[#444444] font-poppins leading-relaxed pr-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
