import React from 'react';

import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiPytorch, SiMongodb} from "react-icons/si";
import { SiJupyter } from "react-icons/si";


import {
  SiDjango,
  SiTensorflow,
  SiFlask,
  SiPandas,
  SiKeras,
  SiTypescript,
  SiNumpy,
  SiMysql
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
import AnimatedArrow from './AnimatedArrow';

// prof pic
import profilePicture from "./images/profile-picture.png";

// project images
import restaurantReccomender from "./images/restaurant-recommender.png";
import worldHappinessVisualization from "./images/world-happiness-visualization.png";
import summarizer from "./images/summarizer.png";
import generatedFaces from "./images/generated-faces.png";

// resume
import resume from "./files/sneha_sundar_cv.pdf";

// company logos
import arrcus from "./images/arrcus_logo.png";
import siebel from "./images/siebelcds_logo.png"
import lab_logo from "./images/lab_logo.png"
import houston from "./images/uhouston.png"

function App() {
  
    
  const techStack = [
    {
      name: "JavaScript",
      type: "language",
      icon: <FaJsSquare size={28} color="#F7DF1E" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML",
      type: "language",
      icon: <FaHtml5 size={28} color="#E34F26" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      type: "language",
      icon: <FaCss3Alt size={28} color="#1572B6" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Python",
      type: "language",
      icon: <FaPython size={28} color="#3776AB" />,
      url: "https://www.python.org/doc/",
    },
    {
      name: "Java",
      type: "language",
      icon: <FaJava size={28} color="#007396" />,
      url: "https://docs.oracle.com/en/java/",
    },
    {
      name: "R",
      type: "language",
      icon: <FaRProject size={28} color="#276DC3" />,
      url: "https://www.rdocumentation.org/",
    },
    {
      name: "PyTorch",
      type: "technology",
      icon: <FaFire size={28} color="#EE4C2C" />,
      url: "https://pytorch.org/docs/stable/index.html",
    },
    {
      name: "NumPy",
      type: "technology",
      icon: <SiNumpy size={28} color="#013243" />,
      url: "https://numpy.org/doc/",
    },
    {
      name: "TypeScript",
      type: "language",
      icon: <SiTypescript size={28} color="#3178C6" />,
      url: "https://www.typescriptlang.org/docs/",
    },
    {
      name: "C++",
      type: "language",
      icon: <CgCPlusPlus size={28} color="#00599C" />,
      url: "https://en.cppreference.com/w/cpp",
    },
    {
      name: "SQL",
      type: "language",
      icon: <SiMysql size={28} color="#4479A1" />,
      url: "https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16",
    },
    {
      name: "React",
      type: "framework",
      icon: <FaReact size={28} color="#61DAFB" />,
      url: "https://reactjs.org/docs/getting-started.html",
    },
    {
      name: "Django",
      type: "framework",
      icon: <SiDjango size={28} color="#092E20" />,
      url: "https://docs.djangoproject.com/en/stable/",
    },
    {
      name: "Git",
      type: "technology",
      icon: <FaGitAlt size={28} color="#F05032" />,
      url: "https://git-scm.com/doc",
    },
    {
      name: "TensorFlow",
      type: "technology",
      icon: <SiTensorflow size={28} color="#FF6F00" />,
      url: "https://www.tensorflow.org/guide",
    },
    {
      name: "Keras",
      type: "technology",
      icon: <SiKeras size={28} color="#D00000" />,
      url: "https://keras.io/",
    },
    {
      name: "Flask",
      type: "framework",
      icon: <SiFlask size={28} color="#000000" />,
      url: "https://flask.palletsprojects.com/en/2.0.x/",
    },
    {
      name: "Pandas",
      type: "technology",
      icon: <SiPandas size={28} color="#150458" />,
      url: "https://pandas.pydata.org/docs/",
    },
    {
      name: "VSCode",
      type: "technology",
      icon: <FaCode size={28} color="#007ACC" />,
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
    {
      name: 'Algorithms & Models of Computation',
      number: "CS 374"
    },
    {
      name: "Computational Social Science",
      number: "CS 498"
    }
  ]; 

  const experiences = [
    {
      company: "Arrcus", 
      logo: arrcus, 
      role: "Software Engineer Intern",
      time: "Summer 2024"
    },
    {
      company: "University of Illinois",
      logo: siebel, 
      role: "Course Assistant (Data Science Discovery",
      time: "Spring 2024 - Present"
    },
    {
      company: "Language Interaction Lab",
      logo: lab_logo, 
      role: "Research Assistant",
      time: "Fall 2024 - Present"
    },
    {
      company: "University of Houston",
      logo: houston, 
      role: "Undergraduate Researcher",
      time: "Summer 2025"
    }
  ];

  const projects = [
    {
      title: "Face Generator",
      description: "Built a GAN to generate faces based on the CelebA dataset.",
      techUsed: ["PyTorch", "Matplotlib", "Python", "Jupyter"],
      techUsedIcons: [
        <a
          key="pytorch"
          href="https://pytorch.org/docs/stable/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <SiPytorch size={28} color="#EE4C2C" />
        </a>,
        <a
          key="matplotlib"
          href="https://matplotlib.org/stable/contents.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/matplotlib.png"
            alt="Matplotlib"
            style={{ width: '2em', height: '2em' }}
          />
        </a>,
        <a
          key="python"
          href="https://www.python.org/doc/"
          target="_blank"
          rel="noreferrer"
        >
          <FaPython size={28} color="#3776AB" />
        </a>,
        <a
          key="jupyter"
          href="https://jupyter.org/documentation"
          target="_blank"
          rel="noreferrer"
        >
          <SiJupyter size={28} color="#F37626" />
        </a>,
      ],
      link: "https://github.com/snehasund/generated-faces",
      image: generatedFaces,
    },
    {
      title: "Restaurant Recommender",
      description:
        "Created a full-stack web application to help users simplify the decision of where to eat. This application was built with KMeans clustering to find the most highly regarded restaurants based on the user's cuisine preferences using the Geolocate API and Google Places API.",
      techUsed: ["Python", "React", "Flask", "TypeScript", "MongoDB", "Google Cloud"],
      techUsedIcons: [
        <a
          key="python"
          href="https://www.python.org/doc/"
          target="_blank"
          rel="noreferrer"
        >
          <FaPython size={28} color="#3776AB" />
        </a>,
        <a
          key="react"
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noreferrer"
        >
          <FaReact size={28} color="#61DAFB" />
        </a>,
        <a
          key="flask"
          href="https://flask.palletsprojects.com/en/2.0.x/"
          target="_blank"
          rel="noreferrer"
        >
          <SiFlask size={28} color="#000000" />
        </a>,
        <a
          key="typescript"
          href="https://www.typescriptlang.org/docs/"
          target="_blank"
          rel="noreferrer"
        >
          <SiTypescript size={28} color="#3178C6" />
        </a>,
        <a
          key="mongodb"
          href="https://docs.mongodb.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SiMongodb size={28} color="#47A248" />
        </a>,
        <a
          key="google-cloud"
          href="https://cloud.google.com/docs"
          target="_blank"
          rel="noreferrer"
        >
          <DiGoogleCloudPlatform size={28} color="#4285F4" />
        </a>,
      ],
      link: "https://github.com/snehasund/restaurant-recommender",
      image: restaurantReccomender,
    },
    {
      title: "World Happiness Visualization",
      description:
        "Utilizing R, conducted data cleaning and preparation for the World Happiness Report dataset. Visualized happiness scores and their distribution across regions using bar charts and density curves created with ggplot2, effectively communicating key insights through visualizations.",
      techUsed: ["RStudio", "React", "CSS"],
      techUsedIcons: [
        <a
          key="rstudio"
          href="https://posit.co/download/rstudio-desktop/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/rstudio.png"
            alt="RStudio"
            style={{ width: '2em', height: '2em' }}
          />
        </a>,
        <a
          key="react"
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noreferrer"
        >
          <FaReact size={28} color="#61DAFB" />
        </a>,
        <a
          key="css"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          <FaCss3Alt size={28} color="#1572B6" />
        </a>,
      ],
      link: "https://github.com/snehasund/world-happiness-visualization",
      image: worldHappinessVisualization,
    },
    {
      title: "Long Texts & Websites Summarizer",
      description:
        "Summarizes web-pages (like wikipedia sites) & long texts to save users' time and provide them with concise information.",
      techUsed: ["Flask", "NLTK", "Python", "HTML", "CSS"],
      techUsedIcons: [
        <a
          key="flask"
          href="https://flask.palletsprojects.com/en/2.0.x/"
          target="_blank"
          rel="noreferrer"
        >
          <SiFlask size={28} color="#000000" />
        </a>,
        <a
          key="nltk"
          href="https://www.nltk.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/nltk.png"
            alt="NLTK"
            style={{ width: '2.6em', height: '2.6em' }}
          />
        </a>,
        <a
          key="python"
          href="https://www.python.org/doc/"
          target="_blank"
          rel="noreferrer"
        >
          <FaPython size={28} color="#3776AB" />
        </a>,
        <a
          key="html"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          rel="noreferrer"
        >
          <FaHtml5 size={28} color="#E34F26" />
        </a>,
        <a
          key="css"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          <FaCss3Alt size={28} color="#1572B6" />
        </a>,
      ],
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

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-name">Sneha Sundar</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="mailto:snehas9@illinois.edu">Contact Me</a>
        </div>
      </nav>


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
                    "Hi! I'm Sneha :)",
                    "Welcome to my website!",
                  ]}
                  typeSpeed={100}
                  loop
                  backSpeed={50}
                  cursorChar="|"
                  showCursor={true}
                />
              </h1>
            </div>
            <h7 className="bio" style={{marginBottom: 15}}>currently, i am...</h7>
            <div className="bioBullets">
            <li>studying computer science and statistics at the  
              University of Illinois at Urbana-Champaign</li>
             <li>working on an  
               NSF-funded project in data-centric privacy at the University of Houston with{' '}
              <a style={{color: "darkgreen", fontWeight: "bold"}} href="https://www.ece.uh.edu/faculty/leiss" target="_blank" rel="noopener noreferrer">
                 Dr. Ernst Leiss.
              </a>
            </li>
            </div>
            <div className="button-container">
              <a href={resume} download className="download-btn">
          <img
            src="/resume.png"
            alt="resume"
            style={{ width: '2.2em', height: '2.2em'}}
          />
        </a>
              <a
                href="https://github.com/snehasund"
                className="download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} color="#171515" />
              </a>
              <a
                href="https://linkedin.com/in/ssundar11"
                className="download-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} color="#0A66C2" />
              </a>
              <a href="mailto:snehas9@illinois.edu" className="download-btn">
              <FaEnvelope size={32} color="#D44638" />
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
      <section id="projects" className="section">
        <h2>Projects and Experience</h2>
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
                <p className="tech-icons">
                    {project.techUsedIcons.map((icon, i) => (
                      <span key={i} className="tech-icon">
                        {icon}
                      </span>
                    ))}
                </p>
                </p>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
          ))}

          {/* past projects */}
          <div className="project-card">
            <div className="card-content">
              <h3>More Projects</h3>
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

        <div className="experiences-container">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className={
                  index === 0 || index === 2
                    ? "experience-logo large-logo"
                    : "experience-logo"
                }
              />
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
              <i><p>{exp.time}</p></i>
            </div>
          ))}
        </div>


      </section>

      {/* tech stack */}
      <section className="section">
        <h2>My Most-Used Tech!</h2>
        <div class="boxes">
          <div className="tech-card">
            <h3>Programming Languages</h3>
            <div className="tech-stack languages">
              {techStack
                .filter((tech) => tech.type === "language")
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
                        })}
                      </div>
                      <div style={{ textAlign: "center" }}>{tech.name}</div>
                    </a>
                  </div>
                ))}
            </div>
          </div>

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
        <h2>Relevant Coursework</h2>
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
      href="https://www.linkedin.com/in/ssundar11"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin size={32} color="#0A66C2" />
    </a>
    <a href="mailto:snehas9@illinois.edu" aria-label="Email">
      <FaEnvelope size={32} color="#D44638" />
    </a>
    <a
      href="https://github.com/snehasund"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub size={32} color="#171515" />
    </a>
  </div>
</footer>
    </div>
  );
}

export default App;
