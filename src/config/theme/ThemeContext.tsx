import { createContext, useContext, useState } from "react";
import {
    ThemeContextInterface,
    ThemeContextProviderProps,
    themeTypes,
} from "./app-theme.interface";
import { defaultLightTheme } from "./themes";

export const ThemeContext = createContext<ThemeContextInterface>({
    theme: null,
    changeTheme: null,
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState(defaultLightTheme);

    const changeTheme = (type: themeTypes) => {
        if (type === "light") setTheme(defaultLightTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
