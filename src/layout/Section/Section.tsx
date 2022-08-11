import { WithClassName } from "lib/interfaces/withClassName";

type SectionProps = WithClassName<{
  id: string;
}>;

function Section({ id, className = "", children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={`my-3 mx-2 max-w-screen-2xl flex flex-col place-content-around h-full grow rounded-2xl drop-shadow bg-primary-100 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
