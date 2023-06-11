import React, { useState, useRef, useEffect, useContext } from 'react';
import "./style.css";
import { BodyContext } from '../../bodyContext';

function History({ data }) {
  const textRef = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const { setIsHistory, isFact, setIsFact } = useContext(BodyContext);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && !isFact) {
        setIsHistory(true);
        setIsFact(false);
        setIsVisible(true);
      } else if (!(top < windowHeight) || isFact) {
        setIsHistory(false);
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div ref={textRef} className='celestialBody-history'>
        {data.history.map((item, key) => (
            <p 
              key={key} 
              style={{ display: isVisible ? 'block' : 'none' }}
            >{item}</p>
        ))}
    </div>
  )
}

export default History