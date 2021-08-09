// import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from 'react';
import Search from './components/Search';

require('dotenv').config();

function App() {
  const [state, setState] = useState({
    data: [],
    hasError: false,
    isLoading: false,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const dataUrl = '';

    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => {
        setState({
          ...state,
          data: data,
        });
      });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setState({
      ...state,
      searchTerm: value,
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
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
