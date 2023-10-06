import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {

    const [news , setNews] = useState([]);
     
    const loadNews = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=chatgpt&from=2023-10-05&to=2023-10-05&sortBy=popularity&apiKey=38e30714bb0441c6bba633fd737cb88c`)
      setNews(response.data.articles);
    }

    useEffect(() => {
        loadNews()
    },[])

  return (
    <div>
      {
        news.map((newsdata , index) => {
            const {title , description , urlToImage ,publishedAt , url} = newsdata;
            return(
                <div key={index}>
                    <div className='newsdetails' >
                    <img src={urlToImage}/>
                   <p>{title}</p>
                    </div>
                 
                </div>
            )
            
        })
      }
    </div>
  )
}

export default Home
