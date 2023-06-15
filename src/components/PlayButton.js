import "./PlayButton.css";

export default function PlayButton({
  children,
  message,
  onClick,
  onPlay,
  onPause,
}) {
  let playing = false;
  function handleClick() {
    playing ? onPause() : onPlay();
    playing = !playing;
  }

  return <button onClick={handleClick}>{children}</button>;
}
