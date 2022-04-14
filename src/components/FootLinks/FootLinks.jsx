import React from 'react';
import "./style.css";

function FootLinks() {
  return (
    <div id="footer-links">
        <h3>Our favorite links</h3>
        <div id="footer-links-items">
            <p><a href="https://en.wikipedia.org/wiki/Main_Page" rel="noreferrer" target="_blank">Wikipedia</a></p>
            <p><a href="https://www.nasa.gov/" rel="noreferrer" target="_blank">Nasa</a></p>
            <p><a href="https://newsapi.org/" rel="noreferrer" target="_blank">News API</a></p>
        </div>
    </div>
  )
}

export default FootLinks