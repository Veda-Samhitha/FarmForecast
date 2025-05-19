import React from 'react';
import './about.css';  // Note the updated import with capital 'A'

const About = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="about-navbar">
                <div className="about-logo">
                    <h2>Farmers Market</h2>
                </div>
                <ul className="about-nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/register">Signup</a></li> 
                </ul>
            </nav>

            {/* About Section */}
            <section className="about-container">
                <h1>About Farmers Market Portal</h1>
                <p>
                    The Farmers Market Portal is designed to empower farmers by providing essential data-driven insights. 
                    Our goal is to help farmers make <strong>informed decisions</strong> regarding crop sales, market trends, 
                    weather conditions, and disease control.
                </p>

                <div className="about-box">
                    <h2>📈 Future Crop Prices</h2>
                    <p>
                        Our platform predicts <strong>crop prices for the next 12 months</strong> using historical data, market trends, 
                        and advanced analytics. This helps farmers decide <strong>when to sell their produce for maximum profit</strong>. 
                        Understanding future prices reduces risks and allows for better financial planning.
                    </p>
                </div>

                <div className="about-box">
                    <h2>⛅ Weather Information</h2>
                    <p>
                        Weather conditions play a crucial role in farming. Our system provides real-time weather updates,
                        helping farmers <strong>plan their planting and harvesting schedules effectively</strong>. 
                    </p>
                </div>

                <div className="about-box">
                    <h2>🦠 Pesticide & Disease Control</h2>
                    <p>
                        Crop diseases can significantly affect yield. Our platform suggests <strong>the best pesticides to use</strong> 
                        based on the identified diseases in a region. By analyzing past outbreaks and environmental conditions, 
                        farmers receive <strong>recommendations on disease prevention and pest control</strong> to protect their crops.
                    </p>
                </div>

                <div className="about-box">
                    <h2>🌱 Sustainable Farming</h2>
                    <p>
                        We promote <strong>eco-friendly farming practices</strong> by guiding farmers on <strong>optimal fertilizer usage</strong>, 
                        soil health management, and sustainable agricultural techniques. By balancing productivity with 
                        environmental conservation, farmers can achieve long-term success.
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;
