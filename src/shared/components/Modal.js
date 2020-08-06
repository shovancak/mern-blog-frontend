import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";
import Backdrop from "./Backdrop";

const ModalLayout = (props) => {
  const modalContent = (
    <div className={`${props.className} modal`}>{props.children}</div>
  );
  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-hook")
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <ModalLayout {...props} className="mdoal" />
    </React.Fragment>
  );
};

export default Modal;
