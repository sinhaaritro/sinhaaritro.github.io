import { createContext, useContext, useMemo, useState } from "react";
import {
  ThemeContextInterface,
  ThemeContextProviderProps,
  ThemeTypes,
} from "./app-theme.interface";

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: null,
  changeTheme: null,
});

export const useThemeContext = () => useContext(ThemeContext);

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeTypes>("light");

  const changeTheme = (type: ThemeTypes) => {
    if (type === "light") setTheme("light");
    if (type === "dark") setTheme("dark");
    if (type === "system") setTheme("light");
  };

  const ThemeContextProviderValue = useMemo(
    () => ({ theme, changeTheme }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={ThemeContextProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
