import React, { createContext, FC } from "react";
import { Theme } from "./theme.interface";
import { defaultLightTheme } from "./themes";

type ThemeContextProviderProps = { theme?: Theme; children: React.ReactNode };

export const ThemeContext = createContext<Theme>(defaultLightTheme);

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
    theme,
    children,
}: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme || defaultLightTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
