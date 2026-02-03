import Contact from "@/components/Contact";
import Section from "@/components/ui/Section";

export const metadata = {
    title: "Contact Us | Kathir Constructions",
    description: "Get in touch for your next construction project.",
};

export default function ContactPage() {
    return (
        <main className="pt-20">
            <Section className="bg-primary text-white py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-300">We are here to help you build your dream</p>
                </div>
            </Section>
            <Contact />
        </main>
    );
}
