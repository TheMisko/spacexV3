import React from "react";

const NewsCard = ({ data }) => {
  return (
    <div className="news-card-container">
      <img src={data.featured_image} />
      <div className="news-card-info">
        {" "}
        <h2>{data.title}</h2>
        <h3>{data.published_date.slice(0, 10)}</h3>
        {/* <a href={data.url}>Link</a> */}
        {/* <div className="tags">
          tags:{" "}
          {data.tags.map(tag => (
            <p>{tag}</p>
          ))}{" "}
        </div> */}
      </div>
    </div>
  );
};

export default NewsCard;
