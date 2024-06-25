import styled from "styled-components";

const PremiumButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 84%;
  background-color: #000;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 0.7rem;
  position: relative;
  border: 0.5px solid #2f3336;
`;
const PremiumButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: left;
`;
const PremiumButtonTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const PremiumButtonDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;
const PremiumButtonStyled = styled.button`
  width: 30%;
  background-color: #1a8cd8;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0c93ec;
  }
`;
export default function PremiumButton() {
  return (
    <PremiumButtonContainer>
      <PremiumButtonContent>
        <PremiumButtonTitle>Premium'a Abone Ol</PremiumButtonTitle>
        <PremiumButtonDescription>
          Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
          geliri payı kazan.
        </PremiumButtonDescription>
        <PremiumButtonStyled>Abone ol</PremiumButtonStyled>
      </PremiumButtonContent>
    </PremiumButtonContainer>
  );
}
