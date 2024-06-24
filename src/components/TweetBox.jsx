import React from "react";
import {
  FaImage,
  FaChartBar,
  FaSmile,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { RiSurveyFill } from "react-icons/ri";

export default function TweetBox() {
  return (
    <div className="tweet-box">
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
    </div>
  );
}
