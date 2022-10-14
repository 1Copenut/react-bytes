import React, { useState } from "react";
import Controls from "./components/Controls";
import Portal from "./components/Portal";

const App = () => {
  const [isShown, setShown] = useState(false);

  const handleIsShown = () => {
    setShown(!isShown);
  };

  return (
    <>
      <main>
        <Controls handleIsShown={handleIsShown} />
      </main>
      <Portal />
    </>
  );
};

export default App;
