import { cn } from "@/lib/utils";

export default function Section({
    children,
    className,
    id,
    fullWidth = false,
    ...props
}) {
    return (
        <section
            id={id}
            className={cn("relative py-20 md:py-32", className)}
            {...props}
        >
            <div
                className={cn(
                    "container mx-auto px-4 md:px-6",
                    fullWidth ? "max-w-none px-0" : ""
                )}
            >
                {children}
            </div>
        </section>
    );
}
