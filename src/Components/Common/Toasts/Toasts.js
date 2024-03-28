import React from "react";
import { Toaster } from "react-hot-toast";

const Toasts = ({ onClick, text }) => {
  return (
    <>
      <div className="Toasts">
        <button onClick={onClick}>{text}</button>
        <Toaster />
      </div>
    </>
  );
};

export default Toasts;
