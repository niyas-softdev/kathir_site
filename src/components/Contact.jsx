import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <Section id="contact" className="bg-primary text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                {/* Contact Info */}
                <div>
                    <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Build Your <span className="text-secondary">Dream</span></h2>
                    <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                        Have a project in mind? Reach out to us for a consultation. We provide competitive pricing and expert engineering solutions.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                                <MapPin />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Office Address</h4>
                                <p className="text-gray-400">
                                    No.446, CSI School Street,<br />
                                    Putlur &amp; Post, Thiruvallur - 602025.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                                <Phone />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Phone</h4>
                                <p className="text-gray-400">
                                    <a href="tel:+919750813292" className="hover:text-secondary transition-colors block">+91 97508 13292</a>
                                </p>
                                <p className="text-gray-400">
                                    <a href="tel:+917358387163" className="hover:text-secondary transition-colors block">+91 73583 87163</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-secondary">
                                <Mail />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Email</h4>
                                <p className="text-gray-400">info@kathirconstructions.com</p>
                                <p className="text-gray-400">sales@kathirconstructions.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map & Form */}
                <div className="bg-white rounded-2xl p-8 text-black shadow-2xl">
                    <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" placeholder="+91" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Project Type</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors">
                                <option>Industrial Construction</option>
                                <option>Residential Construction</option>
                                <option>Pharma Project</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <Button className="w-full" size="lg">Send Message</Button>
                    </form>
                </div>

            </div>
        </Section>
    );
}
