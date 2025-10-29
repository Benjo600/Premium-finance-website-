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
    "transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
    "relative overflow-hidden",
  ],
  {
    variants: {
      variant: {
        default: "gradient-button-default",
        primary: "gradient-button-primary",
        secondary: "gradient-button-secondary",
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-9 py-4 text-lg',
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export type GradientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof gradientButtonVariants> & {
    asChild?: boolean;
  };

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }