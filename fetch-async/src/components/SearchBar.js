import axios from 'axios';
import React, { useState } from 'react';

const SearchBar = (props) => {
  const [state, setState] = useState({
    locale: 'en_EN',
    quantity: '1',
    data: [],
    hasError: false,
    isFetching: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      try {
        setState({
          ...state,
          isFetching: true,
        });

        const response = await axios({
          url: `https://fakerapi.it/api/v1/companies?_locale=${state.locale}&_quantity=${state.quantity}`,
          method: 'get',
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
    <section aria-labelledby="search-header">
      <h2 id="search-header">
        <strong>THE</strong> Faker API
      </h2>
      <p>Fake company data across multiple locales</p>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Data filters</legend>
          <label htmlFor="data-locale">Locale</label>
          <select
            id="data-locale"
            onChange={handleChange}
            name="locale"
            value={state.locale}
          >
            <option value="en_EN">English</option>
            <option value="fr_FR">French</option>
            <option value="es_ES">Spanish</option>
          </select>

          <label htmlFor="offender-demographic">Demographic</label>
          <select
            id="offender-demographic"
            onChange={handleChange}
            name="quantity"
            value={state.quantity}
          >
            <option value="1">One company</option>
            <option value="2">Two companies</option>
            <option value="3">Three companies</option>
            <option value="4">Four companies</option>
            <option value="5">Five companies</option>
          </select>

          <input type="submit" value="Fetch company data" />
        </fieldset>
      </form>
    </section>
  );
};

export default SearchBar;
