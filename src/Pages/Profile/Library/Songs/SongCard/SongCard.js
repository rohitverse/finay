import React from "react";
import "./SongCard.scss";
import UserImg from "../../../../../Assets/Images/userimage.png";
import songPost from "../../../../../Assets/Images/songImage.svg";
import CustomButton from "../../../../../Components/Common/CustomButton/CustomButton";
import { Diamond } from "../../../../../Assets/Images/Svgicon";

const SongCard = () => {
  return (
    <>
      <div className="songCard my-3 p-2">
        <div className="songCardHead d-flex px-2 pt-2">
          <figure className=" pt-1">
            <img src={UserImg} alt="User" className="imagePost" />
          </figure>
          <div className="p-2 me-2 small">@Enimen</div>
          <div className="songCard_Content p-2 ">
            <div className="hashtag small">#Frameworks</div>
          </div>
        </div>
        <div className="songCardBody">
          <figure className="p-2">
            <img src={songPost} alt="song " />
          </figure>
          <h4 className="mx-2"> Venom Forest Prince</h4>
          <div className="d-flex justify-content-between mx-2">
            <div >no. of editions 50</div>
            <div className="diamond me-1">
              <span className="me-2">
                <Diamond />
              </span>
              2.75
            </div>
          </div>
          <div className="hr m-2"></div>
          <CustomButton className="" type="button" text="Buy" />
        </div>
      </div>
    </>
  );
};

export default SongCard;
