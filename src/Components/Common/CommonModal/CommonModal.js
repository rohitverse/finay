import React from "react";
import { Modal } from "react-bootstrap";
import "./CommonModal.scss";
import userimg from "../../../Assets/Images/userimage.png";
import { GIF, Gallery, Smile } from "../../../Assets/Images/Svgicon";
import CustomButton from "../CustomButton/CustomButton";
import { TbWorld } from "react-icons/tb";
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
            <div className="d-flex ">
              <figure>
                <img src={userimg} alt="" />
              </figure>
              <div className="figContent p-2">
                <div className="pb-2"> Abhi Manapragada</div>
                <div className="round-public d-flex justify-content-start align-items-center border rounded-pill border-secondary p-3">
                  <div>
                    <TbWorld size="12px" />
                  </div>

                  <div className="small ms-1">Public</div>
                </div>
              </div>
            </div>
            <div className="posttext p-1 mt-1 mb-5 align-items-center">
              What’s on your mind?
            </div>
            <div className="createCard p-2  my-2 d-flex justify-content-between align=items-center rounded-pill border">
              <div className="left d-flex ">
                {/* <figure>
                  <img src={userimg} alt="User Image" />
                </figure> */}
                <div className="posttext pt-1 align-items-center">
                  Add to your post
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
            <CustomButton text="Post" className="my-2 w-100 bigButton" />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default CommonModal;
