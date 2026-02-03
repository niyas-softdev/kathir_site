"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Factory, Home, Warehouse, Fan, PaintBucket, Divide, Ruler, HardHat } from "lucide-react";

const services = [
    {
        icon: Factory,
        title: "Industrial Buildings",
        description: "Turnkey construction for factories, manufacturing units, and heavy industrial plants."
    },
    {
        icon: HardHat,
        title: "Pharma Construction",
        description: "Specialized infrastructure for pharmaceutical plants adhering to strict safety standards."
    },
    {
        icon: Warehouse,
        title: "Warehouse Construction",
        description: "Large-scale storage solutions and logistics parks with PEB structures."
    },
    {
        icon: Home,
        title: "Villas & Residential",
        description: "Luxury villas and custom homes built with premium materials and finishes."
    },
    {
        icon: Fan,
        title: "HVAC Works",
        description: "Complete heating, ventilation, and air conditioning installation and maintenance."
    },
    {
        icon: PaintBucket,
        title: "Epoxy Flooring",
        description: "Industrial-grade durable flooring solutions for factories and chemical plants."
    },
    {
        icon: Ruler,
        title: "Aluminum Fabrication",
        description: "Custom windows, partitions, and structural facades for modern buildings."
    },
    {
        icon: Divide,
        title: "ETP & STP Works",
        description: "Environmental engineering solutions for water treatment plants."
    },
];

export default function Services() {
    return (
        <Section id="services" className="bg-gray-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Our Expertise</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Comprehensive <span className="text-secondary">Construction</span> Services
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    We provide end-to-end solutions for all your construction needs, from industrial mega-structures to personalized residential spaces.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        className="group p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                            <service.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
