import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
  });

  return <p>{date}</p>;
};

export default Clock;
