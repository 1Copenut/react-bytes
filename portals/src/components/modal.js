import React from "react";

const Modal = ({ isShown = true }) => {
  return (
    <>
      {isShown && (
        <div id="modal-dialog">
          <p>Hello Modal!</p>
        </div>
      )}
    </>
  );
};

export default Modal;
