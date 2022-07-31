import { WithClassName } from "lib/interfaces/withClassName";

type SubTitleProps = WithClassName<{ text?: string }>;

function SubTitle({ text, className, children }: SubTitleProps) {
  return (
    <h1
      className={`font-bold py-3 text-3xl text-center bg-primary-200 ${className}`}
    >
      {text || children}
    </h1>
  );
}

export default SubTitle;
