"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const ROLES = ["Full-Stack", "Frontend", "Backend"];

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full flex flex-col items-center justify-center pt-32 pb-16 px-4 md:px-6 text-center overflow-x-hidden"
    >
      {/* Background Pixel Text Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center opacity-[0.02] dark:opacity-[0.04] pointer-events-none z-0 select-none">
        <h2 className="text-[22vw] font-black tracking-tighter uppercase whitespace-nowrap blur-sm">
          EDISON
        </h2>
      </div>
      
      {/* Centered Avatar */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative z-10 w-28 h-28 md:w-36 md:h-36 mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-900 flex-shrink-0 mx-auto ring-1 ring-zinc-200/50 dark:ring-zinc-800/50"
      >
        <Image 
          src="/avatar.jpg" 
          alt="Edison William" 
          width={144} 
          height={144} 
          className="object-cover bg-zinc-100 dark:bg-zinc-800"
          priority
        />
      </motion.div>
      
      {/* Centered Headlines */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-tight flex flex-col items-center"
        >
          <span>Hey, I'm <span className="italic text-zinc-800 dark:text-zinc-200">Edison William.</span></span>
          <div className="mt-2 flex items-center justify-center gap-[0.3em] overflow-visible">
            <div className="relative h-[1.2em] w-min flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="whitespace-nowrap"
                >
                  {ROLES[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span>Developer</span>
          </div>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl px-4 leading-relaxed"
        >
          Building high-performance web applications with a focus on seamless user experiences and robust backend architecture.
        </motion.p>
      </div>
    </motion.section>
  );
}
