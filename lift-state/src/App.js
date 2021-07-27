import React, { useState } from "react";
import SearchBox from "./components/SearchBox";

function App() {
  const [search, setSearch] = useState("");

  const handleSearchBoxChange = data => {
    setSearch(data);
  }

  return (
    <div className="App">
      <SearchBox handleSearchBoxChange={handleSearchBoxChange} inputValue={search} />
    </div>
  );
}

export default App;
