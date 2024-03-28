import React from "react";
import { Modal } from "react-bootstrap";
import "./CommonModal.scss";

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
      <Modal
        className={`commonModal ${className} `}
        show={show}
        onHide={handleClose}
        centered
        backdrop={backdrop}
      >
        <Modal.Header closeButton className="text-black">
          {heading}
        </Modal.Header>
        <Modal.Body>
          <div className="modalBody  text-black">{children}</div>
          <h4 className="text-black"> Centered Modal</h4>
          <p className="text-black">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CommonModal;
