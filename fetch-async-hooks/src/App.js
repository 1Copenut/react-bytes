// import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Table from './components/Table';

function App() {
  const [repos, setRepos] = useState({
    data: [],
    hasError: false,
    isLoading: false,
  });
  const [inputValue, setinputValue] = useState('');

  useEffect(() => {
    const getData = () => {
      const dataUrl = `${process.env.REACT_APP_GITHUB_BASE_URL}/users/1copenut/repos`;

      fetch(dataUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3+json',
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
          setRepos({
            data: data,
            hasError: false,
            isLoading: false,
            searchTerm: '',
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
    setinputValue(value);
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
        searchTerm={inputValue}
      />
      <Table dataArr={repos.data} />
    </main>
  );
}

export default App;
