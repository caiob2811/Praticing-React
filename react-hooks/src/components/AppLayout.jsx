import React, { useEffect, useState } from "react";

export default function AppLayout() {

    const [count, setCount] = useState(0);

    useEffect (() => {
        console.log(count)
    },[count])

    function increment() {
        setCount((prevCount) => prevCount + 1)
    }

    function decrement() {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}