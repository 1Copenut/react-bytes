// import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";

require("dotenv").config();

function App() {
  const [state, setState] = useState({
    data: [],
    hasError: false,
    isLoading: false,
    searchTerm: "",
  });

  useEffect(() => {
    const getData = () => {
      const dataUrl = `${process.env.REACT_APP_GITHUB_BASE_URL}/users/1copenut/repos`;

      fetch(dataUrl, {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setState({
            data: data,
            hasError: false,
            isLoading: false,
            searchTerm: "",
          });
        })
        .catch((error) => {
          console.error(`Error fetching data: ${error}`);
        });
    };

    getData();
  }, []);

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
      />
    </main>
  );
}

export default App;
