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
      // postimage: postimage,
      time: "10 minutes ago",
    },
    {
      name: "Rohit Kumar",
      userimage: userimage,
      caption:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde exercitationem eum aspernatur facilis! Assumenda repellat quia placeat nesciunt? Odit dolor voluptas sit commodi fugiat quis. Aliquam dolorem placeat voluptatibus labore?",
      postimage: postimage,
      time: "2 hours ago",
    },
    {
      name: "Mohit Singh",
      userimage: userimage,
      caption:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde exercitationem eum aspernatur facilis! Assumenda repellat quia placeat nesciunt? Odit dolor voluptas sit commodi fugiat quis. Aliquam dolorem placeat voluptatibus labore?",
      postimage: postimage,
      time: "2 days ago",
    },
  ];
  return (
    <>
      <div className="myWell my-3">
        {postData.map((item, index) => {
          return (
            <PostCard
              key={index}
              username={item.name}
              postimage={item.postimage}
              caption={item.caption}
              time={item.time}
            />
          );
        })}
      </div>
    </>
  );
};

export default MyWell;
