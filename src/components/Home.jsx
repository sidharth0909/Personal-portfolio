import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';

const Home = () => {
  const { isDarkMode, activeSection } = useTheme();

  // Only render if this is the active section
  if (activeSection !== 'home') return null;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white text-black">
              Sidharth Saholiya
            </h1>
            <h2 className="text-2xl md:text-4xl mb-8 dark:text-gray-300 text-gray-700">
              Data Scientist
            </h2>
            <p className="text-lg md:text-xl dark:text-gray-400 text-gray-600 mb-8">
              {HERO_CONTENT}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmRsdDFmeXQzeG02bmlma213aGU2bTZxZDNpcGFkNmU2anVwYnRtMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zMukICnMEZmSf8zvXd/giphy.gif"
              alt="Coding"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;