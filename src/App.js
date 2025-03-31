import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#topics" element={<Home />} />
          <Route path="/#about" element={<Home />} />
          <Route path="/#contact" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
