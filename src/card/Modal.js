import React, { Component } from "react";
import "./modal.css";

function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">{children}</div>
      <div className="modal-close" onClick={handleClose}>
        close
      </div>
    </div>
  );
}

export default Modal;
