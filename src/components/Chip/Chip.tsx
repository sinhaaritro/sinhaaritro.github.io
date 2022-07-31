import { WithClassName } from "lib/interfaces/withClassName";
import chipStyles from "./ChipStyles";

export type ChipStyleColor = keyof typeof chipStyles;

export type ChipProps = WithClassName<{
  chipStyle: ChipStyleColor;
}>;

function Chip({ chipStyle = "neutral", className = "", children }: ChipProps) {
  return (
    <div
      className={`flex items-center justify-center gap-2 px-3 py-1 font-semibold rounded-full border-2 border-transparent hover:cursor-pointer ${chipStyles[chipStyle]} ${className}`}
    >
      {children}
    </div>
  );
}

export default Chip;
