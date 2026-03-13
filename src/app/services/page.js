import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";
import Safety from "@/components/Safety";
import { ChevronRight } from "lucide-react";


export const metadata = {
  title: "Our Services | Kathir Constructions",
  description:
    "Specialized construction services for industrial, pharma, and residential sectors.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">

      {/* HERO */}
        <section className="relative h-[400px] md:h-[500px] w-full bg-black">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url('/service-hero1.jpg')" }}
                ></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider mb-4 uppercase">Services</h1>
                    <div className="flex items-center text-sm md:text-base font-medium">
                        <Link href="/" className="text-[#FFB800] hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={16} className="mx-2 text-white" />
                        <span className="text-white">Services</span>
                    </div>
                </div>

                {/* Overlapping Stats Box */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-[90%] md:w-auto">
                    <div className="flex flex-col md:flex-row shadow-2xl relative">
                        <div className="bg-[#FFB800] text-black px-8 md:px-12 py-5 flex items-center justify-center min-w-[220px]">
  <span className="text-lg md:text-xl lg:text-2xl font-bold text-center">
    15+ Years <br/> Experience
  </span>
</div>
                        {/* Desktop Arrow - overlaps the black box slightly */}
                        <div className="hidden md:block absolute left-[calc(100%-4rem)] md:left-auto md:right-[calc(100%-19.5rem)] lg:right-[calc(100%-20.5rem)] top-0 w-0 h-0 border-t-[34px] border-t-transparent border-l-[24px] border-l-[#FFB800] border-b-[34px] border-b-transparent z-20" style={{ left: "calc(160px + 2vw)" }}></div>

                        <div className="bg-[#1a1a1a] text-white px-6 md:px-12 py-5 flex items-center justify-center md:justify-start relative">
                            {/* Desktop Arrow Position Fix - CSS Arrow on the left of black box, actually we can just put a div inside yellow that overflows right. */}
                            <span className="text-xl md:text-2xl font-bold whitespace-nowrap z-10 md:ml-4">            500+ Projects Completed
</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gap for overlapping box */}
            <div className="h-16 md:h-24 bg-[#f8f9fa]"></div>

      {/* SERVICES */}
      <Services />

      {/* SAFETY */}
      <Safety />

    </main>
  );
}