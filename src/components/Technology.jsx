import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';
import { SiPython, SiDjango, SiPostgresql, SiReact } from 'react-icons/si';

const Technology = () => {
  const { isDarkMode } = useTheme();

  const technologies = [
    { icon: <SiReact />, name: 'React' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg flex flex-col items-center ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
              }`}
            >
              <span className={`text-6xl mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {tech.icon}
              </span>
              <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;