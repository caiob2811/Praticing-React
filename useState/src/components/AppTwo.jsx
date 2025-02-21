import React, {useState } from "react";

export default function AppTwo () {
    
    const [count , setCount] = useState(0);
    const [message, setMessage] = useState("");

    function incrementar () {
        setCount((prevCount) => {
            const newCount = prevCount + 1;

            if (newCount === 5) {
                setMessage("Metade do caminho!");
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            }

            if(newCount === 10) {
                return 0;
            }

            return newCount
        })
    }

    function decrementar () {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h1>Contagem de cliques: {count}</h1>
            {message && <p>{message}</p>}
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}