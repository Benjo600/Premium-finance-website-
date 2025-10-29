
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center",
    "rounded-[11px]",
    "font-[500] text-white",
    "font-sans font-bold",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0",
  ],
  {
    variants: {
      visual: {
        default: "",
        alternate: "gradient-button-variant",
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-9 py-4 text-lg',
      }
    },
    defaultVariants: {
      visual: "default",
      size: "md",
    },
  }
)

// FIX: Changed interface to a type alias to correctly resolve VariantProps.
// This ensures `visual` and `size` are recognized as valid props.
export type GradientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof gradientButtonVariants> & {
    asChild?: boolean;
  };

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, visual, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ visual, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }