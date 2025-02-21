import React from "react";

const date = new Date()
const hour = date.getHours()
const minutes = date.getMinutes()

let message = ''

if (hour >=6 && hour < 12) {
    message = 'Bom dia!'
} else if (hour >= 12 && hour < 18) {
    message = 'Boa tarde!'
} else  {
    message = 'Boa noite!'
}

export default function Header () {
  return (
    <div className="header">
        <h1 className="text">Seja bem vindo! São {hour}h e {minutes}m, {message}</h1>
    </div>
   
  )
}