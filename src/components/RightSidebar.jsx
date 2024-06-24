import SearchBar from "./SearchBar";
import PremiumButton from "./PremiumButton";
import TrendingTopic from "./TrendingTopic";
import styled from "styled-components";

const RightSidebarDiv = styled.div`
  width: 450px;
  background-color: #000;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export default function RightSidebar() {
  return (
    <RightSidebarDiv>
      <SearchBar />
      <PremiumButton />
      <TrendingTopic />
    </RightSidebarDiv>
  );
}
