import React, { useEffect, useRef, useState } from "react";

export default function AppRef () {

    const [name, setName] = useState('')

    const previousName = useRef()

    useEffect( () => {
        previousName.current = name
    }, [name])

    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleChange} />
            <p>Hello! My name is {name}</p>
            <p>And my name was {previousName.current}</p>
        </div>
    )
}

