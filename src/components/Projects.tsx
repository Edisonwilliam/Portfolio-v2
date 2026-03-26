"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 mb-16 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Here's What I've Been Up To.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group block rounded-3xl border border-zinc-200 dark:border-zinc-800 p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="px-2 pb-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-sm font-semibold text-zinc-900 dark:text-zinc-50 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95"
              >
                View Project <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
