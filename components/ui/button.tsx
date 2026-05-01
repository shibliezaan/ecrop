import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center px-4 py-2 text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-notion-blue disabled:pointer-events-none disabled:opacity-50 rounded-notion";
    
    const variants = {
      primary: "bg-notion-blue text-white hover:bg-notion-blue-dark",
      secondary: "bg-black/5 text-notion-black hover:bg-black/10",
      outline: "whisper-border bg-transparent text-notion-black hover:bg-black/5",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";