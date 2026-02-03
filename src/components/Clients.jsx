"use client";

import Section from "@/components/ui/Section";

const clients = [
    "Vivimed Labs",
    "Nuray Chemicals",
    "Mesmer Pharmaceuticals",
    "Yuga Pharma",
    "Par Formulations",
    "Icon Life Science",
    "TNEB Engineers Sangam",
    "Hibrow Health Care",
];

export default function Clients() {
    return (
        <Section className="bg-gray-50 py-16 overflow-hidden">
            <div className="text-center mb-10">
                <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Trusted By Industry Leaders</h3>
            </div>

            <div className="relative w-full">
                {/* Gradients to fade edges */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                <div className="flex w-[200%] animate-loop-scroll">
                    {/* Double the list for seamless loop */}
                    {[...clients, ...clients].map((client, i) => (
                        <div key={i} className="w-[200px] md:w-[250px] shrink-0 flex items-center justify-center px-4">
                            <div className="text-xl md:text-2xl font-bold text-gray-300 hover:text-primary transition-colors cursor-default whitespace-nowrap">
                                {client}
                                {/* You can replace text with Logos here */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add custom animation style in globals.css or here via style tag */}
            <style jsx>{`
        @keyframes loop-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .animate-loop-scroll {
            animation: loop-scroll 20s linear infinite;
        }
      `}</style>
        </Section>
    );
}
