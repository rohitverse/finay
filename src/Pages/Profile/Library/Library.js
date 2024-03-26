import React from "react";
import "./Library.scss";
import { Outlet } from "react-router-dom";

import LibraryNav from "./LibraryNav/LibraryNav";

const Library = () => {
  return (
    <>
      <div className="Library">
            <div className="">
              <LibraryNav />
              <Outlet />
            </div>
          </div>
    </>
  );
};

export default Library;
