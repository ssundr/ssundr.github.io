import React, { useState } from "react";
import { ReactTyped } from "react-typed";

import {
  SiDjango,
  SiTensorflow,
  SiFlask,
  SiPandas,
  SiKeras,
  SiTypescript,
  SiNumpy,
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
  FaReact,
  FaCode,
  FaGitAlt,
} from "react-icons/fa";

import "./App.css";

// prof pic
import profilePicture from "./images/profile-picture.jpeg";

// project images
import restaurantReccomender from "./images/restaurant-recommender.png";
import worldHappinessVisualization from "./images/world-happiness-visualization.png";
import summarizer from "./images/summarizer.png";
import generatedFaces from "./images/generated-faces.png";

// resume
import resume from "./files/sneha_sundar_cv.pdf";

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    {
      content:
        "I'm pursuing a Bachelor of Science in Statistics & Computer Science at the University of Illinois Urbana-Champaign.",
    },
    {
      content:
        "I'm currently working with Dr. Tal August at the Language Interaction Lab at UIUC, using natural language processing to analyze and quantify certainty levels in academic citations!",
    },
    {
      content:
        "Last summer, I was a SWE intern at Arrcus on their Customer Solutions Engineering Team.",
    },
  ];

  const techStack = [
    {
      name: "JavaScript",
      type: "language",
      icon: <FaJsSquare />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML",
      type: "language",
      icon: <FaHtml5 />,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      type: "language",
      icon: <FaCss3Alt />,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Python",
      type: "language",
      icon: <FaPython />,
      url: "https://www.python.org/doc/",
    },
    {
      name: "Java",
      type: "language",
      icon: <FaJava />,
      url: "https://docs.oracle.com/en/java/",
    },
    {
      name: "R",
      type: "language",
      icon: <FaRProject />,
      url: "https://www.rdocumentation.org/",
    },
    {
      name: "PyTorch",
      type: "technology",
      icon: <FaFire />,
      url: "https://pytorch.org/docs/stable/index.html",
    },
    {
      name: "NumPy",
      type: "technology",
      icon: <SiNumpy />,
      url: "https://numpy.org/doc/",
    },
    {
      name: "TypeScript",
      type: "language",
      icon: <SiTypescript />,
      url: "https://www.typescriptlang.org/docs/",
    },
    {
      name: "C++",
      type: "language",
      icon: <CgCPlusPlus />,
      url: "https://en.cppreference.com/w/cpp",
    },
    {
      name: "React",
      type: "framework",
      icon: <FaReact />,
      url: "https://reactjs.org/docs/getting-started.html",
    },
    {
      name: "Django",
      type: "framework",
      icon: <SiDjango />,
      url: "https://docs.djangoproject.com/en/stable/",
    },
    {
      name: "Git",
      type: "technology",
      icon: <FaGitAlt />,
      url: "https://git-scm.com/doc",
    },
    {
      name: "TensorFlow",
      type: "technology",
      icon: <SiTensorflow />,
      url: "https://www.tensorflow.org/guide",
    },
    {
      name: "Keras",
      type: "technology",
      icon: <SiKeras />,
      url: "https://keras.io/",
    },
    {
      name: "Flask",
      type: "framework",
      icon: <SiFlask />,
      url: "https://flask.palletsprojects.com/en/2.0.x/",
    },
    {
      name: "Pandas",
      type: "technology",
      icon: <SiPandas />,
      url: "https://pandas.pydata.org/docs/",
    },
    {
      name: "VSCode",
      type: "technology",
      icon: <FaCode />,
      url: "https://code.visualstudio.com/docs",
    },
  ];

  const coursework = [
    {
      name: "Data Structures",
      number: "CS 225",
      url: "https://cs.illinois.edu/academics/courses/cs225",
    },
    {
      name: "Artificial Intelligence",
      number: "CS 440",
      url: "https://cs.illinois.edu/academics/courses/cs440",
    },
    {
      name: "Database Systems",
      number: "CS 411",
      url: "https://cs.illinois.edu/academics/courses/cs411",
    },
    {
      name: "Statistics & Probability",
      number: "STAT 400 & STAT 410",
      url: "https://stat.illinois.edu/academics/courses/stat400",
    },
    {
      name: "Statistical Modeling",
      number: "STAT 425",
      url: "https://stat.illinois.edu/academics/courses/stat425",
    },
    {
      name: "Discrete Structures",
      number: "CS 173",
      url: "https://cs.illinois.edu/academics/courses/cs173",
    },
    {
      name: "Data Science Discovery",
      number: "CS 107",
      url: "https://cs.illinois.edu/academics/courses/cs107",
    },
    {
      name: "Computer Systems",
      number: "CS 340",
      url: "https://cs.illinois.edu/academics/courses/cs340",
    },
    {
      name: "Software Design Lab",
      number: "CS 222",
      url: "https://cs.illinois.edu/academics/courses/cs222",
    },
    {
      name: "Programming Methodologies in C++",
      number: "CS 128",
      url: "https://cs.illinois.edu/academics/courses/cs128",
    },
  ];

  const projects = [
    {
      title: "Face Generator",
      description: "Built a GAN to generate faces based on the CelebA dataset.",
      techUsed: ["PyTorch", "torchvision", "Matplotlib"],
      link: "https://github.com/snehasund/generated-faces",
      image: generatedFaces,
    },
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
    {
      title: "Long Texts & Websites Summarizer",
      description:
        "Summarizes web-pages (like wikipedia sites) & long texts to save users' time and provide them with concise information.",
      techUsed: ["Flask", "BeautifulSoup", "Natural Language Toolkit (NLTK)"],
      link: "https://github.com/snehasund/summarizer",
      image: summarizer,
    },
  ];

  const pastProjects = [
    {
      name: "Library Management System",
      link: "https://github.com/snehasund/library-management-system",
    },
    {
      name: "Heart Disease Risk Factors Analysis",
      link: "https://github.com/snehasund/heart-disease-analysis",
    },
    {
      name: "Evaluating the Effectiveness of a Symbolic Metamodel",
      link: "https://terra-docs.s3.us-east-2.amazonaws.com/IJHSR/Articles/volume5-issue2/IJHSR_2023_52_p116.pdf",
    },
    {
      name: "Playlist Generator (built with the Spotify API)",
      link: "https://github.com/snehasund/spotify-api-fun",
    },
  ];

  const nextCard = () => {
    setCurrentCard((currentCard + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((currentCard - 1 + cards.length) % cards.length);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="nav-name">Sneha Sundar</div>
        <div class="nav-icons">
          <a
            href="https://www.linkedin.com/in/sneha-sundar26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin white-icon larger-icon"></i>
          </a>
          <a href="mailto:snehas9@illinois.edu">
            <i className="far fa-envelope white-icon larger-icon"></i>
          </a>
          <a
            href="https://github.com/snehasund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github white-icon larger-icon"></i>
          </a>
        </div>
      </div>

      <header className="App-header">
        <div className="intro">
          <div className="left-text">
            <div class="profile-container">
              <img
                src={profilePicture}
                alt="Profile"
                className="profile-picture"
              />
              <h1 style={{ textAlign: "center" }}>
                <ReactTyped
                  strings={[
                    "Welcome to my portfolio website :)",
                    "It's great to have you here!",
                  ]}
                  typeSpeed={100}
                  loop
                  backSpeed={50}
                  cursorChar="|"
                  showCursor={true}
                />
              </h1>
            </div>
            <h2>
              Hi, I'm Sneha! I am a Statistics and Computer Science Major at the
              University of Illinois at Urbana-Champaign, graduating in May
              2026. I am currently working with{" "}
              <a style={{color: 'darkgreen'}} href="https://talaugust.github.io/" target="_blank">
                Dr. Tal August
              </a>{" "}
              at the Language Interaction Lab, using natural language processing
              to analyze and quantify certainty levels in academic citations.
              This research aims to enable comparative confidence analysis
              across different research domains.
            </h2>

            <div className="button-container">
              <a href={resume} download className="download-btn">
                Resume
              </a>
              <a
                href="https://github.com/snehasund"
                className="download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://linkedin.com/in/ssundar11"
                className="download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:snehamsundar@gmail.com" className="download-btn">
                Email
              </a>
            </div>
          </div>
          <div className="graph-node-container">
            <div className="node" data-node="NLP">
              Natural Language Processing
            </div>
            <div className="node" data-node="AI">
              Artificial Intelligence
            </div>
            <div className="node" data-node="Data Science">
              Human-Centered Computing
            </div>
            <div className="node" data-node="Machine Learning">
              Machine Learning
            </div>
            <div className="node" data-node="Research">
              Big Data Analytics
            </div>
          </div>
        </div>
      </header>

      {/* projects section */}
      <section className="section">
        <h2>My Favorite Projects</h2>
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

          {/* New card for past projects */}
          <div className="project-card">
            <div className="card-content">
              <h3>even more projects</h3>
              <ul>
                {pastProjects.map((project, index) => (
                  <li key={index}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "darkgreen" }}
                    >
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section">
        <h2>Some of my Most-Used Tech!</h2>
        <div class="boxes">
          {/* Languages Card */}
          <div className="tech-card">
            <h3>Programming Languages</h3>
            <div className="tech-stack languages">
              {techStack
                .filter((tech) => tech.type === "language") // Adjust the type filter as needed ("language", "framework", etc.)
                .map((tech, index) => (
                  <div key={index} className="tech-item">
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "green" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        {React.cloneElement(tech.icon, {
                          size: 32,
                          color: "#011f14",
                        })}
                      </div>
                      <div style={{ textAlign: "center" }}>{tech.name}</div>
                    </a>
                  </div>
                ))}
            </div>
          </div>

          {/* Frameworks and Technologies Card */}
          <div className="tech-card">
            <h3>Frameworks/Technologies</h3>
            <div className="tech-stack frameworks">
              {techStack
                .filter((tech) => tech.type !== "language")
                .map((tech, index) => (
                  <div key={index} className="tech-item">
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "green" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        {React.cloneElement(tech.icon, {
                          size: 32,
                          color: "#011f14",
                        })}
                      </div>
                      <div style={{ textAlign: "center" }}>{tech.name}</div>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* coursework section */}
      <section className="section">
        <h2>Relevant Classes</h2>
        <div className="coursework-container">
          {coursework.map((course, index) => (
            <div
              className="course-card"
              key={index}
              data-number={course.number}
            >
              <a>{course.name}</a>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="App-footer">
        <p>Connect with me!</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/sneha-sundar26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin black-icon larger-icon"></i>
          </a>
          <a href="mailto:snehamsundar@gmail.com">
            <i className="far fa-envelope black-icon larger-icon"></i>
          </a>
          <a
            href="https://github.com/snehasund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github black-icon larger-icon"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
