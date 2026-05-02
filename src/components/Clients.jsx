"use client";

import Section from "@/components/ui/Section";

const clients = [
    { name: "Vivimed", logo: "/vivimed.webp" },
    { name: "Nuray", logo: "/nuray.png" },
    { name: "Saimirra", logo: "/saimira-logo.png" },
    { name: "Stedman", logo: "/stedman-logo.png" },
    { name: "Mesmer", logo: "/mesmer.jpeg" },
    { name: "Yuga Pharma", logo: "/yuga-logo.jpg" },
    { name: "Par Formulations", logo: "/par-logo.webp" },
    { name: "Icon Life Science", logo: "/icon-logo.jpg" },
    { name: "Hibrow", logo: "/hibrow-logo.png" },
];

export default function Clients() {
    return (
        <Section className="bg-gray-50 py-16 overflow-hidden">

            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                    Trusted by leading organizations
                </h2>
            </div>

            <div className="relative w-full">

                {/* Fade edges */}
                <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                {/* Marquee */}
                <div className="flex items-center gap-16 w-max animate-marquee">

                    {[...clients, ...clients].map((client, i) => (
                        <div key={i} className="flex items-center justify-center">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-10 md:h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                            />
                        </div>
                    ))}

                </div>
            </div>

            {/* Animation */}
            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </Section>
    );
}