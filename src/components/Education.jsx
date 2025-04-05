import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';

const Education = () => {
  const { isDarkMode } = useTheme();
  const educationData = [
    {
      period: "2017 - 2019",
      degree: "SSC",
      institution: "Poorna Prajna High School",
      description: "Focused on Science and Mathematics. Participated in various science fairs and Mathematics competitions.",
    },
    {
      period: "2019 - 2021",
      degree: "HSC",
      institution: "TP bhatia College of Science and Technology",
      description: "Specialized in Electronics. Throughout the course I understood Chemistry, Physics and Mathematics.",
    },
    {
      period: "2021 - Present",
      degree: "BE IT",
      institution: "Atharva College of Engineering",
      description: "Currently pursuing a Bachelor's degree with a focus on Information Technology. Working on projects like Machine Learning, Deep Learning and Data Analytics.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h2 className={`text-4xl font-bold mb-12 text-center ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
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
                    {edu.degree}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.institution}
                  </p>
                </div>
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.period}
                </span>
              </div>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;