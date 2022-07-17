export interface Theme extends ThemeTokens, ThemeAtom {
    icon?: {
        color?: string;
        height?: string;
        width?: string;
    };
}

export interface ThemeTokens {
    primary?: ColorScheme;
    secondary?: ColorScheme;
    accent?: ColorScheme;
    error?: ColorScheme;
    warning?: ColorScheme;
    success?: ColorScheme;
    neutral?: ColorShades;
}

interface ColorShades {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
}

export interface ColorScheme extends ColorShades {
    textColor?: string;
}

export interface ThemeAtom {
    button?: ButtonTypeTheme;
}

export interface ButtonTypeTheme {
    primary?: ButtonTheme;
    secondary?: ButtonTheme;
    link?: ButtonTheme;
}

export interface ButtonTheme {
    generic?: string;
    color?: string;
    shadow?: string;
    hover?: string;
    focus?: string;
    active?: string;
}
