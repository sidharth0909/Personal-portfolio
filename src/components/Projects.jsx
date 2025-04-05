import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h2 className={`text-4xl font-bold mb-12 text-center ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-xl ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;