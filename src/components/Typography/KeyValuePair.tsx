import { WithClassName } from "lib/interfaces/withClassName";
import React from "react";

type KeyValuePairProps = WithClassName<{
  keyItem: React.ReactNode;
  keyClassname?: string;
  valueItem: React.ReactNode;
  valueClassname?: string;
}>;

function KeyValuePair({
  keyItem,
  keyClassname,
  valueItem,
  valueClassname,
  className,
  children,
}: KeyValuePairProps) {
  return (
    <div className={className}>
      {!children ? (
        <>
          {typeof keyItem === "string" ? (
            <p className={`font-semibold text-xl ${keyClassname}`}>{keyItem}</p>
          ) : (
            { keyItem }
          )}
          {typeof valueItem === "string" ? (
            <p className={`font-normal text-base ${valueClassname}`}>
              {valueItem}
            </p>
          ) : (
            { valueItem }
          )}
        </>
      ) : (
        children
      )}
    </div>
  );
}

export default KeyValuePair;
