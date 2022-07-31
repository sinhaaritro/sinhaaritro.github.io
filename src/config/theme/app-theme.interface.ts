import { WithChildren } from "lib/interfaces/withChildren";

export type ThemeTypes = "light" | "dark" | "system";

export interface ThemeContextInterface {
  theme: ThemeTypes | null;
  changeTheme: ((type: ThemeTypes) => void) | null;
}

export type ThemeContextProviderProps = WithChildren<{}>;
