import React from "react";
import "./SongCard.scss";
import UserImg from "../../../../../Assets/Images/userimage.png";
import songPost from "../../../../../Assets/Images/songImage.svg";
import CustomButton from "../../../../../Components/Common/CustomButton/CustomButton";
import { Diamond } from "../../../../../Assets/Images/Svgicon";

const SongCard = ({
  username,
  headCaption,
  editions,
  value,
  buybtn,
  offerbtn,
  fluid,
}) => {
  return (
    <>
      <div className="songCard my-3 p-2 me-3">
        <div className="songCardHead d-flex px-2 pt-2">
          <figure className=" pt-1">
            <img src={UserImg} alt="User" className="imagePost" />
          </figure>
          <div className="p-2 me-2 small">{username}</div>
          <div className="songCard_Content p-2 ">
            <div className="hashtag small">#Frameworks</div>
          </div>
        </div>
        <div className="songCardBody">
          <figure className="p-2">
            <img src={songPost} alt="song " />
          </figure>
          <h4 className="mx-2"> {headCaption}</h4>
          <div className="d-flex justify-content-between m-2 px-2">
            <div className="my-2">
              no. of editions: <strong>{editions}</strong>
            </div>
            {value && (
              <div className="diamond">
                <Diamond />
                <strong className="">{value}</strong>
              </div>
            )}
          </div>
          <div className="hr m-2"></div>
          <div className="d-flex">
            {buybtn && (
              <CustomButton className="w-50" type="button" text="Buy" />
            )}
            {offerbtn && (
              <CustomButton
                className={`border-btn w-50 ${fluid}`}
                type="button"
                text="Make Offer"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SongCard;
