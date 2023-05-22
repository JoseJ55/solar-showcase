import React from 'react';
import "./style.css";

import Canvas from '../ThreeComponent/Header/Canvas';

function Header() {
  return (
    <div id="header">
      <Canvas />
        <div id="header-title">
            Explore Our System
        </div>
    </div>
  )
}

export default Header