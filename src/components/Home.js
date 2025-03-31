import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faSitemap, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Home.css';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add email sending functionality here
    alert('Message sent successfully!');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to My Learning Journey</h1>
          <p>Sharing knowledge, experiences, and insights from my learning adventures</p>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="topics-section">
        <h2>Learning Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <FontAwesomeIcon icon={faMobileAlt} />
            <h3>iOS Core</h3>
            <p>Deep dive into iOS development fundamentals</p>
          </div>
          <div className="topic-card">
            <FontAwesomeIcon icon={faSitemap} />
            <h3>System Design</h3>
            <p>iOS system architecture and design patterns</p>
          </div>
          <div className="topic-card">
            <FontAwesomeIcon icon={faCode} />
            <h3>DSA</h3>
            <p>Data Structures and Algorithms</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Hi, I'm Dhirendra! I'm a passionate software developer with expertise in iOS development
            and a strong foundation in computer science. I love building user-friendly applications
            and solving complex problems.
          </p>
          <div className="skills-section">
            <h3>Skills</h3>
            <ul>
              <li>iOS Development</li>
              <li>Swift & SwiftUI</li>
              <li>System Design</li>
              <li>Data Structures & Algorithms</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 