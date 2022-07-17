import { Theme } from "./theme.interface";

export const defaultLightTheme: Theme = {
    neutral: {
        50: "bg-neutral-50",
        100: "bg-neutral-100",
        200: "bg-neutral-200",
        300: "bg-neutral-300",
        400: "bg-neutral-400",
        500: "bg-neutral-500",
        600: "bg-neutral-600",
        700: "bg-neutral-700",
        800: "bg-neutral-800",
        900: "bg-neutral-900",
    },
    primary: {
        50: "bg-primary-50",
        100: "bg-primary-100",
        200: "bg-primary-200",
        300: "bg-primary-300",
        400: "bg-primary-400",
        500: "bg-primary-500",
        600: "bg-primary-600",
        700: "bg-primary-700",
        800: "bg-primary-800",
        900: "bg-primary-900",
        textColor: "",
    },
    secondary: {
        50: "bg-secondary-50",
        100: "bg-secondary-100",
        200: "bg-secondary-200",
        300: "bg-secondary-300",
        400: "bg-secondary-400",
        500: "bg-secondary-500",
        600: "bg-secondary-600",
        700: "bg-secondary-700",
        800: "bg-secondary-800",
        900: "bg-secondary-900",
        textColor: "",
    },
    icon: {
        color: "text-neutral-800",
        height: "h-10",
        width: "w-10",
    },
    button: {
        primary: {
            generic: "m-2 font-medium p-2 capitalize",
            color: "",
            hover: "hover:bg-neutral-700 hover:text-neutral-100",
        },
        secondary: {
            generic: "px-2 py-1 border-2 border-neutral-700 rounded capitalize",
            color: "",
            hover: "hover:bg-neutral-700 hover:text-neutral-100",
        },
        link: {
            generic: "py-1 rounded hover:underline",
            color: "",
            hover: "",
        },
    },
};
