import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/index';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Slideshow from './components/slideshow';
import About from './components/about';
import Contact from './components/contact';
import Prediction from './components/prediction'; // Importing Prediction component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/slideshow" element={<Slideshow />} />
        <Route path="/prediction" element={<Prediction />} /> {/* New Prediction Route */}
      </Routes>
    </Router>
  );
};

export default App;
