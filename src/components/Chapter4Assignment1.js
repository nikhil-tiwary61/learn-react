export default function Assignment1({ onMouseOver }) {
  function handleMouseOver(e) {
    e.stopPropagation();
    console.log("Mouse Over");
  }
  function handleMouseOut(e) {
    e.stopPropagation();
    console.log("Mouse Out");
  }
  function handleDoubleClick(e) {
    e.stopPropagation();
    alert("Button was double-clicked");
  }
  function handleClick(e) {
    e.stopPropagation();
    console.log("Button was single clicked");
  }
  return (
    <>
      <img
        src="https://loremflickr.com/160/180"
        alt="DummyImage"
        className="image"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Button
      </button>
      <input type="text" />
    </>
  );
}
