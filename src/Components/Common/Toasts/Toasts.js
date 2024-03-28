import React from "react";
import { Toaster } from "react-hot-toast";

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
