import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article, onClick }) => {
  const { title, description, urlToImage } = article;

  return (
    <>
   
    <div className="news-card" onClick={() => onClick(article)}>
        
      <div className="bigdiv">
        {/* Image Section */}
        <div className="news-image">
          <img src={urlToImage} alt={title} />
        </div>

        {/* Content Section */}
        <div className="news-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewsCard;
