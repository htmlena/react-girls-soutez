import { useState } from "react";
import "./style.css";
import Snowflakes from "../Snowflakes/Snowflakes";

const Button = ({ text, onClick, className }) => {
  const [snowflakes, setSnowflakes] = useState(false);

  const handleSnow = () => {
    setSnowflakes(true);
    setTimeout(() => {
      clearSnow();
    }, 1000 / 3);
  };

  const clearSnow = () => {
    setSnowflakes(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onClick();
          handleSnow();
        }}
        className={className}
      >
        {text}
      </button>
      {snowflakes ? <Snowflakes /> : null}
    </>
  );
};

export default Button;
