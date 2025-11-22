import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ label, size, shape }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const className = `${sizeClasses[size]} bg-blue-600 text-white ${shape}`;

  return <button className={className}>{label}</button>;
};

export default Button;
