import React, { useState } from "react";
import Search from "./components/Search";

function App() {
  const [state, setState] = useState({
    data: [],
    searchTerm: "",
    hasError: false,
    isLoading: false,
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setState({
      ...state,
      searchTerm: value,
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <main>
      <h1>Search for something</h1>
      <Search
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={state.searchTerm}
      />
    </main>
  );
}

export default App;
