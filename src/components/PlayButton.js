import "./PlayButton.css";

export default function PlayButton({
  children,
  message,
  onClick,
  onPlay,
  onPause,
}) {
  let playing = false; //Not to use this approach
  function handleClick(e) {
    e.stopPropagation();
    playing ? onPause() : onPlay();
    playing = !playing;
  }

  return (
    <button onClick={handleClick}>
      {children} : {playing ? "||" : ">"}
    </button>
  );
}
