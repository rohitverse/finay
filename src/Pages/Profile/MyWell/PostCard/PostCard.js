import React from "react";

import UserImg from "../../../../Assets/Images/userimage.png";
import "./PostCard.scss";
import {
  AppleMusic,
  Comment,
  Flag,
  Heart,
  InstagramP,
  Share,
  Spotify,
} from "../../../../Assets/Images/Svgicon";

const PostCard = ({ username, caption, postimage }) => {
  return (
    <>
      <div className="postCard my-2">
        <div className="d-flex mx-2">
          <figure>
            <img src={UserImg} alt="User" className="imagePost" />
          </figure>
          <div className="postCard_Content ps-2">
            <h4>{username}</h4>
            {postimage && (
              <div className="my-3">
                <img src={postimage} alt={postimage} />
              </div>
            )}
            <p>{caption}</p>
            <div className="hr"></div>
            <div className="interaction d-flex justify-content-between my-2">
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
      </div>
    </>
  );
};

export default PostCard;
