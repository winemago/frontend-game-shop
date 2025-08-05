import Link from "next/link";
import { ReactNode } from "react";
import Button from "@/components/ui/buttons/Button";

type RedirectButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "transparent" | "default" | "outline";
  size?: "default" | "sm";
  className?: string;
};

export default function RedirectButton({
  href,
  children,
  variant = "transparent",
  size = "sm",
  className = "",
}: RedirectButtonProps) {
  return (
    <Link href={href}>
      <Button variant={variant} size={size} className={className}>
        {children}
      </Button>
    </Link>
  );
}
