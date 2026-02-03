"use client";

import Section from "@/components/ui/Section";
import { ShieldCheck, HardHat, Video, AlertTriangle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Safety() {
    return (
        <Section className="bg-[#FF6B00] relative overflow-hidden text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 flex" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 20px, transparent 20px, transparent 40px)' }}></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center text-[#FF6B00] mb-6 shadow-xl animate-pulse">
                    <ShieldCheck size={32} className="md:w-10 md:h-10" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Safety Is Our Top Priority</h2>
                <p className="text-base md:text-xl font-medium mb-8 md:mb-10 text-white/90">
                    We are committed to Zero Accidents. Our sites are supervised 24/7 with strict safety protocols, CCTV monitoring, and mandatory worker training.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full mb-10">
                    <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center hover:bg-black/30 transition-colors">
                        <HardHat className="mb-4" size={32} />
                        <h4 className="font-bold text-xl">Mandatory PPE</h4>
                        <p className="text-sm text-white/80 mt-2">Strict adherence to personal protective equipment.</p>
                    </div>
                    <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center hover:bg-black/30 transition-colors">
                        <Video className="mb-4" size={32} />
                        <h4 className="font-bold text-xl">CCTV Monitoring</h4>
                        <p className="text-sm text-white/80 mt-2">Continuous surveillance of work processes.</p>
                    </div>
                    <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col items-center sm:col-span-2 md:col-span-1 hover:bg-black/30 transition-colors">
                        <AlertTriangle className="mb-4" size={32} />
                        <h4 className="font-bold text-xl">Regular Training</h4>
                        <p className="text-sm text-white/80 mt-2">Weekly safety drills and hazard awareness.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
