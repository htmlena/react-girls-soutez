import { useState } from "react";
import "./style.css";
import useSound from "use-sound";
// import Button from "../Button/Button";
import music from "../../assets/music_happy_again.mp3";

const Sound = () => {
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
      <div
        className="material-icons-container"
        onClick={isPlaying ? handleStop : handlePlay}
      >
        <span className="material-icons-outlined md-36">
          {isPlaying ? "volume_up" : "volume_mute"}
        </span>
      </div>
    </div>
  );
};

export default Sound;
