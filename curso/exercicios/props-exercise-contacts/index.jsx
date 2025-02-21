import { React } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <App />
  </div>
);

/* 1- Aplicar estilos CSS ao componente App.jsx
    2- Extraia o Card de contato como um componente de cartão reutilizável.
    3- Use props para renderizar o card de contato padrão do Pr Josue 
    para que o componente Card posso ser reutilizado para outros contatos.
    4- Importe o arquivo contacts.jsx para criar os componentes do Card.
  */
