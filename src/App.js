import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopicPage from './components/TopicPage';
import { topics } from './data/topics';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ios-core" element={<TopicPage topics={topics} />} />
          <Route path="/system-design" element={<TopicPage topics={topics} />} />
          <Route path="/dsa" element={<TopicPage topics={topics} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
