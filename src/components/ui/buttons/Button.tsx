import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "transparent";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "w-full px-6 py-4 rounded-common transition-all duration-200 hover:opacity-90";

  const variantClasses = {
    primary: "bg-fill-primary text-text-on-fill ",
    secondary: "bg-fill-tertiary text-primary border border-stroke-secondary",
    transparent: "bg-transparent text-gray-700",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
