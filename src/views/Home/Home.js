import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Home.css'
import NewsArticle from '../../component/NewsArticle/NewsArticle';

const Home = () => {

  const [news, setNews] = useState([]);
  const [searchnews, setSearchnews] = useState('Nagpur');

  const loadNews = async () => {

    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchnews}&from=2023-10-05&to=2023-10-05&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
      setNews(response.data.articles);
      console.log(response.data.articles)
    }
    catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    loadNews()

  }, [])

  useEffect(() => {
    loadNews()
  }, [searchnews])

  return (
    <div>
      <div className='news-head'>
        <h1> Daily News</h1>
        <input type='text'
          value={searchnews}
          onChange={(e) => {
            setSearchnews(e.target.value)
          }}
          placeholder='Search Your News' />
      </div>

      <h1 className='text-center'>Top Search News Are Here : {searchnews}</h1>
      {/* <li onClick={handlesearch('india')}>Home</li> */}

      <div className='news-container'>
        {
          news.map((newsdata, index) => {
            const { title, description, urlToImage, publishedAt, url, author } = newsdata;
            return (
              <NewsArticle title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} index={index} author={author} />
            )

          })
        }
      </div>

    </div>
  )
}

export default Home
