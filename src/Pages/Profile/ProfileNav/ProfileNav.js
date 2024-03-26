import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ProfileNav.scss";

const ProfileNav = () => {
  return (
    <div className="profileNav my-2">
      <NavLink to="my-well">My well</NavLink>

      <Link to="#">Library</Link>
      <Link to="#">Store</Link>
      <Link to="#">Library</Link>
      <Link to="#">Store</Link>
      <Link to="#">Library</Link>
      <Link to="#">Store</Link>
    </div>
  );
};

export default ProfileNav;
