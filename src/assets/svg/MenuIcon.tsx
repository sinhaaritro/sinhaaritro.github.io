import React from "react";

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  mainColor?: string;
  bgColor?: string;
}

function MenuIcon({ mainColor, bgColor, ...props }: MenuIconProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H32C34.2091 0 36 1.79086 36 4V32C36 34.2091 34.2091 36 32 36H4C1.79086 36 0 34.2091 0 32V4Z"
        fill={bgColor || "#4A5568"}
      />
      <path
        d="M6 27H30C30.825 27 31.5 26.325 31.5 25.5C31.5 24.675 30.825 24 30 24H6C5.175 24 4.5 24.675 4.5 25.5C4.5 26.325 5.175 27 6 27ZM6 19.5H30C30.825 19.5 31.5 18.825 31.5 18C31.5 17.175 30.825 16.5 30 16.5H6C5.175 16.5 4.5 17.175 4.5 18C4.5 18.825 5.175 19.5 6 19.5ZM4.5 10.5C4.5 11.325 5.175 12 6 12H30C30.825 12 31.5 11.325 31.5 10.5C31.5 9.675 30.825 9 30 9H6C5.175 9 4.5 9.675 4.5 10.5Z"
        fill={mainColor || "#F7FAFC"}
      />
    </svg>
  );
}

export default MenuIcon;
