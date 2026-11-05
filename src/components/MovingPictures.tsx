"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";

// Project image map — meaningful alt texts, not "Project Preview"
const IMAGES = [
  { src: "/project4.jpg", alt: "DevTrack — freelancer management dashboard" },
  { src: "/project3.jpg", alt: "CampusConnect — student marketplace platform" },
  { src: "/project5.jpg", alt: "TableFlow — restaurant reservation app" },
  { src: "/project6.jpg", alt: "Forme Living — luxury furniture e-commerce" },
  { src: "/project1.jpg", alt: "Artsy — art e-commerce platform" },
  { src: "/project2.jpg", alt: "Artlabs — creative studio landing page" },
];

export function MovingPictures() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden py-12 bg-white dark:bg-[#030303]"
      aria-label="Project screenshots"
    >
      {/*
       * Accessibility pattern:
       * - Real image set has meaningful alt text and is accessible
       * - Clone set is aria-hidden to avoid screen reader duplication
       */}
      <div
        className={`flex w-max gap-4 px-4 ${
          prefersReducedMotion ? "" : "animate-marquee"
        }`}
      >
        {/* Real set — read by screen readers */}
        {IMAGES.map(({ src, alt }) => (
          <div
            key={src}
            className="relative w-[300px] md:w-[450px] aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/5 flex-shrink-0"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 300px, 450px"
              className="object-cover"
            />
          </div>
        ))}
        {/* Clone set — aria-hidden, visual continuity only */}
        {IMAGES.map(({ src, alt }) => (
          <div
            key={`clone-${src}`}
            className="relative w-[300px] md:w-[450px] aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/5 flex-shrink-0"
            aria-hidden="true"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 300px, 450px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
