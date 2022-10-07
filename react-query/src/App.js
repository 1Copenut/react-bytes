import React from "react";
import Pagination from "./components/pagination/Pagination";

const App = () => {
  return (
    <>
      <header>
        <h1>React Query API</h1>
      </header>
      <main>
        <div>This will be the main content area. Plain, I know.</div>
        <Pagination />
      </main>
    </>
  );
};

export default App;
