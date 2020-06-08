import React, { useState } from "react";

import "./modal.css";

const Modal = props => {
  const [value, setValue] = useState("");
  const handleChange = event => {
    setValue(event.target.value);
  };

  const closeModal = () => {
    setValue("");
    props.close();
  };
  const showHideClassName = props.show
    ? "modal-wrapper-open"
    : "modal-wrapper-close";

  return (
    <div>
      <div className={showHideClassName}>
        <div className="modal-header">
          <h2>Modal Header</h2>
          <div className="close-modal-btn" onClick={closeModal}>
            ×
          </div>
        </div>
        <div className="modal-body">
          <div>
            <input type="text" value={value} onChange={handleChange} />
          </div>
        </div>
        <div className="modal-footer">
          <div>This is Modal footer</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
