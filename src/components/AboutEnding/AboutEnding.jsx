import React, { useEffect, useState } from 'react';
import './AboutEnding.css';

function AboutEnding() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { top } = document.getElementById('about-section-other').getBoundingClientRect();
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
    <div id="about-section-other">
        <p style={{ display: isVisible ? 'block' : 'none' }}>Learn about other entities in the space. Where and how to find them and the kind of fun and interesting bodies in space that we can view or image.</p>
        <div id="about-section-other-image" style={{ display: isVisible ? 'block' : 'none' }}></div>
    </div>
  )
}

export default AboutEnding;