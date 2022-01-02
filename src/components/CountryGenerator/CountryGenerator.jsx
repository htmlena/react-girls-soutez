import { useState, useEffect } from "react";
import Button from "../Button/Button";

const CountryGenerator = () => {
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState(
    "Want to know what to visit?"
  );

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((result) => {
        setCountries(countryName(result));
      });
  }, []);

  const countryName = (countries) => {
    return countries.map((country) => country.name);
  };

  const handleClick = () => {
    setRandomCountry(countries[Math.floor(Math.random() * countries.length)]);
  };

  return (
    <div>
      <div>{randomCountry}</div>
      <Button text={"Country"} onClick={handleClick} />
    </div>
  );
};

export default CountryGenerator;
