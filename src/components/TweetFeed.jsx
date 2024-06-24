import React from "react";
import Tweet from "./Tweet";
import TweetsData from "./TweetsData";

export default function TweetFeed() {
  return (
    <div className="main-content">
      <div className="tweet-feed">
        {TweetsData.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
