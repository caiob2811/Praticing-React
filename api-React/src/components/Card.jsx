import React from "react";

export default function Card (props) {
    return (
        <div className="card-box">
            <h2 className="card-h2">{props.name}</h2>
            <img className="card-img" src={props.img} alt={props.alt} />
            <p>Tel: {props.tel}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}