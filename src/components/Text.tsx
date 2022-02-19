import React from "react";

// interface SubTitleProp<T extends keyof JSX.IntrinsicElements>
//     extends JSX.IntrinsicElements[T],
//         React.HTMLAttributes<T> {
//     htmlElement: T;
// }

type SubTitleProps<T extends keyof JSX.IntrinsicElements> = {
    htmlElement?: T;
} & JSX.IntrinsicElements[T];

const Text = <T extends keyof JSX.IntrinsicElements>({
    htmlElement,
    children,
    ...props
}: SubTitleProps<T>) => {
    return React.createElement(htmlElement || "div", { ...props }, children);
};

export default Text;
