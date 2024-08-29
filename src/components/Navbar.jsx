import logo from "../assets/assets/Sidlogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="m-8 flex items-center justify-center gap-8 text-lg"> {/* Added navigation links */}
        <a href="#Home" className="hover:text-cyan-400">Home</a>
        <a href="#about-me" className="hover:text-cyan-400">About Me</a>
        <a href="#education" className="hover:text-cyan-400">Education</a>
        <a href="#technology" className="hover:text-cyan-400">Technology</a>
        <a href="#experience" className="hover:text-cyan-400">Experience</a>
        <a href="#project" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Get in Touch</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sidharthsaholiya/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sidharth0909" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/Sidharth0909" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
        <a href="https://www.youtube.com/@sidharthsaholiya2622" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
