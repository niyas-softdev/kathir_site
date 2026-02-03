"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/ui/Section";
import { CheckCircle, Award, Users, Building2 } from "lucide-react";

const stats = [
    { id: 1, name: "Years of Experience", value: "12+", icon: Award },
    { id: 2, name: "Completed Projects", value: "85+", icon: Building2 },
    { id: 3, name: "Expert Engineers", value: "40+", icon: Users },
    { id: 4, name: "Client Satisfaction", value: "100%", icon: CheckCircle },
];

const certifications = ["ISO 9001:2015", "TIN Registered", "CST Certified", "WCT Compliant", "ESI & EPF Registered"];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section id="about" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Who We Are</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        Building the Future with <span className="text-secondary">Excellence</span> & Integrity
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Established in 2012 by Mr.Azhakathiresan, Kathir Constructions has grown into a premier engineering and construction firm.
                        We specialize in industrial, pharma, and residential projects, delivering world-class quality with a commitment to safety and deadlines.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Our team of expert engineers and skilled workforce ensures that project stands as a testament to our dedication.
                        From "Dream to Reality," we are your trusted partners in construction.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {certifications.map((cert) => (
                            <span key={cert} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold uppercase tracking-wide border border-gray-200">
                                {cert}
                            </span>
                        ))}
                    </div>

                </motion.div>

                {/* Stats Grid */}
                <div ref={ref} className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all group"
                        >
                            <stat.icon className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
