"use client";

import Section from "@/components/ui/Section";
import { User, Users } from "lucide-react";

export default function OrgStructure() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">Our Team</span>
                <h2 className="text-3xl font-bold text-primary">Organisation <span className="text-secondary">Structure</span></h2>
            </div>

            <div className="flex flex-col items-center overflow-x-auto w-full pb-8">
                {/* Level 1 - Proprietor */}
                <div className="min-w-[600px] flex flex-col items-center">
                    <div className="flex flex-col items-center mb-8 relative">
                        <div className="w-64 p-4 bg-primary text-white rounded-lg shadow-xl text-center z-10 relative">
                            <User className="mx-auto mb-2 w-8 h-8 text-secondary" />
                            <h3 className="font-bold text-lg">Proprietor</h3>
                            <p className="text-sm opacity-80">Mr. Azhakathiresan</p>
                        </div>
                        {/* Vertical Line */}
                        <div className="h-12 w-0.5 bg-gray-300"></div>
                    </div>

                    {/* Level 2 - Project Head */}
                    <div className="flex flex-col items-center mb-8 relative">
                        <div className="w-64 p-4 bg-white border border-gray-200 text-primary rounded-lg shadow-lg text-center z-10">
                            <Users className="mx-auto mb-2 w-6 h-6 text-secondary" />
                            <h3 className="font-bold">Project Head</h3>
                        </div>
                        {/* Vertical Line */}
                        <div className="h-12 w-0.5 bg-gray-300"></div>
                    </div>

                    {/* Level 3 - Connecting Line */}
                    <div className="w-[800px] h-0.5 bg-gray-300 hidden lg:block"></div>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between w-full max-w-[900px] mt-0 lg:-mt-0.5 relative">

                        {/* Branch 1 */}
                        <div className="flex flex-col items-center relative lg:pt-8">
                            <div className="h-8 w-0.5 bg-gray-300 absolute top-0 hidden lg:block"></div>
                            <div className="w-48 p-4 bg-gray-50 border border-t-4 border-t-secondary rounded shadow text-center">
                                <h4 className="font-bold text-sm text-primary">Planning Team</h4>
                            </div>
                        </div>

                        {/* Branch 2 */}
                        <div className="flex flex-col items-center relative lg:pt-8">
                            <div className="h-8 w-0.5 bg-gray-300 absolute top-0 hidden lg:block"></div>
                            <div className="w-48 p-4 bg-gray-50 border border-t-4 border-t-secondary rounded shadow text-center">
                                <h4 className="font-bold text-sm text-primary">Purchase Manager</h4>
                            </div>
                        </div>

                        {/* Branch 3 */}
                        <div className="flex flex-col items-center relative lg:pt-8">
                            <div className="h-8 w-0.5 bg-gray-300 absolute top-0 hidden lg:block"></div>
                            <div className="w-48 p-4 bg-gray-50 border border-t-4 border-t-secondary rounded shadow text-center">
                                <h4 className="font-bold text-sm text-primary">Site Supervisors</h4>
                            </div>
                        </div>

                        {/* Branch 4 */}
                        <div className="flex flex-col items-center relative lg:pt-8">
                            <div className="h-8 w-0.5 bg-gray-300 absolute top-0 hidden lg:block"></div>
                            <div className="w-48 p-4 bg-gray-50 border border-t-4 border-t-secondary rounded shadow text-center">
                                <h4 className="font-bold text-sm text-primary">Accounts Team</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
