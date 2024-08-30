import React, { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // State to control expanded experience

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle between expanding and collapsing
  };

  return (
    <section id="experience" className="pt-20">
      <div className="border-b border-neutral-900 pb-8">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl font-bold"
        >
          Experience
        </motion.h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center mt-20"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">
                  {/* Toggle description based on the state */}
                  {expandedIndex === index
                    ? experience.description
                    : `${experience.description.substring(0, 100)}...`} {/* Adjust the substring length as needed */}
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-cyan-500 hover:underline ml-2"
                  >
                    {expandedIndex === index ? "Show Less" : "Read More"} {/* Toggle button text */}
                  </button>
                </p>
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
