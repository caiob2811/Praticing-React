import React from "react";

const date = new Date()
const year = date.getFullYear()


export default function Footer () {
    return(
        <div className="footer">
            <p className="footer-p">{year} - Todos os direitos Reservados</p>
        </div>
    )
}