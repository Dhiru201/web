import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import IOSCorePage from './components/iOSCorePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#about" element={<Home />} />
          <Route path="/#contact" element={<Home />} />
          <Route path="/ios-core" element={<IOSCorePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
