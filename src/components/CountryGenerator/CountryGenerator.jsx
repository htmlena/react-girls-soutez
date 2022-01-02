import { useState, useEffect } from "react";
import "./style.css";
import Button from "../Button/Button";

const CountryGenerator = () => {
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState("Where to travel next? ↓");

  //fetches countries list and saves to the state
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((json) => {
        setCountries(countryName(json));
      });
  }, []);

  //extracts only one country
  const countryName = (countries) => {
    return countries.map((country) => country.name);
  };

  //generates random country on button's click
  const handleClick = () => {
    setRandomCountry(countries[Math.floor(Math.random() * countries.length)]);
  };

  return (
    <div className="generator-container">
      <div className="generator-heading">Happy New Year!</div>
      <div className="generator-teaser">{randomCountry}</div>
      <Button
        text={"Surprise me"}
        onClick={handleClick}
        className={"main-button"}
      />
    </div>
  );
};

export default CountryGenerator;
