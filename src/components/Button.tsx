import { concatObjectValues, useThemeContext } from "config/theme";
import { ButtonVariants } from "config/theme/theme.interface";
import { WithClassName } from "lib/interfaces/withClassName";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    WithClassName<{}> {
  variant?: ButtonVariants;
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

  return (
    <button
      className={buttonClassNameFromTheme + className}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
