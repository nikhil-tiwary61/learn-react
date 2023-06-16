export default function Form() {
  function handlePreventReload(e) {
    e.preventDefault();
  }
  return (
    <>
      <form action="">
        <input type="text" />
        <button onClick={handlePreventReload}>Submit</button>
      </form>
    </>
  );
}
