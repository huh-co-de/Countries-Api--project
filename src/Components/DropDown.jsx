function DropDown({setQuery}) {
  return (
    <select className="filter-by-region" onChange={setQuery} >
      <option hidden>filter-by-region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default DropDown;
