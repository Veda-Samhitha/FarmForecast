// src/components/Contact.js

import React from 'react';
import '../contact.css'; // Importing the CSS file from src folder

const Contact = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">
                    <h2>Farmers Market</h2>
                </div>
                <ul className="nav-links">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/register">Signup</a></li>
                </ul>
            </nav>

            {/* Page Header */}
            <header className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Reach out to We Care Home Services for inquiries and collaborations.</p>
                </div>
            </header>

            {/* Contact Information */}
            <section className="contact-info" style={{ marginTop: "80px" }}>
                <div className="container">
                    <div className="info-box">
                        <h3>Hyderabad Location</h3>
                        <p>Kamkole, Hyderabad, Telangana.</p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-form">
                <div className="container">
                    <p>
                        Thank you for your interest in <strong>Farmers Market Portal</strong>! We appreciate your inquiries and are eager to assist you.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="contact-details">
                            <h3>Contact Us</h3>
                            <p><a href="tel:+918309094140">+91-8309-094-140</a></p>
                            <p><a href="mailto:peddireddyvedasamhitha@gmail.com">peddireddyvedasamhitha@gmail.com</a></p>
                        </div> 
                    </div>
                </div>
            </footer>

            {/* Scroll to Top */}
            <a id="scrollTop" className="scroll-to" href="#top" onClick={(e) => e.preventDefault()}>
                <i className="icon-chevron-up"></i>
            </a>

        </>
    );
};

export default Contact;
