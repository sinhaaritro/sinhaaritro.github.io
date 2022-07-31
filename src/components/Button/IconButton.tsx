import Button, { ButtonProps } from "./Button";

export interface IconButtonProps extends ButtonProps {
  frontIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function IconButton({
  frontIcon,
  endIcon,
  onClick,
  className = "",
  children,
  ...props
}: IconButtonProps) {
  return (
    <Button
      className={`font-medium p-1 rounded capitalize hover:bg-neutral-700 hover:text-neutral-100 hover:underline ${className}`}
      onClick={onClick}
      {...props}
    >
      {frontIcon}
      {children}
      {endIcon}
    </Button>
  );
}

export default IconButton;
