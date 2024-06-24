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
export default function TweetBox() {
  return (
    <TweetBoxDiv>
      <div className="tweet-box-header">
        <img
          src="https://picsum.photos/100/100?random=10"
          alt="Profile"
          className="profile-picture"
        />
        <input
          type="text"
          placeholder="Neler oluyor?"
          className="tweet-input"
        />
      </div>
      <div className="tweet-box-footer">
        <div className="icons">
          <FaImage className="boxicon" />
          <MdOutlineGifBox className="boxicon" />
          <RiSurveyFill className="boxicon" />
          <FaSmile className="boxicon" />
          <FaMapMarkerAlt className="boxicon" />
        </div>
        <button className="tweet-button">Gönder</button>
      </div>
    </TweetBoxDiv>
  );
}
