import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import { useState } from 'react';

const About = () => {
  const { isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold mb-12 text-center ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2JzdmE4bGE5bG5vY3dkZjh1a2I3Z3M0eHI0ZW1pMmpiODZ4dnppdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FoVzfcqCDSb7zCynOp/giphy.gif"
              alt="About"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className={`md:w-1/2 text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <p className="mb-4">
              {isExpanded ? ABOUT_TEXT : `${ABOUT_TEXT.substring(0, 200)}...`}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`font-semibold hover:underline ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;