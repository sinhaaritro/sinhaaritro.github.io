import Button, { ButtonProps } from "./Button";

export interface PrimaryButtonProps extends ButtonProps {}

function PrimaryButton({
  className = "",
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button
      className={`font-medium p-2 rounded capitalize hover:bg-neutral-700 hover:text-neutral-100 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
