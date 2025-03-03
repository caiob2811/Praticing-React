import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => { },
});

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
