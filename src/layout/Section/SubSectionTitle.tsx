import { WithClassName } from "lib/interfaces/withClassName";

type SubSectionTitleProps = WithClassName<{ text?: string }>;

function SubSectionTitle({ text, className, children }: SubSectionTitleProps) {
  return (
    <h2
      className={`font-bold py-3 text-3xl text-center bg-primary-200 border-y border-neutral-500 p-1 ${className}`}
    >
      {text || children}
    </h2>
  );
}

export default SubSectionTitle;
