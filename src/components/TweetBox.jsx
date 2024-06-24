import { FaImage, FaSmile, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { RiSurveyFill } from "react-icons/ri";
import styled from "styled-components";

const TweetBoxDiv = styled.div`
  background-color: #000;
  border-right: 0.5px solid rgb(65, 65, 65);
  border-left: 0.5px solid rgb(65, 65, 65);
  border-radius: 10px;
  padding: 10px;
`;
const TweetBoxHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const TweetInput = styled.input`
  width: 99%;
  background-color: transparent;
  border: 0.1px solid #2f3336;
  color: #ffffff;
  resize: none;
  outline: none;
  font-size: 1rem;
`;

const TweetBoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3.2rem;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #0c93ec;
`;

const TweetButton = styled.button`
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
export default function TweetBox() {
  return (
    <TweetBoxDiv>
      <TweetBoxHeader>
        <ProfilePicture
          src="https://picsum.photos/100/100?random=10"
          alt="Profile"
        />
        <TweetInput type="text" placeholder="Neler oluyor?" />
      </TweetBoxHeader>
      <TweetBoxFooter>
        <Icons>
          <FaImage className="boxicon" />
          <MdOutlineGifBox className="boxicon" />
          <RiSurveyFill className="boxicon" />
          <FaSmile className="boxicon" />
          <FaMapMarkerAlt className="boxicon" />
        </Icons>
        <TweetButton>Gönder</TweetButton>
      </TweetBoxFooter>
    </TweetBoxDiv>
  );
}
