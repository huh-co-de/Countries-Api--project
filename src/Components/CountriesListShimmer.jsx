import "./CountriesListShimmer.css";
function CountriesListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((index) => {
         
        return <div key={index} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
}

export default CountriesListShimmer;
