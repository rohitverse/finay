import React from "react";
import "./Profile.scss";
import bannerImg from "../../Assets/Images/bannerimg.jpg";
import ProfileEditCard from "./ProfileEditCard/ProfileEditCard";
import { Container } from "react-bootstrap";

import ProfileNav from "./ProfileNav/ProfileNav";
import { Outlet } from "react-router-dom";

const Profile = () => {
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
      </div>
    </>
  );
};

export default Profile;
