"use client";

import { motion } from "framer-motion";
import {
    Award,
    ShieldCheck,
    Clock,
    Users,
    Eye,
    Compass
} from "lucide-react";
import Image from "next/image";

// Original Kathir content adapted to the radial layout
const reasons = [
    {
        id: 1,
        icon: Users,
        title: "Unmatched Expertise",
        description: "15+ years of experience and a team of highly skilled professionals dedicated to excellence.",
        position: "left", // top-left
        delay: 0.1
    },
    {
        id: 2,
        icon: Award,
        title: "Quality Assurance",
        description: "ISO 9001:2015 certified, ensuring premium quality in every single project we undertake.",
        position: "left", // middle-left
        delay: 0.3
    },
    {
        id: 3,
        icon: Eye,
        title: "Transparency and Trust",
        description: "Clear communication and tracking mechanisms so you are always informed about project status.",
        position: "left", // bottom-left
        delay: 0.5
    },
    {
        id: 4,
        icon: Compass,
        title: "Vastu Compliant",
        description: "Deep expertise in creating modern homes that strictly adhere to Vastu principles.",
        position: "right", // top-right
        delay: 0.2
    },
    {
        id: 5,
        icon: Clock,
        title: "On-Time Delivery",
        description: "We understand the importance of deadlines and consistently deliver projects on schedule.",
        position: "right", // middle-right
        delay: 0.4
    },
    {
        id: 6,
        icon: ShieldCheck,
        title: "Personalized Approach",
        description: "Dedicated architects and project managers to cater specifically to your unique needs.",
        position: "right", // bottom-right
        delay: 0.6
    }
];

