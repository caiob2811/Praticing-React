import React, { useState } from "react";

export default function AppFour() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [highLimit, setHighLimit] = useState('10');
    const [lowLimit, setLowLimit] = useState('0');

    function increment() {
        if (count < highLimit) { 
            setCount(count + 1);
        }
        if (count + 1 === highLimit) { 
            setMessage("Limite máximo atingido!");
            setTimeout(() => setMessage(""), 2000);
        }
    }

    function decrement() {
        if (count > lowLimit) {
            setCount(count - 1);
        }

        if (count - 1 === lowLimit) {
            setMessage("Limite mínimo atingido!");
            setTimeout(() => setMessage(""), 2000);
        }
    }

    function highLimits(event) {
        setHighLimit(Number(event.target.value));
    }

    function lowLimits(event) {
        setLowLimit(Number(event.target.value));
    }

    return (
        <div>
            <h1>Contador com limite</h1>
            <div>
                <h3>{count}</h3>
                {message && <p>{message}</p>}
            </div>

            <button onClick={increment} disabled={count >= highLimit}>
                Incrementar
            </button>
            <button onClick={decrement} disabled={count <= lowLimit}>
                Decrementar
            </button>

            <div>
                <h2>Escolha seu limite máximo e mínimo</h2>
                <label>Máximo:</label>
                <input onChange={highLimits} value={highLimit} min={lowLimit + 1} />
                <label>Mínimo:</label>
                <input onChange={lowLimits} value={lowLimit} max={highLimit - 1} />
            </div>
        </div>
    );
}
