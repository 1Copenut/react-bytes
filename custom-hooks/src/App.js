import React from "react";
import "./app.css";
import ButtonBlock from "./components/ButtonBlock/ButtonBlock";

const App = () => {
  return (
    <main>
      <section>
        <h2>Button Blocks</h2>
        <ButtonBlock isToggle />
        <ButtonBlock />
      </section>
    </main>
  );
};

export default App;
