import React, { useEffect } from "react";
import { FocusOn } from "react-focus-on";

import styles from "./Modal.module.css";

const Modal = ({ closeModal, isShown, closeButtonRef, modalRef }) => {
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const handleCloseButton = (e) => {
    e.preventDefault();
    closeModal();
  };

  // Manage focus on modal open and close
  useEffect(() => {
    const closeButton = closeButtonRef.current;
    const modalContainer = modalRef.current;

    if (isShown && modalRef) {
      modalContainer.focus();
    }

    return () => closeButton.focus();
  }, [isShown, closeButtonRef, modalRef]);

  // Close modal on ESC keypress
  useEffect(() => {
    const modal = document.getElementById("modal");
    modal.addEventListener("keydown", handleEscapeKey);

    return () => modal.removeEventListener("keydown", handleEscapeKey);
  });

  return (
    <>
      {isShown && (
        <FocusOn>
          <div
            id="modal-dialog"
            className={styles.cd_modal__container}
            onKeyPress={handleEscapeKey}
            ref={modalRef}
            tabIndex="-1"
          >
            <h1>Ubuntu rules!</h1>
            <button
              aria-label="Close this modal"
              className={styles.cd_modal__closeButton}
              onClick={handleCloseButton}
            >
              <span aria-hidden="true">X</span>
            </button>
            <p>Hello Modal!</p>
            <a href="https://ubuntu.com/">Ubuntu!</a>
          </div>
          <div className={styles.cd_modal__smoke}></div>
        </FocusOn>
      )}
    </>
  );
};

export default Modal;
