import { WithChildren } from "lib/interfaces/withChildren";
import { Theme } from "./theme.interface";

export type themeTypes = "light" | "dark" | "system";

export interface ThemeContextInterface {
    theme: Theme | null;
    changeTheme: ((type: themeTypes) => void) | null;
}

export type ThemeContextProviderProps = WithChildren<{}>;
