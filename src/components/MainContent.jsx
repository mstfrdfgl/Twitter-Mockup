import React from "react";
import TweetBox from "./TweetBox";
import TweetFeed from "./TweetFeed";
import RightSidebar from "./RightSidebar";

export default function MainContent() {
  return (
    <div className="main-content">
      <main>
        <TweetBox />
        <TweetFeed />
      </main>
      <aside>
        <RightSidebar />
      </aside>
    </div>
  );
}
