import { motion } from "framer-motion";

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

const Education = () => {
  return ( <section id="education" className="pt-20">

  
    <div className="border-b border-neutral-900 pb-8">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-5xl font-bold"
      >
        Education
      </motion.h2>
      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="flex flex-col md:flex-row items-center bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-purple-500">{edu.period}</h3>
              <h4 className="text-xl text-white mt-2">{edu.degree}</h4>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <h5 className="text-lg font-medium text-neutral-400">{edu.institution}</h5>
              <p className="mt-3 text-neutral-300">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Education;
