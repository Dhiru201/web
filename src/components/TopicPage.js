import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../styles/TopicPage.css';

const TopicPage = ({ topics }) => {
  const { topicId } = useParams();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      setActiveSection(hash);
    } else if (topics[topicId]?.subtopics.length > 0) {
      setActiveSection(topics[topicId].subtopics[0].id);
    }
  }, [location.hash, topicId, topics]);

  const handleTopicClick = (topicId) => {
    setActiveSection(topicId);
  };

  const topic = topics[topicId];
  if (!topic) return <div>Topic not found</div>;

  return (
    <div className="topic-container">
      <aside className="side-menu">
        <h3>{topic.title} Topics</h3>
        <ul className="topic-list">
          {topic.subtopics.map((subtopic) => (
            <li key={subtopic.id} className={activeSection === subtopic.id ? 'active' : ''}>
              <a href={`#${subtopic.id}`} onClick={() => handleTopicClick(subtopic.id)}>
                {subtopic.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="topic-content">
        {topic.subtopics.map((subtopic) => (
          <section
            key={subtopic.id}
            id={subtopic.id}
            className={`topic-section ${activeSection === subtopic.id ? 'active' : ''}`}
          >
            <h2>{subtopic.title}</h2>
            <div className="content">
              {subtopic.content}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default TopicPage; 