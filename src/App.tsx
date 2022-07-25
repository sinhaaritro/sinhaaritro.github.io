import { ThemeContextProvider } from "config/theme";
import HomePage from "pages/Homepage";

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <HomePage />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
