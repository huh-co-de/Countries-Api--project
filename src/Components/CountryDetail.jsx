import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryDetailShimmer from "./CountryDetailShimmer";
import { useTheme } from "../hooks/useTheme";

function CountryDetail() {
  // const [isDark] = useOutletContext()
  const [isDark] = useTheme();
  const params = useParams(); //to get name in the url , returns an object containing the current route's filled in dynamic parameters
  const { state } = useLocation(); //used to pass data from one page to another
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateCountryData(country) {
    setCountryData({
      flagImage: country.flags?.svg || "",
      name: country.name?.common || "Unknown",
      population: country.population
        ? country.population.toLocaleString("en-IN")
        : "N/A",
      region: country.region || "N/A",
      tld: country.tld ? country.tld.join(", ") : "N/A",
      nativeName: country.name?.nativeName
        ? Object.values(country.name.nativeName)[0]?.common
        : "N/A",
      subRegion: country.subregion || "N/A",
      capital: country.capital ? country.capital.join(", ") : "N/A",
      currency: country.currencies
        ? Object.values(country.currencies)
            .map((currency) => currency.name)
            .join(", ")
        : "N/A",
      languages: country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A",
      borders: [],
    });

    if (!country.borders) {
      country.borders = [];
    }

    Promise.all(
      country.borders.map((border) => {
        return fetch(
          `https://restcountries.com/v3.1/alpha/${encodeURIComponent(border)}`
        )
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }
  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(
        countryName
      )}?fullText=true`
    )
      .then((res) => res.json())
      .then(([country]) => {
        updateCountryData(country);
      })
      .catch((error) => {
        setNotFound(true);
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryName]);
  if (notFound) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Country not found
      </h1>
    );
  }

  return countryData === null ? (
    <CountryDetailShimmer />
  ) : (
    <main className={isDark ? "dark" : ""}>
      <div className="country-details-container">
        {/* <span className ="back-button" onclick="history.back()">
          <i className ="fa-solid fa-arrow-left"></i>&nbsp;Back
        </span> */}
        <Link to={"/"} className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp;Back
        </Link>
        <div className="country-details">
          <img src={countryData.flagImage} alt={`${countryData.name}flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>

            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population: {countryData.population}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region} </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subRegion} </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital} </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld} </b>
                <span className="tld"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currency} </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages} </b>
                <span className="lang"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries:</b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetail;
