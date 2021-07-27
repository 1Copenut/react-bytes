import React from 'react';

const SearchBox = ({ handleSearchBoxChange, inputValue }) => {
  // const { handleSearchBoxData, inputValue } = props;

  const handleOnChange = e => {
    handleSearchBoxChange(e.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="search-input">Search for your favorite superhero</label>
        <input
          type="search"
          id="search-input"
          onChange={handleOnChange}
          value={inputValue}
        />
      </form>
    </div>
  );
}

export default SearchBox;