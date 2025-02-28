import React from "react";
import { useTheme } from "../contexts/theme-context";

export default function Home() {
    const { theme, toggleTheme } = useTheme(); // 🔥 Obtendo o contexto corretamente

    return (
        <div
            style={{
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                padding: "20px",
                height: "100vh"
            }}
        >
            <h1>Tema atual: {theme}</h1>
            <button onClick={toggleTheme}>Alternar Tema</button>
        </div>
    );
}