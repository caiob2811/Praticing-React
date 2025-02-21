import React, { useState } from "react";

export default function App () {
    const [mostrarTexto, setMostrarTexto] = useState(false)
    const [sendText, setSendText] = useState("")
   
    function mostrar() {
        setMostrarTexto(!mostrarTexto)
    }

    function textoDigitado (e) {
        setSendText(e.target.value)
    }
    
    return (
        <div>
           <h1>Oi! {mostrarTexto && <h2>{sendText}</h2>}  </h1>
           <input type="text" onChange={textoDigitado} placeholder="Digite o seu texto aqui!" value={sendText}/>
           <button onClick={mostrar}>
                {mostrarTexto ? "Ocultar texto" : "Mostrar texto"}
           </button>
        </div>
    )
}