import useSound from "use-sound";
import Button from "../Button/Button";
import music from "../../assets/vintage-music-box.mp3";

const Sound = () => {
  const [play] = useSound(music);

  return (
    <div>
      <Button text={"Sound on"} onClick={play} />
    </div>
  );
};

export default Sound;
