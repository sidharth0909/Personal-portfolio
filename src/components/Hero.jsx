import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section id="Home" className="mt-8"> {/* Added margin top for spacing */}
      <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
          {/* Left Content (Text) */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white mt-12"
              >
                Sidharth Saholiya
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent "
              >
                Data Scientist
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter text-white text-center lg:text-left"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>

          {/* Right Content (GIF) */}
          <div className="w-full lg:w-1/2 lg:p-8 mt-12">
            <div className="flex justify-center lg:justify-end items-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src="https://media0.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif"
                alt="Coding GIF"
                className="max-w-xs lg:max-w-md rounded-lg shadow-lg" // Adjusted size and added rounded corners
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
