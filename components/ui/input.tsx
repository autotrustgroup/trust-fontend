import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label = "", value, id, ...props }, ref) => {
    const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
    return (
      <div className="relative w-full h-full">
        <input
          id={inputId}
          type={type}
          className={cn(
            "peer flex w-full border border-input bg-transparent px-4 pt-5 pb-2 text-base transition-colors placeholder-transparent ring-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          value={value}
          placeholder=" " // Keeps space for floating label
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "absolute left-3 top-3 text-xs text-gray-500 transition-all cursor-text",
            value
              ? "top-1 text-xs text-gray-500 peer-placeholder-shown:top-0"
              : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:top-3 peer-focus:text-xs peer-focus:text-gray-500"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
