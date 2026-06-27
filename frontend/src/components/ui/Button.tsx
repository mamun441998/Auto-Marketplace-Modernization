"use client";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";


type ButtonVariant =

| "primary"
| "secondary"
| "outline"
| "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

export default function Button({
    variant = "primary",
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button 
        className={clsx(
            "inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",

        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",

          "bg-slate-200 text-slate-900 hover:bg-slate-300":
            variant === "secondary",

          "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100":
            variant === "outline",

          "bg-red-600 text-white hover:bg-red-700":
            variant === "danger",

        },

        className
        )}
         {...props}
        >
            {children}
        
        </button> 
        );
}
