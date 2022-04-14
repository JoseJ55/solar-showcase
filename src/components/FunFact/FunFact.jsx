import React, { useState, useRef, useEffect } from 'react';
import "./style.css";

function FunFact({ data }) {
    // const [isVisible, setIsVisible] = useState(true);
    // const domRef = useRef();

    // useEffect(() => {
    //     const observer = new IntersectionObserver(enties => {
    //         enties.forEach(entry => {
    //             setIsVisible(entry.isIntersecting)}
    //             )
    //     })
    //     observer.observe(domRef.current)
    //     return () => observer.unobserve(domRef.current);
    // }, [])

  return (
    <div 

        // className={`funfact-info funFact-fade-in ${isVisible ? "funfact-fade-in-visiable" : ""}`} 
        className="funfact-info"
        // ref={domRef}
    >
        {data?.gifs ? 
            <div className='funfact-info-body'>
                <div className='funfact-info-body-fact'>
                    <h3>Fun Fact</h3>
                    <p>{data.funFact}</p>
                </div>
                <img src={window.location.origin + data.gifs[0]} alt="gif" />
            </div>: 
            <p className='funfact-info-p'>{data.funFact}</p>
        }
    </div>
  )
}

export default FunFact