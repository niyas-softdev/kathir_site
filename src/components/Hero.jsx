"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Play, Building2, MapPin , FileText } from "lucide-react";
import Link from "next/link";


export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

            {/* Background Parallax Image */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/home-hero4.png')] bg-cover bg-center"></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/30 to-transparent"></div>
                </div>
            </motion.div>

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            ></div>

            {/* Main Container */}
            <div className="container relative z-10 px-4 md:px-6 w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-3/5 text-center lg:text-left"
                    >
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            <span className="text-white font-medium tracking-widest text-xs sm:text-sm uppercase">
                                Award Winning Construction Company
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4">
                            Building Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-highlight">
                                Dream Space
                            </span>{" "}
                            <br />
                            With Excellence
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                            Over 15 years of unmatched expertise in transforming visions
                            into premium commercial, industrial, and residential realities
                            across the region.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

  {/* Explore Projects */}
  <Link href="/portfolio">
    <Button
      size="lg"
      className="group h-14 px-8 text-lg font-semibold bg-secondary text-primary hover:bg-secondary/90"
    >
      Explore Projects
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  </Link>

  {/* Get Quote */}
  <Link href="/contact">
    <Button
      variant="outline"
      size="lg"
      className="group h-14 px-8 text-lg font-semibold border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-primary transition-all"
    >
      <FileText className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
      Get Quote
    </Button>
  </Link>

</div>
                    </motion.div>

                    {/* Right Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full lg:w-2/5 hidden md:flex flex-col gap-10 relative"
                    >
                        {/* Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-secondary/20 rounded-full blur-[100px] -z-10"></div>

                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl ml-auto w-3/4"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl mb-1">
                                        Premium Quality
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        ISO 9001:2015 Certified construction materials and execution.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-primary/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl mr-auto w-3/4 -mt-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl mb-1">
                                        Prime Locations
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        Delivering benchmark projects across premium city zones.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* ISO Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-6 -right-2 w-24 h-24 bg-secondary rounded-full flex items-center justify-center p-1 border-4 border-primary shadow-xl"
                        >
                            <div className="w-full h-full rounded-full border border-primary/20 flex flex-col items-center justify-center text-primary">
                                <span className="font-bold text-lg leading-none">ISO</span>
                                <span className="text-[10px] font-semibold">9001:2015</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
            >
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase">
                    Scroll to Discover
                </span>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
                >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}