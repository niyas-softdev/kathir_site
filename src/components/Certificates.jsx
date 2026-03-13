"use client";

import Image from "next/image";
import {
    BadgeCheck,
    FileText,
    ExternalLink,
    ShieldCheck,
    FileCheck,
    Shield,
    Landmark,
    HardHat,
    Globe,
} from "lucide-react";

import { cn } from "@/lib/utils";
import Section from "@/components/ui/Section";

const certificatesData = [
    {
        id: "iso",
        title: "ISO Certificate",
        shortName: "ISO",
        tag: "Quality Management",
        tagColor: "bg-emerald-100 text-emerald-700",
        regNo: "Reg. No. ISO/QMS/2023",
        description:
            "International standard ensuring our quality management system meets global standards.",
        file: "/certificate/ISO.jpg",
        icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    },
    {
        id: "gst",
        title: "GST Certificate",
        shortName: "GST",
        tag: "Government Compliance",
        tagColor: "bg-blue-100 text-blue-700",
        regNo: "Authentic Business Operations",
        description:
            "Official GST registration proving our legal business operations and tax compliance.",
        file: "/certificate/GST.jpg",
        icon: <Landmark className="w-10 h-10 text-orange-500" />,
    },
    {
        id: "tin",
        title: "TIN Certificate",
        shortName: "TIN",
        tag: "Tax Identification",
        tagColor: "bg-purple-100 text-purple-700",
        regNo: "Commercial Tax Department",
        description:
            "Taxpayer Identification Number assigned for commercial tax compliance.",
        file: "/certificate/TIN.jpg",
        icon: <FileCheck className="w-10 h-10 text-purple-600" />,
    },
    {
        id: "esi",
        title: "ESI Registration",
        shortName: "ESI",
        tag: "Employee Welfare",
        tagColor: "bg-teal-100 text-teal-700",
        regNo: "Employees' State Insurance",
        description:
            "ESI scheme registration providing health protection and benefits to workers.",
        file: "/certificate/ESI.jpg",
        icon: <HardHat className="w-10 h-10 text-teal-600" />,
    },
    {
        id: "epf",
        title: "EPF Registration",
        shortName: "EPF",
        tag: "Social Security",
        tagColor: "bg-indigo-100 text-indigo-700",
        regNo: "Employees' Provident Fund",
        description:
            "EPF registration ensuring retirement benefits and financial security for employees.",
        file: "/certificate/EPF.png",
        icon: <Shield className="w-10 h-10 text-indigo-600" />,
    },
    {
        id: "iec",
        title: "IEC Certificate",
        shortName: "IEC",
        tag: "Foreign Trade",
        tagColor: "bg-orange-100 text-orange-700",
        regNo: "Importer-Exporter Code",
        description:
            "Official Importer-Exporter Code (IEC) issued by the Directorate General of Foreign Trade.",
        file: "/certificate/IEC.jpeg",
        icon: <Globe className="w-10 h-10 text-orange-600" />,
    },
];

export default function Certificates() {
    return (
        <Section className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                        Our Certifications
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We maintain the highest standards of quality, safety, and compliance
                        across our operations.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificatesData.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition duration-300 border border-gray-100 flex flex-col items-center text-center"
                        >

                            {/* Certificate Preview */}
                            <div className="w-full h-48 relative mb-6 rounded-xl overflow-hidden border">
                                <Image
                                    src={cert.file}
                                    alt={cert.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Icon + Short Name */}
                            <div className="flex items-center gap-2 mb-4">
                                {cert.icon}
                                <span className="text-xl font-bold text-gray-800">
                                    {cert.shortName}
                                </span>
                            </div>

                            {/* Tag */}
                            <span
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-xs font-bold mb-4",
                                    cert.tagColor
                                )}
                            >
                                {cert.tag}
                            </span>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2 justify-center">
                                {cert.title}
                                <BadgeCheck className="w-5 h-5 text-blue-500" />
                            </h3>

                            {/* Registration */}
                            <div className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-lg mb-4">
                                {cert.regNo}
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                {cert.description}
                            </p>

                            {/* View Button */}
                            <a
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#111827] hover:bg-black text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition duration-200"
                            >
                                <FileText className="w-4 h-4" />
                                View Official Document
                                <ExternalLink className="w-4 h-4 opacity-70" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}