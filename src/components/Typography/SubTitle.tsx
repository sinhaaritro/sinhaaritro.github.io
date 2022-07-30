import { useThemeContext } from "config/theme";
import { WithClassName } from "lib/interfaces/withClassName";

type SubTitleProps = WithClassName<{ text?: string }>;

function SubTitle({ text, className, children }: SubTitleProps) {
  const { theme } = useThemeContext();

  return (
    <h1
      className={`font-semibold text-3xl text-center ${theme?.primary?.[200]} ${className}`}
    >
      {text || children}
    </h1>
  );
}

export default SubTitle;
