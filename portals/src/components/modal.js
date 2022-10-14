import React, { useEffect } from "react";

const Modal = ({ closeModal, isShown, modalRef }) => {
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const handleCloseButton = (e) => {
    e.preventDefault();
    closeModal();
  };

  useEffect(() => {
    if (isShown && modalRef) {
      modalRef.current.focus();
    }
  }, [isShown, modalRef]);

  useEffect(() => {
    const modal = document.getElementById("modal");
    modal.addEventListener("keydown", handleEscapeKey);

    return () => modal.removeEventListener("keydown", handleEscapeKey);
  });

  return (
    <>
      {isShown && (
        <div
          id="modal-dialog"
          onKeyPress={handleEscapeKey}
          ref={modalRef}
          tabIndex="-1"
        >
          <h1>Ubuntu rules!</h1>
          <button aria-label="Close this modal" onClick={handleCloseButton}>
            <span aria-hidden="true">X</span>
          </button>
          <p>Hello Modal!</p>
          <a href="https://ubuntu.com/">Ubuntu!</a>
        </div>
      )}
    </>
  );
};

export default Modal;
