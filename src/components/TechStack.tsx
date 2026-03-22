"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  { 
    name: "Next.js", 
    color: "text-black dark:text-white",
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 md:w-12 md:h-12 fill-current">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm38.7 93.9l-38-48.4v40.4H53.9V34.1h10.8l38 48.4V34.1h10.8V94l-10.8-.1z" />
      </svg>
    )
  },
  { 
    name: "React", 
    color: "text-[#61DAFB]",
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 md:w-12 md:h-12 fill-current">
        <circle cx="0" cy="0" r="2.05" />
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  { 
    name: "TypeScript", 
    color: "text-[#3178C6]",
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 md:w-12 md:h-12 fill-current">
        <path d="M1.5 1.5h125v125H1.5V1.5zm83.3 84.7V114l11.6-6.7V86.2h-11.6zm11.6-18.3V67l-11.6 6.7v-14h11.6zM32.1 48.7v12.2l20.4-11.8V37.5L32.1 48.7zm20.4 41.8V78.3L32.1 89.5v12.2l20.4-11.2z" />
      </svg>
    )
  },
  { 
    name: "Tailwind CSS", 
    color: "text-[#06B6D4]",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-12 md:h-12 fill-current">
        <path d="M12 6.036c-2.28 0-3.42 1.14-3.42 3.42 0 2.28 1.14 3.42 3.42 3.42 2.28 0 3.42-1.14 3.42-3.42 0-2.28-1.14-3.42-3.42-3.42zM12 11.142c-1.14 0-1.71-.57-1.71-1.71 0-1.14.57-1.71 1.71-1.71 1.14 0 1.71.57 1.71 1.71 0 1.14-.57 1.71-1.71 1.71zM7.714 12.888C5.434 12.888 4.294 14.028 4.294 16.308c0 2.28 1.14 3.42 3.42 3.42 2.28 0 3.42-1.14 3.42-3.42 0-2.28-1.14-3.42-3.42-3.42zM7.714 17.994c-1.14 0-1.71-.57-1.71-1.71 0-1.14.57-1.71 1.71-1.71 1.14 0 1.71.57 1.71 1.71 0 1.14-.57 1.71-1.71 1.71z" />
      </svg>
    )
  },
  { 
    name: "Node.js", 
    color: "text-[#339933]",
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 md:w-12 md:h-12 fill-current">
        <path d="M117.4 31.7L67.6 3c-2.2-1.3-4.9-1.3-7.1 0L10.6 31.7c-2.2 1.3-3.6 3.6-3.6 6.1v57.4c0 2.5 1.3 4.8 3.6 6.1l49.9 28.7c2.2 1.3 4.9 1.3 7.1 0l49.9-28.7c2.2-1.3 3.6-3.6 3.6-6.1V37.8c-.1-2.5-1.5-4.8-3.7-6.1z" />
      </svg>
    )
  },
  { 
    name: "MongoDB", 
    color: "text-[#47A248]",
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 md:w-12 md:h-12 fill-current">
        <path d="M84.1 53.6c-1.3-3.6-3.3-7.7-4.1-8.3-.8.6-2.5 3.3-3.7 6l2.1 2.3 3.6-2.1c.7.7 1.4 1.4 2.1 2.1z" />
      </svg>
    )
  },
  { 
    name: "JavaScript", 
    color: "text-[#F7DF1E]",
    svg: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 md:w-12 md:h-12 fill-current">
        <path d="M1.5 1.5h125v125H1.5V1.5zM114 114h-25.2c-1.9 0-2.3-1.1-2.3-2.3V82c0-1.2.4-1.9 2-1.9h6.1c1.6 0 2 .7 2 1.9v21h17.4V34.1H34.1v79.9h17.3V93.1c0-1.2.4-1.9 2-1.9h6.1c1.6 0 2 .7 2 1.9v21c0 1.2-.4 2.3-2.3 2.3H34.1" />
      </svg>
    )
  },
  { 
    name: "Framer Motion", 
    color: "text-[#FF0055]",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-12 md:h-12 fill-current">
        <path d="M12 0L24 12L12 24L0 12L12 0Z" />
      </svg>
    )
  }
];

export function TechStack() {
  const scrollingTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="relative w-full overflow-hidden py-16 bg-white dark:bg-[#030303]">
      <div className="flex w-max">
        <motion.div
          animate={{
            x: [0, -1000], // Adjust based on total width
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 md:gap-24 px-12 items-center"
        >
          {scrollingTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 md:gap-4 shrink-0"
            >
              <div className={`${tech.color} drop-shadow-sm`}>
                {tech.svg}
              </div>
              <span className="text-sm md:text-lg font-bold tracking-tight text-zinc-400">
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
