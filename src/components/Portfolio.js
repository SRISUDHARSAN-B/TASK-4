// src/components/Portfolio.js
import React, { useState } from 'react';
import '../index.css'; // Import your CSS

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Header and Navigation */}
      <header>
        <nav>
          <div className="container">
            <h1>My Portfolio</h1>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="container">
          <h2>Welcome to My Portfolio</h2>
          <p>I am a web developer specializing in front-end and back-end development.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skill">
            <h3>HTML</h3>
            <div className="skill-bar">
              <div className="skill-progress html"></div>
            </div>
          </div>
          <div className="skill">
            <h3>CSS</h3>
            <div className="skill-bar">
              <div className="skill-progress css"></div>
            </div>
          </div>
          <div className="skill">
            <h3>JavaScript</h3>
            <div className="skill-bar">
              <div className="skill-progress js"></div>
            </div>
          </div>
          <div className="skill">
            <h3>React</h3>
            <div className="skill-bar">
              <div className="skill-progress react"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="project">
            <img
              src="https://images.playground.com/f6b7588178414befab6019b272813804.jpeg"
              alt="Project 1"
            />
            <h3>TIC TAC TOE GAME</h3>
          </div>
          <div className="project">
            <img
              src="https://images.playground.com/1b18389762964f048f2eef6f44944c60.jpeg"
              alt="Project 2"
            />
            <h3>WEATHER FORECASTING SYSTEM</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 My Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
