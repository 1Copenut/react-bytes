import axios from 'axios';
import React, { useState } from 'react';

const SearchBar = (props) => {
  const [state, setState] = useState({
    crimeType: 'embezzlement',
    demographic: 'count',
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
          url: `https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/${state.crimeType}/offender/national/${state.demographic}`,
          method: 'get',
          headers: {
            'X-api-key': process.env.REACT_APP_DATA_KEY,
          },
        });

        setState({
          ...state,
          isFetching: false,
        });
        console.log(response.data);
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
      <h2 id="search-header">Computer Crimes Sampling</h2>
      <p>National NIBRS Offender Demographic Count Endpoint</p>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Data filters</legend>
          <label htmlFor="crime-type">Crime category</label>
          <select
            id="crime-type"
            onChange={handleChange}
            name="crimeType"
            value={state.crimeType}
          >
            <option value="embezzlement">Embezzlement</option>
            <option value="fraud-offenses">Fraud Offenses</option>
            <option value="hacking-computer-invasion">
              Hacking, Computer Invasion
            </option>
            <option value="wire-fraud">Wire Fraud</option>
          </select>

          <label htmlFor="offender-demographic">Demographic</label>
          <select
            id="offender-demographic"
            onChange={handleChange}
            name="demographic"
            value={state.demographic}
          >
            <option value="count">Count</option>
            <option value="age">Age</option>
            <option value="ethnicity">Ethnicity</option>
            <option value="race">Race</option>
            <option value="sex">Sex</option>
          </select>

          <input type="submit" value="Fetch FBI crime data" />
        </fieldset>
      </form>
    </section>
  );
};

export default SearchBar;
