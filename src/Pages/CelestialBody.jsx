import React, { useState, useEffect } from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Canvas from '../components/ThreeComponent/Body/Canvas';

import FunFact from '../components/FunFact/FunFact';
import History from '../components/History/History';

function CelestialBody({ data }) {
    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='celestialBody'>
        <div className='celestialBody-back' onClick={() => navigate("/")}>
            <IoMdArrowBack className='celestialBody-back-icon' />
        </div>

        <div className='celestialBody-background'>
            <Canvas name={data.name} />
        </div>

        <div className='empty-space'></div>

        <FunFact data={data} />
        <History data={data} />
    </div>
  )
}

export default CelestialBody