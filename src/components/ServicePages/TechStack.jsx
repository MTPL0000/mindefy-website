"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { Chip } from "./ui";

export default function TechStack({ content }) {
  const layers = Array.isArray(content?.techLayers)
    ? content.techLayers
    : Array.isArray(content?.layers)
    ? content.layers
    : [];
  const badge = content?.badge || "";
  const headingPrefix = content?.headingPrefix || "";
  const headingHighlight = content?.headingHighlight || "";
  const description = content?.description || "";

  if (!layers.length) {
    return null;
  }

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Chip>
            <Settings className="w-4 h-4 text-[#F15A24] animate-spin-slow" />
            {badge}
          </Chip>

          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#162560] mt-5">
            {headingPrefix}
            <span className="text-[#E84B27]">{headingHighlight}</span>
          </h2>

          <p className="text-gray-500 font-poppins max-w-2xl mx-auto mt-4">
            {description}
          </p>
        </div>

        {/* Layers */}

        <div className="space-y-8">
          {layers.map((layer, index) => (
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
                  {(layer.tech || []).map((tech, i) => (
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
