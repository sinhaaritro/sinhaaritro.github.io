export interface Theme {
    primary?: ColorScheme;
    secondary?: ColorScheme;
    error?: ColorScheme;
    warning?: ColorScheme;
    success?: ColorScheme;
    greys?: ColorShades;
    icon?: {
        color?: string;
        height?: string;
        width?: string;
    };
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

interface ColorScheme extends ColorShades {
    text?: string;
}
