import React, { useState } from "react";
import Text from "./components/Text";

const App = (props) => {
  const [theme, setTheme] = useState("palevioletred");

  const handleThemeClick = (e) => {
    setTheme(theme === "palevioletred" ? "tomato" : "palevioletred");
  };

  return (
    <div className="App">
      <Text theme={theme} />
      <button onClick={handleThemeClick}>Toggle theme</button>
    </div>
  );
};

export default App;
