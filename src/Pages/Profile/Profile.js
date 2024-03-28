import React from "react";
import "./Profile.scss";
import bannerImg from "../../Assets/Images/bannerimg.jpg";
import ProfileEditCard from "./ProfileEditCard/ProfileEditCard";
import { Container } from "react-bootstrap";

import ProfileNav from "./ProfileNav/ProfileNav";
import { Outlet } from "react-router-dom";
import Slider from "react-slick";
import sliderimage from "../../Assets/Images/postimage.png";

const Profile = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="Profile">
        <section className="ProfileBanner">
          <img className="w-100" src={bannerImg} alt="Banner" />
        </section>
        <Container>
          <div className="d-flex">
            <div className="">
              <ProfileEditCard />
            </div>
            <div className="ms-md-4 ms-xl-5 mt-4">
              <ProfileNav />
              <Outlet />
            </div>
          </div>
        </Container>

        <div className="slickSlider">
          <Slider {...settings} autoplay='true'>
            <div>
              <img src={sliderimage} alt="img" />
            </div>
            <div>
              <img src={sliderimage} alt="img" />
            </div>
            <div>
              <img src={sliderimage} alt="img" />
            </div>
            <div>
              <img src={sliderimage} alt="img" />
            </div>
            <div>
              <img src={sliderimage} alt="img" />
            </div>
            <div>
              <img src={sliderimage} alt="img" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Profile;
