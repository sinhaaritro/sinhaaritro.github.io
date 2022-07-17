import simpleIcons from "simple-icons";

export interface ChipProps {
    icon?: string;
    text?: string;
    color: string;
    variant?: "small" | "large";
}

export interface ChipColorInterface {
    [key: string]: {
        bg: string;
        text: string;
        fill: string;
    };
}

const chipColors: ChipColorInterface = {
    slate: {
        bg: "bg-slate-100",
        text: "text-slate-800",
        fill: "fill-slate-800",
    },
    gray: {
        bg: "bg-gray-100",
        text: "text-gray-800",
        fill: "fill-gray-800",
    },
    zinc: {
        bg: "bg-zinc-100",
        text: "text-zinc-800",
        fill: "fill-zinc-800",
    },
    neutral: {
        bg: "bg-neutral-100",
        text: "text-neutral-800",
        fill: "fill-neutral-800",
    },
    stone: {
        bg: "bg-stone-100",
        text: "text-stone-800",
        fill: "fill-stone-800",
    },
    red: {
        bg: "bg-red-100",
        text: "text-red-800",
        fill: "fill-red-800",
    },
    orange: {
        bg: "bg-orange-100",
        text: "text-orange-800",
        fill: "fill-orange-800",
    },
    amber: {
        bg: "bg-amber-100",
        text: "text-amber-800",
        fill: "fill-amber-800",
    },
    yellow: {
        bg: "bg-yellow-50",
        text: "text-yellow-800",
        fill: "fill-yellow-800",
    },
    lime: {
        bg: "bg-lime-100",
        text: "text-lime-800",
        fill: "fill-lime-800",
    },
    green: {
        bg: "bg-green-100",
        text: "text-green-800",
        fill: "fill-green-800",
    },
    emerald: {
        bg: "bg-emerald-100",
        text: "text-emerald-800",
        fill: "fill-emerald-800",
    },
    teal: {
        bg: "bg-teal-100",
        text: "text-teal-800",
        fill: "fill-teal-800",
    },
    cyan: {
        bg: "bg-cyan-100",
        text: "text-cyan-800",
        fill: "fill-cyan-800",
    },
    sky: {
        bg: "bg-sky-100",
        text: "text-sky-800",
        fill: "fill-sky-800",
    },
    blue: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        fill: "fill-blue-800",
    },
    indigo: {
        bg: "bg-indigo-100",
        text: "text-indigo-800",
        fill: "fill-indigo-800",
    },
    violet: {
        bg: "bg-violet-100",
        text: "text-violet-800",
        fill: "fill-violet-800",
    },
    purple: {
        bg: "bg-purple-100",
        text: "text-purple-800",
        fill: "fill-purple-800",
    },
    fuchsia: {
        bg: "bg-fuchsia-100",
        text: "text-fuchsia-800",
        fill: "fill-fuchsia-800",
    },
    pink: {
        bg: "bg-pink-100",
        text: "text-pink-800",
        fill: "fill-pink-800",
    },
    rose: {
        bg: "bg-rose-100",
        text: "text-rose-800",
        fill: "fill-rose-800",
    },
};

const Chip = ({ icon, text, color, variant = "small" }: ChipProps) => {
    const bgColor = color ? chipColors[color]?.bg : chipColors.slate.bg;
    const fontColor = chipColors[color]?.text;
    const svgColor = chipColors[color]?.fill;
    const textSize = variant === "small" ? "text-md" : "text-lg";
    const className = `flex items-center m-1 px-2 py-1 ${bgColor} ${textSize}  font-semibold ${fontColor} rounded-full ${svgColor}`;

    let iconSvg;
    if (icon !== undefined) iconSvg = simpleIcons.Get(icon);

    return (
        <div className={className}>
            {iconSvg && (
                <span
                    className="h-6 w-6"
                    dangerouslySetInnerHTML={{ __html: iconSvg.svg }}
                />
            )}
            {iconSvg && text && <div className="m-1"></div>}
            <span className="">{text}</span>
        </div>
    );
};

export default Chip;
