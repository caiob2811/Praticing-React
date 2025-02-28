import ThemeContextProvider from "../contexts/theme-context";
import Home from "./Home";

export default function AppContext() {
    return (
    <ThemeContextProvider>
        <Home />
    </ThemeContextProvider>
    )
}
