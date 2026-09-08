import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:opacity-50 disabled:pointer-events-none uppercase text-xs md:text-sm font-medium",
          {
            "bg-brand-charcoal text-brand-ivory hover:bg-black hover:shadow-lg dark:bg-brand-ivory dark:text-brand-charcoal dark:hover:bg-white":
              variant === "primary",
            "bg-brand-gold text-white hover:bg-[#a68c63] hover:shadow-md":
              variant === "secondary",
            "border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-ivory dark:border-brand-ivory dark:text-brand-ivory dark:hover:bg-brand-ivory dark:hover:text-brand-charcoal":
              variant === "outline",
            "hover:text-brand-gold bg-transparent text-brand-charcoal dark:text-brand-ivory":
              variant === "ghost",
            "h-10 px-4 py-2": size === "sm",
            "h-12 px-6 py-3": size === "md",
            "h-14 px-8 py-4 text-sm md:text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
