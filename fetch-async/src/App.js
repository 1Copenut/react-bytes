import React, { useState } from "react";
import axios from "axios";

import { BASE_URL } from "./constants";
import SearchBar from "./components/SearchBar";
import List from "./components/List";

function App() {
  const [state, setState] = useState({
    locale: "en_EN",
    quantity: "1",
    data: [],
    hasError: false,
    isFetching: false,
  });

  const handleSearchBarChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSearchBarSubmit = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      try {
        setState({
          ...state,
          isFetching: true,
        });

        const response = await axios({
          url: `${BASE_URL}?_locale=${state.locale}&_quantity=${state.quantity}`,
          method: "get",
        });

        setState({
          ...state,
          isFetching: false,
          data: response.data.data,
        });
      } catch (e) {
        console.log(e);

        setState({
          ...state,
          hasError: true,
          isFetching: false,
        });
      }
    };

    fetchData();
  };

  return (
    <div className="App">
      <main>
        <SearchBar
          handleSearchBarChange={handleSearchBarChange}
          handleSearchBarSubmit={handleSearchBarSubmit}
          locale={state.locale}
          quantity={state.quantity}
        />
        <List companies={state.data} />
      </main>
    </div>
  );
}

export default App;
