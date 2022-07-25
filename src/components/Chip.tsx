import { concatObjectValues, useThemeContext } from "config/theme";
import { WithClassName } from "lib/interfaces/withClassName";
import simpleIcons from "simple-icons";

export type ChipProps = WithClassName<{
  icon?: string;
  text?: string;
  variant?: "small" | "large";
}>;

function Chip({ icon, text, variant = "small" }: ChipProps) {
  const { theme } = useThemeContext();

  const chipClassNameFromTheme = concatObjectValues(
    theme?.chip?.[variant] || {},
  );

  const textSize = variant === "small" ? "text-md" : "text-lg";
  const className = `flex items-center m-1 px-2 py-1 ${chipClassNameFromTheme} font-semibold $ rounded-full ${textSize}`;

  let iconSvg;
  if (icon !== undefined) iconSvg = simpleIcons.Get(icon);

  return (
    <div className={className}>
      {iconSvg && (
        <span
          className="h-6 w-6"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: iconSvg.svg }}
        />
      )}
      {iconSvg && text && <div className="m-1" />}
      <span className="">{text}</span>
    </div>
  );
}

export default Chip;
