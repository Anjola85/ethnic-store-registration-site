import React, { CSSProperties } from "react";
import "./button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
  color?: string;
  style?: CSSProperties;
}

// const Button = ({
//   children,
//   className,
//   color,
//   backgroundColor,
//   onClick,
// }: ButtonProps) => {
//   return (
//     <span
//       className={`${className} button`}
//       onClick={onClick}
//       style={{
//         color: color || "#fff",
//         backgroundColor: backgroundColor || "#000",
//       }}
//     >
//       {children}
//     </span>
//   );
// };

const Button = ({
  children,
  className = "",
  style = {},
  color,
  backgroundColor,
  onClick,
}: ButtonProps) => {
  const mergedStyles = {
    color: color || "#fff",
    backgroundColor: backgroundColor || "#000",
    ...style,
  };

  return (
    <span
      className={`${className} button`}
      onClick={onClick}
      style={{
        color: color || "#000",
        backgroundColor: backgroundColor || "transparent",
      }}
    >
      {children}
    </span>
  );
};

export default Button;
