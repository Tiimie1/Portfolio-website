import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";

interface NewsData {
  title: string;
  text: string;
  link: string;
}

const API_URL = "https://tiimie-website-be.onrender.com/";

const News = () => {
  const [news, setNews] = useState<NewsData | null>(null);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        const newsData: NewsData = {
          title: response.data.data.title,
          text: response.data.data.news_text,
          link: response.data.data.link,
        };
        setNews(newsData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {news ? (
        <>
          <div>
            <div className="newsTitleContainer">
              <p style={{ margin: 0, padding: 4 }}>610</p>
              <p className="newsTitle" style={{ margin: 0, padding: 4 }}>
                {news.title.toUpperCase()}
              </p>
            </div>
            <p style={{ margin: 0, padding: 4, textAlign: "justify" }}>
              {news.text.substring(0, 520) + "..."}
            </p>
          </div>
        </>
      ) : (
        <p
          style={{
            margin: 0,
            padding: 4,
            textAlign: "justify",
            marginRight: 4,
          }}
        >
          Loading now...
        </p>
      )}
    </>
  );
};

export default News;
