import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../styles/TopicPage.css';

const TopicPage = () => {
  const { topicId } = useParams();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [topicData, setTopicData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        setTopicData(data[topicId]);
      })
      .catch(error => console.error('Error loading topic data:', error));
  }, [topicId]);

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      setActiveSection(hash);
    } else if (topicData?.subtopics.length > 0) {
      setActiveSection(topicData.subtopics[0].id);
    }
  }, [location.hash, topicId, topicData]);

  const handleTopicClick = (topicId) => {
    setActiveSection(topicId);
  };

  if (!topicData) return <div>Loading...</div>;

  return (
    <div className="topic-container">
      <aside className="side-menu">
        <h3>{topicData.title} Topics</h3>
        <ul className="topic-list">
          {topicData.subtopics.map((subtopic) => (
            <li key={subtopic.id} className={activeSection === subtopic.id ? 'active' : ''}>
              <a href={`#${subtopic.id}`} onClick={() => handleTopicClick(subtopic.id)}>
                {subtopic.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="topic-content">
        {topicData.subtopics.map((subtopic) => (
          <section
            key={subtopic.id}
            id={subtopic.id}
            className={`topic-section ${activeSection === subtopic.id ? 'active' : ''}`}
          >
            <h2>{subtopic.title}</h2>
            <div className="content">
              <p className="introduction">{subtopic.content.introduction}</p>
              
              <h3>Key Concepts</h3>
              <ul>
                {subtopic.content.keyConcepts.map((concept, index) => (
                  <li key={index}>{concept}</li>
                ))}
              </ul>

              <h3>Details</h3>
              {Object.entries(subtopic.content.details).map(([key, detail]) => (
                <div key={key} className="detail-section">
                  <h4>{detail.title}</h4>
                  <p>{detail.description}</p>
                  {detail.examples && (
                    <div>
                      <h5>Examples:</h5>
                      <ul>
                        {detail.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {detail.pros && (
                    <div>
                      <h5>Pros:</h5>
                      <ul>
                        {detail.pros.map((pro, index) => (
                          <li key={index}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {detail.cons && (
                    <div>
                      <h5>Cons:</h5>
                      <ul>
                        {detail.cons.map((con, index) => (
                          <li key={index}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {detail.operations && (
                    <div>
                      <h5>Operations:</h5>
                      <ul>
                        {Object.entries(detail.operations).map(([op, complexity]) => (
                          <li key={op}>{op}: {complexity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default TopicPage; 