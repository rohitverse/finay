import React from "react";
import { Modal } from "react-bootstrap";
import "./CommonModal.scss";
import userimg from "../../../Assets/Images/userimage.png";
import { GIF, Gallery, Smile } from "../../../Assets/Images/Svgicon";

const CommonModal = ({
  show,
  handleClose,
  heading,
  className,
  children,
  backdrop,
}) => {
  return (
    <>
      <div className="commonModal">
        <Modal
          className={`commonModal ${className} `}
          show={show}
          onHide={handleClose}
          centered
          backdrop={backdrop}
        >
          <Modal.Header closeButton closeVariant="white" className="text-white">
            {heading}
          </Modal.Header>
          <Modal.Body>
            <div className="modalBody  text-white">{children}</div>
            <figure>
              <img src={userimg} alt="" />
            </figure>
            <div className="figContent">
              <div>Abhi Manapragada</div>
              <button>Public</button>
            </div>
            <div className="createCard p-3 d-flex justify-content-between">
              <div className="left d-flex">
                {/* <figure>
                  <img src={userimg} alt="User Image" />
                </figure> */}
                <div className="p-2 mt-0.5 posttext align-items-center">
                  What’s on your mind?
                </div>
              </div>
              <div className="right d-flex mt-2">
                <div className="px-2">
                  <Smile />
                </div>

                <div className="px-2">
                  <GIF />
                </div>
                <div className="px-2">
                  <Gallery />
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default CommonModal;
