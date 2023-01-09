import React from 'react';
import "./style.css";

function System() {
  return (
    <div id="system">
        <a href='/sun'>
            <div id="sun"></div>
        </a>
        <a href="/mercury">
            <div id="mercury"></div>
        </a>
        <a href='/venus'>
            <div id="venus"></div>
        </a>
        <a href='/earth'>
            <div id="earth"></div>
        </a>
        <a href='/mars'>
            <div id="mars"></div>
        </a>
        <a href='/jupiter'>
            <div id="jupiter"></div>
        </a>
        <a href='/saturn'>
            <div id="saturn"></div>
        </a>
        <a href='/neptune'>
            <div id="neptune"></div>
        </a>
        <a href='/uranus'>
            <div id="uranus"></div>
        </a>
        {/* <div id="space"></div> */}
    </div>
  )
}

export default System