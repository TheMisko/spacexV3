import React, { useState, useEffect } from "react";
import NewsCard from "../components/newsCard";
import Nav from "../components/nav";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getData();
    console.log(news.docs);
  }, []);
  console.log(news.docs);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://spaceflightnewsapi.net/api/v1/articles?news_site=spacex`
      );
      const data = await response.json();
      setNews(data.docs);
      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <>
      <Nav />
      <div className="news-container">
        <h1>Latest Spacex news: </h1>
        <div>
          {news ? (
            <div className="news-flex">
              {" "}
              {news.map(info => (
                <a style={{ textDecoration: "none" }} href={info.url}>
                  {" "}
                  <NewsCard data={info} />
                </a>
              ))}{" "}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default News;
