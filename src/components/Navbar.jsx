"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Certificates", href: "/certificates" },
        { name: "Services", href: "/services" },

    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check if link is active
    const isActive = (path) => pathname === path;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled || pathname !== "/" // Always solid if not on home
                    ? "bg-white/90 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                 <Link href="/" className="flex items-center gap-3 group">

    {/* Logo */}
    <div className="relative w-20 h-20 flex-shrink-0">
      <Image
        src="/logo.png"
        alt="Kathir Constructions Logo"
        fill
        className="object-contain"
        priority
      />
    </div>

    {/* Logo Text */}
    <div className="flex flex-col leading-tight">
      <span
        className={cn(
          "text-lg font-bold tracking-tight uppercase",
          scrolled || pathname !== "/" ? "text-primary" : "text-white"
        )}
      >
        Kathir
      </span>

      <span className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase">
        Constructions
      </span>
    </div>

  </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-semibold tracking-wide uppercase hover:text-secondary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full",
                                scrolled || pathname !== "/" ? "text-primary" : "text-white/90",
                                isActive(link.href) && "text-secondary after:w-full"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a href="tel:+919876543210" className={cn("flex items-center gap-2 font-bold", scrolled || pathname !== "/" ? "text-primary" : "text-white")}>
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                            <Phone size={14} />
                        </div>
                        <span className="hidden lg:inline">+91 98765 43210</span>
                    </a>
                    <Link href="/contact">
                        <Button variant={scrolled || pathname !== "/" ? "primary" : "white"} size="sm" className="hidden lg:flex gap-2">
                            Get Quote <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-secondary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} color={scrolled || pathname !== "/" ? "#0A1F44" : "#FFFFFF"} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-primary font-bold uppercase tracking-wider py-3 border-b border-gray-100 hover:text-secondary hover:pl-2 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full mt-4">Get a Free Quote</Button>
                </div>
            )}
        </header>
    );
}
