import { ThemeContextProvider } from "config/theme";
import HomePage from "pages/Homepage";

function App() {
  return (
    <ThemeContextProvider>
      <HomePage />
    </ThemeContextProvider>
  );
}

export default App;
