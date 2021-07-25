import React from 'react';

const SearchBar = (props) => {
  const { handleSearchBarChange, handleSearchBarSubmit, locale, quantity } =
    props;

  const handleChange = (e) => {
    handleSearchBarChange(e);
  };

  const handleFormSubmit = (e) => {
    handleSearchBarSubmit(e);
  };

  return (
    <section aria-labelledby="search-header">
      <h1 id="search-header">
        <strong>THE</strong> Faker API
      </h1>
      <p>Fake company data across multiple locales</p>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Data filters</legend>
          <label htmlFor="data-locale">Locale</label>
          <select
            id="data-locale"
            onChange={handleChange}
            name="locale"
            value={locale}
          >
            <option value="en_EN">English</option>
            <option value="fr_FR">French</option>
            <option value="es_ES">Spanish</option>
          </select>

          <label htmlFor="data-quantity">Number of results</label>
          <select
            id="data-quantity"
            onChange={handleChange}
            name="quantity"
            value={quantity}
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
