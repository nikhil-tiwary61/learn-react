import { useRef, useState } from "react";

//useRef is used when something is not needed to be re-rendered but its value has to be remembered
export default function Counter() {
  const [number, setNumber] = useState(0);
  let num = useRef(0);
  function handleClick(e) {
    console.log("Render counter");
    e.stopPropagation();
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    num.current++;
    console.log(num.current);
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}
