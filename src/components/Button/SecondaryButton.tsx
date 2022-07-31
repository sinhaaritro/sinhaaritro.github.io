import Button, { ButtonProps } from "./Button";

export interface SecondaryButtonProps extends ButtonProps {}

function SecondaryButton({
  className = "",
  children,
  ...props
}: SecondaryButtonProps) {
  return (
    <Button
      className={`font-medium px-2 py-1 border-2 rounded capitalize border-neutral-700 hover:bg-neutral-700 hover:text-neutral-100 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

export default SecondaryButton;
