const React = require("react");
import Button from "../Button/Button";
require("./continent.scss");

const Continent = props => {
  let countries = props.countries.map((country, index) => {
    return (
      <div key={index} className="country">
        <div>
          <h2>{country.name}</h2>
          {/* <p>Native name: {country.nativeName}</p>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <h3>Language</h3>{" "}
          {country.languages.map((language, index) => {
            return <p key={index}>{language.name}</p>;
          })}
          <h3>Currency</h3>{" "}
          {country.currencies.map((currency, index) => {
            return <p key={index}>{currency.name}</p>;
          })} */}
        </div>
        <div>
          <img
            src={country.flag}
            alt={country.name}
            width="60px"
            height="60px"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="continent">
      <div className="region">
        <Button label="Asia" onClick={props.showInfo} />
        <Button label="Africa" onClick={props.showInfo} />
        <Button label="America" onClick={props.showInfo} />
        <Button label="Europe" onClick={props.showInfo} />
        <Button label="Oceania" onClick={props.showInfo} />
      </div>
      <div className="countries"> {countries}</div>
    </div>
  );
};

export default Continent;
