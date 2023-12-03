const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000;
app.use(cors());

const API_KEY = "a72388c8cf0b4cfda52ae93316344f93";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

app.get('/news/headlines', async (req, res) => {
  try {
    const response = await fetch(`${HEADLINES_NEWS}${API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/news/general', async (req, res) => {
  try {
    const response = await fetch(`${GENERAL_NEWS}${API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/news/business', async (req, res) => {
  try {
    const response = await fetch(`${BUSINESS_NEWS}${API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/news/sports', async (req, res) => {
    try {
      const response = await fetch(`${SPORTS_NEWS}${API_KEY}`);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  app.get('/news/tech', async (req, res) => {
    try {
      const response = await fetch(`${TECHNOLOGY_NEWS}${API_KEY}`);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.get('/news/entertainment', async (req, res) => {
  try {
    const response = await fetch(`${ENTERTAINMENT_NEWS}${API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
