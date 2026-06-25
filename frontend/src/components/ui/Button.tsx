import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Button from "@/component/ui/Button";

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
            "px-5 py-2.5 rounded-xl font-medium transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",

          "bg-slate-200 text-slate-900 hover:bg-slate-300":
            variant === "secondary",

          "border border-slate-300 hover:bg-slate-100":
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
