import React from 'react';
import "./style.css";

import Article from '../Article/Article';

function News() {
  return (
    <div id="news">
        <Article />
        <Article />
        <Article />
    </div>
  )
}

export default News