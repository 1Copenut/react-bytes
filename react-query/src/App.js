import React from "react";
import Pagination from "./components/Pagination/Pagination";
import FetchImages from "./data/FetchImages/FetchImages";

const App = () => {
  FetchImages();
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
