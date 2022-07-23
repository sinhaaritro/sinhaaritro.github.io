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
    chip: {
        slate: {
            color: "bg-slate-100 text-slate-800 fill-slate-800",
            hover: "",
        },
        gray: {
            color: "bg-gray-100 text-gray-800 fill-gray-800",
            hover: "",
        },
        zinc: {
            color: "bg-zinc-100 text-zinc-800 fill-zinc-800",
            hover: "",
        },
        neutral: {
            color: "bg-neutral-100 text-neutral-800 fill-neutral-800",
            hover: "",
        },
        stone: {
            color: "bg-stone-100 text-stone-800 fill-stone-800",
            hover: "",
        },
        red: {
            color: "bg-red-100 text-red-800 fill-red-800",
            hover: "",
        },
        orange: {
            color: "bg-orange-100 text-orange-800 fill-orange-800",
            hover: "",
        },
        amber: {
            color: "bg-amber-100 text-amber-800 fill-amber-800",
            hover: "",
        },
        yellow: {
            color: "bg-yellow-100 text-yellow-800 fill-yellow-800",
            hover: "",
        },
        lime: {
            color: "bg-lime-100 text-lime-800 fill-lime-800",
            hover: "",
        },
        green: {
            color: "bg-green-100 text-green-800 fill-green-800",
            hover: "",
        },
        emerald: {
            color: "bg-emerald-100 text-emerald-800 fill-emerald-800",
            hover: "",
        },
        teal: {
            color: "bg-teal-100 text-teal-800 fill-teal-800",
            hover: "",
        },
        cyan: {
            color: "bg-cyan-100 text-cyan-800 fill-cyan-800",
            hover: "",
        },
        sky: {
            color: "bg-sky-100 text-sky-800 fill-sky-800",
            hover: "",
        },
        blue: {
            color: "bg-blue-100 text-blue-800 fill-blue-800",
            hover: "",
        },
        indigo: {
            color: "bg-indigo-100 text-indigo-800 fill-indigo-800",
            hover: "",
        },
        violet: {
            color: "bg-violet-100 text-violet-800 fill-violet-800",
            hover: "",
        },
        purple: {
            color: "bg-purple-100 text-purple-800 fill-purple-800",
            hover: "",
        },
        fuchsia: {
            color: "bg-fuchsia-100 text-fuchsia-800 fill-fuchsia-800",
            hover: "",
        },
        pink: {
            color: "bg-pink-100 text-pink-800 fill-pink-800",
            hover: "",
        },
        rose: {
            color: "bg-rose-100 text-rose-800 fill-rose-800",
            hover: "",
        },
    },
};
