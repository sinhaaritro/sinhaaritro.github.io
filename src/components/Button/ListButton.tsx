import Button, { ButtonProps } from "./Button";

export interface ListButtonProps extends ButtonProps {
  linkClick: () => void;
}

function ListButton({
  className = "",
  children,
  linkClick,
  title,
  ...props
}: ListButtonProps) {
  return (
    <li
      className={`w-full flex text-center first:rounded-t last:rounded-b ${className}`}
      onClick={linkClick}
      tabIndex={0}
      title={title}
    >
      <Button
        className="grow m-1 font-medium p-2 rounded text-neutral-900 hover:bg-neutral-400"
        tabIndex={-1}
        {...props}
      >
        {children}
      </Button>
    </li>
  );
}

export default ListButton;
