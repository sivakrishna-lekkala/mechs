import React from "react";
import "./Modal.css";

const Modal = ({ show, children, setShow }) => {
  return (
    <div className={`modal ${show ? "show-modal" : "hide-modal"}`}>
      {children}
    </div>
  );
};

export default Modal;
