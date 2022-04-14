import React, { useState, useRef, useEffect } from 'react';
import "./style.css";

function History({ data }) {
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
    <div className='celestialBody-history'>
        {data.history.map((item, key) => (
            <p 
                key={key} 
                // className={`celestialBody-fade-in ${isVisible ? "celestialBody-fade-in-visiable" : ""}`} 
                // ref={domRef}
            >{item}</p>
        ))}
    </div>
  )
}

export default History