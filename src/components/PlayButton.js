import "./PlayButton.css";

export default function PlayButton({ name, message }) {
  function handleClick() {
    console.log(message);
  }

  return <button onClick={handleClick}>{name}</button>;
}
