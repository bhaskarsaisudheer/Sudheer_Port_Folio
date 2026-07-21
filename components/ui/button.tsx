import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { cloneElement, forwardRef, isValidElement } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40",
        secondary:
          "bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 hover:border-secondary/50",
        outline:
          "border border-white/10 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20",
        ghost: "text-muted hover:text-white hover:bg-white/5",
        gradient:
          "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg hover:opacity-90 hover:scale-[1.02]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(classes, (children as React.ReactElement<{ className?: string }>).props.className),
      });
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
