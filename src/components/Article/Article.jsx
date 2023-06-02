import React, { useEffect, useState, useRef } from 'react';
import "./style.css";

function Article({ article }) {
  const [isVisible, setIsVisible] = useState(false);

  const articleRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { top } = articleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className="news-section" ref={articleRef}>
      <div className="news-section-contain" style={{ display: isVisible ? 'flex' : 'none' }}>
        <h2>{article.title}</h2>
        <h3>by. {article.author}</h3>
        <div className='news-section-info'>
            <div className='new-section-info-image' style={{backgroundImage: `url(${article.urlToImage})`}}></div>
            <p>{article.description}</p>
        </div>
        <p className='news-section-link'><a href={`${article.url}`}>View Full Article</a></p>
      </div>
    </div>
  )
}

export default Article