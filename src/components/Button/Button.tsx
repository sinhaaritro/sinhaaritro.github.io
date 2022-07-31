export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tooltip?: string;
}

function Button({
  className = "",
  children,
  ...props
}: ButtonProps): JSX.Element {
  const isDisable = props.disabled;

  return (
    <button
      className={`flex items-center justify-center whitespace-no-wrap transition duration-200 ${
        isDisable && "disabled:opacity-50 disabled:cursor-not-allowed"
      } ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
