export default function Form() {
  function handlePreventReload(e) {
    e.preventDefault();
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      alert("Enter key was pressed");
    }
  }
  return (
    <>
      <form action="">
        <input type="text" onKeyDown={handleKeyPress} />
        <button onClick={handlePreventReload}>Submit</button>
      </form>
    </>
  );
}
