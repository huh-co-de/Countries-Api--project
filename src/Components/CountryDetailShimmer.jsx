import "./CountryDetailShimmer.css";
import "./CountryDetail.css";

function CountryDetailShimmer() {
  return (
    <>
      <div className="country-details-container">
        <button className="back-button"></button>
        <div className="country-details">
          <div className="box1"></div>

          <div className="details-text-container">
            <div className="box3"> </div>
            <div className="details-text">
              <div className="box2"> </div>
              <span className="native-name"></span>

              <div className="box2"></div>
              <span className="population"></span>

              <div className="box2"> </div>
              <span className="region"></span>

              <div className="box2"> </div>
              <span className="sub-region"></span>

              <div className="box2"> </div>
              <span className="capital"></span>

              <div className="box2"> </div>
              <span className="tld"></span>

              <div className="box2"> </div>
              <span className="currencies"></span>

              <div className="box2"> </div>
              <span className="lang"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetailShimmer;
