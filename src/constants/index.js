import project1 from "../assets/assets/projects/Pro-1.png";
import project2 from "../assets/assets/projects/pro-2.png";
import project3 from "../assets/assets/projects/project-3.jpg";
import project4 from "../assets/assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am here to help you to derived insights from your data and make data-driven decisions.With a keen eye for detail and a passion for problem-solving, I turn complex data into clear, strategic solutions that empower you to achieve your goals.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Data Scientist with a passion for creating efficient and impactful data-driven solutions. With around 14 months of experience in project management and as a Subject Matter Expert (SME), I have honed my ability to build effective models and deliver results that align with business goals. My expertise spans front-end technologies like React and back-end technologies such as MySQL and Django. Outside of my work in data science, I enjoy staying active, exploring new technologies, and contributing to innovative projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - August 2024",
    role: "Machine Learning  Intern",
    company: "The Encryptix.",
    description: `I developed two major projects using NLTK (Natural Language Toolkit) focused on SMS Spam Detection and Movie Genre Prediction. These projects involved learning and implementing key concepts like TF-IDF, Stemmer, Punkt, and the Multinomial Naive Bayes model. I contributed these projects to open-source platforms like Kaggle and maintained a dedicated GitHub repository for ongoing development and collaboration.`,
    technologies: ["Python", "NLTK", "TF-IDF", "Naive Bayes"],
  },
  {
    year: "June 2024 - July 2024",
    role: "Data Science and Business Analyst Intern",
    company: "The Spark Foundation",
    description: `I successfully developed and implemented various data science models, including Linear Regression and Logistic Regression, to solve complex problems using supervised machine learning algorithms. I gained extensive hands-on experience in business analytics, applying data-driven methodologies to support decision-making processes and deliver actionable business insights and solutions..`,
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    year: "May 2023 - Jan 2024",
    role: "Project Management Intern",
    company: "Brainheaters",
    description: `I successfully led a team in content creation, social media management, and community engagement throughout the entire product lifecycle. I managed and expanded a community of over 75,000 students across 385 engineering colleges. Additionally, I created study materials and educational videos on AI, Machine Learning, and other computer science subjects to support and engage this large student community.`,
    technologies: ["Clickup", "Slack", "Jibble", "AI"],
  },
  {
    year: "April 2023 - Feb 2024",
    role: "Data Science Subject Matter Expert",
    company: "Transcurators- the content factory",
    description: `I created personalized Data Science-based questions focused on statistical analysis and machine learning algorithms for various organizations. I reviewed and validated content to ensure accuracy and appropriate difficulty levels, ensuring that it met the specific needs of each organization. Additionally, I effectively communicated with stakeholders to understand their requirements, consistently delivering projects on time and within budget.`,
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
  },
];

export const PROJECTS = [
  {
    title: "Disaster Classification",
    image: project1,
    description:
      "The Disaster Classification website lets users upload images to identify natural disasters. Using CNN algorithms, the system analyzes the image and classifies the type of disaster, such as hurricanes, wildfires, or floods.",
    technologies: [ "Python", "TensorFlow", "Django"],
  },
  {
    title: "Engineering Books (Currently in Development)",
    image: project2,
    description:
      "The Engineering Book app provides users with free access to a vast collection of engineering textbooks in PDF format. With an easy-to-use interface, users can quickly search for and download textbooks across various engineering disciplines.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Dahisar (East), Mumbai, India ",
  phoneNo: "+91 8451089128 ",
  email: "sidharthsaholiya@gmail.com",
  cvUrl: "https://drive.google.com/file/d/1qYYHuYivBZ7gRnFvm27M67EZLMtljuiq/view?usp=sharing"
};
