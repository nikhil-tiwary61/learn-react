import ThemeContext from "../context/ThemeContext";
import "./PlayButton.css";
import { useContext, useState } from "react";

export default function PlayButton({
  children,
  message,
  onPress,
  onPlay,
  onPause,
}) {
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    e.stopPropagation();
    playing ? onPause() : onPlay();
    setPlaying(!playing);

    //Chapter 4 assignment 5
    // onPress(message);
  }
  const theme = useContext(ThemeContext);

  return (
    <button className={theme} onClick={handleClick}>
      {children} : {playing ? "⏸️" : "⏯️"}
    </button>
  );
}
