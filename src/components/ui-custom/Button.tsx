
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  withGlow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    children, 
    fullWidth = false,
    isLoading = false,
    withGlow = false,
    ...props 
  }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-htech-800 text-white hover:bg-htech-900 active:bg-htech-950 focus-visible:ring-htech-800",
      secondary: "bg-htech-100 text-htech-900 hover:bg-htech-200 active:bg-htech-300 focus-visible:ring-htech-200",
      outline: "border border-htech-200 bg-transparent text-htech-900 hover:bg-htech-50 active:bg-htech-100 focus-visible:ring-htech-100",
      ghost: "bg-transparent text-htech-900 hover:bg-htech-50 active:bg-htech-100 focus-visible:ring-htech-100",
      link: "bg-transparent text-htech-800 underline-offset-4 hover:underline p-0 h-auto focus-visible:ring-0 hover:text-htech-950",
    };
    
    const sizes = {
      sm: "h-9 px-4 py-2 text-xs",
      md: "h-10 px-5 py-2.5",
      lg: "h-12 px-8 py-3 text-base",
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? "w-full" : "",
          withGlow ? "button-glow" : "",
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
