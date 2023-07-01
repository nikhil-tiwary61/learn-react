import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    console.log(id);
  }, []);
  return (
    <div>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</div>
  );
}
