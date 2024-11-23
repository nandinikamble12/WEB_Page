import React from 'react';
import './FullArticle.css';


const FullArticle = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="full-article">
      <button onClick={onClose}>Close</button>
      <h1>{article.title}</h1>
      <img className='artimg' src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <button className='btn2'>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
      </button>
     
    </div>
  );
};

export default FullArticle;
