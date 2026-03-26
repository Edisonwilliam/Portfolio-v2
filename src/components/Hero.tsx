"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ROLES = ["Full Stack", "Frontend", "Backend"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto pt-40 pb-20 px-6"
    >
      <div className="flex flex-col items-start gap-12">
        {/* Avatar: Small and clean as seen in image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 rounded-full overflow-hidden"
        >
          <Image
            src="/avatar.jfif"
            alt="Edison William"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Headlines: Bold, tight, and stacked as in image */}
        <div className="space-y-12">
          <div className="space-y-1">
            <h1 className="text-5xl md:text-[80px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              Hey, I'm Edison William.
            </h1>
            <div className="relative h-[64px] md:h-[100px] overflow-visible">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={ROLES[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-5xl md:text-[80px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] whitespace-nowrap"
                >
                  {ROLES[index]} Developer
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          {/* Subtext: Two distinct lines in subtle color */}
          <div className="space-y-1 text-xl md:text-[22px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
            <p>I’m Edison William, a Nigerian full-stack developer with experience in both frontend and backend development. I specialize in building responsive user interfaces and developing scalable server-side applications, with a focus on creating efficient, reliable, and user-friendly web solutions.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
