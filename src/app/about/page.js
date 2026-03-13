import About from "@/components/About";
import Vision from "@/components/Vision";
import Achievements from "@/components/Achievements";
import OrgStructure from "@/components/OrgStructure";
import Section from "@/components/ui/Section";

export const metadata = {
    title: "About Us | Kathir Constructions",
    description: "Learn about our journey, vision, and the team behind our success.",
};

export default function AboutPage() {
    return (
        <main className="pt-20">
            <Section className="bg-primary text-white py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl text-gray-300">Building trust and excellence since 2012</p>
                </div>
            </Section>
            <Vision />
            <Achievements />
            <OrgStructure />
        </main>
    );
}
