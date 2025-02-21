import React, { use, useState } from "react";

export default function TripsCard (props) {

   const [isSelected, setIsSelected] = useState(false)
   const [submitted, setSubbmited] = useState(false)

   function handleSelection () {
        setIsSelected(!isSelected)
   }

   function handleSubmit () {
        setSubbmited(true)
   }

    return (
        <div className="trip-box">
            <h2>{props.name}</h2>
            <img className="trips-img" src={props.img} alt={props.alt} 
            />
        <div>

         </div>
            <input type="radio" onChange={handleSelection} id={`trip-${props.name}`}
                name="trip-selection" />
            <div>
                  
                <label htmlFor={`trip-${props.name}`}>Escolha uma opção

                </label>
            </div>
                {isSelected && (<p>Opção Selecionada</p>)}
                <button onClick={handleSubmit} disabled={!isSelected}>Enviar</button>

                {submitted && (<p>Resposta enviada com sucesso</p>)}
            </div>        
    )
}