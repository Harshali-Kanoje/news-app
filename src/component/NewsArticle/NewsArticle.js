import React from 'react'
import './NewsArticle.css'

const NewsArticle = ({ title, description, urlToImage, publishedAt, url, index, author }) => {
  return (
    <div key={index}>
      <div className='newsdetails' >
        <img src={urlToImage} />
        <h1>{title}</h1>
        <div className='article-details'>
          <span className='author'>{author}</span>
          <span className='author'>{publishedAt}</span>
        </div>
        <p>{description}</p>
        <a href={url} target='_blank'>Read More</a>
      </div>
    </div>
  )
}

export default NewsArticle
