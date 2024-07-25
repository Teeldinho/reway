import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex uppercase font-suezOne items-center justify-center whitespace-nowrap rounded-md text-sm leading-[22.2px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border-[3px] border-primary shadow-sm hover:bg-primary/10 text-primary",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-transparent text-primary hover:text-primary/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[42px] px-6 py-2 rounded",
        sm: "h-[42px] rounded-md px-6 text-[17px] leading-[22.2px]",
        md: "h-[58px] rounded-md px-8 text-[20px] leading-[26.12px]",
        lg: "h-[85px] rounded-md px-8 text-[28px] leading-[39.18px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
