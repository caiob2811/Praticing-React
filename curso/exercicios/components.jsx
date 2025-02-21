/* Components */

import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Teste() {
  return <h1>Lista</h1>;
}
root.render(
  <div>
    <Teste /> {/* ou <Teste></Teste> */}
    <ul>
      <li>Lista</li>
      <li>Lista</li>
      <li>Lista</li>
    </ul>
  </div>
);