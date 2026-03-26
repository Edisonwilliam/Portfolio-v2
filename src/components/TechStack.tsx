"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TECH_STACK = [
  { name: "Next.js", icon: "/Next.js.png" },
  { name: "React", icon: "/React.png" },
  { name: "TypeScript", icon: "/TypeScript.png" },
  { name: "JavaScript", icon: "/JavaScript.png" },
  { name: "Tailwind CSS", icon: "/Tailwind CSS.png" },
  { name: "Express.js", icon: "/Express.png" },
  { name: "MongoDB", icon: "/MongoDB.png" },
];

export function TechStack() {
  const scrollingTech = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <section className="relative w-full overflow-hidden py-16 bg-white dark:bg-[#030303]">
      <div className="flex w-max">
        <motion.div
          animate={{
            x: [0, -1200], 
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 md:gap-24 px-12 items-center"
        >
          {scrollingTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 md:gap-4 shrink-0 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-8 h-8 md:w-12 md:h-12 shadow-sm">
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-sm md:text-lg font-bold tracking-tight text-zinc-500 dark:text-zinc-400">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side Gradients */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#030303] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
