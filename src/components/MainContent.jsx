import styled from "styled-components";
import TweetBox from "./TweetBox";
import TweetFeed from "./TweetFeed";
import RightSidebar from "./RightSidebar";

const MainSection = styled.section`
  flex: 1;
  display: flex;
  max-width: 1100px;
  padding: 0;
  border-top: 0.5px solid #2f3336;
  border-bottom: 0.5px solid #2f3336;
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;
export default function MainContent() {
  return (
    <MainSection>
      <main>
        <TweetBox />
        <TweetFeed />
      </main>
      <aside>
        <RightSidebar />
      </aside>
    </MainSection>
  );
}
