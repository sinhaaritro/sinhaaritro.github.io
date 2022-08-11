import { WithClassName } from "lib/interfaces/withClassName";
import React from "react";
import KeyPair from "./KeyPair";
import ValuePair from "./ValuePair";

type KeyValuePairProps = WithClassName<{
  children:
    | React.ReactElement<typeof KeyPair | typeof ValuePair>
    | React.ReactElement<typeof KeyPair | typeof ValuePair>[];
}>;

function KeyValuePair({
  className = "",
  children,
  ...props
}: KeyValuePairProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export default KeyValuePair;
