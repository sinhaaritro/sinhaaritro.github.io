import Button, { ButtonProps } from "./Button";

export interface LinkButtonProps extends ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function LinkButtton({
  onClick,
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Button
      className={`font-medium p-1 rounded capitalize hover:bg-neutral-700 hover:text-neutral-100 hover:underline ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default LinkButtton;
