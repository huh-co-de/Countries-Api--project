

function SearchBar({onChange}) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country...." onChange={onChange}  />
    </div>
  );
}

export default SearchBar;
