import React, { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const handleTrue = () => setToggle(true);
  const handleFalse = () => setToggle(false);

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>
      <button type="button" onClick={handleTrue}>
        Make it true!
      </button>
      <button type="button" onClick={handleFalse}>
        No it's false!
      </button>
      <span>{toggle.toString()}</span>
    </div>
  );
};

export default App;
