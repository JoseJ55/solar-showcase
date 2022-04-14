import React from 'react';
import "./style.css";

function Article({ article }) {
  return (
    <div className="news-section">
        <h2>{article.title}</h2>
        <h3>by. {article.author}</h3>
        <div className='news-section-info'>
            <div className='new-section-info-image' style={{backgroundImage: `url(${article.urlToImage})`}}></div>
            <p>{article.description}</p>
        </div>
        <p className='news-section-link'><a href={`${article.url}`}>View Full Article</a></p>
    </div>
  )
}

export default Article