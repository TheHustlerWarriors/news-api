import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
    );

    const data = await response.json();

    res.json({
      success: true,
      news: data.articles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch news",
    });
  }
});

export default router;
