export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full";

export interface ButtonProps {
  title: string;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  className?: string;
}

