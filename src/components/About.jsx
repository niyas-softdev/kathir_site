"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/ui/Section";
import { CheckCircle, Award, Users, Building2 } from "lucide-react";
import Image from "next/image";

const stats = [
  { id: 1, name: "Years of Experience", value: "12+", icon: Award },
  { id: 2, name: "Completed Projects", value: "85+", icon: Building2 },
  { id: 3, name: "Expert Engineers", value: "40+", icon: Users },
  { id: 4, name: "Client Satisfaction", value: "100%", icon: CheckCircle },
];

const certifications = [
  "ISO 9001:2015",
  "TIN Registered",
  "CST Certified",
  "WCT Compliant",
  "ESI & EPF Registered",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-20">

        {/* ABOUT + STATS */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">
              Who We Are
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Building the Future with
              <span className="text-secondary"> Excellence </span>
              & Integrity
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Established in 2012 by Mr. Azhakathiresan, Kathir Constructions
              has grown into a premier engineering and construction firm. We
              specialize in industrial, pharma, and residential projects
              delivering world-class quality with commitment to safety.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of expert engineers ensures every project stands as a
              testament to our dedication. From "Dream to Reality" we are your
              trusted construction partner.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mb-8">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold uppercase tracking-wide border border-gray-200"
                >
                  {cert}
                </span>
              ))}
            </div>

            {/* Certificate Button */}
            <a
              href="/certificates"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View All Certificates
            </a>
          </motion.div>

          {/* Stats */}
          <div ref={ref} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-lg hover:border-secondary/20 transition-all group"
              >
                <stat.icon className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  {stat.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ORGANIZATION STRUCTURE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-20 border-t border-gray-100"
        >
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase mb-2 block">
              Leadership
            </span>
            <h2 className="text-3xl font-bold text-primary">
              Organizational Structure
            </h2>
          </div>

          <div className="flex flex-col items-center">

            {/* Proprietor */}
            <div className="flex flex-col items-center relative z-10 w-full px-4">
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-6 w-full max-w-md relative group hover:-translate-y-1 transition-transform duration-300 mx-auto">
                
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-50">
                  <Image
                    src="/proprietor.png"
                    alt="Mr. Azhakathiresan A"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="text-center md:text-left flex-1">
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-bold text-xs uppercase rounded-full mb-3">
                    Proprietor
                  </div>
                  <h3 className="text-primary font-bold text-xl md:text-2xl">
                    Mr. Azhakathiresan A
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm">
                    B.Tech
                  </p>
                </div>
              </div>

              <div className="w-0.5 h-16 bg-gray-300"></div>
            </div>

            {/* Branches */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              <div className="flex flex-col items-center">
                <OrgNode title="Jr. Accountant" />
                <Connector />
                <OrgNode title="Assistant Accountant" isChild />
              </div>

              <div className="flex flex-col items-center">
                <OrgNode title="Project Management Team" />
                <Connector />
                <OrgNode title="Purchase Manager" isChild />
                <Connector />
                <OrgNode title="Planning & Operations" isChild />
              </div>

              <div className="flex flex-col items-center">
                <OrgNode title="Project Head" />
                <Connector />
                <OrgNode title="Site Supervisor" isChild />
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function OrgNode({ title, isChild = false }) {
  return (
    <div
      className={`px-6 py-4 rounded-xl text-center w-full max-w-[260px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
      ${
        isChild
          ? "bg-white border border-gray-200 text-gray-700 font-medium"
          : "bg-primary border border-primary text-white font-bold shadow-md"
      }`}
    >
      {title}
    </div>
  );
}

function Connector() {
  return <div className="w-0.5 h-10 bg-gray-300"></div>;
}