import React from "react";
import { Toaster } from "react-hot-toast";
import "./Toasts.scss";

const Toasts = ({ onClick, text }) => {
  return (
    <>
      <div className="toasts">
        <button onClick={onClick}>{text}</button>
        <Toaster />
      </div>
    </>
  );
};

export default Toasts;
