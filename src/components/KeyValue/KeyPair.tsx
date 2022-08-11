import { WithClassName } from "lib/interfaces/withClassName";

export type KeyPairProps = WithClassName<{}>;

function KeyPair({ className = "", children, ...props }: KeyPairProps) {
  return (
    <p className={`font-semibold text-xl ${className}`} {...props}>
      {children}
    </p>
  );
}

export default KeyPair;
