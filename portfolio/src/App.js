import React from "react";
import Typical from "react-typical";
import {
  SiDjango,
  SiTensorflow,
  SiPycharm,
  SiFlask,
  SiPandas,
  SiKeras,
  SiTypescript,
  SiNumpy,
  SiOpencv,
  SiMongodb,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

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

import restaurantReccomender from "./images/restaurant-recommender.png";
import worldHappinessVisualization from "./images/world-happiness-visualization.png";

function App() {
  // Define your data
  const techStack = [
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { name: "Python", icon: <FaPython />, url: "https://www.python.org/doc/" },
    { name: "Java", icon: <FaJava />, url: "https://docs.oracle.com/en/java/" },
    { name: "R", icon: <FaRProject />, url: "https://www.rdocumentation.org/" },
    {
      name: "Django",
      icon: <SiDjango />,
      url: "https://docs.djangoproject.com/en/stable/",
    }, // Django with custom icon
    {
      name: "PyTorch",
      icon: <FaFire />,
      url: "https://pytorch.org/docs/stable/index.html",
    }, // PyTorch added
    { name: "NumPy", icon: <SiNumpy />, url: "https://numpy.org/doc/" },
    { name: "JSON", icon: <FaFileCode />, url: "https://www.json.org/" }, // JSON added
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      url: "https://www.typescriptlang.org/docs/",
    }, // TypeScript added
    {
      name: "C",
      icon: <FaCuttlefish />,
      url: "https://en.cppreference.com/w/c/language",
    }, // C added
    {
      name: "C++",
      icon: <CgCPlusPlus />,
      url: "https://en.cppreference.com/w/cpp",
    }, // C++ added
    {
      name: "React",
      icon: <FaReact />,
      url: "https://reactjs.org/docs/getting-started.html",
    }, // React added
    {
      name: "Flask",
      icon: <SiFlask />,
      url: "https://flask.palletsprojects.com/en/2.0.x/",
    },
    {
      name: "VSCode",
      icon: <FaCode />,
      url: "https://code.visualstudio.com/docs",
    }, // VSCode added
    { name: "Docker", icon: <FaDocker />, url: "https://docs.docker.com/" },
    { name: "MongoDB", icon: <SiMongodb />, url: "https://docs.mongodb.com/" },
    { name: "Git", icon: <FaGitAlt />, url: "https://git-scm.com/doc" }, // Git added
    {
      name: "TensorFlow",
      icon: <SiTensorflow />,
      url: "https://www.tensorflow.org/guide",
    }, // TensorFlow added
    {
      name: "Opencv",
      icon: <SiOpencv />,
      url: "https://docs.opencv.org/master/",
    },
    { name: "Keras", icon: <SiKeras />, url: "https://keras.io/" }, // Keras added
    {
      name: "Pandas",
      icon: <SiPandas />,
      url: "https://pandas.pydata.org/docs/",
    }, // Pandas added
    {
      name: "GANs",
      icon: <FaDiceD20 />,
      url: "https://en.wikipedia.org/wiki/Generative_adversarial_network",
    }, // GANs added
    {
      name: "PyCharm",
      icon: <SiPycharm />,
      url: "https://www.jetbrains.com/pycharm/documentation/",
    },
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
    { name: "Data Structures", number: "CS 225" },
    { name: "Artificial Intelligence", number: "CS 440" },
    { name: "Database Systems", number: "CS 411" },
    { name: "Statistics & Probability 1", number: "STAT 400" },
    { name: "Statistical Modeling", number: "STAT 425" },
    { name: "Discrete Structures", number: "CS 173" },
    { name: "Data Science Discovery", number: "CS 107" },
    { name: "Computer Systems", number: "CS 340" },
    { name: "Software Design Lab", number: "CS 222" },
    { name: "Programming Methodologies in C++", number: "CS 128" },
  ];

  const projects = [
    {
      title: "Restaurant Recommender",
      description:
        "Created a full-stack web application to help users simplify the decision of where to eat. This application was built with KMeans clustering to find the most highly regarded restaurants based on the user's cuisine preferences using the Geolocate API and Google Places API.",
      techUsed: ["React.js", "Flask", "TypeScript", "MongoDB", "Google OAuth"],
      link: "https://github.com/snehasund/restaurant-recommender",
      image: restaurantReccomender,
    },
    {
      title: "World Happiness Visualization",
      description:
        "Utilizing R, conducted data cleaning and preparation for the World Happiness Report dataset. Visualized happiness scores and their distribution across regions using bar charts and density curves created with ggplot2, effectively communicating key insights through visualizations.",
      techUsed: ["RStudio"],
      link: "https://github.com/snehasund/world-happiness-visualization",
      image: worldHappinessVisualization,
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
          <h2>Tech Stack</h2>
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <a href={tech.url} target="_blank" rel="noopener noreferrer">
                  {React.cloneElement(tech.icon, {
                    size: 32,
                    color: "darkgreen",
                  })}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Current Projects Section */}
      <section className="section">
        <h2>Current Projects</h2>
        <div className="project-card-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-content">
                <h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "darkgreen" }}
                  >
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
                <p>
                  <strong>Tech used:</strong> {project.techUsed.join(", ")}
                </p>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Coursework Section */}
      <section className="section">
        <h2>Relevant Coursework</h2>
        <div className="coursework-container">
          {coursework.map((course, index) => (
            <div
              className="course-card"
              key={index}
              data-number={course.number}
            >
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
