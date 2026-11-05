"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EXPERIENCE = [
  {
    date: "November 2025 – September 2026",
    role: "Frontend Developer",
    company: "MyArtelab",
    link: "https://myartelab.com",
    color:
      "bg-orange-100/50 text-orange-900 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800/50",
    bullets: [
      "Built and maintained responsive, user-friendly interfaces using React and modern web technologies.",
      "Collaborated on frontend development across the MyArtelab platform.",
      // TODO: Add 1–2 concrete achievements from your time at MyArtelab
      //       e.g. "Reduced page load time by X%", "Shipped feature Y used by Z users"
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
      aria-labelledby="experience-heading"
    >
      {/* Background pixel text effect */}
      <div
        className="absolute inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0 select-none"
        aria-hidden="true"
      >
        <span className="text-[18vw] font-black tracking-tighter uppercase whitespace-nowrap blur-sm">
          EDISON
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2
            id="experience-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl group transition-all duration-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 border border-transparent hover:border-zinc-200/50 dark:hover:border-zinc-800/50"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-zinc-900 dark:text-zinc-50 font-bold text-lg">
                    {exp.role}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                    at
                  </span>
                  <Link
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${exp.color}`}
                  >
                    {exp.company}
                  </Link>
                </div>
                <span className="text-zinc-500 dark:text-zinc-400 font-mono text-sm tabular-nums flex-shrink-0">
                  {exp.date}
                </span>
              </div>

              {/* Bullet achievements */}
              <ul className="space-y-2 pl-1">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-2 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
