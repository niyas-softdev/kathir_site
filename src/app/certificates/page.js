import { ShieldCheck, Landmark, FileCheck, HardHat, Shield, Globe } from "lucide-react";
import Certificates from "@/components/Certificates";
import Section from "@/components/ui/Section";

export const metadata = {
    title: "Certifications | Kathir Constructions",
    description: "Explore Kathir Constructions' ISO, TIN, GST, ESI, and EPF certificates, demonstrating our commitment to quality, compliance, and employee welfare.",
};

export default function CertificatesPage() {
    return (
        <main className="pt-20">
            {/* Enhanced Hero Section */}
            <Section className="relative bg-gradient-to-b from-primary to-[#0A1A30] text-white py-24 pb-36 overflow-hidden">
                {/* Background Pattern - Abstract geometric shapes */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]"></div>
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Floating Animated Icons (Subtle) */}
                <div className="absolute top-10 left-[10%] opacity-20 animate-[bounce_8s_infinite] pointer-events-none">
                    <ShieldCheck className="w-16 h-16 text-emerald-400" />
                </div>
                <div className="absolute top-24 right-[15%] opacity-20 animate-[bounce_10s_infinite_reverse] pointer-events-none hover:opacity-100 transition-opacity">
                    <Landmark className="w-12 h-12 text-blue-400" />
                </div>
                <div className="absolute bottom-32 left-[20%] opacity-20 animate-[pulse_6s_infinite] pointer-events-none hover:opacity-100 transition-opacity">
                    <HardHat className="w-14 h-14 text-orange-400" />
                </div>
                <div className="absolute top-1/2 right-[5%] opacity-20 animate-[bounce_7s_infinite] pointer-events-none hover:opacity-100 transition-opacity">
                    <Globe className="w-20 h-20 text-indigo-400" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
                    <div className="inline-flex items-center justify-center gap-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full">
                        <Shield className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-semibold tracking-wider text-white uppercase">Accredited Excellence</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg leading-tight">
                        Our{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                                Certifications
                            </span>
                            {/* Gold/Accent Underline */}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/70 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                        Official documentation of our steadfast commitment to uncompromising quality, strict compliance, and excellence in construction.
                    </p>

                    {/* Small Row of Certification Badge Icons under subtitle */}
                    <div className="flex items-center justify-center gap-6 mt-8 opacity-80">
                        <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"><ShieldCheck className="w-6 h-6 text-emerald-300" /></div>
                        <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"><Landmark className="w-6 h-6 text-blue-300" /></div>
                        <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"><FileCheck className="w-6 h-6 text-purple-300" /></div>
                        <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"><HardHat className="w-6 h-6 text-teal-300" /></div>
                        <div className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"><Globe className="w-6 h-6 text-orange-300" /></div>
                    </div>
                </div>
            </Section>

            <div className="-mt-20 relative z-20 container mx-auto px-4 md:px-0">
                <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-1 shadow-sm">
                    <Certificates />
                </div>
            </div>
        </main>
    );
}
