"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
  "/project1.jpg",
  "/project2.jpg",
  "/project3.jpg",
  "/project4.jpg",
];

export function MovingPictures() {
  // Duplicate images for seamless infinite scroll
  const scrollingImages = [...IMAGES, ...IMAGES, ...IMAGES];

  return (
    <section className="relative w-full overflow-hidden py-12 bg-white dark:bg-[#030303]">
      <div className="flex w-max">
        <motion.div
          animate={{
            x: [0, -1920], // Adjusted based on image widths
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 px-4"
        >
          {scrollingImages.map((src, index) => (
            <div 
              key={`${src}-${index}`}
              className="relative w-[300px] md:w-[450px] aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/5 flex-shrink-0"
            >
              <Image 
                src={src} 
                alt="Project Preview" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}
