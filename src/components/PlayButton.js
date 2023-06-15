import "./PlayButton.css";

export default function PlayButton({ children, message, onClick }) {
  function handleClick() {
    onClick();
  }

  return <button onClick={handleClick}>{children}</button>;
}
