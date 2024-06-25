import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: left;
  align-items: flex-start;
  width: 90%;
  background-color: #000;
  border-radius: 1rem;
  margin: 0;
  padding: 10px 10px 10px 0;
  text-align: left;
`;
const Input = styled.input`
  flex: 1;
  height: 1.5rem;
  padding: 10px;
  border: none;
  border-radius: 2rem;
  background-color: #202327;
  font-size: 1rem;
  color: white;
  &:focus {
    outline: 1px solid #1da1f2;
  }
`;
export default function SearchBar() {
  return (
    <SearchContainer>
      <Input type="text" placeholder="Ara" />
    </SearchContainer>
  );
}
