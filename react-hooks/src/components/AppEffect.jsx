import React from "react";
import { useState, useEffect } from "react";

export default function AppEffect () {

    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
       .then((response => response.json()))
       .then((json) => console.log(json))
    }, [resourceType])

    function changeResourceType (resourceType) {
        setResourceType(resourceType)
    }

    return (
        <div>
            <h1>{resourceType}</h1>
                <div style={{display: "flex", alignItems: "center"}}>
                <button onClick={() => changeResourceType("posts")}>Posts</button>
                <button onClick={() => changeResourceType("comments")}>Comments</button>
                <button onClick={() => changeResourceType("todos")}>Todos</button>
                </div>
        </div>
    )
}