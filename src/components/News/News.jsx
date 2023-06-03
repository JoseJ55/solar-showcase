import React, { useEffect, useState } from 'react';
import "./style.css";
import axios from 'axios';


import Article from '../Article/Article';

function News() {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    const getData = async() => {
      try {
        const response = await axios.get("https://newsdata.io/api/1/news?apikey=pub_2392319d3c282660bc1b1fe5f0eda354607e6&q=outer%20space&country=us&language=en");
        console.log(response.data.results[0]);
        setNewsData([
          response.data.results[0],
          response.data.results[1],
          response.data.results[2],
          response.data.results[3]
        ]);
      } catch (error) {
        console.error(error);
      }
    }
    getData();

    // b1ecafc71a4042b8b555038fe5f4f051
    // axios.get("https://newsapi.org/v2/everything?q=space&apiKey=b1ecafc71a4042b8b555038fe5f4f051")
    // .then((res) => {
    //   setNewsData([
    //     res.data.articles[0],
    //     res.data.articles[1],
    //     res.data.articles[2]
    //   ])
    // })
    // .catch((err) => console.log(err.response.data))
  }, [])

  return (
    <div id="news">
        {newsData.map((article, key) => (
          <Article article={article} key={key} />
        ))}
    </div>
  )
}

export default News