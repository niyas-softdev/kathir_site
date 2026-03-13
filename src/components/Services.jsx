"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
    Factory,
    Home,
    Warehouse,
    Fan,
    PaintBucket,
    Ruler,
    HardHat,
} from "lucide-react";
import Link from "next/link";

const servicesData = [
    {
        icon: Factory,
        title: "Industrial",
        link: "#",
        color: "bg-[#ffb09c]",
        shadow: "shadow-[#ffb09c]/40",
    },
    {
        icon: Home,
        title: "Residential",
        link: "#",
        color: "bg-[#ff7a63]",
        shadow: "shadow-[#ff7a63]/40",
    },
    {
        icon: Warehouse,
        title: "Warehouse",
        link: "#",
        color: "bg-[#cb5333]",
        shadow: "shadow-[#cb5333]/40",
    },
    {
        icon: Ruler,
        title: "Architecture",
        link: "#",
        color: "bg-[#86452e]",
        shadow: "shadow-[#86452e]/40",
    },
    {
        icon: PaintBucket,
        title: "Renovation",
        link: "#",
        color: "bg-[#2f5eb3]",
        shadow: "shadow-[#2f5eb3]/40",
    },
    {
        icon: Fan,
        title: "HVAC",
        link: "#",
        color: "bg-[#629cf1]",
        shadow: "shadow-[#629cf1]/40",
    },
];

export default function Services() {
    return (
        <Section
            id="services"
            className="bg-[#f8f9fa] py-16 md:py-24 relative overflow-hidden"
        >
            <div className="container mx-auto max-w-7xl px-4">

                {/* SECTION HEADER */}
                <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#e83e3e] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 bg-[#e83e3e]/10 px-4 py-1.5 rounded-full"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-widest"
                    >
                        Your Vision, Our Expertise
                    </motion.h2>
                </div>

                {/* --- CIRCULAR LAYOUT (RESPONSIVE) --- */}
                <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-[900px] h-[340px] md:h-[520px] flex items-end justify-center">

                        {/* Semicircle background */}
                        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[320px] md:w-[540px] h-[160px] md:h-[270px] overflow-hidden rounded-t-full opacity-80">
                            <div className="w-[320px] md:w-[540px] h-[320px] md:h-[540px] rounded-full border-[40px] md:border-[60px] border-gray-200/50"></div>
                        </div>

                        {/* CENTER ICON */}
                        <div className="absolute bottom-[-10px] md:bottom-[-5px] left-1/2 -translate-x-1/2 w-28 h-28 md:w-44 md:h-44 bg-white rounded-full border-[4px] md:border-[6px] border-[#e83e3e] flex items-center justify-center z-40 shadow-xl group hover:scale-105 transition-transform duration-500">
                            <div className="flex items-center justify-center">
                                <HardHat className="w-10 h-10 md:w-16 md:h-16 text-[#e83e3e] drop-shadow-md" strokeWidth={1.5} />
                            </div>
                            <div className="absolute inset-1.5 md:inset-[6px] border-2 md:border-[3px] border-dashed border-gray-300 rounded-full animate-[spin_12s_linear_infinite]" />
                        </div>

                        {/* SERVICES */}
                        {servicesData.map((service, index) => {
                            const angle = -80 + index * 32;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, rotate: angle - 15 }}
                                    whileInView={{ opacity: 1, rotate: angle }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 45 }}
                                    className="absolute bottom-6 md:bottom-10 left-1/2 w-6 md:w-10 h-[270px] md:h-[460px] origin-bottom -translate-x-1/2"
                                >

                                    {/* NUMBER NODE */}
                                    <div
                                        className={`absolute top-[135px] md:top-[230px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full ${service.color} ${service.shadow} flex items-center justify-center text-white font-black text-sm md:text-2xl border-2 md:border-4 border-white z-10`}
                                        style={{ transform: `rotate(${-angle}deg)` }}
                                    >
                                        0{index + 1}
                                    </div>

                                    {/* SERVICE CARD */}
                                    <Link
                                        href={service.link}
                                        className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-24 md:w-48 group"
                                        style={{ transform: `rotate(${-angle}deg)` }}
                                    >
                                        <div className="w-14 h-14 md:w-[85px] md:h-[85px] bg-white rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center justify-center mb-2 md:mb-3 transition-all duration-300 group-hover:-translate-y-2 md:group-hover:-translate-y-3 md:group-hover:shadow-[0_15px_40px_rgb(232,62,62,0.15)] relative overflow-hidden group-hover:border-[#e83e3e]/30">
                                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${service.color}`}></div>
                                            <service.icon
                                                strokeWidth={1.5}
                                                className="w-6 h-6 md:w-9 md:h-9 text-gray-700 group-hover:text-[#e83e3e] transition-colors duration-300 z-10"
                                            />
                                        </div>

                                        <h3 className="text-[10px] md:text-[15px] font-bold uppercase text-center leading-tight text-gray-800 bg-white/90 backdrop-blur-sm px-2 md:px-4 py-1 md:py-1.5 rounded-full shadow-sm border border-gray-50 group-hover:text-[#e83e3e] group-hover:border-[#e83e3e]/20 transition-all whitespace-nowrap">
                                            {service.title}
                                        </h3>
                                    </Link>

                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </Section>
    );
}