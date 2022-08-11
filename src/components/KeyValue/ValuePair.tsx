import { WithClassName } from "lib/interfaces/withClassName";

type ValuePairProps = WithClassName<{}>;

function ValuePair({ className = "", children, ...props }: ValuePairProps) {
  return (
    <p className={`font-normal text-base ${className}`} {...props}>
      {children}
    </p>
  );
}

export default ValuePair;
