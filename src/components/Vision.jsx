"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Unplug, Eye, Timer, TrendingUp, DollarSign, Award } from "lucide-react";

export default function Vision() {
    return (
        <Section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Vision & Mission */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-primary p-8 rounded-xl text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                        <Eye className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To build dream buildings that stand the test of time, ensuring 100% customer satisfaction through innovation and excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-accent p-8 rounded-xl text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                        <Unplug className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To provide safe working conditions, competitive pricing, and quality delivery within committed deadlines.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div>
                    <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Our DNA</span>
                    <h2 className="text-3xl font-bold text-primary mb-8">Core <span className="text-secondary">Values</span></h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: Award, title: "Quality", desc: "Uncompromising engineering standards." },
                            { icon: DollarSign, title: "Cost Effective", desc: "Optimized solutions for your budget." },
                            { icon: Timer, title: "Deadlines", desc: "Commitment to on-time delivery." },
                            { icon: TrendingUp, title: "Productivity", desc: "Efficient and fast turnaround." },
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-lg hover:border-secondary/30 transition-all"
                            >
                                <value.icon className="w-8 h-8 text-secondary mb-3" />
                                <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                                <p className="text-sm text-gray-500">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
