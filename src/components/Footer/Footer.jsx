import React from 'react';
import "./style.css";

import FootContact from '../FootContact/FootContact';
import FootLinks from '../FootLinks/FootLinks';
import FootNav from '../FootNav/FootNav';

function Footer() {
  return (
    <div id="footer">
      <div id='footer-container'>
        <FootContact />
        <FootLinks />
        <FootNav />
      </div>
    </div>
  )
}

export default Footer