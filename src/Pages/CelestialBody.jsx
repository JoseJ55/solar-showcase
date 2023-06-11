import React, { useState } from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Canvas from '../components/ThreeComponent/Body/Canvas';

import FunFact from '../components/FunFact/FunFact';
import History from '../components/History/History';

function CelestialBody({ data, offset }) {
    let navigate = useNavigate();

  return (
    <div className='celestialBody'>
        <div className='celestialBody-back' onClick={() => navigate("/")}>
            <IoMdArrowBack className='celestialBody-back-icon' />
        </div>

        <div className='celestialBody-background'>
            <Canvas name={data.name} />
        </div>
        
        {/* <div className='celestialBody-title'>
            <h1>{data.name}</h1>
        </div>

        <div className='celestialBody-mainImage'>
            <img src={window.location.origin + data.images[0]} alt="plant/sun" className="celestialBody-mainImage-image" />
        </div> */}

        <div className='empty-space'></div>

        <FunFact data={data} />
        <History data={data} />
    </div>
  )
}

export default CelestialBody