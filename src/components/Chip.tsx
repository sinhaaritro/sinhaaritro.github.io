import { concatObjectValues, useThemeContext } from "config/theme";
import { WithClassName } from "lib/interfaces/withClassName";
import simpleIcons from "simple-icons";

export type ChipProps = WithClassName<{
    icon?: string;
    text?: string;
    variant?: "small" | "large";
}>;

const Chip = ({ icon, text, variant = "small" }: ChipProps) => {
    const { theme } = useThemeContext();

    const chipClassNameFromTheme = concatObjectValues(
        theme?.chip?.[variant] || {}
    );

    const textSize = variant === "small" ? "text-md" : "text-lg";
    const className = `flex items-center m-1 px-2 py-1 ${chipClassNameFromTheme} font-semibold $ rounded-full`;

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
