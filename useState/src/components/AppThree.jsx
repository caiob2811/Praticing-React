import React, { useState } from "react";

export default function AppThree () {

    const [isDarkMode, setIsDarkMode] = useState(true)
    
    function mudarCor() {
        setIsDarkMode((prevTheme) => !prevTheme)
        document.body.style.backgroundColor = isDarkMode ? '#ffffff' : '#000'
        document.body.style.color = isDarkMode ? '#ffffff' : '#000'
        document.body.style.backgroundColor = isDarkMode ? '#000' : '#fff'

    }

    return (
        <div>
            <h1>Alternar modo claro e escuro</h1>
            <button onClick={mudarCor}>
                {isDarkMode ? 'Modo Escuro' : 'Modo Claro' }
            </button>
        </div>
    )
}