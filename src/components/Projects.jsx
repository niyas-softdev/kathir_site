"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { X, ExternalLink, Calendar, Wallet } from "lucide-react";
import Image from "next/image";

// Categories
const categories = ["All", "Pharma", "Industrial", "Residential", "Government"];

// Project Data
const projects = [
    {
        id: 1,
        title: "TNEB Engineers Sangam Building",
        category: "Government",
        value: "₹2.5 Cr",
        completed: "2023",
        description: "Multipurpose administration and community building for TNEB engineers.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
        id: 2,
        title: "Hibrow Health Care Pvt Ltd",
        category: "Pharma",
        value: "₹4.8 Cr",
        completed: "2022",
        description: "State-of-the-art pharmaceutical manufacturing unit with clean rooms.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
    },
    {
        id: 3,
        title: "Icon Life Science Pvt Ltd",
        category: "Pharma",
        value: "₹3.2 Cr",
        completed: "2021",
        description: "R&D facility and warehouse construction for Icon Life Sciences.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070",
    },
    {
        id: 4,
        title: "BHF Engineering Works",
        category: "Industrial",
        value: "₹1.8 Cr",
        completed: "2020",
        description: "Heavy machinery manufacturing shed with gantry crane provision.",
        image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070",
    },
    {
        id: 5,
        title: "Luxury Villa - Anna Nagar",
        category: "Residential",
        value: "₹1.5 Cr",
        completed: "2023",
        description: "Contemporary 4BHK villa with automated lighting and landscape.",
        image: "https://images.unsplash.com/photo-1600596542815-e32cb718d202?q=80&w=2070",
    },
    {
        id: 6,
        title: "Par Formulations",
        category: "Pharma",
        value: "₹5.1 Cr",
        completed: "2024",
        description: "Large scale tablet manufacturing block and packaging unit.",
        image: "https://images.unsplash.com/photo-1574359611681-d779dd5c28e8?q=80&w=2070",
    },
];

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projects.filter(
        (p) => filter === "All" || p.category === filter
    );

    return (
        <Section id="projects" className="bg-white">
            <div className="text-center mb-12">
                <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Our Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Featured <span className="text-secondary">Projects</span></h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat
                                    ? "bg-primary text-white shadow-lg scale-105"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                    <p className="text-secondary font-medium mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                                    <span className="text-sm underline translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">View Details</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative h-64 w-full">
                                <Image src={selectedProject.image} fill className="object-cover" alt={selectedProject.title} />
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-1 block">{selectedProject.category}</span>
                                        <h3 className="text-2xl font-bold text-primary">{selectedProject.title}</h3>
                                    </div>
                                    <div className="flex flex-col items-end gap-1 text-sm font-medium text-gray-500">
                                        <div className="flex items-center gap-1"><Calendar size={14} /> {selectedProject.completed}</div>
                                        <div className="flex items-center gap-1 text-green-600"><Wallet size={14} /> {selectedProject.value}</div>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {selectedProject.description}
                                </p>

                                <Button className="w-full">Get Similar Quote</Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
