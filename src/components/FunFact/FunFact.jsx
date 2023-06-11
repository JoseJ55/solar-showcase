import React, { useState, useRef, useEffect, useContext } from 'react';
import "./style.css";
import { BodyContext } from '../../bodyContext';

function FunFact({ data }) {
    const textRef = useRef();

    const [isVisible, setIsVisible] = useState(false);

    const { setIsFact, setIsHistory, isHistory } = useContext(BodyContext);

    useEffect(() => {
        const handleScroll = () => {
          const { top, bottom } = textRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
    
          if (top < windowHeight && bottom > 0 && !isHistory) {
            setIsFact(true);
            setIsHistory(false);
            setIsVisible(true);
          } else if (!(top < windowHeight && bottom > 0) || isHistory) {
            setIsFact(false);
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [])

  return (
    <div 
        ref={textRef} 
        className="funfact-info"
    >
        <div className='funfact-info-body' >
            <div className='funfact-info-body-fact' style={{ display: isVisible ? 'block' : 'none' }}>
                <h3>Fun Fact</h3>
                <p>{data.funFact}</p>
            </div>
        </div>
    </div>
  )
}

export default FunFact