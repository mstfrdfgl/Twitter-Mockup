import React from "react";
import { FaRegComment, FaRetweet, FaHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";

export default function Tweet({ tweet }) {
  const { username, handle, profilePicture, timestamp, text, quotedTweet } =
    tweet;
  return (
    <div className="tweet">
      <div className="tweet-header">
        <img
          src={tweet.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <div>
          <span className="username">{tweet.username}</span>
          <span className="handle">{tweet.handle}</span>
        </div>
        <span className="timestamp">{tweet.timestamp}</span>
      </div>
      <div className="tweet-body">
        <p className="tweet-text">{tweet.text}</p>
        {tweet.image && (
          <img src={tweet.image} alt="Tweet" className="tweet-image" />
        )}
      </div>
      <div className="tweet-footer">
        <div className="icon reply">
          <FaRegComment /> {Math.floor(Math.random() * 100)}
        </div>
        <div className="icon retweet">
          <FaRetweet /> {Math.floor(Math.random() * 100)}
        </div>
        <div className="icon heart ">
          <FaHeart /> {Math.floor(Math.random() * 100)}
        </div>
        <div className="icon stats">
          <IoIosStats /> {Math.floor(Math.random() * 10000)}
        </div>
      </div>
    </div>
  );
}
