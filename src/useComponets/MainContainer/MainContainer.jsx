import React from 'react';
import './MainContainer.css';

function MainContainer({ children }) {
  return (
    <div id='mainContainer'>
        {children}
    </div>
  )
}

export default MainContainer;