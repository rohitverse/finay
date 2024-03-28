import React from "react";
import {NavLink, useLocation } from "react-router-dom";
import "./ProfileNav.scss";

const ProfileNav = ({ userName }) => {
  const { pathname } = useLocation();

  return (
    <div className="profileNav mb-4">
      <NavLink to="my-well">My well</NavLink>

      <NavLink
        to={`library/songs`}
        className={pathname.includes(`/library`) ? "active" : ""}
      >
        Library
      </NavLink>
      <NavLink to="store">Store</NavLink>
      <NavLink to="favourites">Favourites</NavLink>
      <NavLink to="offers">Offers</NavLink>
      <NavLink to="/">Purchase History</NavLink>
      <NavLink to="kyc-status">KYC Status</NavLink>
    </div>
  );
};

export default ProfileNav;
