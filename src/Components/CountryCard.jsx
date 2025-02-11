import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CountryCard({ flags, name, population, region, capital,data }) {
  return (
    <Link className="country-card" to={`/${name}`} state= {data}>
      <img src={flags} alt={name} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:</b>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region:</b>
          {region}
        </p>
        <p>
          <b>Capital:</b>
          {capital?.[0]}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
