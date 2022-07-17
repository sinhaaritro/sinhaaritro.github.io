import { concatObjectValues } from "./concat-object-values";
import { Theme } from "./theme.interface";
import ThemeContextProvider, {
    ThemeContext,
    useThemeContext,
} from "./ThemeContext";
import { defaultLightTheme } from "./themes";

export type { Theme };
export {
    ThemeContextProvider,
    useThemeContext,
    concatObjectValues,
    ThemeContext,
    defaultLightTheme,
};
