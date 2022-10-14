import React from "react";

const Modal = ({ isShown }) => {
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
