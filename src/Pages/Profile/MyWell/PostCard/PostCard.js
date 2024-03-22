import React from "react";

import UserImg from "../../../../Assets/Images/userimage.png";
import "./PostCard.scss";

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
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
