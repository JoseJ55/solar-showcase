import React from 'react';
import "./style.css";

import Canvas from '../ThreeComponent/Header/Canvas';

function Header() {
  return (
    <div id="header">
      <Canvas />
        <div id="header-title">
            <span>Explore</span>
            <span>Our</span>
            <span>System</span>
        </div>
    </div>
  )
}

export default Header