export default function Assignment1({ onMouseOver }) {
  let hover = false;
  function handleMouseOver(e) {
    e.stopPropagation();
    console.log("Mouse Over");
    hover = true;
  }
  function handleMouseOut(e) {
    e.stopPropagation();
    console.log("Mouse Out");
    hover = false;
  }
  function handleDoubleClick(e) {
    e.stopPropagation();
    alert("Button was double-clicked");
  }
  function handleClick(e) {
    e.stopPropagation();
    console.log("Button was single clicked");
  }
  function handleFocus(e) {
    e.stopPropagation();
    console.log("Focused on the Textbox");
  }
  function handleBlur(e) {
    e.stopPropagation();
    console.log("Out of Textbox");
  }
  function handleCut(e) {
    e.stopPropagation();
    alert("Selected element cut");
  }
  function handleCopy(e) {
    e.stopPropagation();
    alert("Copied");
  }
  function handlePaste(e) {
    e.stopPropagation();
    alert("Pasted");
  }

  return (
    <>
      <img
        src="https://loremflickr.com/160/180"
        alt="DummyImage"
        className="image"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={hover ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}
      />
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Button
      </button>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onCut={handleCut}
        onCopy={handleCopy}
        onPaste={handlePaste}
      />
    </>
  );
}
