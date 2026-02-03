"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                {/* Placeholder for construction site video/image */}
                <div className="absolute inset-0 bg-[#0A1F44]">
                    {/* You can replace this Image with a realistic construction site image */}
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/60 to-transparent"></div>
                </div>
            </motion.div>

            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <span className="inline-block px-4 py-1 mb-6 border border-secondary/50 rounded-full text-secondary font-medium tracking-widest text-sm uppercase bg-black/20 backdrop-blur-sm">
                        Est. 2012 — Premier Construction & Engineering
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
                        You <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-highlight">Dream</span> About It, <br />
                        We <span className="text-white">Build</span> Before It.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        Transforming visions into industrial, commercial, and residential realities.
                        Safe, cost-effective, and quality-driven engineering solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" className="group">
                            View Projects
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                            Contact Us
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown />
                </motion.div>
            </motion.div>
        </section>
    );
}
