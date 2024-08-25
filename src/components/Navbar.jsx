import logo from "../assets/assets/Sidlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl"> {/* Corrected typo in className */}
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

//Here i have added the links to my social media accounts and also added the logo to the navbar.