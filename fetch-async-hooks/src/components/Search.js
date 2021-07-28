const Search = (props) => {
  const { handleSearchChange, handleSearchSubmit, searchTerm } = props;

  const handleChange = (e) => {
    handleSearchChange(e);
  };

  const handleSubmit = (e) => {
    handleSearchSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search for something</label>
      <input
        type="text"
        id="search-input"
        onChange={handleChange}
        value={searchTerm}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;
