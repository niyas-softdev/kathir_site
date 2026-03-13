"use client";

import { motion } from "framer-motion";
import {
    CheckCircle2,
    MessageSquare,
    FileSignature,
    PenTool,
    HardHat,
    Key
} from "lucide-react";
import Image from "next/image";

const processes = [
    {
        title: "Discussion",
        icon: MessageSquare,
        image: "/discussion.jpg",
        points: [
            "Initial meeting to understand scope and objectives.",
            "Discuss design ideas, functional needs, and timelines.",
            "Explore preliminary budget considerations."
        ],
        color: "text-blue-500",
        bgColor: "bg-blue-50"
    },
    {
        title: "Signing Agreement",
        icon: FileSignature,
        image: "signning.jpg",
        points: [
            "Formalize project scope, budget, and timelines.",
            "Review and finalize contract terms and conditions.",
            "Obtain necessary permissions and approvals."
        ],
        color: "text-green-500",
        bgColor: "bg-green-50"
    },
    {
        title: "Design Finalization",
        icon: PenTool,
        image: "design-finalization.jpg",
        points: [
            "Prepare initial blueprints and gather client feedback.",
            "Refine designs with material, color palette, and layout selections.",
            "Generate final 3D renders and walkthroughs for approval."
        ],
        color: "text-purple-500",
        bgColor: "bg-purple-50"
    },
    {
        title: "Execution",
        icon: HardHat,
        image: "execussion.jpg",
        points: [
            "Site preparation and groundwork.",
            "Construction and installation as per approved designs.",
            "Regular quality checks to meet high standards."
        ],
        color: "text-[#e83e3e]",
        bgColor: "bg-[#e83e3e]/10"
    },
    {
        title: "Handover",
        icon: Key,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
        points: [
            "Comprehensive quality assurance and final inspections.",
            "Client walkthrough and feedback collection.",
            "Handover of keys and necessary documentation."
        ],
        color: "text-amber-500",
        bgColor: "bg-amber-50"
    }
];

export default function Process() {
    return (
        <section className="py-20 md:py-28 bg-[#fdfdfd] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e83e3e]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#e83e3e] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 bg-[#e83e3e]/10 px-4 py-1.5 rounded-full inline-block"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-widest leading-tight"
                    >
                        Our Streamlined <br className="hidden md:block" /> Construction Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        From concept to completion, experience a transparent and efficient journey ensuring your dream project is built to perfection.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Center Timeline Line for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 bg-gray-100 -translate-x-1/2 rounded-full"></div>

                    <div className="space-y-16 md:space-y-24">
                        {processes.map((process, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${!isEven ? "lg:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Timeline Node (Desktop only) */}
                                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-gray-100 items-center justify-center z-10 shadow-md">
                                        <div className={`w-10 h-10 rounded-full ${process.bgColor} flex items-center justify-center`}>
                                            <span className={`font-black text-lg ${process.color}`}>{index + 1}</span>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="w-full lg:w-1/2 relative group">
                                        <div className={`relative h-[250px] sm:h-[350px] md:h-[400px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl ${!isEven ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                            <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                            <Image
                                                src={process.image}
                                                alt={process.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />

                                            {/* Mobile Number Badge */}
                                            <div className="lg:hidden absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur shadow-lg z-20 flex items-center justify-center">
                                                <span className={`font-black text-xl ${process.color}`}>0{index + 1}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full lg:w-1/2">
                                        <div className={`bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-xl hover:border-gray-100 transition-all duration-300 relative overflow-hidden ${isEven ? 'lg:mr-8' : 'lg:ml-8'}`}>

                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`w-14 h-14 rounded-2xl ${process.bgColor} flex items-center justify-center shrink-0`}>
                                                    <process.icon className={`w-7 h-7 ${process.color}`} strokeWidth={1.5} />
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{process.title}</h3>
                                            </div>

                                            <div className="space-y-4 relative z-10">
                                                {process.points.map((point, ptIdx) => (
                                                    <div key={ptIdx} className="flex items-start gap-3 group/point">
                                                        <div className={`mt-1 bg-gray-50 rounded-full p-1 group-hover/point:${process.bgColor} transition-colors duration-300 shrink-0`}>
                                                            <CheckCircle2 className={`w-4 h-4 text-gray-400 group-hover/point:${process.color} transition-colors duration-300`} strokeWidth={2.5} />
                                                        </div>
                                                        <p className="text-gray-600 leading-relaxed group-hover/point:text-gray-900 transition-colors duration-300">
                                                            {point}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Decorative Background Icon */}
                                            <process.icon className={`absolute -bottom-8 -right-8 w-40 h-40 ${process.color} opacity-5 -rotate-12 pointer-events-none`} />
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
