import React from "react";

const TrendItem = ({ category, title, posts }) => {
  return (
    <div className="trend-item">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="posts">{posts}</p>
    </div>
  );
};

export default TrendItem;
