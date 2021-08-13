import React, { useState } from "react";
import ThemeContext from "./context/ThemeContext";

const App = (props) => {
  const theme = "light";

  return (
    <ThemeContext.Provider value={theme}>
      <div></div>
    </ThemeContext.Provider>
  );
};

export default App;
