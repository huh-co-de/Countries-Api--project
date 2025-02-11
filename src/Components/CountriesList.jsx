import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

// eslint-disable-next-line react/prop-types
function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  const filteredCountries = countriesData.filter((country) =>
    // eslint-disable-next-line react/prop-types
    country.name.common.toLowerCase().includes(query.toLowerCase()) || country.region.toLowerCase().includes(query.toLowerCase())

  );
  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {filteredCountries.length === 0 ? (
            <p className="no-results">
              No countries found matching &quot;{query}&quot;
            </p>
          ) : (
            filteredCountries.map((country, idx) => (
              <CountryCard
                key={idx}
                flags={country.flags.svg}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                data={country}
              />
            ))
          )}
        </div>
      )}
    </>
  );
}

export default CountriesList;
