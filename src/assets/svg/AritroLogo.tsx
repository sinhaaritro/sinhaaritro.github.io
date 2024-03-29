import React from "react";

interface AritroLogoProps extends React.SVGProps<SVGSVGElement> {
  mainColor?: string;
  bgColor?: string;
}

function AritroLogo({ mainColor, bgColor, ...props }: AritroLogoProps) {
  return (
    <svg width="50" height="50" fill="none" viewBox="0 0 50 50" {...props}>
      <rect width="50" height="50" fill={bgColor || "#EDF2F7"} rx="25" />
      <path
        fill={mainColor || "#1A202C"}
        d="M17.138 27.672l-5.272 12.886H8.66L23.931 3h2.88l4.877 12.301c-1.091.38-1.67.657-2.62 1.307l-1.985-5.175c-.217-.488-.507-1.257-.87-2.304-.362-1.048-.67-1.973-.923-2.777a62.9 62.9 0 01-.924 2.777 90.263 90.263 0 00-.815 2.357l-5.38 13.41h7.774c.244 1.17.473 1.78 1.07 2.776h-9.877z"
      />
      <path
        fill={mainColor || "#1A202C"}
        d="M42.841 34.34c0 2.078-.76 3.707-2.28 4.888C39.04 40.41 36.957 41 34.313 41c-1.278 0-2.49-.11-3.636-.328-1.124-.197-2.082-.492-2.875-.886V36.44c.881.393 1.917.754 3.107 1.082 1.19.306 2.402.46 3.636.46 1.586 0 2.776-.307 3.57-.919.793-.612 1.19-1.433 1.19-2.46 0-.722-.188-1.324-.563-1.805-.352-.503-.914-.963-1.685-1.378-.772-.416-1.785-.875-3.041-1.378-1.168-.437-2.204-.951-3.107-1.542a6.624 6.624 0 01-2.083-2.198c-.507-.875-.76-1.947-.76-3.215 0-1.925.705-3.434 2.116-4.528 1.41-1.094 3.26-1.64 5.553-1.64 1.278 0 2.457.13 3.536.393 1.102.24 2.149.58 3.14 1.017l-1.123 2.92a20.625 20.625 0 00-2.777-.918c-.925-.24-1.884-.361-2.876-.361-1.3 0-2.291.284-2.974.853-.684.569-1.025 1.312-1.025 2.23 0 .723.165 1.335.496 1.838.33.481.86.919 1.586 1.312.727.394 1.686.832 2.876 1.313 1.322.525 2.446 1.082 3.371 1.673.948.569 1.664 1.269 2.149 2.1.485.809.727 1.826.727 3.05z"
      />
    </svg>
  );
}

export default AritroLogo;
