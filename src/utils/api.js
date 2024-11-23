import axios from 'axios';

const API_KEY = '87952313bbfb45f78c4edc4000d4cdbf'; // Replace with your API key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        country: 'us', // Adjust as needed
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
