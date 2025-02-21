import { React } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Card(props) {
  return (
    <div className="my-style">  {/* consegue aplicar, pois estão aplicados na estrutura do componente e não na chamada do componente*/}
      <h2>{props.name}</h2>
      <img src={props.img} alt="img1" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

root.render(
  <div>
    <h1>Alunos do curso</h1>

    <Card
      /*  className="my-style" Não consegue aplicar */
      name="Josué"
      img="https://static8.depositphotos.com/1067257/874/v/950/depositphotos_8744393-stock-illustration-happy-guy-cheering.jpg"
      tel="55 123456-7891"
      email="josue@gmail.com"
    />

    <Card
      name="John"
      img="https://static8.depositphotos.com/1067257/874/v/950/depositphotos_8744393-stock-illustration-happy-guy-cheering.jpg"
      tel="+55 234567-8910"
      email="john@gmail.com"
    />

    <input id="fName" />
  </div>
);
