import React, { useState, useRef } from "react";
import Controls from "./components/Controls";
import Portal from "./components/Portal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  const handleIsShown = () => {
    setShowModal(!showModal);
  };

  const passedModalProps = {
    ariaLabel: "Some label I have not considered",
    closeModal: handleIsShown,
    isShown: showModal,
    modalRef: modalRef,
  };

  return (
    <>
      <main>
        <Controls buttonRef={buttonRef} handleIsShown={handleIsShown} />
      </main>
      <Portal {...passedModalProps} />
    </>
  );
};

export default App;
