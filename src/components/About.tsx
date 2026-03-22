"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">About</h2>
        
        <div className="text-lg text-zinc-600 dark:text-zinc-400 space-y-6 leading-relaxed">
          <p>
            I am a full-stack developer committed to engineering scalable, high-quality digital products. My work focuses on bridging the gap between elegant frontend design and powerful backend systems.
          </p>
          <p>
            With extensive experience in modern web technologies, I specialize in creating efficient architectures and intuitive user interfaces. I am passionate about writing clean, maintainable code and delivering innovative solutions that solve complex real-world problems.
          </p>
        </div>

        {/* Polaroid Stack */}
        <div className="relative h-96 mt-16 flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2, zIndex: 30 }}
            className="absolute left-1/4 -translate-x-1/2 rotate-[-6deg] bg-white p-3 pb-12 shadow-2xl border border-zinc-200"
          >
            <div className="w-56 h-64 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/photo1.jpg" alt="Edison" fill className="object-cover" />
            </div>
            <p className="mt-4 text-center font-serif text-sm text-zinc-600">@edison</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2, zIndex: 30 }}
            className="absolute left-1/2 -translate-x-1/2 rotate-[4deg] mt-8 bg-white p-3 pb-12 shadow-2xl border border-zinc-200"
          >
            <div className="w-56 h-64 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="/photo2.jpg" alt="Edison" fill className="object-cover" />
            </div>
            <p className="mt-4 text-center font-serif text-sm text-zinc-600">@codewithedison</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
