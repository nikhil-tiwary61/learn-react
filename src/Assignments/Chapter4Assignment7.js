export default function Close({ children }) {
  function handleClick(e) {
    window.close();
  }
  return <button onClick={handleClick}>{children}</button>;
}
