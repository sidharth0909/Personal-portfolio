import { ThemeProvider, useTheme } from './ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technology from './components/Technology';
import Education from './components/Education';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-black bg-white transition-colors duration-300">
        <Navbar />
        <ContentSwitcher />
      </div>
    </ThemeProvider>
  );
};

const ContentSwitcher = () => {
  const { activeSection } = useTheme();

  return (
    <main className="pt-16"> {/* Add padding for navbar */}
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'education' && <Education />}
      {activeSection === 'technology' && <Technology />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}
    </main>
  );
};

export default App;