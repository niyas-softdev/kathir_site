import { cn } from "@/lib/utils";

export default function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}) {
    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl",
        secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-md",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
        ghost: "text-primary hover:bg-primary/5",
        white: "bg-white text-primary hover:bg-gray-100 shadow-md",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center font-bold tracking-wide rounded-sm transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
