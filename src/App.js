import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopicPage from './components/TopicPage';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ios-core" element={<TopicPage />} />
          <Route path="/system-design" element={<TopicPage />} />
          <Route path="/dsa" element={<TopicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
