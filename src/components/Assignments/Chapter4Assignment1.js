export default function Assignment1({ onMouseOver }) {
  function handleMouseOver(e) {
    e.stopPropagation();
    e.target.style["transform"] = "scale(1.1,1.1)";
    e.target.style["transition"] = ".5s";
  }
  function handleMouseOut(e) {
    e.stopPropagation();
    e.target.style["transform"] = "scale(1,1)";
    e.target.style["transition"] = ".5s";
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
