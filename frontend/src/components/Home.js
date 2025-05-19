import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Slideshow from './slideshow';  // Importing Slideshow component
import Prediction from './prediction';  // Importing your existing Prediction component
import '../home.css'; // Import styles

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo"></div>
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/register">Signup</Link></li>
                </ul>
            </nav>

            {/* Home Page Content */}
            <header className="hero">
                <h1>Welcome to Farmers Market Portal</h1>
                <p>Helping new farmers understand the market.</p>
            </header>

            {/* Slideshow Component */}
            <Slideshow />  

            {/* Render Prediction Component Below */}
            <div>
                <Prediction />  {/* This will render your prediction form below the slideshow */}
            </div>

            {/* Render Nested Routes */}
            <Outlet />
        </div>
    );
};

export default Home;
