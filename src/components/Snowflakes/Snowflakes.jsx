import { Fireworks } from "fireworks/lib/react";

const Snowflakes = () => {
  let fxProps = {
    count: 2,
    interval: 1000 / 4,
    colors: ["#F9F6EE", "#FAF9F6", "#e5f8e5"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 6) - (i + 1) * -250,
      y: 350 + Math.random() * 200 - 50 + (i === 2 ? -80 : 0),
    }),
  };
  return (
    <div>
      <Fireworks {...fxProps} />
    </div>
  );
};

export default Snowflakes;
