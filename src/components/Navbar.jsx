import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const [activeSection, setActiveSection] = useState('Home'); // State to track active section

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle scroll spy
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Update to middle of the viewport

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-neutral-900 text-neutral-300 shadow-md">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop and Mobile Navigation Links */}
        <div className={`md:flex items-center justify-center gap-8 text-lg ${isMobileMenuOpen ? 'block' : 'hidden'} md:block bg-neutral-900 md:bg-transparent p-4 md:p-0 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto`}>
          <a href="#Home" onClick={handleLinkClick} className={`hover:text-cyan-400 block md:inline ${activeSection === 'Home' ? 'text-cyan-400' : 'text-gray-800'}`}>Home</a>
          <a href="#about-me" onClick={handleLinkClick} className={`hover:text-cyan-400 block md:inline ${activeSection === 'about-me' ? 'text-cyan-400' : 'text-gray-800'}`}>About Me</a>
          <a href="#education" onClick={handleLinkClick} className={`hover:text-cyan-400 block md:inline ${activeSection === 'education' ? 'text-cyan-400' : 'text-gray-800'}`}>Education</a>
          <a href="#technology" onClick={handleLinkClick} className={`hover:text-cyan-400 block md:inline ${activeSection === 'technology' ? 'text-cyan-400' : 'text-gray-800'}`}>Technology</a>
          <a href="#experience" onClick={handleLinkClick} className={`hover:text-cyan-400 block md:inline ${activeSection === 'experience' ? 'text-cyan-400' : 'text-gray-800'}`}>Experience</a>
          <a href="#project" onClick={handleLinkClick} className={`hover:text-cyan-400 block md:inline ${activeSection === 'project' ? 'text-cyan-400' : 'text-gray-800'}`}>Projects</a>
          <a href="#contact" onClick={handleLinkClick} className={`hover:text-cyan-400 block md:inline ${activeSection === 'contact' ? 'text-cyan-400' : 'text-gray-800'}`}>Get in Touch</a>
          
          {/* Social Media Icons for Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="flex items-center justify-center gap-4 text-2xl mt-4">
              <a href="https://www.linkedin.com/in/sidharthsaholiya/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:brightness-125 transition duration-300">
                <FaLinkedin />
              </a>
              <a href="https://github.com/sidharth0909" target="_blank" rel="noopener noreferrer" className="text-white hover:brightness-125 transition duration-300">
                <FaGithub />
              </a>
              <a href="https://x.com/Sidharth0909" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:brightness-125 transition duration-300">
                <FaTwitterSquare />
              </a>
              <a href="https://www.youtube.com/@sidharthsaholiya2622" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:brightness-125 transition duration-300">
                <FaYoutube />
              </a>
            </div>
          )}
        </div>

        {/* Social Media Icons for Desktop */}
        <div className="hidden md:flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/sidharthsaholiya/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:brightness-125 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sidharth0909" target="_blank" rel="noopener noreferrer" className="text-white hover:brightness-125 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://x.com/Sidharth0909" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:brightness-125 transition duration-300">
            <FaTwitterSquare />
          </a>
          <a href="https://www.youtube.com/@sidharthsaholiya2622" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:brightness-125 transition duration-300">
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
