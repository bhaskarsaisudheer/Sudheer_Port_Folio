import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "accent" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-primary/20 text-primary border border-primary/30": variant === "default",
          "bg-secondary/20 text-secondary border border-secondary/30": variant === "secondary",
          "bg-accent/20 text-accent border border-accent/30": variant === "accent",
          "border border-white/10 text-muted": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
