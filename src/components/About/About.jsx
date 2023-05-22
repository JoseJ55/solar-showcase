import React from 'react';
import "./style.css";

import AboutLeading from '../AboutLeading/AboutLeading';
import AboutEntities from '../AboutEntities/AboutEntities';
import AboutEnding from '../AboutEnding/AboutEnding';

function About() {

  return (
    <div id="about">
        <div id="about-section">
            <AboutLeading />
            <AboutEntities />
            <AboutEnding />
        </div>
    </div>
  )
}

export default About