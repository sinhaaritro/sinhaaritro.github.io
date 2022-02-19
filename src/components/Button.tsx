import React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secrondary" | "link";
    children: string | React.ReactNode;
}

const buttonClass = {
    primary: "p-2 capitalize hover:bg-slate-700 hover:text-slate-100",
    secrondary:
        "px-2 py-1 border-2 border-slate-700 rounded capitalize hover:bg-slate-700 hover:text-slate-100",
    link: "py-1 rounded hover:underline",
};

const PrimaryButton = ({
    variant = "primary",
    className,
    children,
    ...props
}: ButtonProps) => {
    const finalClassName = `m-2 font-medium ${buttonClass[variant]} ${className}`;
    return (
        <button className={finalClassName} {...props}>
            {children}
        </button>
    );
};

export default PrimaryButton;
