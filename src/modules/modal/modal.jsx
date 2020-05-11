import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

export const Modal = ({ children, onClose }) => {

  const modalNode = true;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    modalNode
      ? ReactDOM.createPortal(
      <div className="modal" onClick={stopPropagation}>
        <div className="modal__transparency" onClick={onClose}/>
        <div className="modal__activeArea">
          {children}
        </div>
      </div>,
      document.body
      )
      : null
  );
};
