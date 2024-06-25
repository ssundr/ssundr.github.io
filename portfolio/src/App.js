import React from "react";
import Typical from "react-typical";
import { SiDjango, SiTensorflow, SiPycharm, SiFlask, SiPandas, SiKeras, SiTypescript, SiNumpy, SiOpencv} from 'react-icons/si';
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaRProject,
  FaFire,
  FaFileCode,
  FaReact,
  FaCode,
  FaGitAlt,
  FaCuttlefish,
  FaDiceD20,
  FaDocker,
} from "react-icons/fa";

import "./App.css"; // Import your CSS file for styling

// experiences company logos
import companyLogoX from "./logos/arrcus-logo.jpeg"; // Replace with actual image paths
import companyLogoY from "./logos/iprobe-logo.png"; // Replace with actual image paths

//prof pic
import profilePicture from "./images/profile-picture.png"; // Import your profile picture

function App() {
  // Define your data
  const techStack = [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "R", icon: <FaRProject /> },
    { name: "Django", icon: <SiDjango /> }, // Django with custom icon
    { name: "PyTorch", icon: <FaFire /> }, // PyTorch added
    { name: "NumPy", icon: <SiNumpy />}, 
    { name: "JSON", icon: <FaFileCode /> }, // JSON added
    { name: "TypeScript", icon: <SiTypescript /> }, // TypeScript added
    { name: "C/C++", icon: <FaCuttlefish /> }, // C added
    { name: "React", icon: <FaReact /> }, // React added
    { name: "Flask", icon: <SiFlask />},
    { name: "VSCode", icon: <FaCode /> }, // VSCode added
    { name: "Docker", icon: <FaDocker />}, 
    { name: "Git", icon: <FaGitAlt /> }, // Git added
    { name: "TensorFlow", icon: <SiTensorflow /> }, // TensorFlow added
    { name: "Opencv", icon: <SiOpencv />},
    { name: "Keras", icon: <SiKeras /> }, // Keras added
    { name: "Pandas", icon: <SiPandas /> }, // Pandas added
    { name: "GANs", icon: <FaDiceD20 /> }, // GANs added
    { name: "PyCharm", icon: <SiPycharm />}
  ];

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Company X",
      date: "Summer 2023",
      description:
        "Worked on front-end development and collaborated with a team to build a web application.",
      logo: companyLogoX,
    },
    {
      title: "Data Analysis Intern",
      company: "Data Analytics Firm Y",
      date: "Spring 2023",
      description:
        "Utilized statistical methods and programming languages to analyze data and generate insights.",
      logo: companyLogoY,
    },
  ];

  const coursework = [
    "Data Structures",
    "Algorithms",
    "Machine Learning",
    "Database Systems",
    "Statistics",
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Created a responsive portfolio website using HTML, CSS, JavaScript, and React.",
      techUsed: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://www.yourportfolio.com",
    },
    {
      title: "Data Visualization Project",
      description:
        "Developed interactive visualizations of statistical data using Python and JavaScript libraries.",
      techUsed: ["Python", "JavaScript", "D3.js", "Matplotlib"],
      link: "https://www.datavisualizationproject.com",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h1>
          <Typical
            steps={[
              "W",
              100,
              "We",
              100,
              "Wel",
              100,
              "Welc",
              100,
              "Welco",
              100,
              "Welcom",
              100,
              "Welcome",
              100,
              "Welcome ",
              100,
              "Welcome t",
              100,
              "Welcome to",
              100,
              "Welcome to ",
              100,
              "Welcome to m",
              100,
              "Welcome to my",
              100,
              "Welcome to my ",
              100,
              "Welcome to my p",
              100,
              "Welcome to my po",
              100,
              "Welcome to my por",
              100,
              "Welcome to my port",
              100,
              "Welcome to my portf",
              100,
              "Welcome to my portfo",
              100,
              "Welcome to my portfol",
              100,
              "Welcome to my portfoli",
              100,
              "Welcome to my portfolio",
              100,
              "Welcome to my portfolio ",
              100,
              "Welcome to my portfolio w",
              100,
              "Welcome to my portfolio we",
              100,
              "Welcome to my portfolio web",
              100,
              "Welcome to my portfolio webs",
              100,
              "Welcome to my portfolio websi",
              100,
              "Welcome to my portfolio websit",
              100,
              "Welcome to my portfolio website",
              100,
              "Welcome to my portfolio website ",
              100,
              "Welcome to my portfolio website :",
              100,
              "Welcome to my portfolio website :)",
              1000,
              "I",
              100,
              "It",
              100,
              "It'",
              100,
              "It's",
              100,
              "It's ",
              100,
              "It's g",
              100,
              "It's gr",
              100,
              "It's gre",
              100,
              "It's grea",
              100,
              "It's great",
              100,
              "It's great ",
              100,
              "It's great t",
              100,
              "It's great to",
              100,
              "It's great to ",
              100,
              "It's great to h",
              100,
              "It's great to ha",
              100,
              "It's great to hav",
              100,
              "It's great to have",
              100,
              "It's great to have ",
              100,
              "It's great to have y",
              100,
              "It's great to have yo",
              100,
              "It's great to have you",
              100,
              "It's great to have you ",
              100,
              "It's great to have you h",
              100,
              "It's great to have you he",
              100,
              "It's great to have you her",
              100,
              "It's great to have you here",
              100,
              "It's great to have you here!",
              1000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </h1>
        <p>Computer Science & Statistics Major at the University of Illinois</p>
        <p>I love nature and the color green</p>
      </header>

      {/* Tech Stack Section */}
      <section className="section">
        <div>
          <h1>Tech Stack</h1>
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="section">
        <h2>Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="card">
            <img
              src={experience.logo}
              alt={`${experience.company} Logo`}
              className="logo"
            />
            <div>
              <h3>{experience.title}</h3>
              <p className="company">
                {experience.company} -{" "}
                <span className="date">{experience.date}</span>
              </p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Relevant Coursework Section */}
      <section className="section">
        <h2>Relevant Coursework</h2>
        <ul>
          {coursework.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      {/* Current Projects Section */}
      <section className="section">
        <h2>Current Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech used:</strong> {project.techUsed.join(", ")}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
