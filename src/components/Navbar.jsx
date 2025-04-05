import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const { isDarkMode, toggleTheme, activeSection, setActiveSection } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'technology', label: 'Technology' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 dark:bg-black bg-white shadow-md`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:text-white text-black"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'dark:text-white text-black font-bold'
                    : 'dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden dark:text-white text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4 dark:bg-black bg-white"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-2 text-lg ${
                  activeSection === item.id
                    ? 'dark:text-white text-black font-bold'
                    : 'dark:text-gray-400 text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;