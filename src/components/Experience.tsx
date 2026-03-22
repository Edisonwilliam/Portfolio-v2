"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EXPERIENCE = [
  {
    date: "November 2025 - till date",
    role: "Frontend Developer at",
    company: "MyArtelab",
    link: "https://myartelab.com", // Assuming the link, can be # if unknown
    color: "bg-orange-100/50 text-orange-900 border-orange-200"
  }
];

export function Experience() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Pixel Text Effect */}
      <div className="absolute inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0">
        <h2 className="text-[18vw] font-black tracking-tighter uppercase whitespace-nowrap blur-sm">
          EDISON
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Work Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
               key={`${exp.company}-${index}`}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-3xl group transition-all duration-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 border border-transparent hover:border-zinc-200/50 dark:hover:border-zinc-800/50"
            >
              <span className="text-zinc-500 dark:text-zinc-500 font-medium mb-1 md:mb-0">
                {exp.date}
              </span>
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-zinc-900 dark:text-zinc-50 font-bold">{exp.role}</span>
                <Link 
                  href={exp.link}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-all duration-300 hover:scale-105 active:scale-95 ${exp.color}`}
                >
                  {exp.company}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
