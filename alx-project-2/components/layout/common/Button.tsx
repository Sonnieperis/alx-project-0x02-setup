import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClassMap: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "text-sm px-3 py-1",
  medium: "text-base px-4 py-2",
  large: "text-lg px-5 py-3",
};

const defaultSize: NonNullable<ButtonProps["size"]> = "medium";
const defaultShape: NonNullable<ButtonProps["shape"]> = "rounded-md";

const Button: React.FC<ButtonProps> = ({
  title,
  size = defaultSize,
  shape = defaultShape,
  onClick,
  className = "",
}) => {
  const sizeClasses = sizeClassMap[size];
  const shapeClass = shape; // it already matches tailwind rounded-* classes

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center font-medium bg-blue-600 text-white hover:bg-blue-700 transition ${sizeClasses} ${shapeClass} ${className}`}
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
