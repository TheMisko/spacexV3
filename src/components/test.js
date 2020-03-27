import React, { useState, useEffect } from "react";
import Loader from "../components/loader";

const Test = () => {
  const [news, setNews] = useState("");
  useEffect(() => {
    getData();
    console.log(news);
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://spaceflightnewsapi.net/api/v1/articles?news_site=spacex`
      );
      const data = await response.json();
      setNews(data);
      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return <div>{news ? <div>{news.docs[0].title}</div> : <Loader />}</div>;
};

export default Test;
