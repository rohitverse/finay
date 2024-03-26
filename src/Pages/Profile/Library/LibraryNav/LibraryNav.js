import React from "react";
import "./LibraryNav.scss";
import { Link, NavLink } from "react-router-dom";

const LibraryNav = () => {
  return (
    <>
      <div className="libraryNav mt-4">
        <NavLink to="songs">Songs</NavLink>
        <NavLink to="events">Events</NavLink>

        <Link to="#">Backstage Pass</Link>
        <Link to="#">Lesson</Link>
        <Link to="#">Therapy</Link>
      </div>
    </>
  );
};

export default LibraryNav;
