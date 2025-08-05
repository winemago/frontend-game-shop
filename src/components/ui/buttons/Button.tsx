import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "transparent" | "default" | "outline";
  size?: "default" | "sm";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "rounded-common transition-all duration-200 hover:opacity-90 flex items-center";

  const sizeClasses = {
    default: "px-6 py-4",
    sm: " text-sm",
  };

  const variantClasses = {
    primary: "bg-fill-primary text-text-on-fill ",
    secondary: "bg-fill-tertiary text-primary border border-stroke-secondary",
    transparent: "bg-transparent text-text-neutral gap-1 p-0",
    default: "bg-fill-primary text-text-on-fill",
    outline:
      "bg-transparent text-primary border border-stroke-secondary hover:bg-fill-tertiary",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${
        variantClasses[variant]
      } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
