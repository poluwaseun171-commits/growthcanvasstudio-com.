import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium cursor-pointer transition-all duration-500 ease-[var(--ease-luxe)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-500",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-champagne hover:text-charcoal",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-transparent hover:border-bronze hover:text-bronze",
        secondary: "bg-secondary text-secondary-foreground hover:bg-bronze hover:text-charcoal",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        /* Premium CTAs */
        bronze:
          "bg-bronze text-charcoal hover:bg-champagne hover:text-charcoal [&_svg]:group-hover/btn:translate-x-0.5 [&_svg]:group-hover/btn:-translate-y-0.5",
        line: "border border-champagne/30 text-champagne hover:border-bronze hover:text-bronze [&_svg]:group-hover/btn:translate-x-0.5 [&_svg]:group-hover/btn:-translate-y-0.5",
        ink: "bg-charcoal text-champagne hover:bg-bronze hover:text-charcoal [&_svg]:group-hover/btn:translate-x-0.5 [&_svg]:group-hover/btn:-translate-y-0.5",
        "ink-line":
          "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-champagne [&_svg]:group-hover/btn:translate-x-0.5 [&_svg]:group-hover/btn:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-7 text-[0.9rem] tracking-wide",
        xl: "h-14 px-8 text-[0.95rem] tracking-wide",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
