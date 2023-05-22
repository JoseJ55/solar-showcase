import React, { useEffect, useState } from 'react';
import './AboutLeading.css';

function AboutLeading() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { top } = document.getElementById('about-section-about').getBoundingClientRect();
            const windowHeight = window.innerHeight;
      
            if (top < windowHeight) {
              setIsVisible(true);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [])

  return (
    <div id="about-section-about" style={{ display: isVisible ? 'flex' : 'none' }}> 
        <div id="about-section-title">
            <h1>Welcome to Our Home</h1>
            <div id="about-section-title-lines"></div>
        </div>
        <p id="about-section-info" style={{ display: isVisible ? 'block' : 'none' }}>Take a journey around the solar systems and learn thing along the way. As you visit every body in out solar system learn more on every planet and the how unique they are.</p>
    </div>
  )
}

export default AboutLeading;