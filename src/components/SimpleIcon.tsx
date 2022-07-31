import { WithClassName } from "lib/interfaces/withClassName";
import { SimpleIcon as SimpleIconInterface } from "simple-icons";
import * as icons from "simple-icons/icons";

export type SimpleIconProps = WithClassName<{
  iconName: string;
  text?: string;
  color?: string;
}>;

function SimpleIcon({ iconName, className = "" }: SimpleIconProps) {
  // @ts-ignore:
  const icon: SimpleIconInterface = icons[`si${iconName}`];
  // icons.siNo
  return (
    <div
      className={`h-6 w-6 ${className}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
}

export default SimpleIcon;
