import React, { useEffect, useState } from 'react';
import '../components/slideshow.css';

// Importing all images statically
import im1 from '../assets/im1.jpg';
import im2 from '../assets/im2.jpg';
import im3 from '../assets/im3.jpg';
import im4 from '../assets/im4.jpg';
import im5 from '../assets/im5.jpg';
import im6 from '../assets/im6.jpg';
import im7 from '../assets/im7.jpg';
import im8 from '../assets/im8.jpg';
import im9 from '../assets/im9.jpg';
import im10 from '../assets/im10.jpg';

const images = [im1, im2, im3, im4, im5, im6, im7, im8, im9, im10];

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const changeSlide = (n) => {
        setSlideIndex((prevIndex) => {
            let newIndex = (prevIndex + n + images.length) % images.length;
            return newIndex;
        });
    };

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <div className={`mySlides fade ${index === slideIndex ? "active-slide" : ""}`} key={index}>
                    {index === slideIndex && (
                        <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
                    )}
                </div>
            ))}

            {/* Next and previous buttons */}
            <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
            <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>

            {/* The dots/circles */}
            <div style={{ textAlign: 'center' }}>
                {images.map((_, index) => (
                    <span
                        className={`dot ${index === slideIndex ? 'active' : ''}`}
                        key={index}
                        onClick={() => setSlideIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
