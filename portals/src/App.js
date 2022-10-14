import React, { useState } from "react";
import Controls from "./components/Controls";
import Portal from "./components/Portal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleIsShown = () => {
    setShowModal(!showModal);
  };

  const passedProps = {
    isShown: showModal,
    ariaLabel: "Some label I have not considered",
    ariaControls: undefined,
  };

  return (
    <>
      <main>
        <Controls handleIsShown={handleIsShown} />
      </main>
      <Portal {...passedProps} />
    </>
  );
};

export default App;
