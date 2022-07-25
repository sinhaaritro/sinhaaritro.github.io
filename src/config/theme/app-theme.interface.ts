import { WithChildren } from "lib/interfaces/withChildren";
import { Theme } from "./theme.interface";

export type ThemeTypes = "light" | "dark" | "system";

export interface ThemeContextInterface {
  theme: Theme | null;
  changeTheme: ((type: ThemeTypes) => void) | null;
}

export type ThemeContextProviderProps = WithChildren<{}>;
