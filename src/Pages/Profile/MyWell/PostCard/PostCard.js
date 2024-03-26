import React from "react";

import UserImg from "../../../../Assets/Images/userimage.png";
import "./PostCard.scss";
import { Comment, Flag, Heart, Share } from "../../../../Assets/Images/Svgicon";

const PostCard = ({ username, caption, postimage, time }) => {
  return (
    <>
      <div className="postCard my-4">
        <div className="d-flex mx-2">
          <figure>
            <img src={UserImg} alt="User" className="imagePost" />
          </figure>
          <div className="postCard_Content ps-2">
            <h4>{username}</h4>
            <div className="small">{time}</div>
            <p>{caption}</p>
          </div>
        </div>
        <div>
          {postimage && (
            <div className="">
              <img src={postimage} alt={postimage} />
            </div>
          )}
          <div className="hr my-4"></div>
          <div className="interaction d-flex justify-content-between mt-2">
            <div className="first">
              <span className="me-3">
                <Heart />
              </span>
              <span className="">
                <Comment />
              </span>
            </div>
            <div className="second">
              <span className="">
                <Share />
              </span>
              <span className="ms-3">
                <Flag />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
