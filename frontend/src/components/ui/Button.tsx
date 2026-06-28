"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "danger";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  };

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        // Base
        "inline-flex items-center justify-center",
        "rounded-xl font-semibold",
        "transition-all duration-200",
        "whitespace-nowrap",
        "select-none",

        // Focus
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-blue-500",
        "focus:ring-offset-2",

        // Disabled
        "disabled:pointer-events-none",
        "disabled:opacity-50",

        // Size
        {
          "h-9 px-4 text-sm": size === "sm",
          "h-11 px-5 text-sm": size === "md",
          "h-12 px-6 text-base": size === "lg",
        },

        // Variant
        {
          "bg-blue-600 text-white shadow-sm hover:bg-blue-700":
            variant === "primary",

          "bg-slate-100 text-slate-900 hover:bg-slate-200":
            variant === "secondary",

          "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50":
            variant === "outline",

          "bg-red-600 text-white hover:bg-red-700":
            variant === "danger",
        },

        className
      )}
    >
      {children}
    </button>
  );
}