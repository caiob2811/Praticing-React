import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

/*
Exercício: 
1- Dado que você pode obter a hora atual usando:*/
//let hourNow = new Date().toLocaleTimeString();
//Mostra a hora atual no <h1> quando o botão atualizar é pressionado.

//2- Dado que você pode obter o código a ser chamado a cada segundo
//usando o método setInterval.
//Você consegue o tempo em seu <h1> para atualizar a cada segundo?

//por exemplo: descomente o código abaixo para ver dizerOi()
//impresso a cada segundo

//---------------

/* function dizerOi() {
  console.log("Ei");
}

setInterval(dizerOi, 1000);
 */

