"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Both captions use the canonical handle @CodeEdison
const PHOTOS = [
  {
    src: "/photo1.jpeg",
    alt: "Edison William",
    caption: "@CodeEdison",
    rotate: -6,
    xOffset: "-25%",
  },
  {
    src: "/photo2.jpeg",
    alt: "Edison William",
    caption: "@CodeEdison",
    rotate: 4,
    xOffset: "0%",
  },
];

export function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="max-w-3xl mx-auto px-6 py-24"
      aria-labelledby="about-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2
          id="about-heading"
          className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          About
        </h2>

        <div className="text-lg text-zinc-600 dark:text-zinc-400 space-y-5 leading-relaxed">
          <p>
            I&apos;m a Nigerian developer who started on the frontend and grew into
            building complete products. From November 2025 to September 2026 I
            worked as a Frontend Developer at{" "}
            <a
              href="https://myartelab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-zinc-50 underline underline-offset-2 hover:no-underline"
            >
              MyArtelab
            </a>
            , contributing to frontend development and building responsive,
            user-friendly interfaces with modern web technologies.
          </p>
          <p>
            On my own projects I handle the whole stack: data modelling,
            authentication, payments, and deployment. I care about code that
            other people can maintain and interfaces people don&apos;t have to think
            about.
          </p>
          <p>
            I work with React, Next.js, TypeScript, Node.js, Express, MongoDB,
            and PostgreSQL. Currently available for freelance projects and
            full-time roles.
          </p>
        </div>

        {/* Polaroid Stack */}
        <div
          className="relative h-96 mt-16 flex items-center justify-center"
          aria-label="Photos of Edison William"
        >
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ rotate: photo.rotate, x: photo.xOffset }}
              animate={{
                rotate: activeIndex === index ? 0 : photo.rotate,
                scale: activeIndex === index ? 1.1 : 1,
                zIndex: activeIndex === index ? 50 : 10 + index,
              }}
              whileHover={{
                scale: activeIndex === index ? 1.1 : 1.05,
                rotate: activeIndex === index ? 0 : photo.rotate / 2,
                zIndex: 60,
              }}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="absolute cursor-pointer bg-white p-3 pb-12 shadow-2xl border border-zinc-200 dark:border-zinc-800 transition-shadow duration-300"
              style={{ left: "50%", marginLeft: "-112px" }}
            >
              <div className="w-56 h-64 overflow-hidden relative transition-all duration-500">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center font-serif text-sm text-zinc-600 dark:text-zinc-500">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
