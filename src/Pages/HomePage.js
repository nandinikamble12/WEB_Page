import React, { useState, useEffect } from 'react';
import { fetchNews } from '../utils/api';
import Navbar from '../Components/Navbar';
import NewsCard from '../Components/NewsCard';
import FullArticle from '../Components/FullArticle';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      const news = await fetchNews(selectedCategory);
      setArticles(news);
    };
    loadNews();
  }, [selectedCategory]);

  return (
    <div className="home-page">
      <Navbar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="content">
        {selectedArticle ? (
          <FullArticle article={selectedArticle} onClose={() => setSelectedArticle(null)} />
        ) : (
          <div className="news-list">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} onClick={setSelectedArticle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
