import Projects from "@/components/Projects";
import Charts from "@/components/Charts";
import Section from "@/components/ui/Section";

export const metadata = {
    title: "Project Portfolio | Kathir Constructions",
    description: "Explore our completed projects across various industries.",
};

export default function ProjectsPage() {
    return (
        <main className="pt-20">
            <Section className="bg-primary text-white py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                    <p className="text-xl text-gray-300">A showcase of our engineering excellence</p>
                </div>
            </Section>
            <Projects />
            <Charts />
        </main>
    );
}
