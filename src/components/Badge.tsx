import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "soft" | "light";
  className?: string;
}

export default function Badge({
  children,
  variant = "soft",
  className = "",
}: BadgeProps) {
  const style =
    variant === "soft"
      ? "bg-success-subtle text-success-emphasis text-uppercase tracking-wide"
      : "bg-white text-success";

  return (
    <span className={`badge rounded-pill px-3 py-2 ${style} ${className}`}>
      {children}
    </span>
  );
}
