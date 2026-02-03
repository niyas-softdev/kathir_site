import Clients from "@/components/Clients";
import Section from "@/components/ui/Section";

export const metadata = {
    title: "Our Clients | Kathir Constructions",
    description: "Trusted by leading companies in pharma and industry.",
};

export default function ClientsPage() {
    return (
        <main className="pt-20">
            <Section className="bg-primary text-white py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h1>
                    <p className="text-xl text-gray-300">Proud to maintain long-term relationships with industry leaders</p>
                </div>
            </Section>
            <div className="py-20">
                <Clients />
            </div>
        </main>
    );
}
