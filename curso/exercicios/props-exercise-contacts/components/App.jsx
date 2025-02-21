import React from "react";
import contatos from "../contacts";
import Card from "./Card";

import "../styles.css";

export default function App() {
  return (
    <div>
      <h1 className="name">Meus Contatos</h1>
      <Card
        name={contatos[0].name}
        img={contatos[0].imgUrl}
        tel={contatos[0].tel}
        email={contatos[0].email}
      />
      <Card
        name={contatos[1].name}
        img={contatos[1].imgUrl}
        tel={contatos[1].tel}
        email={contatos[1].email}
      />

      <Card
        name={contatos[2].name}
        img={contatos[2].imgUrl}
        tel={contatos[2].tel}
        email={contatos[2].email}
      />
    </div>
  );
}
