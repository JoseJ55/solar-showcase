import React, { useState } from 'react';
import "./style.css";

import NavbarLocation from '../NavbarLocation/NavbarLocation';

function Navbar() {
    const [close, setClose] = useState(true);

  return (
    <>
        {close ? 
            <div id="navbarClose">
                <input 
                    id='navbarClose-btn'
                    type="button" 
                    onClick={() => setClose(!close)} 
                    value="Explore" />
            </div> :
            <div id='navbarOpen'>
                <div id='navbarOpen-head'>
                    <input 
                        id='navbarOpen-head-btn'
                        type="button" 
                        onClick={() => setClose(!close)} 
                        value="Close" />
                </div>
                <div id="navbarOpen-body">
                    {/* <div>h</div> */}
                    <NavbarLocation />
                </div>
            </div>
        }
    </>
  )
}

export default Navbar