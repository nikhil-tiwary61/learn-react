import "./PlayButton.css";
import { useState } from "react";

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

  return (
    <button onClick={handleClick}>
      {children} : {playing ? "⏸️" : "⏯️"}
    </button>
  );
}
