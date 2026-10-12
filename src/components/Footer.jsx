import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-secondary flex items-center justify-center text-white font-bold text-2xl rounded-sm">
                                K
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-none tracking-tight uppercase">Kathir</span>
                                <span className="text-xs font-medium tracking-widest text-secondary uppercase">Constructions</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            "You dream about it, we build before it." Established in 2012, we are a leading engineering and construction firm dedicated to quality and innovation.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400">
                            {["About Company", "Our Services", "Project Portfolio", "Safety Policy", "Careers", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Our Services</h3>
                        <ul className="space-y-4 text-gray-400">
                            {["Industrial Construction", "Pharma Projects", "Residential Villas", "Warehouse Construction", "PEB Structures", "Interior Design"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-secondary transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Get in Touch</h3>
                        <ul className="space-y-6 text-gray-400">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-secondary shrink-0 mt-1" size={20} />
                                <span>
                                    No.446, CSI School Street <br /> Putlur &amp; Post, Thiruvallur - 602025.
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone className="text-secondary shrink-0 mt-1" size={20} />
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+919750813292" className="hover:text-white transition-colors">+91 97508 13292</a>
                                    <a href="tel:+917358387163" className="hover:text-white transition-colors">+91 73583 87163</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-secondary shrink-0" size={20} />
                                <a href="mailto:info@kathirconstructions.com" className="hover:text-white">info@kathirconstructions.com</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Clock className="text-secondary shrink-0" size={20} />
                                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Kathir Constructions. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
