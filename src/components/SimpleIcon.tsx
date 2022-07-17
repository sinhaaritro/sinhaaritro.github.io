import { WithClassName } from "lib/interfaces/withClassName";
import { SimpleIcon as SimpleIconInterface } from "simple-icons";
import * as icons from "simple-icons/icons";

export type SimpleIconProps = WithClassName<{
    iconName: string;
    text?: string;
    color?: string;
}>;

const SimpleIcon = ({ iconName, className }: SimpleIconProps) => {
    // @ts-ignore:
    const icon: SimpleIconInterface = icons[`si${iconName}`];

    return (
        <span
            className={`h-6 w-6 ${className}`}
            dangerouslySetInnerHTML={{ __html: icon.svg }}
        ></span>
    );
};

export default SimpleIcon;
