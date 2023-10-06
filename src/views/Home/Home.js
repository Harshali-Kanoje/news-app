import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Home.css'
import NewsArticle from '../../component/NewsArticle/NewsArticle';

const Home = () => {

    const [news , setNews] = useState([]);
    const [searchnews , setSearchnews] = useState('pune');
    
        const loadNews = async () => {
            try{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchnews}&from=2023-10-05&to=2023-10-05&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
            setNews(response.data.articles);
            }
            catch(e) {
            console.log(e)
            }
        }
       

    useEffect(() => {
        loadNews()
    },[])

    useEffect(() => {
        loadNews()
    },[searchnews])

  return (
    <div>
        <input type='text' value={searchnews} onChange={(e) => {
            setSearchnews(e.target.value)
        }}/>
      {
        news.map((newsdata , index) => {
            const {title , description , urlToImage ,publishedAt , url} = newsdata;
            return(
               <NewsArticle title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} index={index}/>
            )
            
        })
      }
    </div>
  )
}

export default Home
