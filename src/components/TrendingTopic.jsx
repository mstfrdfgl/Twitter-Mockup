import styled from "styled-components";
import TrendingData from "./TrendingData";
import TrendItem from "./TrendItem";

const TrendingTopicDiv = styled.div`
  width: 80%;
  background-color: #000;
  padding: 20px;
  color: #ffffff;
  border-radius: 10px;
  border: 0.5px solid #2f3336;
`;

const TrendingHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ShowMore = styled.a`
  display: block;
  text-align: center;
  padding: 10px 0;
  color: #1da1f2;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #086faf;
  }
`;
export default function TrendingTopic() {
  return (
    <TrendingTopicDiv>
      <TrendingHeader>İlginizi çekebilecek gündemler</TrendingHeader>
      {TrendingData.map((item, index) => (
        <TrendItem
          key={index}
          category={item.category}
          title={item.title}
          posts={item.posts}
        />
      ))}
      <ShowMore>Daha fazla göster</ShowMore>
    </TrendingTopicDiv>
  );
}
