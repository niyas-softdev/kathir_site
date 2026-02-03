import Services from "@/components/Services";
import Safety from "@/components/Safety";
import Section from "@/components/ui/Section";

export const metadata = {
    title: "Our Services | Kathir Constructions",
    description: "Specialized construction services for industrial, pharma, and residential sectors.",
};

export default function ServicesPage() {
    return (
        <main className="pt-20">
            <Section className="bg-primary text-white py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-gray-300">Comprehensive engineering solutions for every need</p>
                </div>
            </Section>
            <Services />
            <Safety />
        </main>
    );
}
