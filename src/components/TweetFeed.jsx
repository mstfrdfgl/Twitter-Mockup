import React from "react";
import Tweet from "./Tweet";
import TweetsData from "./TweetsData";
import styled from "styled-components";

const MainContent = styled.div`
  flex: 1;
  display: flex;
  max-width: 1100px;
  padding: 0;
  border-top: 0.5px solid #2f3336;
  border-bottom: 0.5px solid #2f3336;
`;

const TweetFeedDiv = styled.div`
  flex: 1;
  width: 600px;
  border: 0.5px solid #2f3336;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default function TweetFeed() {
  return (
    <MainContent>
      <TweetFeedDiv>
        {TweetsData.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </TweetFeedDiv>
    </MainContent>
  );
}
