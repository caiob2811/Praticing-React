import React, { useState } from "react";
import "../styles.css";

export default function App() {
  setInterval(updateHour, 1000);

  let hourNow = new Date().toLocaleTimeString();
  const [time, setTime] = useState(hourNow);

  function updateHour() {
    const newHour = new Date().toLocaleTimeString();
    setTime(newHour);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateHour}>Atualizar</button>
    </div>
  );
}
