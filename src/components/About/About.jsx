import React, { useEffect } from 'react';
import "./style.css";

function About() {
    useEffect(() => {
        
    }, [])

  return (
    <div id="about">
        <div id="about-section">
            <div id="about-section-about">
                <div id="about-section-title">
                    <h1>Welcome to Our Home</h1>
                    <div id="about-section-title-lines"></div>
                </div>
                <p id="about-section-info">Take a journey around the solar systems and learn thing along the way. As you visit every body in out solar system learn more on every planet and the how unique they are.</p>

            </div>

            <div id="about-section-planet">
                <div id="about-section-planet-image"></div>
                <p>Learn about the planets and what they are about. Learn interesting facts and waht make each on unique.</p>    
            </div>

            <div id="about-section-other">
                <p>Learn about other entities in the space. Where and how to find them and the kind of fun and interesting bodies in space that we can view or image.</p>
                <div id="about-section-other-image"></div>
            </div>
        </div>
    </div>
  )
}

export default About