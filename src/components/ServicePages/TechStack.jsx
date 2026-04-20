"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

/* ================================
   TECHNOLOGY DATA
================================ */

const TECH_LAYERS = [
  {
    id: "01",
    title: "Infrastructure & Reliability",
    description:
      "Scalable and secure cloud infrastructure to ensure high availability and performance.",
    tech: [
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Azure", icon: "/icons/azure.svg" },
      { name: "Google Cloud", icon: "/icons/gcp.svg" },
      { name: "Vercel", icon: "/icons/kubernetes.svg" },
      { name: "Hostinger", icon: "/icons/terraform.svg" },
      { name: "GoDaddy", icon: "/icons/terraform.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
      { name: "Terraform", icon: "/icons/terraform.svg" },
    ],
  },
  {
    id: "02",
    title: "Backend & Distributed Data",
    description:
      "Robust backend systems and distributed data architecture for enterprise-grade applications.",
    tech: [
      { name: "Java", icon: "/icons/java.svg" },
      { name: ".NET", icon: "/icons/dotnet.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Go", icon: "/icons/go.svg" },
      { name: "Spring Boot", icon: "/icons/spring.svg" },
      { name: "MySQL", icon: "/icons/postgresql.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Redis", icon: "/icons/redis.svg" },
      { name: "Kafka", icon: "/icons/kafka.svg" },
    ],
  },
  {
    id: "03",
    title: "Frontend & Applications",
    description:
      "Modern UI frameworks and mobile technologies for seamless user experiences.",
    tech: [
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Angular", icon: "/icons/angular.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Flutter", icon: "/icons/flutter.svg" },
      { name: "React Native", icon: "/icons/reactnative.svg" },
      { name: "Kotlin", icon: "/icons/flutter.svg" },
      { name: "Swift", icon: "/icons/reactnative.svg" },
      { name: "HTML", icon: "/icons/flutter.svg" },
      { name: "CSS", icon: "/icons/reactnative.svg" },
    ],
  },
  {
    id: "04",
    title: "AI & Intelligence",
    description:
      "AI-powered systems and data intelligence to drive smarter business decisions.",
    tech: [
      { name: "GPT", icon: "/icons/gpt.svg" },
      { name: "Claude", icon: "/icons/claude.svg" },
      { name: "Llama", icon: "/icons/llama.svg" },
      { name: "PyTorch", icon: "/icons/pytorch.svg" },
      { name: "LangChain", icon: "/icons/langchain.svg" },
      { name: "OpenCV", icon: "/icons/opencv.svg" },
      { name: "Pinecone", icon: "/icons/pinecone.svg" },
      { name: "Chroma", icon: "/icons/pinecone.svg" },
    ],
  },
];

/* ================================
   COMPONENT
================================ */

export default function TechStack() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-poppins font-bold px-4 py-2 rounded-full bg-[#F8F7F4] text-sm text-[#F15A24]">
            <Settings className="w-4 h-4 text-[#F15A24]" />
            Technology Stack
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#162560] mt-5">
            A Layered{" "}
            <span className="text-[#E84B27]">Engineering Architecture</span>
          </h2>

          <p className="text-gray-500 font-poppins max-w-2xl mx-auto mt-4">
            We design scalable, secure, and high-performance software systems
            using modern technologies across infrastructure, backend, frontend,
            and AI layers.
          </p>
        </div>

        {/* Layers */}

        <div className="space-y-8">
          {TECH_LAYERS.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F8F7F4] border border-gray-200 rounded-2xl p-8 hover:border-[#F15A24] hover:shadow-lg transition"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Layer Info */}

                <div>
                  <div className="text-[#E84B27] font-poppins text-sm uppercase tracking-widest mb-2">
                    Layer {layer.id}
                  </div>

                  <h3 className="text-xl font-poppins font-semibold text-[#162560] mb-3">
                    {layer.title}
                  </h3>

                  <p className="text-gray-600 font-poppins text-sm">
                    {layer.description}
                  </p>
                </div>

                {/* Technologies */}

                <div className="lg:col-span-2 flex flex-wrap gap-5">
                  {layer.tech.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-200 hover:border-[#162560] hover:shadow-md transition"
                    >
                      {/* <img
                        src={tech.icon}
                        alt={tech.name}
                        loading="lazy"
                        className="w-5 h-5"
                      /> */}

                      <Settings className="w-7 h-7 text-[#162560]" />

                      <span className="text-sm font-poppins text-gray-700">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
