import React from "react";
import './modal.css'
const Modal = () => {
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <button className="btn btn-hipster close-btn"> close</button>
      </div>
    </aside>
  );
};

export default Modal;
