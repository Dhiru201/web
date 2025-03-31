import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faSitemap, faCode } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to My Learning Journey</h1>
          <p>Sharing knowledge, experiences, and insights from my learning adventures</p>
        </div>
      </header>

      <section className="topics-section">
        <h2>Learning Topics</h2>
        <div className="topics-grid">
          <Link to="/ios-core" className="topic-card">
            <FontAwesomeIcon icon={faMobileAlt} />
            <h3>iOS Core</h3>
            <p>Deep dive into iOS development fundamentals</p>
          </Link>
          <Link to="/system-design" className="topic-card">
            <FontAwesomeIcon icon={faSitemap} />
            <h3>System Design</h3>
            <p>iOS system architecture and design patterns</p>
          </Link>
          <Link to="/dsa" className="topic-card">
            <FontAwesomeIcon icon={faCode} />
            <h3>DSA</h3>
            <p>Data Structures and Algorithms</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 