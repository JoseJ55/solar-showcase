import React, { useEffect, useState } from 'react';
import "./style.css";
import axios from 'axios';


import Article from '../Article/Article';

function News() {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    // b1ecafc71a4042b8b555038fe5f4f051
    axios.get("https://newsapi.org/v2/everything?q=space&apiKey=b1ecafc71a4042b8b555038fe5f4f051")
    .then((res) => {
      // console.log(res.data.articles)
      setNewsData([
        res.data.articles[0],
        res.data.articles[1],
        res.data.articles[2]
      ])
    })
    .catch((err) => console.log(err.response.data))
  }, [])

  return (
    <div id="news">
        {/* <Article />
        <Article />
        <Article /> */}
        {newsData.map((article, key) => (
          <Article article={article} key={key} />
        ))}
    </div>
  )
}

export default News