import React, { useState } from "react";
import PostCard from "./PostCard/PostCard";
import postimage from "../../../Assets/Images/postimage.png";
import userimage from "../../../Assets/Images/userimg.png";
import CreateModal from "../../../Components/Common/CommonModal/CreateModal/CreateModal";
import "./MyWell.scss";
import { GIF, Gallery, Smile } from "../../../Assets/Images/Svgicon";
import toast from "react-hot-toast";
import Toasts from "../../../Components/Common/Toasts/Toasts";

const notify = () => toast("Here is your toast.");

const MyWell = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Toasts onClick={notify} text="Hello"/>
      <div className="myWell my-3">
        <div
          className="createCard p-3 d-flex justify-content-between"
          onClick={handleShow}
        >
          <div className="left d-flex">
            <figure>
              <img src={userimage} alt="UserImage" />
            </figure>
            <div className="p-2 mt-0.5 posttext align-items-center">
              What’s on your mind?
            </div>
          </div>
          <div className="right d-flex mt-2">
            <div className="px-2">
              <Smile />
            </div>

            <div className="px-2">
              <GIF />
            </div>
            <div className="px-2">
              <Gallery />
            </div>
          </div>
        </div>
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
      <CreateModal show={show} handleClose={handleClose} />
    </>
  );
};

export default MyWell;
