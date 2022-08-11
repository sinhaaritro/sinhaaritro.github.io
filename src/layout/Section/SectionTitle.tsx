import { WithClassName } from "lib/interfaces/withClassName";

type SectionTitleProps = WithClassName<{ text?: string }>;

function SectionTitle({ text, className, children }: SectionTitleProps) {
  return (
    <h1
      className={`font-bold py-3 text-4xl text-center bg-primary-200 rounded-t-2xl border-b border-neutral-400 p-2 ${className}`}
    >
      {text || children}
    </h1>
  );
}

export default SectionTitle;
