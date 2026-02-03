"use client";

import Section from "@/components/ui/Section";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const growthData = [
    { year: '2019', value: 12 },
    { year: '2020', value: 18 },
    { year: '2021', value: 25 },
    { year: '2022', value: 35 },
    { year: '2023', value: 50 },
    { year: '2024', value: 65 },
];

const categoryData = [
    { name: 'Industrial', projects: 35 },
    { name: 'Pharma', projects: 25 },
    { name: 'Residential', projects: 15 },
    { name: 'Commercial', projects: 10 },
];

export default function Charts() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-12">
                <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Our Growth</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Performance <span className="text-secondary">Overview</span></h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Growth Chart */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-primary mb-6 text-center">Project Value Growth (in Cr)</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={growthData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#FF6B00"
                                    strokeWidth={3}
                                    dot={{ fill: '#FF6B00', strokeWidth: 2, r: 4, stroke: '#fff' }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Distribution Chart */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-primary mb-6 text-center">Project Distribution by Sector</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="name" width={100} axisLine={false} tickLine={false} tick={{ fill: '#0A1F44', fontWeight: 500 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="projects" fill="#0A1F44" radius={[0, 4, 4, 0]} barSize={20}>
                                    {/* Gradient effect manually simulated or could use defs */}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </Section>
    );
}
