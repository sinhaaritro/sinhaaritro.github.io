import { concatObjectValues, useThemeContext } from "config/theme";
import { WithClassName } from "lib/interfaces/withClassName";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    WithClassName<{}> {
  variant?: "primary" | "secondary" | "link";
}

function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps): JSX.Element {
  const { theme } = useThemeContext();

  const buttonClassNameFromTheme = concatObjectValues(
    theme?.button?.[variant] || {},
  );

  const finalClassName = `m-2 font-medium ${buttonClassNameFromTheme} ${className}`;
  return (
    <button className={finalClassName} type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
