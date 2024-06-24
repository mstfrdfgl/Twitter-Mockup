import React from "react";
import TrendingData from "./TrendingData";
import TrendItem from "./TrendItem";

export default function TrendingTopic() {
  return (
    <div className="trending-topic">
      <h2>İlginizi çekebilecek gündemler</h2>
      {TrendingData.map((item, index) => (
        <TrendItem
          key={index}
          category={item.category}
          title={item.title}
          posts={item.posts}
        />
      ))}
      <a className="show-more">Daha fazla göster</a>
    </div>
  );
}
