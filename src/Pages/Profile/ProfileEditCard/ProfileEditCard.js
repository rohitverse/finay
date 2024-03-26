import React from "react";
import "./ProfileEditCard.scss";
import userImg from "../../../Assets/Images/userimg.png";
import CustomButton from "../../../Components/Common/CustomButton/CustomButton";
import {
  AppleMusic,
  InstagramP,
  Spotify,
  Tiktok,
} from "../../../Assets/Images/Svgicon";

const ProfileEditCard = () => {
  return (
    <>
      <div className="ProfileEditCard text-center mb-3">
        <figure className="UserImg mb-3">
          <img src={userImg} alt="User" />
        </figure>
        <h5>Yolotli Bailey</h5>
        <h6>@yolotli_bailey</h6>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A habitant
          commod
        </p>

        <div className="d-flex justify-content-center">
          <div className="suppt me-2">
            <h4>300</h4>
            <p>Supporters</p>
          </div>
          <div className="suppt ms-2">
            <h4>487</h4>
            <p>Supporting</p>
          </div>
        </div>

        <CustomButton text="Edit Profile" className="mt-4" />
        <div className="socials d-flex  mt-3 justify-content-between">
          <span className="ms-5">
            <InstagramP />
          </span>
          <span className="">
            <Spotify />
          </span>
          <span className="">
            <AppleMusic />
          </span>
          <span className="">
            <Spotify />
          </span>
          <span className="me-5">
            <Tiktok />
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileEditCard;
