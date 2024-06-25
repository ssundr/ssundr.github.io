import React from 'react';
import Typical from 'react-typical';

import './App.css'; // Import your CSS file for styling

// experiences company logos
import companyLogoX from './logos/arrcus-logo.jpeg'; // Replace with actual image paths
import companyLogoY from './logos/iprobe-logo.png'; // Replace with actual image paths

function App() {
  // Define your data
  const techStack = [
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'R', icon: 'fab fa-r-project' },
  ];
  
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Tech Company X',
      date: 'Summer 2023',
      description: 'Worked on front-end development and collaborated with a team to build a web application.',
      logo: companyLogoX,
    },
    {
      title: 'Data Analysis Intern',
      company: 'Data Analytics Firm Y',
      date: 'Spring 2023',
      description: 'Utilized statistical methods and programming languages to analyze data and generate insights.',
      logo: companyLogoY,
    },
  ];
  
  const coursework = ['Data Structures', 'Algorithms', 'Machine Learning', 'Database Systems', 'Statistics'];

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Created a responsive portfolio website using HTML, CSS, JavaScript, and React.',
      techUsed: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: 'https://www.yourportfolio.com',
    },
    {
      title: 'Data Visualization Project',
      description: 'Developed interactive visualizations of statistical data using Python and JavaScript libraries.',
      techUsed: ['Python', 'JavaScript', 'D3.js', 'Matplotlib'],
      link: 'https://www.datavisualizationproject.com',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
      <h1>
      <Typical
        steps={['welcome to my portfolio website :)', 1000]}
        loop={Infinity}
        wrapper="span"
      />
    </h1>
        <p>Computer Science & Statistics Major at the University of Illinois</p>
        <p>Loves nature and the color green</p>
      </header>
      
      {/* Tech Stack Section */}
      <section className="section">
        <h2>Tech Stack</h2>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <i className={tech.icon}></i>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Experiences Section */}
      <section className="section">
        <h2>Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="card">
            <img src={experience.logo} alt={`${experience.company} Logo`} className="logo" />
            <div>
              <h3>{experience.title}</h3>
              <p className="company">{experience.company} - <span className="date">{experience.date}</span></p>
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
            <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
            <p>{project.description}</p>
            <p><strong>Tech used:</strong> {project.techUsed.join(', ')}</p>
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
