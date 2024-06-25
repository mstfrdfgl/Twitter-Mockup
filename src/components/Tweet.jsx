import { FaRegComment, FaRetweet, FaHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import styled from "styled-components";

const TweetDiv = styled.div`
  background-color: #000;
  color: #e7e9ea;
  font-weight: 500;
  padding: 10px;
  border-bottom: 0.5px solid #2f3336;
`;

const TweetHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Username = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const Handle = styled.span`
  color: #4c4f53;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const Timestamp = styled.span`
  color: #4c4f53;
  cursor: pointer;
`;

const TweetBody = styled.div`
  margin-bottom: 0.5rem;
`;

const TweetText = styled.p`
  margin-bottom: 0.5rem;
`;

const TweetImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Icon = styled.div`
  color: #4c4f53;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  &:hover {
    color: #1d9bf0;
  }
`;

const Reply = styled(Icon)`
  color: #4c4f53;
  &:hover {
    color: #1d9bf0;
  }
`;

const Retweet = styled(Icon)`
  color: #4c4f53;
  &:hover {
    color: #02895c;
  }
`;

const Heart = styled(Icon)`
  color: #4c4f53;
  &:hover {
    color: #d4156d;
  }
`;

const Stats = styled(Icon)`
  color: #4c4f53;
  &:hover {
    color: #1568a0;
  }
`;

const TweetFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

//parent componentten alınan prop kullanılarak her TweetsData dizisindeki her bir öğe için bir Tweet oluşturulur.
export default function Tweet({ tweet }) {
  const { username, handle, profilePicture, timestamp, text } = tweet;
  return (
    <TweetDiv>
      <TweetHeader>
        <ProfilePicture src={tweet.profilePicture} alt="Profile" />
        <Username>{tweet.username}</Username>
        <Handle>{tweet.handle}</Handle>
        <Timestamp>{tweet.timestamp}</Timestamp>
      </TweetHeader>
      <TweetBody>
        <TweetText>{tweet.text}</TweetText>
        {tweet.image && <TweetImage src={tweet.image} alt="Tweet" />}
      </TweetBody>
      <TweetFooter>
        <Reply>
          <FaRegComment /> {Math.floor(Math.random() * 100)}
        </Reply>
        <Retweet>
          <FaRetweet /> {Math.floor(Math.random() * 100)}
        </Retweet>
        <Heart>
          <FaHeart /> {Math.floor(Math.random() * 100)}
        </Heart>
        <Stats>
          <IoIosStats /> {Math.floor(Math.random() * 10000)}
        </Stats>
      </TweetFooter>
    </TweetDiv>
  );
}
