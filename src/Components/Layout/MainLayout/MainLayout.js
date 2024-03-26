import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="wrapper-layout-outside">
        <div className="wrapper-layout-inside">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
