"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const PHOTOS = [
  { src: "/photo1.jpeg", alt: "Edison", caption: "@edison", rotate: -6, xOffset: "-25%" },
  { src: "/photo2.jpeg", alt: "Edison", caption: "@codewithedison", rotate: 4, xOffset: "0%" },
];

export function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
          {PHOTOS.map((photo, index) => (
            <motion.div 
              key={index}
              initial={{ rotate: photo.rotate, x: photo.xOffset }}
              animate={{ 
                rotate: activeIndex === index ? 0 : photo.rotate,
                scale: activeIndex === index ? 1.1 : 1,
                zIndex: activeIndex === index ? 50 : 10 + index
              }}
              whileHover={{ 
                scale: activeIndex === index ? 1.1 : 1.05,
                rotate: activeIndex === index ? 0 : photo.rotate / 2,
                zIndex: 60
              }}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="absolute cursor-pointer bg-white p-3 pb-12 shadow-2xl border border-zinc-200 dark:border-zinc-800 transition-shadow duration-300"
              style={{ left: "50%", marginLeft: "-112px" /* Half of width to center */ }}
            >
              <div className="w-56 h-64 overflow-hidden relative transition-all duration-500">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
              </div>
              <p className="mt-4 text-center font-serif text-sm text-zinc-600 dark:text-zinc-500">{photo.caption}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
