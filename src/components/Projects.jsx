"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Calendar, Wallet, MapPin, Building, Info } from "lucide-react";

const categories = ["ALL", "COMMERCIAL CONSTRUCTION", "INDUSTRIAL CONSTRUCTION", "GOVERNMENT PROJECTS"];

const projectsData = [
    {
        id: 1,
        title: "M/S. HIBROW HEALTH CARE PVT LTD..",
        location: "Pukkadurai",
        category: "COMMERCIAL CONSTRUCTION",
        value: "Rs. 6.6 Crores",
        commencement: "01.02.2018",
        completion: "01.07.2020",
        workDetails: ["Pharma Company Construction"],
        image: "/hibrow-company.webp",
    },
    {
        id: 2,
        title: "ICON LIFE SCIENCE PVT LTD..",
        location: "Kannivakkam",
        category: "COMMERCIAL CONSTRUCTION",
        value: "Rs. 2 Crores",
        commencement: "17.01.2017",
        completion: "31.11.2018",
        workDetails: ["Training Center Construction work"],
        image: "/icon-company.jpg",
    },
    {
        id: 3,
        title: "M/s.STEDMAN PHARMACEUTICALS",
        location: "Alathur",
        category: "INDUSTRIAL CONSTRUCTION",
        value: "Rs. 61 Lakhs",
        commencement: "17.12.2015",
        completion: "10.06.2017",
        workDetails: ["Production Block Expansion"],
        image: "/stedman-company.jpg",
    },
    {
        id: 4,
        title: "TNEB ENGINEERS SANGAM BUILDING",
        location: "Royapettah, Chennai",
        category: "GOVERNMENT PROJECTS",
        value: "Rs. 2.5 Crores",
        commencement: "10.09.2018",
        completion: "31.03.2019",
        workDetails: ["Sangam building Construction"],
        image: "/tneb1-company.jpg",
    },
    {
        id: 5,
        title: "M/s.PAR FORMULATIONS PVT LTD..",
        location: "Pudhupakkam",
        category: "INDUSTRIAL CONSTRUCTION",
        value: "Rs. 3.5 Crores",
        commencement: "01.10.2023",
        completion: "20.08.2024",
        workDetails: [
            "Civil structural & architectural work in oncology osd facility.",
            "ETP, STP & MVR PLANT, GBW Works",
            "ETP STRUCTURE PLATFORM SSW WORKS"
        ],
        image: "/par-company.jpg",
    },
    {
        id: 6,
        title: "M/s.SAIMIRRA INNOPHARM PVT LTD..",
        location: "Ambattur",
        category: "INDUSTRIAL CONSTRUCTION",
        value: "Rs. 4.75 Crores",
        commencement: "01.06.2022",
        completion: "15.05.2023",
        workDetails: ["Production Building, Office & Warehouse & Utility Area"],
        image: "/saimira-company.jpg",
    },
    {
        id: 7,
        title: "M/s.BHF ENGINEERING WORKS",
        location: "Cuddalore",
        projectOwner: "Ministry of Fisheries and Fishermen Welfare Department, Govt of Tamilnadu",
        category: "GOVERNMENT PROJECTS",
        value: "Rs. 1.35 Crores",
        commencement: "25.12.2023",
        completion: "13.05.2025",
        workDetails: [
            "Construction of Fish landing Centers at Sothikuppam village and an Auction hall at Thaikal Thonithurai Village at Cuddalore District"
        ],
        image: "/BHF.jpg",
    },
    {
        id: 8,
        title: "M/s.PAR ACTIVE TECHNOLOGIES PVT LTD..",
        location: "Alathur",
        category: "INDUSTRIAL CONSTRUCTION",
        value: "Rs. 71 Lakh",
        commencement: "01.08.2025",
        completion: "01.11.2025 (95% Work Completed)",
        workDetails: ["Hazardous & scent solvent Area Shed Work"],
        image: "/par-active-company.jpg",
    }
];

export default function Projects() {
    const [filter, setFilter] = useState("ALL");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projectsData.filter(
        (p) => filter === "ALL" || p.category === filter
    );

    return (
        <section className="bg-[#f8f9fa] py-16 pb-24 relative z-10 w-full">
            {/* Filters */}
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-sm md:text-base font-bold uppercase tracking-wider transition-colors duration-300 ${filter === cat
                                    ? "text-[#FFB800]"
                                    : "text-gray-800 hover:text-[#FFB800]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto w-full">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="bg-white rounded-none shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="aspect-[4/3] relative w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-[17px] font-medium text-gray-900 mb-1 leading-snug line-clamp-2 min-h-[48px]">{project.title}</h3>
                                    <p className="text-[15px] text-gray-400 font-normal mb-6 flex-grow">{project.location}</p>

                                    <div className="border-t border-gray-100 mt-auto pt-4 flex justify-between items-center text-[15px] text-gray-500">
                                        <span className="font-medium text-gray-600">{project.value}</span>
                                        <span className="text-gray-400">
                                            {project.commencement.split('.')[2] || project.commencement.split('-')[0]} - {project.completion.split('.')[2]?.substring(0, 4) || project.completion.split('-')[0]?.substring(0, 4) || project.completion.split(' ')[0].split('.')[2] || project.completion}
                                        </span>
                                        <span className="text-gray-400 hover:text-[#FFB800] transition-colors">
                                            View More
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

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
                            className="bg-white rounded-xl w-full max-w-3xl overflow-hidden relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white hover:bg-black rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative h-64 md:h-72 w-full">
                                <Image src={selectedProject.image} fill className="object-cover" alt={selectedProject.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <span className="bg-[#FFB800] text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-3 inline-block">
                                        {selectedProject.category}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{selectedProject.title}</h3>
                                    <div className="flex items-center text-gray-200">
                                        <MapPin size={16} className="mr-1" />
                                        <span>{selectedProject.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 max-h-[50vh] overflow-y-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-b border-gray-100 pb-8">
                                    <div className="flex items-start">
                                        <div className="bg-gray-100 p-3 rounded-lg mr-4 text-[#FFB800]">
                                            <Wallet size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Contract Value</p>
                                            <p className="text-lg font-bold text-gray-900">{selectedProject.value}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-gray-100 p-3 rounded-lg mr-4 text-[#FFB800]">
                                            <Calendar size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Timeline</p>
                                            <p className="text-lg font-bold text-gray-900">
                                                {selectedProject.commencement} to {selectedProject.completion}
                                            </p>
                                        </div>
                                    </div>
                                    {selectedProject.projectOwner && (
                                        <div className="flex items-start md:col-span-2">
                                            <div className="bg-gray-100 p-3 rounded-lg mr-4 text-[#FFB800]">
                                                <Building size={24} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-medium">Project Owner</p>
                                                <p className="text-lg font-bold text-gray-900">{selectedProject.projectOwner}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center mb-4">
                                        <Info size={20} className="text-[#FFB800] mr-2" />
                                        <h4 className="text-xl font-bold text-gray-900">Work Details</h4>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                        {selectedProject.workDetails.map((detail, idx) => (
                                            <li key={idx} className="leading-relaxed">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
