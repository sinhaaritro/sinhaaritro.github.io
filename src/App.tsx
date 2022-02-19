import { ThemeContextProvider } from "theme";
import HomePage from "pages/Homepage";

const App = () => {
    return (
        <div className="app">
            <ThemeContextProvider>
                <HomePage />
            </ThemeContextProvider>
        </div>
    );
};

export default App;
