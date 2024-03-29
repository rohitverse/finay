import React from "react";
import CommonModal from "../CommonModal";

const CreateModal = ({ show, handleClose }) => {
  return (
    <>
      <CommonModal show={show} handleClose={handleClose} heading="Create a Post">
        <div className=""></div>
        {/* <p>Launch demo modal</p> */}
      </CommonModal>
    </>
  );
};

export default CreateModal;
