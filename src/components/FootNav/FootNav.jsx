import React from 'react';
import "./style.css";

function FootNav() {
  return (
    <div id="footer-nav">
        <h3>Navigation</h3>
        <div id='footer-nav-list'>
            <p><a href='/sun'>Sun</a></p>
            <p><a href='/mercury'>Mercury</a></p>
            <p><a href='/venus'>Venus</a></p>
            <p><a href='/earth'>Earth</a></p>
            <p><a href='/mars'>Mars</a></p>
            <p><a href='/jupiter'>Jupiter</a></p>
            <p><a href='/saturn'>Saturn</a></p>
            <p><a href='/neptune'>Neptune</a></p>
            <p><a href='/uranus'>Uranus</a></p>
        </div>
    </div>
  )
}

export default FootNav