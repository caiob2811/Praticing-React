import React from "react";

export default function Header() {
  const d = new Date("2024 18:05");
  const hour = d.getHours();

  const colorPhrase = {
    color: "",
  };

  let phrase;

  if (hour < 12) {
    phrase = "Bom dia";
    colorPhrase.color = "purple";
  } else if (hour >= 12 && hour < 18) {
    phrase = "Boa tarde";
    colorPhrase.color = "green";
  } else {
    phrase = "Boa noite";
    colorPhrase.color = "blue";
  }

  return (
    <h1 className="title" style={colorPhrase}>
      {phrase}, são {hour}h
    </h1>
  );
}
