import React, { useState } from "react";
// import aboutImg from "../assets/assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to control text expansion

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle the state on click
  };

  // Determine the text to display based on the state
  const displayText = isExpanded ? ABOUT_TEXT : `${ABOUT_TEXT.substring(0, 200)}...`; // Adjust length as needed

  return (
    <section id="about-me" className="border-b border-neutral-900 pb-20 pt-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-5xl font-bold"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src="https://c.tenor.com/GfSX-u7VGM4AAAAC/coding.gif" alt="About" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg leading-relaxed">
              {displayText} {/* Display the truncated or full text based on the state */}
              <button
                onClick={toggleText}
                className="text-cyan-500 hover:underline ml-2"
              >
                {isExpanded ? "Show Less" : "Read More"} {/* Toggle button text */}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
