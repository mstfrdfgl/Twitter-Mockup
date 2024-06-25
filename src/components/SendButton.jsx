import styled from "styled-components";

const SendButtonStyled = styled.button`
  background-color: #1a8cd8;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1.2rem 5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0c93ec;
  }
`;
export default function SendButton() {
  return <SendButtonStyled>Gönder</SendButtonStyled>;
}
