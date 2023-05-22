import React, { useEffect, useState } from 'react';
import './AboutEntities.css';

function AboutEntities() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { top } = document.getElementById('about-section-planet').getBoundingClientRect();
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
    <div id="about-section-planet">
        <div id="about-section-planet-image" style={{ display: isVisible ? 'block' : 'none' }}></div>
        <p style={{ display: isVisible ? 'block' : 'none' }}>Learn about the planets and what they are about. Learn interesting facts and waht make each on unique.</p>    
    </div>
  )
}

export default AboutEntities;