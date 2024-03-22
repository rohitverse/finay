import React from "react";
import PostCard from "./PostCard/PostCard";
import postimage from "../../../Assets/Images/postimage.png";
import userimage from "../../../Assets/Images/userimg.png";
const MyWell = () => {
  const postData = [
    {
      name: "Abhi Manapragada",
      userimage: userimage,
      caption:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde exercitationem eum aspernatur facilis! Assumenda repellat quia placeat nesciunt? Odit dolor voluptas sit commodi fugiat quis. Aliquam dolorem placeat voluptatibus labore?",
      postimage: postimage,
    },
    {
      name: "Rohit Kumar",
      userimage: userimage,
      caption:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde exercitationem eum aspernatur facilis! Assumenda repellat quia placeat nesciunt? Odit dolor voluptas sit commodi fugiat quis. Aliquam dolorem placeat voluptatibus labore?",
      postimage: postimage,
    },
  ];
  return (
    <>
      <div className="myWell">
        {postData.map((item, index) => {
          return (
            <PostCard
              key={index}
              username={item.name}
              postimage={item.postimage}
              caption={item.caption}
            />
          );
        })}
      </div>
    </>
  );
};

export default MyWell;
