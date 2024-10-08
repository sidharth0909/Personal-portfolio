import { RiReactjsLine } from "react-icons/ri";   // React.js icon
import { SiPython } from "react-icons/si";        // Python icon
import { SiDjango } from "react-icons/si";        // Django icon
import { SiPostgresql } from "react-icons/si";    // SQL/PostgreSQL icon
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technology = () => {
  return (
    <section id="technology" className="pt-20" >

    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView= {{opacity: 1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration: 1.5}}
      className="my-10 text-center text-4xl font-bold">
        Technology
      </motion.h2>
      <motion.div 
      whileInView= {{opacity: 1, x:0}}
      initial={{opacity:0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4 mt-20">
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          >
          <RiReactjsLine className="text-7xl text-cyan-400" /> {/* Cyan for React */}
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Python"
          >
          <SiPython className="text-7xl text-yellow-500" /> {/* Yellow for Python */}
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Django"
          >
          <SiDjango className="text-7xl text-green-500" /> {/* Green for Django */}
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="PostgreSQL"
          >
          <SiPostgresql className="text-7xl text-blue-500" /> {/* Blue for PostgreSQL */}
        </motion.div>
      </motion.div>
    </div>
  </section>
  );
};

export default Technology;
