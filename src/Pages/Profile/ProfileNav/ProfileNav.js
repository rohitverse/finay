import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ProfileNav.scss";

const ProfileNav = () => {
  return (
    <div className="profileNav">
      <NavLink to="my-well">My well</NavLink>

      <NavLink to="library">Library</NavLink>
      <Link to="#">Store</Link>
      <Link to="#">Library</Link>
      <Link to="#">Store</Link>
      <Link to="#">Library</Link>
      <Link to="#">Store</Link>
    </div>
  );
};

export default ProfileNav;
