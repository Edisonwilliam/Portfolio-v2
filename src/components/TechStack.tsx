"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

// ─── Skills grouped by area ────────────────────────────────────────────────────
// Only include what you can defend in an interview.
// Add /nodejs.png to public/ to show the logo — see TODO below.
const SKILL_GROUPS: {
  area: string;
  skills: { name: string; icon: string | null }[];
}[] = [
  {
    area: "Frontend",
    skills: [
      { name: "Next.js", icon: "/Nextjs.png" },
      { name: "React", icon: "/React.png" },
      { name: "TypeScript", icon: "/TypeScript.png" },
      { name: "JavaScript", icon: "/JavaScript.png" },
      { name: "Tailwind CSS", icon: "/Tailwind CSS.png" },
    ],
  },
  {
    area: "Backend",
    skills: [
      // TODO: Add /nodejs.png to public/ folder (download from https://nodejs.org/en/static/images/logos/nodejs-new-pantone-black.svg or similar)
      { name: "Node.js", icon: null },
      { name: "Express.js", icon: "/Expressjs.png" },
      { name: "NestJS", icon: "/Nestjs.png" },
    ],
  },
  {
    area: "Databases",
    skills: [
      { name: "MongoDB", icon: "/MongoDB.png" },
      { name: "PostgreSQL", icon: "/Postgresql.png" },
    ],
  },
  {
    area: "Tooling",
    skills: [{ name: "Docker", icon: "/docker.png" }],
  },
];

// Flat list for the scrolling marquee accent (unchanged visual, accessibility-fixed)
const MARQUEE_SKILLS = SKILL_GROUPS.flatMap((g) => g.skills).filter(
  (s) => s.icon !== null
);

function SkillItem({ name, icon }: { name: string; icon: string | null }) {
  return (
    <div className="flex items-center gap-2.5">
      {icon ? (
        <div className="relative w-5 h-5 flex-shrink-0">
          <Image src={icon} alt="" fill sizes="20px" className="object-contain" />
        </div>
      ) : (
        // Text-only badge when no logo is available
        <span
          className="w-5 h-5 flex-shrink-0 rounded bg-zinc-200 dark:bg-zinc-700 text-[9px] font-bold text-zinc-600 dark:text-zinc-300 flex items-center justify-center"
          aria-hidden="true"
        >
          JS
        </span>
      )}
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {name}
      </span>
    </div>
  );
}

export function TechStack() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-24"
      aria-labelledby="skills-heading"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2
          id="skills-heading"
          className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Skills
        </h2>
      </motion.div>

      {/* Grouped skills grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
      >
        {SKILL_GROUPS.map(({ area, skills }) => (
          <div key={area}>
            <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">
              {area}
            </h3>
            <ul className="space-y-3">
              {skills.map(({ name, icon }) => (
                <li key={name}>
                  <SkillItem name={name} icon={icon} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* Scrolling marquee accent — visual only, one real set + one aria-hidden clone */}
      <div
        className="relative w-full overflow-hidden py-6 border-t border-zinc-100 dark:border-zinc-800"
        aria-hidden="true"
      >
        {/* Real set — hidden from AT via parent aria-hidden */}
        <div
          className={`flex w-max gap-12 md:gap-20 px-6 items-center ${
            prefersReducedMotion ? "" : "animate-marquee-fast"
          }`}
        >
          {/* Original set */}
          {MARQUEE_SKILLS.map((tech) => (
            <div
              key={`a-${tech.name}`}
              className="flex items-center gap-2.5 shrink-0"
            >
              <div className="relative w-7 h-7 opacity-50">
                <Image
                  src={tech.icon!}
                  alt=""
                  fill
                  sizes="28px"
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
          {/* Clone set for seamless loop */}
          {MARQUEE_SKILLS.map((tech) => (
            <div
              key={`b-${tech.name}`}
              className="flex items-center gap-2.5 shrink-0"
            >
              <div className="relative w-7 h-7 opacity-50">
                <Image
                  src={tech.icon!}
                  alt=""
                  fill
                  sizes="28px"
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#030303] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#030303] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
