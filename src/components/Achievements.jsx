"use client";

import Section from "@/components/ui/Section";
import { CheckCircle } from "lucide-react";

const achievements = [
    "Completed TNEB Engineers Sangam Building ahead of schedule.",
    "Constructed state-of-the-art facility for Hibrow Health Care Pvt Ltd.",
    "Delivered Icon Life Science Pvt Ltd R&D center.",
    "Executed large scale industrial shed for BHF Engineering Works.",
    "Awarded 'Best Industrial Contractor' in the district.",
    "Reached ₹50 Cr+ cumulative project value milestone."
];

export default function Achievements() {
    return (
        <Section className="bg-primary text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Milestones</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Major <span className="text-secondary">Achievements</span></h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Our journey is marked by significant milestones and the successful delivery of complex projects. We take pride in our track record of excellence.
                    </p>
                    <div className="space-y-4">
                        {achievements.map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <CheckCircle className="text-secondary shrink-0 mt-1" />
                                <p className="text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    {/* Decorative Counter Box */}
                    <div className="bg-white text-primary p-12 rounded-2xl shadow-2xl text-center relative z-10">
                        <span className="text-6xl font-bold block mb-2 text-secondary">₹100Cr+</span>
                        <span className="text-xl font-bold uppercase tracking-widest">Total Project Value</span>
                        <p className="text-gray-500 mt-4">Delivered Excellence Since 2012</p>
                    </div>
                    <div className="absolute top-4 -right-4 w-full h-full bg-secondary/20 rounded-2xl -z-0"></div>
                </div>
            </div>
        </Section>
    );
}
