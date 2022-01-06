import { useState } from "react";
import "./style.css";
import useSound from "use-sound";
import Button from "../Button/Button";
import music from "../../assets/vintage-music-box.mp3";

const Sound = ({}) => {
  const [play, { stop }] = useSound(music);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    play();
  };

  const handleStop = () => {
    setIsPlaying(false);
    stop();
  };

  return (
    <div>
      <Button text={"Sound on"}></Button>
      <div
        className="material-icons-container"
        onClick={isPlaying ? handleStop : handlePlay}
      >
        <span class="material-icons-outlined">music_note</span>
      </div>
    </div>
  );
};

export default Sound;