export default function WhyChooseUs() {
    // Assigning icons to variables to avoid JSX syntax errors with array indices
    const Icon0 = reasons[0].icon;
    const Icon1 = reasons[1].icon;
    const Icon2 = reasons[2].icon;
    const Icon3 = reasons[3].icon;
    const Icon4 = reasons[4].icon;
    const Icon5 = reasons[5].icon;

    return (
        <section className="py-20 md:py-28 bg-[#f8f9fa] relative overflow-hidden">

            {/* Background Image / Blur (Optional, representing the faded gavel in the image) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                {/* Placeholder for background faded image */}
                <div className="w-[800px] h-[800px] bg-gray-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-6 md:mb-12 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-[#1e3a63] mb-4 uppercase tracking-wider" // Dark blue color matching the image text
                    >
                        Why Kathir <span className="text-[#e83e3e]">Stands Apart</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-sm md:text-base leading-relaxed mb-6"
                    >
                        Choosing Kathir Constructions means Choosing uncompromising quality, absolute transparency, and a partner fully committed to bringing your vision to life exactly as you imagined it.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-4 bg-white p-3 md:p-4 rounded-full border border-gray-100 shadow-md mx-auto"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e83e3e]/10 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-[#e83e3e] font-black text-sm md:text-base">15+</span>
                        </div>
                        <p className="font-bold text-[#1e3a63] text-sm md:text-base pr-4">Years of Building Excellence</p>
                    </motion.div>
                </div>

                {/* --- MOBILE LAYOUT (< lg) --- */}
                <div className="lg:hidden flex flex-col items-center space-y-12 mt-12">
                    {/* Center Image for Mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-64 h-64 rounded-full border-[10px] border-white shadow-xl overflow-hidden bg-[#1e3a63]"
                    >
                        <Image
                            src="/founder.jpg" // Construction professional
                            alt="Professional"
                            fill
                            className="object-cover object-top"
                        />
                        {/* Vignette effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,#1e3a63_120%)]"></div>
                    </motion.div>

                    {/* Features Grid Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
                        {reasons.map((reason) => {
                            const Icon = reason.icon;
                            return (
                                <motion.div
                                    key={reason.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: reason.delay }}
                                    className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                                >
                                    <div className="w-16 h-16 rounded-full bg-[#1e3a63] flex items-center justify-center text-white mb-4 shadow-md">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* --- DESKTOP LAYOUT (lg and up) --- */}
                <div className="hidden lg:flex relative w-full max-w-6xl mx-auto h-[600px] items-center justify-center mt-12">

                    {/* Background Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.05))' }}>
                        {/* Lines Left to Center */}
                        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.1 }} x1="25%" y1="20%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="3" />
                        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} x1="20%" y1="50%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="3" />
                        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} x1="25%" y1="80%" x2="50%" y2="50%" stroke="#e2e8f0" strokeWidth="3" />

                        {/* Lines Center to Right */}
                        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} x1="50%" y1="50%" x2="75%" y2="20%" stroke="#e2e8f0" strokeWidth="3" />
                        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} x1="50%" y1="50%" x2="80%" y2="50%" stroke="#e2e8f0" strokeWidth="3" />
                        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} x1="50%" y1="50%" x2="75%" y2="80%" stroke="#e2e8f0" strokeWidth="3" />
                    </svg>

                    {/* Central Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full z-20 border-[12px] border-white shadow-[0_10px_40px_rgba(30,58,99,0.2)] bg-gradient-to-b from-[#3a67a8] to-[#1e3a63] flex items-end justify-center overflow-hidden"
                    >
                        <Image
                            // Using a placeholder of a professional construction worker/architect matching the pose roughly
                            src="/founder.jpg"
                            alt="Central Professional"
                            fill
                            className="object-cover object-top  opacity-90" // Makes the image blend elegantly with the blue background
                        />
                        {/* Vignette to blend the bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1e3a63] to-transparent z-10"></div>
                    </motion.div>

                    {/* Features Array */}

                    {/* LEFT SIDE ITEMS */}
                    {/* Item 1 - Top Left */}
                    <div className="absolute top-[10%] left-[8%] w-[320px] flex items-center justify-end z-10">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-right mr-5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-sm"
                        >
                            <h3 className="font-bold text-[#1e3a63] text-lg">{reasons[0].title}</h3>
                            <p className="text-gray-600 text-[13px] mt-1 leading-snug">{reasons[0].description}</p>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                            className="w-14 h-14 rounded-full bg-[#1e3a63] flex items-center justify-center text-white shadow-lg shrink-0 border-[3px] border-white relative z-20"
                        >
                            <Icon0 size={24} />
                        </motion.div>
                    </div>

                    {/* Item 2 - Middle Left */}
                    <div className="absolute top-[45%] left-[2%] w-[320px] flex items-center justify-end z-10">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-right mr-5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-sm"
                        >
                            <h3 className="font-bold text-[#1e3a63] text-lg">{reasons[1].title}</h3>
                            <p className="text-gray-600 text-[13px] mt-1 leading-snug">{reasons[1].description}</p>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
                            className="w-14 h-14 rounded-full bg-[#1e3a63] flex items-center justify-center text-white shadow-lg shrink-0 border-[3px] border-white relative z-20"
                        >
                            <Icon1 size={24} />
                        </motion.div>
                    </div>

                    {/* Item 3 - Bottom Left */}
                    <div className="absolute top-[80%] left-[8%] w-[320px] flex items-center justify-end z-10">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-right mr-5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-sm"
                        >
                            <h3 className="font-bold text-[#1e3a63] text-lg">{reasons[2].title}</h3>
                            <p className="text-gray-600 text-[13px] mt-1 leading-snug">{reasons[2].description}</p>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6, type: "spring" }}
                            className="w-14 h-14 rounded-full bg-[#1e3a63] flex items-center justify-center text-white shadow-lg shrink-0 border-[3px] border-white relative z-20"
                        >
                            <Icon2 size={24} />
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE ITEMS */}
                    {/* Item 4 - Top Right */}
                    <div className="absolute top-[10%] right-[8%] w-[320px] flex items-center justify-start z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                            className="w-14 h-14 rounded-full bg-[#1e3a63] flex items-center justify-center text-white shadow-lg shrink-0 border-[3px] border-white relative z-20"
                        >
                            <Icon3 size={24} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-left ml-5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-sm"
                        >
                            <h3 className="font-bold text-[#1e3a63] text-lg">{reasons[3].title}</h3>
                            <p className="text-gray-600 text-[13px] mt-1 leading-snug">{reasons[3].description}</p>
                        </motion.div>
                    </div>

                    {/* Item 5 - Middle Right */}
                    <div className="absolute top-[45%] right-[2%] w-[320px] flex items-center justify-start z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
                            className="w-14 h-14 rounded-full bg-[#1e3a63] flex items-center justify-center text-white shadow-lg shrink-0 border-[3px] border-white relative z-20"
                        >
                            <Icon4 size={24} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-left ml-5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-sm"
                        >
                            <h3 className="font-bold text-[#1e3a63] text-lg">{reasons[4].title}</h3>
                            <p className="text-gray-600 text-[13px] mt-1 leading-snug">{reasons[4].description}</p>
                        </motion.div>
                    </div>

                    {/* Item 6 - Bottom Right */}
                    <div className="absolute top-[80%] right-[8%] w-[320px] flex items-center justify-start z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
                            className="w-14 h-14 rounded-full bg-[#1e3a63] flex items-center justify-center text-white shadow-lg shrink-0 border-[3px] border-white relative z-20"
                        >
                            <Icon5 size={24} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-left ml-5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-sm"
                        >
                            <h3 className="font-bold text-[#1e3a63] text-lg">{reasons[5].title}</h3>
                            <p className="text-gray-600 text-[13px] mt-1 leading-snug">{reasons[5].description}</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
