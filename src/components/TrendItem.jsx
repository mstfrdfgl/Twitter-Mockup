import styled from "styled-components";

const TrendItemDiv = styled.div`
  padding: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #080808;
  }
`;

const Category = styled.p`
  font-size: 14px;
  color: #4c4f53;
  margin: 0;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const Posts = styled.p`
  font-size: 14px;
  color: #4c4f53;
  margin: 0;
`;
//parent componentten alınan proplar kullanılarak TrendingData dizisindeki her bir obje için bir TrendItem öğesi oluşturulur.
export default function TrendItem({ category, title, posts }) {
  return (
    <TrendItemDiv>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Posts>{posts}</Posts>
    </TrendItemDiv>
  );
}
