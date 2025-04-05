import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { useState } from 'react';

const Experience = () => {
  const { isDarkMode } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h2 className={`text-4xl font-bold mb-12 text-center ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Experience
        </h2>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`text-xl font-semibold ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>
                    {exp.role}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.company}
                  </p>
                </div>
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {exp.year}
                </span>
              </div>

              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {expandedIndex === index ? exp.description : `${exp.description.substring(0, 100)}...`}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode 
                        ? 'bg-gray-800 text-gray-300' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`mt-4 text-sm font-semibold ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
              >
                {expandedIndex === index ? 'Show Less' : 'Read More'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;