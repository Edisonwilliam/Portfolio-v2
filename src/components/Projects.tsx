"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Lock } from "lucide-react";
import Link from "next/link";
import { FEATURED_PROJECTS, MORE_PROJECTS } from "@/data/projects";

// ─── Stack tag component ───────────────────────────────────────────────────────
function StackTag({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
      {label}
    </span>
  );
}

// ─── Individual project card ───────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof FEATURED_PROJECTS)[number];
  index: number;
}) {
  const isPrivate = project.repoUrl === "private";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group block rounded-3xl border border-zinc-200 dark:border-zinc-800 p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="px-2 pb-2 space-y-4">
        {/* Title + tagline */}
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <StackTag key={tech} label={tech} />
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-sm font-semibold text-zinc-900 dark:text-zinc-50 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            Case study <ArrowRight size={13} aria-hidden="true" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-300 transition-colors hover:border-zinc-400 dark:hover:border-zinc-500 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Live site <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}

          {!isPrivate ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-300 transition-colors hover:border-zinc-400 dark:hover:border-zinc-500 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              <Github size={13} aria-hidden="true" /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-400 dark:text-zinc-500 cursor-not-allowed select-none">
              <Lock size={13} aria-hidden="true" /> Private repo
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Projects section ──────────────────────────────────────────────────────────
export function Projects() {
  return (
    <section
      id="work"
      className="max-w-5xl mx-auto px-6 py-24"
      aria-labelledby="projects-heading"
    >
      {/* Selected work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 mb-12"
      >
        <h2
          id="projects-heading"
          className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Selected Work
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400">
          Full-stack projects I designed, built, and deployed end to end.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* More work */}
      {MORE_PROJECTS.length > 0 && (
        <>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8"
          >
            More Work
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MORE_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
