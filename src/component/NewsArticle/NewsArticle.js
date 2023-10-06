import React from 'react'
import './NewsArticle.css'

const NewsArticle = ({title , description , urlToImage ,publishedAt , url , index}) => {
  return (
    <div key={index}>
       <div className='newsdetails' >
                     <img src={urlToImage}/>
                     <p>{title}</p>
        </div>
    </div>
  )
}

export default NewsArticle
