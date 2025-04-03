import React, { useState, useEffect } from 'react';
import '../styles/iOSCorePage.css';
import iosCoreData from '../data/iosCoreTopics.json';

const IOSCorePage = () => {
  const [selectedTopic, setSelectedTopic] = useState('closures');
  const [topics, setTopics] = useState([]);
  const [topicDetails, setTopicDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load topics list from main JSON file
    const { topics: loadedTopics } = iosCoreData;
    setTopics(loadedTopics);
    console.log('Loaded topics:', loadedTopics);
  }, []);

  useEffect(() => {
    // Load detailed content when topic changes
    const loadTopicDetails = async () => {
      setLoading(true);
      try {
        // Find the topic to get its file name
        const topic = topics.find(t => t.id === selectedTopic);
        if (!topic) {
          throw new Error(`Topic ${selectedTopic} not found`);
        }

        console.log('Loading topic:', topic);
        // Dynamically import the topic file
        const data = await import(`../data/iosCoreTopics/${topic.file}`);
        setTopicDetails(data.default);
        console.log('Loaded topic details:', data.default);
      } catch (error) {
        console.error('Error loading topic details:', error);
        setTopicDetails(null);
      }
      setLoading(false);
    };

    if (selectedTopic && topics.length > 0) {
      loadTopicDetails();
    }
  }, [selectedTopic, topics]);

  const handleTopicClick = (topicId) => {
    console.log('Topic clicked:', topicId);
    setSelectedTopic(topicId);
  };

  const renderContent = (content) => {
    // First, split the content by code blocks
    const parts = content.split(/(```[\s\S]*?```)/g);
    
    return parts.map((part, index) => {
      // Check if this part is a code block
      if (part.startsWith('```')) {
        // Extract the code content, handling both with and without language specifier
        const codeMatch = part.match(/```(?:swift)?\n?([\s\S]*?)```/);
        if (codeMatch) {
          return (
            <div key={index} className="code-block">
              <pre>
                <code>{codeMatch[1].trim()}</code>
              </pre>
            </div>
          );
        }
      }
      
      // For non-code parts, split into paragraphs and render
      return part.split('\n\n').map((paragraph, pIndex) => (
        <p key={`${index}-${pIndex}`}>{paragraph}</p>
      ));
    });
  };

  return (
    <div className="ios-core-page">
      <div className="sidebar">
        <h2>Topics</h2>
        <ul>
          {topics.map(topic => (
            <li
              key={topic.id}
              className={selectedTopic === topic.id ? 'active' : ''}
              onClick={() => handleTopicClick(topic.id)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="detail-section">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : topicDetails ? (
          <>
            <h1>{topicDetails.title}</h1>
            <div className="content">
              {topicDetails.sections.map((section, index) => (
                <div key={index} className="section">
                  <h2>{section.title}</h2>
                  {renderContent(section.content)}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Select a topic to view details</p>
        )}
      </div>
    </div>
  );
};

export default IOSCorePage; 